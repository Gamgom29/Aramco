'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';

export default function PET() {
  return (
    <main className="flex flex-col items-center justify-center py-20 px-6 md:px-16 lg:px-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl w-full"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          PET Masterbatch: High-Performance Additives for Polyethylene
          Terephthalate Processing
        </h1>

        {/* INTRO SECTION */}
        <section className="mb-16 space-y-6">
          <p>
            Ever wondered why your favorite soda bottle stays crystal clear and
            sturdy? It’s thanks to clever innovations like PET masterbatch. The
            global polyethylene terephthalate market is booming. It hit about
            $47 billion in 2024. And it’s set to reach over $52 billion in 2025.
            That’s massive growth, driven by demand in packaging, textiles, and
            more.
          </p>
          <p>
            PET, or polyethylene terephthalate, is a versatile plastic resin.
            You see it everywhere—from water bottles to clothing fibers. But raw
            PET isn’t perfect on its own. It needs a boost for color, strength,
            or protection. That’s where PET masterbatch comes in.
          </p>
          <p>
            In this guide, we’ll dive deeper. You’ll learn about types,
            applications, and how to choose the best. Ready to optimize your PET
            processing? Contact Aramco Egypt for a free sample consultation
            today. Let’s make your products stand out.
          </p>
          <h2 className="text-3xl font-semibold">What is PET Masterbatch?</h2>

          <p className="font-semibold">
            PET masterbatch is a concentrated formulation consisting of pellets
            that contain pigments, fillers, or additives dispersed within a
            polyethylene terephthalate carrier resin. This precise dispersion
            ensures uniform integration during manufacturing processes such as
            extrusion, blow molding, or fiber spinning.
          </p>
          <p>
            Unlike messy liquid colorants, masterbatch reduces dust and handling
            issues. It delivers consistent dispersion, preventing streaks or
            uneven colors. It works with both virgin and recycled PET. This
            versatility suits packaging, textiles, and more.
          </p>

          <p>
            By optimizing resin performance, PET masterbatch cuts waste and
            meets high industry standards. It’s a must for quality production.
          </p>
          <div className="flex justify-center">
            <Image
              src="/image/blog/blog4/2.jpg"
              alt="FRP vs Fiberglass comparison"
              width={500}
              height={450}
              className="rounded-2xl shadow-md"
            />
          </div>
          <h2 className="text-3xl font-semibold">
            Types of PET Masterbatch: From Color Concentrates to Functional
            Fillers
          </h2>
          <h2 className="text-red-600 font-bold text-3xl">
            PET Color Masterbatch
          </h2>
          <p>
            Want your PET bottles to pop with color? Color masterbatches are the
            answer. These pellets pack pigments into a PET carrier, delivering
            bold, consistent hues.
          </p>
          <p>
            Think clear blues for water bottles or amber tones for pharma
            packaging. They offer transparent or opaque options, even special
            effects like pearlescent or frosted finishes.{' '}
          </p>
          <p>
            Manufacturers can match exact brand shades, hitting Delta E
            tolerances below 1 for precision
          </p>
          <p>
            Compatible with recycled PET, they’re eco-friendly too. Whether it’s
            a sleek soda bottle or a vibrant cosmetic jar, color masterbatches
            ensure your product stands out on the shelf.
          </p>
          <div className="flex justify-center">
            <Image
              src="/image/blog/blog4/3.jpg"
              alt="FRP vs Fiberglass comparison"
              width={500}
              height={450}
              className="rounded-2xl shadow-md"
            />
          </div>
        </section>

        {/* SECTION 1 */}
        <section className="mb-16 space-y-6">
          <h2 className="text-red-600 font-bold text-3xl">
            PET Additive Masterbatch
          </h2>
          <p>
            PET additive masterbatches do more than look pretty—they boost
            performance. These pellets add features like UV protection, keeping
            sunlight-sensitive products safe with less than 10% light
            transmission.
          </p>
          <p>
            Antiblock additives prevent films from sticking during production,
            perfect for smooth packaging rolls.
          </p>
          <p>
            Slip agents reduce friction for easier processing, ideal for
            high-speed lines.
          </p>
          <p>
            You’ll also find options like antistatic agents or flame retardants.
            Each type enhances PET’s functionality, ensuring your bottles or
            films meet specific needs without compromising quality.
          </p>
          <h2 className="text-red-600 font-bold text-3xl">
            PET Filler Masterbatch
          </h2>

          <p>
            Looking to save costs without cutting corners? PET filler
            masterbatch, like those with calcium carbonate, are your go-to. They
            can make up 30% of the pellet, adding opacity and density to
            bottles. This cuts down on expensive raw PET while maintaining
            strength.
          </p>
          <p>
            Alternatives like talc or barium sulfate offer similar benefits.
            These fillers also improve sustainability, reducing reliance on
            virgin resins and supporting recycled PET use.{' '}
          </p>
          <p>
            For example, they’re perfect for opaque milk jugs or durable trays,
            balancing cost and eco-conscious production.
          </p>

          <div className="flex justify-center">
            <Image
              src="/image/blog/blog4/4.jpg"
              alt="FRP vs Fiberglass comparison"
              width={500}
              height={450}
              className="rounded-2xl shadow-md"
            />
          </div>
        </section>

        {/* RECENT BLOGS */}
        <div className="border-t border-gray-300 pt-10 mt-16">
          <h2 className="text-3xl font-bold mb-10 text-center">Recent Blogs</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title:
                  'Glass Fiber Reinforced Plastic: Sustainable Industry Solutions',
                image: '/image/blog/blog3/1.jpg',
                slug: '/blog/glass-fiber',
              },
              {
                title:
                  'Fiberglass vs Carbon Fiber Reinforced Plastic: Which One Should You Use and Why?',
                image: '/image/blog/frpvs/1.jpg',
                slug: '/blog/frp-vs-fiberglass',
              },
              {
                title: 'Sustainable Materials Revolution',
                image: '/image/blog/fiber/1.jpg',
                slug: '/blog/fiberglass-vs-carbon',
              },
            ].map((blog, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="flex flex-col rounded-3xl overflow-hidden shadow-lg bg-white group hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={400}
                    height={250}
                    className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-600/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-4">{blog.title}</h3>
                  <div className="mt-auto">
                    <Link
                      href={blog.slug}
                      className="inline-block bg-red-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors duration-300"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </main>
  );
}
