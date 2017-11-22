/* tslint:disable */
import { Injectable } from '@angular/core';
import { Articulo } from '../../models/Articulo';
import { Cliente } from '../../models/Cliente';
import { Domicilio } from '../../models/Domicilio';
import { Pedidoventa } from '../../models/Pedidoventa';
import { Rubro } from '../../models/Rubro';
import { Pedidoventadetalle } from '../../models/Pedidoventadetalle';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    Articulo: Articulo,
    Cliente: Cliente,
    Domicilio: Domicilio,
    Pedidoventa: Pedidoventa,
    Rubro: Rubro,
    Pedidoventadetalle: Pedidoventadetalle,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
