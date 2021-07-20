import '../styles/globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import generateStore from '../redux/store';
import Fondo from '../Layout/Fondo';

const store = generateStore();

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Fondo>
				<Component {...pageProps} />
			</Fondo>
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
