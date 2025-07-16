import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./user.entity";
import { Product } from "./product.entity";

@Entity({
    name:'Buyer'
})
export class Buyer extends BaseEntity{
    @PrimaryGeneratedColumn({
        type:'bigint'
    })
    buyer_id:number;
    
    @Column({
        type:'varchar'
    })
    name:string

    @Column({
        type:'varchar'
    })
    email:string

    @Column({
        type:'varchar'
    })
    password:string

    @Column({
        type:'varchar'
    })
    address:string

     @OneToOne(()=>Product,(product)=>product.buyer)
        @JoinColumn()
        product:Product
    
}