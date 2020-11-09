import { action, thunk, computed } from "easy-peasy";
import API from "../../services/axios";

const userModel = {
  currentUser: {},
  loginUser: thunk(async (actions, user) => {
    const { data } = await API.post("/users/authenticate", user);
    // console.log(data);

    actions.setUser(data);
  }),
  isUserLoggedIn: computed(
    (state) => Object.keys(state.currentUser).length != 0
  ),
  setUser: action((state, user) => {
    state.currentUser = user;
  }),
  logoutUser: action((state, user) => {
    state.currentUser = {};
  }),
};

export default userModel;
