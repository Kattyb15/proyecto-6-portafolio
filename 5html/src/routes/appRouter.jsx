import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../components/pages/home';
import Checkout from '../components/pages/checkout';
import RegistroUsuario from '../components/pages/registrousuario';
import Login from '../components/pages/login';
import Perfil from '../components/pages/perfil';
import ListaProductos from '../components/pages/listaproductos';
import Producto from '../components/pages/producto';
import { useAuth } from '../components/context/authContext';

const NotFound = () => <h1>404: Not Found</h1>;
function AppRouter() {

    const { isLogged } = useAuth();

    return (
        <>
            <Routes>
                {/* Ruta default */}
                <Route path="/" element={<Home />} />

                {/* Comodin para ruta no validas */}
                <Route path="*" element={<Navigate to="/404" />} />

                {/* Rutas disponibles */}
                <Route path="404" element={<NotFound />} />
                <Route path="home" element={<Home />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="signup" element={<RegistroUsuario />} />
                <Route path="login" element={<Login />} />
                {
                    isLogged ? (
                        <Route path="perfil" element={<Perfil />} />
                    ) : (
                        <Route path="perfil" element={<Login />} />
                    )
                }
                <Route path="productos" element={<ListaProductos />} />
                <Route path="producto/:id" element={<Producto />} />
            </Routes>
        </>
    );
}

export default AppRouter;