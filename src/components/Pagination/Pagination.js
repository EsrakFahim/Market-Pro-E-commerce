import React from "react";
import classNames from "classnames";
import "./Pagination.scss";
import { Dots, usePagination } from "../../Hooks/usePagination";

const Pagination = (props) => {
      const {
            onPageChange,
            totalCount,
            siblingCount = 1,
            currentPage,
            pageSize,
            className,
      } = props;

      //console.log(currentPage, totalCount,  pageSize);

      const paginationRange = usePagination({
            currentPage,
            totalCount,
            siblingCount,
            pageSize,
      });

      // if there are less then 2 times in pagination range we shall not render the component
      if (
            !paginationRange ||
            !Array.isArray(paginationRange) ||
            paginationRange.length < 2
      ) {
            return null;
      }

      const onNext = () => {
            onPageChange(currentPage + 1);
      };

      const onPrevious = () => {
            onPageChange(currentPage - 1);
      };

      let lastPage = paginationRange[paginationRange?.length - 1];

      return (
            <>
                  <ul
                        className={classNames("pagination-container", {
                              [className]: className,
                        })}
                  >
                        {/* Left navigation arrow */}
                        <li
                              className={classNames("pagination-item", {
                                    disabled: currentPage === 1,
                              })}
                              onClick={onPrevious}
                        >
                              <div className="arrow-left">
                                    <span className="flex items-center gap-3">
                                          <span>
                                                <i className="ph-bold ph-arrow-left" />
                                          </span>
                                    </span>
                              </div>
                        </li>
                        {paginationRange.map((pageNumber, idx) => {
                              // if the page item is a dot , render the Dots unicode character
                              if (pageNumber === Dots) {
                                    return (
                                          <li className="pagination-item-dots">
                                                &#8230;
                                          </li>
                                    );
                              }

                              // Render our page pills
                              return (
                                    <li
                                          key={idx}
                                          className={classNames(
                                                "pagination-item",
                                                {
                                                      selected:
                                                            pageNumber ===
                                                            currentPage,
                                                }
                                          )}
                                          onClick={() =>
                                                onPageChange(pageNumber)
                                          }
                                    >
                                          {pageNumber}
                                    </li>
                              );
                        })}
                        {/* Right navigation arrow */}
                        <li
                              className={classNames("pagination-item", {
                                    disabled: currentPage === lastPage,
                              })}
                              onClick={onNext}
                        >
                              <div className="arrow-right">
                                    <span className="flex items-center gap-3">
                                          <span>
                                                {" "}
                                                <i className="ph-bold ph-arrow-right" />
                                          </span>
                                    </span>
                              </div>
                        </li>
                  </ul>
            </>
      );
};

export default Pagination;
