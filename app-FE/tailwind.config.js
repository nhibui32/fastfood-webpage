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
        primary: "rgba(var(--primary))",
        secondary:"rgba(var(--secondary))",
        background:"rgba(var(--background))",
        containerBackground:"rgba(var(--containerBackground))",
        primaryText:"rgba(var(--primaryText))",
        secondaryText:"rgba(var(--secondaryText))",
        border:"rgba(var(--border))",
        hoverBackground: "rgba(var(--hoverBackground))",
      },
      screens: {
        desktop: '1440px',
      },
    },
  },
  plugins: [],
};
