import tw from "tailwind-styled-components"

export const Li = tw.li`
    ${props => props.$items_sidebar &&
        "cursor-pointer px-3 py-4 mx-3 my-2 cursor-pointer rounded-lg transition-all ease-linear duration-200 hover:bg-white hover:shadow-md transition-all ease-linear duration-200"
    }
    ${props => props.$items_sidebar_active &&
        "bg-white rounded-lg shadow-md transition-all ease-linear duration-200"
    }
`;