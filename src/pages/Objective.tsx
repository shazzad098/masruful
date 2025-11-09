import PageLayout from "@/components/PageLayout";
import InfoCard from "@/components/InfoCard";
import { Target } from "lucide-react";

const Objective = () => {
    return (
        <PageLayout title="Career Objective" subtitle="My professional goals and aspirations">
            <div className="max-w-4xl mx-auto space-y-6">
                <InfoCard title="Primary Objective" icon={<Target className="w-6 h-6 text-background" />}>
                    <p className="leading-relaxed">
                        Seeking a challenging and competitive environment that demands a strong sense of responsibility
                        and commitment. I am eager to utilize my full potential as a collaborative team player,
                        driven to effectively organize my efficiency, maximize organizational output, and
                        build a career defined by professional responsibility.
                    </p>
                </InfoCard>
            </div>
        </PageLayout>
    );
};

export default Objective;