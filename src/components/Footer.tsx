import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background/70 py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="font-heading text-xl font-bold text-background mb-3">
            White's <span className="text-accent">Plumbing</span>
          </h3>
          <p className="text-sm leading-relaxed">
            Professional plumbing services you can trust. Licensed, insured,
            and committed to your satisfaction since 2003.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-bold text-background mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {["Services", "Why Us", "Gallery", "FAQ", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase().replace(" ", "-")}`} className="hover:text-accent transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-background mb-3">Contact Info</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-accent" /> (555) 123-4567
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-accent" /> info@whitesplumbing.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent" /> 123 Main Street, Anytown, USA
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/10 pt-6 text-center text-xs">
        © {new Date().getFullYear()} White's Plumbing Services. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
