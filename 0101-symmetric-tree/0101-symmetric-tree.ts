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