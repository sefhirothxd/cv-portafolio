import React from 'react';
import { useForm } from 'react-hook-form';


const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
	const onSubmit = (data) => {
		console.log(data);
	};
	return (
		<form
			className="flex flex-col gap-3  border-2 rounded-lg border-white text-white py-20 px-10"
			onSubmit={handleSubmit(onSubmit)}
		>
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
				className="py-2 px-6 bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 border-black border-2 rounded-lg"
				type="submit"
			>
				Enviar
			</button>
		</form>
	);
};

export default LoginForm;
