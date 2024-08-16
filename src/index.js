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
                break;
            }
            temp = temp.nextNode;
        }
    }

    function get(key) {
        let index = hash(key);
        let temp = buckets[index];
        while (true) {
            if (!temp) {
                return null;
            }
            if (temp.key === key) {
                return temp.value;
            }
            temp = temp.nextNode;
        }
    }

    return { set, get, buckets };
}

let test = hashMap();
test.set('Karim', 'this is the first value for Karim');
test.set('Imad', 'this is the first value for Imad');
test.set('Ayman', 'this is the first value for Ayman');
test.set('Messi', 'this is the first value for Messi');
test.set('Ronaldo', 'this is the first value for Ronaldo');

test.set('karim', 'this is the second value for karim');
test.set('kamir', 'this is the second value for kamir');

console.log(test.buckets);

console.log(test.get('Ayman'));
