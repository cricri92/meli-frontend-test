import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {PRODUCT_DESCRIPTION} from "pages/products/components/ProductDetailDescription/mockup";

import './styles.scss';

class ProductDetailDescription extends Component  {
	constructor(props) {
		super(props);

		this.state = {
			productId: props.product.id,
			productDescription: null
		};
	}

	componentDidMount() {
		console.log(this.props.product);
		this.setState({
			productDescription: PRODUCT_DESCRIPTION
		})
	}

  render() {
		const { productDescription } = this.state;

		return (
			productDescription ?
				<div className="product-detail-description">
					<h2 className="product-detail-description__title">
						Descripción del producto
					</h2>
					<p className="product-detail-description__text">
						{productDescription.plain_text}
					</p>
				</div>
				:
				null
		);
	}
}

ProductDetailDescription.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductDetailDescription;