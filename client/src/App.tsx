import { BrowserRouter, Route, Routes } from "react-router-dom"
import {Paths} from "./paths.ts";
import {Login} from "./pages/login";
import {Register} from "./pages/register";
import {Employees} from "./pages/employees";
import {AddEmployee} from "./pages/add-employee";
import {Status} from "./pages/status";

const router = [
    {
        path: Paths.home,
        element: <Employees />
    },
    {
        path: Paths.login,
        element: <Login />
    },
    {
        path: Paths.register,
        element: <Register />
    },
    {
        path: Paths.employeeAdd,
        element: <AddEmployee />,
    },
    {
        path: `${Paths.status}/:status`,
        element: <Status />,
    }

]

function App() {

  return (
    <BrowserRouter>
        <Routes>
            { router.map(({path, element})=>
            <Route path={path} element={element} />)}
        </Routes>
    </BrowserRouter>
  )
}

export default App
