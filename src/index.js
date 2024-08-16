function hashMap() {
    let buckets = new Array(16);
    let loadFactor = 0.75;
    function hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode =
                (primeNumber * hashCode + key.charCodeAt(i)) % buckets.length;
        }

        return hashCode;
    }
    function set(key, value) {
        let index = hash(key);
        console.log(index);
        if (index < 0 || index >= buckets.length) {
            throw new Error('Trying to access index out of bound');
        }
        let temp = buckets[index];

        while (true) {
            if (!temp) {
                let node = {
                    value: value,
                    key: key,
                    nextNode: null,
                };
                node.nextNode = buckets[index];
                buckets[index] = node;
                break;
            }
            if (temp.key === key) {
                temp.value = value;
            }
            temp = temp.nextNode;
        }
    }

    return { set, buckets };
}

let test = hashMap();
test.set('kmair', 'this is the value for kmair');

console.log(test.buckets);
