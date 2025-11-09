import PageLayout from "@/components/PageLayout";
import InfoCard from "@/components/InfoCard";
import { Languages, MessageCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const LanguagesPage = () => {
    const languages = [
        {
            name: "Bengali",
            proficiency: 100,
            details: "Excellent Reading, Writing & Speaking",
        },
        {
            name: "English",
            proficiency: 95,
            details: "Excellent Reading, Writing & Speaking",
        },
    ];

    return (
        <PageLayout title="Language Proficiency" subtitle="Communication across cultures">
            <div className="max-w-4xl mx-auto space-y-6">
                <InfoCard title="Spoken Languages" icon={<Languages className="w-6 h-6 text-background" />}>
                    <div className="space-y-6">
                        {languages.map((language) => (
                            <div key={language.name} className="border-b border-border pb-4 last:border-0">
                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold text-lg">{language.name}</span>
                                    <span className="text-coral font-medium">{language.proficiency}%</span>
                                </div>
                                <Progress value={language.proficiency} className="h-2 mb-3" />
                                <p className="text-sm text-muted-foreground">{language.details}</p>
                            </div>
                        ))}
                    </div>
                </InfoCard>

                <InfoCard title="Communication Skills" icon={<MessageCircle className="w-6 h-6 text-background" />}>
                    <ul className="space-y-2 list-disc list-inside">
                        <li>Excellent verbal and written communication</li>
                        <li>Experience in technical documentation</li>
                        <li>Presentation and public speaking skills</li>
                        <li>Cross-cultural communication experience</li>
                        <li>Active listening and interpersonal skills</li>
                    </ul>
                </InfoCard>
            </div>
        </PageLayout>
    );
};

export default LanguagesPage;