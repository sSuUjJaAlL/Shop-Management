import { Application } from "express";
import getRequestrouter from "./logi.router";

async function getserverRouter(app:Application){
    app.use('/api/v1',[
        getRequestrouter
    ])
}

export default getserverRouter