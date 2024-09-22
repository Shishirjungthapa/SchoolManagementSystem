import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import MarkUnreadChatAltOutlinedIcon from '@mui/icons-material/MarkUnreadChatAltOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';



const menus = [
  {
    icon: <HomeOutlinedIcon />,
    title: 'Home',
    link: '/',
    dropdown: null,
  },
  {
    icon: <GroupsOutlinedIcon />,
    title: 'About Us',
    link: '',
    dropdown: [
      { label: 'About Web Studio Nepal', link: '/about/aboutwebstudionepal' },
      { label: 'Why Web Studio Nepal?', link: '/about/whywebstudionepal' },
      { label: 'Benefits to You', link: '/about/benefitstoyou' },
      { label: 'About Company', link: '/about/benefitstoyou' },
      { label: 'Our Approach', link: '/about/aboutwebstudionepal' },
      { label: 'Awards and Recognition', link: '/about/aboutwebstudionepal' },
      { label: 'History', link: '/about/aboutwebstudionepal' },
    ],

  },
  {
    icon: <FeaturedPlayListOutlinedIcon />,
    title: 'Features',
    link: '/features',
    dropdown: null,
  },
  {
    icon: <MarkUnreadChatAltOutlinedIcon />,
    title: 'Testimonials',
    link: '/testimonials',
    dropdown: null,

  },
  {
    icon: <MonetizationOnOutlinedIcon />,
    title: 'Pricing',
    link: '/pricing',
    dropdown: null,

  },
  {
    icon: <QuestionAnswerOutlinedIcon />,
    title: 'FAQ',
    link: '/faqs',
    dropdown: null,

  },
  {
    icon: <AddIcCallOutlinedIcon />,
    title: 'Contact Us',
    link: '/contactus',
    dropdown: null,

  },
];

export default menus;
