import { UserPerformance, Kind } from "../../interface";
import "./RadarChart.css";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

function RadarChartComponent({performance}: {performance: UserPerformance;}) {
  let data = [];

  for (let kind in Kind) {
    for (let item in performance.kind) {
      if (performance.kind[item] === kind) {
        const value = performance.data.find(
          (value) => value.kind === parseInt(item)
        );
        data.push({
          subject: Kind[kind],
          value: value.value,
        });
      }
    }
  }

  return (
    <div className="RadarChart">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="65%" data={data}>
          <PolarGrid stroke="#ffffff" />
          <PolarAngleAxis
            tickLine={false}
            stroke="#ffffff"
            style={{ fontSize: "12px" }}
            dataKey="subject"
          />
          <Radar
            dataKey="value"
            stroke="#ff0101"
            fill="#ff0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RadarChartComponent;
