import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../pages/shared-components/navbar";
import Footer from "./shared-components/footer";
import { useRouter } from "next/router";
import { AuthProvider } from "./authentication/authContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserDataProvider } from "./contexts/userDataContext";

const queryClient = new QueryClient();

const restrictedForNavbarFooter = [
  "/authentication/login",
  "/authentication/register",
];

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div className="">
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <UserDataProvider>
            {restrictedForNavbarFooter.includes(router.pathname) ? (
              <>
                <Component {...pageProps} />
              </>
            ) : (
              <>
                <Navbar />
                <Component {...pageProps} />
                <Footer />
              </>
            )}
          </UserDataProvider>
        </AuthProvider>
      </QueryClientProvider>
    </div>
  );
}
