import CartActionTypes from "./cart.types";

// Action creator for toggling cart hidden state
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

// Action creator for adding an item to the cart
export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

// Action creator for clearing an item from the cart
export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});

// Action creator for removing an item from the cart
export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
});
