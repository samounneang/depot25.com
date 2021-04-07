import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function Product(props) {
  const { product } = props;
  return (
    <div key={this.product._id} className="card">
      <Link to={`/product/${this.product._id}`}>
        <img className="medium" src={this.product.image} alt={this.product.name} />
      </Link>
      <div className="card-body">
        <Link to={`/product/${this.product._id}`}>
          <h2>{this.product.name}</h2>
        </Link>
        <Rating
          rating={this.product.rating}
          numReviews={this.product.numReviews}
        ></Rating>
        <div className="row">
          <div className="price">${this.product.price}</div>
          <div>
            <Link to={`/seller/${this.product.seller._id}`}>
              {this.product.seller.seller.name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
