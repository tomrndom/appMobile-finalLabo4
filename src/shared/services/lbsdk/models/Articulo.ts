/* tslint:disable */

declare var Object: any;
export interface ArticuloInterface {
  "idArticulo": number;
  "codigo": string;
  "denominacion": string;
  "preciocompra": number;
  "precioventa": number;
  "iva": number;
  "idRubro": number;
}

export class Articulo implements ArticuloInterface {
  "idArticulo": number;
  "codigo": string;
  "denominacion": string;
  "preciocompra": number;
  "precioventa": number;
  "iva": number;
  "idRubro": number;
  constructor(data?: ArticuloInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Articulo`.
   */
  public static getModelName() {
    return "Articulo";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Articulo for dynamic purposes.
  **/
  public static factory(data: ArticuloInterface): Articulo{
    return new Articulo(data);
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
      name: 'Articulo',
      plural: 'Articulos',
      path: 'Articulos',
      idName: 'idArticulo',
      properties: {
        "idArticulo": {
          name: 'idArticulo',
          type: 'number'
        },
        "codigo": {
          name: 'codigo',
          type: 'string'
        },
        "denominacion": {
          name: 'denominacion',
          type: 'string'
        },
        "preciocompra": {
          name: 'preciocompra',
          type: 'number'
        },
        "precioventa": {
          name: 'precioventa',
          type: 'number'
        },
        "iva": {
          name: 'iva',
          type: 'number'
        },
        "idRubro": {
          name: 'idRubro',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
