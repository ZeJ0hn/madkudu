import {describe, expect, test} from '@jest/globals';
import DB from "../src/db";

describe("Test the DB creation", () => {
    test("It should return a valid data", done => {
        const db = new DB('data/species.json')
        const data = db.get()
        expect(data).toBeDefined();
        done();
    });

    test("It should return a undefined data if input file doesn't exist", done => {
        const db = new DB('data/dont-exist.json')
        const data = db.get()
        expect(data).toBeUndefined();
        done();
    });
});

