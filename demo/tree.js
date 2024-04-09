var preorderTraversal = function (root) {
    const stack = [];
    if (root) {
        stack.push(root);
    }
    const list = [];
    while (stack.length > 0) {
        let node = stack.pop();
        list.push(node.val);
        if (node.right) {
            stack.push(node.right);
        }
        if (node.left) {
            stack.push(node.left);
        }
    }
    return list;
};

var inorderTraversal = function (root) {
    const result = [];
    const stack = [];

    while (stack.length > 0 || root) {
        if (root) {
            stack.push(root);
            root = root.left;
        } else {
            const node = stack.pop();
            result.push(node.val);
            root = node.right;
        }
    }
    return result;
};


var postorderTraversal = function (root) {
    const dfs = (node, res) => {
        if (!node) return;
        dfs(node.left, res);
        dfs(node.right, res);
        res.push(node.val);
    }

    const res = [];
    dfs(root, res);
    return res;
};


var levelOrder = function (root) {
    const stack = {};

    var dfs = (node, level) => {
        if (!node) return;
        if (stack[level]) {
            stack[level] = [];
        }
        stack[level].push(node.val);
        dfs(node.left, level + 1);
        dfs(node.right, level + 1);
    }

    dfs(root, 1);

    const result = [];
    for (var item in stack) {
        result.push(stack[item]);
    }

    return result;
};


var flatten = function (root) {
    const temps = [];
    const stack = [];
    if (root) {
        stack.push(root);
    }
    while (stack.length > 0) {
        const node = stack.pop();
        temps.push(node.val);

        if (node.right) {
            stack.push(node.right);
        }
        if (node.left) {
            stack.push(node.left);
        }
    }

    const result = null;
    let pi = null;
    for (var i = 0; i < temps.length - 1; i++) {
        const node = new TreeNode(temps[i], pi, null);
        if (result == null) {
            result = node;
        }

        pi = node;
    }

    return result;
};