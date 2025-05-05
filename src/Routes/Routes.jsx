import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import DetailsPageEvent from "../components/SingleEvent/DetailsPageEvent";
import Loader from "../components/Loader/Loader";

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
                Component: DetailsPageEvent,
                hydrateFallbackElement: <Loader/>,
                loader: () => fetch('../eventData.json')
            }
        ]
    }
])