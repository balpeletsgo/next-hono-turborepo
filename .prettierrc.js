/** @type {import("prettier").Config} */
module.exports = {
  ...require("@workspace/prettier-config"),
  plugins: ["prettier-plugin-tailwindcss"],
};
