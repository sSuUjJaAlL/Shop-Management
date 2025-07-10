import express,{Application, urlencoded} from "express"

async function getmiddleware(app:Application){
    app.use(express.json())
    app.use(urlencoded({extended:true}))


}
export default getmiddleware