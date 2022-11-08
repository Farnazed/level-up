class MinHeap{
  constructor() {
    this.data = []
   this.length =0  
  }

  insert(value) {
    this.data[this.length] = value
    this.heapifyUp(this.length)
    this.length++
  }

  delete(value) { 
    if (this.length === 0) {
      return -1;
    }
    const out = this.data[0]
    this.length--; //decrement our length

    if (this.length === 1) {
      this.data = []
      return out
    }
    this.data[0]= = this.data[this.length]
    this.heapifyDown(0);
    return out
   
  }
  
  private parent(idx) {
    return Math.floor((idx-1)/2)
  }

  private leftChild(idx) {
    return idx *2 +1
  }

  private rightChild(idx) {
    return idx * 2 +2
  }

  private heapifyUp(idx) {
    if (idx === 0) {
      return
    }

    const parent = this.parent(idx)
    const parentValue = this.data[parent]
    const value = this.data[idx]


    if (value < parentValue) {
      //swap
      this.data[parent] = value
      this.data[idx] = parentValue
      this.heapifyUp(parent)
    }
  }

  private heapifyDown(index) {
  
    const value = this.data[idx]
    const leftChildIndex = leftChild(idx)
    const rightChild = rightChild(idx)

    if (index >= this.length || leftChildIndex >= this.length ) {
      return 
    }


    // find minimum, child 
    if (this.data[leftChildIndex] > this.data[rightChild] && value > this.data[rightChild]) {
      const tmp = this.data[rightChild]
      this.data[idx] = tmp
      this.data[rightChild] = value
    } else if( this.data[rightChild] >this.data[leftChildIndex] &&   value > this.data[leftChildIndex]) {
      const tmp = this.data[leftChildIndex]
      this.data[idx] = tmp
      this.data[leftChildIndex] = value
    }

    
  }
}


let Node = function() {
	this.keys = new Map();
	this.end = false;
	this.setEnd = function() {
		this.end = true;
	};
	this.isEnd = function() {
		return this.end;
	};
};

let Trie = function() {

	this.root = new Node();

	this.add = function(input, node = this.root) {
		if (input.length == 0) {
			node.setEnd();
			return;
		} else if (!node.keys.has(input[0])) {
			node.keys.set(input[0], new Node());
			return this.add(input.substr(1), node.keys.get(input[0]));
		} else {
			return this.add(input.substr(1), node.keys.get(input[0]));
		};
	};

	this.isWord = function(word) {
		let node = this.root;
		while (word.length > 1) {
			if (!node.keys.has(word[0])) {
				return false;
			} else {
				node = node.keys.get(word[0]);
				word = word.substr(1);
			};
		};
		return (node.keys.has(word) && node.keys.get(word).isEnd()) ? 
      true : false;
	};

	this.print = function() {
		let words = new Array();
		let search = function(node, string) {
			if (node.keys.size != 0) {
				for (let letter of node.keys.keys()) {
					search(node.keys.get(letter), string.concat(letter));
				};
				if (node.isEnd()) {
					words.push(string);
				};
			} else {
				string.length > 0 ? words.push(string) : undefined;
				return;
			};
		};
		search(this.root, new String());
		return words.length > 0 ? words : mo;
	};

};

myTrie = new Trie()
myTrie.add('ball'); 
myTrie.add('bat'); 
myTrie.add('doll'); 
myTrie.add('dork'); 
myTrie.add('do'); 
myTrie.add('dorm')
myTrie.add('send')
myTrie.add('sense')
console.log(myTrie.isWord('doll'))
console.log(myTrie.isWord('dor'))
console.log(myTrie.isWord('dorf'))
console.log(myTrie.print())