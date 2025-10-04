const $ = id => document.getElementById(id);

const defaultProducts = [
  {id:1, title:'5ml مرطب كوزمتكس', price:100, desc:'كريم مرطب حلزوني، مثل كريم كوزركس المتقدم 92 للحلزون الكل في واحد، هو كريم يجمع بين 92% من مخاط الحلزون النقي مع مكونات أخرى لترطيب البشرة بعمق. يعزز ترطيب البشرة ويجدد حاجزها الواقي، مما يوفر ترطيبًا طويل الأمد. يُعالج أيضًا تهيج البشرة، يحسن من مرونتها، ويقلل من ظهور التجاعيد والبقع الداكنة والندوب. مناسب لجميع أنواع البشرة، بما في ذلك الجافة، الدهنية، والمعرضة لحب الشباب ', img:'images/product1.jpeg'},
  {id:2, title:'5ml سيرم كوزمتكس', price:100, desc:'مستخلص سيروم الحلزون للبشره خفيف الوزن يمتص في البشرة بسرعة ليمنح البشرة توهجًا طبيعيًا من الداخل. يتكون هذا الجوهر من الحلزون المفلتر المغذي والمنخفض التحفيز للحفاظ على بشرتك رطبة ومشرقة طوال اليوم. يعمل على تلاشي البقع الداكنة وتوحيد لون البشرة . يحسن نسيج الجلد', img:'images/product2.jpeg'},
  {id:3, title:'10ml فيتامين سي', price:85, desc:'سيروم فيتامين سي هو مستحضر للعناية بالبشرة غني بمضادات الأكسدة التي تحمي البشرة من الأضرار البيئية، وتحفز إنتاج الكولاجين لتقليل التجاعيد، وتفتيح البقع الداكنة، وتوحيد لون البشرة، وتحسين إشراقها ونضارتها بشكل عام. يُستخدم في الصباح أو المساء قبل مرطب الشمس أو الكريم الليلي، ويُفضل تطبيقه على بشرة نظيفة', img:'images/product3.jpeg'},
  {id:4, title:' 50gr ST.LVES', price:85, desc:'  يقلل من خطوط وتجاعيد وعلامات الشيخوخة بسبب احتوائه للكولاجين المضاد للشيخوخة الناتجة عن نقص إنتاج الكولاجين.يدعم الكولاجين والإيلاستين الأنسجة الضامة في البشرة مما يسمح لها بالاحتفاظ بمرونتها لكي لا تظهر أي خطوط أو تبدو مترهلة أو متضررة. خالٍ من البارابين وتم اختباره من قبل أطباء الجلدية', img:'images/product4.jpeg'},
  {id:5, title:' 50gr كريم النحت', price:75, desc:'كريم النحت لشفط بطن الولاده واي ترهلات ف الجسم والسيلولايت ', img:'images/product5.jpeg'},
  {id:6, title:' 5ml ماسك الكولاجين الكوري', price:125, desc:'ماسك الكولاجين الكوري الليلي هو قناع ليلي فاخر من ماركة ميديكيوب (Medicube)، يتميز بتركيبة غنية بالكولاجين البحري، يعمل على تعزيز مرونة البشرة، ترطيبها بعمق، وتقليل الخطوط الدقيقة والتجاعيد أثناء النوم. يترك طبقة حماية على البشرة تحتفظ بالرطوبة والمكونات النشطة، مما يساعد على تجديد خلايا البشرة وتغذيتها، وتكون النتائج عادةً بشرة أكثر نعومة، إشراقة، وحيوية في الصباح.', img:'images/product6.jpeg'},
  
];

const productsContainer = $("products");
const cartItems = $("cartItems");
const total = $("total");
const whatsappOrder = $("whatsappOrder");
const cartBtn = $("cartBtn");
const closeCartBtn = $("closeCart");
const cartDiv = $("cart");

let cartData = [];

function renderProducts() {
  productsContainer.innerHTML = "";
  defaultProducts.forEach(p => {
    productsContainer.innerHTML += `
      <div class="product">
        <img src="${p.img}" alt="${p.title}">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <p><strong>${p.price} EGP</strong></p>
        <button onclick="addToCart(${p.id})">أضف للسلة</button>
      </div>`;
  });
}

function addToCart(id) {
  const product = defaultProducts.find(p => p.id === id);
  cartData.push(product);
  renderCart();
}

function renderCart() {
  cartItems.innerHTML = "";
  let totalPrice = 0;

  cartData.forEach((item, index) => {
    totalPrice += item.price;
    cartItems.innerHTML += `
      <li>${item.title} - ${item.price} EGP 
        <button onclick="removeFromCart(${index})">❌</button>
      </li>`;
  });

  total.innerText = `الإجمالي: ${totalPrice} EGP`;

  let message = "طلب جديد:\n";
  cartData.forEach(item => {
    message += `- ${item.title}: ${item.price} EGP\n`;
  });
  message += `الإجمالي: ${totalPrice} EGP`;

  whatsappOrder.href = `https://wa.me/201207147614?text=${encodeURIComponent(message)}`;
}

function removeFromCart(index) {
  cartData.splice(index, 1);
  renderCart();
}

cartBtn.addEventListener("click", () => {
  cartDiv.classList.toggle("hidden");
});
closeCartBtn.addEventListener("click", () => {
  cartDiv.classList.add("hidden");
});

renderProducts();
