import { getCurs } from "../data/data";
import classes from "./ExchangeRate.module.scss";


function ExchangeRate({ from, to, rate}) {


  return (
    <>
      <div className={classes.ExchangeRate}>
        <h4>
        {from} / {to}
        </h4>
        <h2>
          {rate.toFixed(2)}
        </h2>
      </div>
    </>
  );
}

export default ExchangeRate;
