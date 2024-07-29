import HttpProvider from './providers/http';
import RouterProvider from './providers/router';
import ThemeProvider from './providers/theme';

function App() {
  return (
    <HttpProvider>
      <ThemeProvider>
        <RouterProvider />
      </ThemeProvider>
    </HttpProvider>
  );
}

export default App;
