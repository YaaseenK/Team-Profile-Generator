const Employee = require('../lib/employee')
const employee = new Employee(1, 'Yaaseen', 'yaaseenkhan02@gmail.com');

describe('EmployeeObject', () => {
    it('should return constructor values for the employee object' , () => {
        expect(employee.id).toEqual(1);
        expect(employee.name).toEqual('Yaaseen');
        expect(employee.email).toEqual('yaaseenkhan02@gmail.com');
    });
});
 
describe('getIDMethod', () => {
    it("should return employee ID", () => {
       expect(employee.getId()).toBe(1)
    })
});

describe('getNameMethod' , () =>{
    it('should return employee name', () => {
        expect(employee.getName()).toBe('Yaaseen')
    });
});

describe('getEmail()' , () =>{
    it('should return employee email', () => {
        expect(employee.getEmail()).toBe('yaaseenkhan02@gmail.com')
    });
});

describe('getRole()' , () =>{
    it('should return employee role', () => {
        expect(employee.getRole()).toBe('Employee')
    });
});