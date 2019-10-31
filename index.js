function getValidationDigits(cpf) {
  const cpfArray = cpf.split('').map(Number);
  return [calculateDigit(cpfArray, 9, 10), calculateDigit(cpfArray, 10, 11)];  
};
function calculateDigit(cpf, sliceNum, mult) {
  const multipliedDigits = cpf.splice(0, sliceNum).map((currElement, index) => currElement * (mult - index));
  return multipliedDigits.reduce((counter, element) => counter + element) * 10 % 11 % 10;
};
function cpfValidator(cpf) {
  const isSameNumber = cpf.split('').every((item) => item === cpf[0]);
  const hasValidLength = cpf.length === 11;
  if (!isSameNumber && hasValidLength) {
    const validationDigits = getValidationDigits(cpf);
    const isFirstEqual = validationDigits[0] === parseInt(cpf[9]);
    const isSecondEqual = validationDigits[1] === parseInt(cpf[10]);
    return (isFirstEqual && isSecondEqual);
  }
  return false;
};
module.exports.cpfValidator = cpfValidator;