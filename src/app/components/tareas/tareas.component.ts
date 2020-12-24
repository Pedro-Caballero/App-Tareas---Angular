import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  listaTareas: Tarea[] = []
  nombreTarea = '';

  constructor() { }

  ngOnInit(): void {
  }
  agregarTarea() {
    // Crear un objeto Tarea
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }
    // Agregar el objeto tarea al array
    this.listaTareas.push(tarea);

    // Reser Form
    this.nombreTarea = '';
  }
  eliminarTarea(index: number) {
    this.listaTareas.splice(index, 1);
  }

  actualizarTarea(index: number, tarea: Tarea) {
    this.listaTareas[index].estado = !tarea.estado
  }
}
