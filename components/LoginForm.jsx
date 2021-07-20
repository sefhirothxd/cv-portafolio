import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { getLogin, getToken } from '../redux/userDuck';
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const dispatch = useDispatch();
	const router = useRouter();

	const onSubmit = async (data) => {
		try {
			const res = await dispatch(getLogin(data));
			// console.log(res.response.data.error.message);
			if (res.data) {
				toast.success(`acabas de iniciar session`);
				router.push('/message');
			} else {
				toast.error(`${res.response.data.error.message}`);
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<form
			className="flex flex-col gap-3   border-2 rounded-lg border-white py-10 px-10"
			onSubmit={handleSubmit(onSubmit)}
		>
			<h1 className="text-white text-3xl font-extrabold text-center pb-10 ">
				Login
			</h1>
			<input
				className="pl-2"
				type="email"
				placeholder="Email"
				{...register('email', {
					required: true,
					max: -1,
					min: 2,
					pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
				})}
			/>
			{errors.email && (
				<span role="alert" className="text-red-600">
					Ingrese su correo
				</span>
			)}

			<input
				className="pl-2"
				id="password"
				placeholder="Password"
				{...register('password', {
					required: true,
					min: 2,
				})}
				type="password"
			/>
			{errors.password && (
				<span role="alert" className="text-red-600">
					Ingrese su contraseña
				</span>
			)}

			<button
				className="py-2 px-6 bg-blue-500 hover:bg-blue-600 text-white font-extrabold text-xl focus:bg-blue-600 border-white border-2 rounded-lg"
				type="submit"
			>
				Enviar
			</button>
		</form>
	);
};

export default LoginForm;
