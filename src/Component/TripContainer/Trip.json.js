// import {church} from '../../asset/images/church.webp'
export const TRIP_JSON = [
  {
    id: 1,
    name: 'The London Eye',
    description: `A trip on the London Eye is truly captivating. 
    The attraction is one of the world's tallest observation wheels and 
    has been London’s number one visitor experience for over a decade.`,
    image: require('../../asset/images/the london eye.jpeg'),
    rating: 4.5,
    premium: '₹ 3,036',
    duration: '30 mins',
    cancellation: 'Free Cancealation',
    type: { id:3, name:'Attraction' },
  },
  {
    id: 2,
    name: 'Harry Potter Warner Bros Studio Tour',
    description: `Learn behind-the-scenes secrets of making the "Harry Potter" series 
    on a visit to the Warner Bros. Studio. See the whimsical sets, props, and costumes used in the film.`,
    image: require('../../asset/images/harry potter.jpeg'),
    rating: 4.7,
    premium: '₹ 10,188 per person',
    duration: '7 Hour',
    cancellation: `Free cancellation
    Cancel up to 3 days in advance for a full refund`,
    type: {id:5, name:'Night Trips'}
  },
  {
    id: 3,
    name: 'Windsor Castle, Stonehenge & Bath Full-Day Tour',
    description: `Enjoy a full-day outing from London to three of England’s 
    most beautiful and heritage-rich sites: Windsor Castle, Stonehenge, and the city of Bath.`,
    image: require('../../asset/images/london attraction.jpeg'),
    rating: 4.3,
    premium: '₹ 9,776 per person',
    duration: '1 day',
    cancellation: `Free cancellation Cancel up to 24 hr in advance for a full refund`,
    type: { id:4, name:'Day Trips' },
  },
  {
    id: 4,
    name: 'Full-Day Cotswolds Small-Group Tour',
    description: `Join this Cotswolds day tour from London and spend a relaxed day exploring charming scenery, 
    traveling along narrow country lanes, and visiting historic towns and villages.`,
    image: require('../../asset/images/small grp tour.jpeg'),
    rating: 4.7,
    premium: '₹ 8,644 per person',
    duration: '9.5 hour',
    cancellation: 'Free cancellation Cancel up to 24 hr in advance for a full refund ',
    type: { id:4, name:'Day Trips' },
  },
  {
    id: 5,
    name: `London Christmas Lights Tour by Vintage Bus Open Top`,
    description: `Climb aboard a classic open-top Routemaster bus decked out with festive 
    decorations for the holiday season, and see the sights and Christmas lights of London 
    from a unique perspective.`,
    image: require('../../asset/images/christmas tour.jpeg'),
    rating: 4,
    premium: `₹ 2,881 per person`,
    duration: '75 mins',
    cancellation: 'Free cancellation Cancel up to 24 hr in advance for a full refund',
    type: {id:1, name:'Guide tour'}
  },
  {
    id: 6,
    name: 'Madame Tussauds London',
    description: `Step into the spotlight at Madame Tussauds London, the home of famous fun 
    in the capital. Star in immersive experiences and get up close with more than 250 lifelike 
    figures of your favorite celebrities. Enjoy plenty of fun new additions.`,
    image: require('../../asset/images/wax status london.jpeg'),
    rating: 4.5,
    premium: '₹ 3,396 per person',
    duration: '2.5 hour',
    cancellation: 'Free cancellation Cancel up to 24 hr in advance for a full refund',
    type: { id:3, name:'Attraction' },
  },
  {
    id: 7,
    name: 'Classic Afternoon Tea Bus Tour',
    description: `Take afternoon tea on a unique bus tour of London. Drive through Central London, 
    taking in some of the city’s best sights while you enjoy a traditional cup of tea on a double-decker bus.`,
    image: require('../../asset/images/tea bus.jpeg'),
    rating: 4.3,
    premium: `₹ 6,175 per person`,
    duration: '1.5 hour',
    cancellation: 'Free cancellation Cancel up to 24 hr in advance for a full refund',
    type: { id:3, name:'Attraction' },
  },
  {
    id: 8,
    name: 'Jack the Ripper Guided Walking Tour',
    description: `Embark on a Jack the Ripper walking tour around Victorian London, with your very own 
    suspect cards and Ripperologist guide leading the way.`,
    image: require('../../asset/images/walking tour.jpeg'),
    rating: 4.7,
    premium: '₹ 1,647 per person',
    duration: '2 hour',
    cancellation: 'Free cancellation Cancel up to 24 hr in advance for a full refund',
    type: {id:1, name:'Guide tour'}
  },
  {
    id: 9,
    name: 'River Thames Lunch Cruise With Unlimited Beer,Wine.',
    description: `Cruise down the River Thames and see some of the 
    city’s most historic sights, while feasting on a delicious 2-course 
    lunch with coffee and tea. See the Tower of London and Tower Bridge from 
    the comfort of a newly refurbished river cruiser.`,
    image: require('../../asset/images/church.webp'),
    rating: 4.3,
    premium: `₹ 5,145 per person`,
    duration: '4 hour',
    cancellation: 'Free cancellation Cancel up to 24 hr in advance for a full refund',
    type: {id:2, name:'Adventure'}
  },
  {
    id: 10,
    name: 'Climb The Roof of The O2 Arena',
    description: `Climb the roof of London's premier entertainment venue, 
    The O2 Arena, and admire the stunning views of the British capital. Enjoy 
    an exhilarating guided climb as you learn more about the venue.`,
    image: require('../../asset/images/roof climber.jpeg'),
    rating: 4.8,
    premium: '₹ 3,602 per person',
    duration: '1.5 hour',
    cancellation: `Free cancellation
    Cancel up to 3 days in advance for a full refund`,
    type: {id:2, name:'Adventure'}

  }
]

//may be we a

