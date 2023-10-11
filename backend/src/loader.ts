import * as fs from 'fs';
import logger from './logger'

import {Antelope, AntelopesSchema} from './types';

export default class Loader {

    data: Array<Antelope> | undefined

    constructor(filepath: string) {
        try {
            const raw = fs.readFileSync(filepath, 'utf-8');
            const obj = JSON.parse(raw);
            // Validate the data
            this.data = AntelopesSchema.parse(obj)
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
