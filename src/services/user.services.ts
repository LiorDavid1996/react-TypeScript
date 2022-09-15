import Iuser from "../model/userMosel"
const API:string ="https://my-json-server.typicode.com/Jeck99/fake-server/users"


export const getUser = async ():Promise<any> => {
     
    try {
        return await fetch(API)
        .then((res:Response)=>res.json())
        .then((result)=> {
        let resultArray:Iuser[]=result
            return resultArray
        }
        )
    } catch (error ) {
        
    }

}