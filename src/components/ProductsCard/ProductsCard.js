import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ productData }) => {
      if (!productData) {
            console.error("Product data is undefined");
            return null; // Return nothing if product data is missing
      }

      const { _id, thumb, content, className } = productData;

      return (
            <div className={className || ""}>
                  {/* Thumbnail Section */}
                  <Link
                        to={`/product-details/${_id}`}
                        className={thumb.className}
                  >
                        <img
                              src={thumb.img.src || ""}
                              alt={thumb.img.alt || "Product image"}
                              className={thumb.img.className}
                        />
                        <span className={thumb.badge.className}>
                              {thumb.badge.text}
                        </span>
                  </Link>

                  {/* Content Section */}
                  <div className={content.className}>
                        <h6 className={content.title.className}>
                              <Link
                                    to={`/product-details/${_id}`}
                                    tabIndex={content.title.tabIndex}
                              >
                                    {content.title.text}
                              </Link>
                        </h6>

                        <div className="flex-align mb-20 mt-16 gap-6">
                              <span className={content.rating.className}>
                                    {content.rating.score}
                              </span>
                              <span className={content.rating.stars.className}>
                                    <i className={content.rating.stars.icon} />
                              </span>
                              <span
                                    className={content.rating.reviews.className}
                              >
                                    ({content.rating.reviews.count})
                              </span>
                        </div>

                        <div
                              className={content.progress.className}
                              role="progressbar"
                              aria-label={content.progress.aria.label}
                              aria-valuenow={content.progress.aria.valuenow}
                              aria-valuemin={content.progress.aria.valuemin}
                              aria-valuemax={content.progress.aria.valuemax}
                        >
                              <div
                                    className={
                                          content.progress.progressBar.className
                                    }
                                    style={content.progress.progressBar.style}
                              ></div>
                        </div>
                        <span className={content.progress.soldText.className}>
                              {content.progress.soldText.text}
                        </span>

                        {/* Price Section */}
                        <div className={content.price.className}>
                              <span
                                    className={content.price.original.className}
                              >
                                    {content.price.original.amount}
                              </span>
                              <span
                                    className={
                                          content.price.discounted.className
                                    }
                              >
                                    {content.price.discounted.amount}
                                    <span
                                          className={
                                                content.price.discounted.perUnit
                                                      .className
                                          }
                                    >
                                          {
                                                content.price.discounted.perUnit
                                                      .text
                                          }
                                    </span>
                              </span>
                        </div>

                        {/* Add to Cart Button */}
                        <Link
                              to={content.addToCart.link || "#"}
                              className={content.addToCart.className}
                              tabIndex={content.addToCart.tabIndex}
                        >
                              {content.addToCart.text}{" "}
                              <i className={content.addToCart.icon} />
                        </Link>
                  </div>
            </div>
      );
};

export default ProductCard;
