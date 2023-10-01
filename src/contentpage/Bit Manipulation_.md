Bit manipulation is a potent method that is frequently used in competitive coding to optimise and effectively handle a range of challenges. To conduct operations like setting, clearing, toggling, or testing. This method works particularly well for jobs involving bitwise logical operations, bitmasking, and resolving optimisation, combinatorics, and number theory-related issues. 
### **Example 1**:
Take a decimal number as input. Your taask is to find out the number of '1's in its respective binary number.
```java
import java.util.Scanner;

public class Main {
    public static int count_bits(int n) {
        int cnt = 0;
        while (n > 0) {
            int last_bit = (n & 1);
            cnt += last_bit;
            n = n >> 1;
        }
        return cnt;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        System.out.println(count_bits(n));
    }
}

```
##### Approach 
 the count_bits function counts how many "1s" are there in the binary representation of a number n. It does this by repeatedly checking the rightmost bit of n, adding it to a counter (cnt) if it's a "1," and then moving to the next bit until there are no more "1s" left to count. Finally, it returns the total count of "1s.
 
 ### **Example 2**:
You have two strings, s and t. String t is created by mixing up the letters in s and adding one extra letter somewhere in the mix. Your task is to figure out which letter was added to t.
```java
import java.util.Arrays;
import java.util.Scanner;

class Solution {
    public char findTheDifference(String s, String t) {
        char[] sArr = s.toCharArray();
        char[] tArr = t.toCharArray();
        Arrays.sort(sArr);
        Arrays.sort(tArr);
        for (int i = 0; i < sArr.length; i++) {
            if (sArr[i] != tArr[i]) {
                return tArr[i];
            }
        }
        return tArr[tArr.length - 1];
    }
}

public class Main {
    public static void main(String[] args) {
        Solution solution = new Solution();
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the first string (s): ");
        String s = scanner.nextLine();
        System.out.print("Enter the second string (t): ");
        String t = scanner.nextLine();
        char extraChar = solution.findTheDifference(s, t);
        System.out.println("The extra character is: " + extraChar);
        scanner.close(); 
    }
}
```
##### Approach 
Convert both input strings, `s` and `t`, into character arrays and sort them. Compare corresponding characters in the sorted arrays. When a mismatch is found, return the extra character from `t`. If no mismatch is found up to the length of `s`, return the last character from `t`. This accounts for the extra character at the end of `t`. This approach efficiently identifies and returns the extra character added to `t` compared to `s`.

 ### **Example 3**:
You're provided with an array of strings called "words." Your task is to find the largest possible product of the lengths of two words from this array in such a way that the two words have no common letters. If there are no two words that meet this condition, return 0.
```java
import java.util.Arrays;
import java.util.List;

public class Main {
    public int maxProduct(List<String> words) {
        int maxi = 0;
        int[] state = new int[words.size()];
        for (int i = 0; i < words.size(); i++) {
            for (char c : words.get(i).toCharArray()) {
                state[i] |= 1 << (c - 'a');
            }
        }
        for (int i = 0; i < words.size(); i++) {
            for (int j = i + 1; j < words.size(); j++) {
                if ((state[i] & state[j]) == 0) {
                    maxi = Math.max(words.get(i).length() * words.get(j).length(), maxi);
                }
            }
        }
        return maxi;
    }

    public static void main(String[] args) {
        List<String> words = Arrays.asList("abcw", "baz", "foo", "bar", "xtfn", "abcdef");
        Main solution = new Main();
        int maxProduct = solution.maxProduct(words);
        System.out.println("Maximum Product of Word Lengths: " + maxProduct);
    }
}
```
#### Approach
Binary Representation: The code converts each string in the given list into a binary representation. It does this by iterating through the characters of each string using for (char c : words.get(i).toCharArray()). For each character c, it calculates its position in the English alphabet by subtracting 'a' from it (c - 'a'). This value represents a unique bit in a binary representation because each character corresponds to a specific bit position.

**Bitmask:** The binary representation of each string is stored in an integer variable called state[i]. This is essentially a "bitmask" where each bit corresponds to a character in the alphabet. If a character is present in the string, its corresponding bit is set to 1; otherwise, it remains 0.

**Comparing Bitmasks:** To check for common letters between two strings, it uses a bitwise AND operation ((state[i] & state[j])) between their respective bitmasks. If the result of this operation is 0, it means there are no common letters because a bitwise AND between two bitmasks with no common set bits results in 0.

**Calculating Product:** When there are no common letters between two strings, it calculates the product of their lengths using words.get(i).length() * words.get(j).length(). This represents the potential maximum product for this pair of strings.

**Tracking Maximum:** The code keeps track of the maximum product found so far in the variable maxi. It continuously updates this value as it checks pairs of strings.

**Returning Maximum:** Finally, the code returns the maximum product (maxi) that it has found among all pairs of strings with no common letters.

