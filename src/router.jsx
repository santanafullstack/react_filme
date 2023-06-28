import { Route, Routes } from "react-router-dom";
import Inicio from './pages/Inicio';
import Filmes from './pages/Filmes';
import Series from './pages/Series';
import Detalhes from "./pages/Detalhes";
import Page404 from "./pages/404";


export function Router(){

    return(
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/filmes" element={<Filmes />} />
            <Route path="/series" element={<Series />} />

            <Route path="/detalhes/:category/:id" element={<Detalhes />} />

            {/* Caso a rota acionada não exista, será renderizado o Page404 */}
            <Route path="*" element={<Page404 />} /> 
        </Routes>
    )    
}