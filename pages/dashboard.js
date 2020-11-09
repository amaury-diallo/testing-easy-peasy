import { useStoreState } from "easy-peasy";
import Loader from "../components/loader/Loader";
import NavBar from "../components/NavBar";

const DashboardPage = (props) => {
  const user = useStoreState((state) => state.auth.currentUser);
  const isUserLoggedIn = useStoreState((state) => state.auth.isUserLoggedIn);

  if (!isUserLoggedIn) return <Loader />;
  return (
    <>
      <NavBar />
      <h1>DashboardPage</h1>

      <h2>Welcome {user.username}</h2>
    </>
  );
};

export default DashboardPage;
