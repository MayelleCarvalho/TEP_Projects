import { Pessoa } from './pessoa';

export class Tarefa {
    id: number;
    descricao: string;
    responsavel: Pessoa;
    porcentagem: number;
}