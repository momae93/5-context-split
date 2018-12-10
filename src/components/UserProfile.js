import React from 'react';
import Button from './Button';
import UserContext from '../contexts/UserContext';
import ThemeContext from '../contexts/ThemeContext';

const UserProfile = ({ onSubmit = () => { } }) => (
  <ThemeContext.Consumer>{
    theme => (
      <UserContext.Consumer>
        {({ username }) => (
          <React.Fragment>
            <label for="username">
              {username}
            </label>
            <Button
              backgroundColor={theme.linkColor}
              textColor={theme.backgroundColor}
              onClick={() => onSubmit(username)}>
              logout
        </Button>
          </React.Fragment>
        )}
      </UserContext.Consumer>
    )}
  </ThemeContext.Consumer>
);

export default UserProfile;
