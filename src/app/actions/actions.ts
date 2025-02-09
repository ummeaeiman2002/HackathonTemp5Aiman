import { Product } from "../../../types/products";


export const addToCart = (product : Product) => {
    const cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]')

    const existingProductIndex = cart.findIndex(item =>item._id === product._id)
    if (existingProductIndex > -1) {

        cart[existingProductIndex].isNew = false;
    } else {

        cart.push({
            ...product,
            isNew: true,
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart))
}

export const removeFromCart = (productId : string) => {
    let cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]')
    cart = cart.filter(item => item._id!==productId)
    localStorage.setItem('cart', JSON.stringify(cart))
}
export const updateCartQuantity = (productId : string, quantity : number) => {
    const cart :Product[] = JSON.parse(localStorage.getItem('cart') || '[]')
    const productIndex = cart.findIndex(item => item._id === productId)

    if(productIndex > -1) {
        cart[productIndex].isNew = quantity === 1;
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}
   export const getCardItems =() : Product[] => {
    return JSON.parse(localStorage.getItem('cart') || '[]')
   }
