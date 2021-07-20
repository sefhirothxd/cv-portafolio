import React from 'react';
import FormLogin from '../components/LoginForm';

const Login = () => {
	return (
		<div className="backColores px-5 min-h-screen w-full flex justify-center items-center">
			<div className="z-50 relative">
				<FormLogin />
			</div>
		</div>
	);
};

export default Login;
