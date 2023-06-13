/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let sum = 0;
    let cur = new ListNode(null)
    let ans = cur
    let carry = 0
    while (l2 || l1 || carry > 0) {
        const l1v = (l1) ? l1.val : 0
        const l2v = (l2) ? l2.val : 0
        sum = l1v + l2v + carry
        carry = 0
        if (sum > 9) {
            cur.next = new ListNode(sum - 10)
            carry = 1
        } else {
            cur.next = new ListNode(sum)
        }
        cur = cur.next
        l1 = (l1) ? l1.next : null
        l2 = (l2) ? l2.next : null
    }
    return ans.next
};