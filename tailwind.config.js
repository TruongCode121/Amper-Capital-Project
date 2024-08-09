/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        svn_gilory_thin: ["SVN_Gilory_Thin", "sans-serif"],
        svn_gilory_regular: ["SVN_Gilory_Regular", "sans-serif"],
        svn_gilory_medium: ["SVN_Gilory_Medium", "sans-serif"],
        svn_gilory_semibold: ["SVN_Gilory_Semibold", "sans-serif"],
        svn_gilory_bold: ["SVN_Gilory_Bold", "sans-serif"],
        svn_gilory_extrabold: ["SVN_Gilory_Extrabold", "sans-serif"],
        svn_gilory_black: ["SVN_Gilory_Black", "sans-serif"],
      },
      colors: {
        "Loan-Afm-111": "var(--Loan-Afm-111)",
        "Loan-Afm-444": "var(--Loan-Afm-444)",
        "secondary-30": "var(--secondary-30)",
        "trinh-Gumac-textden": "var(--trinh-Gumac-textden)",
        "Loan-Baa-text-baa": "var(--Loan-Baa-text-baa)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
