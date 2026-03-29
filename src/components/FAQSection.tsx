import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    q: "How does Kammavaari Matrimony verify profiles?",
    a: "Every profile undergoes a thorough manual screening process. Our team verifies identity documents, educational qualifications, and family details to ensure 100% authenticity before a profile goes live.",
  },
  {
    q: "Is my personal data safe and confidential?",
    a: "Absolutely. We use industry-leading encryption and strict privacy policies. Your photos and contact details are never shared without your explicit consent. Our Confidential plan offers additional photo privacy controls.",
  },
  {
    q: "What is a Dedicated Relationship Manager?",
    a: "A Dedicated RM is a personal matchmaking consultant assigned exclusively to you. They understand your family's preferences, proactively search for compatible matches, and coordinate introductions — saving you time and effort.",
  },
  {
    q: "Can I register on behalf of my son or daughter?",
    a: "Yes! During registration, you can select 'Parent' or 'Sibling' under 'Profile Created By'. Many successful matches on our platform have been initiated by caring family members.",
  },
  {
    q: "How is Kammavaari different from other matrimony sites?",
    a: "We are a community-specific platform focused exclusively on the Kamma community, with 15+ years of trust. Our deep roots across Telangana, Andhra Pradesh, and beyond give us unmatched connections and understanding of family values.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit/debit cards, UPI, net banking, and digital wallets. All transactions are processed through secure, PCI-compliant payment gateways.",
  },
];

const FAQSection = () => (
  <section className="section-padding" style={{ background: 'hsl(36 60% 96%)' }}>
    <div className="container mx-auto max-w-3xl">
      <ScrollReveal>
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px]" style={{ background: 'hsl(28 20% 40%)' }} />
            <span className="eyebrow" style={{ color: 'hsl(28 20% 40%)' }}>Got Questions?</span>
            <div className="w-8 h-[1px]" style={{ background: 'hsl(28 20% 40%)' }} />
          </div>
          <h2 className="font-display font-light" style={{ fontSize: 'clamp(36px, 5vw, 64px)', color: 'hsl(30 50% 4%)' }}>
            Frequently Asked Questions
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-[16px] px-6 transition-shadow duration-300 data-[state=open]:shadow-md"
              style={{
                background: 'white',
                border: '1px solid hsla(40,52%,54%,0.12)',
              }}
            >
              <AccordionTrigger className="text-left hover:no-underline py-5 font-display font-semibold text-[18px]" style={{ color: 'hsl(30 50% 4%)' }}>
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-body font-light text-[14px] leading-[1.75] pb-5" style={{ color: 'hsl(28 20% 40%)' }}>
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ScrollReveal>
    </div>
  </section>
);

export default FAQSection;
