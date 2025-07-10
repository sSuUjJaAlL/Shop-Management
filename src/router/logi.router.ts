import { Router } from "express";
import { Request,Response } from "express";

const getRequestrouter=Router()

getRequestrouter.get('/getresponse',(req:Request,res:Response)=>{
    res.json("Namaste i am subodh nepal from kadaghari")

})
export default getRequestrouter