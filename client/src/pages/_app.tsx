import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../pages/shared-components/navbar";
import Footer from "./shared-components/footer";
import { useRouter } from "next/router";
import { AuthProvider } from "./authentication/authContext";

const restrictedForNavbarFooter = [
  "/authentication/login",
  "/authentication/register",
];

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div>
      <AuthProvider>
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
      </AuthProvider>
    </div>
  );
}
