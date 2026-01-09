// const internships = [
//     { role: "Frontend Developer", company: "Google", location: "Remote" },
//     { role: "Backend Developer", company: "Amazon", location: "Bangalore" },
//     { role: "UI Designer", company: "Adobe", location: "Remote" },
//     { role: "Full Stack Developer", company: "Infosys", location: "Hyderabad" }
// ];

// const internshiplists = document.getElementById("internshiplists");

// function displayInternships(data) {
//     internshiplists.innerHTML = "";

//     data.forEach(item => {
//         internshiplists.innerHTML += `
//             <div class="category-card">
//                 <h3>${item.role}</h3>
//                 <p>${item.company}</p>
//                 <p>${item.location}</p>
//             </div>
//         `;
//     });
// }

// // Show all on page load
// displayInternships(internships);

// const searchInput = document.getElementById("searchInput");

// searchInput.addEventListener("input",function(){
//   filterInternships();

// });

// const locationFilter = document.getElementById("locationFilter");

// locationFilter.addEventListener("change", function () {
//     filterInternships();
// });

// function filterInternships() {
//     const searchText = searchInput.value.toLowerCase();
//     const selectedLocation = locationFilter.value;

//     const filteredData = internships.filter(item => {
//         const matchesSearch =
//             item.role.toLowerCase().includes(searchText) ||
//             item.company.toLowerCase().includes(searchText);

//         const matchesLocation =
//             selectedLocation === "all" || item.location === selectedLocation;

//         return matchesSearch && matchesLocation;
//     });

//     displayInternships(filteredData);
// }

// function applyInternship() {
//     localStorage.setItem("applied", "yes");
//     alert("Saved in browser memory!");
// }
// alert("internship.js file is loaded");

// function applyInternship(index) {
//     // Get old applied internships (or empty list)
//     let appliedInternships =
//         JSON.parse(localStorage.getItem("appliedInternships")) || [];

//     // Get the internship user clicked
//     const selectedInternship = internships[index];

//     // Save it
//     appliedInternships.push(selectedInternship);

//     // Store back in browser memory
//     localStorage.setItem(
//         "appliedInternships",
//         JSON.stringify(appliedInternships)
//     );

//     alert("Internship saved successfully!");
// }



function applyInternship(index) {
    // Get already applied internships
    let applied =
        JSON.parse(localStorage.getItem("appliedInternships")) || [];

    // Add selected internship
    applied.push(internships[index]);

    // Save back to localStorage
    localStorage.setItem(
        "appliedInternships",
        JSON.stringify(applied)
    );

    alert("Internship applied successfully!");
}
