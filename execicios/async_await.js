async function calculadora(a, b) {
    return {
        soma: a+ b,
        subtracao: a - b,
        multiplicacao: a * b,
        divisao: (a, b) => {
            if (b === 0) return Promise.reject('Divisão por zero não é permitida');
            return Promise.resolve(a / b);
        }
    }
}

async function executar() {
    try {
        const resultado = await calculadora()
        // console.log(`Soma: ${resultado.soma}`)
        // console.log(`Subtração: ${resultado.subtracao}`)
        // console.log(`Multiplicação: ${resultado.multiplicacao}`)
        console.log(`Divisão: ${await resultado.divisao(10, 0)}`)
    } catch (erro) {
        console.log(`Erro: ${erro}`)
    }
}

executar()



// const calculadora = {
//     soma: (a, b) => a + b,
//     subtracao: (a, b) => a - b,
//     multiplicacao: (a, b) => a * b,
//     divisao: (a, b) => {
//         if (b === 0) return Promise.reject('Divisão por zero não é permitida');
//         return Promise.resolve(a / b);
//     }
// };
// calculadora.divisao(10, 5)
//     .then(result => console.log(result))
//     .catch(err => console.log(err));


// const minhaPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Resolve 1', 1000)
//     })
// })

// const minhaPromise2 = minhaPromise.then((resultado) => {
//     console.log(resultado)
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Resolve 2', 1000)
//         })
//     })
// })
// .catch((error) => {
//     console.error(`Erro: ${error}`)
// })

// minhaPromise2.then((resultado) => {
//     console.log(resultado)
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Resolve 3', 1000)
//         })
//     })
// })
// .catch((error) => {
//     console.error(`Erro: ${error}`)
// })

// .then((resultado) => {
//     console.log(resultado)
// }, (error) => {
//     console.error(`Erro: ${error}`)
// })


// function esperarResolver () {
//     return new Promise (resolve => {
//         setTimeout(() => resolve(), 2000)
//     })
//     .then(() => console.log('Promise resolvida depois de 2 segundos'))
//     .catch(erro => console.log(`Erro: ${erro}`))
// }
// esperarResolver()


// function esperarPorTempo (t){
//     if (t<0) return Promise.reject("O tempo não pode ser negativo");
    
//     return new Promise (resolve => {
//         setTimeout(() => resolve(t), t * 1000);
//     })
//     .then((t) => {console.log(`Esperou ${t} segundos`)})
//     .catch(erro => console.log(`Erro: ${erro}`))
// }

// async function exibirResutado(t) {
//     console.log('Iniciou...')
    
//     try{
//         await esperarPorTempo(5)
//     }
//     catch(erro) {
//         console.log(`Erro: ${erro}`)
//     }

//     console.log('Finalizou!')
// }

// exibirResutado()


// function fatorial (n) {
//     if (n<0) return Promise.reject("O numero não pode ser negativo");
//     let resultado = 1
//     for (let i=2; i<=n; i++) resultado *= i;
//     return Promise.resolve(resultado);
// }
// async function calcularFatorial () {
//     try{
//         const F = await fatorial(5);
//         console.log(F);
//         const F2 = await fatorial(-2);
//         console.log(F2);
// }
//     catch(erro){
//         console.log(`Erro: ${erro}`);
//     }
// }
// calcularFatorial();