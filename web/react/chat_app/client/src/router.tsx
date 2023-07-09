import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AuthLayouts from "./pages/layouts/AuthLayouts";

export const router = createBrowserRouter([
    {
        element: <AuthLayouts/>,
        children: [
            { path: "login", element: <Login/>},
            { path: "signup", element: <Signup/>},
        ]
    }
])