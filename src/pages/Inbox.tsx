import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Upload, X, Folder, Image as ImageIcon, Search, Filter, Calendar, Building, Tag, Download, User, Star, PaintBucket, StepBack, ArrowBigLeft, SkipBackIcon, FileQuestionIcon, FilesIcon, MapPin, Users, Clock } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';
import toast from 'react-hot-toast';
import { FiSkipBack } from 'react-icons/fi';
import SignedInBadge from '../components/SignedInBadge';
interface GalleryItem {
  viewed: any;
  id: string;
  file_name: string;
  message: string;
  file_data: string;
  file_url: string;
  created_at: string;
  folder?: string;
  service_type?: string;
  company_name?: string;
  uploaded_by?: string;
  tags?: string[];
  file_size?: number;
  file_type?: string;
  rating?: number;
}

// Folder structure with sample images
const folderData = {
  'Annual Reports': [
    './assets/images/wetransfer_website_2025-09-18_1414/website/Annual Reports/GVfy86fW4AAFn5n.jpg',
    './assets/images/wetransfer_website_2025-09-18_1414/website/Annual Reports/IBP-OBS-Annual-Report.jpg',
    './assets/images/wetransfer_website_2025-09-18_1414/website/Annual Reports/Screenshot 2024-09-23 124612.png',
    './assets/images/wetransfer_website_2025-09-18_1414/website/Annual Reports/Screenshot 2024-09-23 130226.png',
    './assets/images/wetransfer_website_2025-09-18_1414/website/Annual Reports/WhatsApp Image 2024-09-23 at 13.26.58.jpeg',
    './assets/images/wetransfer_website_2025-09-18_1414/website/Annual Reports/WhatsApp Image 2024-09-23 at 13.27.00.jpeg',
    
  ],
  'Signage': [
    './assets/images/wetransfer_website_2025-09-18_1414/website/Signage/top-signwriter-and-signage-tips.jpg',
    './assets/images/wetransfer_website_2025-09-18_1414/website/Signage/Screenshot 2024-09-23 131156.png',
    './assets/images/wetransfer_website_2025-09-18_1414/website/Signage/WhatsApp Image 2024-09-23 at 13.34.33 (1).jpeg',
    './assets/images/wetransfer_website_2025-09-18_1414/website/Signage/WhatsApp Image 2024-09-23 at 13.34.33.jpeg',
    './assets/images/wetransfer_website_2025-09-18_1414/website/Signage/WhatsApp Image 2024-09-23 at 13.34.34 (1).jpeg',
    './assets/images/wetransfer_website_2025-09-18_1414/website/Signage/WhatsApp Image 2024-09-23 at 13.34.34.jpeg',
   
  ],
  'Executive Gift': [
    './assets/images/wetransfer_website_2025-09-18_1414/website/website excutive gift/default_1024X1024 (1).jpg',
    './assets/images/wetransfer_website_2025-09-18_1414/website/website excutive gift/default_1024X1024 (2).jpg',
    './assets/images/wetransfer_website_2025-09-18_1414/website/website excutive gift/default_1024X1024 (3).jpg',
    './assets/images/wetransfer_website_2025-09-18_1414/website/website excutive gift/default_1024X1024 (4).jpg',
    './assets/images/wetransfer_website_2025-09-18_1414/website/website excutive gift/default_1024X1024 (5).jpg',
    './assets/images/wetransfer_website_2025-09-18_1414/website/website excutive gift/default_1024X1024 (6).jpg',
    './assets/images/wetransfer_website_2025-09-18_1414/website/website excutive gift/default_1024X1024 (8).jpg',
    './assets/images/wetransfer_website_2025-09-18_1414/website/website excutive gift/default_1024X1024.jpg',
    
  ],
  'Laptop Bags': [
    './assets/images/wetransfer_website_2025-09-18_1414/website/website laptop bags/default_1024X1024 (1).jpg',
    './assets/images/wetransfer_website_2025-09-18_1414/website/website laptop bags/default_1024X1024 (2).jpg',
    './assets/images/wetransfer_website_2025-09-18_1414/website/website laptop bags/default_1024X1024 (3).jpg',
    './assets/images/wetransfer_website_2025-09-18_1414/website/website laptop bags/default_1024X1024 (4).jpg',
    './assets/images/wetransfer_website_2025-09-18_1414/website/website laptop bags/default_1024X1024 (5).jpg',
    './assets/images/wetransfer_website_2025-09-18_1414/website/website laptop bags/default_1024X1024 (6).jpg',
    './assets/images/wetransfer_website_2025-09-18_1414/website/website laptop bags/default_1024X1024 (7).jpg',
    './assets/images/wetransfer_website_2025-09-18_1414/website/website laptop bags/default_1024X1024 (8).jpg',
    './assets/images/wetransfer_website_2025-09-18_1414/website/website laptop bags/default_1024X1024 l.jpg',
    './assets/images/wetransfer_website_2025-09-18_1414/website/website laptop bags/default_260X250.jpg',
    './assets/images/wetransfer_website_2025-09-18_1414/website/website laptop bags/default_1024X1024.jpg',
  ],
  'Stationery': [
    './assets/images/wetransfer_website_2025-09-18_1414/website/website stationery/default_1024X1024 (3).jpg',
    './assets/images/wetransfer_website_2025-09-18_1414/website/website stationery/default_1024X1024 (4).jpg',
   './assets/images/wetransfer_website_2025-09-18_1414/website/website stationery/default_1024X1024 (5).jpg',
   './assets/images/wetransfer_website_2025-09-18_1414/website/website stationery/default_1024X1024 (6).jpg',
   './assets/images/wetransfer_website_2025-09-18_1414/website/website stationery/default_1024X1024 (7).jpg',
   './assets/images/wetransfer_website_2025-09-18_1414/website/website stationery/default_1024X1024.jpg',
   './assets/images/wetransfer_website_2025-09-18_1414/website/website stationery/Haus-006.jpg',
   './assets/images/wetransfer_website_2025-09-18_1414/website/website stationery/IDEA-5341-BL_1024X1024.jpg',
   './assets/images/wetransfer_website_2025-09-18_1414/website/website stationery/IDEA-55002-IDEA-55002-SW_1024X1024.jpg',
 
  ],
  'T Shirts': [
    './assets/images/wetransfer_website_2025-09-18_1414/website/website t shirts/2e910c03c29aa8f6aa63a7252a395114.jpg',
    './assets/images/wetransfer_website_2025-09-18_1414/website/website t shirts/6c8fd84afc8029b62e5312409f8664f9.jpg',
   './assets/images/wetransfer_website_2025-09-18_1414/website/website t shirts/ALT-ASMS-L-MOBK 3_1024X1024.jpg',
   './assets/images/wetransfer_website_2025-09-18_1414/website/website t shirts/2e910c03c29aa8f6aa63a7252a395114.jpg',
   './assets/images/wetransfer_website_2025-09-18_1414/website/website t shirts/default_1024X1024 (1).jpg',
   './assets/images/wetransfer_website_2025-09-18_1414/website/website t shirts/default_1024X1024 (2).jpg',
   './assets/images/wetransfer_website_2025-09-18_1414/website/website t shirts/default_1024X1024 (3).jpg',
   './assets/images/wetransfer_website_2025-09-18_1414/website/website t shirts/default_1024X1024 (4).jpg',
   './assets/images/wetransfer_website_2025-09-18_1414/website/website t shirts/default_1024X1024.jpg',
   './assets/images/wetransfer_website_2025-09-18_1414/website/website t shirts/GS-AV-263-A-GY-MOGR 040_1024X1024.jpg',
  ],
  'Water Bottles': [
   './assets/images/wetransfer_website_2025-09-18_1414/website/website water bottles/default_1024X1024.jpg',
   './assets/images/wetransfer_website_2025-09-18_1414/website/website water bottles/default_1024X1024 (1).jpg',
   './assets/images/wetransfer_website_2025-09-18_1414/website/website water bottles/default_1024X1024 (2).jpg',
   './assets/images/wetransfer_website_2025-09-18_1414/website/website water bottles/default_1024X1024 (3).jpg',
   './assets/images/wetransfer_website_2025-09-18_1414/website/website water bottles/default_1024X1024 (4).jpg',
   './assets/images/wetransfer_website_2025-09-18_1414/website/website water bottles/default_1024X1024 (5).jpg',
   './assets/images/wetransfer_website_2025-09-18_1414/website/website water bottles/default_1024X1024 (6).jpg',
   './assets/images/wetransfer_website_2025-09-18_1414/website/website water bottles/default_1024X1024 (7).jpg',
   './assets/images/wetransfer_website_2025-09-18_1414/website/website water bottles/default_1024X1024 (8).jpg',
   './assets/images/wetransfer_website_2025-09-18_1414/website/website water bottles/default_1024X1024 (9).jpg',
   './assets/images/wetransfer_website_2025-09-18_1414/website/website water bottles/default_1024X1024 (10).jpg',
   './assets/images/wetransfer_website_2025-09-18_1414/website/website water bottles/default_1024X1024 (11).jpg',
   ]
};

