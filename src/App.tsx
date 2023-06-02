import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import MainHeaderForm from './pages/MainHeaderForm';
import AuthContext from './context/auth-context';
import { AuthForm } from './pages/auth-page/auth-form';
import MainForm from './routers/MainForm';
import CreateTestForm from './routers/CreateTestForm';
import MyTestsForm from './routers/MyTestsForm';
import MyProfileForm from './routers/MyProfileForm';

function App() {
  return (
    <AuthContext.Provider value={{ isAuth: false }}>
      <Router>
        <Routes>
        
          <Route path="/me" element={<MyProfileForm/>}/>
          <Route path="/mytests" element={<MyTestsForm/>}/>
          <Route path="/create" element={<CreateTestForm/>}/>
          <Route path="/auth" element={<AuthForm/>}/>
          <Route path="/" element={<MainForm/>}/>
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
