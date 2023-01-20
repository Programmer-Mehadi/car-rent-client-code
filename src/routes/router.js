import { createBrowserRouter } from "react-router-dom";
import CarDetails from "../pages/CarDetails";
import CarList from "../pages/CarList";
import CarRentForm from "../pages/CarRentForm";

const router = createBrowserRouter([
    {
        path: '/',
        element:<CarList></CarList>
    },
    {
        path: '/cardetails',
        element:<CarDetails></CarDetails>
    },
    {
        path: '/carrentform',
        element:<CarRentForm></CarRentForm>
    }
])

export default router;