// Sample service types and companies for dropdowns
const serviceTypes = [
  'Events & Activations',
  'Strategy & Logistics',
  'Creative Solutions',
  'Digital Marketing',
  'Brand Development',
  'Print Design',
  'Web Design',
  'Social Media'
];


const provinces = [
  'Gauteng', 'Western Cape', 'KwaZulu-Natal', 'Eastern Cape', 
  'Free State', 'Limpopo', 'Mpumalanga', 'North West', 'Northern Cape'
];

const towns = {
  'Gauteng': ['Johannesburg', 'Pretoria', 'Sandton', 'Randburg', 'Midrand', 'Centurion'],
  'Western Cape': ['Cape Town', 'Stellenbosch', 'Paarl', 'Worcester', 'George'],
  'KwaZulu-Natal': ['Durban', 'Pietermaritzburg', 'Umhlanga', 'Ballito', 'Richards Bay'],
  'Eastern Cape': ['Port Elizabeth', 'East London', 'Grahamstown', 'Mthatha'],
  'Free State': ['Bloemfontein', 'Welkom', 'Bethlehem', 'Kroonstad'],
  'Limpopo': ['Polokwane', 'Thohoyandou', 'Lephalale', 'Mokopane'],
  'Mpumalanga': ['Nelspruit', 'Witbank', 'Middleburg', 'Emalahleni'],
  'North West': ['Rustenburg', 'Potchefstroom', 'Klerksdorp', 'Mahikeng'],
  'Northern Cape': ['Kimberley', 'Upington', 'Springbok', 'De Aar']
};

