import { useEffect, useState, useCallback, useRef } from "react";

interface UseScrollPositionProps {
  threshold?: number;
  offset?: number;
  includeProgress?: boolean;
}

interface Section {
  id: string;
  top: number;
  bottom: number;
  height: number;
  center: number;
}

export function useScrollPosition({
  threshold = 100,
  offset = 100, // Offset para ajustar quando uma seção é considerada "ativa"
  includeProgress = false,
}: UseScrollPositionProps = {}) {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Usar useRef para armazenar as seções e evitar re-renderizações
  const sectionsRef = useRef<Section[]>([]);
  const lastUpdateRef = useRef<number>(Date.now());
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Função para calcular as posições das seções
  const calculateSectionPositions = useCallback(() => {
    const now = Date.now();
    // Evitar atualizações muito frequentes (máximo a cada 100ms)
    if (now - lastUpdateRef.current < 100) {
      return;
    }
    lastUpdateRef.current = now;

    const sectionElements = document.querySelectorAll("section[id]");
    const sectionsData = Array.from(sectionElements)
      .map((section) => {
        const rect = section.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = rect.bottom + window.scrollY;
        const height = rect.height;

        return {
          id: section.id,
          top: top - offset,
          bottom: bottom - offset,
          height,
          center: top + height / 2 - offset,
        };
      })
      .sort((a, b) => a.top - b.top);

    // Atualizar a referência sem causar re-renderização
    sectionsRef.current = sectionsData;
  }, [offset]);

  // Função para calcular o progresso do scroll
  const calculateScrollProgress = useCallback(() => {
    if (!includeProgress) return;

    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const progress = (scrollPosition / documentHeight) * 100;

    setScrollProgress(progress);
  }, [includeProgress]);

  // Função para encontrar a seção ativa
  const findActiveSection = useCallback(
    (scrollPosition: number) => {
      const sections = sectionsRef.current;
      if (!sections.length) return "inicio";

      // Margem de tolerância para evitar mudanças bruscas
      const tolerance = 50; // pixels de tolerância

      // Se estiver muito próximo do topo, retorna 'inicio'
      if (scrollPosition <= offset + tolerance) {
        return "inicio";
      }

      // Encontra a seção atual considerando a tolerância
      for (const section of sections) {
        const isInSection =
          scrollPosition >= section.top - tolerance &&
          scrollPosition <= section.bottom + tolerance;

        if (isInSection) {
          // Se for a seção "inicio", só considera ativa se estiver realmente no topo
          if (
            section.id === "inicio" &&
            scrollPosition > section.top + tolerance
          ) {
            continue;
          }
          return section.id;
        }
      }

      // Se não encontrar nenhuma seção, encontra a mais próxima
      let closestSection = sections[0]?.id || "inicio";
      let minDistance = Infinity;

      for (const section of sections) {
        const distance = Math.abs(scrollPosition - section.center);
        if (distance < minDistance) {
          minDistance = distance;
          closestSection = section.id;
        }
      }

      return closestSection;
    },
    [offset]
  );

  useEffect(() => {
    let ticking = false;
    let lastScrollY = window.scrollY;
    let lastActiveSection = "inicio";

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScroll = window.scrollY;

          // Só atualiza se houver uma mudança significativa no scroll
          if (Math.abs(currentScroll - lastScrollY) > 5) {
            setScrollY(currentScroll);
            setIsScrolled(currentScroll > threshold);

            // Atualiza a seção ativa
            const newActiveSection = findActiveSection(currentScroll);
            if (newActiveSection !== lastActiveSection) {
              setActiveSection(newActiveSection);
              lastActiveSection = newActiveSection;
            }

            // Calcula o progresso do scroll se necessário
            if (includeProgress) {
              calculateScrollProgress();
            }

            lastScrollY = currentScroll;
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    const handleResize = () => {
      // Debounce do resize para evitar múltiplas chamadas
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      resizeTimeoutRef.current = setTimeout(() => {
        calculateSectionPositions();
        // Recalcular a seção ativa após o resize
        const currentScroll = window.scrollY;
        const newActiveSection = findActiveSection(currentScroll);
        if (newActiveSection !== activeSection) {
          setActiveSection(newActiveSection);
        }
      }, 150);
    };

    // Inicializa
    calculateSectionPositions();
    handleScroll();

    // Adiciona event listeners
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, [
    threshold,
    calculateSectionPositions,
    findActiveSection,
    activeSection,
    includeProgress,
    calculateScrollProgress,
  ]);

  return {
    scrollY,
    isScrolled,
    activeSection,
    scrollProgress: includeProgress ? scrollProgress : undefined,
  };
}
