/* tslint:disable */

declare var Object: any;
export interface RubroInterface {
  "idRubro": number;
  "codigo": string;
  "denominacion": string;
  "idRubroprimario"?: number;
}

export class Rubro implements RubroInterface {
  "idRubro": number;
  "codigo": string;
  "denominacion": string;
  "idRubroprimario": number;
  constructor(data?: RubroInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Rubro`.
   */
  public static getModelName() {
    return "Rubro";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Rubro for dynamic purposes.
  **/
  public static factory(data: RubroInterface): Rubro{
    return new Rubro(data);
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
      name: 'Rubro',
      plural: 'Rubros',
      path: 'Rubros',
      idName: 'idRubro',
      properties: {
        "idRubro": {
          name: 'idRubro',
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
        "idRubroprimario": {
          name: 'idRubroprimario',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