const companySizes = [
  'Startup (1-10)',
  'Small Business (11-50)',
  'Medium Business (51-200)',
  'Large Enterprise (201-1000)',
  'Corporate (1000+)'
];

const southAfricanCompanies = [
  'Redbull SA',
  'Nando\'s',
  'Woolworths',
  'Pick n Pay',
  'MTN',
  'Vodacom',
  'Standard Bank',
  'Absa',
  'Sanlam',
  'Sasol',
  'Shoprite',
  'Mr Price',
  'Tiger Brands',
  'Bidvest',
  'Dis-Chem',
  'Clicks',
  'MultiChoice',
  'Telkom',
  'Old Mutual',
  'Investec',
  'Yoco',
  'PayFast',
  'Luno',
  'OfferZen',
  'JUMO',
  'CarTrack',
  'Discovery'
];

const potentialCustomers = [
  'ACSA',
  'Cheil',
  'Chicken Lovers',
  'CSOS',
  'Mondelez',
  'PayFast',
  'Samsung',
  'Sanpellegrino',
  'Queen Glow'
];

const allCompanies = [...southAfricanCompanies, ...potentialCustomers];

const Inbox: React.FC = () => {
 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedEnquiryId,setSelectedEnquiryId] = useState('');
  const [uploads, setUploads] = useState<GalleryItem[]>([]);
  const [filteredUploads, setFilteredUploads] = useState<GalleryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  
  // View All Popup States
  const [showViewAllPopup, setShowViewAllPopup] = useState(false);
  const [activeFolder, setActiveFolder] = useState<string>('Annual Reports');
  const [currentFolderImageIndex, setCurrentFolderImageIndex] = useState(0);

  // Search and Filter States
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedServiceType, setSelectedServiceType] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [selectedFolder, setSelectedFolder] = useState('');
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);

  // Add new filter states
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedTown, setSelectedTown] = useState('');
  const [selectedCompanySize, setSelectedCompanySize] = useState('');
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);
  const [dateRange, setDateRange] = useState({
    start: '',
    end: ''
  });
  
  
	const [showServicePopup, setShowServicePopup] = useState(false);
	const [serviceUploads, setServiceUploads] = useState<GalleryItem[]>([]);
	const [serviceSearchTerm, setServiceSearchTerm] = useState('');
	const [serviceSortBy, setServiceSortBy] = useState('newest');
	const [selectedServiceItems, setSelectedServiceItems] = useState<string[]>([]);

	const [showAllUploadsPopup, setShowAllUploadsPopup] = useState(false);
	const [allUploadsSearchTerm, setAllUploadsSearchTerm] = useState('');
	const [allUploadsServiceFilter, setAllUploadsServiceFilter] = useState('');
	const [allUploadsStatusFilter, setAllUploadsStatusFilter] = useState('');
	const [selectedAllItems, setSelectedAllItems] = useState<string[]>([]);

	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize, setPageSize] = useState(5);

  const availableTowns = selectedProvince ? towns[selectedProvince as keyof typeof towns] || [] : [];
  const applyFilters = () => {
    let filtered = uploads;

    if (selectedCompanies.length > 0) {
      filtered = filtered.filter(item => 
        selectedCompanies.includes(item.company_name || '')
      );
    }

    if (selectedProvince) {
      filtered = filtered.filter(item => {
        return true; // Placeholder
      });
    }

    if (selectedTown) {
      filtered = filtered.filter(item => {
        return true; // Placeholder
      });
    }

    if (selectedCompanySize) {
      filtered = filtered.filter(item => {
        return true; // Placeholder
      });
    }

    if (dateRange.start) {
      filtered = filtered.filter(item => 
        new Date(item.created_at) >= new Date(dateRange.start)
      );
    }
    if (dateRange.end) {
      filtered = filtered.filter(item => 
        new Date(item.created_at) <= new Date(dateRange.end)
      );
    }

    setFilteredUploads(filtered);
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedProvince('');
    setSelectedTown('');
    setSelectedCompanySize('');
    setSelectedCompanies(['']);
    setDateRange({ start: '', end: '' });
    setFilteredUploads(uploads);
  };

  // Toggle company selection
  const toggleCompanySelection = (company: string) => {
    setSelectedCompanies(prev => 
      prev.includes(company) 
        ? prev.filter(c => c !== company)
        : [...prev, company]
    );
  };

  useEffect(() => {
    applyFilters();
  }, [selectedProvince, selectedTown, selectedCompanySize, selectedCompanies, dateRange, uploads]);

