
function binarySearch (a, b) {
    var start = 0;
    var end = a.length;
    var midpoint = Math.floor(((end - start) / 2) + start);

    if (b > a[a.length - 1]) {
        return -1;}

    while (true) {

        if ((end - start) <= 0) 
            return -1;

        midpoint = Math.floor(((end - start) / 2) + start);

        if (b == a[midpoint]) {
            while (b == (a[midpoint - 1]))
                midpoint = midpoint - 1;
            return midpoint;}

        else if (b < a[midpoint]) {
            end = midpoint;}

        else if(b > a[midpoint]) {
           start = midpoint + 1}
    }      
}
