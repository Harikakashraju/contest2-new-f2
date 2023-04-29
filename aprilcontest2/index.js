const userList = [
{
    id: 1,
    name: "Harika",
    age: 25,
    profession: "developer"
},
{
    id: 2,
    name: "Harsha",
    age: 20,
    profession: "developer"
},

{
    id: 3,
    name: "raj",
    age: 28,
    profession: "developer"
},
{
    id: 4,
    name: "Harini",
    age: 22,
    profession: "admin"
},
{
    id: 5,
    name: "Sweety",
    age: 23,
    profession: "admin"
},
{
    id: 6,
    name: "Sneha",
    age: 26,
    profession: "admin"
},
]

const filterBtn = document.getElementById("filter");
const select = document.getElementsByTagName("select")[0];
const container = document.getElementById("input-container");

function filterUsers(){
const selectedValue = select.value;
// alert(selectedValue)
if(!selectedValue){
    alert("Please select one option")
    return;
}

//write the code to filter from the array and append them into input container
container.innerHTML= "";  //clearing the container to empty string 

 const result = userList.filter((user) => {
   if(user.profession == selectedValue) return true;
   return false;
})

result.forEach((user,index) =>{
    const div =document.createElement("div");
    div.className = "user";
    const p1 = document.createElement("p");
    p1.innerText = (index+1) + ".";
    const p2 = document.createElement("p");
    p2.innerText = "Name:" + user.name;
    const  p3 = document.createElement("p");
    p3.innerText = "Profession:" + user.profession;
    const p4 = document.createElement("p");
    p4.innerText = "Age:" + user.age;

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(p4);

    container.appendChild(div);

})
}
filterBtn.addEventListener("click",filterUsers)