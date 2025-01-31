import { Navigate, Outlet } from "react-router-dom";

interface AuthGuardProps {
    requiresLogin: boolean;
}

export function AuthGuard({ requiresLogin }: AuthGuardProps) {
    const signedIn = false;

    if (!signedIn && requiresLogin) {
        return <Navigate to="/login" replace />
    }

    if (signedIn && !requiresLogin) {
        return <Navigate to="/" replace />
    }

    return <Outlet />
}
