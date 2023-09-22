import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MasProyectos = () => {
	const [proyectos, setProyectos] = useState([]);
	const [axu, setAxu] = useState([]);
	const [mostrar, setMostrar] = useState(false);

	const lessProjects = () => {
		setProyectos(axu.slice(0, 6));
		setMostrar(false);
	};
	const moreProjects = () => {
		setProyectos(axu);
		setMostrar(true);
	};

	useEffect(async () => {
		await axios
			.get('https://api.vercel.com/v9/projects', {
				headers: {
					Authorization: `Bearer ${process.env.GETPROYECT}`,
				},
			})
			.then((res) => {
				setAxu(res.data.projects);
				setProyectos(res.data.projects.slice(0, 6));
			});

		console.log('proyectos');
	}, []);

	return (
		<div data-aos="fade-right" className="w-full">
			<h1 className="shadow-showTitle text-center py-4 lg:text-34px mb-16 w-1/2 mx-auto bg-greenLight  px-2 text-black text-2xl">
				Otros proyectos destacados
			</h1>
			<div className="w-full">
				<div className="flex justify-center gap-5 items-center   flex-wrap pb-5 transform transition-opacity ">
					{proyectos.length > 0 ? (
						proyectos?.map((project) => (
							<div
								data-aos="fade-up"
								data-aos-delay="300"
								key={project.name}
								className="w-80 transform transition-all rounded-lg border-2 text-gray-200 shadow-md bg-white bg-opacity-20  border-white border-opacity-20"
							>
								<div className="p-5">
									<a
										href={'https://' + project.targets.production.alias[0]}
										target="_blank"
										rel="noreferrer"
									>
										<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-200 dark:text-white">
											{project.name}
										</h5>
									</a>
									<div className="mb-3 font-normaltext-gray-400">
										<div>
											<p className="text-gray-400">{'updated'.toUpperCase()}</p>
											<span>{new Date(project.updatedAt).toDateString()}</span>
										</div>
										<div>
											<p className="text-gray-400">{'Commit'.toUpperCase()}</p>
											<span>
												{project.targets.production.meta.githubCommitMessage}
											</span>
										</div>
									</div>
									<a
										href={
											'https://github.com/sefhirothxd/' + project?.link?.repo
										}
										target="_blank"
										rel="noreferrer"
										className="inline-flex mr-3 items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
									>
										GitHub
										<svg
											aria-hidden="true"
											className="ml-2 -mr-1 w-4 h-4"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
												clipRule="evenodd"
											/>
										</svg>
									</a>
									<a
										href={'https://' + project.targets.production.alias[0]}
										target="_blank"
										rel="noreferrer"
										className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
									>
										Vercel
										<svg
											aria-hidden="true"
											className="ml-2 -mr-1 w-4 h-4"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
												clipRule="evenodd"
											/>
										</svg>
									</a>
								</div>
							</div>
						))
					) : (
						<p className="text-3xl text-white text-center">Loding...</p>
					)}
				</div>
			</div>
			<div className="flex justify-center pt-10">
				{!mostrar ? (
					<button
						onClick={moreProjects}
						className="bg-greenLight lg:mr-3 font-body text-lg font-bold border-textColor border-2 rounded-xl w-56  py-3"
					>
						Ver más los proyectos
					</button>
				) : (
					<button
						onClick={lessProjects}
						className="bg-greenLight lg:mr-3 font-body text-lg font-bold border-textColor border-2 rounded-xl w-56  py-3"
					>
						Ver menos proyectos
					</button>
				)}
			</div>
		</div>
	);
};

export default MasProyectos;
