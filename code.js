var array = [5,6,7,7,9,10,11,12];

function binarySearch (a, b) {
    var start = 0;
    var end = a.length;
    var midpoint = Math.floor(((end - start) / 2) + start);

    if (b >= a[a.length - 1]) {
        return -1;}

    while (true) {
        //console.log(midpoint);)
        if ((end - start) <= 0)
            return -1;

        midpoint = Math.floor(((end - start) / 2) + start);

        if (b == a[midpoint]) {
            return midpoint;}

        else if (b < a[midpoint]) {
            end = midpoint;}

        else if(b > a[midpoint]) {
           start = midpoint + 1}
    }      
}

console.log(binarySearch(array, 8));