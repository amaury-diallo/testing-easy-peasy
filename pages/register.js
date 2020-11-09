import { useStoreState } from "easy-peasy";
import { withRouter } from "next/router";
import Loader from "../components/loader/Loader";
import NavBar from "../components/NavBar";
import { defaultRouteAfterLogin } from "../configs/routes";

const RegisterPage = ({ router }) => {
  const isUserLoggedIn = useStoreState((state) => state.auth.isUserLoggedIn);

  if (isUserLoggedIn) router.replace(defaultRouteAfterLogin);
  return (
    <>
      <NavBar />
      <h1>RegisterPage</h1>
    </>
  );
};

export default withRouter(RegisterPage);
