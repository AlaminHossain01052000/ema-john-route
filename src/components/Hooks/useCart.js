import { useEffect, useState } from "react"
import { getStoredCart } from "../../utilities/fakedb";

const useCart = products => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        if (products.length) {
            let savedCart = getStoredCart();
            let cartArray = [];
            for (const key in savedCart) {
                const addedProduct = products?.find(product => product.key === key)
                if (addedProduct) {
                    const quantity = savedCart[key]
                    addedProduct.quantity = quantity;
                    cartArray.push(addedProduct);

                }
            }
            setCart(cartArray);
        }
    }, [products])
    return [cart, setCart];


}
export default useCart;