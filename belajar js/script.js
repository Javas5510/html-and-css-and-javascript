function tambahAngka() {
  var angka1 = document.getElementById("angka1").value;
  var angka2 = document.getElementById("angka2").value;

  var hasil = parseInt(angka1) + parseInt(angka2);

  document.getElementById("hasil").innerHTML = "Hasil: " + hasil;
}

function kurangAngka() {
  var angka1 = document.getElementById("angka1").value;
  var angka2 = document.getElementById("angka2").value;

  var hasil = parseInt(angka1) - parseInt(angka2);

  document.getElementById("hasil").innerHTML = "Hasil: " + hasil;
}

function kaliAngka() {
  var angka1 = document.getElementById("angka1").value;
  var angka2 = document.getElementById("angka2").value;

  var hasil = parseInt(angka1) * parseInt(angka2);

  document.getElementById("hasil").innerHTML = "Hasil: " + hasil;
}

function bagiAngka() {
  var angka1 = document.getElementById("angka1").value;
  var angka2 = document.getElementById("angka2").value;

  var hasil = parseInt(angka1) / parseInt(angka2);

  document.getElementById("hasil").innerHTML = "Hasil: " + hasil;
}

function modulusAngka() {
  var angka1 = document.getElementById("angka1").value;
  var angka2 = document.getElementById("angka2").value;

  var hasil = parseInt(angka1) % parseInt(angka2);

  document.getElementById("hasil").innerHTML = "Hasil: " + hasil;
}

function reset() {
  document.getElementById("angka1").value = "";
  document.getElementById("angka2").value = "";
  document.getElementById("hasil").innerHTML = "";
}
