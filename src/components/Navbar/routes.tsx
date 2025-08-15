import { FaDiscord, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const ROUTES = [
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'FAQs',
    href: '/faq',
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
    href: 'https://www.instagram.com/decentraland_foundation/',
    icon: <FaInstagram />,
  },
];

export { ROUTES, socialLinks };
