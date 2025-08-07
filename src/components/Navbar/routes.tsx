import { FaDiscord, FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';

const ROUTES = [
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'FAQs',
    href: '/faqs',
  },
];

const socialLinks = [
  {
    href: 'https://x.com/decentraland',
    icon: <FaXTwitter />,
  },
  {
    href: 'https://decentraland.org/discord/',
    icon: <FaDiscord />,
  },
  {
    href: 'https://www.linkedin.com/company/decentralandorg/',
    icon: <FaLinkedinIn />,
  },
];

export { ROUTES, socialLinks };
