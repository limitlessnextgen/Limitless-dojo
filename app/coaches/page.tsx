import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { assetUrl } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Meet the Coaches",
  description:
    "Meet Danielle and Mo, the Go Limitless coaches leading strength, BJJ, Muay Thai, combat sports and personalised coaching.",
};

export default function CoachesPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="The people behind the training"
        title="Meet the coaches"
        intro="Experienced coaching, real personality and a shared belief that every person deserves the chance to learn, progress and feel part of the team."
        image="coaching-workshop.jpg"
        alt="A Go Limitless coaching and education workshop"
        caption="Knowledge shared · Confidence built"
        position="center 48%"
      />

      <section className="section section-dark">
        <div className="shell">
          <div className="content-heading">
            <div>
              <p className="eyebrow eyebrow-sand">Go Limitless coaching team</p>
              <h2 className="display section-title">Different paths. One standard.</h2>
            </div>
            <p className="lead">
              Danielle and Mo bring different sporting backgrounds to the same rooftop. Their
              experience comes together through practical coaching, strong standards and a genuine
              commitment to helping people learn.
            </p>
          </div>

          <div className="coach-stack">
            <article className="coach-card" id="danielle">
              <div className="coach-media">
                <img
                  src={assetUrl("danielle-coach-portrait.webp")}
                  alt="Coach Danielle Askari"
                  loading="lazy"
                />
                <img
                  src={assetUrl("danielle-bodybuilding.webp")}
                  alt="Danielle Askari coaching in a bodybuilding environment"
                  loading="lazy"
                />
              </div>
              <div className="coach-body">
                <p className="eyebrow eyebrow-sand">Founder & coach</p>
                <h2 className="display">Coach Danielle.</h2>
                <p className="lead">
                  Over a decade in bodybuilding. Former competitor. Coach. Still learning. Still
                  rebuilding.
                </p>
                <p>
                  Injury changed how Danielle trained. Rebuilding through hybrid performance,
                  martial arts, calisthenics, mobility, endurance and strength became the foundation
                  of the way she now coaches online and in person.
                </p>
                <ul className="credential-list">
                  <li>Personalised training and nutrition guidance</li>
                  <li>Contest preparation and posing</li>
                  <li>Hybrid performance, strength and lifestyle coaching</li>
                  <li>Progress, habit, hormone and cycle tracking where needed</li>
                </ul>
                <div className="coach-facts">
                  <span><strong>Approach:</strong> Structure for real life</span>
                  <span><strong>Belief:</strong> Train with your body</span>
                </div>
                <div className="button-row">
                  <a
                    className="button button-light-outline"
                    href="https://wa.me/212666664225?text=Hello%20Danielle%2C%20I%20would%20like%20to%20ask%20about%20coaching."
                  >
                    Ask about coaching
                  </a>
                  <a className="button button-light-outline" href="https://www.instagram.com/dannii_askari/">
                    Follow Danielle <ArrowUpRight aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>

            <article className="coach-card" id="mo">
              <div className="coach-media">
                <img
                  src={assetUrl("coach-mo-rooftop.webp")}
                  alt="Coach Mo at the Limitless rooftop dojo"
                  loading="lazy"
                />
                <img
                  src={assetUrl("coach-mo-padwork.webp")}
                  alt="Coach Mo holding Muay Thai pads at Limitless Dojo"
                  loading="lazy"
                />
              </div>
              <div className="coach-body">
                <p className="eyebrow eyebrow-sand">Resident coach</p>
                <h2 className="display">Coach Mo.</h2>
                <p className="lead">
                  Resident house coach leading BJJ, Muay Thai and combat sports sessions on the
                  rooftop in Tamraght.
                </p>
                <p>
                  After living in Vietnam and coaching BJJ, MMA, Muay Thai and boxing, Mo also
                  brings experience commentating at combat sports competitions. He combines
                  technical knowledge with energy and a genuine passion for helping people learn.
                </p>
                <ul className="credential-list">
                  <li>Gold medallist in contact sports</li>
                  <li>Renzo Gracie Championship competitor</li>
                  <li>Long-standing martial artist, coach and competitor</li>
                  <li>BJJ, MMA, Muay Thai and boxing coaching experience</li>
                </ul>
                <div className="coach-facts">
                  <span><strong>Favourite food:</strong> Spaghetti</span>
                  <span><strong>Favourite martial art:</strong> BJJ</span>
                </div>
                <div className="button-row">
                  <a className="button button-light-outline" href="/timetable">
                    View timetable
                  </a>
                  <a className="button button-light-outline" href="/classes#try-a-class">
                    Try a class
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="shell">
          <p className="eyebrow">Your first session</p>
          <h2 className="display">Come train with us.</h2>
          <p>Complete beginner or experienced athlete, there is a place for you on the rooftop.</p>
          <div className="button-row button-row-center">
            <a className="button button-dark" href="/classes#try-a-class">Try a class</a>
            <a className="button button-outline" href="/timetable">View timetable</a>
          </div>
        </div>
      </section>
    </main>
  );
}
