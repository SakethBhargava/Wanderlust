const sampleListings = [
    {
      title: "Cozy Beachfront Cottage",
      description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
      image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=80",
      price: 1500,
      location: "Malibu",
      country: "United States",
    },
    {
      title: "Modern Loft in Downtown",
      description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
      price: 1200,
      location: "New York City",
      country: "United States",
    },
    {
      title: "Mountain Retreat",
      description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
      price: 1000,
      location: "Aspen",
      country: "United States",
    },
    {
      title: "Historic Villa in Tuscany",
      description: "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      price: 2500,
      location: "Florence",
      country: "Italy",
    },
    {
      title: "Secluded Treehouse Getaway",
      description: "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
      price: 800,
      location: "Portland",
      country: "United States",
    },
    {
      title: "Beachfront Paradise",
      description: "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=80",
      price: 2000,
      location: "Cancun",
      country: "Mexico",
    },
    {
      title: "Rustic Cabin by the Lake",
      description: "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      price: 900,
      location: "Lake Tahoe",
      country: "United States",
    },
    {
      title: "Luxury Penthouse with City Views",
      description: "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
      image: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=80",
      price: 3500,
      location: "Los Angeles",
      country: "United States",
    },
    {
      title: "Ski-In/Ski-Out Chalet",
      description: "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
      image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=80",
      price: 3000,
      location: "Verbier",
      country: "Switzerland",
    },
    {
      title: "Safari Lodge in the Serengeti",
      description: "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
      image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=80",
      price: 4000,
      location: "Serengeti National Park",
      country: "Tanzania",
    },
    {
      title: "Historic Canal House",
      description: "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80",
      price: 1800,
      location: "Amsterdam",
      country: "Netherlands",
    },
    {
      title: "Private Island Retreat",
      description: "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
      image: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?auto=format&fit=crop&w=800&q=80",
      price: 10000,
      location: "Fiji",
      country: "Fiji",
    },
    {
      title: "Charming Cottage in the Cotswolds",
      description: "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
      image: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?auto=format&fit=crop&w=800&q=80",
      price: 1200,
      location: "Cotswolds",
      country: "United Kingdom",
    },
    {
      title: "Historic Brownstone in Boston",
      description: "Step back in time in this elegant historic brownstone located in the heart of Boston.",
      image: "https://images.unsplash.com/photo-1533619239233-6280475a633a?auto=format&fit=crop&w=800&q=80",
      price: 2200,
      location: "Boston",
      country: "United States",
    },
    {
      title: "Beachfront Bungalow in Bali",
      description: "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
      image: "https://images.unsplash.com/photo-1602391833977-358a52198938?auto=format&fit=crop&w=800&q=80",
      price: 1800,
      location: "Bali",
      country: "Indonesia",
    },
    {
      title: "Mountain View Cabin in Banff",
      description: "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
      image: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?auto=format&fit=crop&w=800&q=80",
      price: 1500,
      location: "Banff",
      country: "Canada",
    },
    {
      title: "Desert Oasis in Dubai",
      description: "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
      image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
      price: 5000,
      location: "Dubai",
      country: "United Arab Emirates",
    },
    {
      title: "Cliffside Villa in Santorini",
      description: "Experience breathtaking sunsets from your private villa perched on the cliffs of Santorini.",
      image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80",
      price: 2800,
      location: "Santorini",
      country: "Greece"
    },
    {
      title: "Floating Cabin on the Lake",
      description: "Sleep on the water in this unique floating cabin with panoramic lake views and direct water access.",
      image: "https://images.unsplash.com/photo-1530046339918-68c8dabccfe5?auto=format&fit=crop&w=800&q=80",
      price: 950,
      location: "British Columbia",
      country: "Canada"
    },
    {
      title: "Luxury Overwater Bungalow",
      description: "Wake up to crystal-clear waters right beneath your glass floor in this Maldivian paradise.",
      image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=80",
      price: 4500,
      location: "Maldives",
      country: "Maldives"
    },
    {
      title: "Vineyard Estate in Napa Valley",
      description: "Live among the vines in this luxurious estate with private wine tastings and stunning valley views.",
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80",
      price: 3200,
      location: "Napa Valley",
      country: "United States"
    },
    {
      title: "Romantic Parisian Apartment",
      description: "Fall in love with Paris from this charming apartment with Eiffel Tower views and classic French decor.",
      image: "https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&w=800&q=80",
      price: 1900,
      location: "Paris",
      country: "France"
    },
    {
      title: "Jungle Eco-Lodge in Costa Rica",
      description: "Immerse yourself in nature in this sustainable lodge surrounded by tropical wildlife and waterfalls.",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
      price: 850,
      location: "Monteverde",
      country: "Costa Rica"
    },
    {
      title: "Castle Stay in Scotland",
      description: "Live like royalty in this authentic Scottish castle with historic charm and modern comforts.",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80",
      price: 3800,
      location: "Edinburgh",
      country: "United Kingdom"
    },
    {
      title: "Minimalist Tokyo Apartment",
      description: "Experience Tokyo's vibrant energy from this sleek, minimalist apartment in the heart of Shibuya.",
      image: "https://images.unsplash.com/photo-1493514789931-586cb221d7a7?auto=format&fit=crop&w=800&q=80",
      price: 1600,
      location: "Tokyo",
      country: "Japan"
    },
    {
      title: "Ice Hotel Experience",
      description: "Sleep in a room made entirely of ice in this unique Arctic hotel, complete with thermal sleeping bags.",
      image: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?auto=format&fit=crop&w=800&q=80",
      price: 1200,
      location: "Kiruna",
      country: "Sweden"
    },
    {
      title: "Hawaiian Beach House",
      description: "Fall asleep to the sound of waves in this traditional Hawaiian beach house with oceanfront lanai.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      price: 2100,
      location: "Maui",
      country: "United States"
    },
    {
      title: "Underground Cave House",
      description: "Experience unique architecture in this temperature-controlled cave house carved into the cliffs.",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
      price: 1100,
      location: "Santorini",
      country: "Greece"
    },
    {
      title: "Luxury Houseboat in Amsterdam",
      description: "Float along Amsterdam's famous canals in this beautifully appointed luxury houseboat.",
      image: "https://images.unsplash.com/photo-1506804887760-2b3b3b3b3b3b?auto=format&fit=crop&w=800&q=80",
      price: 1750,
      location: "Amsterdam",
      country: "Netherlands"
    },
    {
      title: "Patagonian Wilderness Lodge",
      description: "Adventure into the wild landscapes of Patagonia from this comfortable and remote lodge.",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
      price: 1350,
      location: "Torres del Paine",
      country: "Chile"
    },
    {
      title: "Rooftop Terrace Loft in Barcelona",
      description: "Enjoy panoramic city views from your private rooftop terrace in the heart of Barcelona.",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
      price: 1650,
      location: "Barcelona",
      country: "Spain"
    },
    {
      title: "Traditional Ryokan in Kyoto",
      description: "Experience authentic Japanese hospitality with tatami floors, futon beds, and private onsen baths.",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
      price: 1950,
      location: "Kyoto",
      country: "Japan"
    },
    {
      title: "Bamboo House in Ubud",
      description: "Immerse yourself in Balinese culture in this eco-friendly bamboo house surrounded by lush jungle.",
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80",
      price: 750,
      location: "Ubud",
      country: "Indonesia"
    },
    {
      title: "Lighthouse Retreat",
      description: "Stay in a converted lighthouse with 360-degree ocean views and dramatic coastal scenery.",
      image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=800&q=80",
      price: 1650,
      location: "Portland",
      country: "United States"
    },
    {
      title: "Château in Bordeaux Wine Country",
      description: "Live like French aristocracy in this 18th-century château surrounded by vineyards.",
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
      price: 4200,
      location: "Bordeaux",
      country: "France"
    },
    {
      title: "A-Frame Cabin in the Woods",
      description: "Cozy up in this iconic A-frame cabin with floor-to-ceiling windows overlooking the forest.",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
      price: 680,
      location: "Vermont",
      country: "United States"
    },
    {
      title: "Desert Adobe House",
      description: "Experience Southwestern charm in this traditional adobe house with stunning desert views.",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
      price: 950,
      location: "Santa Fe",
      country: "United States"
    },
    {
      title: "Fishing Cabin in Norway",
      description: "Rustic cabin on stilts above fjord waters, perfect for fishing and northern lights viewing.",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
      price: 1100,
      location: "Lofoten Islands",
      country: "Norway"
    },
    {
      title: "Artist's Loft in Berlin",
      description: "Industrial-chic loft in Berlin's creative district, filled with natural light and artistic energy.",
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
      price: 980,
      location: "Berlin",
      country: "Germany"
    },
    {
      title: "Cliffside Pool Villa in Mykonos",
      description: "Ultra-luxury villa with infinity pool carved into the cliffs above the Aegean Sea.",
      image: "https://images.unsplash.com/photo-1530046339918-68c8dabccfe5?auto=format&fit=crop&w=800&q=80",
      price: 5200,
      location: "Mykonos",
      country: "Greece"
    },
    {
      title: "Treehouse Resort in Costa Rica",
      description: "Multi-level treehouse complex connected by suspension bridges in the rainforest canopy.",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
      price: 1250,
      location: "Manuel Antonio",
      country: "Costa Rica"
    },
    {
      title: "Converted Windmill in Holland",
      description: "Charming historic windmill transformed into a unique circular living space with original mechanisms.",
      image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=800&q=80",
      price: 1450,
      location: "Amsterdam Countryside",
      country: "Netherlands"
    },
    {
      title: "Glass Igloo in Finland",
      description: "Sleep under the northern lights in this thermal glass igloo with reindeer fur blankets.",
      image: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?auto=format&fit=crop&w=800&q=80",
      price: 1800,
      location: "Rovaniemi",
      country: "Finland"
    },
    {
      title: "Surf Shack in Portugal",
      description: "Vibrant beachfront bungalow just steps from world-class surf breaks and seafood restaurants.",
      image: "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?auto=format&fit=crop&w=800&q=80",
      price: 650,
      location: "Peniche",
      country: "Portugal"
    },
    {
      title: "Hobbit House in New Zealand",
      description: "Whimsical underground dwelling inspired by Lord of the Rings, with round doors and lush gardens.",
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80",
      price: 850,
      location: "Matamata",
      country: "New Zealand"
    },
    {
      title: "Luxury Yurt in Mongolia",
      description: "Authentic yet luxurious ger (yurt) experience in the Mongolian steppe with private chef.",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
      price: 950,
      location: "Gorkhi-Terelj National Park",
      country: "Mongolia"
    },
    {
      title: "Historic Tower in Tuscany",
      description: "Medieval stone tower converted into a romantic retreat with panoramic countryside views.",
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
      price: 2100,
      location: "San Gimignano",
      country: "Italy"
    },
    {
      title: "Floating Tiny House",
      description: "Minimalist tiny house that floats on a peaceful lake, with kayaks and fishing gear included.",
      image: "https://images.unsplash.com/photo-1530046339918-68c8dabccfe5?auto=format&fit=crop&w=800&q=80",
      price: 550,
      location: "Lake District",
      country: "United Kingdom"
    }
];

module.exports = { data: sampleListings };