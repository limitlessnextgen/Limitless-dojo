import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Class Timetable",
  description:
    "View weekly BJJ, Muay Thai, women’s strength and rooftop strength class times at Go Limitless in Tamraght.",
};

export default function TimetablePage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Weekly training · Tamraght"
        title="Timetable"
        intro="Every regular session in one clear place. BJJ begins at 16:00 and Muay Thai begins at 17:30. All levels are welcome."
        image="class-jujutsu-grappling.jpg"
        alt="Martial arts training at Go Limitless in Tamraght"
        caption="BJJ · Muay Thai · Strength · Community"
        position="center 48%"
      />

      <section className="section timetable-section">
        <div className="shell">
          <p className="eyebrow">Weekly schedule</p>
          <h2 className="display section-title">Choose your session.</h2>
          <div className="schedule-grid">
            <article className="schedule-card featured">
              <span className="tag">Women</span>
              <h3>Women’s Strength</h3>
              <table>
                <thead>
                  <tr><th>Day</th><th>Time</th></tr>
                </thead>
                <tbody>
                  <tr><td>Monday</td><td>08:00</td></tr>
                  <tr><td>Wednesday</td><td>08:00</td></tr>
                  <tr><td>Friday</td><td>08:00</td></tr>
                  <tr><td>Saturday</td><td>08:00</td></tr>
                  <tr><td>Sunday</td><td>11:00</td></tr>
                </tbody>
              </table>
            </article>

            <article className="schedule-card">
              <span className="tag">Strength</span>
              <h3>Rooftop Strength</h3>
              <table>
                <thead>
                  <tr><th>Day</th><th>Time</th></tr>
                </thead>
                <tbody>
                  <tr><td>Monday</td><td>09:30</td></tr>
                  <tr><td>Wednesday</td><td>09:30</td></tr>
                  <tr><td>Friday</td><td>09:30</td></tr>
                </tbody>
              </table>
            </article>

            <article className="schedule-card martial-schedule">
              <span className="tag">Martial arts</span>
              <h3>Jiu-Jitsu (BJJ) & Muay Thai</h3>
              <table>
                <thead>
                  <tr><th>Day</th><th className="class-name">Class</th><th>Time</th></tr>
                </thead>
                <tbody>
                  <tr><td>Monday</td><td className="class-name">BJJ</td><td>16:00</td></tr>
                  <tr><td>Monday</td><td className="class-name">Muay Thai</td><td>17:30</td></tr>
                  <tr><td>Thursday</td><td className="class-name">BJJ</td><td>16:00</td></tr>
                  <tr><td>Thursday</td><td className="class-name">Muay Thai</td><td>17:30</td></tr>
                  <tr><td>Saturday</td><td className="class-name">Community Open Mat BJJ</td><td>16:00</td></tr>
                  <tr><td>Saturday</td><td className="class-name">Muay Thai</td><td>17:30</td></tr>
                </tbody>
              </table>
            </article>
          </div>
          <p className="schedule-note">
            All levels welcome · Send a class enquiry to confirm your first session.
          </p>
        </div>
      </section>

      <section className="cta-band">
        <div className="shell">
          <p className="eyebrow">Ready to begin?</p>
          <h2 className="display">Come train with us.</h2>
          <p>Choose the class that suits you, then send an enquiry to confirm your first session.</p>
          <div className="button-row button-row-center">
            <a className="button button-dark" href="/classes#try-a-class">Send a class enquiry</a>
            <a className="button button-outline" href="/classes">Explore classes</a>
          </div>
        </div>
      </section>
    </main>
  );
}
