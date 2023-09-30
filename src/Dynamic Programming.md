
**Dynamic programming** is a powerful algorithmic technique used to solve optimization problems by breaking them down into smaller subproblems and storing the results of these subproblems to avoid redundant computations. It is particularly useful for problems where you need to make a sequence of decisions or choices to reach an optimal solution.

Here's a general overview of how dynamic programming works:

**Identify the problem:** First, you need to understand the problem you're trying to solve and determine if it exhibits certain characteristics that make it amenable to dynamic programming. These characteristics often include overlapping subproblems and optimal substructure.

**Define the recursive structure:** Break down the problem into smaller subproblems. These subproblems should be similar to the original problem but simpler in some way. The key is to express the solution of the original problem in terms of the solutions to these subproblems.

**Recurrence relation:** Formulate a recurrence relation that relates the solution to a subproblem to the solutions of one or more smaller subproblems. This relation should describe how to combine solutions to subproblems to solve the original problem.

**Memoization or bottom-up approach:** There are two main approaches to implementing dynamic programming:

**Memoization (top-down):** In this approach, you start from the original problem and work your way down to the base cases while caching the results of subproblems as you go. This caching is typically done using a data structure like a dictionary or an array. When you need to solve a subproblem, you first check if you have already solved it before, and if so, you return the cached result. This approach is often implemented using recursion.

**Tabulation (bottom-up):** In this approach, you start from the base cases and iteratively build up the solutions to larger subproblems until you solve the original problem. You use a table or an array to store the results of subproblems, and you fill in the table in a specific order to ensure that you never use a result before it's computed.

**Optimal solution:** Once you have computed the solutions to all necessary subproblems, the final answer to the original problem can be found in the table or by following the recursion to its conclusion.

