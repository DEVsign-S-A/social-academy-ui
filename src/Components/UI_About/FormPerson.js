import React from 'react'

export const FormPerson = () => {
    return (
        <div className='bg-WhiteSocial shadow-2xl rounded-3xl mx-8 my-5 w-2/3'>

        <form>

            <div className='flex'>
                <p>Nombre: </p>
                <input
                    type='text'
                />
            </div>

            <div className='flex'>
                <p>Apellidos: </p>
                <input
                    type='text'
                />
            </div>

            <div className='flex'>
                <p>Email: </p>
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
                <p>Mensaje: </p>
               <textarea></textarea>
            </div>

        </form>

    </div>
    )
}
