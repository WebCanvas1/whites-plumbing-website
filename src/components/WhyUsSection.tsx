import { motion } from "framer-motion";
import { Shield, Clock, Award, DollarSign, Users, ThumbsUp } from "lucide-react";

const reasons = [
  { icon: Clock, title: "Fast Response Time", desc: "We arrive within 60 minutes for emergencies — guaranteed." },
  { icon: Shield, title: "Licensed & Insured", desc: "Fully licensed master plumbers with $2M liability coverage." },
  { icon: DollarSign, title: "Upfront Pricing", desc: "No hidden fees. You approve the price before we start work." },
  { icon: Award, title: "20+ Years Experience", desc: "Serving the community with top-rated plumbing since 2003." },
  { icon: Users, title: "Family-Owned", desc: "We treat your home like our own. Local, trusted, accountable." },
  { icon: ThumbsUp, title: "100% Satisfaction", desc: "Not happy? We'll make it right — no questions asked." },
];

const WhyUsSection = () => (
  <section id="why-us" className="py-20 lg:py-28">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
          The White's Plumbing Difference
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex gap-4"
          >
            <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
              <r.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-1">{r.title}</h3>
              <p className="text-muted-foreground text-sm">{r.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
