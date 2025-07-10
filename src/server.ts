import { Expression } from "typescript"
import express,{Express} from "express";
import { getvar } from "./utils/env.utils";
import getmiddleware from "./middleware/router.middleware";
import getServerRouter from "./router/server.router";
import SingletonDatabaseConnection from "./database/connect";
import { DataSource } from "typeorm";
import getserverRouter from "./router/server.router";

export default class Server{
    
    private static instance:Server
    private port:number
    private app :Express

  private constructor(){
    this.app=express();
    this.port= parseInt(getvar('PORT')as string,10) ||3000

  }
  public static getInstance():Server{
    if(!Server.instance){
        Server.instance= new Server()
    }
        return Server.instance
    }

    private async getMiddleware():Promise<void>{
       await getmiddleware(this.app)
    
}
    private async getServerRouter():Promise<void>{
        await getserverRouter(this.app)
    }
    private async connecttoDatabase():Promise<DataSource>{
        return await SingletonDatabaseConnection.getConnection();

    }

    public async start():Promise<void>{
        await this.getMiddleware()
        await this.getServerRouter()
        await this.connecttoDatabase()
        console.log(`Database successfully connected on ${getvar('DB_PORT')} port `)
        try{
            this.app.listen(this.port,()=>{
                console.log(`App is successfully running on ${getvar('PORT')} port`)
            })
        }
        catch(err){
            console.log("Error while starting the server")

        }

    }
    

  


}