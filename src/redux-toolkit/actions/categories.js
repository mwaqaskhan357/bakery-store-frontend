import { privateRequest } from "../../utils/api";
import { ServerRoutes } from "../../routes/serverRoutes";
import { dispatch } from "../store";
import toast from "react-hot-toast";
import { setCatgories, setFilterCatgories } from "../slices/categoriesSlice";

export const getCategories = () => {
  privateRequest(ServerRoutes.GETCATEGORIES, "get")
    .then((res) => {
      dispatch(setCatgories(res?.data?.data));
      dispatch(setFilterCatgories(res?.data?.data));
    })
    .catch((error) => {
      toast.error(error.response.data.error.message);
    });
};
