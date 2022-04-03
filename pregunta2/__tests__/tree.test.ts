import { Tree } from '../src/models';

describe('Expression module', () => {
	it('Create tree', () => {
		const tree = new Tree('+');
		expect(tree.value).toBe('+');
		expect(tree.leftChild).toBeUndefined();
		expect(tree.rightChild).toBeUndefined();
	});

	it('Create full tree', () => {
		const leftTree = new Tree('2');
		const rightTree = new Tree('3');
		const tree = new Tree('+', leftTree, rightTree);
		expect(tree.value).toBe('+');
		expect(tree.leftChild?.value).toBe('2');
		expect(tree.rightChild?.value).toBe('3');
	});

	it('tree right insert', () => {
		const leftTree = new Tree('2');
		const tree = new Tree('+', leftTree);
		const rightTree = new Tree('3');
		tree.insert(rightTree);
		expect(tree.value).toBe('+');
		expect(tree.leftChild?.value).toBe('2');
		expect(tree.rightChild?.value).toBe('3');
	});

	it('tree right insert v1', () => {
		const rightTree = new Tree('3');
		const tree = new Tree('+', undefined, rightTree);
		const leftTree = new Tree('2');
		tree.insert(leftTree);
		expect(tree.value).toBe('+');
		expect(tree.leftChild?.value).toBe('2');
		expect(tree.rightChild?.value).toBe('3');
	});

	it('tree right insert v2', () => {
		const tree = new Tree('+');
		const leftTree = new Tree('2');
		tree.insert(leftTree);
		expect(tree.value).toBe('+');
		expect(tree.leftChild?.value).toBe('2');
		expect(tree.rightChild?.value).toBeUndefined();
	});
});
