import { Category } from "src/Modules/category/entities/category.entity";
import { Request } from "src/Modules/request/entities/request.entity";
import { User } from "src/Modules/user/entities/user.entity";
import { Vendor } from "src/Modules/vendor/entities/vendor.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Item {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    serialNo: string

    @Column()
    description: string

    @Column({type: 'decimal'})
    price: number

    @Column({type: 'decimal', default: 0})
    currentPrice: number

    @Column({type: 'decimal', default: 0})
    depriciatedPrice: number

    @Column({default: "0%"})
    depreciationPercentage: string

    @CreateDateColumn()
    created_at: Date

    @ManyToOne(()=>Category, (category)=>category.item)
    @JoinColumn()
    category: Category

    @ManyToOne(()=>User,(user)=>user.item)
    @JoinColumn()
    assigned_to: User

    @ManyToOne(()=>Vendor, (vendor)=>vendor.items)
    @JoinColumn()
    vendor: Vendor

    @OneToOne(()=>Request, (request)=>request.item)
    request: Request

}