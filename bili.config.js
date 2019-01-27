module.exports = {
  banner: true,
  extract: false,
  input: "src/index.js",
  name: "index",
  plugins: [
    "vue",
    require("rollup-plugin-copy")({
      "public/flags": "dist/flags"
    })
  ]
};
