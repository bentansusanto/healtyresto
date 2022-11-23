import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// get Product
export const getProducts = createAsyncThunk("products/getProducts", async() => {
    const response = await axios.get(' http://localhost:5000/products')
    return response.data;
})

// get Category
export const getCategory = createAsyncThunk('category/getCategory', async(value) => {
    const response = await axios.get(`http://localhost:5000/product?category=Healty Food`);
    console.log(response.data);
})


const productEntity = createEntityAdapter({
    selectId : (product) => product.id
})

const productSlice = createSlice({
    name : "product",
    initialState : productEntity.getInitialState(),
    extraReducers : {
        [getProducts.fulfilled] : (state,action) => {
            productEntity.setAll(state, action.payload);
        },
        
    }
});

export const productSelectors = productEntity.getSelectors(state => state.product);
export default productSlice.reducer;