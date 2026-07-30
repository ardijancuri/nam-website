import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

type StatMetricProps = {
  context: string;
  icon: LucideIcon;
  label: string;
  progress: number;
  value: string;
};

export function StatMetric({
  context,
  icon: Icon,
  label,
  progress,
  value,
}: StatMetricProps) {
  return (
    <div className="stat-metric">
      <div className="stat-metric-header">
        <Icon
          className="filled-stat-icon"
          aria-hidden="true"
          fill="currentColor"
          size={34}
          strokeWidth={1.25}
        />
        <Badge variant="secondary">{context}</Badge>
      </div>
      <strong className="stat-metric-value">{value}</strong>
      <span className="stat-metric-label">{label}</span>
      <Separator className="stat-metric-separator" />
      <Progress
        aria-label={`${context}: ${progress}%`}
        className="stat-metric-progress"
        indicatorClassName="stat-metric-progress-fill"
        value={progress}
      />
    </div>
  );
}
