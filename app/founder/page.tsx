import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { assetUrl } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Founder · Danielle Askari",
  description:
    "Meet Danielle Askari, the coach, athlete and community organiser behind Go Limitless in Tamraght, Morocco.",
};

export default function FounderPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Founder · Coach · Organiser · Community Builder"
        title="Danielle Askari"
        intro="The story behind I Am Limitless, the Tamraght rooftop and a movement built from limited resources with an unlimited belief in what people can become."
        image="founder-danielle-askari.jpg"
        alt="Danielle Askari, founder of Go Limitless"
        caption="Local in heart · Global in standard"
        position="center 46%"
      />

      <section className="section">
        <div className="shell story-layout">
          <aside className="story-side">
            <p className="eyebrow">I Am Limitless</p>
            <h2 className="display">From message to movement.</h2>
          </aside>
          <div className="story-copy">
            <p className="lead">
              Danielle Askari is a British coach, athlete and organiser who has lived in Morocco
              for over 10 years.
            </p>
            <p>
              With 15 years of coaching experience in strength, physique transformation,
              contest preparation and posing, her own sporting path has taken her from bodybuilding
              stages to martial arts mats and long-distance endurance challenges.
            </p>
            <p>
              Her journey has also been shaped by serious knee problems and repeated dislocations.
              They changed how she could train and move, but never took away her identity as an
              athlete.
            </p>
            <p>
              From that experience came the words <strong>I Am Limitless</strong>, first as a
              reminder to herself and then as a movement for anyone refusing to be defined by
              injury, circumstance or where they started.
            </p>
            <div className="story-highlight">
              500 MAD of second-hand mats. One rooftop. A place where the message could live.
            </div>
            <p>
              That movement needed a home. The mats were laid across the roof of Danielle’s home in
              Tamraght and a rooftop with no limits was born.
            </p>
            <p>
              What began as a small place to train grew into Limitless Dojo, women’s classes, open
              mats, athlete-led events and Limitless Next Gen, creating access, visibility and
              belonging for young people and emerging athletes.
            </p>
            <p>
              There was no large budget or established organisation behind it. Danielle built the
              community by coaching, organising, painting, carrying mats, finding partners and
              creating opportunities one session at a time.
            </p>
            <p>
              For the past two years, Danielle has also led the grassroots non-profit work behind
              Limitless Next Gen in Tamraght. It began with free calisthenics and fitness sessions,
              using movement to bring people together and make training more accessible.
            </p>
            <p>
              That foundation paved the way for the Limitless Youth Project and four Limitless
              beach wrestling and grappling competitions, creating pathways for young people and
              emerging athletes to train, compete, be seen and discover new opportunities.
            </p>
            <p>
              The purpose reaches beyond one rooftop. Go Limitless brings training, coaching,
              events and community work under one name so that discipline can become confidence
              and talent can become opportunity.
            </p>
            <p className="editorial-quote">
              “I Am Limitless began as a reminder. The rooftop gave that message a home.”
            </p>
            <a className="button button-outline" href="https://www.instagram.com/dannii_askari/">
              Follow Danielle <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="shell">
          <p className="eyebrow eyebrow-sand">A coach who kept evolving</p>
          <h2 className="display section-title">Bodybuilding was the start. Limitless became the path.</h2>
          <div className="founder-collage" aria-label="Danielle Askari coaching and training">
            <figure>
              <img
                src={assetUrl("danielle-coach-portrait.webp")}
                alt="Danielle Askari coaching"
                loading="lazy"
              />
            </figure>
            <figure>
              <img
                src={assetUrl("danielle-bodybuilding.webp")}
                alt="Danielle Askari in a bodybuilding environment"
                loading="lazy"
              />
            </figure>
            <figure>
              <img
                src={assetUrl("danielle-martial-arts.webp")}
                alt="Danielle Askari training martial arts"
                loading="lazy"
              />
            </figure>
            <figure>
              <img
                src={assetUrl("danielle-strength-training.webp")}
                alt="Danielle Askari strength training"
                loading="lazy"
              />
            </figure>
            <figure>
              <img
                src={assetUrl("danielle-womens-strength.webp")}
                alt="Danielle Askari leading women’s strength training"
                loading="lazy"
              />
            </figure>
            <figure>
              <img
                src={assetUrl("danielle-client-coaching.webp")}
                alt="Danielle Askari supporting a coaching client"
                loading="lazy"
              />
            </figure>
            <figure>
              <img
                src={assetUrl("rooftop-community-strength.webp")}
                alt="Danielle Askari training with the Go Limitless community"
                loading="lazy"
              />
            </figure>
            <figure>
              <img
                src={assetUrl("coaching-workshop.jpg")}
                alt="Danielle Askari sharing coaching knowledge with the community"
                loading="lazy"
              />
            </figure>
            <figure>
              <img
                src={assetUrl("class-strength-team.jpg")}
                alt="Danielle Askari leading strength training at Go Limitless"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell story-grid">
          <article className="story-card">
            <strong>01</strong>
            <h3>Rooted</h3>
            <p>Built in Tamraght and shaped by the people who show up for one another.</p>
          </article>
          <article className="story-card">
            <strong>02</strong>
            <h3>Disciplined</h3>
            <p>Progress through consistency, honest work and standards that keep rising.</p>
          </article>
          <article className="story-card">
            <strong>03</strong>
            <h3>Inclusive</h3>
            <p>Opportunity for beginners, women, young people and athletes ready to grow.</p>
          </article>
        </div>
      </section>

      <section className="cta-band">
        <div className="shell">
          <p className="eyebrow">The next chapter</p>
          <h2 className="display">The movement keeps growing.</h2>
          <p>Meet the people who coach at the rooftop or find the training path that fits you.</p>
          <div className="button-row button-row-center">
            <a className="button button-dark" href="/coaches">Meet the coaches</a>
            <a className="button button-outline" href="/classes">Explore classes</a>
          </div>
        </div>
      </section>
    </main>
  );
}
