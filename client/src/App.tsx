import { BrowserRouter, Route, Routes } from "react-router-dom"
import {Paths} from "./paths.ts";
import {Login} from "./pages/login";
import {Register} from "./pages/register";
import {Employee} from "./pages/employee";

const router = [
    {
        path: Paths.home,
        element: <Employee />
    },
    {
        path: Paths.login,
        element: <Login />
    },
    {
        path: Paths.register,
        element: <Register />
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
