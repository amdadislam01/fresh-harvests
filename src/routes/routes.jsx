import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Dashboard from "../layouts/Dashboard";
import ProductAdeed from "../pages/Dashboard/ProductAdeed";
import AllProduct from "../pages/Dashboard/AllProduct";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Cart from "../pages/Cart/Cart";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
        {
            index: true,
            element: <Home />
        },
        {
          path: '/shop',
          element: <Shop />
        },
        {
          path: '/product/:id',
          element: <ProductDetails />
        },
        {
          path: '/cart',
          element: <Cart />
        }
    ]
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: 'product-added',
        element: <ProductAdeed />
      },
      {
        path: 'all-product',
        element: <AllProduct />
      },
    ]
  }
]);