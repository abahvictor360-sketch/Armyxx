import { getContent } from '@/lib/content';
import { PageHero } from '@/components/site/PageHero';

export const dynamic = 'force-static';
export const metadata = { title: 'History', description: 'The Nigerian Army began in Lagos in 1863. Read how it grew into a modern national army and how 81 Division came to guard Lagos.' };

export default async function HistoryPage() {
  const { settings } = await getContent();
  return (
    <>
      <PageHero title="Our history" intro="The Nigerian Army was born in Lagos more than 160 years ago. This is how a small local force became a modern national army." eyebrow="About us" crumbs={[{ label: 'About Us', href: '/about' }, { label: 'History' }]} />
      <section className="container-x py-16">
        <ol className="relative mx-auto max-w-3xl border-l-2 border-olive-100 pl-8">
          {settings.history.map((h) => (
            <li key={h.year} className="relative mb-12 last:mb-0">
              <span aria-hidden className="absolute top-1 -left-[41px] h-5 w-5 rounded-full border-4 border-white bg-gold-500 ring-2 ring-olive-700" />
              <p className="font-serif text-2xl font-bold text-gold-600">{h.year}</p>
              <h2 className="mt-1 text-xl font-semibold">{h.title}</h2>
              <p className="mt-2 leading-7 text-muted">{h.text}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
