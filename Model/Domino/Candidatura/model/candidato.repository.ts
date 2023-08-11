import { candidatoModel } from "./candidato.model"

export interface candidatoRepository {
    selectAll(): Promise<candidatoModel[]>
    select(dni: string): Promise<candidatoModel| null>
    add(user: candidatoModel): Promise<void>
    delete(dni: string): Promise<void>
}

// aqui solo FRIMA SQL