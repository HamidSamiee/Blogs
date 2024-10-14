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

  return (
    <header className="z-10 shadow-md bg-inherit mb-10 sticky top-0 transition-all duration-200 border-b border-b-secondary-300">
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
            <li className="">
                ورود
            </li>
          </ul>
      </nav>
    </header>
  )
}

export default Header