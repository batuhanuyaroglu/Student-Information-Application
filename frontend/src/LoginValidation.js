function Validation(values){
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/ // It must contain at least one uppercase, lowercase letter and number. It must be at least 8 characters long.

    if(values.email === "") {
        error.email = "Name should not be empty"
    }
    else if(!email_pattern.test(values.email)){
        error.email = 'Email did not match'
    }
    else {
        error.email = ""
    }

    if(values.password === "") {
        error.password = "Password should not be empty"
    }
    else if(!password_pattern.test(values.password)) {
        error.password = "Password did not match"
    }
    else {
        error.password = ""
    }
    return error;
}

export default Validation;