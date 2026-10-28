const foods = [
  {
    name: "ผัดไทย",
    desc: "อาหารไทยยอดนิยม ผัดเส้นจันท์กับกุ้ง ถั่วงอก ไข่ และน้ำมะขามเปียก โรยด้วยถั่วลิสง",
    price: "฿80",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/39/Phat_Thai_kung_Chang_Khien_street_stall.jpg?utm_source=th.wikipedia.org&utm_campaign=index&utm_content=original"
  },
  {
    name: "ต้มยำกุ้ง",
    desc: "ซุปรสจัดจ้าน ใส่กุ้งสด ตะไคร้ ใบมะกรูด ข่า และพริกขี้หนู",
    price: "฿120",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tom_yam_kung_maenam.jpg?utm_source=th.wikipedia.org&utm_campaign=index&utm_content=original"
  },
  {
    name: "พิซซ่า มาร์เกอริต้า",
    desc: "พิซซ่าอิตาเลียนคลาสสิก แป้งบาง ซอสมะเขือเทศ ชีส mozzarella และใบโหระพา",
    price: "฿299",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Neapolitan_pizza_at_Trappica_%2848701940197%29.jpg/1280px-Neapolitan_pizza_at_Trappica_%2848701940197%29.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail"
  },
  {
    name: "ซูชิ",
    desc: "ข้าวปั้นญี่ปุ่นหน้าปลาดิบสด ทานคู่กับซอสถั่วเหลืองและวาซาบิ",
    price: "฿250",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Sushi_platter.jpg?utm_source=th.wikipedia.org&utm_campaign=index&utm_content=original"
  },
  {
    name: "เบอร์เกอร์",
    desc: "เบอร์เกอร์เนื้อย่าง ชีส ผักสด และซอสพิเศษในขนมปังอบร้อน",
    price: "฿180",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH9U6R2O-n9yAKR7TpotQBvpqTIhIp-Xz6SZ0t2CjdBA&s=10"
  },
  {
    name: "ส้มตำ",
    desc: "ส้มตำไทย ตำมะละกอส้มกับถั่วฝักยาว มะเขือเทศ และน้ำปลา รสเปรี้ยวเผ็ด",
    price: "฿60",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0a/Som_tam_thai.JPG/330px-Som_tam_thai.JPG?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
  }
];

const imgEl = document.getElementById("foodImage");
const nameEl = document.getElementById("foodName");
const descEl = document.getElementById("foodDesc");
const priceEl = document.getElementById("foodPrice");
const btn = document.getElementById("randomBtn");

function randomFood() {
  const item = foods[Math.floor(Math.random() * foods.length)];
  imgEl.style.opacity = 0;
  setTimeout(() => {
    imgEl.src = item.image;
    imgEl.alt = item.name;
    nameEl.textContent = item.name;
    descEl.textContent = item.desc;
    priceEl.textContent = item.price;
    imgEl.style.opacity = 1;
  }, 200);
}

btn.addEventListener("click", randomFood);
randomFood();
