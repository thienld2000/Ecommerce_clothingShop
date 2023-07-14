import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}
const cartSlice = createSlice({
        name: 'cart',
        initialState,
        reducers: {
            addCart(state, action) {
                const ItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
                if (ItemIndex >= 0) {
                    cartQuantity: state.cartItems[ItemIndex].cartQuantity += 1;
                    toast.info(`increased ${action.payload.title} quantity`, {
                        position: "top-right",
                    })
                } else {
                    const tempProduct = { ...action.payload, cartQuantity: 1 }
                    state.cartItems.push(tempProduct);
                    toast.success(`${action.payload.title} Added to cart`, {
                        position: "top-right",
                    })
                }
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            },
            delCart(state, action) {
                const NextindexItem = state.cartItems.filter(cartItems => cartItems.id !== action.payload.id)
                state.cartItems = NextindexItem;
                toast.error(`Remove ${action.payload.title} from Cart`, {
                    position: "top-right",
                })
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            },
            minusCart(state, action) {
                const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
                if (state.cartItems[itemIndex].cartQuantity > 1) {
                    state.cartItems[itemIndex] = {
                        ...state.cartItems[itemIndex],
                        cartQuantity: state.cartItems[itemIndex].cartQuantity - 1,
                    };
                    toast.success(`Minus ${action.payload.title} from Cart`, {
                        position: "top-right",
                    })
                } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                    const NextindexItem = state.cartItems.filter(cartItems => cartItems.id !== action.payload.id)
                    state.cartItems = NextindexItem;
                    toast.error(`Remove ${action.payload.title} from Cart`, {
                        position: "top-right",
                    })
                }
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            }, 
            getTotals(state, action) {
                let { total, quantity } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const { price, cartQuantity } = cartItem;
                    const itemTotal = price * cartQuantity;
        
                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQuantity;
        
                    return cartTotal;
                },
                {
                    total: 0,
                    quantity: 0,
                }
                );
                total = parseFloat(total.toFixed(2));
                state.cartTotalQuantity = quantity;
                state.cartTotalAmount = total;
            },
            clearCart(state, action){
                state.cartItems = [];
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
                toast.error("Cart cleared", { position: "top-right" });
            },
        }
    });
    

export const { addCart, delCart, minusCart, clearCart, getTotals } = cartSlice.actions;
export default cartSlice.reducer;