useEffect(() => {
  const init = async () => {
    await fetchUploads();
  };
  init();
}, []);

  const handleUpload = async () => {
    if (!selectedFile || !user) return;

    setIsUploading(true);
    try {
      const fileExt = selectedFile.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('gallery-images')
        .upload(fileName, selectedFile);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('gallery-images')
        .getPublicUrl(fileName);

      const { error: dbError } = await supabase
        .from('uploads')
        .insert([
          {
            user_id: user.id,
            file_name: selectedFile.name,
            file_url: publicUrl,
            file_size: selectedFile.size,
            file_type: selectedFile.type,
          },
        ]);

      if (dbError) throw dbError;

      toast.success('Image uploaded successfully!');
      setShowUploadModal(false);
      setSelectedFile(null);
      fetchUploads();
    } catch (error: any) {
      toast.error(error.message || 'Upload failed');
    } finally {
      setIsUploading(false);
    }
  };

const uuidToNumericalValue =(uuid:string)=> {
  return uuid.split('-').join('').split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
}

const openServicePopup = (service: string) => {
  setSelectedServiceType(service);
  const filtered = uploads.filter(u => u.service_type === service);
  setServiceUploads(filtered);
  setShowServicePopup(true);
};

const openAllUploadsPopup = () => {
  setShowAllUploadsPopup(true);
};

const markAllAsViewed = () => {
  setUploads(prev => prev.map(u => ({ ...u, viewed: true })));
  toast.success('All items marked as actioned');
};

const toggleServiceItemSelection = (id: string) => {
  setSelectedServiceItems(prev =>
    prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
  );
};

const toggleAllItemSelection = (id: string) => {
  setSelectedAllItems(prev =>
    prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
  );
};

const markSelectedAsActioned = () => {
  setUploads(prev => prev.map(u =>
    selectedServiceItems.includes(u.id) ? { ...u, viewed: true } : u
  ));
  setSelectedServiceItems([]);
  toast.success('Selected items marked as actioned');
};

const markAllSelectedAsViewed = () => {
  setUploads(prev => prev.map(u =>
    selectedAllItems.includes(u.id) ? { ...u, viewed: true } : u
  ));
  setSelectedAllItems([]);
  saveMarkSelectedAsViewed(selectedAllItems)
  toast.success('Selected items marked as viewed');
};

const downloadSelected = () => {
  selectedServiceItems.forEach(id => {
    const item = uploads.find(u => u.id === id);
    if (item) {
      downloadImage(item.file_url, item.file_name);
    }
  });
  toast.success(`Downloading ${selectedServiceItems.length} files`);
};

const downloadAllSelected = () => {
  selectedAllItems.forEach(id => {
    const item = uploads.find(u => u.id === id);
    if (item) {
      downloadImage(item.file_url, item.file_name);
    }
  });
  toast.success(`Downloading ${selectedAllItems.length} files`);
};

const viewImage = (itemSelected: GalleryItem) => {
  let item : GalleryItem=filteredAllUploads[currentIndex];

  const index = uploads.findIndex(u => u.id === item.id);
  if (index !== -1) {
    setCurrentIndex(index);
    setSelectedEnquiryId(item.id);
    
    //call http get Enqurity by id
    fetchEnquiryById(item.id);
    console.log('fetchEnquiryById MSG' +item.message )
    item=itemSelected;
    setUploads(prev => prev.map(u => u.id === item.id ? { ...u, viewed: true } : u));
    setShowViewAllPopup(true);
  }
};

const fetchEnquiryById = async (id: string ) => {
  try {
    const response = await fetch(`https://koporate-api-973519769657.europe-west1.run.app/api/enquiries/${id}`);
    if (response.ok) {
      try {
        const enquiry = await response.json();
        console.log(enquiry);
      } catch (error) {
        console.error('Error parsing JSON:', error);
        console.log(await response.text());
      }
    } else {
      console.error('Failed to fetch enquiry:', response.status);
      console.log(await response.text());
    }
  } catch (error) {
    console.error('Error fetching enquiry:', error);
  }
};

