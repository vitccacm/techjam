###  Maximum Activities

You are given a list of activities, each represented by a start time and end time. Your goal is to select the maximum number of non-overlapping activities that can be performed. Two activities can't be performed simultaneously if their time intervals overlap. Implement a Java function to find the maximum number of activities you can select.

### Input:

Two arrays, startTimes and endTimes, where startTimes[i] represents the start time of activity i, and endTimes[i] represents the end time of activity i. The arrays are of the same length (1 <= length <= 1000), and the elements are non-negative integers. Additionally, endTimes[i] will always be greater than or equal to startTimes[i].

### Output:
An integer representing the maximum number of non-overlapping activities that can be performed

```java

import java.util.Arrays;

public class MaximumActivities {

    public static int maxActivities(int[] startTimes, int[] endTimes) {
        int n = startTimes.length;
        if (n <= 0) {
            return 0;
        }

        // Create an array of activities with start and end times
        Activity[] activities = new Activity[n];
        for (int i = 0; i < n; i++) {
            activities[i] = new Activity(startTimes[i], endTimes[i]);
        }

        // Sort activities by end times
        Arrays.sort(activities, (a, b) -> a.endTime - b.endTime);

        int maxActivities = 1; // The first activity is always selected
        int prevEndTime = activities[0].endTime;

        for (int i = 1; i < n; i++) {
            if (activities[i].startTime >= prevEndTime) {
                maxActivities++;
                prevEndTime = activities[i].endTime;
            }
        }

        return maxActivities;
    }

    public static void main(String[] args) {
        int[] startTimes = {1, 3, 0, 5, 8, 5};
        int[] endTimes = {2, 4, 6, 7, 9, 9};
        int maxActivities = maxActivities(startTimes, endTimes);
        System.out.println("Maximum number of activities: " + maxActivities);
    }

    static class Activity {
        int startTime;
        int endTime;

        Activity(int startTime, int endTime) {
            this.startTime = startTime;
            this.endTime = endTime;
        }
    }
}
```



### Minimum Coins

You are given an amount of money, and you need to make change using the fewest number of coins. You have access to an unlimited number of coins of different denominations. Implement a Java function to find the minimum number of coins needed to make the change.

### Input:

An array coins representing the available coin denominations (1 <= length(coins) <= 100).
An integer amount representing the total amount of money to make change for (1 <= amount <= 10^4).
It is guaranteed that there is always a combination of coins that can make the exact change for the given amount.

### Output:
An integer representing the minimum number of coins needed to make the change.

```java
import java.util.Arrays;

public class MinimumCoins {

    public static int minCoins(int[] coins, int amount) {
        Arrays.sort(coins); // Sort the coins in ascending order
        int numCoins = 0;
        int index = coins.length - 1; // Start with the largest denomination

        while (amount > 0) {
            if (coins[index] <= amount) {
                int count = amount / coins[index]; // Calculate how many coins of this denomination can be used
                numCoins += count; // Add the count to the total number of coins
                amount -= count * coins[index]; // Reduce the remaining amount
            }
            index--; // Move to the next smaller denomination
        }

        return numCoins;
    }

    public static void main(String[] args) {
        int[] coins = {1, 2, 5};
        int amount = 11;
        int minCoins = minCoins(coins, amount);
        System.out.println("Minimum number of coins: " + minCoins);
    }
}
 ```



### Huffman Encoding

Huffman coding is a variable-length prefix coding algorithm used for lossless data compression. Given a set of characters and their frequencies, the goal is to construct a binary tree such that characters with higher frequencies have shorter codes. Implement a Java function to build a Huffman Tree and encode/decode messages using this tree.

### Input:

For the encode function, a message string containing only characters present in the charFrequencies map.
A charFrequencies map where each character is mapped to its frequency in the message.

### Output:
For the encode function, a string representing the encoded message using Huffman coding.
For the decode function, a string representing the decoded message.

```java
import java.util.*;

public class HuffmanCoding {
    static class HuffmanNode {
        char data;
        int frequency;
        HuffmanNode left, right;

        HuffmanNode(char data, int frequency) {
            this.data = data;
            this.frequency = frequency;
        }
    }

    public static String encode(String message, Map<Character, Integer> charFrequencies) {
        // Create Huffman tree
        PriorityQueue<HuffmanNode> queue = new PriorityQueue<>(Comparator.comparingInt(node -> node.frequency));
        for (Map.Entry<Character, Integer> entry : charFrequencies.entrySet()) {
            queue.add(new HuffmanNode(entry.getKey(), entry.getValue()));
        }

        while (queue.size() > 1) {
            HuffmanNode left = queue.poll();
            HuffmanNode right = queue.poll();
            HuffmanNode merged = new HuffmanNode('\0', left.frequency + right.frequency);
            merged.left = left;
            merged.right = right;
            queue.add(merged);
        }

        HuffmanNode root = queue.poll();

        // Create a mapping of characters to Huffman codes
        Map<Character, String> charToCodeMap = new HashMap<>();
        buildHuffmanCodes(root, "", charToCodeMap);

        // Encode the message
        StringBuilder encodedMessage = new StringBuilder();
        for (char c : message.toCharArray()) {
            encodedMessage.append(charToCodeMap.get(c));
        }

        return encodedMessage.toString();
    }

    private static void buildHuffmanCodes(HuffmanNode node, String code, Map<Character, String> charToCodeMap) {
        if (node == null) {
            return;
        }

        if (node.data != '\0') {
            charToCodeMap.put(node.data, code);
        }

        buildHuffmanCodes(node.left, code + '0', charToCodeMap);
        buildHuffmanCodes(node.right, code + '1', charToCodeMap);
    }

    public static String decode(String encodedMessage, HuffmanNode root) {
        StringBuilder decodedMessage = new StringBuilder();
        HuffmanNode current = root;

        for (char bit : encodedMessage.toCharArray()) {
            if (bit == '0') {
                current = current.left;
            } else if (bit == '1') {
                current = current.right;
            }

            if (current.data != '\0') {
                decodedMessage.append(current.data);
                current = root; // Reset to the root for the next character
            }
        }

        return decodedMessage.toString();
    }

    public static void main(String[] args) {
        Map<Character, Integer> charFrequencies = new HashMap<>();
        charFrequencies.put('A', 5);
        charFrequencies.put('B', 9);
        charFrequencies.put('C', 12);
        charFrequencies.put('D', 13);
        charFrequencies.put('E', 16);
        charFrequencies.put('F', 45);

        String message = "BAD";
        String encodedMessage = encode(message, charFrequencies);
        System.out.println("Encoded Message: " + encodedMessage);

        String decodedMessage = decode(encodedMessage, root);
        System.out.println("Decoded Message: " + decodedMessage);
    }
}

```









