import * as fs from 'fs';

import {Antelope} from './types';


export default class DB {

    data: Array<Antelope> | undefined

    constructor(filepath: string) {
        try {
            const raw = fs.readFileSync(filepath, 'utf-8');
            this.data = JSON.parse(raw);
            //TODO Add Logging
        } catch (err) {
            //TODO Add Logging
            this.data = undefined
        }
    }

    public get(): Array<Antelope> | undefined {
        return this.data
    }

}
