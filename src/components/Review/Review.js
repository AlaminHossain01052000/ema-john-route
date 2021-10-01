import React from 'react';

const Review = props => {
    const { name, quantity, price, key } = props.product;
    const { handleRemove } = props;
    return (
        <div className="product">
            <div>
                <h2>{name}</h2>
                <h3>{price}</h3>
                <h3>{quantity}</h3>
                <button onClick={() => handleRemove(key)} className="btn-regular">Remove</button>
            </div>
        </div>
    );
};

export default Review;