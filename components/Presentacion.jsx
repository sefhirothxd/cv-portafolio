import React from 'react';

const Presentacion = () => {
	return (
		<div className="flex flex-col md:flex-row-reverse  md:justify-between ">
			<figure className="border-2 lg:w-72 lg:self-center h-72 w-72 self-center sm:my-36 xs:my-36  flex items-end  overflow-hidden border-white rounded-full">
				<img
					src="/mifoto.png"
					alt="persona con fondo morado y verde"
					className=" object-cover "
				/>
			</figure>
			<article className="flex flex-col  font-body max-w-lg md:pt-32 md:w-96 lg:w-full ">
				<p className="text-5xl pb-5 font-bold text-textColor">¡Hola a todos!</p>
				<h1 className="text-5xl font-bold pb-8 text-textColor">Soy Bryan</h1>
				<p className="leading-7 text-textColor text-base ">
					Una Frontend Developer que le encanta implementar diseños que inspiran
					y atraen a las personas.
				</p>
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
			</article>
		</div>
	);
};

export default Presentacion;