// Add filtered arrays for popups
const filteredServiceUploads = serviceUploads
  .filter(item => 
    item.file_name.toLowerCase().includes(serviceSearchTerm.toLowerCase()) ||
    item.company_name?.toLowerCase().includes(serviceSearchTerm.toLowerCase())
  )
  .sort((a, b) => {
    switch (serviceSortBy) {
      case 'newest': return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      case 'oldest': return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
      case 'name': return a.file_name.localeCompare(b.file_name);
      case 'rating': return (b.rating || 0) - (a.rating || 0);
      default: return 0;
    }
  });

const filteredAllUploads = uploads
  .filter(item => 
    item.file_name.toLowerCase().includes(allUploadsSearchTerm.toLowerCase()) ||
    item.company_name?.toLowerCase().includes(allUploadsSearchTerm.toLowerCase()) ||
    item.service_type?.toLowerCase().includes(allUploadsSearchTerm.toLowerCase())
  )
  .filter(item => 
    !allUploadsServiceFilter || item.service_type === allUploadsServiceFilter
  )
  .filter(item => {
    if (!allUploadsStatusFilter) return true;
    if (allUploadsStatusFilter === 'new') return !item.viewed;
    if (allUploadsStatusFilter === 'viewed') return item.viewed;
    return true;
  })
  .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

 
const paginatedData = filteredAllUploads.slice(
  (currentPage - 1) * pageSize,
  currentPage * pageSize
);

