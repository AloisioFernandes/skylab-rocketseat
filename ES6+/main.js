import { sub as subtr } from './funcoes'
import somaFunction from './soma' // export default faz o uso de chaves desnecessário
import * as funcoes from './funcoes'

console.log(somaFunction(1, 2))
console.log(subtr(4, 2))
console.log(funcoes.mult(5, 2))