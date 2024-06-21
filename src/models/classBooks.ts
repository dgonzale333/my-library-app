export class Libros {
     titulo : string;
     autor : string ;
     genero : string;
     idioma : string;
     precio : number;
     formato : string;
     isbn : number;
     descripcion : string;
     estado : string;
     ubicacion : string; 
     fecha_publicacion : number;
     editorial : string;
     paginas : number;
     dimensiones : string;
     peso : string;
     disponible : boolean;  
  
    constructor(titulo:string, autor:string, genero : string,idioma : string, precio : number,  formato : string,  isbn : number, descripcion : string,  estado : string, ubicacion : string, fecha_publicacion : number, editorial : string, paginas : number, dimensiones : string, peso : string,disponible : boolean ) {
      this.titulo = titulo;
      this.autor = autor;
      this.genero = genero;
      this.idioma = idioma;
      this.precio = precio;
      this.formato = formato;
      this.isbn = isbn;
      this.descripcion = descripcion;
      this.estado = estado;
      this.ubicacion = ubicacion;
      this.fecha_publicacion = fecha_publicacion;
      this.editorial = editorial;
      this.paginas = paginas;
      this.dimensiones = dimensiones;
      this.peso = peso;
      this.disponible = disponible;
    }
  
    imprimir() {
      console.log(`Titulo: ${this.titulo},autor:${this.autor}`);
    }
  }
  
  let libro1: Libros;
  libro1 = new Libros('El Quijote', 'Miguel de Cervantes', 'Ficción', 'Español', 40, 'Tapa dura', 12345678, 'Una novela clásica de la literatura española.', 'Nuevo', 'Madrid, España', 2/10/1996, 'Editorial 1', 400, '15x5x20 cm', '1.2 kg', true);
  libro1.imprimir();