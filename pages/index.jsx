import Head from 'next/head';
import Header from '../components/Header';
import Presentacion from '../components/Presentacion';
import Proyectos from '../components/Proyectos';
import Contacto from '../components/Contacto';
import Footer from '../components/Footer';
export default function Home() {
	return (
		<div className=" backColores px-5">
			<div className="max-w-1132 mx-auto ">
				<Header />
				<Presentacion />
				<Proyectos />
				<Contacto />
				<Footer />
			</div>
		</div>
	);
}
