import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


export const PruebaInput = () => {
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), tituloClase: '', enlaceClase: '' },
  ]);

  /*const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
  };*/

  const handleInputChange = (id, event) => {
    const newInputFields = inputFields.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    
    setInputFields(newInputFields);
  }

  const handleAddFields = (e) => {
    e.preventDefault();
    setInputFields([...inputFields, { id: uuidv4(),  tituloClase: '', enlaceClase: '' }])
  }

  const handleRemoveFields = id => {
    const values  = [...inputFields];
    values.splice(values.findIndex(value => value.id === id), 1);
    setInputFields(values);
  }

  return (
    <div className = "my-2 py-2" >
      <h1 className="text-gray-600 font-Poppins font-medium text-base sm:text-lg p-5">Agregar  clase</h1>
      <div className = "flex flex-column justify-center AgregarClases" >
        { inputFields.map((inputField, i) => (
          <div key={inputField.id} className = "flex flex-row flex-wrap justify-around ContenedorInputs">

                    <div className = "sm:ml-4 ml-1 my-1 py-1 DynamicInput">
                            <p className="text-gray-600 font-Poppins font-medium text-base sm:text-lg p-2.5">
                            Titulo clase {i+1}
                            </p>
                            <input
                            required={true}
                            value={inputField.tituloClase}
                            name = "tituloClase"
                            onChange={event => handleInputChange(inputField.id, event)}
                            className="sm:mx-8 mx-2 md:w-11/12 w-10/12 bg-gray-100 ring-1 ring-gray-200 rounded-lg py-2 outline-none px-4 font-Poppins text-sm sm:text-base text-gray-700"
                            type="text"
                            />
                      </div>
                      <div className = "sm:ml-4 ml-1 my-1 py-1 DynamicInput">
                            <p className="text-gray-600 font-Poppins font-medium text-base sm:text-lg p-2.5">
                             Enlace clase {i+1}
                            </p>
                            <input
                            required={true}
                            value={inputField.enlaceClase}
                            name = "enlaceClase"
                            onChange={event => handleInputChange(inputField.id, event)}
                            className="sm:mx-8 mx-2 md:w-11/12 w-10/12 bg-gray-100 ring-1 ring-gray-200 rounded-lg py-2 outline-none px-4 font-Poppins text-sm sm:text-base text-gray-700"
                            type="text"
                            />
                      </div>

                    <div className = "sm:ml-8 ml-4 marginButtons">
                      <button
                      disabled={inputFields.length === 1}
                      onClick={() => handleRemoveFields(inputField.id)}
                      className="disabled:opacity-50 inline-flex items-center justify-center sm:w-10 sm:h-10 w-8 h-8 mr-2 text-indigo-100 transition-colors duration-150 bg-blue-800 rounded-lg focus:shadow-outline hover:bg-blue-900">
                        <svg  className="sm:w-4 m:h-4 w-3 h-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/></svg>
                      </button>

                      {(inputFields.length - 1 === i)&&<button
                      onClick={handleAddFields}
                      className="inline-flex items-center justify-center sm:w-10 sm:h-10 w-8 h-8 mr-2 text-indigo-100 transition-colors duration-150 bg-blue-800 rounded-lg focus:shadow-outline hover:bg-blue-900">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                      </button>}
                    </div>
          </div>
        )) }
      </div>
    </div>
  );
}
