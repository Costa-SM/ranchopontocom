import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import Login from './components/Login';
import SignUp from './components/SignUp';

const root = ReactDOM.createRoot(
    document.getElementById("root")
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' exact element={<App />}/>
            <Route path='/login' exact element={<Login />}/>
            <Route path='/signup' exact element={<SignUp />}/>
        </Routes>
    </BrowserRouter>
);