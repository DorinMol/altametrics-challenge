import {
  CircularProgress,
  Divider,
  Modal,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import store from '../../../../store';
import useGetInvoices from '../../hooks/useGetInvoices';
import InvoiceCard from '../invoiceCard';

const Restaurants = () => {
  const [openCard, setOpenCard] = useState(false);
  const [invoice, resetInvoice, setInvoice] = store((state) => [
    state.invoice,
    state.resetInvoice,
    state.setInvoice,
  ]);

  const { isFetching, data: invoices } = useGetInvoices();

  return (
    <>
      <Stack spacing={3}>
        <Typography variant="h5">Invoices</Typography>
        <Divider />
        {isFetching && <CircularProgress />}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 300 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Invoice ID</TableCell>
                <TableCell align="right">Vendor name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {invoices?.map((row) => (
                <TableRow
                  hover
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  onClick={() => {
                    setInvoice({ id: row.id });
                    setOpenCard(true);
                  }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.vendorName}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
      {/* Edit/Create modal */}
      <Modal
        open={openCard}
        onClose={() => {
          setOpenCard(false);
          if (invoice.id) resetInvoice();
        }}
      >
        <>
          <InvoiceCard invoiceId={invoice.id} setOpenCard={setOpenCard} />
        </>
      </Modal>
    </>
  );
};

export default Restaurants;
