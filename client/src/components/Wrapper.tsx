import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

export default function Wrapper() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}
