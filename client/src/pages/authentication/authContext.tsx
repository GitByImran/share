import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface AuthContextProps {
  user: User | null;
  login: (formData: LoginForm) => Promise<void>;
  register: (formData: RegisterForm) => Promise<void>;
  logout: () => void;
}

interface User {
  _id: string;
  name: string;
  email: string;
  image: string;
}

interface LoginForm {
  email: string;
  password: string;
}

interface RegisterForm {
  name: string;
  email: string;
  password: string;
  rePassword: string;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (formData: LoginForm) => {
    try {
      const response = await fetch("http://localhost:8080/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData = await response.json();
        setUser(responseData.user);
        localStorage.setItem("user", JSON.stringify(responseData.user));
      } else {
        throw new Error("Invalid email or password");
      }
    } catch (error: any) {
      throw new Error(`Login failed: ${error.message}`);
    }
  };

  const register = async (formData: RegisterForm) => {
    try {
      const response = await fetch("http://localhost:8080/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData = await response.json();
        setUser(responseData);
        localStorage.setItem("user", JSON.stringify(responseData));
      } else {
        throw new Error("Registration failed");
      }
    } catch (error: any) {
      throw new Error(`Registration failed: ${error.message}`);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const contextValue = { user, login, register, logout };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
