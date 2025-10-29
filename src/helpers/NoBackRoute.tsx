// NoBackRoute.tsx
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const NoBackRoute = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.history.pushState(null, "", window.location.href);

    const handlePopState = () => {
      // Prevent back navigation
      window.history.pushState(null, "", window.location.href);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [location, navigate]);

  return <Outlet />; // render child routes normally
};

export default NoBackRoute;
