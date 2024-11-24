import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray: {
          100: "var(--gray-100)",
          300: "var(--gray-300)",
          500: "var(--gray-500)",
          700: "var(--gray-700)",
        },
        primary: {
          500: "var(--primary-500)",
          300: "var(--primary-300)",
          100: "var(--primary-100)",
        },
        black: "var(--black)",
        white: "var(--white)",
      },
      typography: {
        DEFAULT: {
          font: {
            family: ["pretendard", "sans-serif"],
          },
        },
        heading1: {
          css: {
            fontSize: "28px",
            fontWeight: "700",
            lineHeight: "36px",
            letterSpacing: "-0.1px",
          },
        },
        heading2: {
          css: {
            fontSize: "24px",
            fontWeight: "700",
            lineHeight: "32px",
            letterSpacing: "-0.1px",
          },
        },
        heading3: {
          css: {
            fontSize: "20px",
            fontWeight: "700",
            lineHeight: "28px",
            letterSpacing: "-0.1px",
          },
        },
        heading4: {
          css: {
            fontSize: "19px",
            fontWeight: "700",
            lineHeight: "25px",
            letterSpacing: "-0.1px",
          },
        },
        heading5: {
          css: {
            fontSize: "18px",
            fontWeight: "700",
            lineHeight: "24px",
            letterSpacing: "-0.1px",
          },
        },
        "body-16-bold": {
          css: {
            fontSize: "16px",
            fontWeight: "700",
            lineHeight: "24px",
            letterSpacing: "-0.1px",
          },
        },
        "body-16-medium": {
          css: {
            fontSize: "16px",
            fontWeight: "500",
            lineHeight: "24px",
            letterSpacing: "-0.1px",
          },
        },
        "body-15-bold": {
          css: {
            fontSize: "15px",
            fontWeight: "700",
            lineHeight: "21px",
            letterSpacing: "-0.1px",
          },
        },
        "body-15-medium": {
          css: {
            fontSize: "15px",
            fontWeight: "500",
            lineHeight: "21px",
            letterSpacing: "-0.1px",
          },
        },
        "body-15-regular": {
          css: {
            fontSize: "15px",
            fontWeight: "400",
            lineHeight: "21px",
            letterSpacing: "-0.1px",
          },
        },
        "body-14-bold": {
          css: {
            fontSize: "14px",
            fontWeight: "700",
            lineHeight: "20px",
            letterSpacing: "-0.1px",
          },
        },
        "body-14-medium": {
          css: {
            fontSize: "14px",
            fontWeight: "500",
            lineHeight: "20px",
            letterSpacing: "-0.1px",
          },
        },
        "body-14-regular": {
          css: {
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "20px",
            letterSpacing: "-0.1px",
          },
        },
        "body-13-bold": {
          css: {
            fontSize: "13px",
            fontWeight: "700",
            lineHeight: "17px",
            letterSpacing: "-0.1px",
          },
        },
        "body-13-medium": {
          css: {
            fontSize: "13px",
            fontWeight: "500",
            lineHeight: "17px",
            letterSpacing: "-0.1px",
          },
        },
        "caption-12-bold": {
          css: {
            fontSize: "12px",
            fontWeight: "700",
            lineHeight: "16px",
            letterSpacing: "-0.1px",
          },
        },
        "caption-12-medium": {
          css: {
            fontSize: "12px",
            fontWeight: "500",
            lineHeight: "16px",
            letterSpacing: "-0.1px",
          },
        },
        "caption-12-regular": {
          css: {
            fontSize: "12px",
            fontWeight: "400",
            lineHeight: "16px",
            letterSpacing: "-0.1px",
          },
        },
        "caption-11-bold": {
          css: {
            fontSize: "11px",
            fontWeight: "700",
            lineHeight: "14px",
            letterSpacing: "-0.1px",
          },
        },
        "caption-11-regular": {
          css: {
            fontSize: "11px",
            fontWeight: "400",
            lineHeight: "14px",
            letterSpacing: "-0.1px",
          },
        },
      },
    },
  },
  plugins: [
    typography,
    ({ addUtilities }: { addUtilities: any }) => {
      const newUtilities = {
        "shadow-sm": {
          "box-shadow": "0 0 11px rgba(33,33,33,.2)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
} satisfies Config;
