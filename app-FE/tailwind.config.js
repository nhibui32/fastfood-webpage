export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fieryRed: '#A21601',
        deepCrimson: '#920D0D',
        brickRed: '#8F2A16',
        goldenPeach: '#FFC259',
        sunflowerGold: '#EBAB08',
        primary: "rgba(var(--primary))"
      },
      screens: {
        desktop: '1440px',
      },
    },
  },
  plugins: [],
};
