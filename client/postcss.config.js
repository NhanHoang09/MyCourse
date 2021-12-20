// module.exports = {
//   content: ["./src/**/*.{js,jsx}"],
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// };
const tailwindcss = require("tailwindcss");
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  plugins: [tailwindcss("./tailwind.config.js"), require("autoprefixer")],
};
