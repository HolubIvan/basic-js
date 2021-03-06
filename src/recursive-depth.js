module.exports = class DepthCalculator {
        
    calculateDepth(arr, depth = 1, result = []) {
            
            result.push(depth);
        
        
            arr.forEach(e =>  {
              if (Array.isArray(e)) {
                this.calculateDepth(e, depth + 1, result);
              }
            });

        return result.reduce(function(prev, curr){
            if(prev > curr){
                return prev;
            } else {
                return curr;
            }
        })

}
}