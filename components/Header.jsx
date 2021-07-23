import React from 'react';

function Header() {
	return (
		<div className="bg-transparent flex justify-between pt-4 lg:pb-10 items-center ">
			<div>
				<h1 className="font-black text-white text-3xl">LOGO</h1>
			</div>
			<nav className="hidden md:block">
				<ul className="flex justify-center items-center gap-6 text-sm text-textColor font-body font-bold">
					<li>
						<a href="#">HOLA</a>
					</li>
					<li className="opacity-50">
						<a href="#proyectos">PROYECTOS</a>
					</li>
					<li className="opacity-50">
						<a href="#hablemos">HABLEMOS</a>
					</li>
				</ul>
			</nav>
			<div className="bg-greenLight font-bold py-3 px-6 border-black border-solid rounded-full border-2 shadow-caja">
				<a
					href="https://drive.google.com/file/d/1LW1jhRvnjN6YT05MgO3KbHoBUZDiLMlY/view?usp=sharing"
					className="lg:hidden"
					target="_blank"
				>
					CURRÍCULIM
				</a>
				<a
					href="https://drive.google.com/file/d/1LW1jhRvnjN6YT05MgO3KbHoBUZDiLMlY/view?usp=sharing"
					className="lg:block hidden"
					target="_blank"
				>
					DESCARGAR CURRÍCULIM
				</a>
			</div>
		</div>
	);
}

export default Header;
