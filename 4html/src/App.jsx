import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { useState } from 'react'
import db from './config/database';
import { collection, addDoc, getDocs } from "firebase/firestore";

function App() {

  const [formulario, setFormulario] = useState({
    nombre:"",
    email:"",
    telefono: "",
    comentarios: ""
  });


  const handleInputChange = (event) => {
    setFormulario({
        ...formulario,
        [event.target.name]: event.target.value
    });
  }

  const reservar = async (event) => {
    event.preventDefault();
    console.log(formulario);
    // aqui ya podemos mandar "formulario" a firebase
    await addDoc(collection(db, "reservas"), formulario);
    // Al codigo siguiente es para traer esos datos....
    // const datos = await getDocs(collection(db, "reservas"));
    // console.log(datos.docs.map((doc)=> {return doc.data()}));
  }

  return (
    <>
      <Header />
      <div className="container">
        <h2>Entradas Blog</h2>
        <dov className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="https://images.aws.nestle.recipes/original/7f618b4f356076e670ed781eb2d56149_pozole_rojo.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Pozole</h5>
                <p className="card-text">Pozole solo los miercoles</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://images.squarespace-cdn.com/content/v1/59cee1aaa8b2b058e9643877/1509837741237-J8BFZL8EXMS8LVDO48HP/OrangeChicken2.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Pollo Mexicano</h5>
                <p className="card-text">Rico pollo Mexicano preparado por el mejor chef.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://images.squarespace-cdn.com/content/v1/59cee1aaa8b2b058e9643877/1509837741237-J8BFZL8EXMS8LVDO48HP/OrangeChicken2.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Pollo Colombiano</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </dov>
        <hr />
        <div className="row">
          <h2>Seccion de reservas</h2>
          <p>En esta seccion puedes reservar un lugar para ti y tus acompañantes.</p>
          <div className="col-md-6" style={{ backgroundColor: "#f1f1f1" }}>
            <h3>Reserva con nosotros</h3>
            <p>A partir de tu contacto, nos comunicaremos contigo para revisar fechas y disponibilidad de horarios.</p>
            <p>Centro Histórico Ciudad de México, MX 12345</p>
            <p>+1 (555) 123-4567</p>
            <p>contacto@lamiafamiglia.com</p>
            <p>
              2021. UCamp. Todos los derechos reservados.Esta es una aplicación ficticia para fines académicos.
            </p>
          </div>
          <div className="col-md-6">

            <form onSubmit={reservar}>
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input type="text" className="form-control" name='nombre' onChange={handleInputChange}/>
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" name='email' onChange={handleInputChange}/>
              </div>
              <div className="mb-3">
                <label className="form-label">Telefono</label>
                <input type="text" className="form-control" name='telefono' onChange={handleInputChange}/>
              </div>
              <div className="mb-3">
                <label className="form-label">Mensaje y comentarios</label>
                <textarea className="form-control" rows="5" name='comentarios' onChange={handleInputChange}></textarea>
              </div>
              <div className="row">
                <div className="col-md-12 text-center">
                  <button className='btn btn-primary'>Reservar</button>
                </div>
              </div>
            </form>

          </div>
        </div>

      </div>
      <Footer titulo='Suscribete a nuestras noticias' />
    </>
  )
}

export default App
