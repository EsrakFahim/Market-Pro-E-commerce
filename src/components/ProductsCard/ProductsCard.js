import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ productData }) => {
      if (!productData) {
            console.error("Product data is undefined");
            return null;
      }

      const { _id, thumb, content } = productData;

      return (
            <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                  {/* Thumbnail Section */}
                  <Link
                        to={`/product-details/${_id}`}
                        className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                  >
                        <img
                              src={thumb.img.src || ""}
                              alt={thumb.img.alt || "Product image"}
                              className="w-auto max-w-unset"
                        />
                        <span className="product-card__badge bg-primary-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">
                              {thumb.badge.text}
                        </span>
                  </Link>

                  {/* Content Section */}
                  <div className="product-card__content mt-16">
                        <h6 className="link text-line-2">
                              <Link
                                    to={`/product-details/${_id}`}
                                    tabIndex={content.title.tabIndex}
                              >
                                    {content.title.text}
                              </Link>
                        </h6>

                        <div className="flex-align mb-20 mt-16 gap-6">
                              <span className="text-xs fw-medium text-gray-500">
                                    {content.rating.score}
                              </span>
                              <span className="text-15 fw-medium text-warning-600 d-flex">
                                    <i className="ph-fill ph-star" />
                              </span>
                              <span className="text-xs fw-medium text-gray-500">
                                    ({content.rating.reviews.count})
                              </span>
                        </div>

                        <div
                              className="progress w-100 bg-color-three rounded-pill h-4"
                              role="progressbar"
                              aria-label={content.progress.aria.label}
                              aria-valuenow={content.progress.aria.valuenow}
                              aria-valuemin={content.progress.aria.valuemin}
                              aria-valuemax={content.progress.aria.valuemax}
                        >
                              <div
                                    className="progress-bar bg-main-two-600 rounded-pill"
                                    style={{ width: "35%" }}
                              ></div>
                        </div>
                        <span className="text-gray-900 text-xs fw-medium mt-8">
                              {content.progress.soldText.text}
                        </span>

                        {/* Price Section */}
                        <div className="text-md fw-semibold">
                              <span className="text-gray-400 text-decoration-line-through">
                                    {content.price.original.amount}
                              </span>
                              <span className="text-heading">
                                    {content.price.discounted.amount}
                                    <span className="text-gray-500 fw-normal">
                                          /Qty
                                    </span>
                              </span>
                        </div>

                        {/* Add to Cart Button */}
                        <Link
                              to={content.addToCart.link || "/cart"}
                              className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                              tabIndex={content.addToCart.tabIndex}
                        >
                              {content.addToCart.text}{" "}
                              <i className="ph ph-shopping-cart" />
                        </Link>
                  </div>
            </div>
      );
};

export default ProductCard;
