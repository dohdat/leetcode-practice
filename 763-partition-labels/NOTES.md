Find the last index of the char in the string.
Create a hashmap
char | lastIndex
​
size = 0 to keep track of the size of the partition
end ->keep track of the current index of the end of 1 partition
​
reset size to 0
update end
when end === s.length, return