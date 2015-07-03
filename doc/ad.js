var _ = require('lodash');

var users = [
    { 'user': 'fred',   'age': 48 },
    { 'user': 'barney', 'age': 34 },
    { 'user': 'fred',   'age': 42 },
    { 'user': 'barney', 'age': 36 }
];

// sort by `user` in ascending order and by `age` in descending order
console.log(_.sortByOrder(users, [ 'age'],['desc']));