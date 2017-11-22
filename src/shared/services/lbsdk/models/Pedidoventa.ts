/* tslint:disable */

declare var Object: any;
export interface PedidoventaInterface {
  "idPedidoventa": number;
  "fechaestimadaentrega": Date;
  "gastosenvio": number;
  "estado": string;
  "entregado": boolean;
  "fechapedido": Date;
  "nropedido": number;
  "subtotal": number;
  "montototal": number;
  "idCliente": number;
  "idDomicilio": number;
}

export class Pedidoventa implements PedidoventaInterface {
  "idPedidoventa": number;
  "fechaestimadaentrega": Date;
  "gastosenvio": number;
  "estado": string;
  "entregado": boolean;
  "fechapedido": Date;
  "nropedido": number;
  "subtotal": number;
  "montototal": number;
  "idCliente": number;
  "idDomicilio": number;
  constructor(data?: PedidoventaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Pedidoventa`.
   */
  public static getModelName() {
    return "Pedidoventa";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Pedidoventa for dynamic purposes.
  **/
  public static factory(data: PedidoventaInterface): Pedidoventa{
    return new Pedidoventa(data);
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
      name: 'Pedidoventa',
      plural: 'Pedidoventa',
      path: 'Pedidoventa',
      idName: 'idPedidoventa',
      properties: {
        "idPedidoventa": {
          name: 'idPedidoventa',
          type: 'number'
        },
        "fechaestimadaentrega": {
          name: 'fechaestimadaentrega',
          type: 'Date'
        },
        "gastosenvio": {
          name: 'gastosenvio',
          type: 'number'
        },
        "estado": {
          name: 'estado',
          type: 'string'
        },
        "entregado": {
          name: 'entregado',
          type: 'boolean'
        },
        "fechapedido": {
          name: 'fechapedido',
          type: 'Date'
        },
        "nropedido": {
          name: 'nropedido',
          type: 'number'
        },
        "subtotal": {
          name: 'subtotal',
          type: 'number'
        },
        "montototal": {
          name: 'montototal',
          type: 'number'
        },
        "idCliente": {
          name: 'idCliente',
          type: 'number'
        },
        "idDomicilio": {
          name: 'idDomicilio',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
