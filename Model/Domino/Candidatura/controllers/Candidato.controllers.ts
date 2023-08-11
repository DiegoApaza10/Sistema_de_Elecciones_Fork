import { candidato } from "../model/candidato";
import { candidatoService } from "../service/candidato.service";

export class candidatoController {

    private service: candidatoService;
    private candidato_: candidato;

    constructor() {
        this.candidato_ = new candidato
        this.service = new candidatoService(this.candidato_)
    }

 // aqui implementamos ruta
    getAll() {
        return this.service.getAllcandidatos()
    }

    getByDni(dni: string) {
        return this.service.getcandidatoByDni(dni)
    }
}