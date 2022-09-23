import Image1 from '../../assets/paul-hobbs-resume-github.jpg';
import Image2 from '../../assets/paul-hobbs-resume-secrets.jpg';
import Image3 from '../../assets/paul-hobbs-resume-blonde-boston.jpg';
import Image4 from '../../assets/paul-hobbs-resume-rejuvenis-spajpg.jpg';
import Image5 from '../../assets/paul-hobbs-resume-blog.jpg';

export const projects = [
  {
    id: 1,
    title: 'My Website',
    subtitle: 'HTML5, CSS3, React, SwiperJS, EmailJS',
    description:
      'Take a peek behind the scenes at what makes this website tick. If you want to use it as a base for your own website, be sure to replace the ENV variables in the contact section.',
    image: Image1,
    link: 'https://github.com/paulwrivera/personalwebsite',
  },
  {
    id: 2,
    title: 'Paul Blogs',
    subtitle: 'Next.js, React, GraphQL, Tailwind CSS',
    description:
      'This blog pulls data from GraphCMS using GraphQL. It features posts with Markdown, featured posts, related posts, categories, authors, user submitted comments, and a tailwind styled layout.',
    image: Image5,
    link: 'https://graphql-nextjs-blog-pink.vercel.app/',
  },
  {
    id: 3,
    title: 'Secrets App',
    subtitle: 'NodeJS, PassportJS, MongoDB, EJS',
    description:
      'This app allows users to anonymously share secrets. Users are able to register with Google, Facebook, or locally. Local registration hashes and salts passwords for security.',
    image: Image2,
    link: 'https://github.com/paulwrivera/secretsapp/blob/master/app.js',
  },
  {
    id: 4,
    title: 'Web Design & Branding',
    subtitle: 'SquareSpace and SEO',
    description:
      'Jasmine is a high-end cosmetologist and needed a brand identity, color scheme, as well as a website for her clients. Utilizing SquareSpace, I designed a website that not only looks great but is incredibly easy to use.',
    image: Image3,
    link: 'https://www.blondeboston.com/',
  },
  {
    id: 5,
    title: 'Rejuvenis Spa',
    subtitle: 'SquareSpace and SEO',
    description:
      'Maritza runs a high-end spa in Massachusetts and needed a beautiful website to support her business. Utilizing both standard and local SEO best practices I positioned Maritza ahead of her competition.',
    image: Image4,
    link: 'https://rejuvenisspa.com',
  },
];
