import { Inter } from "next/font/google";
import "../globals.css";
import { NavBar } from "../components/common/ui/Nav";
import { Footer } from "../components/common/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PlayListor | Sign up",
  description: "Get all playlist Links from various providers",
};

export default function Layout({ children }) {
    return <main className={inter.className}>
        <NavBar />
      {children}
      <Footer />
    </main>;
}
