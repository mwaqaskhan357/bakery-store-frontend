import { privateRequest } from '../../utils/api';
import { ServerRoutes } from '../../routes/serverRoutes';
import { dispatch } from '../store';
import toast from 'react-hot-toast';
import { addOrder, setOrders } from '../slices/order';
import { clearCart } from '../slices/cartSlice';

export const getOrders = () => {
  privateRequest(ServerRoutes.GETORDERS, 'get')
    .then((res) => {
      dispatch(setOrders(res?.data?.data));
    })
    .catch((error) => {
      toast.error(error.response.data.error.message);
    });
};

export const placeOrders = (body, setState) => {
  privateRequest(ServerRoutes.PLACEORDER, 'post', body)
    .then((res) => {
      dispatch(addOrder(res?.data?.data));
      setState(true);
      dispatch(clearCart());
    })
    .catch((error) => {
      toast.error(error.response.data.error.message);
      setState(false);
    });
};
