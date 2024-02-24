import { createContext, useContext, useEffect, useState } from 'react';
import { jwtDecode } from "jwt-decode";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [isLogged, setIsLogged] = useState(false);

    const [user, setUser] = useState({
        full_name: '',
        email: '',
    });

    const fnLogin = (token) => {
        const tokenDecoded = jwtDecode(token);
        if(tokenDecoded){
            setIsLogged(true);
            setUser(tokenDecoded);
            // aqui ya es valido el toekn
            window.localStorage.setItem(import.meta.env.VITE_TKN_NAME, token)
        }
    }

    const fnLogout = () => {
        console.log("entro a logout");
        setIsLogged(false);
        setUser({
            full_name: '',
            email: '',
        });
        window.localStorage.removeItem(import.meta.env.VITE_TKN_NAME);
    }

    useEffect(()=> {
        console.log("Requerimos hacer algo para detrminar si ya hay sesion activa...");
        const tknFromStorage = window.localStorage.getItem(import.meta.env.VITE_TKN_NAME);
        if (tknFromStorage) {
            console.log("hay una sesion!!!!");
            fnLogin(tknFromStorage);
        } else {
            console.log("no hay sesion!!!");
        }
    }, []);


    return (
        <AuthContext.Provider value={{ user, setUser, isLogged, fnLogin, fnLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth debe ser utilizado dentro de un AuthProvider');
    }
    return context;
};

export { AuthProvider, useAuth };