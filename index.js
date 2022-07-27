function validatePhoneNumber(arg){
    const inputPhoneNumber= arg.toString();
    const didMatchPhone = inputPhoneNumber.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);

    if (!inputPhoneNumber) {
       return false;
     }
     else if (!didMatchPhone){
       return false;
     }
     else {
       return true;
     }
    }
   
   module.exports = validatePhoneNumber