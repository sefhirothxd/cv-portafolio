import React, { useEffect } from "react";
import Header from "../components/Header";
import Presentacion from "../components/Presentacion";
import Proyectos from "../components/Proyectos";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
// import { useDispatch,useSelector } from 'react-redux';
// import {getToken} from '../redux/userDuck';

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className=" backColores px-5 overflow-hidden">
      <div className="max-w-1132 mx-auto relative z-50 ">
        <Header />
        <Presentacion />
        <Proyectos />
        <Contacto />
        <Footer />
      </div>
    </div>
  );
}
