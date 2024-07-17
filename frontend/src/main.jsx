import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './lang/index.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AuthContextProvider } from './context/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={i18n}>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </I18nextProvider>
);
