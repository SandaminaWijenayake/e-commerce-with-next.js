import type { StaticImageData } from "next/image";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string | StaticImageData;
  bio: string;
}
export interface Category {
  id: string;
  name: string;
  slug: string;
  imageUrl?: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  rating: number;
  reviewCount: number;
  description: string;
  features: string[];
  inStock: boolean;
  slug: string;
}

import teamMember1 from "@/../public/assets/team/emily-rodriguez.jpg";
import teamMember2 from "@/../public/assets/team/michael-chen.jpg";
import teamMember3 from "@/../public/assets/team/sarah-johnson.jpg";

export const mockCategories: Category[] = [
  { id: "1", name: "All", slug: "all" },
  { id: "2", name: "Furniture", slug: "furniture" },
  { id: "3", name: "Electronics", slug: "electronics" },
  { id: "4", name: "Lamps", slug: "lamps" },
  { id: "5", name: "Kitchen", slug: "kitchen" },
  { id: "6", name: "Chairs", slug: "chairs" },
  { id: "7", name: "Skin Care", slug: "skincare" },
];

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Modern Ergonomic Office Chair",
    price: 299.99,
    originalPrice: 399.99,
    images: [
      "/api/placeholder/400/400",
      "/api/placeholder/400/400",
      "/api/placeholder/400/400",
    ],
    category: "chairs",
    rating: 4.8,
    reviewCount: 124,
    description:
      "A premium ergonomic office chair designed for long hours of comfortable work. Features adjustable height, lumbar support, and breathable mesh fabric.",
    features: [
      "Ergonomic lumbar support",
      "Adjustable height and tilt",
      "Breathable mesh fabric",
      "360-degree swivel",
      "Sturdy aluminum base",
    ],
    inStock: true,
    slug: "modern-ergonomic-office-chair",
  },
  {
    id: "2",
    name: "Minimalist Table Lamp",
    price: 89.99,
    images: ["/api/placeholder/400/400", "/api/placeholder/400/400"],
    category: "lamps",
    rating: 4.6,
    reviewCount: 89,
    description:
      "Sleek minimalist table lamp with adjustable brightness and modern design. Perfect for any workspace or bedroom.",
    features: [
      "Adjustable brightness",
      "Touch control",
      "Energy-efficient LED",
      "Modern minimalist design",
      "Compact footprint",
    ],
    inStock: true,
    slug: "minimalist-table-lamp",
  },
  {
    id: "3",
    name: "Smart Home Speaker",
    price: 199.99,
    originalPrice: 249.99,
    images: [
      "/api/placeholder/400/400",
      "/api/placeholder/400/400",
      "/api/placeholder/400/400",
    ],
    category: "electronics",
    rating: 4.7,
    reviewCount: 203,
    description:
      "High-quality smart speaker with voice assistant and premium sound quality. Control your smart home and enjoy your favorite music.",
    features: [
      "Voice assistant built-in",
      "360-degree sound",
      "Smart home control",
      "Premium audio quality",
      "Compact design",
    ],
    inStock: true,
    slug: "smart-home-speaker",
  },
  {
    id: "4",
    name: "Professional Chef Knife Set",
    price: 159.99,
    images: ["/api/placeholder/400/400", "/api/placeholder/400/400"],
    category: "kitchen",
    rating: 4.9,
    reviewCount: 156,
    description:
      "Professional-grade chef knife set with razor-sharp blades and ergonomic handles. Includes knife block and sharpening steel.",
    features: [
      "High-carbon stainless steel",
      "Ergonomic handles",
      "Includes knife block",
      "Sharpening steel included",
      "Professional grade",
    ],
    inStock: true,
    slug: "professional-chef-knife-set",
  },
  {
    id: "5",
    name: "Vintage Leather Sofa",
    price: 1299.99,
    originalPrice: 1599.99,
    images: [
      "/api/placeholder/400/400",
      "/api/placeholder/400/400",
      "/api/placeholder/400/400",
    ],
    category: "furniture",
    rating: 4.8,
    reviewCount: 67,
    description:
      "Luxurious vintage leather sofa with classic design and exceptional comfort. Handcrafted with premium materials.",
    features: [
      "Genuine leather upholstery",
      "Solid hardwood frame",
      "High-density foam cushions",
      "Classic vintage design",
      "Handcrafted quality",
    ],
    inStock: true,
    slug: "vintage-leather-sofa",
  },
  {
    id: "6",
    name: "Organic Face Serum",
    price: 49.99,
    images: ["/api/placeholder/400/400", "/api/placeholder/400/400"],
    category: "skincare",
    rating: 4.5,
    reviewCount: 89,
    description:
      "Premium organic face serum with natural ingredients for radiant, healthy skin. Suitable for all skin types.",
    features: [
      "100% organic ingredients",
      "Anti-aging formula",
      "Suitable for all skin types",
      "Cruelty-free",
      "Dermatologist tested",
    ],
    inStock: true,
    slug: "organic-face-serum",
  },
];

export const mockTeamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Founder & CEO",
    imageUrl: teamMember1,
    bio: "Sarah founded our company with a vision to make quality products accessible to everyone.",
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Head of Design",
    imageUrl: teamMember2,
    bio: "Michael brings 15 years of design experience to create beautiful, functional products.",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Operations Manager",
    imageUrl: teamMember3,
    bio: "Emily ensures smooth operations and exceptional customer experience.",
  },
];

export const mockFeaturedCategories = [
  {
    id: "1",
    name: "Furniture",
    imageUrl: "/api/placeholder/300/200",
    slug: "furniture",
  },
  {
    id: "2",
    name: "Electronics",
    imageUrl: "/api/placeholder/300/200",
    slug: "electronics",
  },
  {
    id: "3",
    name: "Kitchen",
    imageUrl: "/api/placeholder/300/200",
    slug: "kitchen",
  },
  {
    id: "4",
    name: "Lamps",
    imageUrl: "/api/placeholder/300/200",
    slug: "lamps",
  },
];

export const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Rating" },
  { value: "newest", label: "Newest" },
];
