import React, { useEffect, useState } from 'react'
import query from 'jquery';
import { Link, NavLink } from 'react-router-dom';
const HeaderTwo = ({ category }) => {
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
        window.onscroll = () => {
            if (window.pageYOffset < 150) {
                setScroll(false);
            } else if (window.pageYOffset > 150) {
                setScroll(true);
            }
            return () => (window.onscroll = null);
        };
        const selectElement = query('.js-example-basic-single');
        selectElement.select2();

        return () => {
            if (selectElement.data('select2')) {
                selectElement.select2('destroy');
            }
        };
    }, []);

    // Set the default language
    const [selectedLanguage, setSelectedLanguage] = useState("Eng");
    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
    };

    // Set the default currency
    const [selectedCurrency, setSelectedCurrency] = useState("USD");
    const handleCurrencyChange = (currency) => {
        setSelectedCurrency(currency);
    };

    // Mobile menu support
    const [menuActive, setMenuActive] = useState(false)
    const [activeIndex, setActiveIndex] = useState(null);
    const handleMenuClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const handleMenuToggle = () => {
        setMenuActive(!menuActive);
    };


    // Search control support
    const [activeSearch, setActiveSearch] = useState(false)
    const handleSearchToggle = () => {
        setActiveSearch(!activeSearch);
    };


    return (
        <>
            <div className="overlay" />

            <form action="#" className={`search-box ${activeSearch && "active"}`}>
                <button onClick={handleSearchToggle}
                    type="button"
                    className="search-box__close position-absolute inset-block-start-0 inset-inline-end-0 m-16 w-48 h-48 border border-gray-100 rounded-circle flex-center text-white hover-text-gray-800 hover-bg-white text-2xl transition-1"
                >
                    <i className="ph ph-x" />
                </button>
                <div className="container">
                    <div className="position-relative">
                        <input
                            type="text"
                            className="form-control py-16 px-24 text-xl rounded-pill pe-64"
                            placeholder="Search for a product or brand"
                        />
                        <button
                            type="submit"
                            className="w-48 h-48 bg-main-600 rounded-circle flex-center text-xl text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8"
                        >
                            <i className="ph ph-magnifying-glass" />
                        </button>
                    </div>
                </div>
            </form>

            <div className={`mobile-menu scroll-sm d-lg-none d-block ${menuActive && "active"}`}>
                <button onClick={() => { handleMenuToggle(); setActiveIndex(null) }} type="button" className="close-button">
                    {/* <i className="ph ph-x" />{" "} */}
                    <span>
                        X
                    </span>
                </button>
                <div className="mobile-menu__inner">
                    <Link to="/" className="mobile-menu__logo">
                        <img src="assets/images/logo/logo.png" alt="Logo" />
                    </Link>
                    <div className="mobile-menu__menu">
                        {/* Nav Menu Start */}
                        <ul className="nav-menu flex-align nav-menu--mobile">
                            <li onClick={() => handleMenuClick(0)}
                                className={`on-hover-item nav-menu__item has-submenu ${activeIndex === 0 ? "d-block" : ""
                                    }`}
                            >
                                <Link to="/" className="nav-menu__link">
                                    Home
                                </Link>
                                <ul
                                    className={`on-hover-dropdown common-dropdown nav-submenu scroll-sm ${activeIndex === 0 ? "open" : ""
                                        }`}
                                >
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <Link onClick={() => setActiveIndex(null)}
                                            to="/"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                        >
                                            {" "}
                                            Home One
                                        </Link>
                                    </li>
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <Link onClick={() => setActiveIndex(null)}
                                            to="/index-two"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                        >
                                            {" "}
                                            Home Two
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li onClick={() => handleMenuClick(1)}
                                className={`on-hover-item nav-menu__item has-submenu ${activeIndex === 1 ? "d-block" : ""
                                    }`}
                            >
                                <Link to="#" className="nav-menu__link">
                                    Shop
                                </Link>
                                <ul
                                    className={`on-hover-dropdown common-dropdown nav-submenu scroll-sm ${activeIndex === 1 ? "open" : ""
                                        }`}
                                >
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <Link onClick={() => setActiveIndex(null)}
                                            to="/shop"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                        >
                                            {" "}
                                            Shop
                                        </Link>
                                    </li>
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <Link onClick={() => setActiveIndex(null)}
                                            to="/product-details"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                        >
                                            {" "}
                                            Shop Details
                                        </Link>
                                    </li>
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <Link onClick={() => setActiveIndex(null)}
                                            to="/product-details-two"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                        >
                                            {" "}
                                            Shop Details Two
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li onClick={() => handleMenuClick(2)}
                                className={`on-hover-item nav-menu__item has-submenu ${activeIndex === 2 ? "d-block" : ""
                                    }`}
                            >
                                <span className="badge-notification bg-warning-600 text-white text-sm py-2 px-8 rounded-4">
                                    New
                                </span>
                                <Link to="#" className="nav-menu__link">
                                    Pages
                                </Link>
                                <ul
                                    className={`on-hover-dropdown common-dropdown nav-submenu scroll-sm ${activeIndex === 2 ? "open" : ""
                                        }`}
                                >
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <Link onClick={() => setActiveIndex(null)}
                                            to="/cart"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                        >
                                            {" "}
                                            Cart
                                        </Link>
                                    </li>
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <Link onClick={() => setActiveIndex(null)}
                                            to="/checkout"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                        >
                                            {" "}
                                            Checkout{" "}
                                        </Link>
                                    </li>
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <Link onClick={() => setActiveIndex(null)}
                                            to="/account"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                        >
                                            {" "}
                                            Account
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li onClick={() => handleMenuClick(3)}
                                className={`on-hover-item nav-menu__item has-submenu ${activeIndex === 3 ? "d-block" : ""
                                    }`}
                            >
                                <Link to="#" className="nav-menu__link">
                                    Blog
                                </Link>
                                <ul
                                    className={`on-hover-dropdown common-dropdown nav-submenu scroll-sm ${activeIndex === 3 ? "open" : ""
                                        }`}
                                >
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <Link onClick={() => setActiveIndex(null)}
                                            to="/blog"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                        >
                                            {" "}
                                            Blog
                                        </Link>
                                    </li>
                                    <li className="common-dropdown__item nav-submenu__item">
                                        <Link onClick={() => setActiveIndex(null)}
                                            to="/blog-details"
                                            className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                                        >
                                            {" "}
                                            Blog Details
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-menu__item">
                                <Link to="/contact" className="nav-menu__link">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <header className="header-middle style-two bg-color-neutral">
                <div className="container container-lg">
                    <nav className="header-inner flex-between">
                        <div className="logo">
                            <Link to="/" className="link">
                                <img src="assets/images/logo/logo-two.png" alt="Logo" />
                            </Link>
                        </div>
                        <div className="flex-align gap-16">
                            <div className="select-dropdown-for-home-two d-lg-none d-block">
                            </div>
                            <form
                                action="#"
                                className="flex-align flex-wrap form-location-wrapper"
                            >
                                <div className="search-category style-two d-flex h-48 search-form d-sm-flex d-none">
                                    <div className="search-form__wrapper position-relative">
                                        <input
                                            type="text"
                                            className="search-form__input common-input py-13 ps-16 pe-18 rounded-0 border-0"
                                            placeholder="Search for a product or brand"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="bg-main-two-600 flex-center text-xl text-white flex-shrink-0 w-48 hover-bg-main-two-700 d-lg-flex d-none"
                                    >
                                        <i className="ph ph-magnifying-glass" />
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="header-right flex-align d-lg-block d-none">
                            <div className="header-two-activities flex-align flex-wrap gap-32">
                                <button
                                    type="button"
                                    className="flex-align search-icon d-lg-none d-flex gap-4 item-hover-two"
                                >
                                    <span className="text-2xl text-white d-flex position-relative item-hover__text">
                                        <i className="ph ph-magnifying-glass" />
                                    </span>
                                </button>
                                <Link
                                    to="/account"
                                    className="flex-align flex-column gap-8 item-hover-two"
                                >
                                    <span className="text-2xl text-white d-flex position-relative item-hover__text">
                                        <i className="ph ph-user" />
                                    </span>
                                    <span className="text-md text-white item-hover__text d-none d-lg-flex">
                                        Profile
                                    </span>
                                </Link>
                                <Link
                                    to="/cart"
                                    className="flex-align flex-column gap-8 item-hover-two"
                                >
                                    <span className="text-2xl text-white d-flex position-relative me-6 mt-6 item-hover__text">
                                        <i className="ph ph-heart" />
                                        <span className="w-16 h-16 flex-center rounded-circle bg-main-two-600 text-white text-xs position-absolute top-n6 end-n4">
                                            2
                                        </span>
                                    </span>
                                    <span className="text-md text-white item-hover__text d-none d-lg-flex">
                                        Wishlist
                                    </span>
                                </Link>
                                <Link
                                    to="/cart"
                                    className="flex-align flex-column gap-8 item-hover-two"
                                >
                                    <span className="text-2xl text-white d-flex position-relative me-6 mt-6 item-hover__text">
                                        <i className="ph-fill ph-shuffle" />
                                        <span className="w-16 h-16 flex-center rounded-circle bg-main-two-600 text-white text-xs position-absolute top-n6 end-n4">
                                            2
                                        </span>
                                    </span>
                                    <span className="text-md text-white item-hover__text d-none d-lg-flex">
                                        Compare
                                    </span>
                                </Link>
                                <Link
                                    to="/cart"
                                    className="flex-align flex-column gap-8 item-hover-two"
                                >
                                    <span className="text-2xl text-white d-flex position-relative me-6 mt-6 item-hover__text">
                                        <i className="ph ph-shopping-cart-simple" />
                                        <span className="w-16 h-16 flex-center rounded-circle bg-main-two-600 text-white text-xs position-absolute top-n6 end-n4">
                                            2
                                        </span>
                                    </span>
                                    <span className="text-md text-white item-hover__text d-none d-lg-flex">
                                        Cart
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            
            <header className={`header bg-white border-bottom border-gray-100 ${scroll && "fixed-header"}`}>
                <div className="container container-lg">
                    <nav className="header-inner d-flex justify-content-center gap-8">
                        <div className="flex-align menu-category-wrapper">
                            <div className="header-menu d-lg-block d-none">
                                <ul className="nav-menu flex-align ">
                                    <li className="on-hover-item nav-menu__item has-submenu">
                                        <Link to="/" className="nav-menu__link">
                                            Home
                                        </Link>
                                    </li>
                                    <li className="on-hover-item nav-menu__item has-submenu">
                                        <Link to="/shop" className="nav-menu__link">
                                            Shop
                                        </Link>
                                    </li>
                                    <li className="on-hover-item nav-menu__item has-submenu">
                                        <Link to="/blog" className="nav-menu__link">
                                            Blog
                                        </Link>
                                    </li>
                                    <li className="nav-menu__item">
                                        <NavLink to="/contact" className={(navData) =>
                                            navData.isActive ? "nav-menu__link activePage" : "nav-menu__link"
                                        }>
                                            Contact Us
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>

    )
}

export default HeaderTwo