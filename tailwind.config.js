/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			sm: "640px",
			//mobile
			// => @media (min-width: 640px) { ... }
			//  use it like this
			// text-xs sm:text-base

			md: "768px",
			//tablet or mobile rotated
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			//laptop-small
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			//laptop
			// => @media (min-width: 1280px) { ... }

			"2xl": "1536px",
			//PC
			// => @media (min-width: 1536px) { ... }
		},
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontFamily: {
				space: ["var(--font-space)"],
				saira: ["var(--font-saira)"],
			},
		},
	},
	plugins: [],
};
