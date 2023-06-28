import { BrowserRouter } from "react-router-dom";
import { Banner } from "./components/Banner/Index";
import { Footer } from "./components/Footer/Index";
import { Header } from "./components/Header/Index"
import './global.css';
import { Router } from "./router";

function App() {

  return (
    <BrowserRouter>
      <Header />      
      <Router/> {/*conteúdo das "páginas"*/}
      <Footer />
    </BrowserRouter>
  )
}

export default App
