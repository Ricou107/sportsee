import "./SingleCount.css";
const CaloriesIcon = require("../../Assets/calories-icon.png");
const ProteinesIcon = require("../../Assets/protein-icon.png");
const GlucidesIcon = require("../../Assets/carbs-icon.png");
const LipidesIcon = require("../../Assets/fat-icon.png");


function SingleCount({type, quantity}: {type: string, quantity: number}) {
  const icon = type === 'Calories' ? CaloriesIcon : type === 'Proteines' ? ProteinesIcon : type === 'Glucides' ? GlucidesIcon : LipidesIcon;

  return (
    <div className="single-count">
      <img src={icon} alt={`icon${type}`} className={`img-single-count ${type}`} />
      <div>
        <p className="single-count-title">{quantity}{type === 'Calories' ? 'kCal' : 'g'}</p>
        <p className="single-count-subtitle">{type}</p>
      </div>
    </div>
  );
}

export default SingleCount;
