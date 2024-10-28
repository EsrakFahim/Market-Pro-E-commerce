import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import RouteScrollToTop from "./helper/RouteScrollToTop";
import PhosphorIconInit from "./helper/PhosphorIconInit";
import HomePageTwo from "./pages/HomePageTwo";
import ShopPage from "./pages/ShopPage";
import ProductDetailsPageTwo from "./pages/ProductDetailsPageTwo";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import AccountPage from "./pages/AccountPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import ContactPage from "./pages/ContactPage";
import { route } from "./Router/Routes";

function App() {
      return (
            <RouterProvider router={route} >
                  <RouteScrollToTop />
                  <PhosphorIconInit />

                  {/* <Routes>
                        <Route exact path="/" element={<HomePageTwo />} />
                        <Route exact path="/shop" element={<ShopPage />} />
                        <Route
                              exact
                              path="/product-details/:_id"
                              element={<ProductDetailsPageTwo />}
                        />
                        <Route exact path="/cart" element={<CartPage />} />
                        <Route
                              exact
                              path="/checkout"
                              element={<CheckoutPage />}
                        />
                        <Route
                              exact
                              path="/account"
                              element={<AccountPage />}
                        />
                        <Route exact path="/blog" element={<BlogPage />} />
                        <Route
                              exact
                              path="/blog-details"
                              element={<BlogDetailsPage />}
                        />
                        <Route
                              exact
                              path="/contact"
                              element={<ContactPage />}
                        />
                  </Routes> */}
            </RouterProvider>
      );
}

export default App;
