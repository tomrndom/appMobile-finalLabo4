/* tslint:disable */

declare var Object: any;
export interface DevicesInterface {
  "uuid": number;
  "model": string;
  "serial": string;
  "token": string;
  "fechaCreacion": Date;
  "fechaExpiracion": Date;
}

export class Devices implements DevicesInterface {
  "uuid": number;
  "model": string;
  "serial": string;
  "token": string;
  "fechaCreacion": Date;
  "fechaExpiracion": Date;
  constructor(data?: DevicesInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Devices`.
   */
  public static getModelName() {
    return "Devices";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Devices for dynamic purposes.
  **/
  public static factory(data: DevicesInterface): Devices{
    return new Devices(data);
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
      name: 'Devices',
      plural: 'Devices',
      path: 'Devices',
      idName: 'uuid',
      properties: {
        "uuid": {
          name: 'uuid',
          type: 'number'
        },
        "model": {
          name: 'model',
          type: 'string'
        },
        "serial": {
          name: 'serial',
          type: 'string'
        },
        "token": {
          name: 'token',
          type: 'string'
        },
        "fechaCreacion": {
          name: 'fechaCreacion',
          type: 'Date'
        },
        "fechaExpiracion": {
          name: 'fechaExpiracion',
          type: 'Date'
        },
      },
      relations: {
      }
    }
  }
}
