// Contact Information Types
export interface Address {
  street: string;
  city: string;
  province: string;
  zip: string;
  country: string;
}

export interface ContactInfo {
  phone: string;
  phoneDisplay: string;
  email: string;
  whatsapp: string;
  facebook: string;
  address: Address;
}

// Schedule Types
export interface Schedule {
  days: string;
  hours: string;
  note: string;
  closures: string;
}

// Social Links Types
export interface SocialLinks {
  whatsapp: string;
  facebook: string;
  instagram: string;
}

// Site Information Types
export interface SiteInfo {
  name: string;
  tagline: string;
  description: string;
  year: number;
}

// Navigation Types
export interface NavItem {
  id: string;
  label: string;
}

// Values/Features Types
export interface Value {
  title: string;
  description: string;
}

// Services Types
export interface Service {
  title: string;
  description: string;
  highlights: string[];
  image: string;
}

// Testimonials Types
export interface Testimonial {
  name: string;
  quote: string;
}

// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

// Component Props Types
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'hero';
  size?: 'small' | 'medium' | 'large';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export interface CardProps {
  image?: string;
  title?: string;
  description?: string;
  highlights?: string[];
  className?: string;
}

export interface NavigationProps {
  isMobile?: boolean;
  closeMenu?: () => void;
}

export interface SectionContainerProps {
  id: string;
  backgroundColor?: string;
  children: React.ReactNode;
  className?: string;
}

// Training Types
export interface Course {
  title: string;
  description: string;
}

export interface TrainingArea {
  area: string;
  courses: Course[];
}

// Gallery Types
export interface GalleryImage {
  src: string;
  alt: string;
}
