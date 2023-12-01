import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../pages/shared-components/navbar";
import Footer from "./shared-components/footer";
import { useRouter } from "next/router";
import { AuthProvider } from "./authentication/authContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserDataProvider } from "./contexts/userDataContext";
import { ThemeProvider } from "./components/theme-provider";

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
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
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
            </ThemeProvider>
          </UserDataProvider>
        </AuthProvider>
      </QueryClientProvider>
    </div>
  );
}
