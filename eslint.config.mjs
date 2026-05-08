import nextVitals from "eslint-config-next/core-web-vitals";

const config = [
  {
    ignores: [".next/**", "node_modules/**", "out/**", "dist/**"],
  },
  ...nextVitals,
];

export default config;
