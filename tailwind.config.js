/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",   // App Router
        "./pages/**/*.{js,ts,jsx,tsx}", // Pages Router
        "./components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: ['var(--font-inter)'],
                dm: ['var(--font-dm-sans)'],
            },
            backgroundImage: {
                'dark-gradient':
                    'linear-gradient(90deg, #0B1426 0%, #141C2D 53.4%, #1C2333 100%)',
            },
        },
    },
    plugins: [],
}
