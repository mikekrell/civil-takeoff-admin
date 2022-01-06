module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        input: "0px 0px 0px 4px #8B5CF61A",
      },
      colors: {
        grey: {
          0: "#FFFFFF",
          5: "#F9FAFB",
          10: "#F3F4F6",
          20: "#E5E7EB",
          30: "#D1D5DB",
          40: "#9CA3AF",
          50: "#6B7280",
          60: "#4B5563",
          70: "#374151",
          80: "#1F2937",
          90: "#111827",
        },
        violet: {
          5: "#F5F3FF",
          10: "#EDE9FE",
          20: "#DDD6FE",
          30: "#C4B5FD",
          40: "#A78BFA",
          50: "#8B5CF6",
          60: "#7C3AED",
          70: "#6D28D9",
          80: "#5B21B6",
          90: "#4C1D95",
        },
        pink: {
          5: "#FDF2F8",
          10: "#FCE7F3",
          20: "#FBCFE8",
          30: "#F9A8D4",
          40: "#F472B6",
          50: "#EC4899",
          60: "#DB2777",
          70: "#BE185D",
          80: "#9D174D",
          90: "#831843",
        },
        orange: {
          5: "#FFF7ED",
          10: "#FFEDD5",
          20: "#FED7AA",
          30: "#FDBA74",
          40: "#FB923C",
          50: "#F97316",
          60: "#EA580C",
          70: "#C2410C",
          80: "#9A3412",
          90: "#7C2D12",
        },
        teal: {
          5: "#F0FDFA",
          10: "#CCFBF1",
          20: "#99F6E4",
          30: "#5EEAD4",
          40: "#2DD4BF",
          50: "#14B8A6",
          60: "#0D9488",
          70: "#0F766E",
          80: "#115E59",
          90: "#134E4A",
        },
        cyan: {
          5: "#ECFEFF",
          10: "#CFFAFE",
          20: "#BAE6FD",
          30: "#67E8F9",
          40: "#22D3EE",
          50: "#06B6D4",
          60: "#0891B2",
          70: "#0E7490",
          80: "#155E75",
          90: "#164E63",
        },
        indigo: {
          5: "#EEF2FF",
          10: "#E0E7FF",
          20: "#C7D2FE",
          30: "#A5B4FC",
          40: "#818CF8",
          50: "#6366F1",
          60: "#4F46E5",
          70: "#4338CA",
          80: "#3730A3",
          90: "#312E81",
        },
        fuschia: {
          5: "#FDF4FF",
          10: "#FAE8FF",
          20: "#F5D0FE",
          30: "#F0ABFC",
          40: "#E879F9",
          50: "#D946EF",
          60: "#C026D3",
          70: "#A21CAF",
          80: "#86198F",
          90: "#701A75",
        },
        rose: {
          5: "#FFF1F2",
          10: "#FFE4E6",
          20: "#FECDD3",
          30: "#FDA4AF",
          40: "#FB7185",
          50: "#F43F5E",
          60: "#E11D48",
          70: "#BE123C",
          80: "#9F1239",
          90: "#881337",
        },
        yellow: {
          5: "#FEFCE8",
          10: "#FEF9C3",
          20: "#FEF08A",
          30: "#FDE047",
          40: "#FACC15",
          50: "#EAB308",
          60: "#CA8A04",
          70: "#A16207",
          80: "#854D0E",
          90: "#713F12",
        },
        emerald: {
          5: "#ECFDF5",
          10: "#CCFBF1",
          20: "#A7F3D0",
          30: "#6EE7B7",
          40: "#34D399",
          50: "#10B981",
          60: "#059669",
          70: "#047857",
          80: "#065F46",
          90: "#064E3B",
        },
        blue: {
          5: "#EFF6FF",
          10: "#DBEAFE",
          20: "#BFDBFE",
          30: "#93C5FD",
          40: "#60A5FA",
          50: "#3B82F6",
          60: "#2563EB",
          70: "#1D4ED8",
          80: "#1E40AF",
          90: "#1E3A8A",
        },
        vice: {
          start: "#7C53FF",
          stop: "#F796FF",
        },
      },
      heigth: {
        "18": "4.5rem",
      },
      borderRadius: {
        none: "0px",
        soft: "2px",
        base: "4px",
        rounded: "8px",
        circle: "9999px",
      },
      spacing: {
        "2xsmall": "0.25rem",
        xsmall: "0.5rem",
        small: "0.75rem",
        base: "1rem",
        large: "1.5rem",
        xlarge: "2rem",
        "2xlarge": "2.5rem",
        "3xlarge": "3rem",
        "4xlarge": "3.5rem",
        "5xlarge": "4rem",
        "6xlarge": "6rem",
      },
      minWidth: {
        sidebar: "240px",
      },
      maxWidth: {
        sidebar: "240px",
      },
      minHeight: {
        topbar: "56px",
        content: "calc(100vh - 56px)",
      },
      maxHeight: {
        topbar: "56px",
      },
      lineHeight: {
        xsmall: "1rem",
        small: "1.25rem",
        base: "1.5rem",
        large: "2.25rem",
        xlarge: "3rem",
        "2xlarge": "4rem",
        "3xlarge": "4.5rem",
        "4xlarge": "6rem",
      },
      fontSize: {
        xsmall: "10px",
        small: "12px",
        base: "14px",
        large: "16px",
        xlarge: "24px",
        "2xlarge": "30px",
        "3xlarge": "40px",
        "4xlarge": "48px",
        "5xlarge": "60px",
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Ubuntu",
          "sans-serif",
        ],
        mono: ["Roboto Mono", "Menlo", "monospace"],
      },
      screens: {
        xsmall: "0px",
        small: "769px",
        medium: "1025px",
        large: "1464px",
      },
      boxShadow: {
        cta: "0px 0px 0px 4px rgba(124, 58, 237, 0.1)",
      },
      keyframes: {
        ring: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        ring: "ring 2.2s cubic-bezier(0.5, 0, 0.5, 1) infinite",
      },
    },
  },
  plugins: [],
}
