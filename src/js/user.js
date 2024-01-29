class User {
    constructor(user, mail, pass) {
        this.user = user;
        this.mail = mail;
        this.pass = pass;
    }

    // Getters
    getUser() {
        return this.user;
    }

    getMail() {
        return this.mail;
    }

    getPass() {
        return this.pass;
    }

    // Setters
    setUser(user) {
        this.user = user;
    }

    setMail(mail) {
        this.mail = mail;
    }

    setPass(pass) {
        this.pass = pass;
    }

    validateLogin(inputUser, inputPass) {
        return inputUser === this.user && inputPass === this.pass;
    }
}

// Exportar la clase User
module.exports = User;
