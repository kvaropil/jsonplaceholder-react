import { ThemeProvider } from 'styled-components';
import './App.css';
import { PostsList } from './components/PostsList';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <p>JsonPlaceholder-React demo</p>
        <PostsList />
      </>
    </ThemeProvider>
  );
}

export default App;
