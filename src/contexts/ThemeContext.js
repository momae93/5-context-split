import React from 'react';

export const themes = {
  
  dark: {
    backgroundColor: '#282c34',
    contrastColor: '#333',
    textColor: 'white',
    linkColor: '#53C6FF'
  },

 light: {
    backgroundColor: 'white',
    contrastColor: '#333',
    textColor: 'black',
    linkColor: '#53C6FF'
  }

};

const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {}
});

export default ThemeContext;
