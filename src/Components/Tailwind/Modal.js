import tw from "tailwind-styled-components"

export const Modal = tw.div`

    ${props => props.$primary_modal && 
        'container bg-white shadow-xl border-2 w-auto m-5 p-10 rounded-lg overflow-x-hidden relative'
    };

`;

export const TitleModal = tw.title`
    ${props => props.$title_color_modal &&
        'mx-2 text-gray-700 font-medium'
    }
`;

export const InputModal = tw.input`
    
${(props) =>
  props.$label_modal_input &&
  "texto text-base ring-white focus:ring-transparent mx-3 text-gray-700 outline-none"};

  ${props => props.$btn_radio_red &&
        'className="cursor-pointer form-radio h-6 w-6 text-RedOfficial'
    }

    ${props => props.$btn_radio_yellow &&
        'className="cursor-pointer form-radio h-6 w-6 text-LightYellowOfficial'
    }
    ${props => props.$btn_radio_orange &&
        'className="cursor-pointer form-radio h-6 w-6 text-OrangeOfficial'
    }
    ${props => props.$btn_radio_blue &&
        'className="cursor-pointer form-radio h-6 w-6 text-BlueOfficial'
    }
    ${props => props.$btn_radio_skyblue &&
        'className="cursor-pointer form-radio h-6 w-6 text-SkyBlueOfficial'
    }
    ${props => props.$btn_radio_green &&
        'className="cursor-pointer form-radio h-6 w-6 text-GreenOfficial'
    }
    ${props => props.$btn_radio_ligthgreen &&
        'className="cursor-pointer form-radio h-6 w-6 text-LigthGreenOfficial'
    }
    ${props => props.$btn_radio_pink &&
        'className="cursor-pointer form-radio h-6 w-6 text-PinkOfficial'
    }
    ${props => props.$btn_radio_purple &&
        'className="cursor-pointer form-radio h-6 w-6 text-PurpleOfficial'
    }
    ${props => props.$btn_radio_gray &&
        'className="cursor-pointer form-radio h-6 w-6 text-GrayOfficial'
    }
`;

export const DivModal = tw.div`
    ${props => props.$container_rounded &&
        'px-3 border-2 border-blur-lg flex justify-between m-5 rounded-md'
    }

    ${props => props.$color_modal && 
        "container absolute z-40 bg-white -right-2 top-auto mt-7 shadow-lg border-2 w-auto m-5 rounded-md overflow-x-hidden"
    };
    ${props => props.$color_modal2 && 
        "container absolute z-40 bg-white right-2 top-auto mt-7 shadow-lg border-2 w-52 m-5 rounded-md overflow-x-hidden"
    };
    ${props => props.$filter_modal && 
        "container absolute z-40 bg-white top-auto mt-7 py-6 px-2 right-20 shadow-lg border-2 w-auto m-5 rounded-md overflow-x-hidden"
    };
    ${props => props.$color_modal_grid &&
        'mx-3 grid grid-cols-5 gap-4 my-2 rounded-full'
    }
`;

export const ButtonModal = tw.button`

    ${props => props.$icon_button_pantone &&
        'mx-2 opacity-50 hover:opacity-100'
    }

    ${props => props.$icon_button_delete &&
        'mx-2 opacity-50 hover:opacity-100'
    }
`;