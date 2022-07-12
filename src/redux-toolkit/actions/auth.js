import { apiRequest, privateRequest } from "../../utils/api";
import { setLoggedIn, setToken } from "../slices/authSlice";
import toast from "react-hot-toast";
import { ServerRoutes } from "../../routes/serverRoutes";
import { dispatch } from "../store";

export const login = (body, setLoading) => {
  apiRequest(ServerRoutes.LOGIN, "post", body)
    .then((res) => {
      console.log("response", res);
      toast.success("Logged In Successfully!");
    })
    .catch((error) => {
      console.log(error);
      toast.error(error?.message);
      setLoading(false);
    });
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
