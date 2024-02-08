// Get the sign-up and login buttons and popups
const signupBtn = document.getElementById('signup-btn');
const signupPopup = document.getElementById('signup-popup');
const closeSignupBtn = document.getElementById('close-signup');
const loginBtn = document.getElementById('login-btn');
const loginPopup = document.getElementById('login-popup');
const closeLoginBtn = document.getElementById('close-login');
const loginLink = document.getElementById('login-link');

// Open the signup popup when signup button is clicked
signupBtn.addEventListener('click', () => {
  signupPopup.style.display = 'block';
});

// Close the signup popup when close button is clicked
closeSignupBtn.addEventListener('click', () => {
  signupPopup.style.display = 'none';
});

// Open the login popup when login button is clicked
loginBtn.addEventListener('click', () => {
  loginPopup.style.display = 'block';
});

// Close the login popup when close button is clicked
closeLoginBtn.addEventListener('click', () => {
  loginPopup.style.display = 'none';
});

// Close the popups when clicking outside of them
window.addEventListener('click', (e) => {
  if (e.target === signupPopup) {
    signupPopup.style.display = 'none';
  }
  if (e.target === loginPopup) {
    loginPopup.style.display = 'none';
  }
});

// Open the login popup when "Already have an account? Login" link is clicked
loginLink.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent default link behavior
  signupPopup.style.display = 'none';
  loginPopup.style.display = 'block';
});

// Get the user type buttons
const studentBtn = document.getElementById('student-btn');
const mentorBtn = document.getElementById('mentor-btn');
const alumniBtn = document.getElementById('alumni-btn');

// Get the user type sign-up popups
const studentSignupPopup = document.getElementById('student-signup-popup');
const mentorSignupPopup = document.getElementById('mentor-signup-popup');
const alumniSignupPopup = document.getElementById('alumni-signup-popup');

// Get the close buttons for user type sign-up popups
const closeStudentSignupBtn = document.getElementById('close-student-signup');
const closeMentorSignupBtn = document.getElementById('close-mentor-signup');
const closeAlumniSignupBtn = document.getElementById('close-alumni-signup');

// Open the respective sign-up popup when user type button is clicked
studentBtn.addEventListener('click', () => {
  signupPopup.style.display = 'none';
  studentSignupPopup.style.display = 'block';
});

mentorBtn.addEventListener('click', () => {
  signupPopup.style.display = 'none';
  mentorSignupPopup.style.display = 'block';
});

alumniBtn.addEventListener('click', () => {
  signupPopup.style.display = 'none';
  alumniSignupPopup.style.display = 'block';
});

// Close the respective sign-up popup when close button is clicked
closeStudentSignupBtn.addEventListener('click', () => {
  studentSignupPopup.style.display = 'none';
});

closeMentorSignupBtn.addEventListener('click', () => {
  mentorSignupPopup.style.display = 'none';
});

closeAlumniSignupBtn.addEventListener('click', () => {
  alumniSignupPopup.style.display = 'none';
});


// Function to handle student-specific functionality
function handleStudent() {
    const studentProfile = document.getElementById('student-profile');
    const studentTasks = document.getElementById('student-tasks');
    const studentMentorship = document.getElementById('student-mentorship');
    const studentJobMarket = document.getElementById('student-job-market');
  
    // Add event listeners or functionality specific to students
  }
  
  // Function to handle mentor-specific functionality
  function handleMentor() {
    const mentorProfile = document.getElementById('mentor-profile');
    const mentorStudents = document.getElementById('mentor-students');
    const mentorMentorship = document.getElementById('mentor-mentorship');
  
    // Add event listeners or functionality specific to mentors
  }
  
  // Function to handle company-specific functionality
  function handleCompany() {
    const companyProfile = document.getElementById('company-profile');
    const companyJobs = document.getElementById('company-jobs');
    const companyStudents = document.getElementById('company-students');
  
    // Add event listeners or functionality specific to companies
  }
  
  // Event listener to determine user type and call corresponding function
  document.addEventListener('DOMContentLoaded', function() {
    const userType = document.getElementById('user-type').value;
  
    if (userType === 'student') {
      handleStudent();
    } else if (userType === 'mentor') {
      handleMentor();
    } else if (userType === 'company') {
      handleCompany();
    }
  });
  