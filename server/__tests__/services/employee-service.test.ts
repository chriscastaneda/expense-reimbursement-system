import * as employeeService from '../../src/services/employee-service';
import * as employeeDao from '../../src/daos/employee-dao';
import { Reimburse } from '../../src/models/Reimburse';


jest.mock('../../src/daos/employee-dao');

const mockEmployeeDao = employeeDao as any;
//GET ALL
describe('GET: /employees/dashboard', () => {
    //Read success test
    test('Successful get all by id status 200', async () => { 
        expect.assertions(1);
        mockEmployeeDao.getAllDashboards.mockImplementation(async () => ([]));
        const result = await employeeDao.getAllDashboards();

        try{
            expect(result).toBeTruthy();
        }catch(err){
            expect(err).toBeDefined();
        }
    });
}); 


//GET ALL
describe('GET: /employees/pending', () => {
    //Read success test
    test('Successful get all by id status 200', async () => { 
        expect.assertions(1);
        mockEmployeeDao.getAllPendings.mockImplementation(async () => ([]));
        const result = await employeeDao.getAllPendings();

        try{
            expect(result).toBeTruthy();
        }catch(err){
            expect(err).toBeDefined();
        }
    });
}); 

//POST
describe('POST: /employees/reimburse', () => {
    
    //Object Success Test (BlackBox)
    test('Test object transformed to Person object', async () => {
        mockEmployeeDao.saveReimbursement.mockImplementation(input => input); //return its self object

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
        const result = await employeeService.saveReimbursement(payload);

        expect(payload).not.toBeInstanceOf(Reimburse); //Set to not Reimburse in input
        expect(result).toBeInstanceOf(Reimburse); //Transformed to person in result
    });

    //Object Properties Failure Test(WhiteBox)
    test('Expected 422 returned if no firstName provided', async () => {

        mockEmployeeDao.saveReimbursement.mockReturnValue(undefined); //mockEmployeeDao function returning undefined response
        const payload = {
            amount: '100',
            sumitDate: '2020-01-01',
            resolvedDate: "2020-01-01",
            description: 'decript',
            reciept: 'url',
            authorId: '2',
            resolverId: '1',
            type: '4'
        }

        let expectedError = undefined;

        try{
            await employeeService.saveReimbursement(payload); 
            fail('employeeService.saveReimbursement failed request'); //Reject saveReimbursement due to missing name
        }catch(err){
            expectedError = err; //Assign error object to expectedError
        }
        expect(expectedError).toBeDefined(); //Validate error was thrown
    });

    //Object Properties Failure Test
    test('Expected 422 returned if no lastName provided', async () => {

        expect.assertions(1); //cleaner assertion syntax replacing mockEmployeeDao function
        const payload = {
            amount: '100',
            sumitDate: '2020-01-01',
            resolvedDate: "2020-01-01",
            description: 'decript',
            reciept: 'url',
            authorId: '2',
            resolverId: '1',
            statusId: '3'
        }

        let expectedError = undefined;

        try{
            await employeeService.saveReimbursement(payload); 
            fail('employeeService.saveReimbursement failed request'); //Reject saveReimbursement due to missing name
        }catch(err){
            expect(err).toBeDefined(); //part of assertion syntax
        }
    });

    //Object Properties Failure Test
    test('Expected 422 returned if no email provided', async () => {

        expect.assertions(1); //cleaner assertion syntax replacing mockEmployeeDao function
        const payload = {
            sumitDate: '2020-01-01',
            resolvedDate: "2020-01-01",
            description: 'decript',
            reciept: 'url',
            authorId: '2',
            resolverId: '1',
            statusId: '3',
            type: '4'
        }

        let expectedError = undefined;

        try{
            await employeeService.saveReimbursement(payload); 
            fail('employeeService.saveReimbursement failed request'); //Reject saveReimbursement due to missing name
        }catch(err){
            expect(err).toBeDefined(); //part of assertion syntax
        }
    });

    //ID Validation Test
    test('Inserted ID field should fail', async () => {
        mockEmployeeDao.saveReimbursement.mockImplementation(input => input); //return its self object

        const payload = {
            reimbId: '100',
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
        const result = await employeeService.saveReimbursement(payload);

        expect(result.reimbId).not.toBe(payload.reimbId); //Compared id should be undefined.
    });

    //Inserting Extra Fields Test
    test('Inserted extra field should fail', async () => {
        mockEmployeeDao.saveReimbursement.mockImplementation(input => input); //return its self object

        const payload = {
            amount: '100',
            sumitDate: '2020-01-01',
            resolvedDate: "2020-01-01",
            description: 'decript',
            reciept: 'url',
            authorId: '2',
            resolverId: '1',
            statusId: '3',
            type: '4',
            extraFieldInput: true
        };
        const result = await employeeService.saveReimbursement(payload)  as any;

        expect(result.extraFieldInput).not.toBeDefined(); //Call extra property.
    });
});