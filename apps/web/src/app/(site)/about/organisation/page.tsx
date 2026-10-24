import { getContent } from '@/lib/content';
import { PageHero } from '@/components/site/PageHero';
import { OrgChart } from '@/components/about/OrgChart';

export const dynamic = 'force-static';
export const metadata = { title: 'Organisation', description: 'How the Nigerian Army is organised, from Army Headquarters to 81 Division in Lagos.' };

export default async function OrganisationPage() {
  const { orgChart } = await getContent();
  return (
    <>
      <PageHero title="Organisation" intro="See how the Army is organised, from Army Headquarters to 81 Division in Lagos. Select a box to show or hide the units under it." eyebrow="Structure" crumbs={[{ label: 'About Us', href: '/about' }, { label: 'Organisation' }]} image="/images/armoured-vehicle.jpg" />
      <section className="container-x overflow-x-auto py-16"><OrgChart root={orgChart} /></section>
    </>
  );
}
