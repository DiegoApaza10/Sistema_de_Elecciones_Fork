import { User } from "../model/candidato";

export class candidatoService {
    
    private candidato_: candidato;

    constructor(candidato_: candidato) {
        this.candidato_ = candidato_;
    }

    async getAllcandidatos() {
        try {
            const candidatos = await this.candidato_.selectAll();
            return candidatos;
          } catch (error) {
            return Error(`Error al obtener usuarios. ${error}`);
          }
    }

    async getcandidatoByDni(dni: string) {
        try {
            const user = await this.candidato_ .select(dni)
            if(!user) {
                return Error(`El usuario con dni ${dni} no existe`)
            }
            return user
        } catch(error) {
            return Error(`Error al obtener el usuario con dni ${dni} ${error}`);
        }
    }
}
