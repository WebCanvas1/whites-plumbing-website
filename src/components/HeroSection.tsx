import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Shield, Clock, Star } from "lucide-react";
import heroImg from "@/assets/hero-plumber.jpg";

const HeroSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", phone: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 z-0">
        <img src={heroImg} alt="Professional plumber at work" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-hero opacity-90" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-primary-foreground/70 text-sm">500+ 5-Star Reviews</span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground leading-tight mb-6">
              Your Trusted Local{" "}
              <span className="text-gradient-gold">Plumbing Experts</span>
            </h1>

            <p className="text-primary-foreground/80 text-lg mb-8 max-w-lg">
              Fast, reliable plumbing services for your home and business.
              Available 24/7 for emergencies. Licensed, insured & guaranteed.
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              {[
                { icon: Clock, text: "24/7 Emergency" },
                { icon: Shield, text: "Licensed & Insured" },
                { icon: Star, text: "Satisfaction Guaranteed" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                  <Icon className="w-5 h-5 text-accent" />
                  {text}
                </div>
              ))}
            </div>

            <a
              href="tel:+15551234567"
              className="inline-flex items-center gap-2 bg-cta-gradient text-accent-foreground px-8 py-4 rounded-xl font-bold text-lg hover:brightness-110 transition shadow-lg lg:hidden"
            >
              <Phone className="w-5 h-5" />
              Call Now — Free Estimate
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-card rounded-2xl shadow-2xl p-8">
              <h2 className="font-heading text-2xl font-bold text-card-foreground mb-2">
                Get a Free Quote
              </h2>
              <p className="text-muted-foreground text-sm mb-6">
                Fill out the form and we'll call you back within 15 minutes.
              </p>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-card-foreground">Thank You!</h3>
                  <p className="text-muted-foreground mt-2">We'll call you back shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-accent focus:outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    maxLength={20}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-accent focus:outline-none"
                  />
                  <select
                    required
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent focus:outline-none"
                  >
                    <option value="">Select a Service</option>
                    <option>Emergency Repair</option>
                    <option>Drain Cleaning</option>
                    <option>Water Heater</option>
                    <option>Bathroom Remodel</option>
                    <option>Pipe Repair</option>
                    <option>Sewer Line</option>
                    <option>Other</option>
                  </select>
                  <textarea
                    placeholder="Describe your issue (optional)"
                    maxLength={1000}
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-accent focus:outline-none resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-cta-gradient text-accent-foreground py-4 rounded-lg font-bold text-lg hover:brightness-110 transition shadow-lg"
                  >
                    Get My Free Quote →
                  </button>
                  <p className="text-xs text-muted-foreground text-center">
                    🔒 No spam. Your info is safe with us.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
