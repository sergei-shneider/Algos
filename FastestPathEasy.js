var minTimeToVisitAllPoints = function(points) {
    let steps = 0;
    for(let i = 0; i<points.length-1; i++){
        let xdiff = Math.abs(points[i][0]-points[i+1][0])
        let ydiff = Math.abs(points[i][1]-points[i+1][1])
        steps+=Math.min(xdiff, ydiff);
        steps+=Math.abs(xdiff-ydiff);
    }
    return steps;
};
