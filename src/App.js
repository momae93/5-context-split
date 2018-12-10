import React, { Component, Suspense } from 'react';
import ThemeContext, { themes } from './contexts/ThemeContext';
import MainLayout from './layouts/MainLayout';
import UserContext from './contexts/UserContext';
import ThemeToggleButton from './components/ThemeToggleButton';
import ImageLoading from './components/ImageLoading'

const UserProfile = React.lazy(() => import('./components/UserProfile'));
const LoginForm = React.lazy(() => import('./components/LoginForm'));

const users = [{
  username: "mickael",
  password: "mickapwd"
}, {
  username: "john",
  password: "johnpwd"
}];

class App extends Component {

  toggleTheme = () => {
    const theme = this.state.theme === themes.dark ? themes.light : themes.dark;
    this.setState({ theme })
  };

  onLogin = (username, password) => {
    const isLoggedIn = users.find((e) => e.username === username && e.password === password) !== undefined;
    const name = isLoggedIn ? username : "";
    this.setState({ isLoggedIn, username: name });
  }

  onLogout = () => {
    this.setState({ isLoggedIn: false, username: undefined })
  }

  state = {
    theme: themes.dark,
    toggleTheme: this.toggleTheme,
    isLoggedIn: false,
    username: undefined
  };

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <UserContext.Provider value={{ username: this.state.username }}>
          <MainLayout>
            <ThemeToggleButton />
            <Suspense fallback={<ImageLoading />}>
              {
                (!this.state.isLoggedIn) ? <LoginForm onSubmit={this.onLogin} /> :
                  <UserProfile onSubmit={this.onLogout} />
              }
            </Suspense>
          </MainLayout>
        </UserContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

export default App;
