Faça as 3 etapas abaixo em TypeScript. O programa deve atender ao que foi
pedido e funcionar corretamente. Se é exigido entrada de dados, utilize
a leitura dos argumentos do terminal process.argv

Deve fazer em um único arquivo, separado com funções para cada problema,
não é para enviar separado.

# NÚMEROS ALEATÓRIOS 

Crie uma função que produza uma lista (array) com números aleatórios,
deve receber um argumento com a quantidade de elementos a serem produzidos
e o intervalo no qual deseja obter os valores, e retornar a lista com os valores 
numéricos inteiros (sem decimal) aleatórios produzidos dentro do intervalo solicitado.

Por exemplo, se chamar gerarNumeros(1000, 0, 10) deve retornar uma lista com
1000 elementos com valores entre 0 e 10 (inclusive), apenas inteiros. 

# MAIOR, MENOR e MÉDIA 

Receba do usuário um número e utilizando a função de gerar números aleatórios 
produza uma lista do tamanho informado com valores no intervalo entre 0 e 100.

Então, atravessando esta lista, calcule qual o maior elemento, qual o
menor elemento e qual a média dos valores do vetor.

Por exemplo, na lista [2,4,3] o menor é 2, maior é 3 e a média é 3.0
Já na lista [10,3,5,7,8,2,3,1] o menor é 1, o maior é 10 e a média 4.875

# PICO 

Receba do usuário um número e utilizando a função de gerar números aleatórios 
produza uma lista do tamanho informado com valores no intervalo entre 0 e 100.

Em seguida irá escrever na tela apenas os elementos pico do vetor, 
ou seja apenas os elementos que são maiores que os seus adjacentes
 (adjacente é o anterior e o próximo na lista). no caso do primeiro
 e último, são especiais porque só possuem um único elemento adjacente.

Por exemplo, na lista {2,4,3} o único elemento que seria considerado
 elemento de pico é o 4, Já na lista {10,3,5,7,8,2,3,1} seriam 
 considerados de pico 10, 8 e 3
