import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';

import { BASE_URL, API_VERSION } from './lb.base.url'
import { LoopBackConfig, LoopBackFilter, Auth, AuthApi } from './lbsdk/index'

import { AES } from 'crypto-js'; // For AES encryption/decryption
import { dec, enc } from 'crypto-js'; // For characters encodages types (Utf-8, latin1...)


@Injectable()
export class ClienteService {

    encryptedCode: string;
    dencryptedCode: string;

    constructor(private authService: AuthApi) {
    }

    getCode(): Observable<any> {
        return this.authService.sendCode();
    }

    sendCode(encode, decode, phoneData): Observable<any> {
        return this.authService.decryptCode(encode, decode, phoneData);
    }

    desencriptar(codigo) {
        let encrypted = AES.encrypt('my message', 'secret key 123');
        let bytes = AES.decrypt(codigo, 'secret key 123');
        let decrypted = bytes.toString(enc.Utf8);
        //var dec = decipher.update(codigo, 'hex', 'utf8')
        //dec += decipher.final('utf8');
        //this.dencryptedCode = dec;
    }

}
