import { DataSourceOptions } from "typeorm";
import { getvar } from "../utils/env.utils";

 function databaseConfig():DataSourceOptions{
    return{
        type:"mysql",
        port:Number(getvar('DB_PORT')),
        host:getvar('DB_HOST'),
        username:getvar('DB_USERNAME'),
        password:getvar('DB_PASSWORD'),
        database:getvar('DB_NAME'),
        entities:[

        ],
        synchronize:true,
        logging:false




    }

}
export default databaseConfig