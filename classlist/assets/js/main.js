function openModal() {
    const modal = document.querySelector(".window");
    modal.classList.remove("d-none")
    modal.classList.remove("gorsenmesin")
}
function closeModal() {
    const modal = document.querySelector(".window");
    modal.classList.add("d-none")
    modal.classList.add("gorsenmesin")
}
function addTr() {

    let nameInp = document.querySelector("input[name='ad']");
    let surnameInp = document.querySelector("input[name='soyad']");
    let person = {
        name: nameInp.value,
        surname: surnameInp.value
    }
    let arr = [];
    arr.push(person);
    console.log(arr)
    const tbody = document.querySelector("table tbody");

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].name);
        tbody.innerHTML += `<tr><th>1</th><td>${arr[i].name}</td><td>${arr[i].surname}</td><td><button arr-ind='0'>Delete</button></td></tr>`
    }
    nameInp.value = "";
    surnameInp.value = "";
    closeModal();
}
