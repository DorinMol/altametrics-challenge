import { Invoice } from '@altametrics/db';
import { StateCreator } from 'zustand';

type TInvoiceDefinition = Invoice;

type TInvoice = {
  invoice: TInvoiceDefinition;
};

export type TInvoiceState = TInvoice & {
  setInvoice(invoice: Partial<TInvoiceDefinition>): void;
  resetInvoice(): void;
};

export const initialInvoiceState: TInvoiceDefinition = {
  id: '',
  userId: '',
  vendorName: '',
  description: '',
  paid: false,
  amount: 0,
  dueDate: new Date(),
  createdAt: new Date(),
  updatedAt: new Date(),
};

const createInvoiceSlice: StateCreator<
  TInvoiceState,
  [['zustand/devtools', unknown]],
  []
> = (set) => ({
  invoice: initialInvoiceState,
  resetInvoice: () => set({ invoice: initialInvoiceState }),
  setInvoice: (invoice) =>
    set(
      (state) => ({
        invoice: { ...state.invoice, ...invoice },
      }),
      false,
      {
        type: 'setInvoice',
        invoice,
      },
    ),
});

export default createInvoiceSlice;
