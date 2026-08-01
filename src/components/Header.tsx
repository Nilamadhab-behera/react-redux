import { NavLink } from "react-router-dom";
import { menuList } from "../utils/menu";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-extrabold tracking-tight text-slate-800"
        >
          <span className="text-blue-600">Dev</span>Space
        </NavLink>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-2">
            {menuList.map((item) => (
              <li key={item.key}>
                <NavLink to={item.link}
                  className={(data) =>
                    `rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${data.isActive
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-slate-700 hover:bg-slate-100 hover:text-blue-600"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;