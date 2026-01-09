let data = [];
let target = 0;
let i = 0;
let l = 0;
let r = 0;
let type = "";

function draw(pos = -1) {
    let v = document.getElementById("view");
    v.innerHTML = "";
    data.forEach((n, x) => {
        let d = document.createElement("div");
        d.className = "box";
        d.innerText = n;
        if (x === pos) d.classList.add("on");
        v.appendChild(d);
    });
}

function linearStart() {
    data = document.getElementById("arr").value.split(",").map(Number);
    target = Number(document.getElementById("key").value);
    i = 0;
    type = "linear";
    draw();
    document.getElementById("text").innerText = "Linear search started.";
}

function binaryStart() {
    data = document.getElementById("arr").value.split(",").map(Number);
    target = Number(document.getElementById("key").value);
    l = 0;
    r = data.length - 1;
    type = "binary";
    draw();
    document.getElementById("text").innerText = "Binary search started.";
}

function step() {
    if (type === "linear") {
        if (i >= data.length) {
            document.getElementById("text").innerText = "Not found.";
            return;
        }
        draw(i);
        if (data[i] === target) {
            document.getElementById("text").innerText = "Found at index " + i;
            return;
        }
        document.getElementById("text").innerText = "Checking index " + i;
        i++;
    }

    if (type === "binary") {
        if (l > r) {
            document.getElementById("text").innerText = "Not found.";
            return;
        }
        let m = Math.floor((l + r) / 2);
        draw(m);
        if (data[m] === target) {
            document.getElementById("text").innerText = "Found at index " + m;
            return;
        }
        if (data[m] < target) l = m + 1;
        else r = m - 1;
        document.getElementById("text").innerText = "Range updated.";
    }
}
