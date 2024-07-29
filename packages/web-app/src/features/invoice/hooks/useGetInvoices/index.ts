import { Invoice } from '@altametrics/db';
import { useQuery } from '@tanstack/react-query';
import { request } from '../../../../utils/request';

const useGetInvoices = () => {
  return useQuery({
    queryKey: ['invoices'],
    queryFn: (): Promise<Invoice[]> =>
      request({ url: 'invoices', method: 'GET' }),
  });
};

export default useGetInvoices;
