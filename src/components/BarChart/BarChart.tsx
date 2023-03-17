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

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip-bar-chart">
        <p className="label">{`${payload[0].payload.kilogram}kg`}</p>
        <p className="label">{`${payload[0].payload.calories}Kcal`}</p>
      </div>
    );
  }
}

  return (
    <div className="BarChart">
      <p className="bar-chart-title">Activité quotidienne</p>
      <div className="bar-chart-legend">
        <div className="tooltip-text">
          <span className="bullet-point" style={{color: "#282D30"}}>•&nbsp;</span> Poids (kg)
        </div>
        <div className="tooltip-text">
          <span className="bullet-point" style={{color: '#E60000'}}>•&nbsp;</span> Calories brûlées (kCal)
        </div>
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
          <Tooltip
            content={
              <CustomTooltip
                active={undefined}
                payload={undefined}
                label={undefined}
              />
            }
          />
          <Bar yAxisId="right" dataKey="kilogram" fill="#282D30" />
          <Bar yAxisId="left" dataKey="calories" fill="#E60000" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChartComponent;
