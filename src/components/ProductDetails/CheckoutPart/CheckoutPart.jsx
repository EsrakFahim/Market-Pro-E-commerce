import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutPart = ({
      quantity,
      incrementQuantity,
      decrementQuantity
}) => {
      return (
            <div className="col-xl-3">
                  <div className="product-details__sidebar py-40 px-32 border border-gray-100 rounded-16">
                        <div className="mb-32">
                              <label
                                    htmlFor="delivery"
                                    className="h6 activePage mb-8 text-heading fw-semibold d-block"
                              >
                                    Delivery
                              </label>
                              <div className="flex-align border border-gray-100 rounded-4 px-16">
                                    <span className="text-xl d-flex text-main-600">
                                          <i className="ph ph-map-pin" />
                                    </span>
                                    <select defaultValue={1}
                                          className="common-input border-0 px-8 rounded-4"
                                          id="delivery"
                                    >
                                          <option value={1}>Maymansign</option>
                                          <option value={1}>Khulna</option>
                                          <option value={1}>Rajshahi</option>
                                          <option value={1}>Rangpur</option>
                                    </select>
                              </div>
                        </div>
                        <div className="mb-32">
                              <label
                                    htmlFor="stock"
                                    className="text-lg mb-8 text-heading fw-semibold d-block"
                              >
                                    Total Stock: 21
                              </label>
                              <span className="text-xl d-flex">
                                    <i className="ph ph-location" />
                              </span>
                              <div className="d-flex rounded-4 overflow-hidden">
                                    <button onClick={decrementQuantity}
                                          type="button"
                                          className="quantity__minus flex-shrink-0 h-48 w-48 text-neutral-600 bg-gray-50 flex-center hover-bg-main-600 hover-text-white"
                                    >
                                          <i className="ph ph-minus" />
                                    </button>
                                    <input
                                          type="number"
                                          className="quantity__input flex-grow-1 border border-gray-100 border-start-0 border-end-0 text-center w-32 px-16"
                                          id="stock"
                                          value={
                                                quantity
                                          } readOnly

                                    />
                                    <button onClick={incrementQuantity}
                                          type="button"
                                          className="quantity__plus flex-shrink-0 h-48 w-48 text-neutral-600 bg-gray-50 flex-center hover-bg-main-600 hover-text-white"
                                    >
                                          <i className="ph ph-plus" />
                                    </button>
                              </div>
                        </div>
                        <div className="mb-32">
                              <div className="flex-between flex-wrap gap-8 border-bottom border-gray-100 pb-16 mb-16">
                                    <span className="text-gray-500">Price</span>
                                    <h6 className="text-lg mb-0">$150.00</h6>
                              </div>
                              <div className="flex-between flex-wrap gap-8">
                                    <span className="text-gray-500">Shipping</span>
                                    <h6 className="text-lg mb-0">From $10.00</h6>
                              </div>
                        </div>
                        <Link
                              to="#"
                              className="btn btn-main flex-center gap-8 rounded-8 py-16 fw-normal mt-48"
                        >
                              <i className="ph ph-shopping-cart-simple text-lg" />
                              Add To Cart
                        </Link>
                        <Link
                              to="#"
                              className="btn btn-outline-main rounded-8 py-16 fw-normal mt-16 w-100"
                        >
                              Buy Now
                        </Link>
                        <div className="mt-32">
                              <div className="px-16 py-8 bg-main-50 rounded-8 flex-between gap-24 mb-14">
                                    <span className="w-32 h-32 bg-white text-main-600 rounded-circle flex-center text-xl flex-shrink-0">
                                          <i className="ph-fill ph-truck" />
                                    </span>
                                    <span className="text-sm text-neutral-600">
                                          Ship from <span className="fw-semibold">MarketPro</span>{" "}
                                    </span>
                              </div>
                              <div className="px-16 py-8 bg-main-50 rounded-8 flex-between gap-24 mb-0">
                                    <span className="w-32 h-32 bg-white text-main-600 rounded-circle flex-center text-xl flex-shrink-0">
                                          <i className="ph-fill ph-storefront" />
                                    </span>
                                    <span className="text-sm text-neutral-600">
                                          Sold by:{" "}
                                          <span className="fw-semibold">MR Distribution LLC</span>{" "}
                                    </span>
                              </div>
                        </div>
                        <div className="mt-32">
                              <div className="px-32 py-16 rounded-8 border border-gray-100 flex-between gap-8">
                                    <Link to="#" className="d-flex text-main-600 text-28">
                                          <i className="ph-fill ph-chats-teardrop" />
                                    </Link>
                                    <span className="h-26 border border-gray-100" />
                                    <div className="dropdown on-hover-item">
                                          <button className="d-flex text-main-600 text-28" type="button">
                                                <i className="ph-fill ph-share-network" />
                                          </button>
                                          <div className="on-hover-dropdown common-dropdown border-0 inset-inline-start-auto inset-inline-end-0">
                                                <ul className="flex-align gap-16">
                                                      <li>
                                                            <Link
                                                                  to="/https://www.facebook.com"
                                                                  className="w-44 h-44 flex-center bg-main-100 text-main-600 text-xl rounded-circle hover-bg-main-600 hover-text-white"
                                                            >
                                                                  <i className="ph-fill ph-facebook-logo" />
                                                            </Link>
                                                      </li>
                                                      <li>
                                                            <Link
                                                                  to="/https://www.twitter.com"
                                                                  className="w-44 h-44 flex-center bg-main-100 text-main-600 text-xl rounded-circle hover-bg-main-600 hover-text-white"
                                                            >
                                                                  <i className="ph-fill ph-twitter-logo" />
                                                            </Link>
                                                      </li>
                                                      <li>
                                                            <Link
                                                                  to="/https://www.linkedin.com"
                                                                  className="w-44 h-44 flex-center bg-main-100 text-main-600 text-xl rounded-circle hover-bg-main-600 hover-text-white"
                                                            >
                                                                  <i className="ph-fill ph-instagram-logo" />
                                                            </Link>
                                                      </li>
                                                      <li>
                                                            <Link
                                                                  to="/https://www.pinterest.com"
                                                                  className="w-44 h-44 flex-center bg-main-100 text-main-600 text-xl rounded-circle hover-bg-main-600 hover-text-white"
                                                            >
                                                                  <i className="ph-fill ph-linkedin-logo" />
                                                            </Link>
                                                      </li>
                                                </ul>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default CheckoutPart;