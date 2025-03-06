import { createAsyncThunk, createSlice,  } from '@reduxjs/toolkit';
// import { create } from 'domain';

// interface User {
//   id: string;
//   email?: string;
//   password?: string;
//   // Add other user properties as needed
// }

interface ProductState {
data: any[];
status: string;
}



const initialState: ProductState = {
 data: [],
 status: 'idle',
};


const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    
    builder
    .addCase(getProducts.pending, (state) => {
        state.status = "loading"})
    
    .addCase(getProducts.fulfilled, (state, action) => {
      state.data = action.payload})
      .addCase(getProducts.rejected, (state) => {
        state.status = "failed"
      })
    }
});

export default productSlice.reducer;

export const getProducts = createAsyncThunk('products/getProducts', async () => {
  const response = await fetch('https://fakestoreapi.com/products')
  const data = await response.json()
  return data
})

