import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {

  nombre: string = '';
  apellido: string = '';
  correo: string = '';
  mensajeTexto: string = '';
  mensaje: string = "";
  tipoMensaje: 'error' | 'success' | '' = '';

  submitted = false;

  bloquearNumeros(event: KeyboardEvent) {
    const key = event.key;

    const controlKeys = [
      'Backspace','Tab','ArrowLeft','ArrowRight','ArrowUp','ArrowDown',
      'Delete','Enter','Home','End'
    ];
    if (controlKeys.includes(key)) return;

    if (/^[0-9]$/.test(key) || event.code.includes("Digit") || event.code.includes("Numpad")) {
      event.preventDefault();
    }
  }

  onPasteNoNumbers(event: ClipboardEvent) {
    const texto = event.clipboardData?.getData('text') || '';
    if (/\d/.test(texto)) event.preventDefault();
  }

  onInputNombreApellido(event: Event, campo: 'nombre' | 'apellido') {
    const input = event.target as HTMLInputElement;
    const limpio = input.value.replace(/[^A-Za-zÁÉÍÓÚáéíóúñÑ\s]/g, '');
    input.value = limpio;

    if (campo === 'nombre') this.nombre = limpio;
    else this.apellido = limpio;
  }

  correoValido(correo: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
  }

  mostrarMensaje(texto: string, tipo: 'error' | 'success') {
    this.mensaje = texto;
    this.tipoMensaje = tipo;

    setTimeout(() => {
      this.mensaje = "";
      this.tipoMensaje = "";
    }, 3000);
  }

  enviarFormulario(form: NgForm) {
    this.submitted = true;

    let errores: string[] = [];

    if (!this.nombre.trim()) errores.push("Nombre");
    if (!this.apellido.trim()) errores.push("Apellido");
    if (!this.correo.trim()) errores.push("Correo");
    if (!this.mensajeTexto.trim()) errores.push("Mensaje");

    if (errores.length > 0) {
      this.mostrarMensaje(
        "Campos obligatorios sin completar: " + errores.join(", "),
        "error"
      );
      return;
    }

    if (!this.correoValido(this.correo)) {
      this.mostrarMensaje("El correo no tiene un formato válido.", "error");
      return;
    }

    this.mostrarMensaje("Información enviada correctamente ✔", "success");

    this.nombre = "";
    this.apellido = "";
    this.correo = "";
    this.mensajeTexto = '';
    this.submitted = false;
    form.resetForm();
  }
}
