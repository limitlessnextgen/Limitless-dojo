export default function EntrancePage() {
  return (
    <main className="entry-page" id="main-content">
      <section className="entry-gate">
        <div className="entry-frame">
          <div className="entry-lockup">
            <span className="entry-talisman-name">Limitless</span>
            <span className="entry-talisman-discipline">The home of martial arts &amp; strength</span>
            <img
              className="entry-talisman-art"
              src="/original-limitless-emblem.png"
              alt="The original Limitless emblem"
            />
            <a className="entry-status" href="/home" aria-label="Enter the Go Limitless dojo website">
              <span aria-hidden="true" />
              <strong>Enter the Dojo</strong>
            </a>
          </div>
          <p className="entry-motto">Train <span>·</span> Evolve <span>·</span> Go Limitless</p>
          <p className="eyebrow entry-location">Tamraght · Morocco</p>
        </div>
      </section>
    </main>
  );
}
