// This is a "method-only" submission.
// You only need to complete this method.

function postOrder(root) {
    if (root == null) {
        return;
    }
    else {
        postOrder(root.left);
        postOrder(root.right);
        process.stdout.write(root.data + " ");
    }

}