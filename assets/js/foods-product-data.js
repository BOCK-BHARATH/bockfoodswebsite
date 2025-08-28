// Comprehensive Dynamic Foods Product Data Configuration
const productData = {
  'smart-agriculture': {
    // ============= BASIC METADATA =============
    metadata: {
      name: 'Smart Agriculture Solutions',
      subtitle: 'AI-Powered Precision Farming Revolution',
      description: 'Revolutionary food technology platform with AI-powered farming systems, automated agriculture analytics, and sustainable food production for maximum yields and nutritional quality monitoring.',
      icon: 'ri-plant-line',
      category: 'Agricultural Food Technology',
      price: '₹15,00,000',
      rating: 4.9,
      availability: 'Available for immediate deployment'
    },

    // ============= CONTENT SECTIONS FOR PRODUCT PAGE =============
    contentSections: [
      {
        title: 'Advanced Food Production Technology',
        content: 'Our Smart Agriculture Solutions represent breakthrough food technology, packing advanced nutritional monitoring systems into a comprehensive farming platform. With precision engineering and rigorous food safety protocols, this system delivers exceptional performance for sustainable food production missions.',
        type: 'content-image',
        image: 'assets/foods_middle.png'
      },
      {
        title: 'Sustainable Food Production Operations',
        content: 'Discover how Smart Agriculture Solutions enables breakthrough sustainable food production through innovative farming design and nutritional analytics. This comprehensive system provides reliable food safety monitoring, nutritional quality tracking, and sustainable cultivation for diverse food sources.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        title: 'Food Technology Integration Testing',
        content: 'Watch comprehensive food technology testing procedures and system integration processes for Smart Agriculture Solutions. This detailed video demonstrates our rigorous food safety compliance protocols, nutritional testing, and performance validation for sustainable food production missions.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/9bZkp7q19f0'
      },
      {
        title: 'Smart Agriculture Technical Specifications',
        content: 'Comprehensive technical specifications and operational guidelines for Smart Agriculture Solutions. Access detailed documentation covering food technology architecture, nutritional monitoring integration, farming optimization systems, and mission planning for sustainable food production operations.',
        type: 'content-document',
        document: 'assets/documents/smart-agriculture-technical-specs.pdf'
      },
      {
        title: 'Sustainable Food Mission Planning',
        content: 'Complete food production mission planning documentation for Smart Agriculture Solutions including crop optimization, nutritional quality coordination, harvest planning protocols, food safety transmission, and operational procedures for sustainable farming operations.',
        type: 'content-document',
        document: 'assets/documents/smart-agriculture-mission-planning.pdf'
      },
      {
        title: 'Food Safety & Compliance Standards',
        content: 'Comprehensive safety protocols and food regulatory compliance documentation for Smart Agriculture Solutions. Includes FDA compliance, food safety standards, nutritional data privacy regulations, and global food safety protocols.',
        type: 'content-document',
        document: 'assets/documents/smart-agriculture-safety-compliance.pdf'
      },
      {
        title: 'Sustainable Food Innovation Impact',
        content: 'Smart Agriculture Solutions is revolutionizing sustainable food production through advanced agricultural technology. Our platform democratizes quality food production, enabling precision farming for nutritional excellence while improving global food security through smart agriculture analytics.',
        type: 'content-only'
      }
    ],

    // ============= TECHNICAL SPECIFICATIONS =============
    specifications: {
      'Agricultural Performance': {
        'Farm Coverage': '50-1000 hectares per integrated system',
        'Crop Types': 'Multi-crop support for grains, vegetables, fruits',
        'Yield Enhancement': '25-40% increase in agricultural productivity',
        'Resource Optimization': '30-50% reduction in water and fertilizer use'
      },
      'Food Technology Standards': {
        'Mission Duration': '5-10 years continuous food monitoring',
        'Quality Monitoring': 'Real-time nutritional content analysis',
        'Safety Compliance': 'FSSAI and international food safety standards',
        'Data Transmission': 'Up to 10 Mbps secure food data transmission'
      },
      'Sustainable Standards': {
        'Operating Temperature': '-10°C to +50°C agricultural conditions',
        'Regulatory Compliance': 'FSSAI/ISO 22000 food safety certification',
        'Data Security': 'Food-grade secure data encryption',
        'Environmental Standards': 'Organic and sustainable farming certification'
      }
    },

    // ============= MEDIA ASSETS =============
    media: {
      hero: {
        type: 'video',
        src: 'assets/videos/smart-agriculture-hero.mp4',
        poster: 'assets/images/smart-agriculture-hero.jpg',
        alt: 'Smart Agriculture Technology'
      },
      gallery: [
        {
          type: 'image',
          src: 'assets/images/smart-farming.jpg',
          alt: 'Smart Farming Technology',
          caption: 'AI-powered precision farming systems'
        },
        {
          type: 'video',
          src: 'assets/videos/farming-automation.mp4',
          poster: 'assets/images/farming-automation-thumb.jpg',
          alt: 'Agricultural Automation',
          caption: 'Automated farming operations and monitoring'
        },
        {
          type: 'image',
          src: 'assets/images/nutritional-monitoring.jpg',
          alt: 'Nutritional Quality Monitoring',
          caption: 'Real-time food quality and nutritional analysis'
        }
      ]
    },

    // ============= FEATURES =============
    features: [
      {
        icon: 'ri-heart-pulse-line',
        title: 'Nutritional Quality Monitoring',
        description: 'AI-powered nutritional analysis systems for food quality assurance',
        benefits: ['Real-time nutrient monitoring', 'Food safety algorithms', 'Quality assurance control']
      },
      {
        icon: 'ri-wifi-line',
        title: 'Secure Agricultural Communication',
        description: 'Encrypted communication systems for agricultural data transmission',
        benefits: ['Secure farming channels', 'Global agricultural connectivity', 'Supply chain broadcasting']
      },
      {
        icon: 'ri-battery-charge-line',
        title: 'Sustainable Power Systems',
        description: 'Solar-powered systems designed for agricultural operations',
        benefits: ['Renewable energy farming', 'Off-grid capabilities', 'Energy-efficient monitoring']
      },
      {
        icon: 'ri-stethoscope-line',
        title: 'Precision Farming Control',
        description: 'AI-driven farming systems for optimal crop production',
        benefits: ['Precision agriculture', 'Crop optimization', 'Yield maximization']
      },
      {
        icon: 'ri-cpu-line',
        title: 'AI Agricultural Computing',
        description: 'Advanced agricultural AI with predictive farming capabilities',
        benefits: ['Crop disease prediction', 'Harvest recommendations', 'Agricultural data analytics']
      },
      {
        icon: 'ri-shield-check-line',
        title: 'Food Safety Standards',
        description: 'Agricultural systems compliant with food safety regulations',
        benefits: ['FSSAI compliance', 'Food quality assurance', 'Agricultural safety protocols']
      }
    ],

    // ============= APPLICATIONS =============
    applications: [
      {
        title: 'Commercial Farming',
        description: 'Large-scale agricultural operations and food production',
        icon: 'ri-earth-line',
        benefits: ['Yield optimization', 'Quality monitoring', 'Sustainable farming']
      },
      {
        title: 'Organic Food Production',
        description: 'Certified organic farming and nutritional monitoring',
        icon: 'ri-signal-tower-line',
        benefits: ['Organic certification', 'Nutrient tracking', 'Sustainable practices']
      },
      {
        title: 'Food Research & Development',
        description: 'Agricultural research and food technology innovation',
        icon: 'ri-flask-line',
        benefits: ['Crop research', 'Technology validation', 'Agricultural education']
      },
      {
        title: 'Food Supply Chain',
        description: 'Complete food supply chain monitoring and traceability',
        icon: 'ri-building-line',
        benefits: ['Supply chain tracking', 'Quality assurance', 'Food safety management']
      }
    ],

    // ============= PRICING PACKAGES =============
    packages: [
      {
        name: 'Farm Monitoring Kit',
        price: '₹15,00,000',
        duration: '18-month implementation',
        coverage: 'Single farm setup',
        features: [
          'IoT sensor integration',
          'Mobile app access',
          'Basic analytics dashboard',
          'Email support',
          'Setup and training'
        ],
        recommended: false
      },
      {
        name: 'Enterprise Farming Suite',
        price: '₹75,00,000',
        duration: '24-month implementation',
        coverage: 'Multi-farm operation',
        features: [
          'Complete sensor network',
          'AI analytics platform',
          'Real-time monitoring',
          'Advanced reporting',
          'Dedicated support',
          'Custom integrations'
        ],
        recommended: true
      },
      {
        name: 'Industrial Food Production',
        price: 'Custom Pricing',
        duration: 'Tailored implementation',
        coverage: 'Large-scale operations',
        features: [
          'Custom sensor deployment',
          'Industrial integration',
          'Advanced AI models',
          'White-label solutions',
          '24/7 monitoring',
          'On-site support team'
        ],
        recommended: false
      }
    ]
  },

  'fresh-produce-logistics': {
    name: 'Fresh Produce Logistics',
    subtitle: 'Smart Cold Chain Distribution',
    description: 'Advanced logistics system with intelligent cold chain management, real-time temperature monitoring, and optimized distribution for fresh food products with nutritional preservation.',
    icon: 'ri-truck-line',
    category: 'Food Distribution Systems',
    price: 'Starting at ₹25,00,000',
    rating: 4.9,
    availability: 'Available for immediate deployment',

    contentSections: [
      {
        title: 'Advanced Food Logistics Technology',
        content: 'Our Fresh Produce Logistics represents cutting-edge food distribution technology, incorporating intelligent cold chain systems and real-time monitoring. With robust engineering and comprehensive food safety protocols, this platform delivers exceptional performance for fresh food distribution missions.',
        type: 'content-image',
        image: 'assets/foods_middle.png'
      },
      {
        title: 'Cold Chain Distribution Operations',
        content: 'Discover how Fresh Produce Logistics enables optimized food distribution through intelligent cold chain design and nutritional preservation systems. This comprehensive system provides reliable performance for maintaining food freshness across extended distribution networks.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/L_jWHffIx5E'
      },
      {
        title: 'Food Logistics System Integration',
        content: 'Watch comprehensive food distribution testing procedures and system integration processes for Fresh Produce Logistics. This detailed video demonstrates our rigorous food safety testing protocols, cold chain validation, and performance verification for distribution reliability.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/2g811Eo7K8U'
      },
      {
        title: 'Cold Chain Technical Documentation',
        content: 'Comprehensive technical specifications and operational guidelines for Fresh Produce Logistics system. Access detailed documentation covering cold chain architecture, temperature control systems, logistics optimization, and distribution control procedures.',
        type: 'content-document',
        document: 'assets/documents/cold-chain-technical-manual.pdf'
      },
      {
        title: 'Food Distribution Mission Planning',
        content: 'Complete distribution mission planning documentation for Fresh Produce Logistics including route optimization, cold chain maintenance, quality monitoring protocols, and operational procedures for fresh food distribution.',
        type: 'content-document',
        document: 'assets/documents/cold-chain-operations.pdf'
      },
      {
        title: 'Food Safety Logistics Protocols',
        content: 'Comprehensive safety protocols and regulatory compliance for Fresh Produce Logistics operations. Includes food safety coordination, contamination prevention procedures, cold chain monitoring, and international food safety compliance.',
        type: 'content-document',
        document: 'assets/documents/cold-chain-safety-protocols.pdf'
      },
      {
        title: 'Fresh Food Distribution Revolution',
        content: 'Fresh Produce Logistics is transforming food distribution through intelligent cold chain technology and nutritional preservation. Our platform enables reliable fresh food delivery, extending shelf life while maintaining nutritional quality across global distribution networks.',
        type: 'content-only'
      }
    ],

    features: [
      {
        icon: 'ri-radar-line',
        title: 'Multi-Temperature Monitoring',
        description: 'Advanced sensors for different temperature zones and food types',
        benefits: ['Precise temperature control', 'Multi-zone capabilities', 'Specific food requirements']
      },
      {
        icon: 'ri-rocket-line',
        title: 'Route Optimization',
        description: 'AI-powered route planning for efficient fresh food delivery',
        benefits: ['Minimized transit time', 'Optimal delivery routes', 'Quality preservation']
      },
      {
        icon: 'ri-time-line',
        title: 'Extended Shelf Life',
        description: 'Designed for maintaining freshness over extended periods',
        benefits: ['Longer product life', 'Reduced waste', 'Better nutritional retention']
      }
    ]
  },

  'food-processing-mega': {
    name: 'Food Processing Mega Suite',
    subtitle: 'Industrial-Scale Food Processing',
    description: 'Heavy-duty food processing platform with advanced automation systems and large-scale production capabilities for comprehensive food manufacturing operations.',
    icon: 'ri-building-2-line',
    category: 'Industrial Food Processing',
    price: 'Starting at ₹200,00,000',
    rating: 4.7,
    availability: 'Available for implementation',

    contentSections: [
      {
        title: 'Industrial Food Processing Technology',
        content: 'Our Food Processing Mega Suite represents the pinnacle of industrial food engineering, incorporating advanced automation systems and large-scale processing capabilities. With cutting-edge technology and extensive testing, this platform enables industrial-scale food manufacturing missions.',
        type: 'content-image',
        image: 'assets/foods_middle.png'
      },
      {
        title: 'Industrial Food Manufacturing Capabilities',
        content: 'Discover how Food Processing Mega Suite enables breakthrough industrial food production through advanced automation and large-scale processing systems. This comprehensive system provides reliable performance for large-scale food manufacturing and production optimization.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/B1R3dTdcpSU'
      },
      {
        title: 'Industrial Food Processing Testing',
        content: 'Watch comprehensive industrial food processing testing procedures and system validation for Food Processing Mega Suite. This detailed video demonstrates our rigorous food safety protocols, processing validation, and performance testing for large-scale operations.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/FzCubvpzf84'
      },
      {
        title: 'Industrial Processing Technical Manual',
        content: 'Comprehensive technical specifications for Food Processing Mega Suite industrial platform. Access detailed documentation covering large-scale processing systems, automation technology, quality control, and industrial food production architectures.',
        type: 'content-document',
        document: 'assets/documents/industrial-processing-manual.pdf'
      },
      {
        title: 'Industrial Food Production Planning',
        content: 'Complete industrial production planning for Food Processing Mega Suite including processing optimization, quality assurance protocols, production scaling, and operational procedures for food manufacturing facilities.',
        type: 'content-document',
        document: 'assets/documents/industrial-production-planning.pdf'
      },
      {
        title: 'Industrial Food Safety Standards',
        content: 'Comprehensive safety protocols for Food Processing Mega Suite operations. Includes industrial food safety compliance, contamination control, processing standards, and safety protocols for large-scale food manufacturing.',
        type: 'content-document',
        document: 'assets/documents/industrial-safety-standards.pdf'
      },
      {
        title: 'Food Manufacturing Innovation',
        content: 'Food Processing Mega Suite is revolutionizing industrial food production through advanced automation and large-scale processing technology. Our platform enables efficient mass production, ensuring food safety and quality at industrial scales.',
        type: 'content-only'
      }
    ],

    features: [
      {
        icon: 'ri-rocket-2-line',
        title: 'Industrial-Scale Production',
        description: 'Advanced automation for large-volume food processing',
        benefits: ['Mass production capabilities', 'Processing efficiency', 'Scale optimization']
      },
      {
        icon: 'ri-database-2-line',
        title: 'Complex Processing Systems',
        description: 'Support for diverse food processing and manufacturing needs',
        benefits: ['Multiple food types', 'Processing versatility', 'Quality consistency']
      },
      {
        icon: 'ri-shield-star-line',
        title: 'Enhanced Quality Control',
        description: 'Advanced monitoring systems for industrial food processing',
        benefits: ['Quality assurance', 'Safety monitoring', 'Regulatory compliance']
      }
    ]
  },

  'sustainable-packaging': {
    name: 'Sustainable Food Packaging',
    subtitle: 'Eco-Friendly Packaging Solutions',
    description: 'Advanced sustainable packaging system designed for food preservation, environmentally conscious materials, and optimal food freshness with innovative packaging technology.',
    icon: 'ri-recycle-line',
    category: 'Sustainable Packaging',
    price: 'Starting at ₹50,00,000',
    rating: 4.8,
    availability: 'Available for integration',

    contentSections: [
      {
        title: 'Advanced Sustainable Packaging Technology',
        content: 'Our Sustainable Food Packaging system represents revolutionary advancement in food packaging technology, featuring eco-friendly materials and innovative preservation systems. With precision engineering and extensive food safety testing, this system delivers exceptional performance for sustainable food packaging.',
        type: 'content-image',
        image: 'assets/foods_middle.png'
      },
      {
        title: 'Packaging Sustainability Operations',
        content: 'Discover how Sustainable Food Packaging enables eco-friendly food preservation through advanced packaging technology and material innovation. This comprehensive system provides variable preservation capabilities and material optimization for extended food freshness.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/wbSwFU6tY1c'
      },
      {
        title: 'Packaging Technology Testing',
        content: 'Watch comprehensive sustainable packaging testing procedures and material validation for Sustainable Food Packaging. This detailed video demonstrates our rigorous environmental testing protocols, material characterization, and performance validation for sustainable applications.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/VBlIvghQTlI'
      },
      {
        title: 'Sustainable Packaging Technical Manual',
        content: 'Comprehensive technical specifications for Sustainable Food Packaging system. Access detailed documentation covering eco-friendly materials, preservation systems, packaging efficiency, and integration procedures for food applications.',
        type: 'content-document',
        document: 'assets/documents/sustainable-packaging-manual.pdf'
      },
      {
        title: 'Sustainable Food Packaging Integration',
        content: 'Complete integration documentation for Sustainable Food Packaging system including material processing protocols, food compatibility considerations, preservation planning, and operational procedures for various food packaging applications.',
        type: 'content-document',
        document: 'assets/documents/sustainable-packaging-integration.pdf'
      },
      {
        title: 'Sustainable Packaging Safety Protocols',
        content: 'Comprehensive safety protocols for Sustainable Food Packaging operations. Includes material safety procedures, food contact regulations, environmental standards, and safe handling procedures for eco-friendly packaging operations.',
        type: 'content-document',
        document: 'assets/documents/sustainable-packaging-safety.pdf'
      },
      {
        title: 'Sustainable Food Packaging Innovation',
        content: 'Sustainable Food Packaging is revolutionizing food preservation through eco-friendly materials and packaging innovations. Our packaging system enables cost-effective food packaging, extending shelf life while promoting environmental sustainability and reducing packaging waste.',
        type: 'content-only'
      }
    ],

    features: [
      {
        icon: 'ri-gas-station-line',
        title: 'Eco-Friendly Materials',
        description: 'Sustainable materials with reduced environmental impact',
        benefits: ['Biodegradable materials', 'Recyclable components', 'Environmental standards']
      },
      {
        icon: 'ri-speed-line',
        title: 'Enhanced Preservation',
        description: 'Advanced preservation systems for better food freshness',
        benefits: ['Extended shelf life', 'Nutrient retention', 'Quality preservation']
      },
      {
        icon: 'ri-repeat-line',
        title: 'Reusable Design',
        description: 'Design for multiple sustainable packaging cycles',
        benefits: ['Reusability', 'Waste reduction', 'Cost effectiveness']
      }
    ]
  },

  'ai-quality-control': {
    name: 'AI Food Quality Control',
    subtitle: 'Intelligent Food Inspection System',
    description: 'Revolutionary AI-powered quality control system with autonomous inspection capabilities for precision food analysis, contamination detection, and automated quality assurance.',
    icon: 'ri-search-line',
    category: 'Food Quality Inspection',
    price: 'Starting at ₹15,00,000',
    rating: 4.9,
    availability: 'Available for immediate integration',

    contentSections: [
      {
        title: 'AI Food Inspection Technology',
        content: 'Our AI Food Quality Control represents breakthrough AI-powered inspection technology, incorporating machine learning algorithms and autonomous decision-making capabilities. With advanced sensors and real-time processing, this system delivers precision food quality analysis for comprehensive inspection missions.',
        type: 'content-image',
        image: 'assets/foods_middle.png'
      },
      {
        title: 'Autonomous Food Quality Operations',
        content: 'Discover how AI Food Quality Control enables autonomous food inspection through advanced AI algorithms and precision analysis. This comprehensive system provides real-time quality decision making, contamination avoidance, and automated inspection capabilities.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/RK8xHq6dfAo'
      },
      {
        title: 'AI Quality System Testing',
        content: 'Watch comprehensive AI food inspection testing procedures and system validation for AI Food Quality Control. This detailed video demonstrates our rigorous AI testing protocols, food safety simulation, and performance verification for autonomous quality operations.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/hFJHtdIGOJM'
      },
      {
        title: 'AI Inspection Technical Manual',
        content: 'Comprehensive technical specifications for AI Food Quality Control inspection system. Access detailed documentation covering AI algorithms, sensor integration, autonomous decision-making processes, and food processing integration procedures.',
        type: 'content-document',
        document: 'assets/documents/ai-inspection-manual.pdf'
      },
      {
        title: 'Autonomous Quality Planning',
        content: 'Complete autonomous inspection planning documentation for AI Food Quality Control including AI behavior configuration, quality scenario planning, automated decision trees, and operational procedures for AI-guided food inspection.',
        type: 'content-document',
        document: 'assets/documents/ai-quality-planning.pdf'
      },
      {
        title: 'AI Quality Safety & Reliability',
        content: 'Comprehensive safety protocols for AI Food Quality Control inspection operations. Includes AI failsafe mechanisms, quality oversight procedures, autonomous system validation, and safety-critical food inspection protocols.',
        type: 'content-document',
        document: 'assets/documents/ai-quality-safety.pdf'
      },
      {
        title: 'AI Food Inspection Revolution',
        content: 'AI Food Quality Control is transforming food inspection through artificial intelligence and autonomous systems. Our AI-powered platform enables unprecedented precision in food quality analysis, improving inspection efficiency while ensuring food safety and regulatory compliance.',
        type: 'content-only'
      }
    ],

    features: [
      {
        icon: 'ri-brain-line',
        title: 'AI-Powered Quality Analysis',
        description: 'Machine learning algorithms for autonomous quality assessment',
        benefits: ['Automated inspection', 'Quality prediction', 'Defect detection']
      },
      {
        icon: 'ri-crosshair-line',
        title: 'Precision Contamination Detection',
        description: 'High-accuracy detection of foreign materials and contaminants',
        benefits: ['Contamination prevention', 'Quality assurance', 'Safety compliance']
      },
      {
        icon: 'ri-group-line',
        title: 'Multi-Point Inspection',
        description: 'Coordinated multi-station quality control operations',
        benefits: ['Comprehensive coverage', 'Process synchronization', 'Quality standards']
      }
    ]
  },

  'food-innovation-lab': {
    name: 'Food Innovation Launch Pad',
    subtitle: 'Innovation-Driven Development Platform',
    description: 'Next-generation food innovation platform capable of developing novel food products with cost-effective research operations and sustainable development practices.',
    icon: 'ri-lightbulb-line',
    category: 'Food Innovation Systems',
    price: 'Development Services: ₹50,00,000 per project',
    rating: 4.6,
    availability: 'Available for 2025 launches',

    contentSections: [
      {
        title: 'Food Innovation Technology',
        content: 'Our Food Innovation Launch Pad represents next-generation food development technology, featuring advanced research systems and sustainable development practices. With innovative engineering and comprehensive food safety testing, this system delivers reliable food innovation at reduced development costs.',
        type: 'content-image',
        image: 'assets/foods_middle.png'
      },
      {
        title: 'Innovation Development & Deployment',
        content: 'Discover how our Food Innovation Launch Pad enables cost-effective food development through innovation technology and precision research systems. This comprehensive system provides reliable product development to various market segments with rapid innovation capabilities.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/u0-pfzKbh2k'
      },
      {
        title: 'Food Innovation Testing & Validation',
        content: 'Watch comprehensive food innovation testing procedures and system validation. This detailed video demonstrates our rigorous product development protocols, innovation testing, and validation for reliable food innovations.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/WxH4CAlhtiQ'
      },
      {
        title: 'Food Innovation Technical Manual',
        content: 'Comprehensive technical specifications for our food innovation platform. Access detailed documentation covering development performance characteristics, innovation capabilities, research procedures, and deployment operations.',
        type: 'content-document',
        document: 'assets/documents/food-innovation-manual.pdf'
      },
      {
        title: 'Innovation Project Planning',
        content: 'Complete innovation project planning documentation including development optimization, product integration procedures, market analysis, and project-specific operational procedures for various food development initiatives.',
        type: 'content-document',
        document: 'assets/documents/food-innovation-planning.pdf'
      },
      {
        title: 'Food Innovation Safety Protocols',
        content: 'Comprehensive safety protocols for Food Innovation Launch Pad operations. Includes product safety requirements, development standards, innovation validation, and safety response protocols for food development operations.',
        type: 'content-document',
        document: 'assets/documents/food-innovation-safety.pdf'
      },
      {
        title: 'Food Innovation Revolution',
        content: 'Our Food Innovation Launch Pad is revolutionizing food development through innovation technology and cost-effective research operations. This platform democratizes food innovation, enabling more frequent developments while ensuring food safety through sustainable innovation practices.',
        type: 'content-only'
      }
    ],

    features: [
      {
        icon: 'ri-recycle-line',
        title: 'Sustainable Development',
        description: 'Eco-friendly development processes for sustainable food products',
        benefits: ['Sustainable innovation', 'Environmental consideration', 'Green development']
      },
      {
        icon: 'ri-weight-line',
        title: 'Flexible Innovation Scope',
        description: 'Adaptable to various food product development requirements',
        benefits: ['Product versatility', 'Market adaptability', 'Innovation flexibility']
      },
      {
        icon: 'ri-leaf-line',
        title: 'Nutritional Innovation',
        description: 'Research-focused nutritional enhancement systems',
        benefits: ['Nutrient optimization', 'Health-focused products', 'Quality innovation']
      }
    ]
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = productData;
}
