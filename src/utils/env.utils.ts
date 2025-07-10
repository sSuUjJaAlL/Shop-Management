import dotenv from 'dotenv'
dotenv.config()
export function getvar(key:string, fallback?:string){
    if(Object.prototype.hasOwnProperty.call(process.env,key)){
        const value = process.env[key];
        if(value!=='' && value!==undefined){
            return value
        }


    }
    if(fallback!==' '&& fallback!==undefined){
        return fallback
    }
    console.log(`The .env variables you gave were incorrect${key}`)
 }
