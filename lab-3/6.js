
class User {
    constructor(name, surname, username) {
        this.name = name;
        this.surname = surname;
        this.username = username;
        this.is_admin = false;
    }

    isAdmin() {
        return this.is_admin;
    }

    fullName() {
        return this.is_admin ? `${this.name} ${this.surname} (admin)` : `${this.name} ${this.surname}`;
    }
}


class Customer extends User {
    constructor(name, surname, username) {
        super(name, surname, username);
        this.city = null;
        this.state = null;
        this.country = null;
    }

    setCity(city) {
        this.city = city;
    }

    getCity() {
        return this.city;
    }

    setState(state) {
        this.state = state;
    }

    getState() {
        return this.state;
    }

    setCountry(country) {
        this.country = country;
    }

    getCountry() {
        return this.country;
    }

    location() {
        return `${this.city}, ${this.state}, ${this.country}`;
    }
}


class AdminUser extends User {
    constructor(name, surname, username) {
        super(name, surname, username);
        this.is_admin = true;
    }
}


const user = new User("Ganga", "Magar", "gangamgr");
const customer = new Customer("Sonu", "Thapa", "sonuthapa");
customer.setCity("New York");
customer.setState("NY");
customer.setCountry("USA");
const admin = new AdminUser("Jeon", "Somi", "somiadmin");


console.log(`User: ${user.fullName()}, isAdmin: ${user.isAdmin() ? "Yes" : "No"}`);
console.log(`Customer: ${customer.fullName()}, isAdmin: ${customer.isAdmin() ? "Yes" : "No"}, Location: ${customer.location()}`);
console.log(`Admin: ${admin.fullName()}, isAdmin: ${admin.isAdmin() ? "Yes" : "No"}`);
