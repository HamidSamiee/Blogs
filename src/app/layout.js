import Footer from "@/components/Footer";
import Header from "@/components/Header";
import vazirFont from "@/constants/localFont";
import "./globals.css";


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
        <Header />
          <main className="container xl:max-w-screen-xl">
             {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
