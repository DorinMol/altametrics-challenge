import { useQuery } from '@tanstack/react-query';
import { request } from '../../../../utils/request';

type TInvoiceResponse = {
  data: { total: number };
};

const useGetInvoicesTotal = () => {
  return useQuery({
    queryKey: ['invoices', 'total'],
    queryFn: (): Promise<TInvoiceResponse> =>
      request({ url: 'invoices/total', method: 'GET' }),
  });
};

export default useGetInvoicesTotal;
