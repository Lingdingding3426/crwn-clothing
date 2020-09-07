import React from 'react';
import {connect} from 'react-redux';

import {toggleCartHidden} from '../../redux/cart/cart.action'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'

import {createStructuredSelector} from 'reselect'

import { ReactComponent as ShoppingIcon } from '../../asserts/shopping-bag.svg';

import './cart-icon.component.scss';

const CartIcon = ({toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon />
    <span className='item-count'>{itemCount}</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
