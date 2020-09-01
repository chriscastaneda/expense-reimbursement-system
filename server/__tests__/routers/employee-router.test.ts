import express from 'express';
import bodyParser from 'body-parser';
import { employeeRouter } from '../../src/routers/employee-router';
import * as employeeService from '../../src/services/employee-service';
import request from 'supertest';

// Setup mock for employeeervice dependency
jest.mock('../../src/services/employee-service');
const mockEmployeeService = employeeService as any;

// Setup Express server and middleware
const app = express();
app.use(bodyParser.json())
app.use('/employees', employeeRouter);

describe('GET /employees/dashboard', () => {
    test('Returns normally under normal circumstances', async () => {
        mockEmployeeService.getAllDashboards.mockImplementation(async () => []);
        await request(app)
            .get('/employees/dashboard')
            .expect('content-type', 'application/json; charset=utf-8')
            .expect(200);
    });

    test('Returns normally under normal circumstances', async () => {
        mockEmployeeService.getAllDashboards.mockImplementation(async () => {throw new Error()});
        await request(app)
            .get('/employees/dashboard')
            .expect(500);
    });
});

describe('GET /employees/pending', () => {
    test('Returns normally under normal circumstances', async () => {
        mockEmployeeService.getAllPendings.mockImplementation(async () => []);
        await request(app)
            .get('/employees/pending')
            .expect('content-type', 'application/json; charset=utf-8')
            .expect(200);
    });

    test('Returns normally under normal circumstances', async () => {
        mockEmployeeService.getAllPendings.mockImplementation(async () => {throw new Error()});
        await request(app)
            .get('/employees/pending')
            .expect(500);
    });
});

describe('POST /employees/reimburse', () => {
    test('Successful creation should return 201 status', async () => {
        mockEmployeeService.saveReimbursement.mockImplementation(async () => ({}));
        const payload = {
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
            .post('/employees/reimburse')
            .send(payload)
            .expect(201)
            .expect('content-type', 'application/json; charset=utf-8')
    });

    test('Should return 500 when encountering an error', async () => {
        mockEmployeeService.saveReimbursement.mockImplementation(async () => {throw new Error()});

        const payload = {
            amount: '100',
            sumitDate: '2020-01-01',
            resolvedDate: "2020-01-01",
            description: 'decript',
            reciept: 'url',
            authorId: '2',
            resolverId: '1',
            statusId: '3'
        };

        await request(app)
            .post('/employees/reimburse')
            .send(payload)
            .expect(500);
    });
});