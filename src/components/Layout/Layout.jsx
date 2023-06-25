import { Outlet } from "react-router-dom"


export const Layout = () => {
    return (
<container>
    <header>
        <link to="/home">Home</link>
        <link to="/movies">Movies</link>
    </header>
    <Outlet />
</container>
    );
};

export default Layout;