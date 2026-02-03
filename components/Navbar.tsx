"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isStudyDropdownOpen, setIsStudyDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsStudyDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Ensure transparency on specific pages
  const isTransparentPage = pathname === "/" || pathname === "/about" || pathname === "/contact";

  const navClass = cn(
    "fixed top-4 left-0 right-0 z-50 transition-all duration-300 mx-4 md:mx-auto max-w-7xl rounded-2xl border",
    isTransparentPage && !isScrolled
      ? "border-transparent bg-transparent py-4 top-0 rounded-none w-full"
      : "border-white/40 bg-white/90 backdrop-blur-xl shadow-lg shadow-slate-900/5 py-3 top-4"
  );

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="relative z-50">
          <img
            src="/images/logo.png"
            alt="FlyGraduate"
            className="h-10 md:h-12 w-auto mix-blend-multiply"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <NavLink href="/" isActive={pathname === "/"}>Home</NavLink>

          <div className="relative group" ref={dropdownRef}>
            <button
              id="study-dropdown-btn"
              onClick={() => setIsStudyDropdownOpen(!isStudyDropdownOpen)}
              className="text-sm font-medium transition-colors flex items-center gap-1 text-slate-600 hover:text-brand-orange group-hover:text-brand-orange"
            >
              Study in
              <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", isStudyDropdownOpen ? "rotate-180" : "")} />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {(isStudyDropdownOpen || false) && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 pt-4 w-64"
                >
                  <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 overflow-hidden p-2 ring-1 ring-slate-900/5">
                    {[
                      { name: "Taylor's University", href: "/study/taylors-university" },
                      { name: "Sunway University", href: "/study/sunway-university" },
                      { name: "INTI International University", href: "/study/inti-international-university" },
                      { name: "University of Nottingham", href: "/study/university-of-nottingham" },
                      { name: "Swinburne University", href: "/study/swinburne-university" },
                    ].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsStudyDropdownOpen(false)}
                        className="block px-4 py-3 text-sm text-slate-600 hover:text-brand-navy hover:bg-slate-50 rounded-xl transition-all"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            {/* Hover trigger for desktop - using CSS for simple hover state, but keeping click logic functional */}
            <div className="absolute top-0 w-full h-full cursor-pointer opacity-0" onMouseEnter={() => setIsStudyDropdownOpen(true)} />
          </div>

          <NavLink href="/courses" isActive={pathname === "/courses"}>Find a Course</NavLink>
          <NavLink href="/about" isActive={pathname === "/about"}>About</NavLink>
          <NavLink href="/contact" isActive={pathname === "/contact"}>Contact</NavLink>

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center rounded-full font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-95 bg-brand-orange text-white hover:bg-orange-600 shadow-lg shadow-orange-500/20 px-5 py-2.5 text-sm gap-2 btn-interactive"
            >
              Book a Strategy Call
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-slate-600 hover:text-brand-navy relative z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              <MobileNavLink href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</MobileNavLink>
              <div className="space-y-2">
                <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider pl-4">Study In</div>
                {[
                  { name: "Taylor's University", href: "/study/taylors-university" },
                  { name: "Sunway University", href: "/study/sunway-university" },
                  { name: "INTI International University", href: "/study/inti-international-university" },
                  { name: "University of Nottingham", href: "/study/university-of-nottingham" },
                  { name: "Swinburne University", href: "/study/swinburne-university" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block pl-4 py-2 text-slate-600 hover:text-brand-orange transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <MobileNavLink href="/courses" onClick={() => setIsMobileMenuOpen(false)}>Find a Course</MobileNavLink>
              <MobileNavLink href="/about" onClick={() => setIsMobileMenuOpen(false)}>About</MobileNavLink>
              <MobileNavLink href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</MobileNavLink>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-4">
                <button className="w-full inline-flex items-center justify-center rounded-xl font-bold bg-brand-orange text-white hover:bg-orange-600 shadow-lg shadow-orange-500/20 px-4 py-4 text-base">
                  Book a Strategy Call
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function NavLink({ href, children, isActive }: { href: string; children: React.ReactNode; isActive: boolean }) {
  return (
    <Link href={href} className={cn("text-sm font-medium transition-colors relative group", isActive ? "text-brand-navy" : "text-slate-600 hover:text-brand-orange")}>
      {children}
      <span className={cn(
        "absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-orange rounded-full origin-left transition-transform duration-300",
        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
      )} />
    </Link>
  );
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-lg font-medium text-slate-800 hover:text-brand-orange py-2 border-b border-slate-100"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
