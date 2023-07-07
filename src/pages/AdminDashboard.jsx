import React, { useState } from "react";

import UpdateAnddelete from "../Components/UpdateAnddelete";
import { useProductContext } from "../context/ProductContext";

const AdminDashboard = () => {
  const [formData, setFormData] = useState({
    Id: "",
    title: "",
    description: "",
    price: "",
    discountPercentage: "",
    rating: "",
    stock: "",
    brand: "",
    category: "",
    thumbnail: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
  });
  const { products } = useProductContext();
  console.log(products);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,

      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform submit action or validation
    console.log(formData);

    const {
      Id,
      brand,
      category,
      description,
      discountPercentage,
      images,
      price,
      rating,
      stock,
      thumbnail,
      title,
    } = formData;

    try {
      if (
        brand.trim() === "" ||
        category.trim() === "" ||
        description.trim() === "" ||
        discountPercentage.trim() === "" ||
        Id.trim() === "" ||
        price.trim() === "" ||
        rating.trim() === "" ||
        stock.trim() === "" ||
        thumbnail.trim() === "" ||
        title.trim() === ""
      ) {
        alert("please fill all the data");
      } else {
        await fetch("https://backendserver-flsp.onrender.com/newProduct", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }).then((res) => {
          alert("New Product Added ");
        });
      }
    } catch (error) {
      console.error("Failed to Add new Product :", error);
    }
  };
  // useEffect(() => {
  //   const allProducts = async () => {
  //     const res = await axios.get("http://localhost:4000/products");

  //     const products = await res.data;
  //     console.log(products);
  //   };
  //   allProducts();
  // }, []);
  const update = async (e) => {
    e.preventDefault();
    // Perform submit action or validation
    console.log(formData);
    const id = products.Id;

    try {
      await fetch(`https://backendserver-flsp.onrender.com/update/:${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((res) => {
        alert("New Product Added ");
      });
    } catch (error) {
      console.error("Failed to Add new Product :", error);
    }
  };
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="Id"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                ID
              </label>
              <input
                type="text"
                id="Id"
                name="Id"
                value={formData.Id}
                onChange={handleChange}
                className="border-gray-300 border rounded-md px-3 py-2 w-full"
              />
            </div>
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="border-gray-300 border rounded-md px-3 py-2 w-full"
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="border-gray-300 border rounded-md px-3 py-2 w-full"
              ></textarea>
            </div>
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Price
              </label>
              <input
                type="text"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="border-gray-300 border rounded-md px-3 py-2 w-full"
              />
            </div>
            <div>
              <label
                htmlFor="discount"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                DiscountPercentage
              </label>
              <input
                type="text"
                id="discountPercentage"
                name="discountPercentage"
                value={formData.discountPercentage}
                onChange={handleChange}
                className="border-gray-300 border rounded-md px-3 py-2 w-full"
              />
            </div>
            <div>
              <label
                htmlFor="rating"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Rating
              </label>
              <input
                type="text"
                id="rating"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                className="border-gray-300 border rounded-md px-3 py-2 w-full"
              />
            </div>
            <div>
              <label
                htmlFor="stock"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Stock
              </label>
              <input
                type="text"
                id="stock"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                className="border-gray-300 border rounded-md px-3 py-2 w-full"
              />
            </div>
            <div>
              <label
                htmlFor="brand"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Brand
              </label>
              <input
                type="text"
                id="brand"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                className="border-gray-300 border rounded-md px-3 py-2 w-full"
              />
            </div>
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Category
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="border-gray-300 border rounded-md px-3 py-2 w-full"
              />
            </div>
            <div>
              <label
                htmlFor="thumbnail"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Thumbnail
              </label>
              <input
                type="text"
                id="thumbnail"
                name="thumbnail"
                value={formData.thumbnail}
                onChange={handleChange}
                className="border-gray-300 border rounded-md px-3 py-2 w-full"
              />
            </div>
            <div>
              <label
                htmlFor="image1"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Image 1
              </label>
              <input
                type="text"
                id="image1"
                name="image1"
                onChange={handleChange}
                className="border-gray-300 border rounded-md px-3 py-2 w-full"
              />
            </div>
            <div>
              <label
                htmlFor="image2"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Image 2
              </label>
              <input
                type="text"
                id="image2"
                name="image2"
                onChange={handleChange}
                className="border-gray-300 border rounded-md px-3 py-2 w-full"
              />
            </div>
            <div>
              <label
                htmlFor="image3"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Image 3
              </label>
              <input
                type="text"
                id="image3"
                name="image3"
                onChange={handleChange}
                className="border-gray-300 border rounded-md px-3 py-2 w-full"
              />
            </div>
            <div>
              <label
                htmlFor="image4"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Image 4
              </label>
              <input
                type="text"
                id="image4"
                name="image4"
                onChange={handleChange}
                className="border-gray-300 border rounded-md px-3 py-2 w-full"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Save
          </button>
        </form>
      </div>
      {products &&
        products.map((curElem, index) => {
          return <UpdateAnddelete key={index} {...curElem} update={update} />;
        })}
    </>
  );
};

export default AdminDashboard;
