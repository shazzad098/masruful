import PageLayout from "@/components/PageLayout";
import InfoCard from "@/components/InfoCard";
import { Briefcase } from "lucide-react";

const Experience = () => {
    return (
        <PageLayout title="Internship & Training" subtitle="Professional experience and learning">
            <div className="max-w-4xl mx-auto space-y-6">
                <InfoCard title="Designer" icon={<Briefcase className="w-6 h-6 text-background" />}>
                    <div className="space-y-2">
                        <p className="font-semibold text-lg">BRAC Institute of Skills Development</p>
                        <p className="text-muted-foreground">Duration: 3 Month</p>
                        <p className="text-muted-foreground">Status: Complete</p>
                        <p className="mt-3">
                            Completed an intensive training program focusing on Graphic Design.
                        </p>
                        <ul className="mt-3 space-y-1 list-disc list-inside">
                            <li>Topics Covered: Graphic Design</li>
                        </ul>
                    </div>
                </InfoCard>
            </div>
        </PageLayout>
    );
};

export default Experience;