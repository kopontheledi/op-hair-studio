import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Scissors, X } from 'lucide-react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-crown-black">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center border border-crown-gold text-crown-gold">
            <Scissors size={21} />
          </div>

          <div>
            <span className="block font-heading text-lg font-bold tracking-wide text-white">
              THE OP
            </span>

            <span className="block text-[9px] font-semibold tracking-[0.3em] text-crown-gold">
              HAIR STUDIO
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative py-2 text-sm font-semibold ${
                  isActive
                    ? 'text-crown-gold'
                    : 'text-neutral-300 hover:text-white'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/booking"
          className="hidden bg-crown-gold px-6 py-3 text-sm font-bold text-crown-black hover:bg-amber-300 md:inline-flex"
        >
          Book Now
        </Link> 

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={27} /> : <Menu size={27} />}
        </button>

      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-crown-black px-5 pb-6 pt-4 md:hidden">

          <nav className="flex flex-col">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `border-b border-white/10 py-4 text-sm font-semibold ${
                    isActive
                      ? 'text-crown-gold'
                      : 'text-neutral-300'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <Link
              to="/booking"
              onClick={closeMenu}
              className="mt-5 flex justify-center bg-crown-gold px-6 py-3 font-bold text-crown-black"
            >
              Book Now
            </Link>
          </nav>

        </div>
      )}
    </header>
  )
}