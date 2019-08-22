import React, { Component } from 'react';
import ProductListItem from '../product-list-item';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withProductstoreService } from '../hoc';
import { fetchProducts, productAddedToCart } from '../../actions';
import { compose } from '../../utils';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './product-list.css';

const ProductList = ({ products, onAddedToCart }) => {
  return (
    <ul className="product-list">
      {
        products.map((product) => {
          return (
            <li key={product.id}>
              <ProductListItem
                product={product}
                onAddedToCart={() => onAddedToCart(product.id)}/>
            </li>
          );
        })
      }
    </ul>
  );
};

class ProductListContainer extends Component {

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { products, loading, error, onAddedToCart } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <ProductList products={products} onAddedToCart={onAddedToCart}/>;
  }
}

const mapStateToProps = ({ productList: { products, loading, error }}) => {
  return { products, loading, error };
};

const mapDispatchToProps = (dispatch, { productstoreService }) => {

  return bindActionCreators({
    fetchProducts: fetchProducts(productstoreService),
    onAddedToCart: productAddedToCart
  }, dispatch);
};

export default compose(
  withProductstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(ProductListContainer);
