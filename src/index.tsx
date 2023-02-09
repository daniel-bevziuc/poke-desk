import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'providers/ThemeProvider';
import { QueryProvider } from 'providers/QueryProvider';
import App from './App';

render(
  <BrowserRouter>
    <ThemeProvider>
      <QueryProvider>
        <App />
      </QueryProvider>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
