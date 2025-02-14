import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { create } from 'domain';

interface User {
  id: string;
  email?: string;
  password?: string;
  // Add other user properties as needed
}

interface ProductState {
data: any[];
status: string;
}



const initialState: ProductState = {
 data: [],
 status: 'idle',
};
//selectors

// export const userSelector = (state: AuthState) => state.user;


const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
//    fetchProducts: (state, action: PayloadAction<any[]>) => {
//         state.data = action.payload;
//    }
  },
  extraReducers: (builder) => {
    
    builder
    .addCase(getProducts.pending, (state, action) => {
        state.status = "loading"})
    
    .addCase(getProducts.fulfilled, (state, action) => {
      state.data = action.payload})
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "failed"
      })
    }
});

// export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

// export const getProducts =()=>{

export const getProducts = createAsyncThunk('products/getProducts', async () => {
  const response = await fetch('https://fakestoreapi.com/products')
  const data = await response.json()
  return data
})

// export const getProducts =()=>{
//     return async function getProductsThunk(dispatch,getState){
//         const response = await fetch('https://fakestoreapi.com/products')
//         const data = await response.json()
//         dispatch(fetchProducts(data))
//     }
// }
