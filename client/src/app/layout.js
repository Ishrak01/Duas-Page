import { Inter } from "next/font/google";
import ReduxProvider from "./Redux/reduxProvider";
import Navbar from "./component/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Duas Page",
  description: "Hasin Ishrak",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <ReduxProvider>
        <Navbar/>
        {children}
        </ReduxProvider> 
        </body>
    </html>
  );
}
