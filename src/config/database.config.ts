import { DataSourceOptions } from "typeorm";
import { getvar } from "../utils/env.utils";
import { Users } from "../database/entities/user.entity";
import { Buyer } from "../database/entities/buyer.entity";
import { Seller } from "../database/entities/seller.entity";
import { Product } from "../database/entities/product.entity";

 function databaseConfig():DataSourceOptions{
    return{
        type:"mysql",
        port:Number(getvar('DB_PORT')),
        host:getvar('DB_HOST'),
        username:getvar('DB_USERNAME'),
        password:getvar('DB_PASSWORD'),
        database:getvar('DB_NAME'),
        entities:[
            Users,
            Buyer,
            Seller,
            Product
        ],
        synchronize:true,
        logging:false




    }

}
export default databaseConfig