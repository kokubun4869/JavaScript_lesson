const item = {
    name: "パソコン",
    price: 10000,
    sale: true,
    parts: ["CPU","メモリ","HDD"],
    a: {
        b: "テスト"
    }
}

item["c"] = "テスト２";

document.getElementById("name").textContent = "商品名は" + item["name"];
document.getElementById("price").textContent = "値段は" + item.price + "円です。";

item["sale"] = false;

if(item["sale"]){
    document.getElementById("sale").textContent = item["name"] + "はセール中です。";
}
let texts ='';
for(let i = 0; i < item["parts"].length; i++){
    texts += item["parts"][i];
    if( i !== item["parts"].length - 1){
        texts += "・";
    }
}
document.getElementById("parts").textContent = item["name"] + "のパーツは" + texts + "です。";

document.getElementById("test").textContent = item["a"]["b"];

document.getElementById("test2").textContent = item["c"];

console.table(item);