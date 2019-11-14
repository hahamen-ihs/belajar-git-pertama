const x = [1,2,3,4,5,6,7,8,9,10]

const filterX = x.filter(i => i % 2 ==0)

console.log(filterX)

//filter akan mengembalikan sebuah boolean jadi fungsi/paramater disini
//harus mengembalikan sebuah boolean, tapi kembalian dari fungsi ini adalah array
//jadi filterX ini hanya mengembalikan value yang ada di var x yang bernilai genap
//karena dia memenuhi syarat ini i => i % 2 ==0 yang sisa dibaginya adalah 0