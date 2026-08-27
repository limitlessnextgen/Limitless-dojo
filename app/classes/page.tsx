import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { WhatsAppEnquiry } from "@/components/whatsapp-enquiry";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { assetUrl, classes } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Classes",
  description:
    "Explore Jiu-Jitsu (BJJ), grappling, Muay Thai, strength, women’s classes, open mats and youth training at Go Limitless in Tamraght.",
};

const faqs = [
  {
    question: "Where is Go Limitless located?",
    answer:
      "Go Limitless is based in Tamraght, near Agadir, Morocco. Training takes place at the Limitless rooftop dojo.",
  },
  {
    question: "Can complete beginners join?",
    answer: "Yes. Classes are open to all levels and no previous experience is required.",
  },
  {
    question: "Do you have equipment to use?",
    answer: "Yes. Equipment is available to use during training.",
  },
  {
    question: "Are there women’s and youth sessions?",
    answer:
      "Yes. We run supportive women’s sessions and free development opportunities through Limitless Next Gen.",
  },
  {
    question: "How do I book or enquire?",
    answer:
      "Complete the Try a Class form on this page to send your details directly by WhatsApp, or message @limitless_dojo on Instagram.",
  },
];

export default function ClassesPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Limitless Dojo · Tamraght"
        title="Classes"
        intro="Martial arts, strength and community sessions for complete beginners through to experienced athletes. Come to learn, move and grow."
        image="class-open-mat.jpg"
        alt="Go Limitless members together after an open mat in Tamraght"
        caption="All levels welcome · Equipment available"
        position="center 58%"
      />

      <section className="section">
        <div className="shell content-heading">
          <div>
            <p className="eyebrow">What we train</p>
            <h2 className="display section-title">Train with purpose.</h2>
          </div>
          <p className="lead">
            Choose martial arts, strength, women’s training, youth development or coaching from
            anywhere. Each path is built around progression, confidence and real community.
          </p>
        </div>
        <div className="shell class-grid">
          {classes.map((item) => (
            <article className="class-card" key={item.title}>
              <img
                src={assetUrl(item.image)}
                alt={`${item.title} at Go Limitless`}
                loading="lazy"
                style={{ objectPosition: item.position }}
              />
              <div className="class-card-body">
                <span className="tag">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-dark">
        <div className="shell">
          <p className="eyebrow eyebrow-sand">Muay Thai</p>
          <h2 className="display section-title">Striking on the rooftop.</h2>
          <div className="photo-triptych">
            <figure className="photo-tile">
              <img
                src={assetUrl("muay-thai-community.jpg")}
                alt="The Go Limitless Muay Thai community celebrating together"
                loading="lazy"
              />
              <figcaption>Muay Thai community</figcaption>
            </figure>
            <figure className="photo-tile">
              <img
                src={assetUrl("muay-thai-team.jpg")}
                alt="Muay Thai athletes training together at Limitless Dojo"
                loading="lazy"
              />
              <figcaption>Train together · Grow together</figcaption>
            </figure>
            <figure className="photo-tile">
              <img
                src={assetUrl("muay-thai-padwork.jpg")}
                alt="A Muay Thai athlete with training pads at Limitless Dojo"
                loading="lazy"
              />
              <figcaption>Pad work · Technique · Confidence</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="shell">
          <p className="eyebrow">Weekly schedule</p>
          <h2 className="display">Know when to train.</h2>
          <p>
            The full timetable now has its own page, with every day, class and start time visible.
          </p>
          <div className="button-row button-row-center">
            <a className="button button-dark" href="/timetable">View timetable</a>
            <a className="button button-outline" href="#try-a-class">Try a class</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell faq-enquiry-grid">
          <div>
            <p className="eyebrow">Good to know</p>
            <h2 className="display section-title">Your questions, answered.</h2>
            <Accordion className="faq-list" type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem className="faq-item" value={`faq-${index}`} key={faq.question}>
                  <AccordionTrigger className="faq-trigger">{faq.question}</AccordionTrigger>
                  <AccordionContent className="faq-answer">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <WhatsAppEnquiry />
        </div>
      </section>
    </main>
  );
}
