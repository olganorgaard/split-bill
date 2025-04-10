gsap.from('.container_main', {x: -300, duration: 2, opacity: 0, delay: .7})
gsap.from('nav', {y: -100, duration: 2, opacity: 0, delay: .7})

const btn = document.querySelector('#calculate');
btn.addEventListener('click', calculate);

const buttonReset = document.querySelector(".reset");
buttonReset.addEventListener("click", reloadPage);

function reloadPage() {
    location. reload();
}

function calculate(e){
    e.preventDefault();
    const bill = document.querySelector('#bill').value;
    const people = document.querySelector('#people').value;
    const tip = document.querySelector('#tip').value;
    
    if (bill=="" || people=="" || people<1){
        Swal.fire({
            icon: "error",
            title: "Error!",
            text: "Please enter Total amount and Number of people!",
          });
    }

    let billPerPerson = bill/people;

    let tipPerPerson = (bill*tip)/people

    let totalPerPerson = billPerPerson+tipPerPerson

    totalPerPerson = totalPerPerson.toFixed(2);
    tipPerPerson = tipPerPerson.toFixed(2);
    billPerPerson = billPerPerson.toFixed(2);

    document.querySelector('#billPerPerson').textContent = billPerPerson;
    document.querySelector('#tipPerPerson').textContent = tipPerPerson;
    document.querySelector('#totalPerPerson').textContent = totalPerPerson
}

const addTip = document.querySelector('#addTip')

addTip.addEventListener('click', showTips)

function showTips(e){
    e.preventDefault();
    document.querySelector('#tip').style.display = 'block';
}
