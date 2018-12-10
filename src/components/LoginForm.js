import React from 'react';
import ThemeContext from '../contexts/ThemeContext';
import Button from './Button';

let username = "";
let password = "";

//#region HandleChanged

function handleChange(event) {
  switch (event.target.id) {
    case "username":
      username = event.target.value;
      break;
    case "password":
      password = event.target.value;
      break;
    default:
      break;
  }
}

//#endregion

const LoginForm = ({ onSubmit = (username, password) => { } }) => (
  <ThemeContext.Consumer>
    {
      ({ theme, toggleTheme }) => (
        <div>
          <div>
            <label for="username" style={{ color: theme.textColor }}>
              username
          </label>
            <input name="username" id="username" onChange={handleChange} />
          </div>

          <div>
            <label for="password" style={{ color: theme.textColor }}>
              password
          </label>
            <input name="password" id="password" onChange={handleChange} />
          </div>

          <Button
            backgroundColor={theme.linkColor}
            textColor={theme.backgroundColor}
            onClick={() => onSubmit(username, password)}>
            login
        </Button>
        </div>
      )}
  </ThemeContext.Consumer>
);

export default LoginForm;
