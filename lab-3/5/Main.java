// Interface with the abstract method
interface HasInfo {
    String getInfo();
}

// Address class implementing HasInfo
class Address implements HasInfo {
    public String street;
    public int number;
    public String city;

    public Address(String street, int number, String city) {
        this.street = street;
        this.number = number;
        this.city = city;
    }

    @Override
    public String getInfo() {
        return "Address: street " + street + ", number " + number + ", city " + city;
    }
}

// Phone class implementing HasInfo
class Phone implements HasInfo {
    public String prefix;
    public String number;

    public Phone(String prefix, String number) {
        this.prefix = prefix;
        this.number = number;
    }

    @Override
    public String getInfo() {
        return "Number: " + prefix + " / " + number;
    }
}

// User class implementing HasInfo
class User implements HasInfo {
    public String name;
    public String surname;
    private Address address;
    private Phone phone;

    public User(String name, String surname, Address address, Phone phone) {
        this.name = name;
        this.surname = surname;
        this.address = address;
        this.phone = phone;
    }

    @Override
    public String getInfo() {
        return "User: " + name + " " + surname + "\n" + 
               address.getInfo() + "\n" + 
               phone.getInfo();
    }
}

// Main class to test the implementation
public class Main {
    public static void main(String[] args) {
        // Creating objects
        Address address = new Address("Tokha Road", 123, "Kathmandu");
        Phone phone = new Phone("+97", "9854343324");
        User user = new User("Sonu", "Thapa", address, phone);

        // Calling getInfo from the User object
        System.out.println(user.getInfo());
    }
}

