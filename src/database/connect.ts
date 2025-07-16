import { DataSource, DataSourceOptions } from "typeorm"
import databaseConfig from "../config/database.config"
import { getvar } from "../utils/env.utils"
import routineLogger from "../libs/logger.libs"
import managementLogger from "../libs/logger.libs"

class SingletonDatabaseConnection{
    public static async getConnection (retry=0):Promise<any>{
        //let dbstatus= true
        try{
            const databaseSource = new DataSource(databaseConfig() as DataSourceOptions)
            await databaseSource.initialize()
            return databaseSource
            
        }
        catch(err){
           managementLogger.error(`Error connecting to database ${getvar('PORT')} `+ err)
        }
   
    }

}
export default SingletonDatabaseConnection