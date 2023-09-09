// The leap year checker is a program or function that determines whether a given year is a leap year. A leap year is a year that has an extra day, February 29th, making it 366 days instead of the usual 365 days. The purpose of the leap year checker is to identify whether a given year meets the criteria to be classified as a leap year.

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return 1; 
  } else {
    return 0; 
  }
}
console.log(isLeapYear(1944));

function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 !== 0) {
      if (year % 400 === 0) {
        return 1; 
      } else {
        return 0; 
      }
    } else {
      return 1; 
    }
  } else {
    return 0; 
  }
}
console.log(isLeapYear(1944));

// Tahun 2000:

// Tahun 2000 memenuhi syarat pertama (year % 4 === 0) karena dapat dibagi habis oleh 4.
// Kemudian, kita memeriksa syarat kedua (year % 100 === 0). Tahun 2000 memenuhi syarat ini karena dapat dibagi habis oleh 100.
// Namun, kita juga harus memeriksa syarat ketiga (year % 400 === 0). Tahun 2000 memenuhi syarat ini karena dapat dibagi habis oleh 400.
// Akibatnya, fungsi mengembalikan 1, yang menunjukkan bahwa tahun 2000 adalah tahun kabisat.


// Tahun 2020:
// Tahun 2020 memenuhi syarat pertama (year % 4 === 0) karena dapat dibagi habis oleh 4.
// Kemudian, kita memeriksa syarat kedua (year % 100 === 0). Tahun 2020 memenuhi syarat ini karena dapat dibagi habis oleh 100.
// Kita juga memeriksa syarat ketiga (year % 400 === 0). Tahun 2020 memenuhi syarat ini karena dapat dibagi habis oleh 400.
// Oleh karena itu, fungsi mengembalikan 1, yang menunjukkan bahwa tahun 2020 adalah tahun kabisat.
// Tahun 2029:

// Tahun 2029 tidak memenuhi syarat pertama (year % 4 === 0) karena tidak dapat dibagi habis oleh 4.
// Karena tidak memenuhi syarat pertama, fungsi langsung mengembalikan 0, yang menunjukkan bahwa tahun 2029 bukan tahun kabisat.
// Tahun 1980:

// Tahun 1980 memenuhi syarat pertama (year % 4 === 0) karena dapat dibagi habis oleh 4.
// Kemudian, kita memeriksa syarat kedua (year % 100 === 0). Tahun 1980 memenuhi syarat ini karena dapat dibagi habis oleh 100.
// Kita juga memeriksa syarat ketiga (year % 400 === 0). Tahun 1980 memenuhi syarat ini karena dapat dibagi habis oleh 400.
// Oleh karena itu, fungsi mengembalikan 1, yang menunjukkan bahwa tahun 1980 adalah tahun kabisat.
// Sekarang Anda telah melihat bagaimana kode tersebut bekerja untuk tahun-tahun yang diberikan, mengembalikan 1 untuk tahun kabisat dan 0 untuk bukan tahun kabisat berdasarkan aturan yang telah dijelaskan sebelumnya.










