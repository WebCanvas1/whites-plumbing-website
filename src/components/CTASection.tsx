import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="py-20 lg:py-28 bg-hero relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-10 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
    </div>

    <div className="container mx-auto px-4 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-heading text-3xl md:text-5xl font-black text-primary-foreground mb-6">
          Ready to Fix Your Plumbing?
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
          Don't let plumbing problems ruin your day. Call White's Plumbing now for
          a free estimate and same-day service.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+15551234567"
            className="inline-flex items-center justify-center gap-2 bg-cta-gradient text-accent-foreground px-8 py-4 rounded-xl font-bold text-lg hover:brightness-110 transition shadow-xl"
          >
            <Phone className="w-5 h-5" />
            Call (555) 123-4567
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-foreground/10 transition"
          >
            Request a Quote
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
