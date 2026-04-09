import { motion } from "framer-motion";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const images = [
  { src: g1, alt: "Bathroom fixture installation" },
  { src: g2, alt: "Kitchen sink plumbing" },
  { src: g3, alt: "Water heater installation" },
  { src: g4, alt: "Pipe repair work" },
  { src: g5, alt: "Sewer line repair" },
  { src: g6, alt: "Shower installation" },
];

const GallerySection = () => (
  <section id="gallery" className="py-20 lg:py-28 bg-section-alt">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Work</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
          Recent Projects
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          See the quality of our craftsmanship across residential and commercial jobs.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="relative group overflow-hidden rounded-xl aspect-[4/3]"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width={800}
              height={600}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <span className="text-primary-foreground font-medium text-sm">{img.alt}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
