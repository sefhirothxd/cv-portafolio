import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useRouter } from 'next/router';

const message = () => {
	const [mensaje, setmensaje] = useState();
	const token = useSelector((store) => store.user.token);
	const router = useRouter();

	const message = async () => {
		const messages = await axios.get('https://back-cv.herokuapp.com/api/contact');
		console.log(messages);
		setmensaje(messages.data);
	};

	useEffect(() => {
		if (token != '') {
			message();
		} else {
			router.push('/login');
		}
	}, []);

	return (
		<div className="backColores px-5 min-h-screen w-full flex justify-center items-center flex-col text-white">
			{token && (
				<>
					<h1 className="text-6xl font-body font-extrabold">
						Lista de mensaje
					</h1>
					<ul className="flex gap-3 mt-4">
						{mensaje &&
							mensaje.map((mensaje) => (
								<div
									className="border-2 border-white py-3 px-3"
									key={mensaje._id}
								>
									<h3>Remitente: {mensaje.name}</h3>
									<p>Corre: {mensaje.email}</p>
									<p>Mensaje: {mensaje.message}</p>
									<small>
										{moment(mensaje.createdAt).format(
											'MMMM Do YYYY, h:mm:ss a'
										)}
									</small>
								</div>
							))}
					</ul>
				</>
			)}
		</div>
	);
};

export default message;
