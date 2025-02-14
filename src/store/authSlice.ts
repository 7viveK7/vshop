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
  cartList:[]
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
    setLogout: (state) => {
      return initialState
    },
    setCartList(state, action: PayloadAction<any[]>){
        state.cartList.push(action.payload)
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setLogin, setLogout, setLoading,setCartList } = authSlice.actions;
export default authSlice.reducer;