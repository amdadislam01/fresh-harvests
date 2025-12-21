import React from "react";
import blog1 from "../../assets/blog-1.png";
import blog2 from "../../assets/blog-2.png";
import blog3 from "../../assets/blog-3.png";
import group1 from '../../assets/Group-1.png'
import { FaArrowRight } from "react-icons/fa";

const blogData = [
  {
    id: 1,
    image: blog1,
    date: "December 20, 2025",
    title: "Exploring Winter Delights: A Guide to What's Fresh Right Now",
  },
  {
    id: 2,
    image: blog2,
    date: "December 20, 2025",
    title:
      "Mastering Winter Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads",
  },
  {
    id: 3,
    image: blog3,
    date: "December 20, 2025",
    title:
      "The Art of Winter Meal Prepping: How to Save Time and Eat Healthy Throughout the Week",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen font-sans">
      <img src={group1} alt="" className="absolute right-[20%] mt-16 md:block hidden" />
      <header className="py-8 text-center">
        <div className="inline-block rounded-md bg-[#f1f5ec] px-6 py-2 text-md font-medium text-[#749b3f] rubik-font">
          Our Blog
        </div>
        <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 rubik-font">
          Fresh Harvest Blog
        </h1>
        <p className="mt-6 max-w-2xl mx-auto md:text-md text-sm md:px-0 px-4 text-gray-600">
          Welcome to the Fresh Harvest Blog, your go-to resource for all things
          related to fresh produce, healthy eating, and culinary inspiration.
        </p>
      </header>

      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {blogData.map((blog) => (
            <article key={blog.id} className="group cursor-pointer">
              <div className="overflow-hidden rounded-3xl shadow-lg">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <p className="mt-6 text-sm text-gray-500">{blog.date}</p>

              <h2 className="mt-2 text-md font-semibold text-gray-900 rubik-font">
                {blog.title}
              </h2>

              <a
                href="#"
                className="mt-4  gap-2 inline-flex items-center text-[#ff6a19] font-bold hover:underline"
              >
                Read More <FaArrowRight />
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
