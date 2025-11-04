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
          Fiberglass vs Carbon Fiber Reinforced Plastic: Which One Should You
          Use and Why?
        </h1>

        {/* INTRO SECTION */}
        <section className="mb-16 space-y-6">
          <p>
            Are you struggling to choose between fiberglass and carbon fiber for
            your next project? With so many differences in strength, weight,
            cost, and performance, making the right decision can feel
            overwhelming—especially when precision matters. This article breaks
            down everything you need to know about GFRP (glass fiber reinforced
            plastic) and CFRP (carbon fiber reinforced plastic) to help you
            compare their pros, cons, and ideal applications—so you can pick the
            right material with confidence.
          </p>
          <h3>TL;DR: Quick Guide to Choosing GFRP vs CFRP</h3>
          <ul>
            <li>
              <strong>Fiberglass (GFRP):</strong> Cheaper, flexible,
              impact-resistant, ideal for boats, construction, and budget
              projects.
            </li>
            <li>
              <strong>Carbon Fiber (CFRP):</strong> Stronger, lighter, pricier,
              best for aerospace, sports, and high-performance vehicles.
            </li>
            <li>
              <strong>Eco-Friendly?</strong> GFRP uses less energy to produce
              but is harder to recycle; CFRP recycling is improving but costly.
            </li>
          </ul>
        </section>

        {/* SECTION 1 */}
        <section className="mb-16 space-y-6">
          <h2 className="text-3xl font-semibold">
            1. Head-to-Head Comparison: Fiberglass vs Carbon Fiber
          </h2>
          <p>
            When it comes to performance materials, fiberglass and carbon fiber
            are both popular—but they serve very different needs. Let’s break
            them down side-by-side, so you can clearly see where each one shines
            and where it might fall short.
          </p>
          <h2 className="text-3xl font-semibold">
            1.1. Material Composition & Manufacturing
          </h2>
          <p>
            Fiberglass, or GFRP (glass fiber reinforced plastic), is made by
            weaving glass fibers (e.g., E-glass or S-glass) into mats, bonded
            with resins like polyester or epoxy. E-glass is cost-effective,
            while S-glass offers enhanced strength for demanding applications.
            Manufacturing via hand layup or resin transfer molding (RTM) is
            scalable, per ASTM D6507.
          </p>
          <p>
            Carbon fiber, or CFRP (carbon fiber reinforced plastic), uses
            high-strength carbon filaments (e.g., PAN-based) set in epoxy resin
            for superior stiffness. Its production, like autoclave curing,
            demands precision and specialized equipment, increasing costs.
          </p>
          <div className="flex justify-center">
            <Image
              src="/image/blog/fiber/1.jpg"
              alt="FRP vs Fiberglass comparison"
              width={500}
              height={450}
              className="rounded-2xl shadow-md"
            />
          </div>
        </section>

        {/* SECTION 2 */}
        <section className="mb-16 space-y-6">
          <h2 className="text-3xl font-semibold">1.2. Mechanical Properties</h2>
          <p>
            If you’re looking for raw strength and stiffness, carbon fiber takes
            the win. It has a much higher tensile strength and stiffness (aka
            “Young’s modulus”) than fiberglass. That means it resists stretching
            or bending better under stress.
          </p>
          <p>
            But here’s the catch: carbon fiber is more brittle. It can crack or
            fail suddenly under extreme impact, while fiberglass tends to bend
            or absorb shock.
          </p>
          <h2 className="text-3xl font-semibold">
            1.3. Flexibility & Damage Tolerance
          </h2>
          <p>
            Fiberglass is more forgiving when things go wrong. It absorbs impact
            without cracking right away. That’s why it’s a go-to for boat hulls,
            car panels, and construction materials.
          </p>
          <p>
            Carbon fiber is stiff and light, but it doesn’t flex much. Under a
            sudden hit or drop, it can fracture instead of bending.
          </p>
          <h2 className="text-3xl font-semibold">
            1.4 Thermal & Electrical Behavior
          </h2>
          <p>This is where things get technical—but we’ll keep it simple.</p>
          <p>
            Fiberglass doesn’t conduct electricity. It’s a great insulator and
            can handle high temperatures without deforming. It’s often used in
            electrical and industrial settings for that reason.
          </p>
          <p>
            Carbon fiber, on the other hand, does conduct electricity. That’s
            great for some aerospace or automotive applications, but risky
            around electronics or in corrosive environments unless properly
            insulated.
          </p>
        </section>

        {/* SECTION 3 */}
        <section className="mb-16 space-y-6">
          <h2 className="text-3xl font-semibold">
            2. Application-wise Suitability: Where Each Material Works Best
          </h2>
          <p>
            Now that you know how fiberglass and carbon fiber compare in terms
            of performance, let’s look at where each material really shines in
            the real world. Choosing the right one depends on what you
            need—budget, strength, flexibility, or durability.
          </p>
          <h2 className="text-3xl font-semibold">
            2.1 Best for Budget and Everyday Use: Fiberglass
          </h2>
          <p>
            If you’re working with a tight budget or mass production, fiberglass
            (GFRP plastic) is the go-to material. It’s widely used in:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Construction :</strong> (like wall panels, roofing,
              rebar). GFRP rebar in bridges reduced costs by 20% compared to
              steel while resisting corrosion (per ASTM C581).
            </li>
            <li>
              <strong>Marine :</strong> products (boats, kayaks) fiberglass in
              strength and stiffness.
            </li>
            <li>
              <strong>Automotive :</strong> parts (body panels, spoilers)
            </li>
            <li>
              <strong>Consumer goods:</strong> (tubs, helmets, storage tanks)
            </li>
          </ul>
          <p>
            Why? It’s cheaper, easier to shape, and more forgiving when it comes
            to impact and wear. You can mold it into complex shapes without
            expensive equipment, and repairs are simple and affordable.
          </p>

          <h2 className="text-3xl font-semibold">
            2.2 Best for Performance and Precision: Carbon Fiber
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Aerospace and Aviation:</strong> aircraft frames,
              satellite components — Boeing’s 787 Dreamliner uses{' '}
              <strong>50% CFRP</strong>, cutting weight by <strong>20%</strong>{' '}
              and improving fuel efficiency by <strong>15%</strong>.
            </li>
            <li>
              <strong>High-End Automotive:</strong> supercars and Formula 1
              bodywork where lightweight strength is crucial.
            </li>
            <li>
              <strong>Sports Equipment:</strong> racing bikes, tennis rackets,
              and performance gear that benefit from CFRP’s stiffness-to-weight
              ratio.
            </li>
            <li>
              <strong>Medical Devices:</strong> prosthetics, braces, and
              orthopedic supports designed for precision and durability.
            </li>
          </ul>
          <p>
            What sets CFRP apart is its high strength-to-weight ratio and
            rigidity. In industries where every gram counts, CFRP delivers
            unmatched performance.
          </p>
          <div className="flex justify-center">
            <Image
              src="/image/blog/fiber/2.jpg"
              alt="FRP vs Fiberglass comparison"
              width={500}
              height={450}
              className="rounded-2xl shadow-md"
            />
          </div>
        </section>

        {/* SECTION 4 */}
        <section className="mb-16 space-y-6">
          <h2 className="text-3xl font-semibold">
            3. Cost Comparison: Breaking Down the Numbers
          </h2>
          <section className="mb-16">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Feature Comparison: GFRP vs CFRP
            </h3>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 rounded-2xl overflow-hidden">
                <thead className="bg-gray-100 text-gray-800">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold text-sm">
                      Feature
                    </th>
                    <th className="px-6 py-3 text-left font-semibold text-sm">
                      Fiberglass (GFRP)
                    </th>
                    <th className="px-6 py-3 text-left font-semibold text-sm">
                      Carbon Fiber (CFRP)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4">Material Cost (per kg)</td>
                    <td className="px-6 py-4">~$2–$5</td>
                    <td className="px-6 py-4">~$20–$50</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Manufacturing Cost</td>
                    <td className="px-6 py-4">Low to moderate</td>
                    <td className="px-6 py-4">High</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Tooling Requirements</td>
                    <td className="px-6 py-4">Basic molds</td>
                    <td className="px-6 py-4">Specialized equipment</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Repair Cost</td>
                    <td className="px-6 py-4">Low</td>
                    <td className="px-6 py-4">High</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Production Scale</td>
                    <td className="px-6 py-4">Ideal for mass production</td>
                    <td className="px-6 py-4">
                      Best for high-end, low-volume parts
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
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
                title: 'FRP vs Fiberglass: Are They the Same?',
                image: '/image/blog/frpvs/1.jpg',
                slug: '/blog/frp-vs-fiberglass',
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
