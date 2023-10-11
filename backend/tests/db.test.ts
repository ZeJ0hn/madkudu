import {describe, expect, test} from '@jest/globals';
import Loader from "../src/loader";

describe("Test the Loader creation", () => {
    test("It should return a valid data", done => {
        const loader = new Loader('data/species.json')
        const data = loader.get()
        expect(data).toBeDefined();
        done();
    });

    test("It should return a undefined data if input file doesn't exist", done => {
        const loader = new Loader('data/dont-exist.json')
        const data = loader.get()
        expect(data).toBeUndefined();
        done();
    });
});

