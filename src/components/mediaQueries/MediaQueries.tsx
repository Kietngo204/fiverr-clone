import { useMediaQuery } from "react-responsive";

function MediaQueries() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 640px) and (max-width: 1023.98px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 639.98px)" });

  return { isDesktop, isTablet, isMobile };
}

export default MediaQueries;
