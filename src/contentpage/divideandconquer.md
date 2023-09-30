
### 1. Write a Java function to find the maximum subarray sum in an array using the divide and conquer approach. The subarray must be non-empty, and the function should return 0 if all elements in the array are negative.


### Java Code

```java
public class MaximumSubarraySum {

    public static int maxSubarraySum(int[] nums) {
        return maxSubarraySumDivideAndConquer(nums, 0, nums.length - 1);
    }

    private static int maxSubarraySumDivideAndConquer(int[] nums, int left, int right) {
        if (left == right) {
            if (nums[left] < 0) {
                return 0; // If the only element is negative, return 0.
            } else {
                return nums[left]; // If the only element is positive, return it.
            }
        }

        int mid = (left + right) / 2;

        // Find the maximum subarray sum in the left and right subarrays.
        int leftMax = maxSubarraySumDivideAndConquer(nums, left, mid);
        int rightMax = maxSubarraySumDivideAndConquer(nums, mid + 1, right);

        // Find the maximum subarray sum that crosses the midpoint.
        int crossMax = maxCrossingSum(nums, left, mid, right);

        // Return the maximum of the three subarray sums.
        return Math.max(Math.max(leftMax, rightMax), crossMax);
    }

    private static int maxCrossingSum(int[] nums, int left, int mid, int right) {
        int leftSum = 0;
        int leftMax = Integer.MIN_VALUE;
        for (int i = mid; i >= left; i--) {
            leftSum += nums[i];
            leftMax = Math.max(leftMax, leftSum);
        }

        int rightSum = 0;
        int rightMax = Integer.MIN_VALUE;
        for (int i = mid + 1; i <= right; i++) {
            rightSum += nums[i];
            rightMax = Math.max(rightMax, rightSum);
        }

        return leftMax + rightMax;
    }

    public static void main(String[] args) {
        int[] arr = { -2, -3, -1, -5, -7 };
        int result = maxSubarraySum(arr);
        System.out.println("Maximum subarray sum: " + result);
    }
}
```


### 2. Write a Java function to find the square root of a positive integer using the divide and conquer approach. You should implement this without using any loops or built-in square root functions (e.g., Math.sqrt). Your function should be efficient, with a time complexity better than O(n).

### Java Code

```java
public class SquareRootUsingDivideAndConquer {
    public static double squareRoot(double x) {
        if (x < 0) {
            throw new IllegalArgumentException("Input must be a positive number");
        }
        if (x == 0 || x == 1) {
            return x;
        }
        return sqrtHelper(x, 0, x);
    }

    private static double sqrtHelper(double x, double left, double right) {
        double epsilon = 0.00001; // A small value for precision

        double mid = (left + right) / 2;
        double square = mid * mid;

        if (Math.abs(square - x) <= epsilon) {
            return mid;
        } else if (square < x) {
            return sqrtHelper(x, mid, right);
        } else {
            return sqrtHelper(x, left, mid);
        }
    }

    public static void main(String[] args) {
        double num = 16.0; // Change this to the desired positive number
        double result = squareRoot(num);
        System.out.println("Square root of " + num + " is approximately: " + result);
    }
}
```



### 3. You are given a sequence of positive integers, and you need to find the index at which the sequence "divides" into two parts, such that the product of elements in the left part is equal to the product of elements in the right part. If no such index exists, return -1. Write a Java function to solve this problem efficiently using the divide and conquer approach.

### Java Code

```java
public class DivideProductEqualIndex {
    public static int divideProductEqual(int[] nums) {
        int n = nums.length;
        if (n == 0)
            return -1;
        
        int totalProduct = getProduct(nums, 0, n - 1);
        return divideProductEqualRecursive(nums, 0, n - 1, totalProduct);
    }

    private static int divideProductEqualRecursive(int[] nums, int left, int right, int totalProduct) {
        if (left == right)
            return -1;

        int mid = (left + right) / 2;
        int leftProduct = getProduct(nums, left, mid);
        int rightProduct = totalProduct / leftProduct;

        if (leftProduct == rightProduct)
            return mid;

        int leftResult = divideProductEqualRecursive(nums, left, mid, totalProduct);
        int rightResult = divideProductEqualRecursive(nums, mid + 1, right, totalProduct);

        if (leftResult != -1)
            return leftResult;
        if (rightResult != -1)
            return rightResult;

        return -1;
    }

    private static int getProduct(int[] nums, int left, int right) {
        int product = 1;
        for (int i = left; i <= right; i++) {
            product *= nums[i];
        }
        return product;
    }

    public static void main(String[] args) {
        int[] sequence = { 2, 3, 6, 4, 2 };
        int result = divideProductEqual(sequence);
        if (result != -1) {
            System.out.println("The sequence divides at index " + result);
        } else {
            System.out.println("No such index exists.");
        }
    }
}
```



