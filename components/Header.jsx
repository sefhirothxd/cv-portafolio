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
					href="https://doc-00-68-docs.googleusercontent.com/docs/securesc/nk6k6hesbm77dehdadqfvc912nlepctb/5m9arnemig9sin96e65i77oc5lm8phku/1619405025000/05257491431250860507/05257491431250860507/1LW1jhRvnjN6YT05MgO3KbHoBUZDiLMlY?e=download&authuser=0&nonce=255cm4c0floj2&user=05257491431250860507&hash=v2l3gn3i3b02arnae4sng6gc0bphmuqk"
					className="lg:hidden"
				>
					CURRÍCULIM
				</a>
				<a
					href="https://doc-00-68-docs.googleusercontent.com/docs/securesc/nk6k6hesbm77dehdadqfvc912nlepctb/5m9arnemig9sin96e65i77oc5lm8phku/1619405025000/05257491431250860507/05257491431250860507/1LW1jhRvnjN6YT05MgO3KbHoBUZDiLMlY?e=download&authuser=0&nonce=255cm4c0floj2&user=05257491431250860507&hash=v2l3gn3i3b02arnae4sng6gc0bphmuqk"
					className="lg:block hidden"
				>
					DESCARGAR CURRÍCULIM
				</a>
			</div>
		</div>
	);
}

export default Header;
