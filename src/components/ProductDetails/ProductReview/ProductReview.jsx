import React from 'react';
import { Link } from 'react-router-dom';

const ProductReview = () => {
      return (
            <div
                  className="tab-pane fade"
                  id="pills-reviews"
                  role="tabpanel"
                  aria-labelledby="pills-reviews-tab"
                  tabIndex={0}
            >
                  <div className="row g-4">
                        <div className="col-lg-6">
                              <h6 className="mb-24">Product Review</h6>
                              <div className="d-flex align-items-start gap-24 pb-44 border-bottom border-gray-100 mb-44">
                                    <img
                                          src="assets/images/thumbs/comment-img1.png"
                                          alt=""
                                          className="w-52 h-52 object-fit-cover rounded-circle flex-shrink-0"
                                    />
                                    <div className="flex-grow-1">
                                          <div className="flex-between align-items-start gap-8 ">
                                                <div className="">
                                                      <h6 className="mb-12 text-md">Nicolas cage</h6>
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
                                                </div>
                                                <span className="text-gray-800 text-xs">
                                                      3 Days ago
                                                </span>
                                          </div>
                                          <h6 className="mb-14 text-md mt-24">Greate Product</h6>
                                          <p className="text-gray-700">
                                                There are many variations of passages of Lorem Ipsum
                                                available, but the majority have suffered alteration in
                                                some form, by injected humour
                                          </p>
                                          <div className="flex-align gap-20 mt-44">
                                                <button className="flex-align gap-12 text-gray-700 hover-text-main-600">
                                                      <i className="ph-bold ph-thumbs-up" />
                                                      Like
                                                </button>
                                                <Link
                                                      to="#comment-form"
                                                      className="flex-align gap-12 text-gray-700 hover-text-main-600"
                                                >
                                                      <i className="ph-bold ph-arrow-bend-up-left" />
                                                      Replay
                                                </Link>
                                          </div>
                                    </div>
                              </div>
                              <div className="d-flex align-items-start gap-24">
                                    <img
                                          src="assets/images/thumbs/comment-img1.png"
                                          alt=""
                                          className="w-52 h-52 object-fit-cover rounded-circle flex-shrink-0"
                                    />
                                    <div className="flex-grow-1">
                                          <div className="flex-between align-items-start gap-8 ">
                                                <div className="">
                                                      <h6 className="mb-12 text-md">Nicolas cage</h6>
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
                                                </div>
                                                <span className="text-gray-800 text-xs">
                                                      3 Days ago
                                                </span>
                                          </div>
                                          <h6 className="mb-14 text-md mt-24">Greate Product</h6>
                                          <p className="text-gray-700">
                                                There are many variations of passages of Lorem Ipsum
                                                available, but the majority have suffered alteration in
                                                some form, by injected humour
                                          </p>
                                          <div className="flex-align gap-20 mt-44">
                                                <button className="flex-align gap-12 text-gray-700 hover-text-main-600">
                                                      <i className="ph-bold ph-thumbs-up" />
                                                      Like
                                                </button>
                                                <Link
                                                      to="#comment-form"
                                                      className="flex-align gap-12 text-gray-700 hover-text-main-600"
                                                >
                                                      <i className="ph-bold ph-arrow-bend-up-left" />
                                                      Replay
                                                </Link>
                                          </div>
                                    </div>
                              </div>
                              <div className="mt-56">
                                    <div className="">
                                          <h6 className="mb-24">Write a Review</h6>
                                          <span className="text-heading mb-8">
                                                What is it like to Product?
                                          </span>
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
                                    </div>
                                    <div className="mt-32">
                                          <form action="#">
                                                <div className="mb-32">
                                                      <label
                                                            htmlFor="title"
                                                            className="text-neutral-600 mb-8"
                                                      >
                                                            Review Title
                                                      </label>
                                                      <input
                                                            type="text"
                                                            className="common-input rounded-8"
                                                            id="title"
                                                            placeholder="Great Products"
                                                      />
                                                </div>
                                                <div className="mb-32">
                                                      <label
                                                            htmlFor="desc"
                                                            className="text-neutral-600 mb-8"
                                                      >
                                                            Review Content
                                                      </label>
                                                      <textarea
                                                            className="common-input rounded-8"
                                                            id="desc"
                                                            defaultValue={
                                                                  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
                                                            }
                                                      />
                                                </div>
                                                <button
                                                      type="submit"
                                                      className="btn btn-main rounded-pill mt-48"
                                                >
                                                      Submit Review
                                                </button>
                                          </form>
                                    </div>
                              </div>
                        </div>


                        <div className="col-lg-6">
                              <div className="ms-xxl-5">
                                    <h6 className="mb-24">Customers Feedback</h6>
                                    <div className="d-flex flex-wrap gap-44">
                                          <div className="border border-gray-100 rounded-8 px-40 py-52 flex-center flex-column flex-shrink-0 text-center">
                                                <h2 className="mb-6 text-main-600">4.8</h2>
                                                <div className="flex-center gap-8">
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
                                                <span className="mt-16 text-gray-500">
                                                      Average Product Rating
                                                </span>
                                          </div>
                                          <div className="border border-gray-100 rounded-8 px-24 py-40 flex-grow-1">
                                                <div className="flex-align gap-8 mb-20">
                                                      <span className="text-gray-900 flex-shrink-0">5</span>
                                                      <div
                                                            className="progress w-100 bg-gray-100 rounded-pill h-8"
                                                            role="progressbar"
                                                            aria-label="Basic example"
                                                            aria-valuenow={70}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
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
                                                <div className="flex-align gap-8 mb-20">
                                                      <span className="text-gray-900 flex-shrink-0">4</span>
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
                                                <div className="flex-align gap-8 mb-20">
                                                      <span className="text-gray-900 flex-shrink-0">3</span>
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
                                                <div className="flex-align gap-8 mb-20">
                                                      <span className="text-gray-900 flex-shrink-0">2</span>
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
                                                      <span className="text-gray-900 flex-shrink-0">5</span>
                                                </div>
                                                <div className="flex-align gap-8 mb-0">
                                                      <span className="text-gray-900 flex-shrink-0">1</span>
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
                                                      <span className="text-gray-900 flex-shrink-0">2</span>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default ProductReview;