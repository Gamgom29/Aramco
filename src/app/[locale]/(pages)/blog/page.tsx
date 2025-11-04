'use client';

import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import Image from 'next/image';

const blogs = [
  {
    slug: 'fiberglass-vs-carbon',
    title:
      'Fiberglass vs Carbon Fiber Reinforced Plastic: Which One Should You Use and Why?',
    excerpt:
      'Are you struggling to choose between fiberglass and carbon fiber for your next project? With so many differences in strength, weight, cost, and performance, making the right decision can feel overwhelming—especially when precision matters. This article breaks down everything you need to know about GFRP and CFRP ',
    image: '/image/blog/fiber/1.jpg',
    date: 'October 28, 2025',
  },
  {
    slug: 'frp-vs-fiberglass',
    title: 'FRP vs Fiberglass: Are They the Same?',
    excerpt:
      'Fiberglass is a type of FRP (fiber-reinforced polymer) using glass fibers, offering affordability and versatility for general applications like construction and marine projects. FRP encompasses a broader range of fibers (e.g., carbon, aramid) for specialized, high-performance needs. Choose based on budget, strength, and environmental conditions.',
    image: '/image/blog/frpvs/1.jpg',
    date: 'September 19, 2025',
  },
  {
    slug: 'glass-fiber',
    title: 'Glass Fiber Reinforced Plastic: Sustainable Industry Solutions',
    excerpt:
      'Struggling to find materials that are both strong and sustainable? Glass Fiber Reinforced Plastic (GFRP plastic) delivers high-performance durability without the environmental burden of traditional materials.',
    image: '/image/blog/blog3/1.jpg',
    date: 'August 10, 2025',
  },
  {
    slug: 'pet-masterbatch',
    title:
      'PET Masterbatch: High-Performance Additives for Polyethylene Terephthalate Processing',
    excerpt:
      'Ever wondered why your favorite soda bottle stays crystal clear and sturdy? It’s thanks to clever innovations like PET masterbatch. The global polyethylene terephthalate market is booming. It hit about $47 billion in 2024. And it’s set to reach over $52 billion in 2025. That’s massive growth, driven by demand in packaging, textiles, and more.',
    image: '/image/blog/blog4/1.jpg',
    date: 'July 1, 2025',
  },
];

export default function BlogsPage() {
  return (
    <section className="min-h-screen py-20 bg-white dark:bg-black containerr">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Latest Articles from{' '}
          <span className="text-red-600 dark:text-red-500">
            Aramco Plastic Industries
          </span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col rounded-3xl overflow-hidden shadow-lg bg-gray-100 dark:bg-black hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative w-full h-56">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {blog.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  {blog.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {blog.date}
                  </span>
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="inline-block bg-red-600 dark:bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
