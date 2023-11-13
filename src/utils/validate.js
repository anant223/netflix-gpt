export const checkValidaData = (email, password) => {
    const isEmailValidate =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    const isPasswordValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!isEmailValidate) return "email id is not valid!"
    if(!isPasswordValidate) return "Password is not valid!" 

    return null;
    
}