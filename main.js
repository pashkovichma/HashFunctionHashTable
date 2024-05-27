class CustomHashTable {
  constructor() {
    this.defaultSize = 50; // Fixed default size
    this.table = new Array(this.defaultSize);
    this.count = 0;
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i) * (i + 1);
    }
    // Ensure the hash value is a non-negative integer and within table size
    return Math.abs(hash) % this.defaultSize;
  }

  insert(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push({ key, value });
    this.count++;
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      for (const entry of bucket) {
        if (entry.key === key) {
          return entry.value;
        }
      }
    }
    return undefined;
  }

  delete(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i].key === key) {
          const deletedEntry = bucket.splice(i, 1);
          this.count--;
          return deletedEntry[0].value;
        }
      }
    }
    return undefined;
  }
}

// Testing
const myHashTable = new CustomHashTable();

myHashTable.insert("111key", "111Value");
myHashTable.insert("222key", "222Value");
myHashTable.insert("333key", "333Value");

console.log(myHashTable.get("111key"));  //111Value: Alice
console.log(myHashTable.get("222key"));  //222Value
console.log(myHashTable.get("222key")); //333Value

myHashTable.delete("111key");
console.log(myHashTable.get("111key"));  //undefined
