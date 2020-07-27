import { Component, OnInit, TemplateRef } from '@angular/core';
import { TareaService } from '../services/tareas';
import { UsuarioService } from '../services/usuarios';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { IUsuario } from '../interface/usuario';
import { ITarea } from '../interface/tarea';

const XTarea: ITarea = { 
	id: 0, titulo: '',  descripcion: '', fecha: '', estatus: '',  usuario_id:0,
	tiempo: { fecha: '', hora: 0, minuto: 0, resta: ''},
	usuario: { id: 0, nombre: '', email: '', avatar: ''},
	status: false,  disabled:false 
};

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
  
  tareas: ITarea[] = [];
  tarea: ITarea = {} as ITarea;
  usuarios: IUsuario[] = [];
  accion:string = 'n';
  titleModal:string = 'Agregar Tarea';
  mTime:any = new Date();
  modalRef: BsModalRef;
  isLoad:boolean=false;

  constructor(	private tareaHttp: TareaService, 
				private usuarioHttp: UsuarioService, 
				private modalService: BsModalService ) { }

  ngOnInit(): void {
	  this.load();
  }

  openNew(template: TemplateRef<any>): void {
	this.tarea =  JSON.parse(JSON.stringify(XTarea));
	this.tarea.usuario_id=this.usuarios[0].id;
	if(this.mTime==null){
		this.mTime = new Date();
	}
	this.mTime.setHours(0);
	this.mTime.setMinutes(0);
	this.accion = 'n';
	this.titleModal = 'Agregar Tarea';
	this.modalRef = this.modalService.show(template);
  }

  openTiempo(template: TemplateRef<any>, tarea:ITarea): void {
	this.tarea = JSON.parse(JSON.stringify(tarea));
	this.tarea.disabled=(tarea.estatus=='F');
	this.mTime.setHours(this.tarea.tiempo.hora);
	this.mTime.setMinutes(this.tarea.tiempo.minuto);
	this.accion = 't';
	this.titleModal = 'Ver Tarea';
	this.modalRef = this.modalService.show(template);
  }

  openEdit(template: TemplateRef<any>, tarea:ITarea): void {
	this.tarea = JSON.parse(JSON.stringify(tarea));
	this.tarea.disabled=(tarea.estatus=='F');
	if(this.mTime==null){
		this.mTime = new Date();
	}
	this.mTime.setHours(this.tarea.tiempo.hora);
	this.mTime.setMinutes(this.tarea.tiempo.minuto);
	this.accion = 'e';
	this.titleModal = (tarea.estatus=='A'?'Editar Tarea':'Ver Tarea');
	this.modalRef = this.modalService.show(template);
  }

  openDelete(template: TemplateRef<any>, tarea:ITarea): void {
	this.tarea = JSON.parse(JSON.stringify(tarea));
	this.accion = 'd';
	this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
  
  guardar(): void {
	if(this.mTime==null){
		this.mTime = new Date();
		this.mTime.setHours(0);
		this.mTime.setMinutes(0);
	}
	this.modalRef.hide();
	let data:ITarea = this.tarea;
	let id:number = this.tarea.id;
	let index:number=-1;
	data.tiempo.hora=this.mTime.getHours();
	data.tiempo.minuto=this.mTime.getMinutes();
	this.isLoad=true;
	switch(this.accion){
		case 'n': // add 
				this.tareaHttp.add(data).subscribe((rs: ITarea) => {
					this.tareas.push(rs);
					this.isLoad=false;
				});
		break;
		case 'e': // edit 
				this.tareaHttp.update(id,data).subscribe((rs: ITarea) => {
					this.tareas.forEach((t,i) => {
						if(t.id==id){
							index=i;
						}
					});
					if(index>-1){
						this.tareas[index]=rs;
					}
					this.isLoad=false;
				});
		break;
		case 'd': // delete
				this.tareaHttp.delete(id).subscribe((rs: string) => {
					this.tareas.forEach((t,i) => {
						if(t.id==id){
							index=i;
						}
					});
					if(index>-1){
						this.tareas.splice(index,1);
					}
					this.isLoad=false;
				});
		break;
		case 't': // edit date
				this.tareaHttp.updateFecha(id,data).subscribe((rs: ITarea) => {
					this.tareas.forEach((t,i) => {
						if(t.id==id){
							index=i;
						}
					});
					if(index>-1){
						this.tareas[index].tiempo=rs.tiempo;
					}
					this.isLoad=false;
				});
		break;
	}
  }
  
  
  load(): void {
	let load:number=0;
	this.isLoad=true;
	this.usuarioHttp.all().subscribe((data: IUsuario[]) => {
		this.usuarios=data;
		load++
		if(load > 1) {
			this.isLoad=false;
		}
	  });
	this.tareaHttp.all().subscribe((data: ITarea[]) => {
		this.tareas=data;
		load++
		if(load > 1) {
			this.isLoad=false;
		}
	});
  }

}
