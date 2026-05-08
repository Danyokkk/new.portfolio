import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}", "./src/lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-unbounded)", "ui-sans-serif", "system-ui"],
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
      },
      colors: {
        ink: "#030512",
        midnight: "#070B24",
        plasma: "#8B5CFF",
        volt: "#21E6FF",
        aurora: "#F84DFF",
        signal: "#A7FF5F",
      },
      boxShadow: {
        glow: "0 0 60px rgba(33, 230, 255, 0.22)",
        violet: "0 28px 100px rgba(139, 92, 255, 0.3)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at 15% 12%, rgba(33,230,255,.22), transparent 28rem), radial-gradient(circle at 84% 8%, rgba(248,77,255,.20), transparent 30rem), linear-gradient(180deg, #030512 0%, #070B24 54%, #02030B 100%)",
        "mesh-lines":
          "linear-gradient(rgba(180,190,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(180,190,255,.06) 1px, transparent 1px)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-18px,0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        orbit: {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        shimmer: "shimmer 4s ease-in-out infinite",
        orbit: "orbit 18s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
