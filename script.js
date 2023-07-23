function getFormvalue(event) {
    //Write your code here


function getFormValue(event) {
  event.preventDefault(); // Prevent form submission from reloading the page

  // Get form elements by their IDs
  const firstNameInput = document.getElementById('firstName');
  const lastNameInput = document.getElementById('lastName');

  // Get the values of the first and last name inputs
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;

  // Display the values using alert()
  alert(`First Name: ${firstName}\nLast Name: ${lastName}`);
}

// Add a submit event listener to the form
const userForm = document.getElementById('userForm');
userForm.addEventListener('submit', getFormValue);
