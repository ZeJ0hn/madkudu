import * as fs from 'fs';
import logger from './logger'

import {Antelope} from './types';


export default class DB {

    data: Array<Antelope> | undefined

    constructor(filepath: string) {
        try {
            const raw = fs.readFileSync(filepath, 'utf-8');
            this.data = JSON.parse(raw);
            logger.info(`File ${filepath} has been loaded successfully.`)
        } catch (err) {
            logger.error(`Unable to load ${filepath}.`, err)
            this.data = undefined
        }
    }

    public get(): Array<Antelope> | undefined {
        return this.data
    }

}
