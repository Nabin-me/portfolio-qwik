/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      transitionTimingFunction: {
        "cubic-in-out": "cubic-bezier(0.6, 0.6, 0, 1)",
      },
      boxShadow: {
        "inner-btn":
          "0px -4px 0px 0px rgba(0, 0, 0, 0.25) inset, 0px 0px 0.881px 0.463px rgba(0, 0, 0, 0.25) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.06)",
        "outer-nav":
          "0px 58px 16px 0px rgba(0, 0, 0, 0.00), 0px 37px 15px 0px rgba(0, 0, 0, 0.01), 0px 21px 13px 0px rgba(0, 0, 0, 0.03), 0px 9px 9px 0px rgba(0, 0, 0, 0.04), 0px 2px 5px 0px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
