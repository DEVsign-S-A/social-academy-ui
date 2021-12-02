module.exports = {
	//borra los dise;os por default de html
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			xs: "300px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
		listStyleType: {
			none: "disc",
			disc: "disc",
			decimal: "decimal",
			square: "square",
			roman: "upper-roman",
		},
		extend: {
			colors: {
				primary: "#24345F",
				second: "#DB255D",
				BlueSocial: "#409FFF",
				GreenSocial: "#3DCC79",
				SkySocial: "#22CCE2",
				YellowSocial: "#FFD454",
				WhiteSocial: "#fafafa",
			},
			fontFamily: {
				Poppins: ["Poppins"],
				Montserrat: ["Montserrat"],
			},
		},
	},
	variants: {
		extend: {
			opacity: ["disabled"],
			backgroundColor: ["disabled"],
			cursor: ["disabled"],
		},
	},
	plugins: [],
	corePlugins: {
		listStyleType: true,
	},
};
