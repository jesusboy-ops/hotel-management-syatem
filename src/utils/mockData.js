export const rooms = [
  {
    id: 1,
    name: 'Deluxe Ocean Suite',
    type: 'Suite',
    price: 185000,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800',
    capacity: 2,
    size: '45 sqm',
    amenities: ['Ocean View', 'King Bed', 'Balcony', 'Mini Bar', 'Smart TV'],
    available: true,
  },
  {
    id: 2,
    name: 'Presidential Suite',
    type: 'Suite',
    price: 350000,
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800',
    capacity: 4,
    size: '85 sqm',
    amenities: ['Panoramic View', 'King Bed', 'Living Room', 'Jacuzzi', 'Butler Service'],
    available: true,
  },
  {
    id: 3,
    name: 'Garden View Room',
    type: 'Standard',
    price: 115000,
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800',
    capacity: 2,
    size: '32 sqm',
    amenities: ['Garden View', 'Queen Bed', 'Work Desk', 'Coffee Maker'],
    available: true,
  },
  {
    id: 4,
    name: 'Executive Business Suite',
    type: 'Suite',
    price: 225000,
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800',
    capacity: 2,
    size: '50 sqm',
    amenities: ['City View', 'King Bed', 'Office Space', 'Meeting Room', 'Lounge Access'],
    available: false,
  },
];

export const menuItems = [
  {
    id: 1,
    name: 'Grilled Salmon',
    category: 'Main Course',
    price: 18500,
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400',
    description: 'Fresh Atlantic salmon with herbs',
    dietary: ['Gluten-Free'],
  },
  {
    id: 2,
    name: 'Wagyu Steak',
    category: 'Main Course',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400',
    description: 'Premium A5 Wagyu beef',
    dietary: ['Gluten-Free'],
  },
  {
    id: 3,
    name: 'Caesar Salad',
    category: 'Appetizer',
    price: 7500,
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400',
    description: 'Classic Caesar with parmesan',
    dietary: ['Vegetarian'],
  },
  {
    id: 4,
    name: 'Chocolate Lava Cake',
    category: 'Dessert',
    price: 9000,
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400',
    description: 'Warm chocolate cake with vanilla ice cream',
    dietary: ['Vegetarian'],
  },
];

export const bookings = [
  {
    id: 'BK001',
    guestName: 'John Smith',
    room: 'Deluxe Ocean Suite',
    checkIn: '2025-12-15',
    checkOut: '2025-12-18',
    status: 'confirmed',
    guests: 2,
    totalAmount: 555000,
  },
  {
    id: 'BK002',
    guestName: 'Emma Wilson',
    room: 'Presidential Suite',
    checkIn: '2025-12-20',
    checkOut: '2025-12-25',
    status: 'pending',
    guests: 3,
    totalAmount: 1750000,
  },
  {
    id: 'BK003',
    guestName: 'Michael Brown',
    room: 'Garden View Room',
    checkIn: '2025-12-10',
    checkOut: '2025-12-12',
    status: 'checked-in',
    guests: 2,
    totalAmount: 230000,
  },
];

export const orders = [
  {
    id: 'ORD001',
    room: '305',
    items: ['Grilled Salmon', 'Caesar Salad'],
    status: 'preparing',
    time: '2025-12-09T14:30:00',
    total: 26000,
  },
  {
    id: 'ORD002',
    room: '512',
    items: ['Wagyu Steak', 'Chocolate Lava Cake'],
    status: 'delivered',
    time: '2025-12-09T13:15:00',
    total: 44000,
  },
  {
    id: 'ORD003',
    room: '208',
    items: ['Caesar Salad', 'Chocolate Lava Cake'],
    status: 'pending',
    time: '2025-12-09T15:00:00',
    total: 16500,
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    rating: 5,
    text: 'Absolutely stunning hotel! The service was impeccable and the ocean view from our suite was breathtaking.',
    date: '2025-11-28',
  },
  {
    id: 2,
    name: 'David Chen',
    rating: 5,
    text: 'Best hotel experience ever. The staff went above and beyond to make our anniversary special.',
    date: '2025-11-25',
  },
  {
    id: 3,
    name: 'Maria Garcia',
    rating: 5,
    text: 'Luxurious rooms, excellent dining, and a perfect location. Will definitely return!',
    date: '2025-11-20',
  },
];

export const analyticsData = {
  occupancy: [
    { month: 'Jan', rate: 75 },
    { month: 'Feb', rate: 82 },
    { month: 'Mar', rate: 88 },
    { month: 'Apr', rate: 92 },
    { month: 'May', rate: 95 },
    { month: 'Jun', rate: 98 },
  ],
  revenue: [
    { month: 'Jan', amount: 125000 },
    { month: 'Feb', amount: 145000 },
    { month: 'Mar', amount: 168000 },
    { month: 'Apr', amount: 185000 },
    { month: 'May', amount: 195000 },
    { month: 'Jun', amount: 210000 },
  ],
};

export const staffingNeeds = [
  { day: 'Mon', morning: 8, afternoon: 12, evening: 10 },
  { day: 'Tue', morning: 8, afternoon: 10, evening: 9 },
  { day: 'Wed', morning: 9, afternoon: 11, evening: 10 },
  { day: 'Thu', morning: 10, afternoon: 13, evening: 11 },
  { day: 'Fri', morning: 12, afternoon: 15, evening: 14 },
  { day: 'Sat', morning: 14, afternoon: 18, evening: 16 },
  { day: 'Sun', morning: 13, afternoon: 16, evening: 15 },
];

export const auditLogs = [
  {
    id: 1,
    user: 'admin@hotel.com',
    action: 'Updated room pricing',
    timestamp: '2025-12-09T10:30:00',
    details: 'Changed Deluxe Suite price from $420 to $450',
  },
  {
    id: 2,
    user: 'manager@hotel.com',
    action: 'Approved booking',
    timestamp: '2025-12-09T09:15:00',
    details: 'Booking BK002 approved',
  },
  {
    id: 3,
    user: 'reception@hotel.com',
    action: 'Guest check-in',
    timestamp: '2025-12-09T08:00:00',
    details: 'Guest Michael Brown checked into room 208',
  },
];
