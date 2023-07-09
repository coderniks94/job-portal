import { Outlet, useOutletContext } from "react-router-dom";
import MyNavbar from "./Navbar";
import PageFooter from "./PageFooter";

export default function RootComponent() {
    const {user} = useOutletContext();
    return (
        <>
            <MyNavbar user={user}/>
            <Outlet context={useOutletContext()} />
            <PageFooter />
        </>
    )
}