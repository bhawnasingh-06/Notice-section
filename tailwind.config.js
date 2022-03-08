module.exports = {
  jit: true,
  content: ["./src/**/*", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
    jit: true,
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
    theme: {
        extend: {},
    },
    plugins: [require("flowbite/plugin")],
};
