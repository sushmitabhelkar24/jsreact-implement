import React, { useEffect, useState } from "react";

import Scorecard from "../components/Scorecard";

function Home() {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  useEffect(() => {
    if (scoreA < 10 && scoreB < 10) {
      return;
    } else if (scoreA === 10) {
      alert("Team A wins");
    } else if (scoreB === 10) {
      alert("Team B wins");
    }
  }, [scoreA, scoreB]);

  return (
    <>
      <div className="bg-blue-100 min-h-screen">
        <h1 className="text-2xl md:text-5xl m-10 py-2 md:py-6 px-2 md:px-4 text-center border-2 border-dashed border-blue-700 bg-white">
          Score keeper
        </h1>
        <div className="flex flex-col md:flex-row justify-center md:justify-around">
          <Scorecard
            teamName="Team A"
            teamScore={scoreA}
            decreaseScore={() => {
              setScoreA(scoreA - 1);
            }}
            increaseScore={() => {
              setScoreA(scoreA + 1);
            }}
          />
          <Scorecard
            teamName="Team B"
            teamScore={scoreB}
            decreaseScore={() => {
              setScoreB(scoreB - 1);
            }}
            increaseScore={() => {
              setScoreB(scoreB + 1);
            }}
          />
        </div>

        <div className="flex justify-center">
          <button
            className=" py-2 md:py-4 px-4 md:px-8 m-4 md:m-8 bg-blue-300 border-2 border-black rounded-lg text-2xl md:text-3xl"
            onClick={() => {
              setScoreA(0);
              setScoreB(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
