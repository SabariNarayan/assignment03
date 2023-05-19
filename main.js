// function checkCompletedTasks() {
//   const completedTasks = document.querySelectorAll('.task-checkbox:checked');
//   if (completedTasks.length >= 5) {
//     alert(`Congrats. ${completedTasks.length} Tasks have been Successfully Completed`);
//   }
// }
// document.getElementById("logoutLink").addEventListener("click", function(event) {
//   event.preventDefault(); 

//   window.location.href = "index.html";
// });
// const checkboxes = document.getElementsByClassName('task-checkbox');
// for (let i = 0; i < checkboxes.length; i++) {
//   const checkbox = checkboxes[i];
//   checkbox.addEventListener('change', function() {
//     checkCompletedTasks();
//     const task = checkbox.parentElement;
//     if (checkbox.checked) {
//       task.classList.add('completed');
//     } else {
//       task.classList.remove('completed');
//     }
//   });
// }

function saveCheckboxes() {
  const checkboxes = document.querySelectorAll('.task-checkbox');
  const checkboxStates = [];

  checkboxes.forEach((checkbox) => {
    checkboxStates.push(checkbox.checked);
  });

  localStorage.setItem('checkboxes', JSON.stringify(checkboxStates));
  checkCompletedTasks();
}


function loadCheckboxes() {
  const checkboxes = document.querySelectorAll('.task-checkbox');
  const checkboxStates = JSON.parse(localStorage.getItem('checkboxes'));

  if (checkboxStates) {
    checkboxes.forEach((checkbox, index) => {
      checkbox.checked = checkboxStates[index];
    });
  }

  checkCompletedTasks();
}


function checkCompletedTasks() {
  return new Promise((resolve, reject) => {
    const checkboxes = document.querySelectorAll('.task-checkbox');
    let completedCount = 0;

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        completedCount++;
      }
    });

    if (completedCount >= 5) {
      resolve(completedCount);
    } else {
      reject(completedCount);
    }
  }).then((completedCount) => {
    alert(`Congrats. ${completedCount} Tasks have been Successfully Completed`);
  }).catch((completedCount) => {
    console.log(`Only ${completedCount} tasks have been completed.`);
  });
}


const checkboxes = document.querySelectorAll('.task-checkbox');
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', saveCheckboxes);
});


window.addEventListener('DOMContentLoaded', loadCheckboxes);
document.getElementById("logoutLink").addEventListener("click", function(event) {
   event.preventDefault(); 
  
   window.location.href = "index.html";})
