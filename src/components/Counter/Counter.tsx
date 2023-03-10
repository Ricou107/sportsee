import {Counts} from "../../interface";
import SingleCount from "../SingleCount/SingleCount";
import "./Counter.css";

function Counter({counts}: {counts: Counts}) {

  return (
    <div className="counter">
      <SingleCount type={"Calories"} quantity={counts.calorieCount} />
      <SingleCount type={"Proteines"} quantity={counts.proteinCount} />
      <SingleCount type={"Glucides"} quantity={counts.carbohydrateCount} />
      <SingleCount type={"Lipides"} quantity={counts.lipidCount} />
    </div>
  );
}

export default Counter;
