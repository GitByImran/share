// apiInterceptor.ts
const baseURL = "http://localhost:8080";

export const fetchWithBaseURL = async (url: string, options?: RequestInit) => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${baseURL}${url}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
};
