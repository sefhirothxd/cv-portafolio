import '../styles/globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function MyApp({ Component, pageProps }) {
	return (
		<>
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
		</>
	);
}

export default MyApp;
