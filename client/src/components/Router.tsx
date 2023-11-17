import {
    createBrowserRouter
} from "react-router-dom";
import Wrapper from "./Wrapper";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Wrapper />,
        children:
            [
            ]
    }
]);