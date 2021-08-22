import React from 'react'

export const FormCompany = () => {
    return (
        <div className='bg-WhiteSocial shadow-2xl rounded-3xl mx-8 my-5 w-2/3'>

        <form>

            <div className='flex'>
                <p>Nombre de la Empresa: </p>
                <input
                    type='text'
                />
            </div>

            <div className='flex'>
                <p>Dirección: </p>
                <input
                    type='text'
                />
            </div>

            <div className='flex'>
                <p>Ciudad: </p>
                <input
                    type='text'
                />
            </div>

            <div className='flex'>
                <p>Departamento: </p>
                <input
                    type='text'
                />
            </div>

            <div className='flex'>
                <p>Telefono: </p>
                <input
                    type='text'
                />
            </div>

 <div className='flex'>
                <p>Correo Electronico: </p>
                <input
                    type='email'
                />
            </div>

            <div className='flex'>
                <p>Mensaje: </p>
               <textarea></textarea>
            </div>


 <input
                value='Enviar'
                type='submit'
            />
          
        </form>

    </div>
    )
}
