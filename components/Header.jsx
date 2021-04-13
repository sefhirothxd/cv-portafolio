import React from 'react';

function Header() {
	return (
		<div className="bg-transparent flex justify-between pt-4 lg:pb-10 items-center ">
			<div>
				<h1 className="font-black text-3xl">LOGO</h1>
			</div>
			<div className="bg-greenLight font-bold py-3 px-6 border-black border-solid rounded-full border-2 shadow-caja">
				<p className="lg:hidden">CURRÍCULIM</p>
				<p className="lg:block hidden">DESCARGAR CURRÍCULIM</p>
			</div>
		</div>
	);
}

export default Header;
