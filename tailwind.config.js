/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-green": "0 1px 15px 0px #077252",
        "custom-hover": "0 3.2rem 6.4rem rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
