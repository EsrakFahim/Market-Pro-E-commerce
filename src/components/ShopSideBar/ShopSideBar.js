import React from "react";
import { Link } from "react-router-dom";
import ReactSlider from "react-slider";

const ShopSideBar = ({ sidebarController, active }) => {
      return (
            <div className="col-lg-3">
                  <div className={`shop-sidebar ${active && "active"}`}>
                        <button
                              onClick={sidebarController}
                              type="button"
                              className="shop-sidebar__close d-lg-none d-flex w-32 h-32 flex-center border border-gray-100 rounded-circle hover-bg-main-600 position-absolute inset-inline-end-0 me-10 mt-8 hover-text-white hover-border-main-600"
                        >
                              <i className="ph ph-x" />
                        </button>
                        <div className="shop-sidebar__box border border-gray-100 rounded-8 p-32 mb-32">
                              <h6 className="text-xl border-bottom border-gray-100 pb-24 mb-24">
                                    Product Category
                              </h6>
                              <ul className="max-h-540 overflow-y-auto scroll-sm">
                                    <li className="mb-24">
                                          <Link
                                                to="/product-details-two"
                                                className="text-gray-900 hover-text-main-600"
                                          >
                                                Mobile &amp; Accessories (12)
                                          </Link>
                                    </li>
                              </ul>
                        </div>

                        {/* Price Filter */}

                        <div className="shop-sidebar__box border border-gray-100 rounded-8 p-32 mb-32">
                              <h6 className="text-xl border-bottom border-gray-100 pb-24 mb-24">
                                    Filter by Price
                              </h6>
                              <div className="custom--range">
                                    <ReactSlider
                                          className="horizontal-slider"
                                          thumbClassName="example-thumb"
                                          trackClassName="example-track"
                                          defaultValue={[0, 1000000]}
                                          ariaLabel={[
                                                "Lower thumb",
                                                "Upper thumb",
                                          ]}
                                          ariaValuetext={(state) =>
                                                `Thumb value ${state.valueNow}`
                                          }
                                          renderThumb={(props, state) => {
                                                const { key, ...restProps } =
                                                      props;
                                                return (
                                                      <div
                                                            {...restProps}
                                                            key={state.index}
                                                      >
                                                            {state.valueNow}
                                                      </div>
                                                );
                                          }}
                                          pearling
                                          minDistance={10}
                                    />

                                    <br />
                                    <br />
                                    <div className="flex-between flex-wrap-reverse gap-8 mt-24 ">
                                          <button
                                                type="button"
                                                className="btn btn-main h-40 flex-align"
                                          >
                                                Filter{" "}
                                          </button>
                                    </div>
                              </div>
                        </div>

                        {/* Rating Filter */}

                        <div className="shop-sidebar__box border border-gray-100 rounded-8 p-32 mb-32">
                              <h6 className="text-xl border-bottom border-gray-100 pb-24 mb-24">
                                    Filter by Rating
                              </h6>
                              <div className="flex-align gap-8 position-relative mb-20">
                                    <label
                                          className="position-absolute w-100 h-100 cursor-pointer"
                                          htmlFor="rating5"
                                    >
                                          {" "}
                                    </label>
                                    <div className="common-check common-radio mb-0">
                                          <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="rating5"
                                          />
                                    </div>
                                    <div
                                          className="progress w-100 bg-gray-100 rounded-pill h-8"
                                          role="progressbar"
                                          aria-label="Basic example"
                                          aria-valuenow={70}
                                          aria-valuemin={0}
                                          aria-valuemax={100000}
                                    >
                                          <div
                                                className="progress-bar bg-main-600 rounded-pill"
                                                style={{ width: "70%" }}
                                          />
                                    </div>
                                    <div className="flex-align gap-4">
                                          <span className="text-xs fw-medium text-warning-600 d-flex">
                                                <i className="ph-fill ph-star" />
                                          </span>
                                          <span className="text-xs fw-medium text-warning-600 d-flex">
                                                <i className="ph-fill ph-star" />
                                          </span>
                                          <span className="text-xs fw-medium text-warning-600 d-flex">
                                                <i className="ph-fill ph-star" />
                                          </span>
                                          <span className="text-xs fw-medium text-warning-600 d-flex">
                                                <i className="ph-fill ph-star" />
                                          </span>
                                          <span className="text-xs fw-medium text-warning-600 d-flex">
                                                <i className="ph-fill ph-star" />
                                          </span>
                                    </div>
                                    <span className="text-gray-900 flex-shrink-0">
                                          124
                                    </span>
                              </div>
                              <div className="flex-align gap-8 position-relative mb-20">
                                    <label
                                          className="position-absolute w-100 h-100 cursor-pointer"
                                          htmlFor="rating4"
                                    >
                                          {" "}
                                    </label>
                                    <div className="common-check common-radio mb-0">
                                          <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="rating4"
                                          />
                                    </div>
                                    <div
                                          className="progress w-100 bg-gray-100 rounded-pill h-8"
                                          role="progressbar"
                                          aria-label="Basic example"
                                          aria-valuenow={50}
                                          aria-valuemin={0}
                                          aria-valuemax={100}
                                    >
                                          <div
                                                className="progress-bar bg-main-600 rounded-pill"
                                                style={{ width: "50%" }}
                                          />
                                    </div>
                                    <div className="flex-align gap-4">
                                          <span className="text-xs fw-medium text-warning-600 d-flex">
                                                <i className="ph-fill ph-star" />
                                          </span>
                                          <span className="text-xs fw-medium text-warning-600 d-flex">
                                                <i className="ph-fill ph-star" />
                                          </span>
                                          <span className="text-xs fw-medium text-warning-600 d-flex">
                                                <i className="ph-fill ph-star" />
                                          </span>
                                          <span className="text-xs fw-medium text-warning-600 d-flex">
                                                <i className="ph-fill ph-star" />
                                          </span>
                                          <span className="text-xs fw-medium text-gray-400 d-flex">
                                                <i className="ph-fill ph-star" />
                                          </span>
                                    </div>
                                    <span className="text-gray-900 flex-shrink-0">
                                          52
                                    </span>
                              </div>
                              <div className="flex-align gap-8 position-relative mb-20">
                                    <label
                                          className="position-absolute w-100 h-100 cursor-pointer"
                                          htmlFor="rating3"
                                    >
                                          {" "}
                                    </label>
                                    <div className="common-check common-radio mb-0">
                                          <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="rating3"
                                          />
                                    </div>
                                    <div
                                          className="progress w-100 bg-gray-100 rounded-pill h-8"
                                          role="progressbar"
                                          aria-label="Basic example"
                                          aria-valuenow={35}
                                          aria-valuemin={0}
                                          aria-valuemax={100}
                                    >
                                          <div
                                                className="progress-bar bg-main-600 rounded-pill"
                                                style={{ width: "35%" }}
                                          />
                                    </div>
                                    <div className="flex-align gap-4">
                                          <span className="text-xs fw-medium text-warning-600 d-flex">
                                                <i className="ph-fill ph-star" />
                                          </span>
                                          <span className="text-xs fw-medium text-warning-600 d-flex">
                                                <i className="ph-fill ph-star" />
                                          </span>
                                          <span className="text-xs fw-medium text-warning-600 d-flex">
                                                <i className="ph-fill ph-star" />
                                          </span>
                                          <span className="text-xs fw-medium text-gray-400 d-flex">
                                                <i className="ph-fill ph-star" />
                                          </span>
                                          <span className="text-xs fw-medium text-gray-400 d-flex">
                                                <i className="ph-fill ph-star" />
                                          </span>
                                    </div>
                                    <span className="text-gray-900 flex-shrink-0">
                                          12
                                    </span>
                              </div>
                              <div className="flex-align gap-8 position-relative mb-20">
                                    <label
                                          className="position-absolute w-100 h-100 cursor-pointer"
                                          htmlFor="rating2"
                                    >
                                          {" "}
                                    </label>
                                    <div className="common-check common-radio mb-0">
                                          <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="rating2"
                                          />
                                    </div>
                                    <div
                                          className="progress w-100 bg-gray-100 rounded-pill h-8"
                                          role="progressbar"
                                          aria-label="Basic example"
                                          aria-valuenow={20}
                                          aria-valuemin={0}
                                          aria-valuemax={100}
                                    >
                                          <div
                                                className="progress-bar bg-main-600 rounded-pill"
                                                style={{ width: "20%" }}
                                          />
                                    </div>
                                    <div className="flex-align gap-4">
                                          <span className="text-xs fw-medium text-warning-600 d-flex">
                                                <i className="ph-fill ph-star" />
                                          </span>
                                          <span className="text-xs fw-medium text-warning-600 d-flex">
                                                <i className="ph-fill ph-star" />
                                          </span>
                                          <span className="text-xs fw-medium text-gray-400 d-flex">
                                                <i className="ph-fill ph-star" />
                                          </span>
                                          <span className="text-xs fw-medium text-gray-400 d-flex">
                                                <i className="ph-fill ph-star" />
                                          </span>
                                          <span className="text-xs fw-medium text-gray-400 d-flex">
                                                <i className="ph-fill ph-star" />
                                          </span>
                                    </div>
                                    <span className="text-gray-900 flex-shrink-0">
                                          5
                                    </span>
                              </div>
                              <div className="flex-align gap-8 position-relative mb-0">
                                    <label
                                          className="position-absolute w-100 h-100 cursor-pointer"
                                          htmlFor="rating1"
                                    >
                                          {" "}
                                    </label>
                                    <div className="common-check common-radio mb-0">
                                          <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="rating1"
                                          />
                                    </div>
                                    <div
                                          className="progress w-100 bg-gray-100 rounded-pill h-8"
                                          role="progressbar"
                                          aria-label="Basic example"
                                          aria-valuenow={5}
                                          aria-valuemin={0}
                                          aria-valuemax={100}
                                    >
                                          <div
                                                className="progress-bar bg-main-600 rounded-pill"
                                                style={{ width: "5%" }}
                                          />
                                    </div>
                                    <div className="flex-align gap-4">
                                          <span className="text-xs fw-medium text-warning-600 d-flex">
                                                <i className="ph-fill ph-star" />
                                          </span>
                                          <span className="text-xs fw-medium text-gray-400 d-flex">
                                                <i className="ph-fill ph-star" />
                                          </span>
                                          <span className="text-xs fw-medium text-gray-400 d-flex">
                                                <i className="ph-fill ph-star" />
                                          </span>
                                          <span className="text-xs fw-medium text-gray-400 d-flex">
                                                <i className="ph-fill ph-star" />
                                          </span>
                                          <span className="text-xs fw-medium text-gray-400 d-flex">
                                                <i className="ph-fill ph-star" />
                                          </span>
                                    </div>
                                    <span className="text-gray-900 flex-shrink-0">
                                          2
                                    </span>
                              </div>
                        </div>
                        <div className="shop-sidebar__box border border-gray-100 rounded-8 p-32 mb-32">
                              <h6 className="text-xl border-bottom border-gray-100 pb-24 mb-24">
                                    Filter by Color
                              </h6>
                              <ul className="max-h-540 overflow-y-auto scroll-sm">
                                    <li className="mb-24">
                                          <div className="form-check common-check common-radio checked-black">
                                                <input
                                                      className="form-check-input"
                                                      type="radio"
                                                      name="color"
                                                      id="color1"
                                                />
                                                <label
                                                      className="form-check-label"
                                                      htmlFor="color1"
                                                >
                                                      Black(12)
                                                </label>
                                          </div>
                                    </li>
                              </ul>
                        </div>
                        <div className="shop-sidebar__box border border-gray-100 rounded-8 p-32 mb-32">
                              <h6 className="text-xl border-bottom border-gray-100 pb-24 mb-24">
                                    Filter by Brand
                              </h6>
                              <ul className="max-h-540 overflow-y-auto scroll-sm">
                                    <li className="mb-24">
                                          <div className="form-check common-check common-radio">
                                                <input
                                                      className="form-check-input"
                                                      type="radio"
                                                      name="color"
                                                      id="brand1"
                                                />
                                                <label
                                                      className="form-check-label"
                                                      htmlFor="brand1"
                                                >
                                                      Apple
                                                </label>
                                          </div>
                                    </li>
                              </ul>
                        </div>
                        <div className="shop-sidebar__box rounded-8">
                              <img
                                    src="assets/images/thumbs/advertise-img1.png"
                                    alt=""
                              />
                        </div>
                  </div>
            </div>
      );
};

export default ShopSideBar;
