import PageLayout from "@/components/PageLayout";
import InfoCard from "@/components/InfoCard";
import { User, Calendar, Heart, Home } from "lucide-react";

const Personal = () => {
    return (
        <PageLayout title="Personal Information" subtitle="Get to know me better">
            <div className="max-w-4xl mx-auto space-y-6">
                <InfoCard title="Basic Information" icon={<User className="w-6 h-6 text-background" />}>
                    <div className="space-y-2">
                        <p><span className="font-semibold">Full Name:</span> Masruful Alam</p>
                        <p><span className="font-semibold">Gender:</span> Prefer not to say</p>
                        <p><span className="font-semibold">Nationality:</span> Your Country</p>
                        <p><span className="font-semibold">Marital Status:</span> Single</p>
                    </div>
                </InfoCard>

                <InfoCard title="Date of Birth" icon={<Calendar className="w-6 h-6 text-background" />}>
                    <p>January 1, 2000</p>
                    <p className="text-muted-foreground text-sm">Age: 24 years</p>
                </InfoCard>

                <InfoCard title="Address" icon={<Home className="w-6 h-6 text-background" />}>
                    <p>123 Main Street</p>
                    <p>City, State - 12345</p>
                    <p>Country</p>
                </InfoCard>

                <InfoCard title="Interests & Hobbies" icon={<Heart className="w-6 h-6 text-background" />}>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Web Development & Design</li>
                        <li>Open Source Contribution</li>
                        <li>Photography & Digital Art</li>
                        <li>Reading Tech Blogs & Books</li>
                        <li>Traveling & Exploring New Cultures</li>
                    </ul>
                </InfoCard>
            </div>
        </PageLayout>
    );
};

export default Personal;