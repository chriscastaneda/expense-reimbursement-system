import express from 'express';
import bodyParser from 'body-parser';
import { managerRouter } from '../../src/routers/manager-router';
import * as managerService from '../../src/services/manager-service';
import request from 'supertest';

// Setup mock for managerervice dependency
jest.mock('../../src/services/manager-service');
const mockManagerService = managerService as any;

// Setup Express server and middleware
const app = express();
app.use(bodyParser.json())
app.use('/managers', managerRouter);

// GET All
describe('GET /managers/dashboard', () => {
    test('Returns normally under normal circumstances', async () => {
        mockManagerService.getAllDashboards.mockImplementation(async () => []);
        await request(app)
            .get('/managers/dashboard')
            .expect('content-type', 'application/json; charset=utf-8')
            .expect(200);
    });

    test('Returns normally under normal circumstances', async () => {
        mockManagerService.getAllDashboards.mockImplementation(async () => {throw new Error()});
        await request(app)
            .get('/managers/dashboard')
            .expect(500);
    });
});

// GET by id
describe('GET /managers/filter/:id', () => {
    test('Normal behavior Json with status 200', async () => {
        mockManagerService.getUserById
            .mockImplementation(async () => ({}));

        await request(app)
            .get('/managers/filter/3')
            .expect(200)
            .expect('content-type', 'application/json; charset=utf-8')
    });

    test('No object found (404)', async() => {
        mockManagerService.getUserById
            .mockImplementation(async () => (undefined));

        await request(app)
            .get('/managers/filter/blahblahblah')
            .expect(404);
    });

    test('500 internal server error', async() => {
        mockManagerService.getUserById
            .mockImplementation(async () => {throw new Error()});

        await request(app)
            .get('/managers/filter/99')
            .expect(500)
    })
})

describe('GET /managers/pending', () => {
    test('Returns normally under normal circumstances', async () => {
        mockManagerService.getAllPendings.mockImplementation(async () => []);
        await request(app)
            .get('/managers/pending')
            .expect('content-type', 'application/json; charset=utf-8')
            .expect(200);
    });

    test('Returns normally under normal circumstances', async () => {
        mockManagerService.getAllPendings.mockImplementation(async () => {throw new Error()});
        await request(app)
            .get('/managers/pending')
            .expect(500);
    });
});

//PATCH
describe('PATCH /managers/approvals', () => {
    test('Successful update should return 201 status', async () => {

        mockManagerService.patchApproval
            .mockImplementation(async () => ({}));

        const payload = {
            reimbId: '1',
            amount: '100',
            sumitDate: '2020-01-01',
            resolvedDate: "2020-01-01",
            description: 'decript',
            reciept: 'url',
            authorId: '2',
            resolverId: '1',
            statusId: '3',
            type: '4'
        };

        await request(app)
            .patch('/managers/approvals')
            .send(payload)
            .expect(200)
            .expect('content-type', 'application/json; charset=utf-8')
    });

    test('No object found (404)', async() => {
        mockManagerService.patchApproval
            .mockImplementation(async () => (undefined));

        const payload = {
            reimbId: '1',
            amount: '100',
            sumitDate: '2020-01-01',
            resolvedDate: "2020-01-01",
            description: 'decript',
            reciept: 'url',
            authorId: '2',
            resolverId: '1',
            statusId: '3',
            type: '4'
        };

        await request(app)
            .patch('/managers/approvals')
            .send(payload)
            .expect(404);
    });

    test('Should return 500 when encountering an error', async () => {

        mockManagerService.patchApproval
            .mockImplementation(async () => {throw new Error()});

        const payload = {
            reimbId: 'F',
            amount: '100'
        };

        await request(app)
            .patch('/managers/approvals')
            .send(payload)
            .expect(500);
    });

});
