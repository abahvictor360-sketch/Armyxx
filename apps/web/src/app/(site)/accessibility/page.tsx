import { PageHero } from '@/components/site/PageHero';

export const dynamic = 'force-static';
export const metadata = { title: 'Accessibility', description: 'How we make the Nigerian Army, Lagos website usable for everyone, and how to report a problem.' };

export default function AccessibilityPage() {
  return (
    <>
      <PageHero title="Accessibility statement" intro="We want everyone to be able to use this website." crumbs={[{ label: 'Accessibility' }]} />
      <section className="prose-army container-x max-w-3xl py-16">
        <p>We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.2 at level AA, the international standard for accessible websites. You should be able to use this site with a keyboard alone, with a screen reader, zoomed in to 400%, and on a phone, tablet or computer.</p>
        <p>To do this we use clear headings and page regions, a “Skip to main content” link, a visible focus outline, text descriptions for images, labelled form fields with clear error messages, strong colour contrast, tap targets of at least 44 pixels, and we respect your device’s “reduce motion” setting. We test pages with automated checks and by hand.</p>
        <p>If something on this site does not work for you, use the contact page to tell us the page address and the problem. We will reply within 10 working days.</p>
      </section>
    </>
  );
}
