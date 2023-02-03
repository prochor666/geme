module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            zIndex: {
                1000: 1000,
                2000: 2000,
                3000: 3000,
                4000: 4000,
                5000: 5000,
                6000: 6000,
                7000: 7000,
                8000: 8000,
                9000: 9000,
                9999: 9999,
            },

            // custom fonts
            fontFamily: {
                RobotoSlabRegular: ['RobotoSlabRegular', 'sans-serif'],
                RobotoSlabThin: ['RobotoSlabThin', 'sans-serif'],
                RobotoSlabLight: ['RobotoSlabLight', 'sans-serif'],
                RobotoSlabBold: ['RobotoSlabBold', 'sans-serif'],
                LeagueSpartanBold: ['LeagueSpartanBold', 'sans-serif'],
                LibraSans: ['LibraSans', 'sans-serif'],
                LibraSansBold: ['LibraSansBold', 'sans-serif'],
                LibraSansBoldItalic: ['LibraSansBoldItalic', 'sans-serif'],
                LibraSansItalic: ['LibraSansItalic', 'sans-serif'],
            },

            colors: {
                transparent: 'transparent',
            },

            // animation class
            animation: {
                fadein: 'fadeIn 500ms ease-in',
                fadeout: 'fadeOut 500ms ease-out',
            },

            // actual animation
            keyframes: (theme) => ({
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeOut: {
                    '100%': { opacity: '1' },
                    '0%': { opacity: '0' },
                },
            }),
        },
    },
    variants: {
        extend: {
            backgroundColor: ['checked'],
            borderColor: ['checked'],
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
    ],
};
