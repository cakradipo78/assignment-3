console.log("##  exercise 1  ##################################################");

//exercise -1

function compareNumber(no1,no2) {
    if (no1 < no2){
           return true     
    }
         if  (no1 > no2) {return false  } 

        else {return "-1" }
    
}

console.log(compareNumber(3,5)); 
console.log(compareNumber(5,3));
console.log(compareNumber(4,4));
console.log(compareNumber(3,3));
console.log(compareNumber(17,2));

console.log(" ")
console.log("##  exercise 2  ##################################################");
//excercise-2
function reverseString(text) {
    let newText = []
    for (let i = text.length - 1; i >= 0; i--) {
        newText.push(text[i])
    }
    return newText.join('')
 
}

console.log(reverseString( "Hello world and Coders"));
console.log(reverseString( "John Doe"));
console.log(reverseString( 'Ian a bookworm'));
console.log(reverseString( 'coding is my hobby'));

console.log(" ")
console.log("##  exercise 3  ##################################################");

// exercise-3





 function uruthuruf(text2) {

    let text = text2.split('');
    for (let i = 0; i < text.length; i++) {
      let lowest = i
      for (let j = i + 1; j < text.length; j++) {
        if (text[j] < text[lowest]) {
          lowest = j
        }
      }
      if (lowest !== i) {
        // Swap
        ;[text[i], text[lowest]] = [text[lowest], text[i]]
      }
    }
    return text.join('')
  }

  console.log(uruthuruf("halo")) 
  console.log(uruthuruf("qwerty")) 
  console.log(uruthuruf("qwertyuiopasdfghjklzxcvbnm"))


  console.log(" ")
  console.log("##  exercise 4  ##################################################");

  function cek_angka(angka) {
   
    const selisih = angka[1] - angka[0];

    // Memeriksa selisih untuk setiap pasangan elemen
    for (let i = 1; i < angka.length - 1; i++) {
        if (angka[i + 1] - angka[i] !== selisih) {
            return false; 
        }
    }

    return true; 
}

// Contoh penggunaan
console.log(cek_angka([1, 2, 3, 4, 5])); // Output: true
console.log(cek_angka([2, 4, 6, 12,24])); // Output: false
console.log(cek_angka([2, 4, 6, 8])); // Output: true
console.log(cek_angka([2, 6, 16, 54])); // Output: false
console.log(cek_angka([1, 2, 3, 4, 7])); // Output: false

console.log(" ")
console.log("##  exercise 5  ##################################################");

function cekKarakter(str) {

 for (let i = 0; i < str.length; i++) {
   
    if (str[i] === 'a' && str[i + 4] === 'b') {
        return true
    }
    if (str[i] === 'b' && str[i + 4] === 'a') {
        return true
    }
}
return false
}

// Contoh penggunaan

console.log(cekKarakter("lane borrowed"));       // Output: true
console.log(cekKarakter("i am sick"));       // Output: false
console.log(cekKarakter("you are borring"));       // Output: true
console.log(cekKarakter("barbarian")); // Output: false
console.log(cekKarakter("bacon and meat")); // Output: false



console.log(" ")
console.log("##  exercise 6  ##################################################");

function cariFPB(a, b) {
 
  
    while (b !== 0) {
        let temp = b;
        b = a % b; // Mencari sisa bagi
 
        
        a = temp;  // Memindahkan nilai b ke a
    }
    return a; // Nilai a sekarang adalah FPB
}

// Contoh penggunaan
console.log(cariFPB(12, 16));  // Output: 4
console.log(cariFPB(50, 40));  // Output: 10
console.log(cariFPB(22, 99));    // Output: 11
console.log(cariFPB(24, 36));   // Output: 12
console.log(cariFPB(17, 23));   // Output: 1

console.log(" ")
console.log("##  exercise 7  ##################################################");

function bilprima(angka) {
        if (angka <= 1) return false
    for (let i = 2; i <= Math.sqrt(angka); i++) {
        if (angka % i === 0) return false
    }
    return true
}

// Contoh penggunaan
console.log(bilprima(3))
console.log(bilprima(7))
console.log(bilprima(6))
console.log(bilprima(23))
console.log(bilprima(33))

console.log(" ")
console.log("##  exercise 8  ##################################################");

function cekRangePrima(bil1, bil2) {
    let hasil = [];

    function isPrima(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    for (let i = bil1; i <= bil2; i++) {
        if (isPrima(i)) {
            hasil.push(i)
        }
    }
    
    return hasil
}

console.log(cekRangePrima(1, 5)); // Output: [2, 3, 5]
console.log(cekRangePrima(5, 10)); // Output: [5, 7]
console.log(cekRangePrima(10, 20)); // Output: [11, 13, 17]