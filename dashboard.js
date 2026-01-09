//get the container
const appliedInternshipsList = document.getElementById("appliedInternshipsList");

//get applied internships from local storage
const appliedInternships = JSON.parse(localStorage.getItem("appliedInternships"))||[];
// Display them
if (appliedInternships.length === 0) {
    appliedInternshipsList.innerHTML = "<p>You haven't applied to any internships yet.</p>";
} else {
    appliedInternships.forEach(item => {
        appliedInternshipsList.innerHTML += `
            <div class="category-card">
                <h3>${item.role}</h3>
                <p>${item.company}</p>
                <p>${item.location}</p>
            </div>
        `;
    });
}
