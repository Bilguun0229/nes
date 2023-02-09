import IntroScreen from '@/components/home/Intro';
import ServiceScreen from '@/components/home/Service';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout title="Home">
      <IntroScreen />
      <ServiceScreen />
    </Layout>
  );
}
