

module.exports = {
   
    sum: (arr) => arr.reduce((acc, val) => acc + val, 0),
    
    
    unique: (arr) => [...new Set(arr)],
    
    max: (arr) => Math.max(...arr),
    
 
    min: (arr) => Math.min(...arr),
    

    average: (arr) => arr.length ? arr.reduce((acc, val) => acc + val, 0) / arr.length : 0,
    
    
    flatten: (arr) => arr.flat(Infinity),
   
    firstN: (arr, n) => arr.slice(0, n),
    

    isUnique: (arr) => arr.length === new Set(arr).size,
    

    intersect: (arr1, arr2) => arr1.filter(value => arr2.includes(value)),
    

    sortAsc: (arr) => [...arr].sort((a, b) => a - b),
  };