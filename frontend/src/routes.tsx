import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./pages/Base";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Info from "./pages/Info";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Base />}>
                    <Route index element={<Home />} />
                    <Route path=":type/:id" element={<Info />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
