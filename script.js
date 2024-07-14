const btn = document.querySelector("#btn");
btn.addEventListener("click", calculateAmount);

const btnTip = document.querySelector("#addTip");
btnTip.addEventListener("click", showTip);

function showTip(e){
    tip.style.display = "block";
    e.preventDefault();
}

const anim = document.querySelector(".anim");
anim.addEventListener("click" , function(){
    Swal.fire({
        title: 'Thank you for being THE teacher',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://sweetalert2.github.io/images/nyan-cat.gif")
          left top
          no-repeat
        `
      })
})

function  calculateAmount (e) {
    e.preventDefault();
    const bill = document.querySelector("#bill").value;
    const people = document.querySelector("#people").value;
    const tip = document.querySelector("#tip").value;
    if (bill === "" || people === "" || people < 1) {
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Please enter your information!',
        })
    }
    let amountPerPerson = bill / people;
    let tipPerPersone = (tip*bill)/people;
    let totalSum = amountPerPerson + tipPerPersone;

    amountPerPerson = amountPerPerson.toFixed(2);
    tipPerPersone = tipPerPersone.toFixed(2);
    totalSum = totalSum.toFixed(2);
    
    document.querySelector("#dividedBill").textContent = amountPerPerson;
    document.querySelector("#dividedTip").textContent = tipPerPersone;
    document.querySelector("#BillAndTip").textContent = totalSum;
}


