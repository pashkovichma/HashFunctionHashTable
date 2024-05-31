# [Hash Table Class][1]

The CustomHashTable class implements:
 insert, 
 get, 
 delet. 
 
## Initialize: 
Initialize the hash table with a default size. 
The table is represented as an array.

## Insert: 
Insert a key-value pair into the hash table. 
If a collision occurs, handle it by adding the pair to the array.

## Get: 
Find the value according to a given key by hashing the key to find its index 
in the array. 
If the key is found, return its corresponding value; else, return undefined.

## Delete: 
To delete a key-value pair we find the key's index using the hash function and 
removing the pair. 

# Performance Analysis

## Custom Hash Function

Time Complexity: 
The time complexity of the custom hash function is O(n), where n is the length 
of the input key. 

# Space Complexity: 
The space complexity of the custom hash function is O(1).

## Hash Table Operations:

Insertion:

Time Complexity: 
The average time complexity of insertion is O(1). 
In the worst case, when there are many collisions, insertion may approach O(n), 
where n is the number of elements in the bucket.

Space Complexity: 
The space complexity of insertion is O(1), as it requires only a constant amount 
of additional memory for each inserted key-value pair.

## Retrieval:

Time Complexity: 
The average time complexity of retrieval is O(1). 
In the worst case, when all keys hash to the same index, retrieval may approach 
O(n), where n is the number of elements in the bucket.

Space Complexity: The space complexity of retrieval is O(1), as it requires only 
a constant amount of additional memory for storing temporary variables.

## Deletion:

Time Complexity: 
The average time complexity of deletion is O(1). 
In the worst case, when all keys hash to the same index, deletion may approach 
O(n), where n is the number of elements in the bucket.

Space Complexity: The space complexity of deletion is O(1), as it requires only 
a constant amount of additional memory for storing temporary variables.

[1]:The CustomHashTable class implements:
 insert, 
 get, 
 delet. 
