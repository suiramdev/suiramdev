/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            backgroundImage: {
                'grid-pattern': 'linear-gradient(to bottom, rgba(0, 0, 0 , 0.8), transparent, transparent), url(/grid.svg)',
            },
        },
    },
    plugins: [],
}
