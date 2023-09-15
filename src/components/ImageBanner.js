export function ImageBanner({
  heading,
  description,
  figure,
  cta
}) {
  return (
    <section>
      <div className={ cta ? "hero h-10" : "hero h-4"} style={figure?.image?.url ? {backgroundImage: `url(${figure.image.url})`} : {}}>
        <div className="hero-overlay"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            {heading?.value && (
              <h1 className="mb-5 text-5xl font-bold">{heading.value}</h1>
            )}
            {description?.value && <p className="mb-5">{description.value}</p>}
            {cta ? <button className="btn btn-primary">Shop now</button> : null}
          </div>
        </div>
      </div>
    </section>
  );
}