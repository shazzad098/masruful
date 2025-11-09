import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import SplineScene from "@/components/SplineScene";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import {
    User,
    Target,
    GraduationCap,
    Code,
    Languages as LanguagesIcon, // Renamed to avoid conflict
    Award,
    Briefcase,
    Activity,
    FileCheck,
    Mail,
} from "lucide-react";

const Index = () => {
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (heroRef.current) {
            gsap.from(heroRef.current.children, {
                opacity: 0,
                y: 50,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
            });
        }
    }, []);

    // This array will build the new icon navigation
    const sections = [
        { icon: Mail, title: "Contact", path: "/contact" },
        { icon: Target, title: "Objective", path: "/objective" },
        { icon: User, title: "Personal Info", path: "/personal" },
        { icon: GraduationCap, title: "Education", path: "/education" },
        { icon: Code, title: "Skills", path: "/skills" },
        { icon: LanguagesIcon, title: "Languages", path: "/languages" },
        { icon: Award, title: "Assessment", path: "/assessment" },
        { icon: Briefcase, title: "Experience", path: "/experience" },
        { icon: Activity, title: "Activities", path: "/activities" },
        { icon: FileCheck, title: "Declaration", path: "/declaration" },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
                <div className="absolute inset-0 z-0">
                    {/* I am using the Spline scene you provided in the previous step */}
                    <SplineScene scene="https://prod.spline.design/OtxY-cZjxkMQEgfr/scene.splinecode" />
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">


                    {/* New Icon Navigation (Left Side) */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8 z-20 flex flex-col gap-2">
                        {sections.map((section, index) => {
                            const Icon = section.icon;
                            return (
                                <Tooltip key={index}>
                                    <TooltipTrigger asChild>
                                        <Link
                                            to={section.path}
                                            className="w-12 h-12 rounded-full bg-card/50 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:text-coral hover:border-coral transition-all duration-300"
                                            aria-label={section.title}
                                        >
                                            <Icon className="w-6 h-6" />
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent side="right">
                                        <p>{section.title}</p>
                                    </TooltipContent>
                                </Tooltip>
                            );
                        })}
                    </div>

                </div>
            </section>

            {/* The old "Explore My Portfolio" card grid section is now deleted. */}
        </div>
    );
};

export default Index;