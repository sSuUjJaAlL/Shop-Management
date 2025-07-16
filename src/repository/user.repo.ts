import { Buyer } from "../database/entities/buyer.entity"
import { Seller } from "../database/entities/seller.entity"

class UserRepository{
    public async searchUser<T>(
        key:string,
        value:T,
        repo:string,
    ){
        const repository:Buyer|Seller|any = this.getRepository(repo)
        const searchuser= await repository.findOne({
            where:{
                [`${key}`]:value,
            }
        })
        return searchuser
    }

    public getRepository(repo:string){
        switch(repo.toLowerCase()){
            case 'buyer':{
                return Buyer
            }
            case 'seller':{
                return Seller
            }
            case 'both':{
                return Seller && Buyer;
            }
        }
    }
}
export default UserRepository