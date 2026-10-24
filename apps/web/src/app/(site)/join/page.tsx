import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, ClipboardCheck, GraduationCap, HelpCircle } from 'lucide-react';
import { ENTRY_TYPE_LABELS, ENTRY_TYPES } from '@armyx/shared';
import { PageHero } from '@/components/site/PageHero';
import { RecruitmentStatus } from '@/components/site/RecruitmentStatus';
import { Alert } from '@/components/ui/Alert';

export const dynamic = 'force-static';
export const metadata = { title: 'Join the Army', description: 'Join the Nigerian Army from Lagos: who can apply, how to apply, where you will train, and answers to common questions. Applying is free.' };

const ENTRY_TEXT = {
  regular: 'Join as a soldier through the Recruit Intake. You will train at the Depot Nigerian Army, Zaria.',
  short_service: 'Graduates can become officers through the Short Service Commission.',
  specialist: 'Bring a trade — such as driving, ICT, nursing or catering — and put it to work for Nigeria.',
};

const CARDS = [
  { title: 'Eligibility', text: 'Check your age, height and qualifications before you apply.', href: '/join/eligibility', Icon: ClipboardCheck },
  { title: 'How to apply', text: 'Seven simple steps, from creating an account to printing your slip.', href: '/join/how-to-apply', Icon: BookOpen },
  { title: 'Training institutions', text: 'Where you will train, including our school in Lagos.', href: '/join/institutions', Icon: GraduationCap },
  { title: 'FAQs', text: 'Quick answers to the questions people ask most.', href: '/join/faqs', Icon: HelpCircle },
];

export default function JoinPage() {
  return (
    <>
      <PageHero title="Join the Nigerian Army" intro="Serve Nigeria with honour. Get world-class training, a steady career and a purpose you can be proud of." eyebrow="Careers" crumbs={[{ label: 'Join the Army' }]} image="/images/recruits-helmets.jpg" />
      <section className="container-x grid gap-10 py-16 lg:grid-cols-12">
        <div className="space-y-8 lg:col-span-8">
          <Alert tone="warning" title="Applying is completely free">
            The Nigerian Army does not sell forms or slots. Apply only through the portal on this website, and report anyone who asks you for money.
          </Alert>
          <div>
            <h2 className="text-3xl font-bold">Ways to join</h2>
            <ul className="mt-6 grid gap-4 md:grid-cols-3">
              {ENTRY_TYPES.map((t) => (
                <li key={t} className="card border-t-4 border-t-olive-700 p-5">
                  <p className="font-serif text-lg font-semibold text-olive-900">{ENTRY_TYPE_LABELS[t]}</p>
                  <p className="mt-2 text-sm text-muted">{ENTRY_TEXT[t]}</p>
                </li>
              ))}
            </ul>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {CARDS.map(({ title, text, href, Icon }) => (
              <li key={href}>
                <Link href={href} className="card group flex gap-4 p-5 hover:border-gold-500">
                  <Icon aria-hidden className="h-8 w-8 shrink-0 text-olive-700" />
                  <span>
                    <span className="block font-semibold text-olive-900 group-hover:underline">{title}</span>
                    <span className="block text-sm text-muted">{text}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-6 lg:col-span-4">
          <RecruitmentStatus />
          <div className="card overflow-hidden">
            <div className="relative aspect-video"><Image src="/images/soldier-truck.jpg" alt="" fill sizes="400px" className="object-cover" /></div>
            <div className="p-5">
              <p className="font-semibold">Already applied?</p>
              <p className="mt-1 text-sm text-muted">Sign in to check your status, print your slip and see when and where you will be screened.</p>
              <Link href="/portal/login" className="btn-outline mt-4 w-full">Applicant login <ArrowRight aria-hidden className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
