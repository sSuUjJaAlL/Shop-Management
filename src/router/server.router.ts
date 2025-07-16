import { Application } from "express";
import getRequestrouter from "./login.router";

async function getserverRouter(app:Application){
    app.use('/api/v1',[
        getRequestrouter
    ])
}

export default getserverRouter