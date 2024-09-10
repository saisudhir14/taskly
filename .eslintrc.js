// https://docs.expo.dev/guides/using-eslint/
/*
module.exports = {
  extends: 'expo',
};
*/
//to integrate Prettier with ESlint, update your .eslintrc.js as follows:

module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
};
