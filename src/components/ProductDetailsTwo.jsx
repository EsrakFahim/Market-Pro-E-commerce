import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getCountdown } from '../helper/Countdown';
import ProductImage from './ProductDetails/ProductImage/ProductImage';
import ProductsDetails from './ProductDetails/ProductsDetails/ProductsDetails';
import CheckoutPart from './ProductDetails/CheckoutPart/CheckoutPart';
import ProductDescription from './ProductDetails/ProductDescription/ProductDescription';
import ProductReview from './ProductDetails/ProductReview/ProductReview';

const ProductDetailsTwo = ({ product }) => {
    const [timeLeft, setTimeLeft] = useState(getCountdown());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getCountdown());
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    const productImages = [
        "assets/images/thumbs/product-details-two-thumb1.png",
        "assets/images/thumbs/product-details-two-thumb2.png",
        "assets/images/thumbs/product-details-two-thumb3.png",
        "assets/images/thumbs/product-details-two-thumb1.png",
        "assets/images/thumbs/product-details-two-thumb2.png",
    ];


    // increment & decrement
    const [quantity, setQuantity] = useState(1);
    const incrementQuantity = () => setQuantity(quantity + 1);
    const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : quantity);


    const [mainImage, setMainImage] = useState(productImages[0]);

    const settingsThumbs = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
    };
    return (
        <section className="product-details py-80 position-relative">
            <div className="container container-lg">
                <div className="row gy-4">
                    <div className="col-xl-9 position-sticky top-0">
                        <div className="row gy-4">
                            <ProductImage productImages={productImages} setMainImage={setMainImage} mainImage={mainImage} settingsThumbs={settingsThumbs} />
                            <ProductsDetails product={product} timeLeft={timeLeft} />
                        </div>
                    </div>
                    <CheckoutPart product={product} quantity={quantity} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} />
                </div>



                <div className="pt-80">
                    <div className="product-dContent border rounded-24">
                        <div className="product-dContent__header border-bottom border-gray-100 flex-between flex-wrap gap-16">
                            <ul
                                className="nav common-tab nav-pills mb-3"
                                id="pills-tab"
                                role="tablist"
                            >
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link active"
                                        id="pills-description-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-description"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-description"
                                        aria-selected="true"
                                    >
                                        Description
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="pills-reviews-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-reviews"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-reviews"
                                        aria-selected="false"
                                    >
                                        Reviews
                                    </button>
                                </li>
                            </ul>

                            <Link
                                to="#"
                                className="btn bg-color-one rounded-16 flex-align gap-8 text-main-600 hover-bg-main-600 hover-text-white"
                            >
                                <img src="assets/images/icon/satisfaction-icon.png" alt="" />
                                100% Satisfaction Guaranteed
                            </Link>
                        </div>


                        <div className="product-dContent__box">
                            <div className="tab-content" id="pills-tabContent">


                                <ProductDescription />



                                <ProductReview />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ProductDetailsTwo