import tw from "tailwind-styled-components"

export const Button = tw.button`

    ${props => props.$primary && 
        'py-3.5 px-6 text-white bg-BlueSocial rounded'
    };

    ${props => props.$primaryligh && 
        'py-2.5 px-6 text-white bg-BlueSocial rounded'
    };

    ${props => props.$border100 && 
        'w-full py-3 px-6 text-white bg-BlueSocial border-blue-500 border-b-4 rounded'
    };

    ${props => props.$border && 
        'py-3 px-6 text-white bg-BlueSocial border-blue-500 border-b-4 rounded'
    };

    ${props => props.$borderligh && 
        'py-2 px-6 text-white bg-BlueSocial border-blue-500 border-b-4 rounded'
    };

    ${props => props.$primaryicon && 
        'py-3.5 px-6 text-white bg-BlueSocial inline-flex items-center rounded'
    };




    ${props => props.$primarylighicon && 
        'py-2.5 px-6 text-white bg-BlueSocial inline-flex items-center rounded'
    };

    ${props => props.$bordericon && 
        'py-3 px-6 text-white bg-BlueSocial border-blue-500 border-b-4 inline-flex items-center rounded'
    };

    ${props => props.$borderlighicon && 
        'py-2 px-6 text-white bg-BlueSocial border-blue-500 border-b-4 inline-flex items-center rounded-lg font-Poppins font-semibold'
    };  

    ${props => props.$border_lighi_con_grid && 
        'py-2 px-6 text-white bg-BlueSocial border-blue-500 border-b-4 inline-flex items-center mx-5 my-8 rounded-lg font-Poppins font-medium'
    };  
    

    
    ${props => props.$transparent && 
        'py-3.5 px-6 text-gray-700 border border-white rounded'
    };

    ${props => props.$transparenticon && 
        'py-3.5 px-6 text-gray-700 border border-white inline-flex items-center rounded'
    };

    ${props => props.$transparentligh && 
        'py-2.5 px-6 text-gray-700 border border-white rounded'
    };

    ${props => props.$transparentLighicon && 
        'py-2.5 px-6 text-gray-700 border border-white inline-flex items-center rounded'
    };



    ${props => props.$white && 
        'py-3.5 px-6 text-gray-700 bg-white rounded'
    };

    ${props => props.$whiteicon && 
        'py-3.5 px-6 text-gray-700 bg-white inline-flex items-center rounded'
    };

    ${props => props.$whiteligh && 
        'py-2.5 px-6 text-gray-700 bg-white rounded'
    };

    ${props => props.$whiteLighicon && 
        'py-2.5 px-6 text-gray-700 bg-white inline-flex items-center rounded'
    };



    ${props => props.$gray && 
        'py-3.5 px-6 text-gray-500 bg-gray-100 rounded'
    };

    ${props => props.$grayicon && 
        'py-3.5 px-6 text-gray-500 bg-gray-100 inline-flex items-center rounded'
    };

    ${props => props.$grayligh && 
        'py-2.5 px-6 text-gray-500 bg-gray-100 rounded'
    };

    ${props => props.$graylighicon && 
        'py-2.5 px-6 text-gray-500 bg-gray-100 inline-flex items-center rounded'
    };



    ${props => props.$addbtn && 
        'py-3.5 px-6 text-white bg-BlueSocial inline-flex items-center rounded'
    };

    ${props => props.$addborderbtn && 
        'py-3 px-6 text-white bg-BlueSocial border-blue-500 border-b-4 inline-flex items-center rounded'
    };
    
    ${props => props.$modalclose &&
        'bg-gray-100 hover:bg-gray-200 p-2 absolute right-7 transition-all duration-300 ease'
    };


    /*
      Button Flex cursor
    */

     ${props => props.$btn_flex_pointer &&
        "flex cursor-pointer"
    }
`;  