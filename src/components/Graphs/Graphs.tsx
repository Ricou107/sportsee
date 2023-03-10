import "./Graphs.css";
import { UserActivity, UserPerformance, UserAverageSessions } from "../../interface";
import { getActivity, getPerformance, getAverageSessions } from "../../services/axios";
import { useEffect, useState } from "react";
import RadarChartComponent from "../RadarChart/RadarChart";
import BarChartComponent from "../BarChart/BarChart";
import LineChartComponent from "../LineChart/LineChart";
import GoalChart from "../GoalChart/GoalChart";
import Counter from "../Counter/Counter";

function Graphs({ score, counts, userId }) {
  const [activity, updateActivity] = useState<UserActivity | undefined>(undefined);
  const [performance, updatePerformance] = useState<UserPerformance | undefined>(undefined);
  const [averageSessions, updateAverageSessions] = useState<UserAverageSessions | undefined>(undefined);

  const fetchActivity = async () => {
    const response = await getActivity(userId);
    if (!response) {
      throw new Error("Activity could not be fetched!");
    } else {
      updateActivity(response.data);
      return;
    }
  };

  const fetchPerformance = async () => {
    const response = await getPerformance(userId);
    if (!response) {
      throw new Error("Activity could not be fetched!");
    } else {
      updatePerformance(response.data);
      return;
    }
  };

  const fetchAverageSessions = async () => {
    const response = await getAverageSessions(userId);
    if (!response) {
      throw new Error("Average sessions could not be fetched!");
    } else {
      updateAverageSessions(response.data);
      return;
    }
  };

  useEffect(() => {
    fetchActivity();
    fetchPerformance();
    fetchAverageSessions();
  });

  return (
    <div className="Graphs">
      <div className="Graphs-flex1">
        {activity ? <BarChartComponent activity={activity} /> : ""}
        <div className="Graphs-flex2">
          {averageSessions ? <LineChartComponent averageSessions={averageSessions} /> : ""}
          {performance ? <RadarChartComponent performance={performance} /> : ""}
          {score ? <GoalChart data={{score: score}}/> : ""}
        </div>
      </div>
      {counts ? <Counter counts={counts}/> : ""}
    </div>
  );
}

export default Graphs;
