const config = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                levitate: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-2px)' },
                },
            },
            animation: {
                levitate: 'levitate 2s ease-in-out infinite',
            },
        },
    },
    plugins: [],
    extend: {
        keyframes: {
            levitate: {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-2px)' },
            },
            fadeIn: {
                '0%': { opacity: '0' },
                '100%': { opacity: '1' },
            },
        },
        animation: {
            levitate: 'levitate 2s ease-in-out infinite',
            fadeIn: 'fadeIn 0.5s ease-in-out forwards',
        },
    },
};
export default config;
