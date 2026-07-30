import type { Icon } from "@phosphor-icons/react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

type StatMetricProps = {
  context: string;
  icon: Icon;
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
          size={36}
          weight="duotone"
        />
        <Badge variant="secondary">{context}</Badge>
      </div>
      <strong className="stat-metric-value">{value}</strong>
      <span className="stat-metric-label">{label}</span>
      <Progress
        aria-label={`${context}: ${progress}%`}
        className="stat-metric-progress"
        indicatorClassName="stat-metric-progress-fill"
        value={progress}
      />
    </div>
  );
}
