import { action, thunk, computed } from "easy-peasy";
import API from "../../services/axios";
import Cookies from "js-cookie";
import { appRoutes } from "../../configs/routes";
import { Router } from "next/router";

const userModel = {
  currentUser: {},
  loadUserFromCookies: thunk(async (actions, userToken) => {
    console.log("Got a token in the cookies, let's see if it is valid");
    API.defaults.headers.Authorization = `Bearer ${userToken}`;
    const { data: user } = await API.get("/users/current");
    console.log(user);
    if (user) actions.setUser(user);
  }),
  loginUser: thunk(async (actions, user) => {
    const { data } = await API.post("/users/authenticate", user);
    // console.log(data);
    Cookies.set("token", data.token, { expires: 60 });
    API.defaults.headers.Authorization = `Bearer ${data.token}`;

    actions.setUser(data);
  }),
  isUserLoggedIn: computed(
    (state) => Object.keys(state.currentUser).length != 0
  ),
  setUser: action((state, user) => {
    state.currentUser = user;
  }),
  logoutUser: thunk((actions) => {
    Cookies.remove("token");
    delete API.defaults.headers.Authorization;
    actions.setUser({});
  }),
};

export default userModel;
