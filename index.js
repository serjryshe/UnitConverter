const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")



convertBtn.addEventListener("click", function() {
    let inputValue = document.querySelector('input').value


    let feetValue = inputValue * 3.281
    let meterValue = inputValue / 3.281
    let volumeValue = inputValue / 3.785
    let gallonsValue = inputValue * 3.705
    let massValue = inputValue * 2.204
    let poundsValue = inputValue / 2.204

    let lengthMsg = `${inputValue} meters = ${feetValue.toFixed(3)} feet | ${inputValue} feet = ${meterValue.toFixed(3)} meters`
    lengthEl.innerHTML = lengthMsg
    
    let volumeMsg = `${inputValue} liters = ${volumeValue.toFixed(3)} gallons | ${inputValue} gallons = ${gallonsValue.toFixed(3)} liters`
    volumeEl.innerHTML = volumeMsg
    
    let massMsg = `${inputValue} kilos = ${massValue.toFixed(3)} pounds | ${inputValue} pounds = ${poundsValue.toFixed(3)} kilos`
    massEl.innerHTML = massMsg

})

