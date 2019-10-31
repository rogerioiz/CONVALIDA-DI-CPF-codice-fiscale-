const chai = require('chai');
const expect = chai.expect;
const cpf = require('../index');



describe('cpfValidator', () => {
    it('return true for a valid cpf number', () => {
        expect(cpf.cpfValidator ('87052536080')).to.equal(true);
    });

    it('return false for equal digits', () => {
        expect(cpf.cpfValidator ('00000000000')).to.equal(false);
    });

    it('return false for equal digits', () => {
        expect(cpf.cpfValidator ('22222222222')).to.equal(false);
    });

    it('return false if the number exceeds 11 digits ', () => {
        expect(cpf.cpfValidator ('870525360808089')).to.equal(false);
    });

    it('return false for a below 11 digits number', () => {
        expect(cpf.cpfValidator ('8705253608')).to.equal(false);
    });

    it('return false for a empty string', () => {
        expect(cpf.cpfValidator ('')).to.equal(false);
    });

    it('return false for a string with special characters', () => {
        expect(cpf.cpfValidator ('870.525.360-80')).to.equal(false);
    });

    it('return false for a string with letters', () => {
        expect(cpf.cpfValidator ('abcdefghijk')).to.equal(false);
    });
});