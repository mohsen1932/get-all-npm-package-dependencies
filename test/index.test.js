/*
* Created by Mohsen Barati
* Github: https://github.com/mohsen1932
* Email: mohsen1932@gmail.com
*/
var assert = require('assert');

describe('getFromApi()', function() {
        const expected = {
            packageName : "axios",
            length : 2,
            dependencies : [ 'follow-redirects', 'is-buffer' ]
        }
        it('should return correct response', function() {
            (async () => {
                const response = await index.getFromApi(expected.packageName);
                assert.equal(response.length, expected.length);
                assert.equal(response.join(), expected.dependencies.join());
            })();
        });
});

describe('getDependencies()', function() {
    const expected = {
        packageName : "axios",
        length : 4,
        dependencies : [ 'follow-redirects', 'is-buffer', 'debug', 'ms' ]
    }
    it('should return correct response', function() {
        (async () => {
            let array = [];
            await index.getDependencies(expected.packageName,array);
            assert.equal(array.length, expected.length);
            assert.equal(array.join(), expected.dependencies.join());
        })();
    });
});

describe('getAllDependencies()', function() {
    const expected = {
        packageName : "axios",
        length : 4,
        dependencies : [ 'follow-redirects', 'is-buffer', 'debug', 'ms' ]
    }
    it('should return correct response', function() {
        (async () => {
            const response = await index.getAllDependencies(expected.packageName);
            assert.equal(response.length, expected.length);
            assert.equal(response.join(), expected.dependencies.join());
        })();
    });
});