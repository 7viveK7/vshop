import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: string;
  email?: string;
  password?: string;
  // Add other user properties as needed
}

interface AuthState {
  user: User | null;
  loading: boolean;
  cartList: any[];
}



const initialState: AuthState = {
  user: null,
  loading: true,
  cartList: []
};
//selectors

// export const userSelector = (state: AuthState) => state.user;


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.loading = false;

    },
    setLogout: () => {
      return initialState
    },
    setCartList(state, action: PayloadAction<any[]>) {
      const index = state.cartList.findIndex((item) => item?.id === action.payload?.id);

      if (index !== -1) {
        // If the item exists, update its count
        state.cartList[index].count += 1;
      } else {
        // If the item doesn't exist, add it to the cart
        state.cartList.push({ ...action.payload, count: 1 });
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setLogin, setLogout, setLoading, setCartList } = authSlice.actions;
export default authSlice.reducer;





