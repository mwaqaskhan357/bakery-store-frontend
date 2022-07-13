import { apiRequest, privateRequest } from "../../utils/api";
import { ServerRoutes } from "../../routes/serverRoutes";
import { dispatch } from "../store";
import { setLoggedIn, setToken } from "../slices/authSlice";
import toast from "react-hot-toast";

export const login = (body, setLoading) => {
  return apiRequest(ServerRoutes.LOGIN, "post", body);
};
export const register = (body, setLoading) => {
  return apiRequest(ServerRoutes.REGISTER, "post", body);
};

export const logout = () => {
  privateRequest(ServerRoutes.LOGOUT, "get")
    .then((res) => {
      toast.success("Logout successfully");
      dispatch(setToken(""));
      dispatch(setLoggedIn(false));
    })
    .catch((error) => {
      toast.error(error.response.data.error.message);
    });
};
