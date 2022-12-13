let firstUniqChar = function(s) {
    let obj = {}; 
    let arr = []; 

    for (let i = 0; i < s.length; i++) { //O(n)
        if (obj[s[i]] === undefined) obj[s[i]] = i;
        else obj[s[i]] = '';   
    }

    arr = Object.keys(obj);
    for (let i = 0; i < arr.length; i++) {//O(n)
        if (obj[arr[i]] !== '') return obj[arr[i]];
    }
    return -1;
}; //O(2n) = O(n)



