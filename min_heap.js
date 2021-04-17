class MinHeap {
	constructor(size) {
		this.count = 0;
		this.heap = Array(size ).fill(0, 0);
	}
	
	create(array) {
		if(array) {
			for(let i = 0; i < array.length; i++) {
				this.insert(array[i]);
			}
		}
	}
	
	insert(i) {
		if(this.count === 0) {
			this.heap[0] = i;
			this.count = 1;
		} else {
			this.heap[this.count++] = i;
			this.siftUp();
		}
	}
	
	siftUp() {
		let tmpPos = this.count - 1;
		let tmp = Math.floor(tmpPos / 2);
		while(tmpPos > 0 && this.heap[tmp] > this.heap[tmpPos]) {
			this.swap(tmpPos, tmp);
			tmpPos = Math.floor(tmpPos / 2);
			tmp = Math.floor(tmpPos / 2);
		}
	}
	
	swap(a, b) {
		let tmp = this.heap[a];
		this.heap[a] = this.heap[b];
		this.heap[b] = tmp;
	}
	
	extractMin() {
		let min = this.heap[0];
		this.heap[0] = this.heap[this.count - 1];
		this.heap[--this.count] = 0;
		this.siftDown(0);
		return min;
	}
	
	siftDown(k) {
		let smallest = k;
		let left = 2 * k;
		let right = 2 * k + 1;
		if(left < this.count && this.heap[smallest] > this.heap[left]) {
			smallest = left;
		}
		if(right < this.count && this.heap[smallest] > this.heap[right]) {
			smallest = right;
		}
		if(smallest != k) {
			this.swap(k, smallest);
			this.siftDown(smallest);
		}
	}
	
	display() {
		console.log(this.heap);
	}
}

let numbers = [37, 44, 34, 65, 26, 86, 129, 83, 9];
console.log('Initial Array');
console.log(numbers);
let heap = new MinHeap(numbers.length);
heap.create(numbers);
console.log('Contructed Heap');
heap.display();
console.log('Min Extract: ' + heap.extractMin());
heap.display();
console.log('Min Extract: ' + heap.extractMin());
heap.display();
console.log('Min Extract: ' + heap.extractMin());
heap.display();
console.log('Min Extract: ' + heap.extractMin());
heap.display();
console.log('Min Extract: ' + heap.extractMin());
heap.display();
console.log('Min Extract: ' + heap.extractMin());
heap.display();