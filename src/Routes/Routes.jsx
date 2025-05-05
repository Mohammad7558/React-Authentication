import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import DetailsPageEvent from "../components/SingleEvent/DetailsPageEvent";
import Loader from "../components/Loader/Loader";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import About from "../Pages/About/About";
import PrivateRoutes from "./PrivateRoutes";
import MyProfile from "../components/MyProfile/MyProfile";
import MyBooking from "../components/My-Booking/MyBooking";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                Component: Home
            },
            {
                path: '/events/:id',
                element: <PrivateRoutes><DetailsPageEvent></DetailsPageEvent></PrivateRoutes>,
                hydrateFallbackElement: <Loader/>,
                loader: () => fetch('../eventData.json')
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: '/profile',
                element: <PrivateRoutes><MyProfile></MyProfile></PrivateRoutes>
            },
            {
                path: '/my-bookings',
                element: <PrivateRoutes><MyBooking/></PrivateRoutes>
            }
        ]
    }
])