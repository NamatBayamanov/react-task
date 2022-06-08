import { getCurs } from "../data/data";

function ExchangeRate({ from, to }) {

  const rate = getCurs(from + to);

  return (
    <>
      <div className="ExachangeRate">
        <div>
          {from}/{to} = {rate};
        </div>
        
      </div>
    </>
  );
}

export default ExchangeRate;
