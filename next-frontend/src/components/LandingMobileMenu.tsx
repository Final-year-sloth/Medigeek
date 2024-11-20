import { useEffect, useRef } from "react";
import Link from "next/link";

// props for mobile menu
interface NavLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navLinks: NavLink[];
}

const LandingMobileMenu: React.FC<MobileMenuProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  navLinks,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  // Close the menu when clicking outside
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Close menu with ESC key
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="lg:hidden">
      <div ref={menuRef} className="relative">
        {/* Mobile Menu */}
        <nav
          className={`absolute right-0 mt-2 w-48 bg-red-400 rounded-lg shadow-lg z-50 
            transform transition-all duration-200 ease-in-out
            ${
              isMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }
          `}
          role="menu"
          aria-orientation="vertical"
          aria-expanded={isMenuOpen}
          aria-label="Mobile navigation menu"
        >
          <ul className="py-1">
            {navLinks.map((link) => (
              <li key={link.href} className="relative">
                <Link
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block px-4 py-2 text-sm text-white transition-colors duration-150 hover:bg-red-500 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Backdrop  effect*/}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default LandingMobileMenu;
