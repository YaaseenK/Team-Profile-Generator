const Manager = require('../lib/manager');
const manager = new Manager (1, 'john', 'test@admin.com', 25);

describe('ManagerObject', () => {
    it('should return constructor values for the manager object' , () => {
        expect(manager.id).toEqual(1);
        expect(manager.name).toEqual('john');
        expect(manager.email).toEqual('test@admin.com');
        expect(manager.officeNum).toEqual(25);
    });
});
 
describe('getofficNum()', () => {
    it("should return office number", () => {
       expect(manager.getOfficeNumber()).toBe(25)
    })
});

describe('getRole', () => {
    it("should return office number", () => {
       expect(manager.getRole()).toBe('Manager')
    })
});

