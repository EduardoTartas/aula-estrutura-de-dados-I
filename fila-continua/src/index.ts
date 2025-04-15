class Fila {
    capacidade: number;
    inicio: number;
    fim: number;
    arr:(string | null)[];

    constructor(capacidade: number) {
        this.capacidade = capacidade;
        this.inicio = 0;
        this.fim = 0;
        this.arr = new Array(capacidade).fill(null);
    }
}


