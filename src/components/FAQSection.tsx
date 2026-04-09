import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Do you offer 24/7 emergency plumbing services?", a: "Yes! We're available around the clock for plumbing emergencies. Call us anytime and a licensed plumber will be at your door within 60 minutes." },
  { q: "How much does a plumbing service call cost?", a: "We offer free estimates for most jobs. Our pricing is upfront and transparent — you'll know the cost before we start any work. No hidden fees, ever." },
  { q: "Are your plumbers licensed and insured?", a: "Absolutely. All of our plumbers are licensed master plumbers with full liability insurance and workers' compensation coverage for your protection." },
  { q: "What areas do you serve?", a: "We serve the greater metropolitan area and surrounding communities within a 30-mile radius. Contact us to confirm we cover your location." },
  { q: "Do you offer warranties on your work?", a: "Yes, all our work comes with a minimum 1-year warranty on labor and we honor all manufacturer warranties on parts and equipment we install." },
  { q: "Can you help with bathroom or kitchen remodeling?", a: "Definitely! We handle all plumbing aspects of remodeling projects, from rough-in plumbing to fixture installation. We work closely with your contractor or directly with you." },
];

const FAQSection = () => (
  <section id="faq" className="py-20 lg:py-28">
    <div className="container mx-auto px-4 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-accent font-semibold text-sm uppercase tracking-wider">FAQ</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
          Common Questions
        </h2>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow">
            <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-accent py-5">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
