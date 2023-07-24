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



const dfs = (l: TreeNode | null, r: TreeNode | null) => {
  if (!l && !r) return true;
  if (!l || !r) return false;
  return l.val === r.val && dfs(l.left, r.right) && dfs(l.right, r.left);
};

function isSymmetric(root: TreeNode | null): boolean {
  let left = root.left;
  let right = root.right;

  return dfs(left, right);
}
