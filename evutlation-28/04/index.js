let main = document.querySelector("#main");
let container = document.querySelector("#container");
let tbody = document.querySelector("tbody");
let Department = document.querySelector("#Department");
let Gender = document.querySelector("#Gender");
let salary = document.querySelector("#salary");
let url =
  "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees";
var currentPage = 1;
var rowsPerPage = 10;
var startrowpage = 0;

function nextPage() {
    if(rowsPerPage>90){
      nextBtn.style.display = 'none';
    }
    else{
      currentPage = currentPage + 1;
  startrowpage = startrowpage + 10;
  rowsPerPage += 10;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      showdata(data.data);
    });
    }
    nextBtn.style.display = 'flex';
}

function prevPage() {
  if (startrowpage<10) {
    nextBtn.style.display = 'none';
    
  } else {
    
  
  currentPage = currentPage - 1;
  startrowpage = startrowpage - 10;
  rowsPerPage -= 10;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      showdata(data.data);
    });
  }
  nextBtn.style.display = 'flex';
}
function showdata(data) {
  tbody.innerHTML = "";
  data.forEach((element, i) => {
    if (rowsPerPage > i && startrowpage <= i) {
      let tr = document.createElement("tr");
      let Sno = document.createElement("td");
      Sno.innerHTML = element.id;
      let name = document.createElement("td");
      name.innerHTML = element.name;
      let genders = document.createElement("td");
      genders.innerHTML = element.gender;
      let department = document.createElement("td");
      department.innerHTML = element.department;
      let salary = document.createElement("td");
      salary.innerHTML = element.salary;

      tr.appendChild(Sno);
      tr.appendChild(name);
      tr.appendChild(genders);
      tr.appendChild(department);
      tr.appendChild(salary);
      tbody.appendChild(tr);
    }
  });
}

let display = async () => {
  let res = await fetch(url);
  let data = await res.json();
  showdata(data.data);
};
display();

Department.addEventListener("change", () => {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let fullData = data.data;
      if (Department.value === "all") {
        showdata(fullData);
      } else {
        let filterData = fullData.filter((element) => {
          return element.department == Department.value;
        });
        showdata(filterData);
      }
    });
});

Gender.addEventListener("change", () => {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let fullData = data.data;
      if (Gender.value === "all") {
        showdata(fullData);
      } else {
        let filterData = fullData.filter((element) => {
          return element.gender == Gender.value;
        });
        showdata(filterData);
      }
    });
});
salary.addEventListener("change", () => {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let fullData = data.data;
      if (salary.value === "all") {
        showdata(fullData);
      } else {
        let value = salary.value;
        let narr;
        if (value == "LowToHigh") {
          narr = fullData.sort((a, b) => a.salary - b.salary);
        } else {
          narr = fullData.sort((a, b) => b.salary - a.salary);
        }
        showdata(narr);
      }
    });
});
