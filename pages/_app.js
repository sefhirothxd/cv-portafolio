import '../styles/globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import generateStore from '../redux/store';
import Particles from 'react-particles-js';
// import Fondo from '../Layout/Fondo';

const store = generateStore();

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Particles
				className="h-screen w-full fixed z-0 "
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
			<Component {...pageProps} />
			<ToastContainer
				position="top-right"
				autoClose={5000}
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable
				pauseOnHover
			/>
		</Provider>
	);
}

export default MyApp;
