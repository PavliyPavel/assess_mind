import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import MainForm from './pages/main-form';
import AuthContext from './context/auth-context';
import { AuthForm } from './pages/auth-page/auth-form';

function App() {
  return (
    <AuthContext.Provider value={{ isAuth: false }}>
      <Router>
        <Routes>
          <Route path="/auth" element={<AuthForm/>}/>
          <Route path="/" element={<MainForm/>}/>
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
