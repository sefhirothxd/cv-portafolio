import React,{useEffect} from 'react';
import Header from '../components/Header';
import Presentacion from '../components/Presentacion';
import Proyectos from '../components/Proyectos';
import Contacto from '../components/Contacto';
import Footer from '../components/Footer';
import { useDispatch,useSelector } from 'react-redux';
import {getToken} from '../redux/userDuck';

export default function Home() {
	// const dispatch = useDispatch();
	// useEffect(() => {
	// 	const token = localStorage.getItem('token');
	// 	dispatch(getToken(token));
	// }, [])
	// const token = useSelector((store) => store.user.token);


	return (
		<div className=" backColores px-5">
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
