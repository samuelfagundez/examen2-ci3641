import { Tree } from './tree';

export enum Op {
    multiplicar = '*',
    dividir = '/',
    sumar = '+',
    restar = '-',
}

export enum Order {
    pre = 'PRE',
    post ='POST'
}

export class Exp {
    private order: Order;
    private exp: string;
    private expTree: Tree;

    constructor(order: Order, exp: string) {
        this.order = order;
        this.exp = exp;
        
        if (order === Order.pre) {
            this.expTree = this.buildTree(this.exp.split('').reverse());
        } else {
            this.expTree = this.buildTree(this.exp.split(''));
        }
    }

    private buildTree(expressionElements: string[]): Tree {
        const stackSim: Tree[] = [];
        expressionElements.forEach(element => {
            if (element === Op.sumar || element === Op.restar || element === Op.multiplicar || element === Op.dividir) {
                if (stackSim.length >= 2) {
                    const right = stackSim.pop();
                    const left = stackSim.pop();
                    const newNode = new Tree(element, left, right);
                    stackSim.push(newNode);
                } else {
                    throw new Error('Operación inválida');
                }
            } else {
                const newNode = new Tree(element);
                stackSim.push(newNode);
            }
        });
        return stackSim[0];
    }

    private evalTree = (tree: Tree): number => {
        if (tree.value === Op.multiplicar) {
            return this.evalTree(tree.leftChild as Tree) * this.evalTree(tree.rightChild as Tree);
        } else if (tree.value === Op.dividir) {
            return this.evalTree(tree.leftChild as Tree) / this.evalTree(tree.rightChild as Tree);
        } else if (tree.value === Op.sumar) {
            return this.evalTree(tree.leftChild as Tree) + this.evalTree(tree.rightChild as Tree);
        } else if (tree.value === Op.restar) {
            return this.evalTree(tree.leftChild as Tree) - this.evalTree(tree.rightChild as Tree);
        } else {
            return parseInt(tree.value);
        }
    }

    private showTree = (tree: Tree): string => {
        if (tree.value === Op.multiplicar) {
            return `(${this.showTree(tree.leftChild as Tree)} * ${this.showTree(tree.rightChild as Tree)})`;
        } else if (tree.value === Op.dividir) {
            return `(${this.showTree(tree.leftChild as Tree)} / ${this.showTree(tree.rightChild as Tree)})`;
        } else if (tree.value === Op.sumar) {
            return `(${this.showTree(tree.leftChild as Tree)} + ${this.showTree(tree.rightChild as Tree)})`;
        } else if (tree.value === Op.restar) {
            return `(${this.showTree(tree.leftChild as Tree)} - ${this.showTree(tree.rightChild as Tree)})`;
        } else {
            return tree.value;
        }
    }

    eval() {
        return this.evalTree(this.expTree);
    }

    mostrar() {
        return this.showTree(this.expTree);
    }
}