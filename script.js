const menuItems = [
  {
    id: 1,
    name: "Gado-gado Special",
    description:
      "Vegetables, egg, tempe, tofu, ketupat, peanut sauce, and kerupuk.",
    price: "Rp 20.000",
    image: "https://placekitten.com/200/150",
  },
  {
    id: 2,
    name: "Gado-gado Special",
    description:
      "Vegetables, egg, tempe, tofu, ketupat, peanut sauce, and kerupuk.",
    price: "Rp 20.000",
    image: "https://placekitten.com/201/151",
  },
  {
    id: 3,
    name: "Gado-gado Special",
    description:
      "Vegetables, egg, tempe, tofu, ketupat, peanut sauce, and kerupuk.",
    price: "Rp 20.000",
    image: "https://placekitten.com/202/152",
  },
  {
    id: 4,
    name: "Gado-gado Special",
    description:
      "Vegetables, egg, tempe, tofu, ketupat, peanut sauce, and kerupuk.",
    price: "Rp 20.000",
    image: "https://placekitten.com/203/153",
  },
  {
    id: 5,
    name: "Gado-gado Special",
    description:
      "Vegetables, egg, tempe, tofu, ketupat, peanut sauce, and kerupuk.",
    price: "Rp 20.000",
    image: "https://placekitten.com/204/154",
  },
  {
    id: 6,
    name: "Gado-gado Special",
    description:
      "Vegetables, egg, tempe, tofu, ketupat, peanut sauce, and kerupuk.",
    price: "Rp 20.000",
    image: "https://placekitten.com/205/155",
  },
  {
    id: 7,
    name: "Gado-gado Special",
    description:
      "Vegetables, egg, tempe, tofu, ketupat, peanut sauce, and kerupuk.",
    price: "Rp 20.000",
    image: "https://placekitten.com/206/156",
  },
  {
    id: 8,
    name: "Gado-gado Special",
    description:
      "Vegetables, egg, tempe, tofu, ketupat, peanut sauce, and kerupuk.",
    price: "Rp 20.000",
    image: "https://placekitten.com/207/157",
  },
  {
    id: 9,
    name: "Gado-gado Special",
    description:
      "Vegetables, egg, tempe, tofu, ketupat, peanut sauce, and kerupuk.",
    price: "Rp 20.000",
    image: "https://placekitten.com/208/158",
  },
];

const menuItemsSection = document.querySelector("section");
const selectedMenuList = document.getElementById("selected-menu-list");
let selectedItems = [];

function renderMenuItems() {
  menuItemsSection.innerHTML = menuItems
    .map(
      (item) => `
          <div class="bg-white rounded-md shadow-md p-2 cursor-pointer menu-item" data-id="${item.id}">
               <div class="relative">
                  <img src="${item.image}" alt="${item.name}" class="rounded-md w-full h-32 object-cover mb-2">
                   <span class="absolute top-2 right-2 bg-green-500 text-white text-xs py-1 px-2 rounded-md">Food</span>
               </div>
              <h3 class="font-bold text-gray-800 mb-1">${item.name}</h3>
              <p class="text-gray-600 text-sm mb-2">${item.description}</p>
              <div class="flex justify-between items-center">
                  <span class="font-semibold text-blue-500">${item.price} / portion</span>
                 <i class="fas fa-share-alt text-gray-500"></i>
              </div>
  
          </div>
      `
    )
    .join("");
  // Attach click listeners after rendering
  document.querySelectorAll(".menu-item").forEach((item) => {
    item.addEventListener("click", handleMenuItemClick);
  });
}
renderMenuItems();

function updateSelectedMenuList() {
  if (selectedItems.length === 0) {
    selectedMenuList.innerHTML =
      '<p class="text-gray-400 text-center mt-20">No Menu Selected</p>';
  } else {
    selectedMenuList.innerHTML = selectedItems
      .map(
        (item, index) => `
            <div class="flex items-center justify-between py-2 px-2 mb-2 border-b">
                 <div class="flex items-center">
                     <span class="rounded-full w-6 h-6 bg-gray-300 text-gray-700 text-center mr-2">${
                       index + 1
                     }</span>
                     <div class="">
                          <p class="font-semibold text-sm">${item.name}</p>
                           <p class="text-gray-500 text-xs">${item.price}</p>
                       </div>
                  </div>
                  <button data-id="${
                    item.id
                  }" class="remove-item"><i class="fas fa-trash text-red-500"></i></button>
            </div>
        `
      )
      .join("");
    // attach remove event listener
    document.querySelectorAll(".remove-item").forEach((item) => {
      item.addEventListener("click", handleRemoveItem);
    });
  }
}

function handleMenuItemClick(event) {
  const itemId = parseInt(event.currentTarget.getAttribute("data-id"));
  const item = menuItems.find((item) => item.id === itemId);
  if (item) {
    selectedItems.push(item);
    updateSelectedMenuList();
  }
}
function handleRemoveItem(event) {
  const itemId = parseInt(event.currentTarget.getAttribute("data-id"));
  selectedItems = selectedItems.filter((item) => item.id !== itemId);
  updateSelectedMenuList();
}
