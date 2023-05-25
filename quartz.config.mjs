export default {
  siteTitle: "🪴 Quartz 4.0",
  pathResolution: 'absolute', // one of 'absolute' or 'relative'
  enableLatex: true, // whether to process and render latex (increases bundle size)
  theme: {
    typography: { // loaded from Google Fonts
      header: "Schibsted Grotesk",
      body: "Source Sans Pro",
      code: "IBM Plex Mono",
    },
    colors: {
      lightMode: {
        light: '#faf8f8',
        lightgray: '#e8e8e8',
        gray: '#dadada',
        darkgray: '#4e4e4e',
        dark: '#141021',
        secondary: '#284b63',
        tertiary: '#84a59d',
        highlight: 'rgba(143, 159, 169, 0.15)',
      },
      darkMode: {
        light: '#1e1e21',
        lightgray: '#292629',
        gray: '#343434',
        darkgray: '#d4d4d4',
        dark: '#fbfffe',
        secondary: '#6b879a',
        tertiary: '#84a59d',
        highlight: 'rgba(143, 159, 169, 0.15)',
      },
    }
  }
}
