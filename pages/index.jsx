import Head from 'next/head';
import Header from '../components/Header';
import Presentacion from '../components/Presentacion';
import Proyectos from '../components/Proyectos';
import Contacto from '../components/Contacto';
import Footer from '../components/Footer';
import Particles from 'react-particles-js';

export default function Home() {
	return (
		<div className=" backColores px-5">
			<Particles
				className="h-screen w-full  fixed z-0"
				id="particles-js"
				params={{
					particles: {
						number: {
							value: 40,
							density: {
								enable: true,
								value_area: 1000,
							},
						},
						color: {
							value: '#fff',
						},
						opacity: {
							value: 0.5,
							anim: {
								enable: true,
							},
						},
						size: {
							value: 7,
							random: true,
							anim: {
								enable: true,
								speed: 3,
							},
						},
						line_linked: {
							enable: false,
						},
						move: {
							speed: 0.2,
						},
					},
				}}
			/>
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
