{
    {
        {
            { 
                var sera = 'Sera???'
                console.log(sera)
            }
        }
    }
}
console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}

// Variaveis definidas utilizando o 'var' dentro de um bloco de funcao
// nao serao visiveis fora dele
teste()
console.log(local)