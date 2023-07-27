/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root: TreeNode | null): number[][] {

  let ans: number[][] = [];


  if (!root) return [];

  const queue: [TreeNode, number][] = [[root, 0]];
  while (queue.length > 0) {
    const [currentNode, level] = queue.shift()!;
    if (!ans[level]) ans.push([])
    ans[level].push(currentNode.val)

    if (currentNode.left) {
      queue.push([currentNode.left, level + 1]);
    }

    if (currentNode.right) {
      queue.push([currentNode.right, level + 1]);
    }
  }



  return ans;
};


