import React, { useState } from 'react';
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
// import CustomButton from "../custom-button/custom-button.component";
import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    const [clicked, setClicked] = useState(false);

    const handleButtonClick = () => {
        setClicked(true);
        addItem(item);
    };

    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>₹{price}</span>
            </div>
            <CustomButton onClick={handleButtonClick} inverted clicked={clicked}>
                BOOK NOw
            </CustomButton>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})


const CustomButton = ({ children, onClick, inverted, clicked }) => (
    <button
      className={`custom-button ${inverted ? 'inverted' : ''} ${clicked ? 'clicked' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
  

export default connect(null, mapDispatchToProps)(CollectionItem);
