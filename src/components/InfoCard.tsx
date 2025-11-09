import { ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface InfoCardProps {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
}

const InfoCard = ({ title, children, icon }: InfoCardProps) => {
  return (
    <Card className="p-6 bg-card border-border hover:border-coral transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,107,107,0.2)]">
      <div className="flex items-start gap-4">
        {icon && (
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-coral to-cyan flex items-center justify-center">
            {icon}
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-xl font-serif font-semibold mb-3 text-coral">{title}</h3>
          <div className="text-foreground space-y-2">{children}</div>
        </div>
      </div>
    </Card>
  );
};

export default InfoCard;
