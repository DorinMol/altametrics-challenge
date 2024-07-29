import {
  Button,
  CircularProgress,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { useEffect } from 'react';
import store from '../../../../store';
import useGetInvoice from '../../hooks/useGetInvoice';

type TProps = {
  invoiceId: string;
  setOpenCard: (value: boolean) => void;
};

const InvoiceCard = ({ invoiceId, setOpenCard }: TProps) => {
  const { data: invoice, isLoading } = useGetInvoice(invoiceId);
  const [setInvoice, resetInvoice] = store((state) => [
    state.setInvoice,
    state.resetInvoice,
  ]);
  useEffect(() => {
    if (invoice) {
      setInvoice(invoice);
    }
  }, [invoice, setInvoice]);

  return (
    <Paper
      elevation={6}
      sx={{
        width: { xs: 300, md: 500 },
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        position: 'absolute' as const,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      {isLoading && <CircularProgress />}
      <Stack spacing={1}>
        <Button
          onClick={() => {
            setOpenCard(false);
            resetInvoice();
          }}
          variant="outlined"
          sx={{
            alignSelf: 'flex-end',
          }}
        >
          Close
        </Button>
        <Typography variant="h5">{invoice?.vendorName}</Typography>
        <Typography variant="body2">{invoice?.description}</Typography>
        <Typography variant="body2">{`$${invoice?.amount}`}</Typography>
        {invoice?.dueDate && (
          <Typography variant="body2">
            {`Due Date: ${new Date(invoice.dueDate).toLocaleDateString()}`}
          </Typography>
        )}
        <Typography variant="body2">
          Paid: {invoice?.paid ? 'Yes' : 'No'}
        </Typography>
      </Stack>
    </Paper>
  );
};

export default InvoiceCard;
