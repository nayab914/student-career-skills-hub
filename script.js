const WEEKS_CPP = 8;
const WEEKS_WEB = 10;
const WEEKS_CYBER = 12;
const WEEKS_PYTHON = 8;
let sum = (a, b) => a + b;
let multiply = (a, b) => {
    let result = a * b;
    return result;
};
function showGreeting() {
    let text;
    let person = prompt(
        "Please enter your name:",
        "Student"
    );
    if (person === null || person === "") {
        text = "Welcome, guest! Explore our skills and courses below.";
    } else {
        text = `Welcome, ${person}! Explore our skills and courses below.`;
    }
    document.getElementById("greeting").textContent = text;
}
let showTotalWeeks = function() {
    let total =
        sum(
            sum(WEEKS_CPP, WEEKS_WEB),
            sum(WEEKS_CYBER, WEEKS_PYTHON)
        );
    document.getElementById("totalWeeks").textContent =
        `All four courses together take ${total} weeks.`;
};
let planStudyTime = () => {
    let input =
        prompt(
            "How many hours per week can you study?",
            "10"
        );
    console.log(typeof input);
    let hours = Number(input);
    console.log(typeof hours);
    if (hours > 0) {
        document.getElementById("studyPlan").innerHTML =
            `If you study ${hours} hours per week:<br>` +
            `C++ Programming: ${multiply(hours, WEEKS_CPP)} hours in total<br>` +
            `Web Development: ${multiply(hours, WEEKS_WEB)} hours in total<br>` +
            `Cybersecurity: ${multiply(hours, WEEKS_CYBER)} hours in total<br>` +
            `Python Programming: ${multiply(hours, WEEKS_PYTHON)} hours in total`;
    } else {
        document.getElementById("studyPlan").textContent =
            "Please enter a number greater than 0.";
    }
};
let contactForm =
    document.getElementById("contactForm");
contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    let username =
        document.getElementById("name").value;
    let email =
        document.getElementById("email").value;
    let registerMessage =
        document.getElementById("registerMessage");
    if (username !== "" && email !== "") {
        registerMessage.textContent =
            `Thank you for visiting, ${username}! We will contact you at ${email}.`;
    } else {
        registerMessage.textContent =
            "Please enter both your name and email.";
    }
});
let rows =
    document.querySelectorAll("#courseTable tbody tr");
rows.forEach(function(row) {
    row.addEventListener("mouseover", function() {
        row.style.backgroundColor = "#DCEBFF";
    });
    row.addEventListener("mouseout", function() {
        row.style.backgroundColor = "";
    });
});
let themeButton =
    document.getElementById("themeButton");
themeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent =
            "Switch to Light Mode";
    } else {
        themeButton.textContent =
            "Toggle Light/Dark Mode";
    }
});
let courseChecks =
    document.querySelectorAll(".course-check");
let totalElement =
    document.getElementById("total");
function calculateTotal() {
    let total = 0;
    courseChecks.forEach(function(check) {
        if (check.checked) {
            total =
                total + Number(check.dataset.price);
        }
    });
    totalElement.textContent =
        `Total: $${total}`;
}
courseChecks.forEach(function(check) {
    check.addEventListener("change", calculateTotal);
});
let birthYear =
    document.getElementById("birth-year");
birthYear.addEventListener("input", function() {
    let year =
        parseInt(birthYear.value);
    let ageMessage =
        document.getElementById("ageMessage");
    if (!isNaN(year)) {
        let age =
            2026 - year;
        if (age <= 25 || age >= 60) {
            ageMessage.textContent =
                `You are ${age} years old. You qualify for a special discount.`;
        } else {
            ageMessage.textContent =
                `You are ${age} years old. No special discount applies.`;
        }
    } else {
        ageMessage.textContent = "";
    }
});
let readMoreButton =
    document.getElementById("readMoreButton");
let extraInfo =
    document.getElementById("extraInfo");
readMoreButton.addEventListener("click", function() {
    if (extraInfo.style.display === "none") {
        extraInfo.style.display = "block";
        readMoreButton.textContent =
            "Read Less";
    } else {
        extraInfo.style.display = "none";
        readMoreButton.textContent =
            "Read More";
    }
});
let filterButtons =
    document.querySelectorAll("[data-filter]");
filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        let filter =
            button.getAttribute("data-filter");
        rows.forEach(function(row) {
            let category =
                row.getAttribute("data-category");
            if (filter === "all" || category === filter) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    });
});
let currentHour =
    new Date().getHours();
let openStatus =
    document.getElementById("openStatus");
if (currentHour >= 8 && currentHour < 20) {
    openStatus.textContent =
        "We are Open!";
    openStatus.style.color = "green";
} else {
    openStatus.textContent =
        "Closed - Open at 8 AM";
    openStatus.style.color = "red";
}
let specialNotes =
    document.getElementById("special-notes");
let charCount =
    document.getElementById("charCount");
specialNotes.addEventListener("input", function() {
    let remaining =
        100 - specialNotes.value.length;
    charCount.textContent =
        `${remaining} characters remaining`;
});
console.log("Hello, JavaScript!");
console.log(WEEKS_CPP + WEEKS_WEB);
console.log("Weeks: " + WEEKS_CPP);
console.log(typeof WEEKS_CPP);
console.log(WEEKS_CPP === WEEKS_PYTHON);
console.log(0 === false);
showGreeting();