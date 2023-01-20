import { createBrowserRouter } from "react-router-dom";
import Layout from "../../Layout/Layout";
import Buyerdashboard from "../../Pages/AddProduct/Buyerdashboard";
import MyBuyers from "../../Pages/AddProduct/MyBuyers";
import MyProduct from "../../Pages/AddProduct/MyProduct";
import Productadd from "../../Pages/AddProduct/Productadd";
import AdminDashboard from "../../Pages/AdminDashboard/AdminDashboard";
import AllBuyers from "../../Pages/AdminDashboard/AllBuyers";
import AllSellers from "../../Pages/AdminDashboard/AllSellers";
import MakeAdmin from "../../Pages/AdminDashboard/MakeAdmin";
import UpdateFreezer from "../../Pages/AdminDashboard/UpdateFreezer";
import Advertiseditem from "../../Pages/Advertiseditem/AdvertisedItem";
import Blog from "../../Pages/Blog/Blog";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyOrder from "../../Pages/MyOrder/MyOrder";
import Myorderpayment from "../../Pages/MyOrder/Myorderpayment";
import OrderedProduct from "../../Pages/MyOrder/OrderedProduct";
import WhishList from "../../Pages/MyOrder/WhishList";
import ProductDetails from "../../Pages/Products/ProductDetails";
import SingleProduct from "../../Pages/Products/SingleProduct";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRouteCheck from "../PrivateRoute/AdminRouteCheck";
import BuyerRouteCheck from "../PrivateRoute/BuyerRouteCheck";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRouteCheck from "../PrivateRoute/SellerRouteCheck";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/productsdetails/:ID",
        loader: ({ params }) =>
          fetch(`https://freezer-server.vercel.app/frreezerproduct?id=${params.ID}`),
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/productsdetails/single/:ID",
        loader: ({ params }) =>
          fetch(`https://freezer-server.vercel.app/frreezerproduct/single?id=${params.ID}`),
        element: (
          <PrivateRoute>
            <SingleProduct></SingleProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/buyerdashboard",
        element: (
          <PrivateRoute>
            <Buyerdashboard></Buyerdashboard>
          </PrivateRoute>
        ),
        children: [
          {
            path: "/buyerdashboard/addproduct",
            element: (
              <SellerRouteCheck>
                <Productadd></Productadd>
              </SellerRouteCheck>
            ),
          },
          {
            path: "/buyerdashboard/myproduct",
            element: <MyProduct></MyProduct>,
          },
          {
            path: "/buyerdashboard/mybuyers",
            element: <MyBuyers></MyBuyers>,
          },
          {
            path: "*",
            element: <ErrorPage></ErrorPage>,
          },
        ],
      },
      {
        path: "/admindashboard",
        element: (
          <PrivateRoute>
            <AdminRouteCheck>
              <AdminDashboard></AdminDashboard>
            </AdminRouteCheck>
          </PrivateRoute>
        ),
        children: [
          {
            path: "/admindashboard/allsellers",
            element: (
              <PrivateRoute>
                <AdminRouteCheck>
                  <AllSellers></AllSellers>
                </AdminRouteCheck>
              </PrivateRoute>
            ),
          },
          {
            path: "/admindashboard/allbuyers",
            element: (
              <PrivateRoute>
                <AdminRouteCheck>
                  <AllBuyers></AllBuyers>
                </AdminRouteCheck>
              </PrivateRoute>
            ),
          },
          {
            path: "/admindashboard/makeadmin",
            element: (
              <PrivateRoute>
                <AdminRouteCheck>
                  <MakeAdmin></MakeAdmin>
                </AdminRouteCheck>
              </PrivateRoute>
            ),
          },
          {
            path: "/admindashboard/updatefreezer",
            element: (
              <PrivateRoute>
                <AdminRouteCheck>
                  <UpdateFreezer></UpdateFreezer>
                </AdminRouteCheck>
              </PrivateRoute>
            ),
          },
          {
            path: "*",
            element: <ErrorPage></ErrorPage>,
          },
        ],
      },
      {
        path: "/myorders",
        element: (
          <PrivateRoute>
            <BuyerRouteCheck>
              <MyOrder></MyOrder>
            </BuyerRouteCheck>
          </PrivateRoute>
        ),
        children: [
          {
            path: "/myorders/orderedproduct",
            element: (
              <PrivateRoute>
                <BuyerRouteCheck>
                  <OrderedProduct></OrderedProduct>
                </BuyerRouteCheck>
              </PrivateRoute>
            ),
          },
          {
            path: "/myorders/wishlist",
            element: (
              <PrivateRoute>
                <BuyerRouteCheck>
                  <WhishList></WhishList>
                </BuyerRouteCheck>
              </PrivateRoute>
            ),
          },
          {
            path: "/myorders/payment/card",
            element: (
              <PrivateRoute>
                <BuyerRouteCheck>
                  <Myorderpayment></Myorderpayment>
                </BuyerRouteCheck>
              </PrivateRoute>
            ),
          },
          {
            path: "*",
            element: <ErrorPage></ErrorPage>,
          },
        ],
      },
      {
        path: "/advertisement",
        element: (
          <PrivateRoute>
            <Advertiseditem></Advertiseditem>
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/errorpage",
        element: <ErrorPage></ErrorPage>,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);
