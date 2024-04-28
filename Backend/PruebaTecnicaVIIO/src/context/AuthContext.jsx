import { registerRequest, loginRequest, verityTokenRequest } from '../api/auth';
import { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
export const AuthContext = createContext()
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAutenticated] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);
    const signup = async (user) => {
        try {
            const res = await registerRequest(user)
            console.log(res.data);
            setUser(res.data);
            setIsAutenticated(true);
        } catch (error) {
            setErrors(error.response.data);
        }

    }
    const signin = async (user) => {
        try {
            const res = await loginRequest(user);
            setIsAutenticated(true);
            setUser(res.data);
        } catch (error) {

            if (Array.isArray(error.response.data)) {
                return setErrors(error.response.data);
            }
            setErrors([error.response.data.message]);
        }
    };

    const logout = ()=>{
        Cookies.remove("token");
        setIsAutenticated(false);
        setUser(null);
    }



    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([])
            }, 5000)
            return () => clearTimeout(timer)
        }
    });
    useEffect(() => {
        const checkLogin = async () => {
          const cookies = Cookies.get();
          if (!cookies.token) {
            setIsAutenticated(false);
            setLoading(false);
            return;
          }
    
          try {
            const res = await verityTokenRequest(cookies.token);
            console.log(res);
            if (!res.data) return setIsAutenticated(false);
            setIsAutenticated(true);
            setUser(res.data);
            setLoading(false);
          } catch (error) {
            setIsAutenticated(false);
            setLoading(false);
          }
        };
        checkLogin();
      }, []);
    
    return (
        <AuthContext.Provider value={{
            signup,
            signin,
            logout,
            loading,
            user,
            isAuthenticated,
            errors
        }}>
            {children}
        </AuthContext.Provider>
    )
}
