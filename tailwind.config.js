module.exports = {
  theme: {
    extend: {
      colors: {
        coa: {
          'gray-100': '#EDF2F6',
          'gray-200': '#B8BBCF',
          'gray-300': '#47495C',
          'gray-400': '#6B8CA8',
          'gray-500': '#383E58',
          'black': '#060710',
          'black-100': '#0A1032',
          'purle': '#433AD1',
          'brown': '#A98D58',
        },
        cob: {
          'covid-gray': '#FCFCFD',
          'covid-gray-01': '#FBF9FC',
          'covid-gray-bg0': '#8dc1c1',
          'covid-gray-bg1': '#a6bebd',
          'covid-gray-bg2': '#75a9a8',
          'covid-black': '#404B53',
          'covid-green': '#01B075',
        }

      },
      spacing: {
        '36': '9rem',
        '70': '18rem',
        '72': '22rem',

      },
      fontFamily: {
        sans: [
          'Nunito Sans',
          'Roboto',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
      },
    }
  },
  variants: {
    transform: ['responsive', 'group-hover'],
    transformOrigin: ['responsive', 'group-hover'],
    scale: ['responsive', 'hover', 'focus', 'group-hover'],
    rotate: ['responsive', 'hover', 'focus', 'group-hover'],
    translate: ['responsive', 'hover', 'focus', 'group-hover'],
    skew: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: []
}
