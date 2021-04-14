import React from 'react';

const Contacto = () => {
	return (
		<div className="py-20 max-w-550 mx-auto ">
			<div className="mb-4">
				<h3 className="md:block md:text-center lg:text-34px py-4 shadow-showTitle mb-5 inline-block bg-greyBlack px-2 text-greenLight text-2xl">
					HABLEMOS
				</h3>
				<p className="md:text-center text-greyBlack text-base leading-6 font-body font-normal">
					Si está interesado en trabajar conmigo en su próximo proyecto, no dude
					en ponerse en contacto conmigo.
				</p>
			</div>
			<form action="">
				<h4 className="pl-4 mb-2 text-greyBlack text-base font-body font-bold">
					Nombre completo <span className="text-red-600">*</span>
				</h4>
				<input
					className="py-3 mb-4 px-4 rounded-lg w-full"
					type="text"
					placeholder="juan"
				/>
				<h4 className="pl-4 mb-2 text-greyBlack text-base font-body font-bold">
					Correo electrónico <span className="text-red-600">*</span>
				</h4>
				<input
					type="text"
					className=" mb-4 py-3 px-4 rounded-lg w-full"
					placeholder="juan@gmail.com"
				/>
				<h4 className="pl-4  mb-2 text-greyBlack text-base font-body font-bold">
					Mensaje
				</h4>
				<textarea
					name=""
					className="py-3 px-4 rounded-lg w-full mb-2"
					id=""
					cols="30"
					rows="5"
				></textarea>
				<button className="bg-greenLight font-body text-14px font-bold border-greyBlack border-2 rounded-full w-full py-3">
					ENVIAR MENSAJE
				</button>
			</form>
		</div>
	);
};

export default Contacto;
