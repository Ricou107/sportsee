import './Graphs.css';
import { UserActivity, UserInfos, UserPerformance } from '../../interface';
import { getActivity, getPerformance } from '../../services/axios';
import {useEffect, useState} from 'react';
import RadarChartComponent from '../RadarChart/RadarChart';
import BarChartComponent from '../BarChart/BarChart';

function Graphs({score, counts}: UserInfos) {
  const [activity, updateActivity] = useState<UserActivity | undefined>(undefined)
  const [performance, updatePerformance] = useState<UserPerformance | undefined>(undefined);


  const fetchActivity = async () => {
    const response = await getActivity();
    if (!response) {
      throw new Error('Activity could not be fetched!');
    } else {
      updateActivity(response.data);
      return;
    }
  }

    const fetchPerformance = async () => {
    const response = await getPerformance();
    if (!response) {
      throw new Error('Activity could not be fetched!');
    } else {
      updatePerformance(response.data);
      return;
    }
  }

  useEffect(() => {
    fetchActivity();
    fetchPerformance();
  }, []);

  return (
    <div className="Graphs">
      {activity ? <BarChartComponent activity={activity} /> : ""}
      {performance ? <RadarChartComponent performance={performance} /> : ""}
    </div>
  );
}

export default Graphs;
