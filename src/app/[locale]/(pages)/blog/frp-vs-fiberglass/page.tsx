'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';

export default function FRPvsFiberglassPage() {
  return (
    <main className="flex flex-col items-center justify-center py-20 px-6 md:px-16 lg:px-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl w-full"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          FRP vs Fiberglass:{' '}
          <span className="text-red-600">Are They the Same?</span>
        </h1>

        {/* INTRO SECTION */}
        <section className="mb-16 space-y-6">
          <p>
            Fiberglass is a type of FRP (fiber-reinforced polymer) using glass
            fibers, offering affordability and versatility for general
            applications like construction and marine projects. FRP encompasses
            a broader range of fibers (e.g., carbon, aramid) for specialized,
            high-performance needs. Choose based on budget, strength, and
            environmental conditions.
          </p>
          <p>
            Confused about whether FRP or fiberglass is the right material for
            your project? This guide clarifies the differences and similarities
            between Fiber-Reinforced Plastic (FRP) vs fiberglass, two composite
            materials widely used in construction, marine, automotive, and
            energy industries.
          </p>
          <div className="flex justify-center">
            <Image
              src="/image/blog/frpvs/2.webp"
              alt="FRP vs Fiberglass comparison"
              width={300}
              height={250}
              className="rounded-2xl shadow-md"
            />
          </div>
        </section>

        {/* SECTION 1 */}
        <section className="mb-16 space-y-6">
          <h2 className="text-3xl font-semibold">
            1. What is Fiberglass? Understanding the Basics
          </h2>
          <p>
            Fiberglass is a type of reinforced material made by weaving or
            matting glass fibers together and combining them with a plastic
            resin. The result? A strong, lightweight material that’s
            surprisingly versatile.
          </p>
          <p>
            To make fiberglass, manufacturers start by melting raw glass and
            pulling it into fine threads, which are woven or chopped depending
            on the application. These fibers are then combined with
            resin—usually polyester or epoxy—to create a durable composite.
          </p>
          <p>
            Fiberglass isn’t a standalone material; it needs resin to hold
            everything together. You might also hear it called glass
            fiber-reinforced plastic (GFRP) or simply glass fiber composite—one
            of the most cost-effective composite materials on the market.
          </p>
          <div className="flex justify-center">
            <Image
              src="/image/blog/frpvs/3.webp"
              alt="Fiberglass production process"
              width={300}
              height={250}
              className="rounded-2xl shadow-md "
            />
          </div>
        </section>

        {/* SECTION 2 */}
        <section className="mb-16 space-y-6">
          <h2 className="text-3xl font-semibold">
            2. What is FRP? Exploring Fiber-Reinforced Polymers
          </h2>
          <p>
            FRP, or fiber-reinforced polymer, is a composite made by combining
            strong fibers with a plastic matrix. The fibers give strength, and
            the polymer binds everything together.
          </p>
          <p>
            FRP can use many types of fibers — glass, carbon, aramid (Kevlar),
            or even basalt. The polymers used are typically epoxy, vinyl ester,
            or thermoplastics, depending on recyclability and performance needs.
          </p>
          <p>
            You’ll also see FRP categorized as GFRP (glass fiber), CFRP (carbon
            fiber), or AFRP (aramid fiber), each designed for specific
            mechanical or environmental requirements.
          </p>
        </section>

        {/* SECTION 3 */}
        <section className="mb-16 space-y-6">
          <h2 className="text-3xl font-semibold">
            3. Key Differences Between FRP and Fiberglass
          </h2>
          <p>
            While fiberglass is one type of FRP, there are key differences
            between the two:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Composition:</strong> FRP includes many fiber types, while
              fiberglass only uses glass fibers.
            </li>
            <li>
              <strong>Strength:</strong> Carbon or aramid FRPs outperform
              fiberglass in strength and stiffness.
            </li>
            <li>
              <strong>Weight:</strong> Fiberglass is lightweight; CFRP can be
              even lighter with more strength.
            </li>
            <li>
              <strong>Corrosion Resistance:</strong> Both resist corrosion, but
              resin type affects performance most.
            </li>
            <li>
              <strong>Cost:</strong> Fiberglass is cheaper; FRP with advanced
              fibers costs more but performs better.
            </li>
          </ul>
        </section>

        {/* SECTION 4 */}
        <section className="mb-16 space-y-6">
          <h2 className="text-3xl font-semibold">
            4. Similarities Between FRP and Fiberglass
          </h2>
          <p>
            Despite their differences, FRP and fiberglass share several traits:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Lightweight yet strong, ideal for transport and construction
              industries.
            </li>
            <li>Excellent corrosion resistance under ISO 12944 standards.</li>
            <li>Non-conductive, perfect for electrical insulation.</li>
            <li>
              Versatile across industries like energy, marine, and automotive.
            </li>
            <li>
              Often used interchangeably in casual discussions when referring to
              GFRP.
            </li>
          </ul>
        </section>

        {/* SECTION 5 */}
        <section className="mb-16 space-y-6">
          <h2 className="text-3xl font-semibold">
            5. Applications of FRP and Fiberglass in Industry
          </h2>
          <p>
            Both materials play key roles in construction, transportation, and
            energy sectors, but their use cases differ slightly.
          </p>
          <h3 className="text-2xl font-semibold mt-4">
            Common Uses of Fiberglass
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Construction: roofing panels, insulation, wall reinforcements
            </li>
            <li>Automotive: body kits, hoods, bumpers, RV panels</li>
            <li>Marine: boat hulls, decks, storage tanks</li>
            <li>Consumer: ladders, surfboards, electrical insulation</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6">Common Uses of FRP</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Infrastructure: bridges, beams, rebar</li>
            <li>Industrial: tanks, corrosion-resistant grating, cable trays</li>
            <li>Transportation: aircraft parts, train interiors</li>
            <li>
              Energy: wind turbine blades, solar frames, oil & gas systems
            </li>
          </ul>

          <p className="mt-4">
            <strong>Choosing the Right Material:</strong> Use fiberglass for
            general needs; FRP for custom, high-performance requirements.
          </p>
        </section>

        {/* RECENT BLOGS */}
        <div className="border-t border-gray-300 pt-10 mt-16">
          <h2 className="text-3xl font-bold mb-10 text-center">Recent Blogs</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title:
                  'PET Masterbatch: High-Performance Additives for Polyethylene Terephthalate Processing',
                image: '/image/blog/blog4/1.jpg',
                slug: '/blog/pet-masterbatch',
              },
              {
                title:
                  'Glass Fiber Reinforced Plastic: Sustainable Industry Solutions',
                image: '/image/blog/blog3/1.jpg',
                slug: '/blog/glass-fiber',
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
                  <div className="absolute inset-0 bg-gradient-to-t from-red-600/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
