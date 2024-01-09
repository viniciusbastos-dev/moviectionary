import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./pages/Base";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Base />}>
                    <Route index element={<Home />} />
                    <Route path=":type/:id" />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
