# Hash Tables and Hash Functions Documentation

## Table of Contents
- [Hash Table Class](#hash-table-class)
  - [Initialize](#initialize)
  - [Insert](#insert)
  - [Get](#get)
  - [Delete](#delete)
- [Performance Analysis](#performance-analysis)
  - [Custom Hash Function](#custom-hash-function)
    - [Time Complexity](#time-complexity)
    - [Space Complexity](#space-complexity)
  - [Hash Table Operations](#hash-table-operations)
    - [Insertion](#insertion)
      - [Time Complexity](#time-complexity-1)
      - [Space Complexity](#space-complexity-1)
    - [Retrieval](#retrieval)
      - [Time Complexity](#time-complexity-2)
      - [Space Complexity](#space-complexity-2)
    - [Deletion](#deletion)
      - [Time Complexity](#time-complexity-3)
      - [Space Complexity](#space-complexity-3)

# Hash Table Class

The CustomHashTable class implements:
- [insert](#insert)
- [get](#get)
- [delete](#delete)

## Initialize 
[Initialize](#initialize) the hash table with a default size. 
The table is represented as an array.

## Insert 
[Insert](#insert) a key-value pair into the hash table. 
If a collision occurs, handle it by adding the pair to the array.

## Get 
[Find](#get) the value according to a given key by hashing the key to find its index 
in the array. 
If the key is found, return its corresponding value; else, return undefined.

## Delete 
To [delete](#delete) a key-value pair we find the key's index using the hash function and 
removing the pair.

# Performance Analysis

## Custom Hash Function

### Time Complexity 
The [time complexity](#time-complexity) of the custom hash function is O(n), where n is the length 
of the input key.

### Space Complexity 
The [space complexity](#space-complexity) of the custom hash function is O(1).

## Hash Table Operations

### Insertion

#### Time Complexity 
The [average time complexity](#time-complexity-1) of insertion is O(1). 
In the worst case, when there are many collisions, insertion may approach O(n), 
where n is the number of elements in the bucket.

#### Space Complexity 
The [space complexity](#space-complexity-1) of insertion is O(1), as it requires only a constant amount 
of additional memory for each inserted key-value pair.

### Retrieval

#### Time Complexity 
The [average time complexity](#time-complexity-2) of retrieval is O(1). 
In the worst case, when all keys hash to the same index, retrieval may approach 
O(n), where n is the number of elements in the bucket.

#### Space Complexity 
The [space complexity](#space-complexity-2) of retrieval is O(1), as it requires only 
a constant amount of additional memory for storing temporary variables.

### Deletion

#### Time Complexity 
The [average time complexity](#time-complexity-3) of deletion is O(1). 
In the worst case, when all keys hash to the same index, deletion may approach 
O(n), where n is the number of elements in the bucket.

#### Space Complexity 
The [space complexity](#space-complexity-3) of deletion is O(1), as it requires only 
a constant amount of additional memory for storing temporary variables.
```

All the sections now contain embedded links that will navigate to the corresponding sections within the document.
