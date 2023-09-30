## Backtracking Approach
### Example-1:
#### N-QUEENS PROBLEM: 
The N-Queens problem is a classic puzzle where you need to place N chess queens on an NxN chessboard in such a way that no two queens threaten each other. This means that no two queens can be in the same row, column, or diagonal.


![nqueens](https://drive.google.com/uc?id=1ThPztSQleVki4j1s45ASq69Vkxyvb4MS)

#### APPROACH:
1. We create a chessboard represented as a 2D character array (board) and initialize it with empty cells ('.').

2. The solveNQueens function is called to start solving the N-Queens problem for a given board size n.

3. The solve function is a recursive backtracking function that tries to place queens on the board row by row.

4. The isValid function checks if it's safe to place a queen in a particular cell based on the constraints of the problem.
5. When a valid solution is found, it is printed using the printBoard function.
#### SOLUTION:
```java
import java.util.*;
public class nqueens {
	public static boolean check(int x[],int k,int i) {
		for(int j=0;j<k;j++) {
			if(x[j]==i || Math.abs(x[j]-i)==Math.abs(j-k)) {
				return false;
			}
		}
		return true;
	}
	public static void print(int a[],int n) {
		for(int i=0;i<n;i++) {
			System.out.println(a[i]+" ");
		}
		System.out.println(" ");
	}
	public static void queen(int k,int x[],int n){
		for(int i=0;i<n;i++) {
			if(check(x,k,i)) {
				x[k]=i;
				if(k==n-1) {
					print(x,n);	
				}else {
					queen(k+1,x,n);
				}
			}
		}
	}
	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		int n=sc.nextInt();//take input for n x n chess board
		int x[]=new int[n];
		queen(0,x,n);
		
	}
}
```

### Example-2:
#### SUDOKKU SOLVER: 
The Sudoku puzzle is a popular number-placement puzzle. The objective is to fill a 9x9 grid with digits so that each column, each row, and each of the nine 3x3 subgrids (also known as regions) contains all of the digits from 1 to 9. The puzzle starts with some cells filled with digits, and your task is to complete the puzzle.

![sudoku](https://drive.google.com/uc?id=1_-NZh2UPaBkFpXPCLOz1Sv852ZeKErQd )
#### APPROACH:
1. The solveSudoku function uses backtracking to solve the Sudoku puzzle. It iterates through each cell of the Sudoku grid and tries to place digits from '1' to '9' if the cell is empty ('.'). 
2. It recursively explores different possibilities and backtracks if a solution is not found.

3. The isValid function checks whether it's valid to place a digit in a given cell. It ensures that the digit does not conflict with the rules of Sudoku (i.e., no repeated digits in rows, columns, or 3x3 subgrids).

4. The main method sets up an example Sudoku puzzle as a 2D character array, calls solveSudoku to solve it, and prints the solved Sudoku board if a solution exists

#### SOLUTION:
```java
public class SudokuSolver {

    public static boolean solveSudoku(char[][] board) {
        for (int row = 0; row < 9; row++) {
            for (int col = 0; col < 9; col++) {
                if (board[row][col] == '.') {
                    for (char num = '1'; num <= '9'; num++) {
                        if (isValid(board, row, col, num)) {
                            board[row][col] = num;
                            if (solveSudoku(board)) {
                                return true;
                            }
                            board[row][col] = '.';
                        }
                    }
                    return false;
                }
            }
        }
        return true; // The board is solved
    }

    private static boolean isValid(char[][] board, int row, int col, char num) {
        for (int i = 0; i < 9; i++) {
            if (board[row][i] == num || board[i][col] == num || board[row - row % 3 + i / 3][col - col % 3 + i % 3] == num) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        char[][] sudokuBoard = {
            {'5', '3', '.', '.', '7', '.', '.', '.', '.'},
            {'6', '.', '.', '1', '9', '5', '.', '.', '.'},
            {'.', '9', '8', '.', '.', '.', '.', '6', '.'},
            {'8', '.', '.', '.', '6', '.', '.', '.', '3'},
            {'4', '.', '.', '8', '.', '3', '.', '.', '1'},
            {'7', '.', '.', '.', '2', '.', '.', '.', '6'},
            {'.', '6', '.', '.', '.', '.', '2', '8', '.'},
            {'.', '.', '.', '4', '1', '9', '.', '.', '5'},
            {'.', '.', '.', '.', '8', '.', '.', '7', '9'}
        };

        if (solveSudoku(sudokuBoard)) {
            System.out.println("Sudoku solution:");
            for (int i = 0; i < 9; i++) {
                for (int j = 0; j < 9; j++) {
                    System.out.print(sudokuBoard[i][j] + " ");
                }
                System.out.println();
            }
        } else {
            System.out.println("No solution exists.");
        }
    }
}

```
#### Example-3
#### COMBINATION SUM
Given an array of distinct positive integers and a target integer, your task is to find all unique combinations in the array that sum up to the target.

#### APPROACH:
1. The combinationSum function is the entry point that initializes the result list and calls the backtrack function to find combinations.

2. The backtrack function is a recursive backtracking function that tries to form combinations by adding elements from the candidates array to the currentList. It explores valid combinations and backtracks when needed.

3. If the remaining sum becomes negative during exploration, it means the current combination cannot lead to the target sum, so it returns.

4. If the remaining sum becomes zero, it means a valid combination is found and is added to the result list.

5. In the main method, you can specify the candidates array and the target value. The program then finds all unique combinations of elements from the candidates array that sum up to the target value.

#### SOLUTION:
```java
import java.util.ArrayList;
import java.util.List;

public class CombinationSum {

    public static List<List<Integer>> combinationSum(int[] candidates, int target) {
        List<List<Integer>> result = new ArrayList<>();
        backtrack(result, new ArrayList<>(), candidates, target, 0);
        return result;
    }

    private static void backtrack(List<List<Integer>> result, List<Integer> currentList, int[] candidates, int remaining, int start) {
        if (remaining < 0) {
            return; // Stop exploring if the remaining sum is negative
        }
        if (remaining == 0) {
            result.add(new ArrayList<>(currentList)); // Found a valid combination
            return;
        }

        for (int i = start; i < candidates.length; i++) {
            currentList.add(candidates[i]);
            backtrack(result, currentList, candidates, remaining - candidates[i], i); // Recur with the same element allowed
            currentList.remove(currentList.size() - 1); // Backtrack
        }
    }

    public static void main(String[] args) {
        int[] candidates = {2, 3, 6, 7};
        int target = 7;
        List<List<Integer>> combinations = combinationSum(candidates, target);

        System.out.println("Unique Combinations that sum to " + target + ":");
        for (List<Integer> combination : combinations) {
            System.out.println(combination);
        }
    }
}

```
