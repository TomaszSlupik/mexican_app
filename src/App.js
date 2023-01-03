import './App.scss';
import Header from './components/Header/Header';
import theme from './theme/theme';
import { ThemeProvider } from '@mui/material';
import Main from './components/Main/Main';

function App() {
  return (
    <div>
        <ThemeProvider
        theme={theme}>
        <Header />
        <Main />
        </ThemeProvider>
    </div>
  );
}

export default App;
