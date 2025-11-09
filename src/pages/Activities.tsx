import PageLayout from "@/components/PageLayout";
import InfoCard from "@/components/InfoCard";
import { Activity, Users, Heart } from "lucide-react";

const Activities = () => {
    return (
        <PageLayout title="Co-Curricular Activities" subtitle="Beyond academics">
            <div className="max-w-4xl mx-auto space-y-6">
                <InfoCard title="Club Activities" icon={<Activity className="w-6 h-6 text-background" />}>
                    <ul className="space-y-3">
                        <li>
                            <p className="font-semibold">Team Leader - Public Relation & Branding</p>
                            <p className="text-sm text-muted-foreground">Southeast Computer Club - Southeast University</p>
                        </li>
                        <li>
                            <p className="font-semibold">Head of Publication</p>
                            <p className="text-sm text-muted-foreground">Southeast Computer Club - Southeast University</p>
                        </li>
                        <li>
                            <p className="font-semibold">Sub-executive</p>
                            <p className="text-sm text-muted-foreground">Southeast Computer Club - Southeast University</p>
                        </li>
                        <li>
                            <p className="font-semibold">Former Secretary of Printing & Stationery</p>
                            <p className="text-sm text-muted-foreground">Southeast Model United Nations Club - Southeast University</p>
                        </li>
                        <li>
                            <p className="font-semibold">Former Secretary of Press & Publication</p>
                            <p className="text-sm text-muted-foreground">Southeast Model United Nations Club - Southeast University</p>
                        </li>
                    </ul>
                </InfoCard>

                <InfoCard title="Volunteering Activities" icon={<Heart className="w-6 h-6 text-background" />}>
                    <ul className="space-y-3">
                        <li>
                            <p className="font-semibold">Mentor in Digital Skills and Employment in Bangladesh</p>
                            <p className="text-sm text-muted-foreground">United Nations Development Programme – UNDP</p>
                        </li>
                        <li>
                            <p className="font-semibold">Formal Mentor online English Teaching in Bangladesh</p>
                            <p className="text-sm text-muted-foreground">United Nations Development Programme – UNDP</p>
                        </li>
                        <li>
                            <p className="font-semibold">Movers at Bangladesh Mathematical Olympiad</p>
                        </li>
                    </ul>
                </InfoCard>

                <InfoCard title="Leadership & Teamwork" icon={<Users className="w-6 h-6 text-background" />}>
                    <ul className="space-y-2 list-disc list-inside">
                        <li>Team lead for multiple group projects throughout academic career</li>
                        <li>Organized and conducted technical workshops for fellow students</li>
                        <li>Active participant in study groups and peer learning sessions</li>
                        <li>Collaborated with cross-functional teams in internship projects</li>
                    </ul>
                </InfoCard>
            </div>
        </PageLayout>
    );
};

export default Activities;