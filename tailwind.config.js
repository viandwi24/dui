module.exports = {
  theme: {
    colors: {
      // Create a custom color that uses a CSS custom value
      foreground: "rgb(var(--color-foreground) / <alpha-value>)",
      background: "rgb(var(--color-background) / <alpha-value>)",
    },
  },
  plugins: [
    // Set a default value on the `:root` element
    ({ addBase }) =>
      addBase({
        ":root": {
          "--color-foreground": "rgb(0 0 0)",
          "--color-background": "rgb(255 255 255)",
        },
      }),
  ],
};