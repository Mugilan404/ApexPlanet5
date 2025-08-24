// main.js

document.addEventListener("DOMContentLoaded", function () {
  console.log("🌐 JobQuest JS Loaded");

  // === 1. Load Featured Jobs Dynamically (from local or API) ===
  const featuredJobs = [
    {
      title: "Frontend Developer",
      company: "TechNova",
      location: "Remote • Full Time",
      link: "job-details.html"
    },
    {
      title: "UI/UX Designer",
      company: "CreativePixels",
      location: "Bangalore • Onsite",
      link: "job-details.html"
    },
    {
      title: "Backend Engineer",
      company: "CodeSmiths",
      location: "Chennai • Hybrid",
      link: "job-details.html"
    }
  ];

  const featuredContainer = document.getElementById("featured-jobs");
  if (featuredContainer) {
    featuredJobs.forEach(job => {
      featuredContainer.innerHTML += `
        <div class="col-md-4 mb-4">
          <div class="card job-card p-3">
            <h5>${job.title}</h5>
            <p class="text-muted">Company: ${job.company}</p>
            <p>${job.location}</p>
            <a href="${job.link}" class="btn btn-outline-primary btn-sm">View Details</a>
          </div>
        </div>
      `;
    });
  }

  // === 2. Basic Form Validation Feedback ===
  const forms = document.querySelectorAll("form");
  forms.forEach(form => {
    form.addEventListener("submit", function (e) {
      const requiredInputs = form.querySelectorAll("input[required], textarea[required], select[required]");
      let valid = true;

      requiredInputs.forEach(input => {
        if (!input.value.trim()) {
          input.classList.add("is-invalid");
          valid = false;
        } else {
          input.classList.remove("is-invalid");
        }
      });

      if (!valid) {
        e.preventDefault();
      }
    });
  });

  // === 3. Password Strength Indicator (optional enhancement) ===
  const passwordField = document.querySelector("#password");
  if (passwordField) {
    passwordField.addEventListener("input", () => {
      if (passwordField.value.length < 6) {
        passwordField.style.borderColor = "#dc3545"; // red
      } else {
        passwordField.style.borderColor = "#28a745"; // green
      }
    });
  }
});
