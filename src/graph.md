
A **graph** is made up of nodes (also known as vertices) and the edges that connect them.It is a flexible data format used to depict links and relationships between items.Graphs can be either undirected (where the edges have no direction) or directed (where the edges have a direction). They can be unweighted (where the edges have no values) or weighted (where the edges have values).The depth-first search (DFS) and breadth-first search (BFS) traversal algorithms, the Dijkstra's algorithm for shortest pathways, and the Kruskal's method for minimal spanning trees are examples of common graph algorithms.

A particular kind of graph without cycles (i.e., no closed loops) is a **tree**. In a tree, there is a root node from which child nodes branch out.A node in a tree may have 0–no child nodes, or more.Hierarchical structures, such as file systems or organisational hierarchies, are frequently represented by trees.Binary search trees (left child is smaller, right child is larger) and binary trees (each node has at most two children) are special varieties of trees.

### **Example 1**:
You have a special type of graph called a "star graph," which has a center node and lines connecting it to other nodes. The lines don't connect these other nodes to each other, only to the center. You're given a list of these lines represented as pairs of nodes. Your task is to find and tell me which node is the center of this star graph.
```java
import java.util.*;
public class Main {
    public int findCenter(int[][] edges) {
        int[] degree = new int[edges.length + 2];
        for (int i = 0; i < edges.length; i++) {
            degree[edges[i][0]]++;
            degree[edges[i][1]]++;
        }
        int center = 0;
        int maxDegree = 0;
        for (int i = 1; i < degree.length; i++) {
            if (degree[i] > maxDegree) {
                maxDegree = degree[i];
                center = i;
            }
        }
        return center;
    }
    public static void main(String[] args) {
        int[][] edges = {{1, 2}, {2, 3}, {4, 2}, {4, 5}};
        Main solution = new Main();
        int center = solution.findCenter(edges);
        System.out.println("The center of the star graph is: " + center);
    }
}

```
#### Approach
We initially look at the frequency with which each node appears in the list of edges in order to locate the star graph's centre. This involves counting the number of edges or links that each graph node has.By definition, all other nodes in a star graph are connected to the centre node. As a result, it will be the node that appears on as many occasions as there are graph edges. This is so because every connection increases the number of times the main node appears in the list of edges.

We simply identify the centre node by comparing the appearance count of each node to the total number of edges in the graph. The centre of the star graph is, in fact, the node that perfectly satisfies this requirement.Then, since it is the centre node of the graph's star-shaped connections, we return this node identification as our ultimate outcome.
### **Example 2**:
```java
import java.util.ArrayList;
import java.util.List;

// Definition for a binary tree node.
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) {
        this.val = val;
    }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
public class Solution {
    private List<Integer> ans = new ArrayList<>();
    public void preorder(TreeNode root) {
        if (root == null) {
            return;
        }
        ans.add(root.val);
        preorder(root.left);
        preorder(root.right);
    }
    public List<Integer> preorderTraversal(TreeNode root) {
        preorder(root);
        return ans;
    }
}
```
### Complete code
```java
import java.util.ArrayList;
import java.util.List;

// Definition for a binary tree node.
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) {
        this.val = val;
    }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

public class Main {
    private List<Integer> ans = new ArrayList<>();
    
    public void preorder(TreeNode root) {
        if (root == null) {
            return;
        }
        ans.add(root.val);
        preorder(root.left);
        preorder(root.right);
    }
    
    public List<Integer> preorderTraversal(TreeNode root) {
        preorder(root);
        return ans;
    }

    public static void main(String[] args) {
        // Create a binary tree for testing
        TreeNode root = new TreeNode(1);
        root.right = new TreeNode(2);
        root.right.left = new TreeNode(3);
        
        // Create an instance of Main
        Main solution = new Main();
        
        // Perform preorder traversal and print the result
        List<Integer> result = solution.preorderTraversal(root);
        System.out.println("Preorder Traversal Result: " + result);
    }
}

```
#### Approach
The preorder method is a recursive function that takes a TreeNode as input. It starts from the root node and visits nodes in the following order:
+ Add the value of the current node to the ans list.
+ Recursively call preorder on the left child (if exists).
+ Recursively call preorder on the right child (if exists).

The preorderTraversal method initiates the traversal by calling preorder on the root node and then returns the ans list containing the values in the preorder sequence.

You start in room 0, which is already open. There are several other rooms with keys in them, and each key is labeled with the room it can unlock. You want to check if it's possible to visit all the rooms by using the keys you find along the way. In other words, can you eventually reach and unlock every room in the building starting from room 0? If you can, the answer is true; if not, it's false.
### **Example 3**:
You start in room 0, which is already open. There are several other rooms with keys in them, and each key is labeled with the room it can unlock. You want to check if it's possible to visit all the rooms by using the keys you find along the way. In other words, can you eventually reach and unlock every room in the building starting from room 0? If you can, the answer is true; if not, it's false.
```java
import java.util.ArrayDeque;
import java.util.Queue;
import java.util.List;
import java.util.ArrayList;

class Main {
    public boolean canVisitAllRooms(List<List<Integer>> rooms) {
        int cur;
        boolean flag = false;
        Queue<Integer> q = new ArrayDeque<>();
        List<Boolean> vis = new ArrayList<>(rooms.size());
        // Initialize vis with false values for all rooms
        for (int i = 0; i < rooms.size(); i++) {
            vis.add(false);
        }
        q.add(0);
        vis.set(0, true);
        while (!q.isEmpty()) {
            cur = q.poll();
            for (Integer key : rooms.get(cur)) {
                if (!vis.get(key)) {
                    vis.set(key, true);
                    q.add(key);
                }
            }
        }

        for (int m = 0; m < vis.size(); m++) {
            if (!vis.get(m)) {
                flag = true;
                break;
            }
        }
        return !flag;
    }
    public static void main(String[] args) {
        // Example usage:
        List<List<Integer>> rooms = new ArrayList<>();
        rooms.add(List.of(1)); // Room 0 has key to Room 1
        rooms.add(List.of(2)); // Room 1 has key to Room 2
        rooms.add(new ArrayList<>()); // Room 2 has no keys
        Main solution = new Main();
        boolean result = solution.canVisitAllRooms(rooms);
        System.out.println("Can visit all rooms: " + result);
    }
}

```
#### Approach
1. We have a list of rooms, where each room contains a set of keys that can open other rooms.
2. We start in room 0, which is always open.
3. We use a queue to keep track of the rooms we can currently visit. We initially add room 0 to the queue.
4. We also maintain a list called `vis`, which keeps track of whether we've visited each room. We mark room 0 as visited.
5. We use a while loop to explore rooms. We dequeue a room, check its keys, and add any unvisited rooms to the queue, marking them as visited.
6. After the loop, we check if any rooms are still unvisited in the `vis` list. If there are, it means we can't visit all rooms, so we set a flag to `true`.
7. Finally, we return `true` if the flag is `false`, indicating we can visit all rooms, and `false` otherwise.

In essence, we start in an open room and use keys to explore other rooms, ensuring we can reach every room in the building.

