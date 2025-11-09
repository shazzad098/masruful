import PageLayout from "@/components/PageLayout";
import InfoCard from "@/components/InfoCard";
import { Code, Palette, Laptop } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
    const applicationSkills = [
        { name: "Photoshop", level: 90 },
        { name: "Graphics Design", level: 95 },
        { name: "MS Office", level: 85 },
        { name: "English Typing", level: 95 },
    ];

    const otherSkills = [
        { name: "Internet Browsing", level: 100 },
        { name: "Multimedia and Application", level: 90 },
    ];

    return (
        <PageLayout title="Computer Literacy" subtitle="My technical expertise and skills">
            <div className="max-w-4xl mx-auto space-y-6">
                <InfoCard title="Application Software" icon={<Palette className="w-6 h-6 text-background" />}>
                    <div className="space-y-4">
                        {applicationSkills.map((skill) => (
                            <div key={skill.name}>
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium">{skill.name}</span>
                                    <span className="text-cyan">{skill.level}%</span>
                                </div>
                                <Progress value={skill.level} className="h-2" />
                            </div>
                        ))}
                    </div>
                </InfoCard>

                <InfoCard title="Other Skills" icon={<Laptop className="w-6 h-6 text-background" />}>
                    <div className="space-y-4">
                        {otherSkills.map((skill) => (
                            <div key={skill.name}>
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium">{skill.name}</span>
                                    <span className="text-coral">{skill.level}%</span>
                                </div>
                                <Progress value={skill.level} className="h-2" />
                            </div>
                        ))}
                    </div>
                </InfoCard>
            </div>
        </PageLayout>
    );
};

export default Skills;