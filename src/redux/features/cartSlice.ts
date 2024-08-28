// src/redux/slices/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TProduct = {
    _id: string,
    name: string;
    price: number;
    stockQuantity: number;
    description: string;
    category: string;
    ratings: number;
    image: string;
};

type CartItem = TProduct & { quantity: number };

type CartState = {
    items: CartItem[];
    totalPrice: number;
};

const initialState: CartState = {
    items: [],
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<TProduct>) => {
            const existingItem = state.items.find(item => item.name === action.payload.name);
            console.log(existingItem);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            state.totalPrice += action.payload.price;
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            const itemIndex = state.items.findIndex(item => item.name === action.payload);
            if (itemIndex > -1) {
                const item = state.items[itemIndex];
                state.totalPrice -= item.price * item.quantity;
                state.items.splice(itemIndex, 1);
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.totalPrice = 0;
        },
        decreaseQuantity: (state, action: PayloadAction<TProduct>) => {
            const existingItem = state.items.find(item => item.name === action.payload.name);
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                } else {
                    // Optionally, you can remove the item from the cart if the quantity is 1 and they want to decrease it further.
                    state.items = state.items.filter(item => item.name !== action.payload.name);
                }
            }
        }
       
    },
});

export const { addToCart, removeFromCart, clearCart, decreaseQuantity } = cartSlice.actions;

export const selectTotalItems = (state: CartState) =>
    state.items.reduce((total, item) => total + item.quantity, 0);
export default cartSlice.reducer;
