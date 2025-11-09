import PageLayout from "@/components/PageLayout";
import InfoCard from "@/components/InfoCard";
import { Mail, Phone, MapPin, Globe, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <PageLayout title="Contact Details" subtitle="Let's connect and collaborate">
      <div className="max-w-4xl mx-auto space-y-6">
        <InfoCard title="Email" icon={<Mail className="w-6 h-6 text-background" />}>
          <p>alammasruful@gmail.com</p>
          <p className="text-muted-foreground text-sm">Feel free to reach out for opportunities</p>
        </InfoCard>

        <InfoCard title="Phone" icon={<Phone className="w-6 h-6 text-background" />}>
          <p>01317248401</p>
        </InfoCard>

        <InfoCard title="Location" icon={<MapPin className="w-6 h-6 text-background" />}>
          <p>Dhaka, Bangladesh</p>
        </InfoCard>

        <InfoCard title="LinkedIn" icon={<Linkedin className="w-6 h-6 text-background" />}>
          <p>www.linkedin.com/in/masruful-alam-128397257/</p>
        </InfoCard>

        <InfoCard title="GitHub" icon={<Github className="w-6 h-6 text-background" />}>
          <p>github.com/masrufulalam</p>
        </InfoCard>
      </div>
    </PageLayout>
  );
};

export default Contact;
