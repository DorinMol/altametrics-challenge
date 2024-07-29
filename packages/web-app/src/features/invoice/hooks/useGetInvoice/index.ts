import { Invoice } from '@altametrics/db';
import { useQuery } from '@tanstack/react-query';
import { request } from '../../../../utils/request';

const useGetInvoice = (invoiceId: string) => {
  return useQuery({
    queryKey: ['invoices', invoiceId],
    queryFn: (): Promise<Invoice> =>
      request({
        url: `/invoices/${invoiceId}`,
        method: 'GET',
      }),
    enabled: !!invoiceId,
  });
};

export default useGetInvoice;