const totalPages = Math.ceil(filteredAllUploads.length / pageSize);

  // View All Popup Functions
  const openViewAllPopup = () => {
    setShowViewAllPopup(true);
    setActiveFolder('Annual Reports');
    setCurrentFolderImageIndex(0);
  };

  const closeViewAllPopup = () => {
    setShowViewAllPopup(false);
  };

  const nextFolderImage = () => {
    setCurrentFolderImageIndex(prev => 
      prev === folderData[activeFolder as keyof typeof folderData].length - 1 ? 0 : prev + 1
    );
  };

  const prevFolderImage = () => {
    setCurrentFolderImageIndex(prev => 
      prev === 0 ? folderData[activeFolder as keyof typeof folderData].length - 1 : prev - 1
    );
  };

  const handleFolderChange = (folderName: string) => {
    setActiveFolder(folderName);
    setCurrentFolderImageIndex(0);
  };

  const currentFolderImages = folderData[activeFolder as keyof typeof folderData] || [];

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedServiceType('');
    setSelectedCompany('');
    setDateFrom('');
    setDateTo('');
    setSelectedFolder('');
    setMinRating(0);
    setSortBy('newest');
  };

 const fetchUploads = async () => {
  try {

   const response = await fetch('https://koporate-api-973519769657.europe-west1.run.app/api/enquiries', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const data = await response.json();
    const formattedData = data.map((item: any) => ({
      id: item.id,
      file_name: item.fileName,
      file_url: item.fileUrl || item.fileData,
      created_at: item.date || new Date().toISOString(),
      folder: item.folder || 'Miscellaneous',
      service_type: item.serviceType || 'Unknown',
      company_name: item.company,
      uploaded_by: item.uploadedBy || 'Unknown',
      tags: item.tags || [],
      file_size: item.fileSize,
      file_type: item.fileType,
      rating: item.rating || 0,
      viewed: false
    }));
    setUploads(formattedData);
    setFilteredUploads(formattedData);
  } catch (error) {
    console.error('Error fetching uploads:', error);
  } finally {
    setIsLoading(false);
  }
};

 const saveMarkSelectedAsViewed = async (selectedAllItems:string[]) => {
  try {

    const response = await fetch('https://koporate-api-973519769657.europe-west1.run.app/api/enquiries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(selectedAllItems)
    });
  } catch (error) {
    console.error('Error fetching uploads:', error);
  } finally {
    setIsLoading(false);
  }
};

  const downloadImage = (imageUrl: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = fileName;
    link.click();
  };

  if (isLoading) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        {/* <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div> */}
       
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50">
        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-white z-50">
            <img
              src={'./assets/images/inbox.gif'}
              alt={'Loading...'}
              className="w-60 h-60 object-cover"
            />
            <p className="mt-4">Loading...</p>
          </div>
        </div>
      </div>
     
    );
  }


  return (
    <div className="pt-1">
      {/* Hero Section */}
      <section className="pl-0 py-8 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar */}
            <div className="lg:w-80 flex-shrink-0 space-y-6">
              {/* Inbox Dashboard - Your existing code remains the same */}
             <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
          
            <h3 className="text-lg font-bold text-gray-800 flex items-center space-x-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>Inbox</span>
            </h3>
           
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-blue-50 p-3 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-xs text-blue-600 font-medium">New Uploads</span>
                <span className="bg-blue-600 text-white text-xs px-1 rounded">{uploads.filter(u => !u.viewed).length}</span>
              </div>
              <p className="text-lg font-bold text-blue-800">{uploads.filter(u => !u.viewed).length}</p>
            </div>
            
            <div className="bg-green-50 p-3 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-xs text-green-600 font-medium">Viewed</span>
                <span className="bg-green-600 text-white text-xs px-1 rounded">{uploads.filter(u => u.viewed).length}</span>
              </div>
              <p className="text-lg font-bold text-green-800">{uploads.filter(u => u.viewed).length}</p>
            </div>
          </div>

          {/* Service Type Breakdown */}
          <div className="mb-4">
            <div className="space-y-2">
              {serviceTypes.map(service => {
                const count = uploads.filter(u => u.service_type === service).length;
                const newCount = uploads.filter(u => u.service_type === service && !u.viewed).length;
                if (count === 0) return null;
                
                return (
                  <button
                    key={service}
                    onClick={() => openServicePopup(service)}
                    className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors group"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span className="text-sm text-gray-700">{service}</span>
                      {newCount > 0 && (
                        <span className="bg-red-500 text-white text-xs px-1 rounded">{newCount}</span>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-500">{count}</span>
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

              {/* Enhanced Filters Sidebar */}
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                {/* Filters Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-gray-800 flex items-center space-x-2">
                    <Filter className="w-5 h-5 text-blue-600" />
                    <span>Campaign Filters</span>
                  </h3>
                  <button
                    onClick={clearAllFilters}
                    className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Clear All
                  </button>
                </div>

                {/* Location Filters */}
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      Location
                    </label>
                    <select
                      value={selectedProvince}
                      onChange={(e) => {
                        setSelectedProvince(e.target.value);
                        setSelectedTown(''); // Reset town when province changes
                      }}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Province</option>
                      {provinces.map(province => (
                        <option key={province} value={province}>{province}</option>
                      ))}
                    </select>
                  </div>

                  {selectedProvince && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Town/City
                      </label>
                      <select
                        value={selectedTown}
                        onChange={(e) => setSelectedTown(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select Town</option>
                        {availableTowns.map(town => (
                          <option key={town} value={town}>{town}</option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>

               

                {/* Date Range Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Date Range
                  </label>
                  <div className="space-y-2">
                    <input
                      type="date"
                      value={dateRange.start}
                      onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="From date"
                    />
                    <input
                      type="date"
                      value={dateRange.end}
                      onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="To date"
                    />
                  </div>
                </div>

                {/* Companies Filter */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center">
                    <Building className="w-4 h-4 mr-2" />
                    Companies ({selectedCompanies.length} selected)
                  </label>
                  
                  {/* South African Companies */}
                  <div className="mb-3">
                    <h4 className="text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                      Major Brands
                    </h4>
                    <div className="space-y-1 max-h-32 overflow-y-auto">
                      {southAfricanCompanies.map(company => (
                        <label key={company} className="flex items-center space-x-2 text-sm cursor-pointer hover:bg-gray-50 p-1 rounded">
                          <input
                            type="checkbox"
                            checked={selectedCompanies.includes(company)}
                            onChange={() => toggleCompanySelection(company)}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className='text-gray-700'>
                            {company}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Potential Customers */}
                  <div>
                    <h4 className="text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                      Previous/Existing Clients
                    </h4>
                    <div className="space-y-1 max-h-32 overflow-y-auto">
                      {potentialCustomers.map(company => (
                        <label key={company} className="flex items-center space-x-2 text-sm cursor-pointer hover:bg-gray-50 p-1 rounded">
                          <input
                            type="checkbox"
                            checked={selectedCompanies.includes(company)}
                            onChange={() => toggleCompanySelection(company)}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="text-gray-700">{company}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Results Count */}
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-800 font-medium">
                    Showing {filteredUploads.length} of {uploads.length} campaigns
                  </p>
                  {selectedCompanies.length > 0 && (
                    <p className="text-xs text-blue-600 mt-1">
                      {selectedCompanies.length} company{selectedCompanies.length !== 1 ? 's' : ''} selected
                    </p>
                  )}
                </div>
              </div>
            </div>



 {/* Gallery Content - Your existing gallery content remains the same */}
<div className="flex-1">
  {filteredUploads.length > 0 ? (
    <div className="relative">
      {showViewAllPopup &&  (
       <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
         
          <hr/>
        {/* Header */}
      <div className="flex justify-between items-center p-6 border-b border-gray-200">
       <div className="flex items-center">
          <svg
            onClick={() => setShowViewAllPopup(false)}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="mr-2 cursor-pointer"
          >
            <circle cx="12" cy="12" r="10" fill="#f0f0f0" />
            <path d="M15 18l-6-6 6-6" stroke="#333" />
          </svg>
          <span className="text-[#00CFC1]">
            Enquiry ID: <strong>{uuidToNumericalValue(selectedEnquiryId)}</strong>
          </span>
        </div>
          
          <button
            onClick={() => setShowViewAllPopup(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Search and Filters */}
        {/* <div className="p-4 border-b border-gray-200 bg-gray-50">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search within service type..."
                value={serviceSearchTerm}
                onChange={(e) => setServiceSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <select
              value={serviceSortBy}
              onChange={(e) => setServiceSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="name">Name A-Z</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div> */}
   

    
  <div className="relative w-full h-full">
  <img 
    className="w-full h-full object-cover"
    src="./assets/images/artworkredbull.png"
    // src={filteredUploads[currentIndex].file_data}
    alt={filteredUploads[currentIndex].file_name} 
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
  <div className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
    <h3>Redbull Campaign</h3>
  </div>
  <div className="absolute bottom-6 left-6 text-white">
    <div className="flex flex-wrap gap-2 mb-2">
      {filteredUploads[currentIndex].service_type && (
        <span className="px-2 py-1 bg-blue-600 rounded-full text-xs">
          {filteredUploads[currentIndex].service_type}
        </span>
      )}
      {filteredUploads[currentIndex].company_name && (
        <span className="px-2 py-1 bg-green-600 rounded-full text-xs">
          {/* {filteredUploads[currentIndex].company_name} */}
          Redbull SA
        </span>
      )}
      {filteredUploads[currentIndex].rating && (
        <span className="px-2 py-1 bg-yellow-600 rounded-full text-xs flex items-center">
          <Star className="w-3 h-3 mr-1" />
          {filteredUploads[currentIndex].rating}
        </span>
      )}
    </div>
    <p className="text-gray-200">
      {new Date(filteredUploads[currentIndex].created_at).toLocaleDateString()}
      {filteredUploads[currentIndex].uploaded_by && (
        // <span className="ml-2">• Uploaded by {filteredUploads[currentIndex].uploaded_by}</span>
        <span className="ml-2">• Uploaded by Thato</span>
      )}
    </p>
  </div>
</div>
      
       </motion.div> 
       
  )}
     
  {!showViewAllPopup &&  (
     <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-7xl max-h-[80vh] h-screen flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
 
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <div className="flex items-center">
            {/* <FilesIcon size={40} className="mr-2" /> */}
            <span className="text-[#00CFC1] text-3xl font-bold tracking-wide">Enquiries</span>
          </div>
          
        </div>

        {/* Enhanced Search and Filters */}
        <div className="p-4 border-b border-gray-200 bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search all uploads..."
                value={allUploadsSearchTerm}
                onChange={(e) => setAllUploadsSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <select
              value={allUploadsServiceFilter}
              onChange={(e) => setAllUploadsServiceFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Services</option>
              {serviceTypes.map(service => (
                <option key={service} value={service}>{service}</option>
              ))}
            </select>
            <select
              value={allUploadsStatusFilter}
              onChange={(e) => setAllUploadsStatusFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Status</option>
              <option value="new">New Only</option>
              <option value="viewed">Viewed Only</option>
            </select>
          </div>
        </div>

        {/* Enhanced Data Table */}
        <div className=" overflow-y-auto">
          <table className="w-full">
            <thead className="bg-gray-50 sticky top-0">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  File Name
                </th>
                
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Company
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Upload Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Uploaded By
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredAllUploads.map((item) => (
                <tr key={item.id} className={item.viewed ? 'bg-white' : 'bg-blue-50'}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input 
                      type="checkbox" 
                      className="rounded border-gray-300"
                      checked={selectedAllItems.includes(item.id)}
                      onChange={() => toggleAllItemSelection(item.id)}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img src='./assets/images/artworkredbull.png' alt="" className="w-8 h-8 rounded object-cover mr-3" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">{item.file_name}</div>
                        <div className="text-sm text-gray-500">
                         {(item.file_size ? item.file_size / 1024 / 1024 : 0).toFixed(2)} MB
                        </div>
                      </div>
                    </div>
                  </td>
                 
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.company_name || 'N/A'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(item.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.uploaded_by || 'System'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      item.viewed 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {item.viewed ? 'Viewed' : 'New'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => viewImage(item)}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        View
                      </button>
                      <button 
                        onClick={() => downloadImage(item.file_url, item.file_name)}
                        className="text-green-600 hover:text-green-900"
                      >
                        Download
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        {/* Footer Actions */}
          <div className="p-4 border-t border-gray-200 bg-gray-50 flex justify-between items-center">
           <div className="flex flex-col items-center p-4 border-t border-gray-200 bg-gray-50">
  
        {/* <div className="flex gap-2">
          <div className="text-sm text-gray-600 mb-2">
          Showing {((currentPage - 1) * pageSize) + 1} to {Math.min(currentPage * pageSize, filteredAllUploads.length)} of {filteredAllUploads.length} items
        </div>
          <button 
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-gray-100 text-gray-700 py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors disabled:opacity-50"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button 
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`py-2 px-3 rounded-lg text-sm font-medium ${currentPage === page ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {page}
            </button>
          ))}
          <button 
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="bg-gray-100 text-gray-700 py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors disabled:opacity-50"
          >
            Next
          </button>
        </div> */}
</div>
          <div className="fixed bottom-6 right-6 flex gap-2">
          
              <button 
                onClick={downloadAllSelected}
                className="bg-gray-100 text-gray-700 py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors shadow-lg"
              >
                Download Selected ({selectedAllItems.length})
              </button>
              <button 
                onClick={markSelectedAsActioned}
                className="bg-[#173647] text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-lg"
              >
                Mark as Actioned
              </button>
            </div>
          </div>
          
        </div>

     
      </motion.div>
        )}

      {/* Navigation Arrows */}

      {/* Image Details */}
        {filteredAllUploads[currentIndex] &&  (
          <>
        <div className="mt-6 bg-white rounded-xl shadow-lg p-6">
          <h4 className="font-bold text-lg mb-4">Image Details</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="text-sm text-gray-600">File Name</label>
              <p className="font-medium">{filteredAllUploads[currentIndex].file_name}</p>
            </div>
            <div>
              <label className="text-sm text-gray-600">Upload Date</label>
              <p className="font-medium">{new Date(filteredUploads[currentIndex].created_at).toLocaleDateString()}</p>
            </div>
            <div>
              <label className="text-sm text-gray-600">File Size</label>
              <p className="font-medium">
                {((filteredUploads[currentIndex].file_size ?? 0) / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
            {filteredUploads[currentIndex].service_type && (
              <div>
                <label className="text-sm text-gray-600">Service Type</label>
                <p className="font-medium">{filteredUploads[currentIndex].service_type}</p>
              </div>
            )}
            {filteredUploads[currentIndex].company_name && (
              <div>
                <label className="text-sm text-gray-600">Company</label>
                <p className="font-medium">{filteredUploads[currentIndex].company_name}</p>
              </div>
            )}
            {filteredUploads[currentIndex].uploaded_by && (
              <div>
                <label className="text-sm text-gray-600">Uploaded By</label>
                <p className="font-medium flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  {filteredUploads[currentIndex].uploaded_by}
                </p>
              </div>
            )}
          </div>
          {filteredUploads[currentIndex].tags && (
            <div className="mt-4">
              <label className="text-sm text-gray-600">Tags</label>
              <div className="flex flex-wrap gap-2 mt-2">
                {filteredUploads[currentIndex].tags?.map((tag, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

         <div className="mt-6 bg-white rounded-xl shadow-lg p-6">
          <h4 className="font-bold text-lg mb-4">Enquiry Details</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  Message
                </label>
               <div className="relative w-full"><br/>
                <p>{filteredAllUploads[currentIndex].message || "No message provided"}</p>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gray-300 rounded-tr-xl"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gray-300 rounded-bl-xl"></div>
                </div>
              </div>
            </div>
          </div> 
          </>
           
      )}
    </div>
  ) : (
    <div className="text-center py-12">
      <ImageIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
      <h3 className="text-xl font-bold text-gray-600 mb-2">No images found</h3>
      <p className="text-gray-500">Try adjusting your search criteria or clear filters</p>
      <button
        onClick={clearFilters}
        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Clear Filters
      </button>
    </div>
  )}
</div>
          </div>
        </div>
      </section>

     
        {/* Service Type Popup */}
      <AnimatePresence>
    {showServicePopup && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={() => setShowServicePopup(false)}
      >
        
      </motion.div>
    )}
      </AnimatePresence>

        {/* All Uploads Popup */}
      <AnimatePresence>
    {showAllUploadsPopup && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={() => setShowAllUploadsPopup(false)}
      >
      
    
      </motion.div>
      )}
      </AnimatePresence>

        {/* Upload Modal */}
        <AnimatePresence>
          {showUploadModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setShowUploadModal(false)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Upload Artwork</h2>
                  <button
                    onClick={() => setShowUploadModal(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    {selectedFile ? (
                      <div className="space-y-4">
                        <img
                          src={URL.createObjectURL(selectedFile)}
                          alt="Preview"
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        <p className="text-sm text-gray-600">{selectedFile.name}</p>
                        <button
                          onClick={() => setSelectedFile(null)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    ) : (
                      <div>
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-2">Click to upload artwork</p>
                        <p className="text-xs text-gray-500">PNG, JPG up to 3MB</p>
                        <input
                          type="file"
                        
                          accept="image/*"
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                      </div>
                    )}
                  </div>

                  <button
                    onClick={handleUpload}
                    disabled={!selectedFile || isUploading}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isUploading ? 'Uploading...' : 'Upload Artwork'}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
    </div>
  );
};

export default Inbox;