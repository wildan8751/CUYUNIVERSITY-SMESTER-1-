const nama = "Ahmad Wildan Alfatih";
let usia = 50;

let biodata = document.getElementById('biodata')

function generateBiodata () {
    let generasi;
    if(usia > 10 && usia <= 18) {
        generasi="generasi remaja"
    }
    else if (usia > 18 && usia < 30 ) {
        generasi="generasi dewasa"
    }
    else if (usia >= 30) {
        generasi="generasi tua"
    }
    else if (usia <= 10 && usia > 5) {
        generasi="generasi anak anak"
    }
    else{generasi="generasi bayi"}
    //console.log(`nama saya adalah ${nama} dan usia saya ${usia} tahun`);
    return biodata.innerHTML =generasi;
}

console.log(nama);
console.log(usia);

generateBiodata();