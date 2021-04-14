import React from 'react';

const Footer = () => {
	return (
		<div className="pb-6 lg:flex lg:flex-row-reverse lg:justify-between lg:gap-28 lg:items-center">
			<div className="flex justify-start gap-x-4 mt-4">
				<a
					href="https://www.facebook.com/bveraca"
					target="_blank"
					className="bg-greenLight rounded  border-2 border-black h-12 w-12 flex justify-center items-center"
				>
					<img src="/icon-face.svg" alt="" />
				</a>
				<a
					href="https://github.com/sefhirothxd"
					target="_blank"
					className="bg-greenLight rounded border-2 border-black h-12 w-12 flex justify-center items-center"
				>
					<img src="/icon-github.svg" alt="" />
				</a>
				<a
					href="https://www.linkedin.com/in/bryanvera"
					target="_blank"
					className="bg-greenLight rounded border-2 border-black h-12 w-12 flex justify-center items-center"
				>
					<img src="/linkedin32.png" alt="" />
				</a>
				<a
					href="https://twitter.com/bveracachay"
					target="_blank"
					className="bg-greenLight rounded border-2 border-black h-12 w-12 flex justify-center items-center"
				>
					<img src="/icon-twitter.svg" alt="" />
				</a>
			</div>
			<div className="text-center lg:flex">
				<p className="text-textColor lg:mr-1 text-base font-body font-normal mb-2">
					Hecho por Bryan Vera
				</p>
				<p className="text-textColor text-base font-body tex font-normal">
					Copyright 2021 - Todos los derechos reservados.
				</p>
			</div>
			<div className="hidden lg:block">
				<h1 className="font-black text-3xl">LOGO</h1>
			</div>
		</div>
	);
};

export default Footer;
