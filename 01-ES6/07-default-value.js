let [a = "a", b = "b", c = new Error('C必须指定')] = [1, , 3];
console.log(a, b, c);

// function ajax(options) {
//     var method = options.method || "get";
//     var data = options.data || {};
//     //.....
// }

// function ajax({ method = "get", data }) {
//     console.log(arguments);
// }

// ajax({
//     method: "post",
//     data: { "name": "ql" }
// });