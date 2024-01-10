// This is a "method-only" submission.
// You only need to complete this method.

function preOrder(root) {
    if (root == null) {
        return;
    }
    else {
        process.stdout.write(root.data + " ");
        preOrder(root.left);
        preOrder(root.right);
    }
}