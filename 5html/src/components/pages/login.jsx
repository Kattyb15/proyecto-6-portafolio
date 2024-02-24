import { useState } from "react";
import { loginService } from "../../services/Auth.service";
import { useAuth } from '../context/authContext';

function Login() {

    const { fnLogin } = useAuth();

    const [formulario, setFormulario] = useState({
        email: 'jesus@gmail.com',
        password: 'jesus'
    });

    const handleInputChange = (event) => {
        setFormulario({
            ...formulario,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault();
        console.log(formulario);

        loginService(formulario)
        .then(response => {
            const token = response.data.data;
            fnLogin(token);
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="container page">
            <h1 className="text-center mb-5">Login</h1>
            <form onSubmit={enviarDatos}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    onChange={handleInputChange}
                    value={formulario.email}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    onChange={handleInputChange}
                    value={formulario.password}/>
                </div>

                <button type="submit" className="btn btn-primary">Login</button>
            </form>

        </div>
    );
}

export default Login;