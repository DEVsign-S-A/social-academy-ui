import React from "react";
import libros from "../../assets/UI-About/Vector.svg";
import Video from "../../assets/UI-About/Video.svg";
import Globus from "../../assets/UI-About/Globus.svg";
import Mochila from "../../assets/UI-About/Backpack.svg";

export const Reason = () => {
	return (
		<>
			<div className="flex justify-around mt-20">
				<div className="flex center justify-center items-center justify-items-center font-Poppins">
					<div className="flex flex-col justify-center items-center px-5 m-5">
						<div className="shadow-2xl border-2 border-gray-200 px-5 py-4 rounded-full w-28">
							<img src={libros} alt="Libros" className="" />
						</div>

						<div className="flex flex-col justify-center items-center mt-5">
							<p className="text-xs font-medium text-center text-gray-700">
								Más que un plataforma de
								<br />
								educativa somos una
								<br />
								comunidad de aprendizaje
							</p>
						</div>
					</div>

					<div className="flex flex-col justify-center items-center m-5">
						<div className="shadow-2xl border-2 border-gray-200 px-5 py-5 rounded-full w-28">
							<img src={Video} alt="Video Player" />
						</div>

						<div className="flex flex-col justify-center items-center mt-4">
							<p className="text-xs font-medium text-center text-gray-700">
								En lugar en donde
								<br />
								econtrarás contenido de
								<br />
								calidad certificada
							</p>
						</div>
					</div>

					<div className="flex flex-col justify-center items-center ml-10 mt-3">
						<div className="shadow-2xl border-2 px-5 py-4 border-gray-200 rounded-full w-28">
							<img src={Globus} alt="Job Backpack" />
						</div>
						<div className="flex flex-col justify-center items-center mt-6">
							<p className="text-xs font-medium text-center text-gray-700">
								Un espacio en el cual
								<br />
								puedes comunicarte o
								<br />
								compartir tu conocimiento
								<br />
								sin fronteras
							</p>
						</div>
					</div>

                    <div className="flex flex-col justify-center items-center mx-10">
                        <div className="shadow-2xl border-2 px-5 py-4 border-gray-200 rounded-full w-28">
                            <img src={Mochila} alt="Schoolback" />
                        </div>
    
                        <div className="flex flex-col justify-center items-center mt-4">
                            <p className="text-xs font-medium text-center text-gray-700">
                                Un ambiente en el
                                <br />
                                que puedes proyectarte
                                <br />
                                hacia un mejor futuro
                            </p>
                        </div>
                    </div>
				</div>


				<div className="text-gray-500 mt-14 text-xl letterLine font-Montserrat">
					<p>
						<span className="font-bold">Razones &nbsp;</span>
						por las cuales
						<br />
						somos la mejor plataforma
						<br />
						educativa de comunicación
						<br />y colaboración en Nicaragua
					</p>
				</div>
			</div>
		</>
	);
};
