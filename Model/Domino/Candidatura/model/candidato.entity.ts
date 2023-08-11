import { candidatoModel } from "./candidato.model";
import { Table, Column, Model, PrimaryKey } from "sequelize-typescript";

@Table({tableName: 'candidatos'})
export class candidatoEntity extends Model implements candidatoModel {
    
    @PrimaryKey
    @Column({autoIncrement: true})
    dni: number;

    @Column
    username: string;

    @Column
    email: string;

    @Column
    partido_politico: string;

    @Column
    createdAt?: Date;

    @Column
    updatedAt?: Date;
}
