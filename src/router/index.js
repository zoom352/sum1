import Login from "../components/Login";
import Profile from "../components/Profile";
import Main from "../components/Main";
import Registration from "../components/Registration";

export const publicRoutes = [
    {path: "/login", exact: true, Element: Login },
    {path: "/", exact: true, Element: Main },
    {path: "/registration", exact: true, Element: Registration },
]

export const privateRoutes = [
    {path: "/profile", exact: true, Element: Profile },
    {path: "/", exact: true, Element: Main }
]
