import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AuthGuard } from './AuthGuard';
import { Login } from '../view/pages/Login';
import { Register } from '../view/pages/Register';
import { Dashboard } from '../view/pages/Dashboard';
import { AuthLayout } from '../view/Layouts/AuthLayout';

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AuthGuard requiresLogin={false} />}>
                    <Route element={<AuthLayout />}>
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                    </Route>
                </Route>

                <Route element={<AuthGuard requiresLogin />}>
                    <Route path='/' element={<Dashboard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
