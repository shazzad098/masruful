import PageLayout from "@/components/PageLayout";
import InfoCard from "@/components/InfoCard";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const Education = () => {
  return (
    <PageLayout title="Academic Certification" subtitle="My educational journey">
      <div className="max-w-4xl mx-auto space-y-6">
        <InfoCard title="Bachelor's Degree" icon={<GraduationCap className="w-6 h-6 text-background" />}>
          <div className="space-y-2">
            <p className="font-semibold text-lg">Bachelor of Computer Science & Engineering</p>
            <p className="text-muted-foreground">Southeast University</p>
            <p className="text-muted-foreground">2023 - 2027</p>
            <p className="mt-2">CGPA: -- / 4.00</p>
            <p className="text-sm mt-2">
              Specialized in Software Engineering, Web Development, and Database Management.
              Completed senior project on cloud-based application development.
            </p>
          </div>
        </InfoCard>

        <InfoCard title="Higher School Certificate" icon={<BookOpen className="w-6 h-6 text-background" />}>
          <div className="space-y-2">
            <p className="font-semibold text-lg">Science Stream</p>
            <p className="text-muted-foreground">Tejgaon Adarsho School And College</p>
            <p className="text-muted-foreground">2021</p>
            <p className="mt-2">Grade: 4.42 / 5.00</p>
            <p className="mt-2">Board: Dhaka</p>

          </div>
        </InfoCard>

          <InfoCard title="Secondary School Certificate" icon={<BookOpen className="w-6 h-6 text-background" />}>
              <div className="space-y-2">
                  <p className="font-semibold text-lg">Science</p>
                  <p className="text-muted-foreground">Tejgaon Adarsho School And College</p>
                  <p className="text-muted-foreground">2021</p>
                  <p className="mt-2">Grade: 4.22 / 5.00</p>
                  <p className="mt-2">Board: Dhaka</p>

              </div>
          </InfoCard>
        <InfoCard title="Certifications" icon={<Award className="w-6 h-6 text-background" />}>
          <ul className="space-y-3">
            <li>
              <p className="font-semibold">Full Stack Web Development</p>
              <p className="text-sm text-muted-foreground">Online Platform - 2023</p>
            </li>
            <li>
              <p className="font-semibold">Advanced JavaScript & React</p>
              <p className="text-sm text-muted-foreground">Online Platform - 2023</p>
            </li>
            <li>
              <p className="font-semibold">UI/UX Design Fundamentals</p>
              <p className="text-sm text-muted-foreground">Design Institute - 2022</p>
            </li>
            <li>
              <p className="font-semibold">Database Management Systems</p>
              <p className="text-sm text-muted-foreground">Tech Academy - 2022</p>
            </li>
          </ul>
        </InfoCard>
      </div>
    </PageLayout>
  );
};

export default Education;
