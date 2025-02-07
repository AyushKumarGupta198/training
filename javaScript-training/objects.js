let user = {
    name: "John Doe",
    age: 25,
    email: "john.doe@example.com",
    isAdmin: false,
    
    // Method to update user details
    updateDetails(newName, newAge, newEmail) {
        this.name = newName;
        this.age = newAge;
        this.email = newEmail;
    },

    // Method to convert user to admin
    ToAdmin() {
        this.isAdmin = true;
    },

    // Method to display user details
    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Email: ${this.email}, Admin: ${this.isAdmin}`);
    }
};


user.displayInfo(); // Output initial details

user.updateDetails("Alice Smith", 30, "alice.smith@example.com");
user.displayInfo(); // Updated details

user.ToAdmin();
user.displayInfo();