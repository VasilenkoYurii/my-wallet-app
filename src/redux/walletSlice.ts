import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WalletState {
  address: string;
  balance: string;
}

const initialState: WalletState = {
  address: "",
  balance: "",
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    setBalance: (state, action: PayloadAction<string>) => {
      state.balance = action.payload;
    },
  },
});

export const { setAddress, setBalance } = walletSlice.actions;

export default walletSlice.reducer;
