import { ReactNode, useEffect, useRef } from "react";
import Navigation from "./Navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

const PageLayout = ({ children, title, subtitle }: PageLayoutProps) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      gsap.from(headerRef.current.children, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }

    if (contentRef.current) {
      gsap.from(contentRef.current.children, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        delay: 0.3,
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div ref={headerRef} className="mb-16 text-center">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 bg-gradient-to-r from-coral to-cyan bg-clip-text text-transparent">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg md:text-xl text-muted-foreground">{subtitle}</p>
            )}
          </div>
          <div ref={contentRef}>{children}</div>
        </div>
      </main>
    </div>
  );
};

export default PageLayout;
