import React from 'react'
import smile from '../../assets/UI_Forum/Smile.svg'
import send from '../../assets/UI_Forum/Send [Fill].svg'
export const PostAnsewrs = () => {
    return (
        <>
            <div
                className='flex bg-gray-200 mx-10 py-1 focus:shadow-lg rounded-md'
            >
            <button
                className='bg-gray-300 p-3 m-2 rounded-md shadow-sm'
            >
                <img
                    src={smile}
                    alt={smile}
                />
            </button>
            <input
                name='postAnswer'
                className='outline-none bg-gray-200 w-11/12 font-Poppins text-gray-700'
                placeholder="Escreibe algo.."
            />
              <button
                className='bg-BlueSocial p-3 m-2 rounded-md shadow-sm'
            >
                <img
                    src={send}
                    alt={send}
                />
            </button>
            </div>
        </>
    )
}
