import "./../index.css";
import { USERS } from "./../configs";
import { MapPin as MapPinIcon } from "lucide-react";
import { MoveUp as MoveUpIcon } from "lucide-react";
import { useEffect, useState } from "react";

function App() {
  const [searchText, setSearchText] = useState("");
  const [filteredUser,setFiltereduser] = useState(USERS);
  const [filteredCity, setFilteredCity] =useState(USERS);
  const [filteredAge, setFilteredAge] =useState(USERS);

  useEffect(()=>{

    if(!searchText){
        setFiltereduser(USERS);
        return
    }
    const tempFilteredUser = USERS.filter((user)=>{
        if (user.name.toLocaleLowerCase().includes(searchText)){
            return true;
        }
        else if(user.city.toLocaleLowerCase().includes(searchText)){
            return true;
        }
        else if(user.age.toString().includes(searchText)){
            return true;
        }else{
            return false;
        }

     
    })
       setFiltereduser(tempFilteredUser);

  },[searchText])

  useEffect(()=>{
    if(!filteredAge && !filteredCity){
       setFiltereduser(USERS);
       return
    }

    const tempFilteredUser = USERS.filter((user)=>{
     if (filteredAge && user.age === parseInt(filteredAge) && filteredCity && user.city === filteredCity){
      return true;
     }else if (filteredCity === USERS || user.city === filteredCity){
      return true;
     }else if (filteredAge === USERS || user.age === parseInt(filteredAge)){
      return true;
     }
      return false;
     

    })
    
    setFiltereduser(tempFilteredUser);

  },[filteredAge,filteredCity])



  return (
    <>
      <div className="min-h-screen overflow-hidden">
        <h1 className="text-center bg-amber-100 text-2xl p-4 mb-4">
          Searching - Sorting- Filter
        </h1>

        <input
          type="text"
          placeholder="Search"
          className="w-2/3 block mx-auto p-2 m-4 focus:outline-none border-black border-double border-2 rounded-lg"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value.toLocaleLowerCase())}
        />
      
        <div className="flex justify-around">
          <div>
            <span>Filter By City :</span>
            <select className="rounded-lg p-2 ml-2 " value={filteredCity} onChange={(e)=>setFilteredCity(e.target.value)}>
            <option value="All">All</option>
            {
              USERS.map((user)=>{
                return <option key={user.city} value={user.city}>{user.city}</option>
              })
            }   
            </select>
          </div>
          <div>
              <span>Filter By Age :</span>
            <select className="rounded-lg p-2 ml-2 " value={filteredAge} onChange={(e)=>setFilteredAge(e.target.value)}>
             <option value="All">All</option>
             {
              USERS.map((user)=>{
                return <option key={user.age} value={user.age}>{user.age}</option>      
              })
             }   
            </select>
          </div>
        </div>

        {searchText ?
        (!filteredUser.length ?<p className="text-2xl text-center">Oops no user found for your search ..Try else</p>:<p className="text-center text-xl mb-4">Found <b>{filteredUser.length}</b> users for your search </p>)
        :null}
        
        <div>
          <div className="bg-white flex flex-wrap justify-center ">
            {filteredUser.map((userdata, index) => {
              const { name, age, city, avatar } = userdata;

              return (
                <div
                  className="m-6 w-97.5 flex flex-row bg-emerald-100"
                  key={index}
                >
                  <img src={avatar} alt="img" className="w-12.5 rounded-full" />
                  <div className="ml-6">
                    <p>
                      <b>{name}</b>
                    </p>
                    <div className="flex justify-around">
                      <p className="flex justify-center align-center">
                        <MoveUpIcon className="h-4.5" />
                        {age}
                      </p>
                      <p className="flex justify-center  align-center ml-10">
                        <MapPinIcon className="h-5" />
                        {city}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
