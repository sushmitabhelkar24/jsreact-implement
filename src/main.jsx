import ReactDOM from "react-dom/client";
import "./index.css";
import {USERS} from "./configs"
import {MapPin as MapPinIcon} from "lucide-react"
import {MoveUp as MoveUpIcon} from "lucide-react"




ReactDOM.createRoot(document.getElementById("root")).render(
  <>
  <div className="bg-blue-100 min-h-screen overflow-hidden">
    <h1 className="text-center bg-amber-100 text-2xl p-4">Searching - Sorting- Filter</h1>
     <div>
      <div className="bg-white flex flex-wrap justify-center ">
        {
          USERS.map((userdata,index)=>{
           const {name,age,city,avatar} = userdata;

           return <div className="m-6 w-97.5 flex flex-row bg-emerald-100">
            <img src={avatar} alt="img" className="w-12.5 rounded-full"/>
            <div className="ml-6"> 
            <p><b>{name}</b></p>
            <div className="flex justify-around">
            <p className="flex justify-center align-center"><MoveUpIcon className="h-4.5"/>{age}</p>
            <p className="flex justify-center  align-center ml-10"><MapPinIcon className="h-5"/>{city}</p>
            </div>
            </div>
             </div>
          })
        }

      </div>
     </div>
    </div>
  </>,
);
