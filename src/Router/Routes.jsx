import { createBrowserRouter } from "react-router-dom";
import HomePageTwo from "../pages/HomePageTwo";
import ShopPage from "../pages/ShopPage";
import ProductDetailsPageTwo from "../pages/ProductDetailsPageTwo";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import BlogPage from "../pages/BlogPage";
import BlogDetailsPage from "../pages/BlogDetailsPage";
import ContactPage from "../pages/ContactPage";
import Main from "../Layout/Main";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";

export const route = createBrowserRouter([
      {
            path: "/",
            element: <Main />,
            errorElement: <h1>Not Found</h1>,
            children: [
                  {
                        path: "/",
                        element: <HomePageTwo />,
                  },
                  {
                        path: "/shop",
                        element: <ShopPage />,
                  },
                  {
                        path: "/product-details/:_id",
                        element: <ProductDetailsPageTwo />,
                  },
                  {
                        path: "/cart",
                        element: <CartPage />,
                  },
                  {
                        path: "/checkout",
                        element: <CheckoutPage />,
                  },
                  {
                        path:"/login",
                        element:<Login/>
                  },
                  {
                        path:"/signup",
                        element:<SignUp/>
                  },
                  {
                        path: "/blog",
                        element: <BlogPage />,
                  },
                  {
                        path: "/blog-details",
                        element: <BlogDetailsPage />,
                  },
                  {
                        path: "/contact",
                        element: <ContactPage />,
                  },
            ],
      },
]);
