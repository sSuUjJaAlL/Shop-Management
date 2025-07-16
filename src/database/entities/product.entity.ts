import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./user.entity";
import { BIG, EXTRA_BIG, MEDIUM, SMALL } from "../../constants.ts/size.constant";
import { Buyer } from "./buyer.entity";
import { Seller } from "./seller.entity";

@Entity({
    name:'Product'
})
export class Product extends BaseEntity{
    @PrimaryGeneratedColumn({
        type:'bigint'
    })
    product_id:number;
    
    @Column({
        type:'varchar'
    })
    product_name:string

    @Column({
        type:'boolean'
    })
    is_sensitive:boolean

    @Column({
        type:'simple-enum',
        enum:[
            EXTRA_BIG,
            BIG,
            MEDIUM,
            SMALL
        ]
    })
    size:string

    @OneToOne(()=>Buyer,(buyers)=>buyers.product)
    @JoinColumn()
    buyer:Buyer

    @OneToOne(()=>Seller,(sellers)=>sellers.product)
    @JoinColumn()
    seller:Seller


    
}