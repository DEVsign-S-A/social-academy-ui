import tw from "tailwind-styled-components"

export const P = tw.p`
    ${props => props.$textIntership &&
        "font-Poppins text-gray-600 font-medium text-sm col-span-7"
    };
    ${props => props.$bodyIntership &&
        "font-Poppins text-gray-600 font-medium"
    };
    ${props => props.$titleIntership &&
        "py-3 font-Poppins text-xl font-semibold text-gray-700"
    };

`;

export const Li = tw.li`
    ${props => props.$textIntership &&
        "font-Poppins text-gray-600 font-medium text-sm col-span-7"
    };
    `;

export const Div = tw.div`
${props => props.$littelContainer &&
    "grid grid-cols-8 gap-4 my-4 mx-2"
};
`