module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
        colors: {
            'blue': '#1DA1F2',
            'dark-blue': '#2795D9',
            'light-blue': '#EFF9FF',
            'red': '#E0245E',
            'dark-red': '#B21E53',
            'light-red': '#FEDDE2',
        },
        extend: {
            fontFamily: {
                "slab": ['RobotoSlab', 'ui-sans-serif', 'system-ui'],
                "condensed": ['RobotoCondensed', 'ui-serif', 'Georgia'],
            },
            colors: {
                'custom-blue': '#247BA0',
                'custom-green': '#70C1B3',
                'custom-yellow': '#B2DBBF',
                'custom-red': '#F25F5C'
            },
            spacing: {
                '1/2': '50%',
                '1/3': '33.333333%',
                '2/3': '66.666667%',
                '1/4': '25%',
                '2/4': '50%',
                '3/4': '75%',
                '3.5': '0.875rem',
                '4.5': '1.125rem',
                '5.5': '1.375rem',
                '9.5': '2.375rem',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};