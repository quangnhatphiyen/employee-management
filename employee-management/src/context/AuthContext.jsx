import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    // Khi load app, thử lấy user từ localStorage
    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// Custom hook để dùng nhanh
export function useAuth() {
    return useContext(AuthContext);
}
