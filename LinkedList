class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function reverseBetween(head, left, right) {
    if (!head || left === right) {
        return head;
    }
    
    const dummy = new ListNode(-1);
    dummy.next = head;
    let prev = dummy;
    
    for (let i = 1; i < left; i++) {
        prev = prev.next;
    }
    
    let curr = prev.next;
    let next = null;
    
    for (let i = left; i < right; i++) {
        next = curr.next;
        curr.next = next.next;
        next.next = prev.next;
        prev.next = next;
    }
    
    return dummy.next;
}


// Time Complexity: O(n)

// Space Complexity: O(1)
