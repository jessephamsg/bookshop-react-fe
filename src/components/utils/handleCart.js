export default {
    addOneToCart(cartState, cartTotalState, addedItem) {
        let updatedCart = null;
        (cartState === null) ? updatedCart = [addedItem]: updatedCart = [addedItem, ...cartState];
        const updatedTotal = cartTotalState + addedItem.raw.discountedPrice;
        window.localStorage.setItem('cart', JSON.stringify(updatedCart));
        window.localStorage.setItem('total', JSON.stringify(updatedTotal));
        const result = {
            updatedCart,
            updatedTotal
        }
        return result
    },
    deleteByItemID(cartTotalState, itemKey) {
        const currentCart = JSON.parse(window.localStorage.getItem('cart'));
        let itemIndex = 0;
        for (const [index, item] of currentCart.entries()) {
            if (item.raw.id === itemKey) itemIndex = index;
        }
        const total = cartTotalState - currentCart[itemIndex].raw.discountedPrice
        currentCart.splice(itemIndex, 1);
        window.localStorage.setItem('total', JSON.stringify(total));
        window.localStorage.setItem('cart', JSON.stringify(currentCart));
        const result = {
            total,
            currentCart
        }
        return result
    },
    getAllCartItems () {
        const currentCart = JSON.parse(window.localStorage.getItem('cart'));
        const currentTotal = JSON.parse(window.localStorage.getItem('total'));
        const result = {
            currentCart,
            currentTotal
        }
        return result
    }
}