import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import createInvoiceSlice, {
  initialInvoiceState,
  TInvoiceState,
} from '../features/invoice/store';
import createUserSlice, {
  initialUserState,
  TUserState,
} from '../features/user/store';

type StoreType = TUserState & TInvoiceState & { resetStore: () => void };

const store = create<StoreType>()(
  devtools(
    persist(
      (set, ...a) => ({
        ...createUserSlice(set, ...a),
        ...createInvoiceSlice(set, ...a),
        resetStore: () => {
          return set({
            user: initialUserState,
            invoice: initialInvoiceState,
          });
        },
      }),
      {
        name: 'altametrics',
      },
    ),
    {
      enabled: import.meta.env.VITE_ENV === 'development',
      name: 'altametrics',
    },
  ),
);

export default store;
