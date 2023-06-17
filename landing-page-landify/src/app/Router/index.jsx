import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../../pages/Home"

const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
        </BrowserRouter>
    )
}

export {Router};