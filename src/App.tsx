import {
  BrowserRouter as Router
} from "react-router-dom"

import { AuthProvider } from './contexts/auth';
import { AlertProvider } from './contexts/alert';
import { Toast } from './components/Toast'
import Routes from "./routes";

function App() {

  return (
    <Router>
      <AlertProvider>
        <AuthProvider>
          <Toast/>
          <Routes/>  
        </AuthProvider>
      </AlertProvider>
    </Router>
  );
}

export default App;
