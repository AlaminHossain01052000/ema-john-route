import React from 'react';
import { useHistory } from 'react-router';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useCart from '../Hooks/useCart';
import UseProducts from '../Hooks/UseProducts';
import Review from '../Review/Review';

const OrderReview = () => {
    const [products] = UseProducts();
    const [cart, setCart] = useCart(products);
    const history = useHistory();
    const handleRemove = key => {
        const newCart = cart?.filter(products => products.key !== key);
        setCart(newCart);
        deleteFromDb(key);
    }

    const handlePurchasing = () => {
        history.push("/purchase");
        setCart([]);
        clearTheCart();
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product => <Review
                        key={product.key}
                        handleRemove={handleRemove}
                        product={product}></Review>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlePurchasing} className="btn-regular"> Purchase</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;