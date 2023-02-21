import {UserActivity} from "../../interface";
import "./BarChart.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


function BarChartComponent({activity}: {activity: UserActivity}) {

const data = [];

for (let i = 0; i < activity.sessions.length; i ++) {
    data.push({
        name: i + 1,
        kilogram: activity.sessions[i].kilogram,
        calories: activity.sessions[i].calories
    })
}

  return (
    <div className="BarChart">
      <p className="bar-chart-title">Activité quotidienne</p>
      <div className="bar-chart-legend">
        <p>Poids (kg)</p>
        <p>Calories brûlées (kCal)</p>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          barSize={8}
          data={data}
          margin={{
            top: 60,
            right: 20,
            left: 40,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" tickLine={false} stroke="#9B9EAC" />
          <YAxis yAxisId="left" hide={true} domain={[100, 600]} />
          <YAxis
            yAxisId="right"
            orientation="right"
            domain={["dataMin - 1", "dataMax + 1"]}
            tickCount={4}
            allowDecimals={false}
            axisLine={false}
            tickLine={false}
            stroke="#9B9EAC"
          />
          <Tooltip />
          <Bar yAxisId="right" dataKey="kilogram" fill="#282D30" />
          <Bar yAxisId="left" dataKey="calories" fill="#E60000" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChartComponent;
