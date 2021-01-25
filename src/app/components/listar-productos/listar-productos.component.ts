import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {

  constructor(private _productoService: ProductoService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }


  obtenerProductos() {
    this._productoService.getProductos().subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    })
  }

}
