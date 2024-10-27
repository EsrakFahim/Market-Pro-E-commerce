import React from "react";

const ShopFilterHeader = ({
      grid,
      setGrid,
      sidebarController,
      productsData,
}) => {
      return (
            <div className="flex-between gap-16 flex-wrap mb-40 ">
                  <span className="text-gray-900">
                        Showing 1-20 of {productsData.length} result
                  </span>
                  <div className="position-relative flex-align gap-16 flex-wrap">
                        <div className="list-grid-btns flex-align gap-16">
                              <button
                                    onClick={() => setGrid(true)}
                                    type="button"
                                    className={`w-44 h-44 flex-center border rounded-6 text-2xl list-btn border-gray-100 ${
                                          grid &&
                                          "border-main-600 text-white bg-main-600"
                                    }`}
                              >
                                    <i className="ph-bold ph-list-dashes" />
                              </button>
                              <button
                                    onClick={() => setGrid(false)}
                                    type="button"
                                    className={`w-44 h-44 flex-center border rounded-6 text-2xl grid-btn border-gray-100 ${
                                          grid === false &&
                                          "border-main-600 text-white bg-main-600"
                                    }`}
                              >
                                    <i className="ph ph-squares-four" />
                              </button>
                        </div>
                        <div className="position-relative text-gray-500 flex-align gap-4 text-14">
                              <label
                                    htmlFor="sorting"
                                    className="text-inherit flex-shrink-0"
                              >
                                    Sort by:{" "}
                              </label>
                              <select
                                    defaultValue={1}
                                    className="form-control common-input px-14 py-14 text-inherit rounded-6 w-auto"
                                    id="sorting"
                              >
                                    <option value={1}>Popular</option>
                                    <option value={1}>Latest</option>
                                    <option value={1}>Trending</option>
                                    <option value={1}>Matches</option>
                              </select>
                        </div>
                        <button
                              onClick={sidebarController}
                              type="button"
                              className="w-44 h-44 d-lg-none d-flex flex-center border border-gray-100 rounded-6 text-2xl sidebar-btn"
                        >
                              <i className="ph-bold ph-funnel" />
                        </button>
                  </div>
            </div>
      );
};

export default ShopFilterHeader;
