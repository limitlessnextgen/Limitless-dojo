import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { assetUrl, reviews } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Community & Reviews",
  description:
    "Meet the Go Limitless community in Tamraght and read verified five-star feedback from people who train with us.",
};

const moments = [
  ["moment-basketball.jpg", "Community basketball game at sunset", "Free sport · Sunset sessions"],
  ["moment-green-challenge-friends.jpg", "Go Limitless members after the Green Challenge", "Challenge together · Grow together"],
  ["moment-posing-coaching.jpg", "Women practising posing during a coaching workshop", "Confidence · Coaching · Presentation"],
  ["moment-limitless-athletes.jpg", "Limitless athletes together at the beach", "Proud to represent Limitless"],
  ["moment-beach-community.jpg", "Athletes and community gathered for a beach event", "Beach events · Community energy"],
  ["moment-community-dog.jpg", "Women relaxing together after a community activity", "More than training"],
  ["moment-cycling.jpg", "Women gathering with bicycles in the mountains", "Adventure · Movement · Connection"],
  ["moment-race-finish.jpg", "Go Limitless participants celebrating after a community race", "Every finish matters"],
  ["moment-womens-energy.jpg", "Two women celebrating during an outdoor session", "Energy · Support · Belonging"],
];

export default function CommunityPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="The Go Limitless community"
        title="Real people. Real progress."
        intro="A community built through the people who train, show up, compete and grow together — on the rooftop and far beyond it."
        image="brand-community.jpg"
        alt="The Go Limitless martial arts community together at the Tamraght dojo"
        caption="Train together · Grow together"
        position="center 48%"
      />

      <section className="section section-dark">
        <div className="shell content-heading">
          <div>
            <p className="eyebrow eyebrow-sand">Community in motion</p>
            <h2 className="display section-title">Belonging built through action.</h2>
          </div>
          <p className="lead">
            Strength sessions, martial arts, events, challenges and simple moments together. Go
            Limitless is shaped by the people who keep showing up for themselves and each other.
          </p>
        </div>

        <div className="shell community-lead-grid">
          <figure className="photo-tile">
            <img
              src={assetUrl("community-training.jpeg")}
              alt="Members of the Go Limitless community together at the Green Challenge"
              loading="lazy"
            />
            <figcaption>Training together · Tamraght</figcaption>
          </figure>
          <figure className="photo-tile">
            <img
              src={assetUrl("womens-strength.jpeg")}
              alt="Women taking part in a Go Limitless strength session"
              loading="lazy"
              style={{ objectPosition: "35% center" }}
            />
            <figcaption>Women’s strength community</figcaption>
          </figure>
          <figure className="photo-tile">
            <img
              src={assetUrl("event-achievement.jpeg")}
              alt="Athlete and founder together after a Limitless competition"
              loading="lazy"
            />
            <figcaption>Compete · Get seen · Create opportunity</figcaption>
          </figure>
        </div>

        <div className="shell community-moments">
          {moments.map(([image, alt, caption]) => (
            <figure className="photo-tile" key={image}>
              <img src={assetUrl(image)} alt={alt} loading="lazy" />
              <figcaption>{caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section" id="reviews">
        <div className="shell section-heading-row">
          <div>
            <p className="eyebrow">Google Reviews · Limitless Dojo</p>
            <h2 className="display section-title">What the community says.</h2>
          </div>
          <div className="rating" aria-label="5 out of 5 stars on Google">
            <strong>5.0</strong>
            <span aria-hidden="true">★★★★★</span>
          </div>
        </div>
        <div className="shell reviews-grid" aria-label="Community testimonials">
          {reviews.map((review) => (
            <article className="review-card" key={`${review.name}-${review.source}`}>
              <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
              <blockquote>“{review.quote}”</blockquote>
              <p>
                {review.name}
                <span>{review.source}</span>
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div className="shell">
          <p className="eyebrow">Join the community</p>
          <h2 className="display">Your place is waiting.</h2>
          <p>All levels are welcome. No previous experience is required.</p>
          <div className="button-row button-row-center">
            <a className="button button-dark" href="/classes#try-a-class">Try a class</a>
            <a className="button button-outline" href="/events">See the events</a>
          </div>
        </div>
      </section>
    </main>
  );
}
