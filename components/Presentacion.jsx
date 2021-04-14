import React from 'react';

const Presentacion = () => {
	return (
		<div className="flex flex-col md:flex-row-reverse  md:justify-between ">
			<img
				src="/person-fondo.svg"
				alt="persona con fondo morado y verde"
				className="md:mx-auto lg:mx-0 lg:w-680 "
			/>
			<article className="flex flex-col font-body max-w-lg md:pt-32 ">
				<p className="text-5xl pb-5 font-bold text-greyBlack">¡Hola a todos!</p>
				<h1 className="text-5xl font-bold pb-8 text-greyBlack">Soy Bryan</h1>
				<p className="leading-7 text-greyBlack text-base">
					Una Frontend Developer que le encanta implementar diseños que inspiran
					y atraen a las personas.
				</p>
				<div className="flex justify-start gap-x-4 mt-4">
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
			</article>
		</div>
	);
};

export default Presentacion;
