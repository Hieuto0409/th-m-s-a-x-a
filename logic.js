const input = document.querySelector("input");
const Push = document.querySelector(".Push");
const UL = document.querySelector("ul");
const array = [];

Push.onclick = () => {
  const Value = input.value;
  Value === "" ? array.push() : array.push(Value);
  Reset();
  Render(array);
};
const Reset = () => {
  input.value = "";
};
const Render = (array) => {
  const abc = array.map((value, num) => {
    return `<li class="items-${num}">${value} <button onclick=Delete(${num})>xóa</button> <button onclick=Fix(${num})>sửa</button> </li>`;
  });
  UL.innerHTML = abc.join("");
};
const Delete = (num) => {
  array.splice(num, 1);
  Render(array);
};
const Fix = (num) => {
  var Items = document.querySelector(".items-" + num);
  Items.innerHTML = `<input class='id-${num}' type='text' > <button onclick=FixRender(${num})>sửa</button>`;
};
const FixRender = (num, Items) => {
  const Input = document.querySelector(".id-" + num);
  var Items = document.querySelector(".items-" + num);
  array[num] = Input.value;
  Items.innerHTML = `<li class="items-${num}">${Input.value} <button onclick=Delete(${num})>xóa</button> <button onclick=Fix(${num})>sửa</button> </li>`;
};
