/* tslint:disable */

declare var Object: any;
export interface ClienteInterface {
  "idCliente": number;
  "razonsocial": string;
  "cuit": string;
  "saldo"?: number;
  "idDomicilio": number;
  "idDomicilionegocio": number;
}

export class Cliente implements ClienteInterface {
  "idCliente": number;
  "razonsocial": string;
  "cuit": string;
  "saldo": number;
  "idDomicilio": number;
  "idDomicilionegocio": number;
  constructor(data?: ClienteInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Cliente`.
   */
  public static getModelName() {
    return "Cliente";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Cliente for dynamic purposes.
  **/
  public static factory(data: ClienteInterface): Cliente{
    return new Cliente(data);
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
      name: 'Cliente',
      plural: 'Clientes',
      path: 'Clientes',
      idName: 'idCliente',
      properties: {
        "idCliente": {
          name: 'idCliente',
          type: 'number'
        },
        "razonsocial": {
          name: 'razonsocial',
          type: 'string'
        },
        "cuit": {
          name: 'cuit',
          type: 'string'
        },
        "saldo": {
          name: 'saldo',
          type: 'number'
        },
        "idDomicilio": {
          name: 'idDomicilio',
          type: 'number'
        },
        "idDomicilionegocio": {
          name: 'idDomicilionegocio',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
