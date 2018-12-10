import React, { Component } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import Button from './Button';

class ThemeToggleButton extends Component{
    render(){
        return(
        <ThemeContext.Consumer>
            {({theme, toggleTheme}) => (
                <Button
                    top="0" left="0" position="absolute"
                    backgroundColor={theme.linkColor}
                    textColor={theme.backgroundColor}
                    onClick={toggleTheme}>
                    Change theme
                </Button>
            )}
        </ThemeContext.Consumer>
        );
    }
}

export default ThemeToggleButton;