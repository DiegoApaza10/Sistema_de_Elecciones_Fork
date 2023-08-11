import { candidatoRepository } from "./candidato.repository";
import { candidatoEntity } from "./candidato.entity";

// aqui con SQL (SET GET)
export class candidato implements candidatoRepository {
    
    async selectAll(): Promise<candidatoEntity[]> {
        return await candidatoEntity.findAll();
    }

    async select(dni: string): Promise<candidatoEntity| null> {
        return candidatoEntity.findOne({where:{id: dni}});
    }

    async add(user: candidatoEntity): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async delete(dni: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}