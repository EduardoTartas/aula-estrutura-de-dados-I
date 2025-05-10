import { Deque } from "./interfaces/Deque";

export class ArrayDeque<T> implements Deque<T> {
  inicio: number;
  fim: number;
  arr: (T | undefined)[];

  constructor(capacidade: number = 5) {
    this.inicio = 0;
    this.fim = 0;
    // Inicializa com undefined para evitar array com buracos
    this.arr = new Array(capacidade + 1).fill(undefined);
  }

  addFirst(item: T): void {
    if (this.size() >= this.capacity()) {
      this.resize();
    }
    if (this.inicio === this.fim) {
      this.fim = this.incrementar(this.fim);
    }

    this.arr[this.inicio] = item;
    this.inicio = this.decermentar(this.inicio);
  }

  addLast(item: T): void {
    if (this.size() >= this.capacity()) {
      this.resize();
    }

    if (this.inicio === this.fim) {
      this.inicio = this.decermentar(this.inicio);
    }

    this.fim = this.incrementar(this.fim);
    this.arr[this.decermentar(this.fim)] = item;
  }

  removeFirst(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    const temp = this.arr[this.incrementar(this.inicio)];
    this.inicio = this.incrementar(this.inicio);
    this.arr[this.inicio] = undefined;

    return temp;
  }
  removeLast(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    const temp = this.arr[this.decermentar(this.fim)];
    this.arr[this.decermentar(this.fim)] = undefined;
    this.fim = this.decermentar(this.fim);

    return temp;
  }
  peekFirst(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    } else {
      return this.arr[(this.inicio + 1) % this.arr.length];
    }
  }
  peekLast(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    } else {
      return this.arr[this.decermentar(this.fim)];
    }
  }
  size(): number {
    return (this.arr.length - this.inicio + this.fim) % this.arr.length;
  }
  capacity(): number {
    return this.arr.length - 1;
  }
  isEmpty(): boolean {
    return this.inicio === this.fim;
  }

  private resize() {
    // Redimensiona o array para o dobro do tamanho
    // Adiciona undefined até o novo tamanho (Aproveitando o array que já existe)

    let oldlength = this.arr.length;
    let newLength = this.arr.length * 2;
    for (let i = oldlength; i < newLength; i++) {
      this.arr.push(undefined);
    }

    if (this.fim < this.inicio) {
      // Se o fim estiver antes do início, significa que a fila está "quebrada"
      // Tem que juntar denovo [2345...1] -> [.......12345...]
      for (let i = 0; i < this.fim; i++) {
        this.arr[oldlength + i] = this.arr[i];
        this.arr[i] = undefined;
      }
      this.fim = oldlength + this.fim;
    }
  }

  private incrementar(cont: number) {
    return (cont + 1) % this.arr.length;
  }

  private decermentar(cont: number) {
    return (cont - 1 + this.arr.length) % this.arr.length;
  }
}