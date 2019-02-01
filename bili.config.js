module.exports = {
  banner: true,
  output: {
    extractCSS: false
  },
  plugins: {
    vue: true,
    copy: {
      "src/assets": "dist/assets"
    }
  }
};
