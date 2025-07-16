import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { BUYER_ROLE, SELLER_ROLE } from "../../constants.ts/roles.constants";
import { Buyer } from "./buyer.entity";
import { Seller } from "./seller.entity";

@Entity({
    name:'Users'
})
export class Users extends BaseEntity{
    @PrimaryGeneratedColumn({
        type:'bigint',
    }) 
    id: number;

    @Column({
        type:'varchar',
        nullable:false
    })
    userName: string

    @Column({
        type:'varchar',
        nullable:false
    })
    email: string

    @Column({
        type:'text',
    })
    password:string;
    @Column({
        type:'simple-enum',
        enum:[
            SELLER_ROLE,
            BUYER_ROLE
        ]
    })
    role:string



}