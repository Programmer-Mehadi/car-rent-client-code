import { createBrowserRouter } from "react-router-dom";
import CarDetailsPage from "../pages/CarDetailsPage";
import CarListPage from "../pages/CarListPage";
import CarRentFormPage from "../pages/CarRentFormPage";


const router = createBrowserRouter([
    {
        path: '/',
        element:<CarListPage></CarListPage>
    },
    {
        path: '/cardetails',
        element:<CarDetailsPage></CarDetailsPage>
    },
    {
        path: '/carrentform',
        element:<CarRentFormPage></CarRentFormPage>
    }
])

export default router;