import { useEffect, useState } from "react";
import protectedRoutes from "../../configs/auth";
import { withRouter } from "next/router";
import { useStoreState } from "easy-peasy";
import Loader from "../loader/Loader";

const ProtectRoute = ({ children, router }) => {
  const [checking, setChecking] = useState(true);
  const loginUrl = "/login";
  const user = useStoreState((state) => state.auth.user);
  const isUserLoggedIn = useStoreState((state) => state.auth.isUserLoggedIn);

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
    } else {
      setChecking(false);
    }
  });

  return <>{checking ? <Loader /> : children}</>;
};

export default withRouter(ProtectRoute);
