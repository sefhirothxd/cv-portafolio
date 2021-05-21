import React from 'react';
import Particles from 'react-particles-js';
import FormLogin from '../components/LoginForm';

const Login = () => {
	return (
		<div className="backColores px-5 min-h-screen w-full flex justify-center items-center">
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
			<div className="z-50 relative">
				<FormLogin />
			</div>
		</div>
	);
};

export default Login;
