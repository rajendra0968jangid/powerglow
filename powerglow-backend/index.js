require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8800;
const cors = require("cors");
const bodyParser = require("body-parser");
const { Contact, Product, User } = require("./conn");
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());

app.get("/locations", async (req, res) => {
  const locations = [
    {
      id: 1,
      name: 'Amber Fort',
      crowdLevel: 'high',
      crowdText: 'High',
      visitorsNow: '≈ 1200+ people',
      lastUpdate: '5 min ago',
      lat: 26.9859,
      lng: 75.8512,
    },
    {
      id: 2,
      name: 'Hawa Mahal',
      crowdLevel: 'medium',
      crowdText: 'Medium',
      visitorsNow: '≈ 450–600 people',
      lastUpdate: '8 min ago',
      lat: 26.9239,
      lng: 75.8271,
    },
    {
      id: 3,
      name: 'City Palace',
      crowdLevel: 'low',
      crowdText: 'Low',
      visitorsNow: '≈ 180 people',
      lastUpdate: '3 min ago',
      lat: 26.9258,
      lng: 75.8242,
    },
    {
      id: 4,
      name: 'Jantar Mantar',
      crowdLevel: 'low',
      crowdText: 'Low',
      visitorsNow: '≈ 90 people',
      lastUpdate: '12 min ago',
      lat: 26.9240,
      lng: 75.8245,
    },
    {
      id: 5,
      name: 'Nahargarh Fort',
      crowdLevel: 'medium',
      crowdText: 'Medium',
      visitorsNow: '≈ 320 people',
      lastUpdate: '6 min ago',
      lat: 26.9360,
      lng: 75.8157,
    },
    {
      id: 6,
      name: 'Jal Mahal',
      crowdLevel: 'low',
      crowdText: 'Low',
      visitorsNow: '≈ 140 people',
      lastUpdate: '4 min ago',
      lat: 26.9560,
      lng: 75.8030,
    },
  ];
  res.status(200).json({ data: locations });
});
app.get("/places", async (req, res) => {
  const places = [
    {
      id: 1,
      name: 'Amber Fort',
      crowd: 'High',
      bestTime: '6:00 AM - 9:00 AM',
      desc: 'Magnificent hilltop fort known for its stunning architecture, Sheesh Mahal, and light & sound show.',
      image: 'https://tse2.mm.bing.net/th/id/OIP.dN1ObB6gzxXgJ2yDq9UHDQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
      rating: 4.7,
      entryFee: '₹100 (Indian) / ₹500 (Foreign)',
      timing: '8:00 AM – 5:30 PM',
      location: '11 km from Jaipur city center',
    },
    {
      id: 2,
      name: 'Hawa Mahal',
      crowd: 'Medium',
      bestTime: '8:00 AM - 11:00 AM',
      desc: 'The Palace of Winds – famous for its 953 intricately designed jharokhas (windows).',
      image: 'https://static.toiimg.com/photo/msid-101334904,width-96,height-65.cms',
      rating: 4.5,
      entryFee: '₹50 (Indian) / ₹200 (Foreign)',
      timing: '9:00 AM – 4:30 PM',
      location: 'City center, near Johari Bazaar',
    },
    {
      id: 3,
      name: 'City Palace',
      crowd: 'Low',
      bestTime: '9:00 AM - 12:00 PM',
      desc: 'Beautiful royal complex blending Rajput, Mughal and European architectural styles.',
      image: 'https://images.squarespace-cdn.com/content/v1/5a3bb03b4c326d76de73ddaa/669a47b5-f41b-4300-b910-17cb3a5bb594/The+Common+Wanderer-2155-2.jpg',
      rating: 4.6,
      entryFee: '₹200 (Indian) / ₹700 (Foreign)',
      timing: '9:30 AM – 5:00 PM',
      location: 'Heart of the Pink City',
    },
    {
      id: 4,
      name: 'Nahargarh Fort',
      crowd: 'Medium',
      bestTime: '4:00 PM - 6:30 PM',
      desc: 'Spectacular views of Jaipur city, especially beautiful at sunset.',
      image: 'https://tse4.mm.bing.net/th/id/OIP.05-_2FW3nMw3uEe_kHxL6AHaE7?rs=1&pid=ImgDetMain&o=7&rm=3',
      rating: 4.4,
      entryFee: '₹50 (Indian) / ₹300 (Foreign)',
      timing: '8:00 AM – 5:30 PM',
      location: 'Jaipur hills',
    },
    {
      id: 5,
      name: 'Jal Mahal',
      crowd: 'Low',
      bestTime: '5:00 PM - 7:00 PM',
      desc: 'Stunning palace situated in the middle of Man Sagar Lake – most beautiful at sunset.',
      image: 'https://static.vecteezy.com/system/resources/previews/000/713/566/large_2x/jal-mahal-water-palace-jaipur-rajasthan-india-photo.jpg',
      rating: 4.5,
      entryFee: 'View from outside (no entry inside)',
      timing: 'Viewable from roadside',
      location: '8 km from city center',
    },
    {
      id: 6,
      name: 'Jantar Mantar',
      crowd: 'Medium',
      bestTime: '9:00 AM - 11:00 AM',
      desc: 'UNESCO World Heritage Site – collection of nineteen architectural astronomical instruments.',
      image: 'https://tse3.mm.bing.net/th/id/OIP.DvedpcTEmWkRRRPO0UApFgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
      rating: 4.5,
      entryFee: '₹50 (Indian) / ₹200 (Foreign)',
      timing: '9:00 AM – 4:30 PM',
      location: 'Near City Palace',
    },
  ];
  res.status(200).json({ data: places });
});
app.get("/crowdData", async (req, res) => {
  const crowdData = [
    {
      place: 'Amber Fort',
      people: 1240,
      level: 'High',
      trend: '↑ 18%',
      peakTime: '11:00 AM – 3:00 PM',
      lastUpdate: '4 min ago',
      capacityPercent: 92,
    },
    {
      place: 'Hawa Mahal',
      people: 650,
      level: 'Medium',
      trend: '↓ 7%',
      peakTime: '10:00 AM – 1:00 PM',
      lastUpdate: '7 min ago',
      capacityPercent: 68,
    },
    {
      place: 'City Palace',
      people: 280,
      level: 'Low',
      trend: '↑ 5%',
      peakTime: '11:00 AM – 2:00 PM',
      lastUpdate: '2 min ago',
      capacityPercent: 34,
    },
    {
      place: 'Jantar Mantar',
      people: 140,
      level: 'Low',
      trend: '↓ 12%',
      peakTime: '10:00 AM – 12:00 PM',
      lastUpdate: '9 min ago',
      capacityPercent: 22,
    },
    {
      place: 'Nahargarh Fort',
      people: 420,
      level: 'Medium',
      trend: '↑ 14%',
      peakTime: '4:00 PM – 6:30 PM',
      lastUpdate: '11 min ago',
      capacityPercent: 61,
    },
    {
      place: 'Jal Mahal (viewpoint)',
      people: 190,
      level: 'Low',
      trend: 'Stable',
      peakTime: '5:00 PM – 7:00 PM',
      lastUpdate: '6 min ago',
      capacityPercent: 28,
    },
  ];
  res.status(200).json({ data: crowdData });
});
app.get("/dailyData", async (req, res) => {
  const dailyData = [
    {
      place: 'Amber Fort',
      image: 'https://th.bing.com/th/id/OIP.dN1ObB6gzxXgJ2yDq9UHDQHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
      currentVisitors: 980,
      maxVisitorsToday: 1450,
      crowdLevel: 'High',
      hourlyData: [120, 180, 340, 680, 1120, 1450, 1380, 980, 620, 340, 180, 90],
    },
    {
      place: 'Hawa Mahal',
      image: 'https://th.bing.com/th/id/OIP.2Pt73PMlCoxIMeH8Ng06jgHaFj?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
      currentVisitors: 420,
      maxVisitorsToday: 820,
      crowdLevel: 'Medium',
      hourlyData: [80, 110, 190, 340, 620, 820, 710, 480, 310, 190, 120, 70],
    },
    {
      place: 'City Palace',
      image: 'https://tse1.explicit.bing.net/th/id/OIP.EMi7uSkMCHMngMZmUMmaBAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
      currentVisitors: 210,
      maxVisitorsToday: 580,
      crowdLevel: 'Low',
      hourlyData: [40, 60, 110, 220, 410, 580, 520, 340, 220, 140, 80, 50],
    },
    // ... you can add more places
  ];
  res.status(200).json({ data: dailyData });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
