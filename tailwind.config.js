/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          50: "#faf5ff",
          700: "#6d28d9",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      backgroundColor: {
        "root-dark": "#111827", // This is the same as bg-gray-900
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        animate: {
          "0%": {
            transform: "translateY(0) rotate(0deg)",
            opacity: "1",
            borderRadius: "0",
          },
          "100%": {
            transform: "translateY(-1000px) rotate(720deg)",
            opacity: "0",
            borderRadius: "50%",
          },
        },
        colorChange: {
          "0%, 100%": {
            color: "white",
          },
          "14%": {
            backgroundColor: "rgba(255, 105, 180, 0.4)",
          },
          "28%": {
            backgroundColor: "rgba(138, 43, 226, 0.4)",
          },
          "42%": {
            backgroundColor: "rgba(30, 144, 255, 0.4)",
          },
          "56%": {
            backgroundColor: "rgba(0, 191, 255, 0.4)",
          },
          "70%": {
            backgroundColor: "rgba(148, 0, 211, 0.4)",
          },
          "84%": {
            backgroundColor: "rgba(255, 20, 147, 0.4)",
          },
          "89%": {
            backgroundColor: "rgba(75, 0, 130, 0.4)",
          },
        },
        wave: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
          "10%": {
            transform: "scale(0.9)",
            opacity: 0,
          },
          "90%": {
            transform: "scale(1)",
            opacity: 1,
          },
        },
        border: {
          to: {
            "--border-angle": "360deg",
          },
        },
      },
      animation: {
        animate: "animate 25s linear infinite",
        colorChange: "colorChange 7s infinite",
        "wave-fast": "wave 10s linear infinite",
        "wave-faster": "wave 8s linear infinite",
        "scale-up": "scale-up 0.3s ease-out",
        "gradient-x": "gradient-x 3s ease infinite",
        border: "border 4s linear infinite",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
    variants: {
      extend: {
        scale: ["hover", "focus"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
