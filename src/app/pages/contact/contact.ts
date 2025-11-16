import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {
  nombre: string = '';
  apellido: string = '';
  correo: string = '';

  // Evitar que se escriban números (teclado)
  bloquearNumeros(event: KeyboardEvent) {
    const key = event.key;

    // permitir teclas de control (backspace, tab, arrows, enter, delete)
    const controlKeys = [
      'Backspace','Tab','ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Delete','Enter','Home','End'
    ];
    if (controlKeys.includes(key)) return;

    // permitir letras y espacios y letras acentuadas (siempre que no sea dígito)
    if (/[0-9]/.test(key)) {
      event.preventDefault();
    }
  }

  // Evitar pegar texto que contenga números
  onPasteNoNumbers(event: ClipboardEvent) {
    const paste = (event.clipboardData || (window as any).clipboardData)?.getData('text') || '';
    if (/\d/.test(paste)) {
      event.preventDefault();
    }
  }

  // Normalizar entrada: quitar cualquier carácter no permitido (se usa en input)
  onInputNombreApellido(event: Event, campo: 'nombre' | 'apellido') {
    const el = event.target as HTMLInputElement;
    const limpio = el.value.replace(/[^A-Za-zÁÉÍÓÚáéíóúñÑ\s]/g, '');
    if (el.value !== limpio) {
      el.value = limpio;
      if (campo === 'nombre') this.nombre = limpio;
      else this.apellido = limpio;
    }
  }

  correoValido(correo: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
  }

  enviarFormulario() {
    if (!this.nombre.trim() || !this.apellido.trim() || !this.correo.trim()) {
      alert('Todos los campos son obligatorios.');
      return;
    }

    if (!this.correoValido(this.correo)) {
      alert('Ingrese un correo válido.');
      return;
    }

    // aquí puedes enviar a Firebase o lo que necesites
    alert(`Formulario enviado:\nNombre: ${this.nombre}\nApellido: ${this.apellido}\nCorreo: ${this.correo}`);
  }
}