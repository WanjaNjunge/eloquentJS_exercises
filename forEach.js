const checkboxes = document.querySelectorAll("#musicTypesList input[type='checkbox']");

// Function to count selected options
function countSelected(checkboxes) {
    let numberSelected = 0;
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            numberSelected++;
        }
    });
    return numberSelected;
}

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    console.log(`You have selected ${countSelected(checkboxes)} option(s).`);
  });
