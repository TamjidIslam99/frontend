import logo from './logo.svg';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import './App.css';
import CourseDetail from './component/CourseDetail';
import Finalbill from './component/Finalbill';
import LoginForm from './component/LoginForm';
import RegisterForm from './component/RegisterForm';
import BillingSystemHome from './component/Home';
import Home from './component/Home'
import AuthenticatedRoute from './component/AuthenticatedRoute';


function App() {
  return (
<Router>
            <Routes>
                <Route path='/' element={<LoginForm/>}/>
                <Route path="/home" element={<AuthenticatedRoute />} />
                
            </Routes>
</Router>
  );
}

export default App;
