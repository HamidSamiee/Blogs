import Footer from "@/components/Footer";
import vazirFont from "@/constants/localFont";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import AuthProvider from "@/context/AuthContext";


export const metadata = {
  title: {
    template: '%s | بلاگ آپ',
    default: 'بلاگ آپ', // a default is required when creating a template
  },
  description: " مدیریت وبلاگ و نظرات کاربران",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirFont.variable} font-sans`} >
        <AuthProvider>
              <Toaster position="top-center" reverseOrder={false} />
              <main className="container xl:max-w-screen-xl">
                {children}
              </main>
            <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
