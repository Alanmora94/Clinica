import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boton'
})
export class BotonPipe implements PipeTransform {

  transform(value: string): string {

    let idioma: string;

    switch (value) {
      case 'cancelado':
          idioma = 'cancelado';
        break;

      case 'realizado':
          idioma = 'realizado';
        break;

      default:
        idioma = 'indefinido';
        break;
    }

    return idioma;
  }

}
