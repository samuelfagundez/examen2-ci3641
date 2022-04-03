export class Tree {
    leftChild?: Tree;
    rightChild?: Tree;
    value: string;

    constructor( value: string, leftChild?: Tree, rightChild?: Tree) {
        this.leftChild = leftChild;
        this.rightChild = rightChild;
        this.value = value;
    }
    
    insert(node: Tree) {
        if (!this.leftChild) this.leftChild = node;
        else if (!this.rightChild) this.rightChild = node;
    }
}