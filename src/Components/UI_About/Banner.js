import React from "react";
import banner from "../../assets/UI-About/banner.png";
import "./style.css";

export const Banner = () => {
    return (
        <>
            <section className="content-image flex justify-between overflow-x-hidden">
                <div className='px-16 pt-10 flex flex-col items-center'>
                    <h3 className="md:text-3xl md:py-0 lg:text-4xl text-primary font-bold py-5 my-2 flex flex-col items-center">
                        Social Academy
                        <span className="py-3">
                            &
                        </span>
                        <span className="text-second py-1">DEVsign</span>
                    </h3>
                    <p className="text-gray-500 text-xl font-medium p-1">
                        Te da la bienvenida a la plataforma de
                    </p>
                    <p className="text-gray-500 text-xl font-medium  p-1">
                        retroalimentación estudiantil
                    </p>
                    <p className="text-gray-500 text-xl font-medium p-1">

                        más grande del País
                    </p>
                    <input type="submit" value="registrate" className="btn-social-blue"/>
                </div>

                <div className="">
                    <img src={banner}
                        alt="banner Social"
                        id="ImageBanner"
                        loading='lazy'
                        className="rounded-2xl shadow-lg mt-32 mr-10 pb-2 bg-blanco"/>
                </div>
            </section>
        </>
    );
};

