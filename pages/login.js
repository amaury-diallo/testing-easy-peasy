import { useStoreActions, useStoreState } from "easy-peasy";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { defaultRouteAfterLogin } from "../configs/routes";

const LoginPage = (props) => {
  const router = useRouter();
  const path = router.query.next ? router.query.next : defaultRouteAfterLogin;

  const user = useStoreState((state) => state.auth.currentUser);
  const { loginUser } = useStoreActions((actions) => actions.auth);
  const isUserLoggedIn = useStoreState((state) => state.auth.isUserLoggedIn);

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const { username, password } = inputs;

  // If the user is already logged in, redirect
  if (isUserLoggedIn) {
    router.replace(path);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const onLogin = () => {
    // When the user is succefully loggedIn
    loginUser(inputs).then(() => {
      router.replace(path);
    });
    // setTimeout(() => router.replace(path), 600);
  };

  // When the user is succefully loggedIn
  // useEffect(() => {

  // }, [isUserLoggedIn]);

  return (
    <div style={{ textAlign: "center" }}>
      <NavBar />
      <h1>Login</h1>
      <p>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={username}
          onChange={handleInputChange}
        />
      </p>
      <p>
        <input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
      </p>
      <button onClick={onLogin}>Login</button>
      <p>
        {user?.firstName} {user?.lastName}
      </p>
    </div>
  );
};

export default LoginPage;
