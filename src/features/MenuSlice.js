import { createAsyncThunk, createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";

export const getMenus = createAsyncThunk("products/getProducts", async() => {
    axios.get('http://localhost:5000/product')
    .then((response) => {
        // console.log(response.data);
        return response.data;
    }).catch((err) => {
        console.log(err.response);
    });
})

const menuEntity = createEntityAdapter({
    selectId : (product) => product.id
});

const MenuSlice = createSlice ({
    name : "product",
    initialState : menuEntity.getInitialState(),
    reducers : {},
    extraReducers : {
        [getMenus.fulfilled] : (state, action) => {
            menuEntity.setAll(state, action.payload);
        },
    }
}) 

export const menuSelectors = menuEntity.getSelectors(state => state.product);
export default MenuSlice.reducer;