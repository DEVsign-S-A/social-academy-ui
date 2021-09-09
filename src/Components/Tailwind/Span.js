import tw from "tailwind-styled-components"

export const Span = tw.span`

    ${props => props.$icon_shown && 
        'relative left-90/0 bottom-9 text-2xl cursor-pointer tablet:relative tablet:left-96 tablet:bottom-9 tablet:bg-gray-500'
    };

    ${props => props.$span_sidebar &&
        "lg:mx-3 font-medium text-gray-500 lg:text-xl text-sm mx-2"
    };
`;