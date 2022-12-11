const Engineer = require('../lib/engineer');
const engineer = new Engineer (1, 'Jane' , 'Jane@admin.com', 'janeOnGit')


describe('EngineerObject', () => {
    it('should return constructor values for the engineer object' , () => {
        expect(engineer.id).toEqual(1);
        expect(engineer.name).toEqual('Jane');
        expect(engineer.email).toEqual('Jane@admin.com');
        expect(engineer.githubUserName).toEqual('janeOnGit');
    });
});

describe('getGitUserName()', () => {
    it("should return github username", () => {
       expect(engineer.getGitUserName()).toBe("janeOnGit")
    })
});

describe('getRole', () => {
    it("should return office number", () => {
       expect(engineer.getRole()).toBe('Engineer')
    })
});
