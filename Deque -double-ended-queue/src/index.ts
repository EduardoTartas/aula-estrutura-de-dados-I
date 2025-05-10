import { ArrayDeque } from "./Deque";

const deque = new ArrayDeque<number>();

console.log("Deque inicio:", deque.inicio);
console.log("Deque fim:", deque.fim);
console.log("Deque inicial:", deque.arr);
console.log("-------------------------");

// Adicionando elementos no início e no final
deque.addFirst(1);
deque.addLast(25);
deque.addFirst(1);
deque.addLast(25);

// Imprimindo o deque após as adições
console.log("Deque após adições:", deque.arr);
console.log("Deque inicio:", deque.inicio);
console.log("Deque fim:", deque.fim);
console.log("-------------------------");

//Removendo elementos do início e do final
console.log("Removido do início:", deque.removeFirst());
console.log("Removido do final:", deque.removeLast());

// Imprimindo o deque após as remoções
console.log("Deque após adições:", deque.arr);
console.log("Deque inicio:", deque.inicio);
console.log("Deque fim:", deque.fim);
console.log("-------------------------");

// Verificando os elementos no início e no final
console.log("Primeiro elemento:", deque.peekFirst());
console.log("Último elemento:", deque.peekLast());

// Verificando o tamanho e se está vazio
console.log("Tamanho do deque:", deque.size());
console.log("Deque está vazio?", deque.isEmpty());