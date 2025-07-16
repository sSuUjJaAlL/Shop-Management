

import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./user.entity";
import { Product } from "./product.entity";

@Entity({
    name:'Seller'
})
export class Seller extends BaseEntity{
    @PrimaryGeneratedColumn({
        type:'bigint'
    })
    seller_id:number;
    
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

    @OneToOne(()=>Product,(product)=>product.seller)
    @JoinColumn()
    product:Product



    
}