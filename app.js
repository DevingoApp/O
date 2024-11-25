// بيانات المنتجات
const products = [
  { 
    id: 1, 
    name: "كولاجين", 
    price: "$10", 
    image: "IMG-20241125-WA0002.jpg",
    description: "كولاجين طبيعي لدعم صحة البشرة والشعر والأظافر"
  },
  { 
    id: 2, 
    name: "NATURAL", 
    price: "$6.99", 
    image: "IMG-20241125-WA0001.jpg",
    description: "منتج NATURAL مميز بتركيبة طبيعية تحافظ على نضارة البشرة"
  },
  { 
    id: 3, 
    name: "كريم تفتيح البشرة", 
    price: "$35.56", 
    image: "IMG-20241125-WA0000.jpg",
    description: "كريم تفتيح فعال يساعد على توحيد لون البشرة وإزالة البقع الداكنة"
  }
];

// عرض الصفحة الرئيسية
function showHome() {
  const mainContent = document.getElementById("mainContent");
  mainContent.innerHTML = `
    <section class="product-list" id="productList">
      ${products.map(product => createProductCard(product)).join("")}
    </section>
  `;
}

// إنشاء كرت المنتج
function createProductCard(product) {
  return `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <h1>${product.name}</h1>
      <p><strong>السعر:</strong> ${product.price}</p>
      <button onclick="showProductDetails(${product.id})">عرض التفاصيل</button>
    </div>
  `;
}

// عرض تفاصيل المنتج
function showProductDetails(productId) {
  const product = products.find(p => p.id === productId);
  const mainContent = document.getElementById("mainContent");

  if (!product) {
    mainContent.innerHTML = "<p>المنتج غير موجود!</p>";
    return;
  }

  mainContent.innerHTML = `
    <section class="product-details">
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h1>${product.name}</h1>
        <p><strong>السعر:</strong> ${product.price}</p>
        <p><strong>الوصف:</strong> ${product.description}</p>
        <button onclick="addToCart(${product.id})">إضافة إلى السلة</button>
        <button onclick="showHome()">العودة</button>
      </div>
    </section>
  `;
}

// محاكاة إضافة المنتج إلى السلة
function addToCart(productId) {
  alert(`تم إضافة المنتج ${productId} إلى السلة!`);
}

// البحث بين المنتجات
function searchProducts() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(query)
  );

  const productList = document.getElementById("productList");
  productList.innerHTML = filteredProducts.map(product => createProductCard(product)).join("");

  if (filteredProducts.length === 0) {
    productList.innerHTML = "<p class='no-results'>لا توجد منتجات تطابق بحثك.</p>";
  }
}

// تحميل الصفحة الرئيسية عند فتح الموقع
document.addEventListener("DOMContentLoaded", showHome);
