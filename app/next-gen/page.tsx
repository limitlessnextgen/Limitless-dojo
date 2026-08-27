import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { assetUrl } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Limitless Next Gen",
  description:
    "Limitless Next Gen creates free sport, education and development opportunities for youth, women and emerging athletes in Tamraght.",
};

export default function NextGenPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Limitless Next Gen · Social impact"
        title="Access without barriers."
        intro="Free sport and education creating stronger pathways for young people, women and emerging athletes in Tamraght."
        image="youth-rooftop-martial-arts.webp"
        alt="Young people training martial arts at Limitless Dojo in Tamraght"
        caption="Free sport · Real guidance · A place to grow"
        position="center 50%"
      />

      <section className="section">
        <div className="shell nextgen-intro">
          <div>
            <p className="eyebrow">The mission</p>
            <h2 className="display section-title">Opportunity should not depend on where someone starts.</h2>
          </div>
          <div>
            <p className="lead">
              Limitless Next Gen is the social-impact arm of Go Limitless. It uses free sport and
              education to build confidence, discipline, leadership and belonging.
            </p>
            <p>
              It began locally, with limited resources and a belief that access can change the
              direction of a young person’s life. Programmes connect martial arts, movement,
              education and community experiences without cost becoming the barrier.
            </p>
            <div className="button-row">
              <a className="button button-dark" href="https://www.instagram.com/limitlessnextgen/">
                Support Next Gen <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="impact-band" aria-label="Limitless Next Gen impact so far">
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

      <section className="section">
        <div className="shell content-heading">
          <div>
            <p className="eyebrow">The youth project</p>
            <h2 className="display section-title">Free sport. Real guidance. A place to grow.</h2>
          </div>
          <div>
            <p className="lead">
              Young people are encouraged to train, learn, take on new challenges and see a future
              shaped by what they can become.
            </p>
            <p>
              The project creates free opportunities through martial arts, movement, education and
              community experiences. Each experience is designed to build confidence, discipline,
              leadership and a real sense of belonging.
            </p>
          </div>
        </div>
        <div className="shell youth-photo-grid">
          <figure className="photo-tile">
            <img
              src={assetUrl("youth-rooftop-martial-arts.webp")}
              alt="Young people training martial arts on the Go Limitless rooftop"
              loading="lazy"
            />
            <figcaption>Martial arts access</figcaption>
          </figure>
          <figure className="photo-tile">
            <img
              src={assetUrl("youth-creative-project.webp")}
              alt="Young people taking part in a creative community activity"
              loading="lazy"
            />
            <figcaption>Creativity · Confidence · Expression</figcaption>
          </figure>
          <figure className="photo-tile">
            <img
              src={assetUrl("youth-outdoor-movement.webp")}
              alt="Danielle Askari cycling with young people during an outdoor community activity"
              loading="lazy"
            />
            <figcaption>Movement beyond the dojo</figcaption>
          </figure>
        </div>
      </section>

      <section className="section section-purple">
        <div className="shell">
          <p className="eyebrow eyebrow-sand">How it feels</p>
          <h2 className="display section-title">Opportunity made visible.</h2>
          <div className="principle-grid">
            <article className="principle">
              <strong>FREE</strong>
              <p>Cost should not decide who gets to take part, learn and discover their ability.</p>
            </article>
            <article className="principle">
              <strong>OPEN</strong>
              <p>A welcoming pathway for young people, women and emerging athletes.</p>
            </article>
            <article className="principle">
              <strong>REAL</strong>
              <p>Real guidance, real responsibility and experiences that build long-term confidence.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="shell contact-strip">
          <div>
            <p className="eyebrow eyebrow-sand">Follow · Support · Partner</p>
            <h2 className="display">Help create the next opportunity.</h2>
          </div>
          <div className="contact-links">
            <a href="https://www.instagram.com/limitlessnextgen/">
              <span>Limitless Next Gen</span><span>@limitlessnextgen ↗</span>
            </a>
            <a href="https://www.instagram.com/limitless_dojo/">
              <span>Training & Events</span><span>@limitless_dojo ↗</span>
            </a>
            <a href="https://www.instagram.com/dannii_askari/">
              <span>Founder</span><span>@dannii_askari ↗</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
