import type { IProduct } from '@/types'

export const PRODUCTS: IProduct[] = [
  // Books
  {
    id: 'book-001',
    name: 'The Great Gatsby',
    categoryId: 'books',
    price: 10.99,
    image: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
    description: 'A classic novel by F. Scott Fitzgerald set in the Jazz Age.',
  },
  {
    id: 'book-002',
    name: 'Sapiens: A Brief History of Humankind',
    categoryId: 'books',
    price: 14.99,
    image: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
    description: 'Explores the history and impact of Homo sapiens.',
  },
  {
    id: 'book-003',
    name: 'Atomic Habits',
    categoryId: 'books',
    price: 11.99,
    image: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
    description: 'A guide to building good habits and breaking bad ones.',
  },

  // Electronics
  {
    id: 'elec-001',
    name: 'iPhone 14',
    categoryId: 'electronics',
    price: 799.99,
    image: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
    description: 'Latest Apple smartphone with advanced features.',
  },
  {
    id: 'elec-002',
    name: 'Samsung Galaxy Buds 2',
    categoryId: 'electronics',
    price: 129.99,
    image: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
    description: 'Wireless earbuds with noise cancellation.',
  },
  {
    id: 'elec-003',
    name: 'Anker Power Bank 20000mAh',
    categoryId: 'electronics',
    price: 49.99,
    image: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
    description: 'High-capacity portable charger with fast charging support.',
  },

  // Clothing
  {
    id: 'clothing-001',
    name: 'Men’s Casual T-Shirt',
    categoryId: 'clothing',
    price: 15.99,
    image: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
    description: 'Comfortable cotton t-shirt available in various colors.',
  },
  {
    id: 'clothing-002',
    name: 'Women’s Denim Jacket',
    categoryId: 'clothing',
    price: 39.99,
    image: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
    description: 'Stylish and durable denim jacket for everyday wear.',
  },
  {
    id: 'clothing-003',
    name: 'Kids’ Hoodie',
    categoryId: 'clothing',
    price: 25.99,
    image: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
    description: 'Soft and warm hoodie for kids, available in multiple sizes.',
  },

  // Home & Kitchen
  {
    id: 'home-001',
    name: 'Nonstick Frying Pan',
    categoryId: 'home',
    price: 24.99,
    image: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
    description: 'Durable frying pan with nonstick coating for easy cooking.',
  },
  {
    id: 'home-002',
    name: 'Robot Vacuum Cleaner',
    categoryId: 'home',
    price: 189.99,
    image: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
    description: 'Smart vacuum that cleans your home automatically.',
  },
  {
    id: 'home-003',
    name: 'Aroma Diffuser',
    categoryId: 'home',
    price: 29.99,
    image: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
    description: 'Ultrasonic diffuser for essential oils and ambient lighting.',
  },

  // Beauty & Personal Care
  {
    id: 'beauty-001',
    name: 'Hydrating Face Serum',
    categoryId: 'beauty',
    price: 19.99,
    image: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
    description: 'Moisturizing serum with hyaluronic acid.',
  },
  {
    id: 'beauty-002',
    name: 'Shampoo & Conditioner Set',
    categoryId: 'beauty',
    price: 12.99,
    image: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
    description: 'Gentle formula for daily hair care.',
  },
  {
    id: 'beauty-003',
    name: 'Electric Hair Trimmer',
    categoryId: 'beauty',
    price: 34.99,
    image: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
    description: 'Rechargeable trimmer for precise grooming.',
  },

  // Sports & Outdoors
  {
    id: 'sports-001',
    name: 'Yoga Mat',
    categoryId: 'sports',
    price: 19.99,
    image: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
    description: 'Non-slip mat ideal for yoga and pilates.',
  },
  {
    id: 'sports-002',
    name: 'Adjustable Dumbbells',
    categoryId: 'sports',
    price: 89.99,
    image: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
    description: 'Space-saving weight set for home workouts.',
  },
  {
    id: 'sports-003',
    name: 'Camping Tent for 2',
    categoryId: 'sports',
    price: 79.99,
    image: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
    description: 'Waterproof and compact tent for outdoor adventures.',
  },

  // Toys & Games
  {
    id: 'toys-001',
    name: 'Lego Classic Brick Box',
    categoryId: 'toys',
    price: 29.99,
    image: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
    description: 'Creative brick set for building and learning.',
  },
  {
    id: 'toys-002',
    name: 'Remote Control Car',
    categoryId: 'toys',
    price: 39.99,
    image: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
    description: 'High-speed RC car with rechargeable battery.',
  },
  {
    id: 'toys-003',
    name: 'Board Game: Catan',
    categoryId: 'toys',
    price: 44.99,
    image: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
    description: 'Popular strategy game for family game nights.',
  },

  // Automotive
  {
    id: 'auto-001',
    name: 'Car Phone Mount',
    categoryId: 'automotive',
    price: 15.99,
    image: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
    description: 'Secure phone holder for dashboard or windshield.',
  },
  {
    id: 'auto-002',
    name: 'Tire Inflator Pump',
    categoryId: 'automotive',
    price: 29.99,
    image: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
    description: 'Portable air compressor for car tires.',
  },
  {
    id: 'auto-003',
    name: 'Microfiber Car Cleaning Cloths',
    categoryId: 'automotive',
    price: 9.99,
    image: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
    description: 'Soft and reusable cloths for streak-free cleaning.',
  },

  // Pet Supplies
  {
    id: 'pet-001',
    name: 'Dog Chew Toy',
    categoryId: 'pets',
    price: 8.99,
    image: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
    description: 'Durable rubber toy for aggressive chewers.',
  },
  {
    id: 'pet-002',
    name: 'Cat Scratching Post',
    categoryId: 'pets',
    price: 22.99,
    image: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
    description: 'Helps keep your cat’s claws healthy and your furniture safe.',
  },
  {
    id: 'pet-003',
    name: 'Pet Grooming Brush',
    categoryId: 'pets',
    price: 13.99,
    image: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
    description: 'Removes loose fur and detangles for dogs and cats.',
  },

  // Office Supplies
  {
    id: 'office-001',
    name: 'Ergonomic Office Chair',
    categoryId: 'office',
    price: 149.99,
    image: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
    description: 'Supportive chair with lumbar support and adjustable height.',
  },
  {
    id: 'office-002',
    name: 'Wireless Printer',
    categoryId: 'office',
    price: 89.99,
    image: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
    description: 'All-in-one inkjet printer with wireless connectivity.',
  },
  {
    id: 'office-003',
    name: 'Desk Organizer Set',
    categoryId: 'office',
    price: 24.99,
    image: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
    description: 'Keeps pens, papers, and accessories neatly arranged.',
  },
]
