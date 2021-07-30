export const cartListSelector = (state) => state.cart.items;
export const bookListSelector = (state) => state.book.list;
export const cartItemsSelector = (state) => state.cart.quantity;
export const showButtonSelector = (state) => state.book.showAddButton;
export const pageSelector = (state) => state.book.page;
export const loadingSelector = (state) => state.book.isLoading;
export const authSelector = (state) => state.ui.isAuthenticated;
