import {FC} from "react"
import Iuser from '../model/userMosel'
import {getUser} from  '../services/user.services'
 
const returnHelloWord =(num1:number,num2:number):string=>{
    return(
        "Hello Word"
    )
}
getUser()

export default function Home() {
    return(
        <div>
            
        {returnHelloWord(1,2) }
        </div>
    )
}