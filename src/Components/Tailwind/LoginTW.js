import tw from "tailwind-styled-components";

export const PSocial = tw.p`
    ${(props) =>
      props.$SocialIconsText &&
      "xs:text-xs lg:text-base text-gray-600 font-Poppins font-semibold my-5"}
`;

export const BtnSocialIcon = tw.button`
    ${(props) =>
        props.$Blue &&
        "h-11 w-11 border-2 border-gray-500 text-gray-500 rounded-full m-3 hover:border-primary hover:text-primary transition-colors duration-300 ease-linear"}
 
    ${(props) =>
        props.$Red &&
        "h-11 w-11 border-2 border-gray-500 text-gray-500 rounded-full m-3 hover:border-second hover:text-second transition-colors duration-300 ease-linear"}
`;
