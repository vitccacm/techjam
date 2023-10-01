
Before delving into Branch and Bound, it's important to grasp two essential algorithms: `Depth First Search (DFS)` and `Breadth First Search (BFS)`.

![dfs-bfs](https://drive.google.com/uc?id=1EDFVxqgWsozEd-bhOHUdilqWevw_1LXz)

**DFS** is a graph traversal method where you start at a node, delve as deep as possible along each branch, and backtrack when necessary. It can be implemented with a stack or recursion, explores paths without specific criteria, and might use more memory. DFS is useful for finding connected components and cycles.

**BFS**, on the other hand, is another graph traversal technique. It explores all neighbours at the current level before moving to the next level, using a queue. BFS operates breadth-first, and it explores nodes in the order they are encountered. This method often requires more memory and is applied in finding shortest paths, web crawling, and exploring state spaces.

Now, let's focus on **Branch and Bound**, an algorithmic approach for optimizing complex problems by systematically exploring the solution space while eliminating unpromising branches. It's employed when exhaustive searches are impractical due to large solution spaces. Here's a brief summary:

1.  **Initialization**: Start with an initial feasible solution (if available) and an upper bound.
2.  **Branching**: Divide the problem into smaller branches, representing different choices, and explore them systematically.
3.  **Bounding**: Calculate lower bounds for branches and prune those worse than the current upper bound.
4.  **Exploration**: Explore branches based on priority (often using a priority queue) determined by lower bounds.
5.  **Update Bounds**: Continuously update upper and lower bounds, adjusting the upper bound if a better solution is found.
6.  **Pruning**: Remove branches that won't lead to better solutions than the current upper bound or are infeasible.
7.  **Termination**: Continue exploration until branches are pruned or a predefined stopping criterion is met.
8.  **Solution Retrieval**: The best solution found (the upper bound) represents the optimal solution.

In summary, Branch and Bound is a technique for optimization involving branching (generating subproblems), a `state space tree` (exploring all possible paths), and the extension of the most promising options while discarding less favorable ones through pruning.

### Job Assignment Problem:

The `Job Assignment` Problem involves allocating N workers to N jobs with varying costs, aiming to minimize the total cost. One approach to solving it is using the Branch and Bound algorithm, which employs a priority queue for efficient traversal.

Here's a condensed overview of the Branch and Bound algorithm for the Job Assignment Problem:

1.  Initialize a priority queue (min-heap) to store live nodes in the search tree.
2.  Create a root node with cost 0 and add it to the queue.
3.  While the queue is not empty:

-   Pop the node with the least estimated cost (promising) from the queue.
-   If all workers are assigned, print the assignments and return the minimum cost.
-   Iterate over unassigned jobs for the current worker:

-   Create a child node representing the assignment of the worker to the job.
-   Calculate the path cost for the child node.
-   Calculate a lower bound (approximate cost) for the child node.
-   Add the child node to the queue.

4.  Implement a comparison function (comp) for the priority queue that orders nodes by their cost.
5.  Define a structure for nodes containing worker and job assignments, cost, path cost, and assignment status.
6.  Print the optimal assignments and cost once found.

For optimization and code readability, consider using data structures and functions to improve the implementation.

![job](https://drive.google.com/uc?id=1B1wzwdhuCU08_U91hsXxgtiX0beNmcwU)

Below is a simplified **Java** implementation:
```java
import java.util.PriorityQueue;
import java.util.Arrays;

class Main {
    static final int N = 4;

    static class Node {
        Node parent;
        int pathCost;
        int cost;
        int workerID;
        int jobID;
        boolean[] assigned = new boolean[N];
    }

    static class comp implements Comparator<Node> {
        public int compare(Node lhs, Node rhs) {
            return lhs.cost - rhs.cost;
        }
    }

    static Node createNode(int x, int y, boolean[] assigned, Node parent) {
        Node node = new Node();
        for (int j = 0; j < N; j++)
            node.assigned[j] = assigned[j];
        node.assigned[y] = true;
        node.parent = parent;
        node.workerID = x;
        node.jobID = y;
        return node;
    }

    static int calculateCost(int[][] costMatrix, int x, int y, boolean[] assigned) {
        int cost = 0;
        boolean[] available = new boolean[N];
        Arrays.fill(available, true);
        for (int i = x + 1; i < N; i++) {
            int min = Integer.MAX_VALUE, minIndex = -1;
            for (int j = 0; j < N; j++) {
                if (!assigned[j] && available[j] && costMatrix[i][j] < min) {
                    minIndex = j;
                    min = costMatrix[i][j];
                }
            }
            cost += min;
            available[minIndex] = false;
        }
        return cost;
    }

    static void printAssignments(Node min) {
        if (min.parent == null)
            return;
        printAssignments(min.parent);
        System.out.println("Assign Worker " + (char)(min.workerID + 'A') + " to");
    }

    public static void main(String[] args) {
        PriorityQueue<Node> pq = new PriorityQueue<>(new comp());
        int[][] costMatrix = new int[N][N];
        boolean[] assigned = new boolean[N];
        Node root = null;
        int minCost = Integer.MAX_VALUE;
        for (int i = 0; i < N; i++) {
            Arrays.fill(assigned, false);
            root = createNode(-1, i, assigned, null);
            root.pathCost = 0;
            root.cost = calculateCost(costMatrix, -1, i, root.assigned);
            pq.add(root);
        }
        while (!pq.isEmpty()) {
            Node min = pq.poll();
            int x = min.workerID + 1;
            if (x == N) {
                if (min.cost < minCost) {
                    minCost = min.cost;
                    printAssignments(min);
                }
                continue;
            }
            for (int y = 0; y < N; y++) {
                if (!min.assigned[y]) {
                    Node child = createNode(x, y, min.assigned, min);
                    child.pathCost = min.pathCost + costMatrix[x - 1][y];
                    child.cost = child.pathCost + calculateCost(costMatrix, x, y, child.assigned);
                    pq.add(child);
                }
            }
        }
    }
}

```
### Travelling Salesman Problem (TSP):

The `Traveling Salesman`Problem (TSP) involves finding the shortest tour that visits every city exactly once and returns to the starting city. Branch and Bound is a technique used to solve this problem efficiently. It involves calculating a lower bound on the cost of the optimal solution at each stage of exploration to decide whether to continue with that branch of the search tree.

In the context of the TSP, the lower bound is computed by considering the sum of the two minimum edge costs for each city and then dividing it by two. This lower bound represents the best possible solution that can be obtained by adding edges through each city. We start with the root node at city 0 and iteratively explore different paths. At each step, we update the lower bound by considering the edges added to the tour and continue exploring the branch if the lower bound is less than the best solution found so far. We backtrack when necessary to explore other possibilities.

The Traveling Salesman Problem (TSP) aims to find the shortest tour visiting all cities once and returning to the starting city. The Branch and Bound technique is used for efficient problem-solving. It calculates a lower bound representing the best possible solution at each exploration stage. Here's a simplified breakdown:

1. **Problem**: Find the shortest city tour, visiting each city once and returning to the start.

2. **Approach**: Use Branch and Bound, a systematic exploration method for optimization problems like TSP.

3. **Lower Bound**: Calculate a lower bound that represents the best possible solution achievable by adding edges through each city.

4. **Initialization**: Set up variables for path tracking, visited cities, and minimum cost. Calculate an initial lower bound by summing two minimum edge costs for each city and halving the result.

5. **Exploration Start**: Begin with a starting city (usually 0), mark it visited, and initialize the exploration.

6. **Recursive Exploration**: For the current city, consider unvisited cities as potential destinations. Calculate a lower bound for the current node. If it's better than the best solution found so far, explore this branch recursively. Backtrack when needed.

7. **Base Case**: When all cities are visited, check if there's an edge back to the start. If yes, calculate the tour's cost and update the best solution.

8. **Rounding Lower Bound**: Ensure the lower bound is an integer. Round differently based on the exploration level.

9. **Final Result**: After exploring all paths, the final result contains the minimum cost and the corresponding path.

10.  **Output**: Print the minimum cost and the optimal tour.

11.  **Complexity**: The time complexity depends on bounding functions. In the worst case, it's similar to brute force but performs well in practice due to pruning.

![tsp](https://drive.google.com/uc?id=1VrzXrnZvTNXUsIl47TirA-2MxbOSVBW9)

Here is a concise **Java** implementation of the Branch and Bound algorithm for the TSP:

```java
import java.util.Arrays;

class TSPBranchAndBound {

    private static final int N = 4;

    private static int finalPath[] = new int[N + 1];

    private static boolean visited[] = new boolean[N];

    private static int finalRes = Integer.MAX_VALUE;

    private static void copyToFinal(int currPath[]) {

        System.arraycopy(currPath, 0, finalPath, 0, N);

        finalPath[N] = currPath[0];

    }

    private static int firstMin(int adj[][], int i) {

        int min = Integer.MAX_VALUE;

        for (int k = 0; k < N; k++) {

            if (adj[i][k] < min && i != k) {

                min = adj[i][k];

            }

        }

        return min;

    }

    private static int secondMin(int adj[][], int i) {

        int first = Integer.MAX_VALUE, second = Integer.MAX_VALUE;

        for (int j = 0; j < N; j++) {

            if (i == j) continue;

            if (adj[i][j] <= first) {

                second = first;

                first = adj[i][j];

            } else if (adj[i][j] <= second && adj[i][j] != first) {

                second = adj[i][j];

            }

        }

        return second;

    }

    private static void tspRec(int adj[][], int currBound, int currWeight, int level, int currPath[]) {

        if (level == N) {

            if (adj[currPath[level - 1]][currPath[0]] != 0) {

                int currRes = currWeight + adj[currPath[level - 1]][currPath[0]];

                if (currRes < finalRes) {

                    copyToFinal(currPath);

                    finalRes = currRes;

                }

            }

            return;

        }

        for (int i = 0; i < N; i++) {

            if (adj[currPath[level - 1]][i] != 0 && !visited[i]) {

                int temp = currBound;

                currWeight += adj[currPath[level - 1]][i];

                if (level == 1) {

                    currBound -= ((firstMin(adj, currPath[level - 1]) + firstMin(adj, i)) / 2);

                } else {

                    currBound -= ((secondMin(adj, currPath[level - 1]) + firstMin(adj, i)) / 2);

                }

                if (currBound + currWeight < finalRes) {

                    currPath[level] = i;

                    visited[i] = true;

                    tspRec(adj, currBound, currWeight, level + 1, currPath);

                }

                currWeight -= adj[currPath[level - 1]][i];

                currBound = temp;

                Arrays.fill(visited, false);

                for (int j = 0; j <= level - 1; j++) {

                    visited[currPath[j]] = true;

                }

            }

        }

    }

    private static void tsp(int adj[][]) {

        int currPath[] = new int[N + 1];

        int currBound = 0;

        Arrays.fill(currPath, -1);

        Arrays.fill(visited, false);

        for (int i = 0; i < N; i++) {

            currBound += (firstMin(adj, i) + secondMin(adj, i));

        }

        currBound = (currBound == 1) ? currBound / 2 + 1 : currBound / 2;

        visited[0] = true;

        currPath[0] = 0;

        tspRec(adj, currBound, 0, 1, currPath);

    }

    public static void main(String[] args) {

        int adj[][] = {{0, 10, 15, 20}, {10, 0, 35, 25}, {15, 35, 0, 30}, {20, 25, 30, 0}};

        tsp(adj);

        System.out.println("Minimum cost: " + finalRes);

        System.out.print("Path taken: ");

        for (int i = 0; i <= N; i++) {

            System.out.print(finalPath[i] + " ");

        }

    }

}
```