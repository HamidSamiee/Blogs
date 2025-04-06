"use client"
import { useAuth } from "@/context/AuthContext";
import NavLink from "./NavLink";

const navLinks = [
  {
    id: 1,
    children: "خانه",
    path: "/",
  },
  {
    id: 2,
    children: "بلاگ ها",
    path: "/blogs",
  },
];

const Header = () => {

  const {user,isLoading} = useAuth();
// console.log(user,isLoading)

  return (
    <header className={`z-10 shadow-md bg-inherit mb-10 sticky top-0 transition-all duration-200 border-b border-b-secondary-300 
      ${isLoading ? "opacity-70 blur-sm" : "opacity-100 blur-0"}
    `}>
      <nav className="container xl:max-w-screen-xl ">
          <ul className="flex items-center justify-between py-2 text-secondary-400">
            <div className="flex items-center gap-x-10">
                {
                  navLinks.map((link)=>{
                    return <li key={link.id} className='navLink'>
                              <NavLink path={link.path}>
                                {
                                  link.children
                                }
                              </NavLink>
                           </li>
                  })
                }
            </div>
            {
              user ?(
                <NavLink path="/profile">پروفایل</NavLink>
              ):(
                <NavLink path="/signIn">ورود</NavLink>
              )
            }
          </ul>
      </nav>
    </header>
  )
}

export default Header