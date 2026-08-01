import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './stores/store';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
          <AppRoutes />
    </Provider>
  </BrowserRouter>
)
