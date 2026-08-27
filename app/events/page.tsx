import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { assetUrl } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Discover Go Limitless beach wrestling, grappling, seminars, open mats and endurance events in Morocco.",
};

const eventPhotos = [
  ["event-winner.jpg", "A Limitless Beach Wrestling athlete being announced as the winner", "Athlete recognition"],
  ["event-corner.jpg", "A coach supporting an athlete after a beach wrestling match", "Coaching through every round"],
  ["event-announcer.jpg", "The event announcer speaking to the crowd", "Walkouts · Energy · Atmosphere"],
  ["event-fundraising.jpg", "The Limitless team raising funds to support athletes", "Community-funded opportunity"],
  ["event-decision.jpg", "Athletes awaiting the result of a match", "Emerging athletes on the mat"],
  ["event-athletes-focus.jpg", "Athletes focused before a beach wrestling competition", "The focus before competition"],
  ["event-trophy-moments.jpg", "Athletes gathering around the Limitless competition trophy", "Events built to be remembered"],
  ["competition-officials.jpg", "Officials organising a Limitless beach wrestling and grappling competition", "Behind every competition"],
  ["competition-community.jpg", "Athletes and community together after a Limitless competition", "Beach wrestling · BJJ · Grappling"],
  ["competition-podium.jpg", "Medallists celebrating at a Limitless competition", "Compete · Get seen · Create opportunity"],
];

export default function EventsPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Compete · Get seen · Create opportunity"
        title="Events"
        intro="Athlete-led competitions, seminars, open mats and endurance experiences built to create atmosphere, visibility and new pathways."
        image="event-community.jpg"
        alt="The Go Limitless community together at an event"
        caption="Built around the athletes"
        position="center 50%"
      />

      <section className="section">
        <div className="shell">
          <p className="eyebrow">The event programme</p>
          <h2 className="display section-title">Competition with purpose.</h2>
          <div className="events-layout">
            <article
              className="event-feature"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(23,19,19,.04), rgba(23,19,19,.94)), url(${assetUrl("event-beach-wrestling.jpg")})`,
              }}
            >
              <p className="eyebrow">Flagship competition</p>
              <h2 className="display">Limitless Beach Wrestling</h2>
              <p><strong>Edition 5 · January 2027</strong></p>
              <p>
                Athlete walkouts, real atmosphere and a platform designed around one message:
                compete, get seen, create opportunity.
              </p>
              <div className="button-row">
                <a className="button button-light-outline" href="https://www.instagram.com/limitless_dojo/">
                  Follow event updates <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </article>
            <div className="event-list">
              <article className="event-card">
                <p className="eyebrow">Adventure</p>
                <h3>Limitless Ultra</h3>
                <p>Endurance challenges shaped by Moroccan landscapes, resilience and personal transformation.</p>
              </article>
              <article className="event-card">
                <p className="eyebrow">Culture</p>
                <h3>Seminars & Open Mats</h3>
                <p>Guest workshops and community sessions that raise the level of local training.</p>
              </article>
              <article className="event-card">
                <p className="eyebrow">Opportunity</p>
                <h3>Athlete Showcase</h3>
                <p>Events built to help emerging athletes perform, gain visibility and build new pathways.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="shell">
          <p className="eyebrow eyebrow-sand">Compete · Get seen · Create opportunity</p>
          <h2 className="display section-title">Built around the athletes.</h2>
          <div className="event-gallery">
            {eventPhotos.map(([image, alt, caption]) => (
              <figure className="event-shot" key={image}>
                <img src={assetUrl(image)} alt={alt} loading="lazy" />
                <figcaption>{caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="shell">
          <p className="eyebrow">Take part</p>
          <h2 className="display">Step into the next event.</h2>
          <p>Follow Limitless Dojo for registration, schedules, seminars and athlete opportunities.</p>
          <div className="button-row button-row-center">
            <a className="button button-dark" href="https://www.instagram.com/limitless_dojo/">
              Follow event updates <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
