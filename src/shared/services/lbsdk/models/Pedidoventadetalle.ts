/* tslint:disable */

declare var Object: any;
export interface PedidoventadetalleInterface {
  "idPedidoventadetalle": number;
  "cantidad": number;
  "subtotal": number;
  "porcentajedescuento"?: number;
  "idArticulo"?: number;
  "idPedidoventa": number;
}

export class Pedidoventadetalle implements PedidoventadetalleInterface {
  "idPedidoventadetalle": number;
  "cantidad": number;
  "subtotal": number;
  "porcentajedescuento": number;
  "idArticulo": number;
  "idPedidoventa": number;
  constructor(data?: PedidoventadetalleInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Pedidoventadetalle`.
   */
  public static getModelName() {
    return "Pedidoventadetalle";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Pedidoventadetalle for dynamic purposes.
  **/
  public static factory(data: PedidoventadetalleInterface): Pedidoventadetalle{
    return new Pedidoventadetalle(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Pedidoventadetalle',
      plural: 'Pedidoventadetalles',
      path: 'Pedidoventadetalles',
      idName: 'idPedidoventadetalle',
      properties: {
        "idPedidoventadetalle": {
          name: 'idPedidoventadetalle',
          type: 'number'
        },
        "cantidad": {
          name: 'cantidad',
          type: 'number'
        },
        "subtotal": {
          name: 'subtotal',
          type: 'number'
        },
        "porcentajedescuento": {
          name: 'porcentajedescuento',
          type: 'number'
        },
        "idArticulo": {
          name: 'idArticulo',
          type: 'number'
        },
        "idPedidoventa": {
          name: 'idPedidoventa',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
