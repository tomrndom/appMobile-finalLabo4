import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { CacheServicio } from '../../shared/services/cache.service';
import { Pedidoventa, Pedidoventadetalle } from '../../shared/services/lbsdk';
import { PedidoVentaDetalleService, PedidoVentaService } from '../../shared/services';
import { StorageService } from '../../shared/services/storage.service';


@Component({
  selector: 'page-nuevo',
  templateUrl: 'nuevo.html',
})
export class NuevoPage {

  listaClientes: Array<any>;
  listaDomicilios: Array<any>;
  listaRubros: Array<any>;
  listaArticulos: Array<any>;

  pedido: Pedidoventa = new Pedidoventa();
  detallesPedido: Array<Pedidoventadetalle> = new Array<Pedidoventadetalle>();

  clienteElegido: any;
  domicilioElegido: any;
  rubroElegido: any;
  articuloElegido: any;

  cantidad: number = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private cache: CacheServicio,
    private toastCtrl: ToastController,
    private detalleService: PedidoVentaDetalleService,
    private pedidoService: PedidoVentaService,
    private storage: StorageService
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevoPage');
    this.cache.cargarTodo();
  }

  ionViewDidEnter() {
    this.clienteElegido = null;
    this.domicilioElegido = null;
    this.rubroElegido = null;
    this.articuloElegido = null;
    //console.log(this.clientes);    
    this.cargarDatos();
  }


  cambiaCliente($event) {
    this.listaDomicilios = this.listaDomicilios.filter(x => x.idCliente == $event);
  }

  cambiaRubro($event) {
    this.listaArticulos = this.listaArticulos.filter(x => x.idRubro == $event);
  }

  cambiaArticulo($event) {
    this.cantidad = null;
  }

  agregarAlPedido() {
    let detallePedido = new Pedidoventadetalle();
    detallePedido.cantidad = this.cantidad;
    detallePedido.idArticulo = this.articuloElegido.idArticulo;
    detallePedido.subtotal = this.articuloElegido.precioventa * this.cantidad;

    this.detallesPedido.push(detallePedido);
  }

  forceReload() {
    this.cache.invalidateCache();
    this.cargarDatos();
  }

  cargarDatos() {
    console.log("cargando datos desde la api");

    this.cache.cargarClientes().subscribe(clientes => {
      console.log("cargando clientes", clientes);
      this.listaClientes = clientes;
    });

    this.cache.cargarDomicilios().subscribe(domicilios => {
      console.log("cargando domicilios", domicilios);
      this.listaDomicilios = domicilios;
    })

    this.cache.cargarRubros().subscribe(rubros => {
      console.log("cargando rubros", rubros);
      this.listaRubros = rubros;
    })

    this.cache.cargarArticulos().subscribe(articulos => {
      console.log("cargando articulos", articulos);
      this.listaArticulos = articulos;
    })

    this.cache.cargarClientes().subscribe(clientes => {
      console.log("cargando clientes", clientes);
      this.listaClientes = clientes;
    })
  }

  guardarPedido(pedido: Pedidoventa) {
    pedido.idCliente = this.clienteElegido;
    pedido.idDomicilio = this.domicilioElegido;
    pedido.fechapedido = new Date();
    pedido.gastosenvio = 20;
    let tempSub;
    this.detallesPedido.map(x => {
      tempSub += x.subtotal;
    })
    pedido.subtotal = tempSub;
    pedido.montototal = pedido.subtotal + pedido.gastosenvio;
    pedido.estado = "Pendiente";

    this.storage.agregarPedido(pedido);
    this.storage.agregarDetalles(this.detallesPedido);

    /*this.pedidoService.postPedido(pedido).flatMap(pedido => {
      console.log("pedido guardado", pedido);
      this.detallesPedido.map(x => { x.idPedidoventa = pedido.idPedidoventa })
      return this.detalleService.postDetalles(this.detallesPedido)
    }).subscribe(detalles => {
      console.log("detalles guardados", detalles);
    })*/
    //...    
  }

}
