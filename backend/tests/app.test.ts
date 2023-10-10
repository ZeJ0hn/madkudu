import {describe, expect, test} from '@jest/globals';
import request from 'supertest'
import app from '../src/app'

describe("Test the root path", () => {
    test("It should response the GET method", done => {
        request(app)
            .get("/")
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            });
    });
});

describe("Test the /api/v1/antelopes/ path", () => {
    test("It should response the GET method", done => {
        request(app)
            .get("/api/v1/antelopes/")
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            });
    });
});
