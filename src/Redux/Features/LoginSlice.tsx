import { createSlice } from "@reduxjs/toolkit";
import { addUserToLocalStorage, getUserFromLocalStorage } from "./localStorage";
import { Root2 } from "../../Constants/UserTypes";
import { useGetUsersQuery } from "../Api/UserApi";

interface InitialStateType {
  userLogin: { email: string; password: string };
  users: Root2[] | undefined;
  isSideBarOpen: boolean;
}

const initialState: InitialStateType = {
  userLogin: getUserFromLocalStorage(),
  users: [],
  isSideBarOpen: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    updateUser(state, action) {
      state.userLogin = action.payload;
      addUserToLocalStorage(action.payload);
    },
    addToUsers(state, action) {
      state.users = action.payload;
    },
    updateStatus(state, action) {
      state.users = state.users?.map((user) =>
        user.id === action.payload ? { ...user, status: "blacklist" } : user
      );
    },
    openSideBar(state) {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
  },
});
export default loginSlice.reducer;
export const { updateUser, addToUsers, updateStatus, openSideBar } = loginSlice.actions;
