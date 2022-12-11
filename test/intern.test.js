const Intern = require('../lib/intern');

const intern = new Intern (12, 'Kyle', 'kyle@123.com', 'UofT');

describe('InternObject', () => {
    it('should return constructor values for the intern object' , () => {
        expect(intern.id).toEqual(12);
        expect(intern.name).toEqual('Kyle');
        expect(intern.email).toEqual('kyle@123.com');
        expect(intern.school).toEqual('UofT');
    });
});

describe('getSchool()' , () => {
    it('should return name of school intern is currently attending' , () => {
        expect(intern.getschool()).toBe('UofT');
    });
});

describe('getRole()' , () => {
    it('should return inter role' , () => {
        intern.getRole = ('Intern');
    });
});