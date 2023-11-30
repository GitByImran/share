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
  uploadImage: (
    file: File,
    userId: string | null,
    userDataId: string | null
  ) => Promise<string>;
}

interface User {
  _id: string;
  name: string;
  email: string;
  image: string;
  registered: string;
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
        localStorage.setItem("token", responseData.token);
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

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const responseData = await response.json();

      setUser(responseData);
      localStorage.setItem("user", JSON.stringify(responseData));

      const userData = {
        profile: {
          name: responseData.name,
          email: responseData.email,
          image: responseData.image,
          registered: responseData.registered,
        },
      };

      const userDataResponse = await fetch(
        "http://localhost:8080/api/userdatas",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (!userDataResponse.ok) {
        throw new Error("Failed to send data to api/userdatas");
      }
    } catch (error: any) {
      throw new Error(`Registration failed: ${error.message}`);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const uploadImage = async (
    file: File,
    userId: string | null,
    userDataId: string | null
  ): Promise<string> => {
    try {
      const apiKey = "f6b7ed31eea5a21e9e00f71286c18481";
      const formData = new FormData();
      formData.append("image", file);

      // Upload image to ImgBB
      const response = await fetch(
        "https://api.imgbb.com/1/upload?key=" + apiKey,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Image upload failed");
      }

      const responseData = await response.json();
      const imageUrl = responseData.data.url;

      try {
        // Update user image in the users endpoint
        const updateResponse = await fetch(
          `http://localhost:8080/api/users/${userId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              image: imageUrl,
            }),
          }
        );

        if (!updateResponse.ok) {
          throw new Error("Failed to update user image in the database");
        }

        console.log("User image updated in the database");

        // Update user image in the userdatas endpoint
        const userDataUpdateResponse = await fetch(
          `http://localhost:8080/api/userdatas/${userDataId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              "profile.image": imageUrl,
            }),
          }
        );

        if (!userDataUpdateResponse.ok) {
          throw new Error("Failed to update user image in userdatas");
        }

        console.log("User image updated in userdatas");
      } catch (updateError) {
        console.error(
          "Failed to update user image in the database",
          updateError
        );
        throw new Error("Image upload failed");
      }

      return imageUrl;
    } catch (error: any) {
      console.error("Error during image upload:", error.message);
      throw new Error("Image upload failed");
    }
  };

  const contextValue = { user, login, register, logout, uploadImage };

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
