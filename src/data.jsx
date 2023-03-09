//  icons
import {
    FiYoutube,
    FiInstagram,
    FiLayout,
    FiSettings,
    FiPenTool,
    FiDribbble,
    FiGithub,
    FiTag,
    FiMail,
    FiMapPin,
  } from 'react-icons/fi';
  import {
    BsWhatsapp,
    BsPhone,
  } from 'react-icons/bs';
  import {
    BiCameraMovie,
  } from 'react-icons/bi';
  import {
    TbBrandLinktree,
  } from 'react-icons/tb';
  import {
    MdOutlineDesignServices,
  } from 'react-icons/md';
  
  // companies icons
  import FreelancerBrandIcon from './assets/imgds/clients/spsb250.png';
  import UpworkBrandIcon from './assets/imgds/clients/mka250.png';
  import FiverBrandIcon from './assets/imgds/clients/ds250.png';
  import BehanceBrandIcon from './assets/imgds/clients/spsb250.png';
  import DribbbleBrandIcon from './assets/imgds/clients/mka250.png';
  
  // projects images
  import Project1 from './assets/imgds/portfolio/1.jpg';
  import Project2 from './assets/imgds/portfolio/2.png';
  import Project3 from './assets/imgds/portfolio/3.png';
  import Project4 from './assets/imgds/portfolio/4.png';
  import Project5 from './assets/imgds/portfolio/5.png';
  import Project6 from './assets/imgds/portfolio/6.png';
  import Project7 from './assets/imgds/portfolio/7.png';
  import Project8 from './assets/imgds/portfolio/8.png';
  import Project9 from './assets/imgds/portfolio/9.png';
  
  // skills images
  import SkillImg1 from './assets/img/skills/html5.png';
  import SkillImg2 from './assets/img/skills/css3.png';
  import SkillImg3 from './assets/img/skills/js.png';
  import SkillImg4 from './assets/img/skills/reactjs.png';
  import SkillImg5 from './assets/img/skills/nextjs.png';
  import SkillImg6 from './assets/img/skills/nodejs.png';
  import SkillImg7 from './assets/img/skills/git.png';
  import SkillImg8 from './assets/img/skills/figma.png';
  
  // testimonial images
  import TestiImage1 from './assets/imgds/testimunho/vado.png';
  import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
  import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';
  
  // navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'testimonials',
    href: 'testimonials',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];
  
  // social
export const social = [
  {
    icon: <FiYoutube />,
    href: '',
  },
  {
    icon: <FiInstagram />,
    href: '',
  },
  {
    icon: <FiGithub />,
    href: '',
  },
  {
    icon: <FiDribbble />,
    href: '',
  },
];
  
  // companies
  export const brands = [
    {
      img: FreelancerBrandIcon,
      href: '',
    },
    {
      img: UpworkBrandIcon,
      href: '',
    },
    {
      img: FiverBrandIcon,
      href: '',
    },
    {
      img: BehanceBrandIcon,
      href: '',
    },
    {
      img: DribbbleBrandIcon,
      href: '',
    },
  ];
  
  // projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'project name 1',
    category: 'UI/UX design',
  },
  {
    id: '2',
    image: Project2,
    name: 'project name 2',
    category: 'web development',
  },
  {
    id: '3',
    image: Project3,
    name: 'project name 3',
    category: 'UI/UX design',
  },
  {
    id: '4',
    image: Project4,
    name: 'project name 4',
    category: 'branding',
  },
  {
    id: '5',
    image: Project5,
    name: 'project name 5',
    category: 'web development',
  },
  {
    id: '6',
    image: Project6,
    name: 'project name 6',
    category: 'web development',
  },
];
  
 // projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'UI/UX Design',
  },
  {
    name: 'web development',
  },
  {
    name: 'branding',
  },
];
  
  // skill
  export const skills = [
    {
      image: SkillImg1,
    },
    {
      image: SkillImg2,
    },
    {
      image: SkillImg3,
    },
    {
      image: SkillImg4,
    },
    {
      image: SkillImg5,
    },
    {
      image: SkillImg6,
    },
    {
      image: SkillImg7,
    },
    {
      image: SkillImg8,
    },
  ];
  
  // services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiPenTool />,
    name: 'Branding',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiTag />,
    name: 'SEO',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
];
  
  // testimonials
  export const testimonials = [
    {
      authorImg: TestiImage1,
      authorText:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quaerat vel totam soluta necessitatibus, blanditiis culpa mollitia.',
      authorName: 'Mauro Andrade',
      authorPosition: 'Cantor & Compositor',
    },
    {
      authorImg: TestiImage2,
      authorText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quaerat vel totam soluta necessitatibus, blanditiis culpa mollitia.',
      authorName: 'Carol Doe',
      authorPosition: 'Cantora, Modelo',
    },
    {
      authorImg: TestiImage3,
      authorText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quaerat vel totam soluta necessitatibus, blanditiis culpa mollitia.',
      authorName: 'Jack Doe',
      authorPosition: 'Modelo, cantora',
    },
  ];
  
  // contact
  export const contact = [
    {
      icon: <FiMail />,
      title: 'Nosso Email',
      subtitle: '',
      description: 'dacrimastudios@gmail.com',
    },
    {
      icon: <FiMapPin />,
      title: 'Localização',
      subtitle: '',
      description: 'Portugal / Cabo Verde',
    },
    {
      icon: <TbBrandLinktree />,
      title: 'Linktree',
      subtitle: '',
      description: 'linktr.ee/DacrimaStudios',
    },
    {
      icon: <BsPhone />,
      title: 'Telemovel',
      subtitle: '',
      description: '+351 935 641 208',
    },
  ];
  