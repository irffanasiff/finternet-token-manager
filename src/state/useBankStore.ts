import create from 'zustand';
import { persist } from 'zustand/middleware';

export type BankingProduct = {
  id: string;
  name: string;
  description: string;
  icon: string;
  action: {
    buttonText: string;
    navigateTo: string;
  };
};

export type CurrentAccountConfiguration = {
  types: Array<{
    id: string;
    name: string;
    selected: boolean;
  }>;
  interestRate: {
    label: string;
    value: number | null;
  };
  maximumTransferLimit: {
    label: string;
    value: number | null;
  };
  restrictedJurisdictions: {
    label: string;
    value: string | null;
  };
};

export type Configurations = {
  currentAccount: CurrentAccountConfiguration;
};

export type Data = {
  bankingProducts: BankingProduct[];
  configurations: Configurations;
};

interface BankProfile {
  name: string;
  description: string;
}

interface BankStore {
  profile: BankProfile;
  data: Data;
  updateProfile: (profile: Partial<BankProfile>) => void;
  addBankingProduct: (product: BankingProduct) => void;
  removeBankingProduct: (productId: string) => void;
  updateConfigurations: (configurations: Partial<Configurations>) => void;
}

const initialState: BankStore = {
  profile: {
    name: 'ABC Bank',
    description: 'ABC Bank of People',
  },
  data: {
    bankingProducts: [],
    configurations: {
      currentAccount: {
        types: [],
        interestRate: { label: 'Interest Rate', value: null },
        maximumTransferLimit: { label: 'Maximum Transfer Limit', value: null },
        restrictedJurisdictions: {
          label: 'Restricted Jurisdictions',
          value: null,
        },
      },
    },
  },
  updateProfile: () => {},
  addBankingProduct: () => {},
  removeBankingProduct: () => {},
  updateConfigurations: () => {},
};

const useBankStore = create<BankStore>()(
  persist(
    (set) => ({
      ...initialState,
      updateProfile: (newProfileData: Partial<BankProfile>) =>
        set((state) => ({
          profile: { ...state.profile, ...newProfileData },
        })),
      addBankingProduct: (newProduct: BankingProduct) =>
        set((state) => ({
          data: {
            ...state.data,
            bankingProducts: [...state.data.bankingProducts, newProduct],
          },
        })),
      removeBankingProduct: (productId: string) =>
        set((state) => ({
          data: {
            ...state.data,
            bankingProducts: state.data.bankingProducts.filter(
              (product) => product.id !== productId
            ),
          },
        })),
      updateConfigurations: (newConfigurations: Partial<Configurations>) =>
        set((state) => ({
          data: {
            ...state.data,
            configurations: {
              ...state.data.configurations,
              ...newConfigurations,
            },
          },
        })),
    }),
    {
      name: 'bank-store',
      getStorage: () => localStorage,
    }
  )
);

export default useBankStore;
