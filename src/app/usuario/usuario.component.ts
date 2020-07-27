import { Component, OnInit, TemplateRef} from '@angular/core';
import { UsuarioService } from '../services/usuarios';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { IUsuario } from '../interface/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
	
  usuarios: IUsuario[] = [];
  usuario: IUsuario = <IUsuario>{};
  modalRef: BsModalRef;
  isLoad:boolean=false;
  
  constructor(private usuarioHttp: UsuarioService, private modalService: BsModalService) { }

  ngOnInit(): void {
	  this.load();
  }

  openModal(template: TemplateRef<any>) {
    this.usuario = <IUsuario>{};
    this.modalRef = this.modalService.show(template);
  }

  guardar() {
   if(this.usuario.nombre !="" && this.usuario.email !=""){
      this.modalRef.hide();
      this.isLoad=true;
      this.usuarioHttp.add(this.usuario).subscribe((rs: IUsuario) => { 
        this.isLoad=false;
		    this.usuarios.push(rs);
      })
    }
  }
  
  load(){
    this.isLoad=true;
	  this.usuarioHttp.all().subscribe((data: IUsuario[]) => {
      this.usuarios=data;
      this.isLoad=false;
    });
    
  }

}
