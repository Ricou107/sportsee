import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import "./GoalChart.css";

/**
 * Create a custom legend
 * @param {number} progression - the current progression of the goal
 * @returns CustomizedLegend returns a custom legend
 */
const CustomizedLegend = ({ progression }) => {
  return (
    <div className="goalChart__legend">
      <p>
        <span className="goalChart__percentage">{`${progression * 100}%`}</span>
        <br />
        de votre
        <br />
        objectif
      </p>
    </div>
  );
};

/**
 * GoalChart display a pie chart based on the user's score percentage
 * @param {object} data - The data of the user information
 * @returns GoalChart returns a pie chart based on the user's score percentage
 */
function GoalChart({ data }) {
  const progression = data.score ?? data.todayScore; // fix different name issue in api
  const remainsToBeDone = 1 - progression;
  const dataGoal = [
    { name: "progression", value: progression, color: "#FF0000" },
    { name: "remainsToBeDone", value: remainsToBeDone, color: "#000000" },
  ];
  const COLORS = ["#FF0000", "transparent"];

  return (
    <div className="goalChart chart-item">
      <div className="goalChart__title">Score</div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart
          margin={{
            left: 5,
            top: 5,
            right: 5,
            bottom: 5,
          }}
        >
          <circle cx="50%" cy="50%" r={"25%"} fill="#FFFFFF" />
          <Pie
            data={dataGoal}
            dataKey="value"
            fill="#FF0000"
            cx="50%"
            cy="50%"
            startAngle={90}
            endAngle={450}
            innerRadius={"50%"}
            outerRadius={"55%"}
            cornerRadius="100%"
          >
            {dataGoal.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                stroke="none"
              />
            ))}
          </Pie>
          <Legend
            verticalAlign="middle"
            content={<CustomizedLegend progression={progression} />}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GoalChart;
