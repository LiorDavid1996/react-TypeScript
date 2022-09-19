import {FC} from "react"
import Iuser from '../model/userMosel'
import {getUser} from  '../services/user.services'
import { useEffect, useState } from "react";
 
const returnHelloWord =(num1:number,num2:number):string=>{
    return(
        "Hello Word"
    )
}

let tempUsers: Iuser[];
function Home() {
  const [usersArray, setUsers] = useState(tempUsers);
  useEffect(() => {
    getUser().then((users: Iuser[]) => {
      setUsers(users);
    });
  }, [])

    return(

        <div>
               <table>
        <thead>
          <tr>
            {usersArray ? (
              Object.keys(usersArray[0]).map((key) => <td>{key}</td>)
            ) : (
              <td></td>
            )}
          </tr>
        </thead>
        <tbody>
          {usersArray?.map((user) => (
            <tr>
              {Object.values(user).map((value) => (
                typeof(value) =="string"?
                <td>{value}</td>:
                <td>{value.first+" "+ value.last}</td>
               
              ))}
            </tr>
          ))}
        </tbody>
      </table>
       
        
        </div>
    )}
export default Home
    