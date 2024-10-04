import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import MarkUnreadChatAltOutlinedIcon from '@mui/icons-material/MarkUnreadChatAltOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const menus = [
  {
    icon: <HomeOutlinedIcon />,
    secondIcon: null,
    title: 'Home',
    link: '/',
    secondaryMenu: null,
  },
  {
    icon: <GroupsOutlinedIcon />,
    secondIcon: <KeyboardArrowDownIcon/>,
    title: 'About Us',
    link: '',
    secondaryMenu: [
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
    secondIcon: <KeyboardArrowDownIcon/>,
    title: 'Features',
    link: '',
    secondaryMenu: [
      { label: 'Student Management', link: '/about/aboutwebstudionepal' },
      { label: 'Attendance Management', link: '/about/whywebstudionepal' },
      { label: 'Fees Management', link: '/about/benefitstoyou' },
      { label: 'Time Table Management', link: '/about/benefitstoyou' },
      { label: 'Employee Leave Management', link: '/about/aboutwebstudionepal' },
      { label: 'Assignment and Grading', link: '/about/aboutwebstudionepal' },
      { label: 'Mobile App', link: '/about/aboutwebstudionepal' },
      { label: 'Transport Management and Vehicle Tracking', link: '/about/aboutwebstudionepal' },

    ],
  },
  {
    icon: <MarkUnreadChatAltOutlinedIcon />,
    secondIcon: null,
    title: 'Testimonials',
    link: '',
    secondaryMenu: null,

  },
  {
    icon: <MonetizationOnOutlinedIcon />,
    secondIcon: null,
    title: 'Pricing',
    link: '',
    secondaryMenu: null,

  },
  {
    icon: <QuestionAnswerOutlinedIcon />,
    secondIcon: null,
    title: 'FAQ',
    link: '',
    secondaryMenu: null,

  },
  {
    icon: <AddIcCallOutlinedIcon />,
    secondIcon: null,
    title: 'Contact Us',
    link: '/contactus',
    secondaryMenu: null,

  },
];

export default menus;
