import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Rectangle,
} from "recharts";
import "./LineChart.css";
import {UserAverageSessions} from "../../interface";

function LineChartComponent({ averageSessions }: { averageSessions: UserAverageSessions }) {
  /**
   * Create a custom tooltip
   * @param {bool} active - a boolean denoting if a tooltip should be displayed when a user mouses over the chart on desktop
   * @param {array} payload - the data the tooltip will be displaying from the chart
   * @returns CustomTooltip returns a custom tooltip
   */
  const CustomTooltip = ({ active, payload }: {active?: boolean, payload?: {value: string}[]}) => {
    if (active && payload && payload.length) {
      return (
        <div className="line-chart-customTooltip">
          <p>{`${payload[0].value} min`}</p>
        </div>
      );
    }
    return null;
  };

  /**
   * Create a custom cursor
   * @param {array} points - the current position of the cursor coordinate x and y
   * @param {number} width - the width of the graph
   * @returns CustomCursor returns a cursor in the shape of a rectangle in the background
   */
  const CustomCursor = ({ points, width }: {points?: {x: number}[], width?: number}) => {
    const { x } = points[0];
    return (
      <Rectangle
        fill="hsla(0, 0%, 0%, 9.75%)"
        x={x}
        width={width}
        height={300}
      />
    );
  };
  const days = ["L", "M", "M", "J", "V", "S", "D"];
  const data = [];

  averageSessions.sessions.forEach((session, index) => {
    data.push({
      name: days[index],
      length: session.sessionLength,
    });
  });

  return (
    <div className="LineChart">
      <p className="line-chart-title">Durée moyenne des <br></br>sessions</p>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            left: 0,
            top: 20,
            right: 0,
            bottom: 40,
          }}
        >
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tickMargin={30}
            tick={{ fill: "#FFFFFF", opacity: ".5" }}
            interval={"preserveStartEnd"}
          />
          <YAxis
            type="number"
            domain={["dataMin", "dataMax + 30"]}
            hide={true}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={<CustomCursor />}
            wrapperStyle={{ outline: "none" }}
          />
          <Line
            dataKey="length"
            type="natural"
            stroke="#FFFFFF"
            strokeWidth={2}
            dot={false}
            activeDot={{
              fill: "#FFFFFF",
              r: 4,
              strokeWidth: 8,
              strokeOpacity: 0.4,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineChartComponent;
