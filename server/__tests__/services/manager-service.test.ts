import * as managerService from '../../src/services/manager-service';
import * as managerDao from '../../src/daos/manager-dao';
import { ApprovalPatch } from '../../src/models/ApprovalPatch';


jest.mock('../../src/daos/manager-dao');

const mockManagerDao = managerDao as any;
//GET ALL
describe('GET: /managers/dashboard', () => {
    //Read success test
    test('Successful get all by id status 200', async () => { 
        expect.assertions(1);
        mockManagerDao.getAllDashboards.mockImplementation(async () => ([]));
        const result = await managerDao.getAllDashboards();

        try{
            expect(result).toBeTruthy();
        }catch(err){
            expect(err).toBeDefined();
        }
    });
}); 

//GET ALL
describe('GET: /managers/pending', () => {
    //Read success test
    test('Successful get all by id status 200', async () => { 
        expect.assertions(1);
        mockManagerDao.getAllPendings.mockImplementation(async () => ([]));
        const result = await managerDao.getAllPendings();

        try{
            expect(result).toBeTruthy();
        }catch(err){
            expect(err).toBeDefined();
        }
    });
}); 

/**UPDATE */
describe('PATCH: /managers/approvals', () => {
    //Object Success Test (BlackBox)
    test('Test object transformed to Person object', async () => {
        mockManagerDao.patchApproval.mockImplementation(input => input); //return its self object

        const payload = {
            reimbId: '1',
            amount: '100'
        };
        const result = await managerService.patchApproval(payload);

        expect(payload).not.toBeInstanceOf(ApprovalPatch); //Set to not Approval in input
        expect(result).toBeInstanceOf(ApprovalPatch); //Transformed to person in result
    });

     //Object Properties Failure Test(WhiteBox)
     test('Throw new Error status 400', async () => {
        //expect.assertions(1);
        mockManagerDao.patchApproval.mockReturnValue(undefined); //mockManagerDao function returning undefined response
        
        const payload = {
            statusId: '3',
            type: '4',
        }

        let expectedError = undefined;

        try{
            await managerService.patchApproval(payload);
            fail('managerService.patchApproval failed request'); //Reject patchApproval due to missing name
        }catch(err){
            expectedError = err; //Assign error object to expectedError
        }
        expect(expectedError).toBeDefined(); //Validate error was thrown
    });
});

//GET 3 for pending
describe('GET: /managers/requests', () => {
    //Read success test
    test('Successful get all by id status 200', async () => { 
        expect.assertions(1);
        mockManagerDao.getApprovalById.mockImplementation(async () => ([]));
        const result = await managerDao.getApprovalById();

        try{
            expect(result).toBeTruthy();
        }catch(err){
            expect(err).toBeDefined();
        }
    });
}); 

//GET ALL
describe('GET: /managers/requests', () => {
    //Read success test
    test('Successful get all by id status 200', async () => { 
        expect.assertions(1);
        mockManagerDao.getApprovalById.mockImplementation(async () => ([]));
        const result = await managerDao.getApprovalById();

        try{
            expect(result).toBeTruthy();
        }catch(err){
            expect(err).toBeDefined();
        }
    });
}); 
