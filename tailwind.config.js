/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#FFFFFF",
          dark: "#121212",
        },
        foreground: {
          DEFAULT: "#171717",
          dark: "#FAFAFA",
        },
        card: {
          DEFAULT: "#FFFFFF",
          dark: "#2A2A2A",
        },
        primary: {
          DEFAULT: "#0F9F59",
          foreground: "#FAFAFA",
        },
        secondary: {
          DEFAULT: "#F5F5F5",
          foreground: "#262626",
          dark: "#3A3A3A",
        },
        muted: {
          DEFAULT: "#F5F5F5",
          foreground: "#8E8E8E",
          dark: "#3A3A3A",
          "foreground-dark": "#A3A3A3",
        },
        accent: {
          DEFAULT: "#F5F5F5",
          foreground: "#262626",
          dark: "#3A3A3A",
        },
        destructive: {
          DEFAULT: "#E11D48",
          dark: "#F87171",
        },
        border: {
          DEFAULT: "#EBEBEB",
          dark: "rgba(255,255,255,0.1)",
        },
        input: {
          DEFAULT: "#EBEBEB",
          dark: "rgba(255,255,255,0.15)",
        },
        ring: "#0F9F59",
      },
      borderRadius: {
        sm: 10,
        md: 13,
        lg: 16,
        xl: 22,
        "2xl": 29,
      },
      fontFamily: {
        sans: ["Inter_400Regular"],
        "sans-light": ["Inter_300Light"],
        "sans-medium": ["Inter_500Medium"],
        "sans-semibold": ["Inter_600SemiBold"],
        "sans-bold": ["Inter_700Bold"],
        "sans-extrabold": ["Inter_800ExtraBold"],
      },
    },
  },
  plugins: [],
};
