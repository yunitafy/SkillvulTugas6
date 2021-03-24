//tugas 6 loop js

//soal 1

let user = 1
for (user; user <= 100 user++)
{
    console.log("user ke;" + user);
    document.write("</br>")
}
console.log(user)

//soal 2
let nilai = 0;
for(nilai;nilai<=18 nilai+=2)
{
    console.log(nilai);
    document.write(nilai+`</br>`);

}

//soal 3
for(let angka= 0; angka<=20; angka++)
{
    if(angka===0)
    {
        console.log(angka+"merupakan bilangan genap");
    }else if (angka%2===0){
        console.log(angka+"merupakan bilangan genap");
    }else{
        console.log(angka+"merupakan bilangan ganjil");
    }else{
        console.log(angka+"merupakan bilangan ganjil");
    
    }
}

//soal 4
let mengulang = confirm(`apakah anda mau mengulang?`);
let counter = 0;

while(mengulang){
    counter++;
    user=confirm(`apa anda ingin mwngulang?`);
}
console.log("perulangan sudah dilakukan sebanyak"+count+"kali");

//soal 5
counter=0
while(kuis1="impact byte"){
    kuis=promp("sebutkah kepanjangan IB?")
    counter++
}
document.write("selamat jawaban anda benar <br>")