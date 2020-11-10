import { useEffect, useState } from "react";
import protectedRoutes from "../../configs/auth";
import { withRouter } from "next/router";
import { useStoreActions, useStoreState } from "easy-peasy";
import Loader from "../loader/Loader";
import Cookies from "js-cookie";
import { appRoutes } from "../../configs/routes";

const ProtectRoute = ({ children, router }) => {
  const [checking, setChecking] = useState(true);
  const loginUrl = "/login";
  const user = useStoreState((state) => state.auth.user);
  const isUserLoggedIn = useStoreState((state) => state.auth.isUserLoggedIn);
  const loadUserFromCookies = useStoreActions(
    (state) => state.auth.loadUserFromCookies
  );

  const token = Cookies.get("token");

  if (token) loadUserFromCookies(token);

  useEffect(() => {
    const isProtectedRoute = !!protectedRoutes.find((r) => r === router.route);

    if (isProtectedRoute && !isUserLoggedIn) {
      console.log("PR:", isProtectedRoute);
      console.log("UserLoggedIn:", isUserLoggedIn);
      router
        .push(
          {
            pathname: loginUrl,
            query: { next: router.pathname },
          },
          loginUrl
        )
        .then(() => {
          setChecking(true);
        });

      console.log("Protected route");
    } else if (
      isUserLoggedIn &&
      (router.route === appRoutes.login || router.route === appRoutes.register)
    ) {
      setChecking(true);
    } else {
      setChecking(false);
    }
  });

  return <>{checking ? <Loader /> : children}</>;
};

export default withRouter(ProtectRoute);
