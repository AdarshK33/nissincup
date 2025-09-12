import { useEffect } from "react";
import { useGlobalLoaderContext } from "./GlobalLoader";

function GlobalSuspenseLoader() {
  const { showLoader, hideLoader } = useGlobalLoaderContext();

  useEffect(() => {
    showLoader();
    return () => hideLoader();
  }, [showLoader, hideLoader]);

  return <>loading....</>; // optional text (won’t show if your loader is overlayed globally)
}

export default GlobalSuspenseLoader;
