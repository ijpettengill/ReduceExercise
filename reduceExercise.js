// Extract a value

function extractValue(arr, key){
    return arr.reduce(function(accumulator,next){
        accumulator.push(next[key]);
        return accumulator;
    },[]);
}

// create a vowel count

function vowelCount(str){
    const vowels = "aeiou";
    return str.split('').reduce(function(accumulator,next){
        let lowerCased = next.toLowerCase()
        if(vowels.indexOf(lowerCased) !== -1){
            if(accumulator[lowerCased]){
                accumulator[lowerCased]++;
            } else {
                accumulator[lowerCased] = 1;
            }
        }
        return accumulator;
    }, {});
}

// add a key and a value

function addKeyAndValue(arr, key, value){
    return arr.reduce(function(accumulator,next,idx){
        accumulator[idx][key] = value;
        return accumulator;
    },arr);
}

// create a partition

function partition(arr, cb){
    return arr.reduce(function(accumulator,next){
        if(cb(next)){
            accumulator[0].push(next);
        } else {
            accumulator[1].push(next);
        }
        return accumulator;
    }, [[],[]]);
}