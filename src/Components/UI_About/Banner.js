import React from "react";
import "./style.css";

export const Banner = () => {
    return (
        <>
            <section className="flex justify-between content-image">
                <div className='px-16 pt-10 flex flex-col items-center font-Montserrat'>
                    <h3 className="md:text-3xl md:py-0 lg:text-4xl text-primary font-bold py-5 my-2 flex flex-col items-center">
                        Social Academy
                        <span className="py-3">
                            &
                        </span>
                        <span className="text-second py-1">DEVsign</span>
                    </h3>
                    <p className="text-gray-500 text-xl font-medium p-1 font-Poppins">
                        Te da la bienvenida a la plataforma de
                    </p>
                    <p className="text-gray-500 text-xl font-medium  p-1 font-Poppins">
                        retroalimentación estudiantil
                    </p>
                    <p className="text-gray-500 text-xl font-medium p-1 font-Poppins">

                        más grande del País
                    </p>
                    <input type="submit" value="registrate" className="btn-social-blue font-Poppins"/>
                </div>

                <div className="">
                    <img src={`https://res.cloudinary.com/socialacademy/image/upload/v1630442078/Social%20Academy%20Image/MARCO_d6wxoh.jpg`}
                        alt="banner Social"
                        id="ImageBanner"
                        loading='lazy'
                        className="rounded-xl shadow-xl mt-32 mr-10 bg-blanco"/>
                </div>

            </section>
        </>
    );
};

