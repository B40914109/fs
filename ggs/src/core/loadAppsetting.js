import inputJOSN from '../../appsetting.json'

function flattenObject(obj) {
    const result = [];

    function recurse(current, path) {
        for (const key in current) {
            const value = current[key];
            const newPath = path ? `${path}.${key}` : key;

            if (typeof value === 'object') {
                recurse(value, newPath);
            } else {
                result.push({ path: newPath, value: value });
            }
        }
    }

    recurse(obj, '');
    return result;
}

function constructObjectFromFlattenedArray(flattenedArray) {
    const result = {};

    for (const item of flattenedArray) {
        const keys = item.path.split('.');
        let currentObject = result;

        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];

            if (i === keys.length - 1) {
                // 最后一个键，分配值
                currentObject[key] = item.value;
            } else {
                // 不是最后一个键，确保属性存在
                if (!currentObject[key]) {
                    currentObject[key] = {};
                }
                currentObject = currentObject[key];
            }
        }
    }

    return result;
}

const flattenedArray = flattenObject(inputJOSN);
const reconstructedObject = constructObjectFromFlattenedArray(flattenedArray);
reconstructedObject.get = function (sys, env) {
    let s = ['afc', 'hil'];
    let e = ['sit', 'uat', 'pp', 'prod'];

    s = s.filter(x => x != sys);
    e = e.filter(x => x != env);

    const arr = [];
    for (let item of flattenedArray) {
        const keys = item.path.split('.');
        if (keys.some(item => s.includes(item.toLocaleLowerCase())))
            continue;
        if (keys.some(item => e.includes(item.toLocaleLowerCase())))
            continue;

        arr.push(item);
    }

    const result = {};
    for (const item of arr) {
        const keys = item.path.split('.');
        const m = keys[0];
        const n = keys[1];
        if (!result[m]) {
            result[m] = {};
        }
        if (!result[m][n]) {
            result[m][n] = {};
        }
        result[m][n] = item.value;
    }

    return result;
};




const configs = {

};

window.configs = configs;
window.reconstructedObject = reconstructedObject;
export default configs;
