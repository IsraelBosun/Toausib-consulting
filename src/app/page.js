import HeroSection from '@/components/HeroSection';
import CredentialsStrip from '@/components/CredentialsStrip';
import ServicesOverview from '@/components/ServicesOverview';
import ValueProposition from '@/components/ValueProposition';
import TrustIndicators from '@/components/TrustIndicators';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CredentialsStrip />
      <ServicesOverview />
      <ValueProposition />
      <TrustIndicators />
    </>
  );
}