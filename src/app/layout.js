import Footer from "@/components/Footer";
import Header from "@/components/Header";
import vazirFont from "@/constants/localFont";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import AuthProvider from "@/context/AuthContext";


export const metadata = {
  title: "مدیریت وبلاگ",
  description: " مدیریت وبلاگ و نظرات کاربران",
};
// title: {
//   template: '%s | Acme',
//   default: 'Acme', // a default is required when creating a template
// }

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirFont.variable} font-sans`} >
        <AuthProvider>
            <Header />
            <Toaster 
              position="top-left"
              reverseOrder={false}
            />
              <main className="container xl:max-w-screen-xl">
                {children}
              </main>
            <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
