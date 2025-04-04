import React from 'react';
import { Car, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Menu, X, Calendar, Clock, User, Sparkles, Shield, Star, StarHalf, Upload, Video, Trash2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import Gallery from './Gallery';

const defaultServices = [
  {
    title: 'Regular Wash',
    description: 'Professional hand wash, tire shine, and exterior wipe-down',
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=1000',
    price: '$30'
  },
  {
    title: 'Full Detail',
    description: 'Complete interior and exterior detailing service',
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=1000',
    price: '$199'
  },
  {
    title: 'Interior Detail',
    description: 'Deep cleaning of all interior surfaces',
    image: 'https://images.unsplash.com/photo-1616544255080-d93a46359dd4?auto=format&fit=crop&q=80&w=1000',
    price: '$149'
  },
  {
    title: 'Exterior Detail',
    description: 'Paint correction and protective coating',
    image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=1000',
    price: '$169'
  },
  {
    id: '1',
    title: 'Exterior Exotic Detail 2 Door Car/Convertible',
    price: '$120.00',
    description: 'Includes wash and dry, wheel face an barrel, cleared tires and black tires shined, windows cleaned, interir and whip down, spray wax sealant.',
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '2',
    title: 'Exterior Exotic Detail 4 Door Car/Small Crossovers',
    price: '$140.00',
    description: 'Includes wash and dry, wheel face an barrel, cleared tires and black tires shined, windows cleaned, interir and whip down, spray wax sealant.',
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '3',
    title: 'Exterior Exotic Detail Truck/Full-Size SUV',
    price: '$160.00',
    description: 'Includes wash and dry, wheel face an barrel, cleared tires and black tires shined, windows cleaned, interir and whip down, spray wax sealant.',
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '4',
    title: 'Interior Luxury Detail: Sedans',
    price: '$160.00',
    description: 'Mainely focusing in the interior, steam clean the console, door panels and seats to help kill bacterias. Shampo seats and carpets, leather condition seats and spots clean headliner and visors includes quick exterior wash.',
    image: 'https://images.unsplash.com/photo-1616544255080-d93a46359dd4?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '5',
    title: 'Interior Luxury Detail: SUVs and Trucks',
    price: '$180.00',
    description: 'Mainely focusing in the interior, steam clean the console, door panels and seats to help kill bacterias. Shampo seats and carpets, leather condition seats and spots clean headliner and visors includes quick exterior wash.',
    image: 'https://images.unsplash.com/photo-1616544255080-d93a46359dd4?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '6',
    title: 'Interior Luxury Detail: Large SUVs/3 Rows and Vans',
    price: '$200.00',
    description: 'Mainely focusing in the interior, steam clean the console, door panels and seats to help kill bacterias. Shampo seats and carpets, leather condition seats and spots clean headliner and visors includes quick exterior wash.',
    image: 'https://images.unsplash.com/photo-1616544255080-d93a46359dd4?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '7',
    title: 'Full Luxotic Detail: 2 Door and Convertible',
    price: '$300.00',
    description: 'Includes everything from Exterior and Interior detail plus 1 year ceramic sealant and underainage wash.',
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '8',
    title: 'Full Luxotic Detail: 4 Doors / Small Cruiser',
    price: '$320.00',
    description: 'Includes everything from Exterior and Interior detail plus 1 year ceramic sealant and underainage wash.',
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '9',
    title: 'Full Luxotic Detail: Truck/Full Size SUV/Vans',
    price: '$340.00',
    description: 'Includes everything from Exterior and Interior detail plus 1 year ceramic sealant and underainage wash.',
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '10',
    title: 'Headlight Restoration',
    price: '$75.00',
    description: 'Wet sanding then polishing and finalizing with a sealant.',
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '11',
    title: 'Ozone Treatment',
    price: '$100.00',
    description: 'Proven effective for treating odors in automobiles to control or remove odors caused by smoke, mold, chemicals, organic matter and variety of other sources.',
    image: 'https://images.unsplash.com/photo-1616544255080-d93a46359dd4?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '12',
    title: 'Engine Detail',
    price: '$75.00',
    description: 'Dust oil leaks, old leaves, sand and other contaminants accumulate on the engine. All these can clog the radiator and the filters.',
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '13',
    title: 'Dog Hair Extraction',
    price: '$50.00',
    description: 'Professional removal of dog hair from vehicle interiors.',
    image: 'https://images.unsplash.com/photo-1616544255080-d93a46359dd4?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '14',
    title: 'Window Water Spots Removal',
    price: '$25.00',
    description: 'Professional removal of water spots from vehicle windows.',
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=1000'
  }
];

const defaultReviews = [
  {
    name: "Michael Rodriguez",
    car: "Tesla Model S",
    rating: 5,
    comment: "Exceptional service! They made my Tesla look better than when it left the showroom. Attention to detail is outstanding.",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Sarah Johnson",
    car: "BMW M3",
    rating: 5,
    comment: "Best detailing service in the area. They took care of every spot and scratch. My BMW looks immaculate!",
    image: "https://images.unsplash.com/photo-1618767689160-da3fb810aad7?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "David Thompson",
    car: "Porsche 911",
    rating: 4.5,
    comment: "Very professional team and great attention to detail. The ceramic coating they applied is holding up beautifully.",
    image: "https://images.unsplash.com/photo-1621274790572-7c32596bc67f?auto=format&fit=crop&q=80&w=400"
  }
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  const [services, setServices] = useState(() => {
    try {
      const savedServices = localStorage.getItem('services');
      const savedServiceImages = localStorage.getItem('serviceImages');
      
      if (savedServices && savedServiceImages) {
        const parsedServices = JSON.parse(savedServices);
        const parsedImages = JSON.parse(savedServiceImages);
        
        return parsedServices.map((service: any) => ({
          ...service,
          image: parsedImages[service.id] || service.image
        }));
      }
      
      return defaultServices;
    } catch (error) {
      console.error('Error loading services:', error);
      return defaultServices;
    }
  });
  const [reviews, setReviews] = useState(() => {
    const savedReviews = localStorage.getItem('reviews');
    return savedReviews ? JSON.parse(savedReviews) : defaultReviews;
  });
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [selectedReview, setSelectedReview] = useState<number | null>(null);
  const [logoImage, setLogoImage] = useState<string | null>(() => {
    return localStorage.getItem('logoImage') || null;
  });
  const [heroImage, setHeroImage] = useState<string>(() => {
    return localStorage.getItem('heroImage') || 'https://images.unsplash.com/photo-1600706432502-77a0e2e32795?auto=format&fit=crop&q=80&w=2000';
  });
  const [bookingForm, setBookingForm] = useState({
    service: '',
    name: '',
    email: '',
    phone: '',
    date: '',
    time: ''
  });
  const [reviewForm, setReviewForm] = useState({
    name: '',
    car: '',
    rating: 5,
    comment: '',
  });
  const [videos, setVideos] = useState<Array<{ id: string; url: string; title: string }>>(() => {
    const savedVideos = localStorage.getItem('videos');
    return savedVideos ? JSON.parse(savedVideos) : [];
  });

  // Add a function to handle navigation
  const handleNavigation = (sectionId: string) => {
    // Close any open modals
    setIsMenuOpen(false);
    setIsAdminOpen(false);
    
    // Smooth scroll to the section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Update services in localStorage with debouncing
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      try {
        // Store service data without images
        const serviceData = services.map(({ id, title, price, description }) => ({
          id,
          title,
          price,
          description
        }));
        localStorage.setItem('services', JSON.stringify(serviceData));

        // Store images separately
        const serviceImages = services.reduce((acc, service) => {
          if (service.image.startsWith('data:')) {
            acc[service.id] = service.image;
          }
          return acc;
        }, {} as Record<string, string>);

        // Check if the images data would exceed localStorage limit
        const imagesSize = new Blob([JSON.stringify(serviceImages)]).size;
        if (imagesSize > 4.5 * 1024 * 1024) {
          console.warn('Service images exceed localStorage limit, clearing images');
          localStorage.removeItem('serviceImages');
        } else {
          localStorage.setItem('serviceImages', JSON.stringify(serviceImages));
        }
      } catch (error) {
        console.error('Error saving services:', error);
        // If there's an error, try to save without images
        try {
          const serviceData = services.map(({ id, title, price, description }) => ({
            id,
            title,
            price,
            description
          }));
          localStorage.setItem('services', JSON.stringify(serviceData));
        } catch (e) {
          console.error('Error saving service data:', e);
        }
      }
    }, 1000); // Debounce for 1 second

    return () => clearTimeout(timeoutId);
  }, [services]);

  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  useEffect(() => {
    if (logoImage) {
      localStorage.setItem('logoImage', logoImage);
    } else {
      localStorage.removeItem('logoImage');
    }
  }, [logoImage]);

  useEffect(() => {
    localStorage.setItem('heroImage', heroImage);
  }, [heroImage]);

  useEffect(() => {
    localStorage.setItem('videos', JSON.stringify(videos));
  }, [videos]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>, type: 'hero' | 'logo' | 'service' | 'review', index?: number) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageData = e.target?.result as string;
        if (type === 'hero') {
          setHeroImage(imageData);
        } else if (type === 'logo') {
          setLogoImage(imageData);
        } else if (type === 'service' && typeof index === 'number') {
          const updatedServices = [...services];
          updatedServices[index] = {
            ...updatedServices[index],
            image: imageData
          };
          setServices(updatedServices);
        } else if (type === 'review' && typeof index === 'number') {
          const updatedReviews = [...reviews];
          updatedReviews[index] = {
            ...updatedReviews[index],
            image: imageData
          };
          setReviews(updatedReviews);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', bookingForm);
    alert('Thank you for booking! We will contact you shortly to confirm your appointment.');
    setIsBookingOpen(false);
    setBookingForm({
      service: '',
      name: '',
      email: '',
      phone: '',
      date: '',
      time: ''
    });
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Review submitted:', reviewForm);
    alert('Thank you for your review! It will be posted after moderation.');
    setIsReviewOpen(false);
    setReviewForm({
      name: '',
      car: '',
      rating: 5,
      comment: '',
    });
  };

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Check file size (10MB limit)
    if (file.size > 10 * 1024 * 1024) {
      alert('Video file size must be less than 10MB');
      return;
    }

    // Check file type
    if (!file.type.startsWith('video/')) {
      alert('Please upload a valid video file');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const base64String = e.target?.result as string;
        const newVideo = {
          id: Date.now().toString(),
          url: base64String,
          type: file.type
        };

        // Check if adding new video would exceed localStorage limit
        const currentVideos = localStorage.getItem('videos');
        const parsedVideos = currentVideos ? JSON.parse(currentVideos) : [];
        const newVideos = [...parsedVideos, newVideo];
        
        // Check total size
        const newDataSize = new Blob([JSON.stringify(newVideos)]).size;
        if (newDataSize > 4.5 * 1024 * 1024) { // Leave some buffer
          alert('Cannot add more videos. Storage limit reached. Please delete some videos first.');
          return;
        }

        setVideos(newVideos);
        localStorage.setItem('videos', JSON.stringify(newVideos));
      } catch (error) {
        console.error('Error processing video:', error);
        alert('Error processing video. Please try again.');
      }
    };

    reader.onerror = () => {
      alert('Error reading video file. Please try again.');
    };

    reader.readAsDataURL(file);
  };

  const handleDeleteVideo = (id: string) => {
    try {
      const updatedVideos = videos.filter(video => video.id !== id);
      setVideos(updatedVideos);
      localStorage.setItem('videos', JSON.stringify(updatedVideos));
    } catch (error) {
      console.error('Error deleting video:', error);
      alert('Error deleting video. Please try again.');
    }
  };

  // Add function to clear all videos
  const clearAllVideos = () => {
    try {
      setVideos([]);
      localStorage.removeItem('videos');
      alert('All videos have been cleared.');
    } catch (error) {
      console.error('Error clearing videos:', error);
      alert('Error clearing videos. Please try again.');
    }
  };

  // Add function to clear all data
  const clearAllData = () => {
    try {
      localStorage.clear();
      setVideos([]);
      setServices(prevServices => 
        prevServices.map(service => ({
          ...service,
          image: defaultServices.find(s => s.id === service.id)?.image || service.image
        }))
      );
      alert('All data has been cleared and reset to defaults.');
    } catch (error) {
      console.error('Error clearing data:', error);
      alert('Error clearing data. Please try again.');
    }
  };

  // Add this useEffect to load saved videos
  useEffect(() => {
    try {
      const savedVideos = localStorage.getItem('videos');
      if (savedVideos) {
        const parsedVideos = JSON.parse(savedVideos);
        setVideos(parsedVideos);
      }
    } catch (error) {
      console.error('Error loading saved videos:', error);
      // Clear potentially corrupted data
      localStorage.removeItem('videos');
      setVideos([]);
    }
  }, []);

  const handleCloseAdmin = () => {
    setIsAdminOpen(false);
  };

  const RatingStars = ({ rating, interactive = false, onChange }: { rating: number, interactive?: boolean, onChange?: (rating: number) => void }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    if (interactive) {
      return (
        <div className="flex items-center space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => onChange?.(star)}
              className="focus:outline-none"
            >
              <Star 
                className={`w-6 h-6 ${star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
              />
            </button>
          ))}
        </div>
      );
    }
    
    return (
      <div className="flex items-center space-x-1">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
        {hasHalfStar && <StarHalf className="w-5 h-5 fill-yellow-400 text-yellow-400" />}
      </div>
    );
  };

  const Logo = () => (
    <div className="flex items-center space-x-2">
      {logoImage ? (
        <div className="relative w-40 h-16">
          <img
            src={logoImage}
            alt="Company Logo"
            className="w-full h-full object-contain"
          />
        </div>
      ) : (
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Shield className="h-10 w-10 text-blue-600" />
            <Car className="h-6 w-6 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            <Sparkles className="h-4 w-4 text-yellow-400 absolute -top-1 -right-1" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-gray-800 leading-none">LuxeDetail</span>
            <span className="text-xs text-blue-600 font-medium">PREMIUM AUTO CARE</span>
          </div>
        </div>
      )}
    </div>
  );

  // Add effect to handle initial image loading
  useEffect(() => {
    const savedHeroImage = localStorage.getItem('heroImage');
    const savedLogoImage = localStorage.getItem('logoImage');
    
    if (savedHeroImage) {
      setHeroImage(savedHeroImage);
    }
    
    if (savedLogoImage) {
      setLogoImage(savedLogoImage);
    }
  }, []);

  // Add effect to handle image updates
  useEffect(() => {
    if (heroImage) {
      localStorage.setItem('heroImage', heroImage);
    }
  }, [heroImage]);

  useEffect(() => {
    if (logoImage) {
      localStorage.setItem('logoImage', logoImage);
    } else {
      localStorage.removeItem('logoImage');
    }
  }, [logoImage]);

  const handleServiceImageUpload = (id: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Check file size (1MB limit for better performance)
    if (file.size > 1 * 1024 * 1024) {
      alert('Image file size must be less than 1MB for better performance');
      return;
    }

    // Check file type
    if (!file.type.startsWith('image/')) {
      alert('Please upload a valid image file');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const base64String = e.target?.result as string;
        
        // Update service image in state
        setServices(prevServices => 
          prevServices.map(service => 
            service.id === id ? { ...service, image: base64String } : service
          )
        );
      } catch (error) {
        console.error('Error processing image:', error);
        alert('Error processing image. Please try again.');
      }
    };

    reader.onerror = () => {
      alert('Error reading image file. Please try again.');
    };

    reader.readAsDataURL(file);
  };

  // Add function to reset services to defaults
  const resetServices = () => {
    try {
      setServices(defaultServices);
      localStorage.removeItem('services');
      localStorage.removeItem('serviceImages');
      alert('Services have been reset to defaults.');
    } catch (error) {
      console.error('Error resetting services:', error);
      alert('Error resetting services. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Button */}
      <button
        onClick={() => setIsAdminOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-2 rounded-full shadow-lg z-50 hover:bg-blue-700"
        title="Admin Panel"
      >
        <User className="h-6 w-6" />
      </button>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              {logoImage ? (
                <img 
                  src={logoImage} 
                  alt="LuxDetail Logo" 
                  className="h-12 w-auto"
                />
              ) : (
                <span className="text-2xl font-bold text-blue-600">LuxDetail</span>
              )}
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => handleNavigation('home')} 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavigation('services')} 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => handleNavigation('gallery')} 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Gallery
              </button>
              <button 
                onClick={() => handleNavigation('reviews')} 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Reviews
              </button>
              <button 
                onClick={() => handleNavigation('about')} 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => handleNavigation('contact')} 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Contact
              </button>
              <button 
                onClick={() => setIsBookingOpen(true)}
                className="ml-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 font-medium"
              >
                Book Now
              </button>
            </nav>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-blue-600"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="fixed inset-y-0 right-0 w-64 bg-white p-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Menu</h3>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="space-y-4">
              <button 
                onClick={() => handleNavigation('home')} 
                className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavigation('services')} 
                className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => handleNavigation('gallery')} 
                className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium"
              >
                Gallery
              </button>
              <button 
                onClick={() => handleNavigation('reviews')} 
                className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium"
              >
                Reviews
              </button>
              <button 
                onClick={() => handleNavigation('about')} 
                className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium"
              >
                About
              </button>
              <button 
                onClick={() => handleNavigation('contact')} 
                className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium"
              >
                Contact
              </button>
            </nav>
            <button 
              onClick={() => {
                setIsMenuOpen(false);
                setIsBookingOpen(true);
              }}
              className="w-full mt-6 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 font-medium"
            >
              Book Now
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen pt-20">
        <div className="relative h-[calc(100vh-5rem)] w-full">
          <img 
            src={heroImage}
            alt="Luxury car being detailed" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Premium Car Detailing</h1>
              <p className="text-xl md:text-2xl mb-8">Professional care for your luxury vehicle</p>
              <button 
                onClick={() => setIsBookingOpen(true)}
                className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-semibold">{service.price}</span>
                    <button 
                      onClick={() => {
                        setBookingForm(prev => ({ ...prev, service: service.title }));
                        setIsBookingOpen(true);
                      }}
                      className="text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <Gallery
          isAdmin={isAdmin}
          videos={videos}
          onDeleteVideo={handleDeleteVideo}
          onUploadVideo={handleVideoUpload}
        />
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Customer Reviews</h2>
            <button
              onClick={() => setIsReviewOpen(true)}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Write a Review
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <img 
                    src={review.image} 
                    alt={review.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{review.name}</h3>
                    <p className="text-gray-600 text-sm">{review.car}</p>
                  </div>
                </div>
                <RatingStars rating={review.rating} />
                <p className="mt-4 text-gray-600 italic">"{review.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About Us</h2>
            <p className="text-gray-600 mb-8">
              With over 10 years of experience in luxury car detailing, we provide the highest quality service
              to protect and enhance your vehicle's appearance. Our team of certified professionals uses only
              premium products and advanced techniques to deliver exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center">
              <Phone className="h-6 w-6 text-blue-600 mr-2" />
              <span>(305) 833-4488</span>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="h-6 w-6 text-blue-600 mr-2" />
              <span>Recardo.Pedra@gmail.com</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="h-6 w-6 text-blue-600 mr-2" />
              <span>12841 NW 23rd Pl, Westview, FL 33167</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Logo />
              <p className="text-gray-400 mt-4">
                Premium car detailing services for luxury vehicles.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => handleNavigation('home')} className="text-gray-400 hover:text-white">Home</button></li>
                <li><button onClick={() => handleNavigation('services')} className="text-gray-400 hover:text-white">Services</button></li>
                <li><button onClick={() => handleNavigation('gallery')} className="text-gray-400 hover:text-white">Gallery</button></li>
                <li><button onClick={() => handleNavigation('reviews')} className="text-gray-400 hover:text-white">Reviews</button></li>
                <li><button onClick={() => handleNavigation('about')} className="text-gray-400 hover:text-white">About</button></li>
                <li><button onClick={() => handleNavigation('contact')} className="text-gray-400 hover:text-white">Contact</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Hours</h3>
              <ul className="text-gray-400">
                <li>Mon-Fri: 8am - 6pm</li>
                <li>Saturday: 9am - 5pm</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LuxeDetail. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      {isBookingOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Book an Appointment</h3>
              <button 
                onClick={() => setIsBookingOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service</label>
                <select
                  value={bookingForm.service}
                  onChange={(e) => setBookingForm(prev => ({ ...prev, service: e.target.value }))}
                  className="w-full p-2 border rounded-md"
                  required
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service.title}>{service.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  value={bookingForm.name}
                  onChange={(e) => setBookingForm(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={bookingForm.email}
                  onChange={(e) => setBookingForm(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  value={bookingForm.phone}
                  onChange={(e) => setBookingForm(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <input
                  type="date"
                  value={bookingForm.date}
                  onChange={(e) => setBookingForm(prev => ({ ...prev, date: e.target.value }))}
                  className="w-full p-2 border rounded-md"
                  required
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                <input
                  type="time"
                  value={bookingForm.time}
                  onChange={(e) => setBookingForm(prev => ({ ...prev, time: e.target.value }))}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Review Modal */}
      {isReviewOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Write a Review</h3>
              <button 
                onClick={() => setIsReviewOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <form onSubmit={handleReviewSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  value={reviewForm.name}
                  onChange={(e) => setReviewForm(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Car Model</label>
                <input
                  type="text"
                  value={reviewForm.car}
                  onChange={(e) => setReviewForm(prev => ({ ...prev, car: e.target.value }))}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                <RatingStars 
                  rating={reviewForm.rating} 
                  interactive={true}
                  onChange={(rating) => setReviewForm(prev => ({ ...prev, rating }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Review</label>
                <textarea
                  value={reviewForm.comment}
                  onChange={(e) => setReviewForm(prev => ({ ...prev, comment: e.target.value }))}
                  className="w-full p-2 border rounded-md h-32"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Admin Modal */}
      {isAdminOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto"
          onClick={handleCloseAdmin}
        >
          <div 
            className="min-h-screen flex items-start justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div 
              className="bg-white rounded-lg max-w-4xl w-full my-8 p-6 relative"
            >
              <button 
                onClick={handleCloseAdmin}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Admin Panel</h2>
              </div>

              {/* Hero Background Section */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4">Hero Background</h4>
                <div className="border p-4 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="relative w-64 h-36">
                      <img
                        src={heroImage}
                        alt="Hero Background"
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <label className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg cursor-pointer hover:bg-opacity-60">
                        <Upload className="h-6 w-6 text-white" />
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleImageUpload(e, 'hero')}
                        />
                      </label>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-600">Upload your homepage background image here. Recommended size: 2000x1000px</p>
                      <p className="text-sm text-gray-500 mt-2">Click on the image to upload a new one</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Logo Section */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4">Logo</h4>
                <div className="border p-4 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="relative w-40 h-16">
                      {logoImage ? (
                        <img
                          src={logoImage}
                          alt="Company Logo"
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
                          <span className="text-gray-500">No logo uploaded</span>
                        </div>
                      )}
                      <label className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg cursor-pointer hover:bg-opacity-60">
                        <Upload className="h-6 w-6 text-white" />
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleImageUpload(e, 'logo')}
                        />
                      </label>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-600">Upload your company logo here. Recommended size: 160x64px</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services Section */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4">Services</h4>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="border p-4 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="relative w-32 h-32">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover rounded-lg"
                          />
                          <label className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg cursor-pointer hover:bg-opacity-60">
                            <Upload className="h-6 w-6 text-white" />
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) => handleServiceImageUpload(service.id, e)}
                            />
                          </label>
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold">{service.title}</h5>
                          <p className="text-gray-600">{service.description}</p>
                          <p className="text-blue-600 font-semibold">{service.price}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reviews Section */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4">Reviews</h4>
                <div className="space-y-4">
                  {reviews.map((review, index) => (
                    <div key={index} className="border p-4 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="relative w-24 h-24">
                          <img
                            src={review.image}
                            alt={review.name}
                            className="w-full h-full object-cover rounded-full"
                          />
                          <label className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full cursor-pointer hover:bg-opacity-60">
                            <Upload className="h-6 w-6 text-white" />
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) => handleImageUpload(e, 'review', index)}
                            />
                          </label>
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold">{review.name}</h5>
                          <p className="text-gray-600">{review.car}</p>
                          <RatingStars rating={review.rating} />
                          <p className="text-gray-600 mt-2">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery Videos Section */}
              <div>
                <h4 className="text-xl font-semibold mb-4">Gallery Videos</h4>
                <div className="space-y-4">
                  <div className="border p-4 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="relative w-48 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                        <label className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg cursor-pointer hover:bg-opacity-60">
                          <Video className="h-8 w-8 text-white" />
                          <input
                            type="file"
                            accept="video/*"
                            className="hidden"
                            onChange={handleVideoUpload}
                          />
                        </label>
                        <span className="text-gray-500">Click to upload video</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-600">Upload videos to showcase your work. Recommended format: MP4</p>
                        <p className="text-sm text-gray-500 mt-2">Maximum file size: 100MB</p>
                        <p className="text-sm text-gray-500">Supported formats: MP4, WebM, Ogg</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {videos.map((video) => (
                      <div key={video.id} className="relative group">
                        <video
                          src={video.url}
                          controls
                          className="w-full h-48 object-cover rounded-lg"
                          title={video.title}
                        />
                        <button
                          onClick={() => handleDeleteVideo(video.id)}
                          className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;