import PageLayout from "@/components/PageLayout";
import InfoCard from "@/components/InfoCard";
import { FileCheck, AlertCircle } from "lucide-react";

const Declaration = () => {
    return (
        <PageLayout title="Declaration" subtitle="Statement of authenticity">
            <div className="max-w-4xl mx-auto space-y-6">
                <InfoCard title="Declaration Statement" icon={<FileCheck className="w-6 h-6 text-background" />}>
                    <div className="space-y-4">
                        <p className="leading-relaxed italic">
                            "I am Masruful Alam certify that to the best of my knowledge and belief, these
                            dated correctly describe my qualification."
                        </p>

                        <div className="mt-8 pt-6 border-t border-border">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <p className="font-semibold mb-1">Signature</p>
                                    <div className="h-16 border-b-2 border-cyan w-48 flex items-end pb-2">
                                        <span className="font-serif italic text-2xl text-cyan">Masruful</span>
                                    </div>
                                </div>
                                <div>
                                    <p className="font-semibold mb-1">Date</p>
                                    <p className="text-muted-foreground">03/11/2025</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </InfoCard>

                <InfoCard title="Additional Notes" icon={<AlertCircle className="w-6 h-6 text-background" />}>
                    <ul className="space-y-2 list-disc list-inside">
                        <li>All project links and references are active and accessible</li>
                        <li>Academic transcripts and certificates are available upon request</li>
                        <li>Professional references can be provided if needed</li>
                        <li>Open to background verification and skill assessments</li>
                    </ul>
                </InfoCard>
            </div>
        </PageLayout>
    );
};

export default Declaration;