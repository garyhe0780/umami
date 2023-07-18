import { useRouter } from 'next/router';
import WebsiteDetailsPage from 'components/pages/websites/WebsiteDetailsPage';

export default function () {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return null;
  }

  return <WebsiteDetailsPage websiteId={id} hideCategory={true} />;
}
