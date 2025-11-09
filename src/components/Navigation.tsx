import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Removed all redundant nav links to fix inconsistency
    const navLinks = [];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? "bg-card/80 backdrop-blur-md border-b border-border" : "bg-transparent"
            }`}
        >
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link to="/" className="text-2xl font-serif font-bold">
            <span className="bg-gradient-to-r from-coral to-cyan bg-clip-text text-transparent">
              Masruful
            </span>
                    </Link>

                    {/* Desktop Navigation - Only "Get in Touch" button */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link to="/contact">
                            <Button variant="gradient" size="sm" className="text-sm">
                                Get in Touch
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation - Only "Get in Touch" link */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 space-y-4">
                        <Link
                            key="/contact"
                            to="/contact"
                            className={`block text-sm font-medium transition-colors hover:text-coral text-foreground`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Get in Touch
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;