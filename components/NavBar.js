import { useStoreActions, useStoreState } from "easy-peasy";
import Link from "next/link";
import Router from "next/router";
import { useEffect } from "react";
import { appRoutes } from "../configs/routes";

const NavBar = () => {
  const user = useStoreState((state) => state.auth.currentUser);
  const isUserLoggedIn = useStoreState((state) => state.auth.isUserLoggedIn);
  const logoutUser = useStoreActions((state) => state.auth.logoutUser);

  const logout = (e) => {
    e.preventDefault();
    logoutUser();
    Router.replace(appRoutes.login);
  };

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard">
            <a>Dashboard</a>
          </Link>
        </li>

        {!isUserLoggedIn && (
          <li>
            <Link href="/register">
              <a>Register</a>
            </Link>
          </li>
        )}

        {!isUserLoggedIn && (
          <li>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </li>
        )}

        {isUserLoggedIn && (
          <li>
            <a onClick={logout}>Lougout</a>
          </li>
        )}
      </ul>
      <style jsx>
        {`
          nav {
            display: flex;
            justify-content: flex-end;
            padding-right: 20px;
            background: #333;
            width: 100vw;
          }
          ul {
            display: flex;
            list-style: none;
            padding: 10px;
          }
          li {
            padding: 10px;
          }

          a {
            color: #eee;
          }
        `}
      </style>
    </nav>
  );
};

export default NavBar;
