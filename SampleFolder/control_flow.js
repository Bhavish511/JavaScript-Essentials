let userRole = "admin";
let accessLevel;

let isLoggedIn = true;
let userMessage;

let userType = "subscriber";
let userCategory;

let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

const role = prompt("Enter your role (Employee, Enrolled Member, Subscriber, Non-Subscriber):");

if (role && role.trim() === 'Employee') {
    console.log("You are authorized to have full access to 'Dietary Services'.");
} else if (role && role.trim() === 'Enrolled Member') {
    console.log("You are authorized to have full access to 'Dietary Services' and one-on-one interaction with a dietician.");
} else if (role && role.trim() === 'Subscriber') {
    console.log("You are authorized to have partial access to 'Dietary Services'.");
} else if (role && role.trim() === 'Non-Subscriber') {
    console.log("You need to enroll or subscribe first to avail 'Dietary Services'.");
} else {
    console.log("Invalid role. Please provide a valid role (Employee, Enrolled Member, Subscriber, Non-Subscriber).");
}


switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);
console.log("User Message:", userMessage);
console.log("User Category:", userCategory);

console.log("Authentication Status:", authenticationStatus);