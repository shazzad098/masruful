import PageLayout from "@/components/PageLayout";
import InfoCard from "@/components/InfoCard";
import { Award, TrendingUp, Target, Zap } from "lucide-react";

const Assessment = () => {
    return (
        <PageLayout title="Self-Assessment" subtitle="Honest evaluation of my abilities">
            <div className="max-w-4xl mx-auto space-y-6">
                <InfoCard title="Strengths" icon={<Award className="w-6 h-6 text-background" />}>
                    <ul className="space-y-2 list-disc list-inside">
                        <li>Having the quality of making myself presentable to others</li>
                        <li>Hard Working and diligent</li>
                        <li>Excellent inter personal skill</li>
                        <li>Quick learner with strong problem-solving abilities</li>
                        <li>Strong work ethic and ability to meet deadlines</li>
                        <li>Team player with good collaboration skills</li>
                    </ul>
                </InfoCard>

                <InfoCard title="Key Competencies" icon={<Target className="w-6 h-6 text-background" />}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <h4 className="font-semibold text-coral">Technical</h4>
                            <ul className="text-sm space-y-1 list-disc list-inside">
                                <li>Full-stack development</li>
                                <li>Responsive design</li>
                                <li>Graphics Design</li>
                                <li>Database design</li>
                            </ul>
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-semibold text-cyan">Soft Skills</h4>
                            <ul className="text-sm space-y-1 list-disc list-inside">
                                <li>Time management</li>
                                <li>Team collaboration</li>
                                <li>Adaptability</li>
                                <li>Interpersonal skills</li>
                            </ul>
                        </div>
                    </div>
                </InfoCard>

                <InfoCard title="Areas for Improvement" icon={<TrendingUp className="w-6 h-6 text-background" />}>
                    <ul className="space-y-2 list-disc list-inside">
                        <li>Continuously expanding knowledge in cloud architecture</li>
                        <li>Improving public speaking and presentation skills</li>
                        <li>Learning more about DevOps and deployment strategies</li>
                        <li>Enhancing skills in mobile app development</li>
                    </ul>
                </InfoCard>
            </div>
        </PageLayout>
    );
};

export default Assessment;