Dynamic programming is commonly used to solve problems in various domains, such as computer science, mathematics, economics, and more. Classic examples include the Fibonacci sequence, the knapsack problem, shortest path algorithms (e.g., Dijkstra's algorithm), and many more.

### Question 1:

Maximum Sum Subarray problem takes an array of positive and 
negative integers S as input and finds the subarray of S having 
maximum sum. For example, consider an array with 16 elements, 13, -
3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7. Maximum 
subarray starts at index 7 and ends at index 10 (programming 
indices) and sum is 43. Write a C++ code to solve the problem using a 
naive approach. Print the starting index, end index and sum of the 
subarray whose sum is maximum. What is the time complexity of the 
algorithm

### Approach:

1. Initialize three variables: start_index, end_index, and max_sum. 
Set start_index and end_index to 0, and max_sum to a very small 
value (e.g., INT_MIN).
2. Traverse the array elements using two nested loops:
3. The outer loop iterates from 0 to n-1, representing the start 
index of the subarray.
4. The inner loop iterates from the outer loop's index to n-1, 
representing the end index of the subarray.
5. Calculate the sum of the subarray from the outer loop's index to 
the inner loop's index and store it in a variable current_sum.
6. If current_sum is greater than max_sum, update max_sum with 
current_sum, start_index with the outer loop's index, and 
end_index with the inner loop's index.
7. After the loops complete, print the start_index, end_index, and 
max_sum.

### Java Solution:

```java
import java.util.Arrays;

public class Main {
    public static void findMaxSubarray(int[] arr, int n) {
        int start_index = 0;
        int end_index = 0;
        int max_sum = Integer.MIN_VALUE;
        for (int i = 0; i < n; i++) {
            int current_sum = 0;
            for (int j = i; j < n; j++) {
                current_sum += arr[j];
                if (current_sum > max_sum) {
                    max_sum = current_sum;
                    start_index = i;
                    end_index = j;
                }
            }
        }
        System.out.println("Start index: " + start_index);
        System.out.println("End index: " + end_index);
        System.out.println("Max sum: " + max_sum);
    }

    public static void main(String[] args) {
        int[] arr = {13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7};
        int n = arr.length;
        findMaxSubarray(arr, n);
    }
}

```

### Question 2:

Given an array of positive and negative numbers, develop a linear algorithm and write a Java code to print the start index, end index and sum of subarray which is having maximum sum and maximum length. Consider an array with 13 elements 4, -12, 3, 10, 4, 5, -15, 6, 7, 1, 3, 1, 4. There are two subarrays having sum as 22, that is starting at 2 and ending at 5 with elements 3, 10, 4, 5 and another subarray that starts at 7 and end at 12 with elements 6, 7, 1, 3, 1

### Approach:

1. Kadane's algorithm is a well-known solution for finding the maximum sum subarray within a given array. It involves two variables: max_so_far and max_ending_here. The former keeps track of the highest sum encountered so far, while the latter tracks the maximum sum of a subarray ending at the current index.

2. The algorithm begins by initializing both variables to the value of the first element in the array. Then, for each subsequent element, max_ending_here is updated as the maximum of the current element or the sum of the current element and max_ending_here. Simultaneously, max_so_far is updated as the maximum of max_so_far and max_ending_here. By the end of the iteration, max_so_far will hold the maximum sum subarray.

3. To determine the start and end indices of the subarray, additional variables named start_index and end_index can be used. These variables are updated whenever max_ending_here equals the current element (indicating the start of a new subarray) or when max_so_far is updated (indicating the end of the maximum sum subarray).

### Java Solution:

```java
import java.util.Arrays;

public class Main {
    public static void findMaxSubarray(int[] arr, int n) {
        int maxSoFar = arr[0];
        int maxEndingHere = arr[0];
        int startIndex = 0;
        int endIndex = 0;
        int maxLength = 1;
        int currentStartIndex = 0;
        for (int i = 1; i < n; i++) {
            if (arr[i] > maxEndingHere + arr[i]) {
                maxEndingHere = arr[i];
                currentStartIndex = i;
            } else {
                maxEndingHere = maxEndingHere + arr[i];
            }
            if (maxEndingHere > maxSoFar) {
                maxSoFar = maxEndingHere;
                startIndex = currentStartIndex;
                endIndex = i;
                maxLength = endIndex - startIndex + 1;
            } else if (maxEndingHere == maxSoFar && (i - currentStartIndex + 1) > maxLength) {
                startIndex = currentStartIndex;
                endIndex = i;
                maxLength = endIndex - startIndex + 1;
            }
        }
        System.out.println("Start index: " + startIndex);
        System.out.println("End index: " + endIndex);
        System.out.println("Max sum: " + maxSoFar);
    }

    public static void main(String[] args) {
        int[] arr = {4, -12, 3, 10, 4, 5, -15, 6, 7, 1, 3, 1, 4};
        int n = arr.length;
        findMaxSubarray(arr, n);
    }
}

```
### Question 3:

Given an array of positive and negative integers, develop a linear algorithm and write a Java code to check if there exist a subarray whose sum is zero is present in it. If such a subarray exist then print start and end index of first occurrence. Otherwise print -1 for both start and end index. For example, if the array contains seven elements 10, -3, 2, 4, -3, 5, 7 then print start index as 1

### Approach:

1. Initialize a variable `sum` to 0.

2. Create an empty unordered map called `sumMap` to store the running sum and its corresponding index.

3. Traverse the array elements from left to right, with the help of a variable `currentSum`:

- Update `sum` by adding the current element.

- If `sum` is zero, print the start index as 0 and the end index as the current index.

- If `sum` is found in `sumMap`, it means a subarray with a sum of zero exists between the index after the last occurrence of `sum` and the current index. In this case, print the start index as the index after the last occurrence of `sum` and the end index as the current index.

- If `sum` is not found in `sumMap`, insert the `sum` and its corresponding index into `sumMap`.

4. If no subarray with a sum of zero is found, print -1 for both the start index and end index.

### Java Solution:
```java 
import java.util.Arrays;

public class Main {
    public static void findMaxSubarray(int[] arr, int n) {
        int maxSoFar = arr[0];
        int maxEndingHere = arr[0];
        int startIndex = 0;
        int endIndex = 0;
        int maxLength = 1;
        int currentStartIndex = 0;
        for (int i = 1; i < n; i++) {
            if (arr[i] > maxEndingHere + arr[i]) {
                maxEndingHere = arr[i];
                currentStartIndex = i;
            } else {
                maxEndingHere = maxEndingHere + arr[i];
            }
            if (maxEndingHere > maxSoFar) {
                maxSoFar = maxEndingHere;
                startIndex = currentStartIndex;
                endIndex = i;
                maxLength = endIndex - startIndex + 1;
            } else if (maxEndingHere == maxSoFar && (i - currentStartIndex + 1) > maxLength) {
                startIndex = currentStartIndex;
                endIndex = i;
                maxLength = endIndex - startIndex + 1;
            }
        }
        System.out.println("Start index: " + startIndex);
        System.out.println("End index: " + endIndex);
        System.out.println("Max sum: " + maxSoFar);
    }

    public static void main(String[] args) {
        int[] arr = {4, -12, 3, 10, 4, 5, -15, 6, 7, 1, 3, 1, 4};
        int n = arr.length;
        findMaxSubarray(arr, n);
    }
}

```