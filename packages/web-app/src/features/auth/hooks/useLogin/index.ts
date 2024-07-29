import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import store from '../../../../store';
import { request } from '../../../../utils/request';

type TLogin = {
  email: string;
  password: string;
};

type TLoginResponse = {
  accessToken: string;
};

const useLogin = () => {
  const setUser = store((state) => state.setUser);
  return useMutation({
    mutationKey: ['login'],
    mutationFn: ({ email, password }: TLogin): Promise<TLoginResponse> => {
      return request({
        url: 'auth/login',
        method: 'POST',
        data: {
          email,
          password,
        },
      });
    },
    onSuccess: ({ accessToken }: TLoginResponse) => {
      setUser({ token: accessToken });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default useLogin;
