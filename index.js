const myfunction = () => {
    for (var i = 0; i < 10; i++){
        console.log(i)
    }
}

myfunction()

console.log( (() => 'hi!') () )

// ini adalah contoh dasar sebuah lambda function