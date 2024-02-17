/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{astro, html,ts, tsx}',
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            text: 'rgba(236, 211, 248, 1)',
            background: 'rgba(37, 37, 37, 1)',
            accent: 'rgba(223, 38, 96, 1)',
            container: 'rgba(236, 211, 248, 0.05)',
            placeholder: 'rgba(236, 211, 248, 0.5)',
            primary: {
                DEFAULT: 'rgba(255, 122, 250, 1)',
                o25: 'rgba(225, 55, 194, 0.3)',
                o50: 'rgba(225, 55, 194, 0.5)',
                hover: 'rgba(229, 117, 215, 1)',
            },
            secondary: 'rgba(49, 7, 20, 1)',
        },
        fontFamily: {
            base: ['Lato', 'monospace'],
            heading: ["'Rubik Mono One'", 'sans-serif'],
        },
        fontSize: {
                    base: '1rem',
                    h1: '4.21rem',
                    h2: '3.16rem',
                    h3: '2.37rem',
                    h4: '1.78rem',
                    h5: '1.33rem',
                    sm: '0.75rem',
                    'body-bold': '1rem',
        },
        boxShadow: {
            btnH: '0px 0px 20px rgba(236, 211, 248, 0.3)',
        },
        transitionTimingFunction: {
            bounce: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        },
    }
}