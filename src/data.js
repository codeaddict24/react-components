import avatar1 from './images/reviews-avatar-1.png'
import upcoming1 from './images/upcoming-1.png';
import upcoming2 from './images/upcoming-2.png';
import upcoming3 from './images/upcoming-3.png';
import upcoming4 from './images/upcoming-4.png';
import us from './images/us2.png';

const ReviewsData = [
    {
        id: 1,
        avatar: avatar1,
        flag: us,
        country: 'PALO ALTO, CA',
        name: 'Hellen Jummy',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, deleniti! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, deleniti!'
    },
    {
        id: 2,
        avatar: avatar1,
        flag: us,
        country: 'PALO ALTO, CA',
        name: 'Hellen Jummy',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, deleniti! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, deleniti!'
    },
    {
        id: 3,
        avatar: avatar1,
        flag: us,
        country: 'PALO ALTO, CA',
        name: 'Hellen Jummy',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, deleniti! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, deleniti!'
    },
    {
        id: 4,
        avatar: avatar1,
        flag: us,
        country: 'PALO ALTO, CA',
        name: 'Hellen Jummy',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, deleniti! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, deleniti!'
    },
];

const CardData = [
    {
        id: 1,
        category: "Folk",
        name: "Benny Dayal",
        img: upcoming1
    },
    {
        id: 2,
        category: "Bollywood",
        name: "Vijay Yesudas",
        img: upcoming2
    },
    {
        id: 3,
        category: "Folk",
        name: "Andrea Jeremiah",
        img: upcoming3
    },
    {
        id: 4,
        category: "Folk",
        name: "Shilpa Rao",
        img: upcoming4
    },
];

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

export {settings, ReviewsData, CardData}