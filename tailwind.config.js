module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
        extend: {
            fontFamily: {
                "slab": ['RobotoSlab', 'ui-sans-serif', 'system-ui'],
                "condensed": ['RobotoCondensed', 'ui-serif', 'Georgia'],
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};