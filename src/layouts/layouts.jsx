import { Outlet } from "react-router-dom"
import Header from "../components/navigations/navBar"
import Footer from "../components/navigations/footer"




export default function Layouts () {
    return (
        <>
        <Header/>
        <Outlet />
        <Footer />
        </>
    )
}