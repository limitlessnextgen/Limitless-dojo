import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { assetUrl } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Explore Go Limitless martial arts, strength, coaching, events, community and grassroots opportunity in Tamraght, Morocco.",
};

const pathways = [
  {
    number: "01",
    title: "Classes",
    href: "/classes",
  },
  {
    number: "02",
    title: "Timetable",
    href: "/timetable",
  },
  {
    number: "03",
    title: "Founder",
    href: "/founder",
  },
  {
    number: "04",
    title: "Meet the coaches",
    href: "/coaches",
  },
  {
    number: "05",
    title: "Events",
    href: "/events",
  },
  {
    number: "06",
    title: "Community",
    href: "/community",
  },
  {
    number: "07",
    title: "Next Gen",
    href: "/next-gen",
  },
];

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="home-hero">
        <div className="shell home-hero-grid">
          <div className="home-hero-copy">
            <p className="eyebrow">Tamraght · Morocco · Built from the ground up</p>
            <h1 className="display hero-title">
              Train.
              <br />
              Evolve.
              <br />
              Go Limitless.
            </h1>
            <p className="hero-kicker">The home of martial arts & strength</p>
            <p className="hero-lead">
              Martial arts, strength, coaching, events and grassroots opportunity under one name.
              Rooted in community. Built with discipline. Open to anyone ready to grow.
            </p>
            <div className="button-row">
              <a className="button button-dark" href="/classes">
                Explore training <ArrowUpRight aria-hidden="true" />
              </a>
              <a className="button button-outline" href="/timetable">
                View timetable
              </a>
            </div>
          </div>
          <figure className="hero-photo">
            <img
              src="/limitless-group-home.webp"
              alt="The Go Limitless martial arts community together in Tamraght"
            />
            <figcaption>Train together · Grow together</figcaption>
          </figure>
        </div>
      </section>

      <div className="ticker" aria-label="Go Limitless values">
        Train · Evolve · Go Limitless · Martial Arts · Strength · Community · Opportunity
      </div>

      <section className="section">
        <div className="shell home-directory">
          <figure className="home-directory-photo">
            <img
              src={assetUrl("rooftop-community-strength.webp")}
              alt="The Go Limitless community training together on the rooftop"
              loading="lazy"
            />
            <figcaption>One community · Many paths</figcaption>
          </figure>
          <div className="home-directory-panel">
            <p className="eyebrow">Explore Go Limitless</p>
            <h2 className="display home-directory-title">Choose your path.</h2>
            <p className="lead">
              Every part of the movement has its own place. Start with what you need.
            </p>
            <nav className="home-link-grid" aria-label="Explore Go Limitless pages">
              {pathways.map((pathway) => (
                <a className="home-link-card" href={pathway.href} key={pathway.number}>
                  <span className="home-link-number">{pathway.number}</span>
                  <strong>{pathway.title}</strong>
                  <ArrowUpRight aria-hidden="true" />
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      <section className="impact-band" aria-label="Go Limitless impact">
        <div className="shell impact-grid">
          <div>
            <strong>1 YEAR</strong>
            <span>Of grassroots work</span>
          </div>
          <div>
            <strong>OVER 500</strong>
            <span>People in the community</span>
          </div>
          <div>
            <strong>4</strong>
            <span>Beach wrestling and grappling competitions</span>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="shell">
          <p className="eyebrow">Start here</p>
          <h2 className="display">Find your path.</h2>
          <p>View the weekly timetable, choose a class or learn more about personalised coaching.</p>
          <div className="button-row button-row-center">
            <a className="button button-dark" href="/classes#try-a-class">
              Try a class
            </a>
            <a className="button button-outline" href="/coaches">
              Meet the coaches
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
