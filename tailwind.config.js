/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    colors : {
        primary : '#000',
        second : '#ffff',
        third  : '#57BD8B',
        fourth : '#FF5B00',
        content : '#ACACAC'
    },
    fontFamily : {
      head : 'Volkhov'
    }
  },
  plugins: [],
}
