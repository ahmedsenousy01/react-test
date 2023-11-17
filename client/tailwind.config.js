/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class", "dark"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				foreground: {
					DEFAULT: "rgb(var(--foreground) / <alpha-value>)",
					extreme: "rgb(var(--foreground-extreme) / <alpha-value>)",
				},
				background: {
					DEFAULT: "rgb(var(--background) / <alpha-value>)",
					extreme: "rgb(var(--background-extreme) / <alpha-value>)",
				},
			},
		},
	},
	plugins: [],
}

