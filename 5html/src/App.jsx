import './App.css'
import AppRouter from './routes/appRouter'
import Header from './components/header'
import Footer from './components/footer'
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
    {/* Cargar header */}
    <Header />
    <AppRouter />
    {/* footer */}
    <Footer />
    <Toaster />
    </>
  )
}

export default App