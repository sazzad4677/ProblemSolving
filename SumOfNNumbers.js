/* Write a function to calculate the sum of the first N natural numbers.
In this problem, you need to implement the sum_of_natural_numbers function and calculate the sum of the first N natural numbers. The function should take an integer n as input and return the sum of the numbers from 1 to N.
Make sure to consider both the time complexity (how long it takes to run the function) and the space complexity (how much memory is used) in your solution.

 */

function sum_of_natural_numbers(N){
    let total = 0;
    for (let i = 1; i < parseInt(N); i ++){
        total += i
    }
    return total
}

console.log(sum_of_natural_numbers(10))

/*

Time Complexity: The loop iterates 'n' times, so the time complexity is O(n).

Space Complexity: The function uses a single variable 'sum' to store the sum, and no additional space is used proportional to 'n', so the space complexity is O(1).
*/