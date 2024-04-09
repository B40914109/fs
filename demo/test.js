var fib = function (n) {
    const f = [];
    for (var i = 0; i <= n; i++) {
        if (i == 0) {
            f.push(0);
        } else if (i == 1) {
            f.push(1);
        } else {
            f.push(f[i - 1] + f[i - 2])
        }
    }
    return f[n];
}

var climbStairs = function (n) {

    const f = [0];
    for (let i = 1; i <= n; i++) {
        if (i == 1) {
            f.push(1);
        } else if (i == 2) {
            f.push(2);
        } else {
            f.push(f[i - 1] + f[i - 2]);
        }
    }
    return f[n];
}

var uniquePaths = function (m, n) {
    let count = 0;
    const root = { m, n };
    const tree = [root];
    while (tree.length) {
        const node = tree.pop();

        if (node.m != 1 && node.n > 1) {
            tree.push({ m: node.m, n: node.n - 1 });
        }

        if (node.m > 1 && node.n != 1) {
            tree.push({ m: node.m - 1, n: node.n });
        }

        if (node.m == 1 || node.n == 1) {
            count++;
            console.log(count, node);
        }
    }

    return count;
};

uniquePaths = function (m, n) {
    const temp = {};
    for (let x = 1; x <= m; x++) {
        for (let y = 1; y <= n; y++) {
            if (temp[x] == undefined) {
                temp[x] = {};
            }
            if (y == 1) {
                temp[x][y] = 1;
            }
            if (x == 1) {
                temp[x][y] = 1;
            }

            if (x != 1 && y != 1) {
                temp[x][y] = temp[x - 1][y] + temp[x][y - 1];
            }
        }
    }
    return temp[m][n];
}


var tribonacci = function (n) {
    var fbi = [0, 1, 1];
    for (var i = 3; i <= n; i++) {
        fbi[i] = fbi[i - 3] + fbi[i - 2] + fbi[i - 1];
    }
    return fbi[n];
};


var getMoneyAmount = function (n) {

    var temp = {};
    debugger;


    for (let x = n; x >= 1; x--) {
        for (let y = n; y >= 1; y--) {
            // debugger;
            if (temp[x] == undefined) {
                temp[x] = {};
            }

            if (x >= y) {
                temp[x][y] = 0;
            }

            temp[x][y] = y + temp[x][y - 1];

            // temp[1, 6] = 1 + Math.min(temp[1, 4] + temp[4, 6]);

        }
    }

    return temp;
};


getMoneyAmount = function (n) {
    debugger;
    const f = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));
    for (let i = n - 1; i >= 1; i--) {
        for (let j = i + 1; j <= n; j++) {
            f[i][j] = j + f[i][j - 1];
            for (let k = i; k < j; k++) {
                f[i][j] = Math.min(f[i][j], k + Math.max(f[i][k - 1], f[k + 1][j]));
            }
        }
    }
    return f[1][n];
};



console.log(getMoneyAmount(3));