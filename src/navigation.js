//import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';
//import { getPermalink, getAsset } from './utils/permalinks';
import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: getPermalink('/#about'),
      // links: [
      //   {
      //     text: 'SaaS',
      //     href: getPermalink('/homes/saas'),
      //   },
      //   {
      //     text: 'Startup',
      //     href: getPermalink('/homes/startup'),
      //   },
      //   {
      //     text: 'Mobile App',
      //     href: getPermalink('/homes/mobile-app'),
      //   },
      //   {
      //     text: 'Personal',
      //     href: getPermalink('/homes/personal'),
      //   },
      // ],
    },
    {
      text: 'Services',
      href: getPermalink('/#services'),
      // links: [
      //   {
      //     text: 'Features (Anchor Link)',
      //     href: getPermalink('/#features'),
      //   },
      //   {
      //     text: 'Services',
      //     href: getPermalink('/services'),
      //   },
      //   {
      //     text: 'Pricing',
      //     href: getPermalink('/pricing'),
      //   },
      //   {
      //     text: 'About us',
      //     href: getPermalink('/about'),
      //   },
      //   {
      //     text: 'Contact',
      //     href: getPermalink('/contact'),
      //   },
      //   {
      //     text: 'Terms',
      //     href: getPermalink('/terms'),
      //   },
      //   {
      //     text: 'Privacy policy',
      //     href: getPermalink('/privacy'),
      //   },
      // ],
    },
    {
      text: 'Sectors',
      href: getPermalink('/#sectors'),
      /* links: [
        {
          text: 'Lead Generation',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Long-form Sales',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Click-Through',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Product Details (or Services)',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'Subscription',
          href: getPermalink('/landing/subscription'),
        },
      ], */
    },
    {
      text: 'FAQ',
      href: getPermalink('/#faq'),
      /* links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ], */
    },
    {
      text: 'Contact',
      href: getPermalink('/#contact'),
    },
  ],
  actions: [{ text: 'Contact Us', href: 'mailto:info@isakaconsult.co.za', target: '_blank' }],
};

export const footerData = {
  links: [
    /* {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    }, */
    
    /* {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    }, */
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/#about' },
        //{ text: 'Blog', href: '#' },
        { text: 'Careers', href: '/#contact' },
         { text: 'Press', href: '/#contact' },
        // { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '/#contact' },
        // { text: 'Shop', href: '#' },
      ],
    },
    {
      title: 'Enterprise',
      links: [
        // { text: 'Developers', href: '#' },
        { text: 'Partners', href: '/#contact' },
        { text: 'Funding', href: '/#contact' },
        { text: 'Founding', href: '/#contact' },
        // { text: 'Software', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    //{ ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'http://instagram.com/isaka_ltd' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'http://facebook.com/isaka.consultancy' },
    //{ ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('#') },
    //{ ariaLabel: 'Github', icon: 'tabler:brand-github', href: '#' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(~/assets/images/skypoint.png)]"></span>
    Made by <a class="text-black dark:text-muted" href="#"> Skypoint</a> · All rights reserved.
  `,
};
