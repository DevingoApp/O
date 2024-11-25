const products = [
  { 
    id: 1, 
    name: "كولاجين", 
    price: "$10", 
    image: "IMG-20241125-WA0002.jpg", // تأكد من وجود الصورة في نفس المسار
    description: "كولاجين طبيعي لدعم صحة البشرة والشعر والأظافر"
  },
  { 
    id: 2, 
    name: "NATURAL", 
    price: "$6.99", 
    image: "IMG-20241125-WA0001.jpg", // تأكد من وجود الصورة في نفس المسار
    description: "منتج NATURAL مميز بتركيبة طبيعية تحافظ على نضارة البشرة"
  },
  { 
    id: 3, 
    name: "كريم تفتيح البشرة", 
    price: "$35.56", 
    image: "IMG-20241125-WA0000.jpg", // تأكد من وجود الصورة في نفس المسار
    description: "كريم تفتيح فعال يساعد على توحيد لون البشرة وإزالة البقع الداكنة"
  }
];

// عند تحميل الصفحة الرئيسية
window.onload = () => {
  const productGrid = document.getElementById("productGrid");
  products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <a href="product.html?id=${product.id}">عرض التفاصيل</a>
    `;
    productGrid.appendChild(productCard);
  });
};

// البحث عن المنتجات
function searchProduct() {
  const searchQuery = document.getElementById("search").value.toLowerCase();
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery)
  );

  const productGrid = document.getElementById("productGrid");
  productGrid.innerHTML = ""; // مسح المنتجات الحالية
  filteredProducts.forEach(product => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <a href="product.html?id=${product.id}">عرض التفاصيل</a>
    `;
    productGrid.appendChild(productCard);
  });
}

// عرض تفاصيل المنتج في صفحة product.html
function showProductDetails() {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");
  const product = products.find(p => p.id == productId);

  if (!product) {
    document.getElementById("productDetails").innerHTML = "<p>المنتج غير موجود!</p>";
    return;
  }

  document.getElementById("productDetails").innerHTML = `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <h1>${product.name}</h1>
      <p><strong>السعر:</strong> ${product.price}</p>
      <p><strong>الوصف:</strong> ${product.description}</p>
      <button onclick="addToCart(${product.id})">إضافة إلى السلة</button>
    </div>
  `;
}

// استدعاء وظيفة عرض التفاصيل فقط عند فتح صفحة product.html
if (window.location.pathname.includes("product.html")) {
  showProductDetails();
}

// محاكاة إضافة المنتج إلى السلة
function addToCart(productId) {
  alert(`تم إضافة المنتج ${productId} إلى السلة!`);
}
