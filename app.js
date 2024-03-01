
function addEmployee(){
    const username = document.querySelector("#name");
    const usernameTrimmed = username.value.trim();

    const id = document.querySelector("#id");
    const idTrimmed = id.value.trim();

    const dob = document.querySelector("#dob");
    const dobTrimmed = dob.value.trim();

    const salary= document.querySelector("#salary");
    const salaryTrimmed = salary.value.trim();

    const ul = document.querySelector("#employeeList");

    if(usernameTrimmed !== '' && idTrimmed !== '' && dobTrimmed !== '' && salaryTrimmed !== ''){
        const li = document.createElement("li");
        const removeBtn = document.createElement("button");

        const span1 = document.createElement("span");
        const span2 = document.createElement("span");
        const span3 = document.createElement("span");
        const span4 = document.createElement("span");

        span1.textContent = "Name: " + username.value;
        span2.textContent = "ID: " + id.value;
        span3.textContent = "Date Of Birth: " + dob.value;
        span4.textContent = "Salary: " + salary.value;

        removeBtn.textContent = "Remove";
        li.append(span1, span2, span3, span4, removeBtn);
        ul.append(li);

        username.value = "";
        id.value = "";
        dob.value = "";
        salary.value = "";

        removeBtn.addEventListener("click", () => {
            li.parentNode.removeChild(li);
        });
    }else{
        alert("Please fill in all fields");
    }
}
