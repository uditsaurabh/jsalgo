class Node {
  constructor(next = null, value = 0) {
    this.next = next;
    this.value = value;
  }
}

class SingleLinkedList {
  constructor(val) {
    if (val !== undefined) {
      const node = new Node(val);
      this.head = node;
      this.tail = node;
    }
  }
  /*
  1. create new node and add to the end.
  2. add node to the end.
  */
  push(value) {
    if (value != null && typeof value != undefined) {
      let node = new Node(value);
      if (this.head != null) {
        let ptr = head;
        while (ptr.next != null) {
          ptr = ptr.next;
        }
        ptr.next = node;
      } else {
        this.head = node;
      }
    }
  }
  /*
  1. create new node and add to the end.
  2. add node to the beginning.
  */
  unshift(value) {}
  /*
  1. create new node and add to the end.
  2. insert node to the given position.
  */
  insert(value) {}
}

module.exports = SingleLinkedList;
