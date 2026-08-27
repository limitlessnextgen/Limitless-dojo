import { assetUrl } from "@/lib/site-data";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  alt: string;
  caption: string;
  position?: string;
};

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  alt,
  caption,
  position = "center",
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="shell page-hero-grid">
        <div className="page-hero-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display page-title">{title}</h1>
          <p className="lead">{intro}</p>
        </div>
        <figure className="page-hero-image">
          <img src={assetUrl(image)} alt={alt} style={{ objectPosition: position }} />
          <figcaption>{caption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
