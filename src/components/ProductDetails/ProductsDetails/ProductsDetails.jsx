import React from 'react';
import { Link } from 'react-router-dom';
import SaleTimer from '../SaleTimer/SaleTimer';

const ProductsDetails = ({ product, timeLeft }) => {
      return (
            <div className="col-xl-6">
                  <SaleTimer timeLeft={timeLeft} />
                  <div className="product-details__content">
                        <h5 className="mb-12">
                              HP Chromebook With Intel Celeron, 4GB Memory &amp; 64GB eMMC -
                              Modern Gray
                        </h5>
                        <div className="flex-align flex-wrap gap-12">
                              <div className="flex-align gap-12 flex-wrap">
                                    <div className="flex-align gap-8">
                                          <span className="text-15 fw-medium text-warning-600 d-flex">
                                                <i className="ph-fill ph-star" />
                                          </span>
                                          <span className="text-15 fw-medium text-warning-600 d-flex">
                                                <i className="ph-fill ph-star" />
                                          </span>
                                          <span className="text-15 fw-medium text-warning-600 d-flex">
                                                <i className="ph-fill ph-star" />
                                          </span>
                                          <span className="text-15 fw-medium text-warning-600 d-flex">
                                                <i className="ph-fill ph-star" />
                                          </span>
                                          <span className="text-15 fw-medium text-warning-600 d-flex">
                                                <i className="ph-fill ph-star" />
                                          </span>
                                    </div>
                                    <span className="text-sm fw-medium text-neutral-600">
                                          4.7 Star Rating
                                    </span>
                                    <span className="text-sm fw-medium text-gray-500">
                                          (21,671)
                                    </span>
                              </div>
                              <span className="text-sm fw-medium text-gray-500">|</span>
                              <span className="text-gray-900">
                                    {" "}
                                    <span className="text-gray-400">SKU:</span>EB4DRP{" "}
                              </span>
                        </div>
                        <span className="mt-32 pt-32 text-gray-700 border-top border-gray-100 d-block" />
                        <p className="text-gray-700">
                              Geared up and ready to roll: Get the responsive performance
                              you're looking for with an Intel processor and 64 GB eMMC
                              storage. Stay productive with compatible apps like Microsoft
                              Office, Google Workspace, and more. The Chrome OS gives you a
                              fast, simple, and secure online experience with built-in virus
                              protection.
                        </p>
                        <div className="my-32 flex-align gap-16 flex-wrap">
                              <div className="flex-align gap-8">
                                    <div className="flex-align gap-8 text-main-two-600">
                                          <i className="ph-fill ph-seal-percent text-xl" />
                                          -10%
                                    </div>
                                    <h6 className="mb-0">USD 320.99</h6>
                              </div>
                              <div className="flex-align gap-8">
                                    <span className="text-gray-700">Regular Price</span>
                                    <h6 className="text-xl text-gray-400 mb-0 fw-medium">
                                          USD 452.99
                                    </h6>
                              </div>
                        </div>
                        <div className="my-32 flex-align flex-wrap gap-12">
                              <Link
                                    to="#"
                                    className="px-12 py-8 text-sm rounded-8 flex-align gap-8 text-gray-900 border border-gray-200 hover-border-main-600 hover-text-main-600"
                              >
                                    Monthyly EMI USD 15.00
                                    <i className="ph ph-caret-right" />
                              </Link>
                              <Link
                                    to="#"
                                    className="px-12 py-8 text-sm rounded-8 flex-align gap-8 text-gray-900 border border-gray-200 hover-border-main-600 hover-text-main-600"
                              >
                                    Shipping Charge
                                    <i className="ph ph-caret-right" />
                              </Link>
                              <Link
                                    to="#"
                                    className="px-12 py-8 text-sm rounded-8 flex-align gap-8 text-gray-900 border border-gray-200 hover-border-main-600 hover-text-main-600"
                              >
                                    Security &amp; Privacy
                                    <i className="ph ph-caret-right" />
                              </Link>
                        </div>
                        <span className="mt-32 pt-32 text-gray-700 border-top border-gray-100 d-block" />
                        <div className="mt-32">
                              <h6 className="mb-16">Quick Overview</h6>
                              <div className="flex-between align-items-start flex-wrap gap-16">
                                    <div>
                                          <span className="text-gray-900 d-block mb-12">
                                                Color:
                                                <span className="fw-medium">Mineral Silver</span>
                                          </span>
                                          <div className="color-list flex-align gap-8">
                                                <button
                                                      type="button"
                                                      className="color-list__button w-20 h-20 border border-2 border-gray-50 rounded-circle bg-info-600"
                                                />
                                                <button
                                                      type="button"
                                                      className="color-list__button w-20 h-20 border border-2 border-gray-50 rounded-circle bg-warning-600"
                                                />
                                                <button
                                                      type="button"
                                                      className="color-list__button w-20 h-20 border border-2 border-gray-50 rounded-circle bg-tertiary-600"
                                                />
                                                <button
                                                      type="button"
                                                      className="color-list__button w-20 h-20 border border-2 border-gray-50 rounded-circle bg-main-600"
                                                />
                                                <button
                                                      type="button"
                                                      className="color-list__button w-20 h-20 border border-2 border-gray-50 rounded-circle bg-gray-100"
                                                />
                                          </div>
                                    </div>
                                    <div>
                                          <span className="text-gray-900 d-block mb-12">
                                                Pattern Name:
                                                <span className="fw-medium">with offer</span>
                                          </span>
                                          <div className="flex-align gap-8 flex-wrap">
                                                <Link
                                                      to="#"
                                                      className="px-12 py-8 text-sm rounded-8 text-gray-900 border border-gray-200 hover-border-main-600 hover-text-main-600"
                                                >
                                                      with offer{" "}
                                                </Link>
                                                <Link
                                                      to="#"
                                                      className="px-12 py-8 text-sm rounded-8 text-gray-900 border border-gray-200 hover-border-main-600 hover-text-main-600"
                                                >
                                                      12th Gen Laptop
                                                </Link>
                                                <Link
                                                      to="#"
                                                      className="px-12 py-8 text-sm rounded-8 text-gray-900 border border-gray-200 hover-border-main-600 hover-text-main-600"
                                                >
                                                      without offer
                                                </Link>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <span className="mt-32 pt-32 text-gray-700 border-top border-gray-100 d-block" />
                        <Link
                              to="/https://www.whatsapp.com"
                              className="btn btn-black flex-center gap-8 rounded-8 py-16"
                        >
                              <i className="ph ph-whatsapp-logo text-lg" />
                              Request More Information
                        </Link>
                        <div className="mt-32">
                              <span className="fw-medium text-gray-900">
                                    100% Guarantee Safe Checkout
                              </span>
                              <div className="mt-10">
                                    <img src="assets/images/thumbs/gateway-img.png" alt="" />
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default ProductsDetails;