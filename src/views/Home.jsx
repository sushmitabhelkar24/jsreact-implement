import React, { useEffect, useState } from "react";
import toast,{Toaster} from "react-hot-toast"
import Scorecard from "../components/Scorecard";

function Home() {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const [winner,setWinner] = useState(null);
  const MAX_SCORE = 5;

  useEffect(() => {
    if (scoreA < MAX_SCORE && scoreB < MAX_SCORE) {
      return;
    } else if (scoreA === MAX_SCORE) {
      setWinner("Team A")
      toast.success("Team A wins");

    } else if (scoreB === MAX_SCORE) {
      setWinner("Team B")
      toast.success("Team B wins");

    }
  }, [scoreA, scoreB]);

  return (
    <>
      <div className="bg-blue-100 min-h-screen pt-10">
        <h1 className="text-2xl md:text-5xl  py-2 md:py-6 px-2 md:px-4 text-center border-2 border-dashed border-blue-700 bg-white">
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
            winner={winner}
            
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
            winner={winner}
          />
        </div>
        {winner ? (<p className="text-center text-2xl">The winner Team is <b className="mx-4 underline decoration-wavy ">🏆🏆{winner}🏆🏆.</b>Click to reset Button for a new star.</p>):null}
        

        <div className="flex justify-center">
          <button
            className=" py-2 md:py-4 px-4 md:px-8 m-4 md:m-8 bg-blue-300 border-2 border-black rounded-lg text-2xl md:text-3xl"
            onClick={() => {
              setScoreA(0);
              setScoreB(0);
              setWinner(null);
            }}
          >
            Reset
          </button>
        </div>
        <Toaster/>
      </div>
    </>
  );
}

export default Home;
