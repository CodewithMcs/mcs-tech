export default function PageHero({ eyebrow, title, accent, copy }) {
  return <section className="page-hero"><div className="shell"><div className="eyebrow"><i/>{eyebrow}</div><h1>{title} <em>{accent}</em></h1><p>{copy}</p></div></section>
}
