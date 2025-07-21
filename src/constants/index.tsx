import WaterIcon from '@mui/icons-material/Water';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import AnchorIcon from '@mui/icons-material/Anchor';
import LandscapeIcon from '@mui/icons-material/Landscape';
import ParkIcon from '@mui/icons-material/Park';
import Brightness7Icon from '@mui/icons-material/Brightness7';
const navLink = [
    {
        title: 'Experiences',
        link: '#experience'
    },
    {
        title: 'Our Story',
        link: '#ourstory',
    },
    {
        title: 'Destination',
        link: '#destinations',
    },
    {
        title: 'Contact',
        link: '#contact'
    }
]

const experienceSelection = [
    {
        title: 'Surf & Substance',
        value: 'Surf&Substance',
    },
    {
        title: 'Culinary Insider',
        value: 'CulinaryInsider',
    },
    {
        title: 'Adventure Culture',
        value: 'AdventureCulture',
    },
    {
        title: 'Custom Experiences',
        value: 'CustomExperiences'
    }
]

const groupSizeSelection = [
    {
        title: '1-2 People',
        value: '1-2 People',
    },
    {
        title: '3-4 People',
        value: '3-4 People',
    },
    {
        title: '5-8 People',
        value: '5-8 People',
    },
    {
        title: '9+ People',
        value: '9+ People'
    }]

const durationSelection = [
    {
        title: '1 Day',
        value: '1 Day',
    },
    {
        title: '2-3 Days',
        value: '2-3 Days',
    },
    {
        title: '4-5 Days',
        value: '4-5 Days',
    },
    {
        title: '1 Week',
        value: '1 Week'
    },
    {
        title: '2+ Weeks',
        value: '2+ Weeks'
    }
]

const experienceSection = [
    {
        icon: <WaterIcon />,
        color: 'bg-gradient-to-br from-blue-800 to-blue-300',
        title: 'Surf & Substance',
        subText: 'Premium ocean experiences with culinary storytelling',
        offers: ["Nazaré Giants viewing with traditional fisherman's breakfast", 'Surf science sessions with marine biologists', 'Coastal wine tastings reflecting ocean terroir'],
        cost: '€350-500',
    },
    {
        icon: <RestaurantIcon />,
        color: 'bg-gradient-to-br from-orange-800 to-yellow-300',
        title: 'Culinary Insider',
        subText: 'Exclusive access through Forbes network connections',
        offers: ["Private dinners with Michelin-starred chefs", 'After-hours winery tastings with owners', 'Restaurant kitchen access during service'],
        cost: '€400-600',
    },
    {
        icon: <ChangeHistoryIcon />,
        color: 'rounded-full bg-gradient-to-br from-blue-500 to-yellow-500',
        title: 'Adventure Culture',
        subText: 'Integrated experiences in underserved regions',
        offers: ["Luxury camping in Peneda-Gerês National Park", 'Industrial heritage with craft workshops', 'Wellness retreats in historic monasteries'],
        cost: '€250-400',
    }
]

const story = [
    {
        icon: <WaterIcon />,
        color: 'bg-gradient-to-br from-blue-800 to-blue-300',
        title: 'Moana Surf School Heritage',
        subText: 'Founded and operated premier surf schools in Cascais and Nazaré, developing deep ocean expertise and local connections.',
    },
    {
        icon: <RestaurantIcon />,
        color: 'bg-gradient-to-br from-orange-800 to-yellow-300',
        title: 'Forbes Culinary Network',
        subText: "Exclusive access to Portugal's top chefs, hidden restaurants, and authentic culinary experiences through our journalism connections.",
    },
    {
        icon: <ChangeHistoryIcon />,
        color: 'rounded-full bg-gradient-to-br from-blue-500 to-yellow-500',
        title: 'Adventure Culture',
        subText: 'Living and working in Portugal for over 15 years, we understand the culture, speak the language, and know the stories behind every experience.',
    }
]

const exploreSection = [
    {
        icon: <AnchorIcon sx={{ fontSize: 60 }} />,
        color: 'bg-gradient-to-br from-blue-400 to-blue-700',
        title: 'Cascais & Coast',
    },
    {
        icon: <LandscapeIcon sx={{ fontSize: 60 }} />,
        color: 'bg-gradient-to-br from-gray-400 to-gray-700 ',
        title: 'Porto & Douro',
    },
    {
        icon: <ParkIcon sx={{ fontSize: 60 }} />,
        color: 'bg-gradient-to-br from-green-400 to-blue-200',
        title: 'Minho & North',
    },
    {
        icon: <Brightness7Icon sx={{ fontSize: 60 }} />,
        color: 'bg-gradient-to-br from-red-400 to-pink-700',
        title: 'Alentejo & South',
    }
]

const feedbacks = [
    {
        profileColor: 'bg-blue-500',
        name: 'Sarah M.',
        location: 'New York, USA',
        feedback: '"The surf and wine combination was incredible! Access to places and people we never could have found ourselves. Pure magic."'
    },
    {
        profileColor: 'bg-gray-500',
        name: 'James K.',
        location: 'London, UK',
        feedback: `"The chef's table experience was extraordinary. Private access to Portugal's best kitchens - absolutely unforgettable."`
    },
    {
        profileColor: 'bg-yellow-500',
        name: 'Maria L.',
        location: 'Berlin, Germany',
        feedback: '"The Minho adventure was perfect. Hidden Portugal at its finest - luxury camping with authentic cultural immersion."'
    },

]

const constants = {
    navLink,
    experienceSelection,
    groupSizeSelection,
    durationSelection,
    experienceSection,
    story,
    exploreSection,
    feedbacks
}

export default constants