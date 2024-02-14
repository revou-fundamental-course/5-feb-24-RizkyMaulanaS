
function reset(){
    document.getElementById('inputC').value='';
    document.getElementById('inputF').value='';
    document.getElementById('cara').value='';
    let change = document.getElementById('ftoc');
    change.innerHTML = "Fahrenheit to Celsius";

}
function convert(){
    var inputC = parseFloat(document.getElementById('inputC').value)
    if(isNaN(inputC)){
        alert("angka belum di isi atau nilai tidak berbentuk angka");
        document.getElementById('inputC').value='';
        return;
    }
    var hasil= parseFloat((inputC * 9/5) +32);
    document.getElementById('inputF').value = hasil;
    document.getElementById('cara').value = "("+ inputC +" × 9/5)+32 = " + hasil+"℉";
    let change = document.getElementById('ftoc');
    change.innerHTML = "Fahrenheit to Celsius";
}
function reverse(){
    var inputF = parseFloat(document.getElementById('inputF').value);
    if(isNaN(inputF)){
        alert("angka belum di isi atau nilai tidak berbentuk angka");
        document.getElementById('inputF').value='';
        return;
    }
    var hasil= parseFloat((inputF - 32) * 5/9);
    document.getElementById('inputC').value = hasil;
    document.getElementById('cara').value = "(" + inputF + " - 32) × 5/9 = " + hasil+"℃";
    let change = document.getElementById('ftoc');
    change.innerHTML = "Celsius to Fahrenheit";
}