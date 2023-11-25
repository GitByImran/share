import React, { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";

const API_ENDPOINT = "http://localhost:8080/api/userdatas";

interface UserDataContextProps {
  userData: any;
  currUserData: any | null;
  refetch: () => void;
  saveUserData: (newUserData: any) => Promise<void>;
  updateUserData: (updatedUserData: any) => Promise<void>;
}

const UserDataContext = React.createContext<UserDataContextProps | undefined>(
  undefined
);

export const UserDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currUserData, setCurrUserData] = useState<any | null>(null);
  const queryClient = useQueryClient();

  // Fetch user data
  const { data: userData, refetch } = useQuery({
    queryKey: ["userData"],
    queryFn: () => fetch(API_ENDPOINT).then((res) => res.json()),
  });

  // Save user data
  const saveUserData = async (newUserData: any): Promise<void> => {
    await fetch(API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserData),
    });
  };

  useEffect(() => {
    const authUserData = () => {
      try {
        const { email } = JSON.parse(localStorage.getItem("user") || "");

        if (userData) {
          const user = userData.find(
            (data: any) => data.profile.email === email
          );

          if (user) {
            setCurrUserData(user);
            return user;
          } else {
            throw new Error("User data not found for the provided email");
          }
        } else {
          console.warn("User data not available yet");
          return null;
        }
      } catch (error: any) {
        throw new Error(`Error retrieving user data: ${error.message}`);
      }
    };

    console.log(authUserData());
  }, [userData]);

  // Update user data
  const updateUserData = async (updatedData: any): Promise<void> => {
    if (currUserData) {
      const updatedUserData = { ...currUserData, ...updatedData };

      const response = await fetch(`${API_ENDPOINT}/${currUserData._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUserData),
      });

      if (response.status === 200 || response.ok) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Changes has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }

      // Invalidate the cache to trigger a refetch
      queryClient.invalidateQueries();
    } else {
      console.warn("Current user data not available");
    }
  };

  const contextValue: UserDataContextProps = {
    userData,
    currUserData,
    refetch,
    saveUserData,
    updateUserData,
  };

  return (
    <UserDataContext.Provider value={contextValue}>
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserData = () => {
  const context = React.useContext(UserDataContext);
  if (!context) {
    throw new Error("useUserData must be used within a UserDataProvider");
  }
  return context;
};
