import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Votes from './components/Votes';
import Feedback from './components/Feedback';

const root = ReactDOM.createRoot(
    document.getElementById("root")
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' exact element={<App />}/>
            <Route path='/login' exact element={<Login />}/>
            <Route path='/signup' exact element={<SignUp />}/>
            <Route path='/votes' exact element={<Votes />}/>
            <Route path='/feedbacks' exact element={<Feedback />}/>
        </Routes>
    </BrowserRouter>
);