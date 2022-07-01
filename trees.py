class node:
    def __init__(self, item):
        self.val = item
        self.left = None
        self.right = None

def inorderTraversal(root):
    if root:
        inorderTraversal(root.left)
        print(str(root.val), "->", end = " ")
        inorderTraversal(root.right)

def preorderTraversal(root):
    if root:
        print(str(root.val) + "->", end = " ")
        preorderTraversal(root.left)
        preorderTraversal(root.right)

def postorderTraversal(root):
    if root:
        postorderTraversal(root.left)
        postorderTraversal(root.right)
        print(str(root.val) + "->", end = " ")

root = node(1)
root.left = node(2)
root.right = node(3)
root.left.left = node(4)
root.left.right = node(5)
root.left.right.left = node(6)
root.left.right.right = node(7)

inorderTraversal(root)
#preorderTraversal(root)
#postorderTraversal(root)