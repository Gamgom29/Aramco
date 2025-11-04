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
          Glass Fiber Reinforced Plastic: Sustainable Industry Solutions
        </h1>

        {/* INTRO SECTION */}
        <section className="mb-16 space-y-6">
          <p>
            Struggling to find materials that are both strong and sustainable?
            Glass Fiber Reinforced Plastic (GFRP palstic) delivers
            high-performance durability without the environmental burden of
            traditional materials. Used in everything from construction to wind
            energy, this fiberglass composite is reshaping how industries build
            smarter and greener.
          </p>
          <p>
            <strong>TL;DR:</strong> Glass Fiber Reinforced Plastic (GFRP) is a
            lightweight, durable, and eco-friendly composite material ideal for
            construction, automotive, and renewable energy projects. It offers
            high strength, corrosion resistance, and design flexibility compared
            to steel or carbon fiber. While recycling and upfront costs are
            challenges, innovations and long-term savings make GFRP a smart
            choice for sustainable building.
          </p>
          <h2 className="text-3xl font-semibold">
            1. What is Glass Fiber Reinforced Plastic?
          </h2>
          {/* <ul>
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
          </ul> */}
          <p>
            Glass Fiber Reinforced Plastic (GFRP) is a fiber-reinforced
            composite combining fine glass fibers with a plastic polymer matrix.
            The result is a lightweight, strong material essential in industries
            like construction, automotive, and renewable energy.
          </p>
          <p>
            At the core of GFRP are glass fibers, which provide the material’s
            strength. These fibers are extremely thin strands of glass, usually
            made in two main types: E-glass and S-glass.
          </p>
          <ul>
            <li>
              <strong>E-glass</strong>, or electrical-grade glass, is the most
              commonly used type. It offers good strength, corrosion resistance,
              and is relatively low-cost—perfect for general-purpose
              applications.
            </li>
            <li>
              <strong>S-glass</strong>, on the other hand, is known for its
              superior tensile strength and heat resistance. It’s often used
              where higher performance is required, such as in aerospace or
              high-stress components.
            </li>
          </ul>
          <p>
            But glass fibers alone don’t make the material work. They need a
            polymer matrix to hold them together and shape the final product.
            Common matrix materials include polyester, vinyl ester, and epoxy
            resins. These polymers bind the fibers, distribute stress across
            them, and give the composite its form and flexibility.
          </p>
          <p>
            The matrix also plays a big role in protecting the glass fibers from
            moisture, chemicals, and environmental wear. This combination of a
            tough matrix and high-strength fibers results in a composite that’s
            not only strong but also lightweight, corrosion-resistant, and
            long-lasting.
          </p>
          <div className="flex justify-center">
            <Image
              src="/image/blog/blog3/1.webp"
              alt="FRP vs Fiberglass comparison"
              width={500}
              height={450}
              className="rounded-2xl shadow-md"
            />
          </div>
        </section>

        {/* SECTION 1 */}
        <section className="mb-16 space-y-6">
          <h2 className="text-3xl font-semibold">
            2. Key Properties of GFRP: Why GFRP Outperforms Traditional
            Materials?
          </h2>
          <p>
            What makes Glass Fiber Reinforced Plastic (GFRP) stand out from
            traditional materials like steel or aluminum? It all comes down to
            performance. GFRP plastic offers a unique set of properties:
          </p>
          <ol>
            <li>
              <strong>High Strength-to-Weight Ratio:</strong> GFRP is incredibly
              strong for how light it is. In fact, it can be up to eight times
              stronger than steel—but without the added weight. That means
              structures can be built lighter, which lowers transport and
              installation costs. It’s a big reason why GFRP is used in
              everything from wind turbine blades to bridge decks.
            </li>
            <li>
              <strong>Corrosion Resistance:</strong> Unlike metal, GFRP doesn’t
              rust or corrode. It holds up in tough environments—saltwater,
              chemicals, humidity—with very little maintenance. That makes it
              perfect for marine, chemical, and coastal applications where
              durability matters most.
            </li>
            <li>
              <strong>Thermal and Electrical Insulation:</strong> GFRP doesn’t
              conduct heat or electricity, which opens up even more
              applications. From electrical enclosures to thermal barriers, it
              provides built-in insulation where metals would need extra
              materials or coatings.
            </li>
            <li>
              <strong>Design Flexibility:</strong> Because GFRP is formed in
              molds, it can be shaped into almost any form. Curves, angles,
              complex patterns—no problem. This design freedom helps reduce
              waste, lower production costs, and speed up manufacturing.
            </li>
            <li>
              <strong>Long-Term Durability:</strong> GFRP is tough. It handles
              stress, impact, and environmental exposure without cracking or
              breaking down. Its composite durability means products last longer
              and require fewer repairs over time.
            </li>
          </ol>
          <p>
            Together, these benefits make GFRP one of the top lightweight
            composite materials for today’s high-performance, cost-conscious,
            and sustainability-driven industries.
          </p>
          <h2 className="text-3xl font-semibold">
            3. How Does GFRP Compare to Steel and Carbon Fiber?
          </h2>
          <p>
            When choosing the right material for performance and cost, Glass
            Fiber Reinforced Plastic (GFRP) stands out as a cost-effective
            composite—especially when compared to steel and carbon fiber.
          </p>
          <h4 className="font-semibold">Cost</h4>
          <p>
            GFRP generally costs more than traditional steel at the start. But
            over time, it pays off. Why? Steel needs maintenance to prevent rust
            and corrosion. GFRP doesn’t. That means lower lifetime costs and
            fewer repairs. Compared to carbon fiber, GFRP is much cheaper—making
            it a smart choice for projects with budget limits
          </p>
          <h4 className="font-semibold">Performance</h4>
          <p>
            GFRP offers a high strength-to-weight ratio. It’s stronger than
            steel by weight, and much lighter, which reduces transport and
            installation costs. While carbon fiber is lighter and stronger, it’s
            also more brittle and significantly more expensive. GFRP strikes a
            good balance of durability and flexibility for most industrial
            needs.
          </p>
          <h4 className="font-semibold">Sustainability</h4>
          <p>
            Steel is fully recyclable, but it corrodes and requires
            energy-intensive production. GFRP is not as easily recycled, but it
            lasts longer in harsh environments. That means fewer replacements
            and less waste over time. In many cases, GFRP is the more
            eco-friendly material when total environmental impact is considered.
          </p>
          <p>
            If you’re looking for a material that offers strong performance,
            lower lifetime costs, and reliable durability, GFRP is a smart
            alternative to both steel and more expensive composites like carbon
            fiber.
          </p>
          <div className="flex justify-center">
            <Image
              src="/image/blog/blog3/2.jpg"
              alt="FRP vs Fiberglass comparison"
              width={500}
              height={450}
              className="rounded-2xl shadow-md"
            />
          </div>
        </section>

        {/* SECTION 2 */}
        <section className="mb-16 space-y-6">
          <h2 className="text-3xl font-semibold">
            4. Where Is Glass Fiber Reinforced Plastic Used in Real-World
            Projects?
          </h2>
          <p>
            Glass Fiber Reinforced Plastic (GFRP plastic) isn’t just a smart
            material—it’s a workhorse across industries. Its unique blend of
            strength, lightness, and corrosion resistance makes it ideal for
            demanding environments. Let’s take a closer look at how different
            sectors are using GFRP to solve real-world problems.
          </p>

          <h4 className="text-2xl font-semibold">1.Automotive Industry</h4>
          <p>
            In today’s auto world, reducing weight means improving fuel
            efficiency and lowering emissions. That’s why more carmakers are
            turning to GFRP.
          </p>

          <p>
            A great example is the BMW i3, which uses GFRP body panels to keep
            the vehicle light without sacrificing strength. GFRP also helps in
            electric vehicles by supporting lighter battery enclosures and
            crash-resistant components. It offers the right mix of durability
            and flexibility for modern car design.
          </p>
          <h4 className="text-2xl font-semibold">
            2. Construction and Infrastructure
          </h4>

          <p>
            GFRP is making a big impact in construction—especially in projects
            that fight against corrosion. GFRP rebar, for instance, is replacing
            steel in bridge decks, parking structures, and tunnels. Unlike
            steel, it won’t rust, even in salty or humid conditions. This means
            longer-lasting infrastructure with lower maintenance costs.
          </p>
          <div className="flex justify-center">
            <Image
              src="/image/blog/blog3/3.jpg"
              alt="FRP vs Fiberglass comparison"
              width={500}
              height={450}
              className="rounded-2xl shadow-md"
            />
          </div>
          <h4 className="text-2xl font-semibold">3. Renewable Energy</h4>
          <p>
            The wind power industry heavily relies on composite materials like
            GFRP to manufacture large, lightweight, and flexible wind turbine
            blades. In fact, as of 2020, the U.S. had over 14.2 GW of installed
            wind capacity supported by blades made from GFRP.{' '}
          </p>
          <p>
            The material’s ability to withstand extreme conditions—while keeping
            blades light and efficient—makes it ideal for scaling up renewable
            energy systems.
          </p>

          <h4 className="text-2xl font-semibold">4. Marine and Aerospace</h4>
          <p>
            Saltwater, moisture, and constant movement pose major challenges in
            marine environments. GFRP solves many of them. It’s used in boat
            hulls, decks, and interior panels because it resists corrosion,
            doesn’t rot, and stays strong over time
          </p>
          <p>
            In aerospace, GFRP is found in high-pressure cylinders, ducting, and
            secondary structures. Its lightweight profile helps reduce fuel use
            while maintaining high performance and safety.
          </p>
        </section>
        <section>
          <h2 className="text-3xl font-semibold">Conclusion</h2>
          <p>
            Glass Fiber Reinforced Plastic (GFRP) is no longer just an
            alternative—it’s becoming a go-to material for industries seeking
            strength, lightness, and sustainability. From automotive and
            construction to wind energy and marine applications, GFRP continues
            to prove its value with a high strength-to-weight ratio, corrosion
            resistance, and long-term cost savings. As recycling technology
            improves and global demand for eco-friendly materials grows, GFRP’s
            role in the green transition will only get stronger.
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
