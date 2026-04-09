import { motion } from "framer-motion";
import { Wrench, Droplets, Flame, ShowerHead, PipetteIcon, Construction } from "lucide-react";

const services = [
  { icon: Wrench, title: "Emergency Repairs", desc: "Burst pipes, leaks, and backups — we're there fast, 24/7." },
  { icon: Droplets, title: "Drain Cleaning", desc: "Clogged drains cleared with professional hydro-jetting equipment." },
  { icon: Flame, title: "Water Heater Services", desc: "Installation, repair, and maintenance for all water heater types." },
  { icon: ShowerHead, title: "Bathroom Remodeling", desc: "Full bathroom plumbing for renovations and new construction." },
  { icon: PipetteIcon, title: "Pipe Repair & Replacement", desc: "Copper, PEX, and PVC pipe repair with lasting solutions." },
  { icon: Construction, title: "Sewer Line Services", desc: "Camera inspection, trenchless repair, and sewer line replacement." },
];

const ServicesSection = () => (
  <section id="services" className="py-20 lg:py-28 bg-section-alt">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-accent font-semibold text-sm uppercase tracking-wider">What We Do</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
          Our Plumbing Services
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          From minor fixes to major installations, White's Plumbing handles it all with expertise and care.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 border border-border hover:shadow-lg hover:border-accent/30 transition-all group"
          >
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition">
              <s.icon className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-heading text-lg font-bold text-card-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
