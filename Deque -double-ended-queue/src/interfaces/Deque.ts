export interface Deque<T> {
    addFirst(item: T): void;
    addLast(item: T): void;
    removeFirst(): T | undefined;
    removeLast(): T | undefined;
    peekFirst(): T | undefined;
    peekLast(): T | undefined;
    size(): number;
    capacity(): number;
    isEmpty(): boolean;
}
