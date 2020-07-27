import { ITiempo } from './tiempo';
import { IUsuario } from './usuario';

export interface ITarea {
    id: number;
    titulo: string;
    descripcion: string;
    fecha: string;
    estatus: string;
    usuario_id:number;
    tiempo: ITiempo;
    usuario: IUsuario;
    status: boolean;
    disabled:boolean;
}