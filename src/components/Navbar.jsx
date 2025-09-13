import { useState } from "react"
import { Link } from "react-router";

const getNavigation = (user) => {
  if (!user) {
    return [
      { name: 'Home', href: '/' },
      { name: 'Register', href: '/register' },
      { name: 'Login', href: '/login' }
    ]
  } else if (user) {
    return [
      { name: "Dashboard", href: "/dashboard" },
      { name: "Favorites", href: "/dashboard/create" },
      { name: "Logout", href: "/dashboard/logout" }
    ]
  }
}

const NavBar = ({ user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div>
      <div>
        <nav className="bg-gradient-to-bl from-purple-100 to-green-200 text-gray-700 shadow-md fixed top-0 left-0 w-full z-50">
          <div className="container mx-auto px-6 py-4 flex xl:justify-evenly justify-around items-center">
            <p className="text-2xl md:text-2xl font-bold hover:text-red-400">QuoteCraft</p>
            <ul className="hidden md:flex space-x-6">
              {
                getNavigation(user).map((item) => (
                  <li key={item.name} className="font-semibold text-md hover:text-red-500 md:text-lg">
                    <Link to={item.href}>{item.name}</Link>
                  </li>
                ))
              }
              {
                user && (
                  <p className="lg:pt-0.5 hover:text-red-500">{user.email}</p>
                )
              }
            </ul>
            <button className="md:hidden text-3xl text-gray-700 hover:text-red-500" onClick={handleMenu}>&#9776;</button>
          </div>
          {
            isMenuOpen &&
            <ul className="bg-gradient-to-bl from-purple-100 to-green-200 shadow-md md:hidden absolute top-16 left-150 w-full p-4">
              {
                getNavigation(user).map((item) => (
                  <li key={item.name}
                    className="text-md font-bold hover:text-red-500 mb-2" onClick={closeMenu}>
                    <Link to={item.href}>{item.name}</Link>
                  </li>
                ))
              }
              {
                user && (
                  <p className="hover:text-red-500">{user.email}</p>
                )
              }
            </ul>
          }
        </nav>
      </div>

    </div>
  )
}

export default NavBar