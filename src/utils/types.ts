export type BankingProduct = {
  id: string;
  name: string;
  description: string;
  icon: string;
  action: {
    buttonText: string;
    navigateTo: string;
    buttonVariant: 'default' | 'secondary' | 'outline';
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
