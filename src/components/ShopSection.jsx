import React, { useState } from 'react'
import ProductCard from './ProductsCard/ProductsCard'
import { productsData } from '../Data/products'
import Pagination from './Pagination/Pagination'
import ShopSideBar from './ShopSideBar/ShopSideBar'
import ShopFilterHeader from './ShopFilterHeader/ShopFilterHeader'


const ShopSection = () => {
    let [grid, setGrid] = useState(false)
    let [active, setActive] = useState(false)
    let [currentPage, setCurrentPage] = useState(1)
    let sidebarController = () => {
        setActive(!active)
    }




    return (
        <section className="shop py-80">
            <div className={`side-overlay ${active && "show"}`}></div>
            <div className="container container-lg">
                <div className="row">
                    <ShopSideBar active={active} sidebarController={sidebarController} />
                    <div className="col-lg-9">
                        <ShopFilterHeader grid={grid} setGrid={setGrid} sidebarController={sidebarController} productsData={productsData} />
                        <div className={`list-grid-wrapper ${grid && "list-view"}`}>
                            {productsData.map((product, index) => (
                                <ProductCard key={index} productData={product} />
                            ))}
                        </div>
                        <Pagination
                            className="pagination-bar"
                            currentPage={currentPage}
                            totalCount={productsData?.length}
                            pageSize={10}
                            onPageChange={(page) => setCurrentPage(page)}
                        />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ShopSection