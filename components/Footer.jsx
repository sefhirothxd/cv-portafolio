import React from 'react';

const Footer = () => {
	return (
		<div className="pb-6 lg:flex lg:flex-row-reverse lg:justify-between lg:gap-28 lg:items-center">
			<div className="flex justify-center  gap-x-4 mt-4 mb-6  ">
				<button className="bg-greenLight rounded  border-2 border-black h-12 w-12 flex justify-center items-center">
					<img src="/icon-phone.svg" alt="" />
				</button>
				<button className="bg-greenLight rounded border-2 border-black h-12 w-12 flex justify-center items-center">
					<img src="/icon-message.svg" alt="" />
				</button>
				<button className="bg-greenLight rounded border-2 border-black h-12 w-12 flex justify-center items-center">
					<img src="/icon-instagram.svg" alt="" />
				</button>
				<button className="bg-greenLight rounded border-2 border-black h-12 w-12 flex justify-center items-center">
					<img src="/icon-twitter.svg" alt="" />
				</button>
			</div>
			<div className="text-center lg:flex">
				<p className="text-greyBlack text-base font-body font-normal mb-2">
					Hecho con <img src="/icon-heart.svg" alt="" className="inline pr-1" />
					de Elisa.
				</p>
				<p className="text-greyBlack text-base font-body tex font-normal">
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
