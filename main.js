// Sample data for apps
const apps = [
  {
    id: "1",
    name: "Spotify Premium",
    icon: "https://play-lh.googleusercontent.com/cShys-AmJ93dB0SV8kE6Fl5eSaf4-qRpapEXIBrN4rgb1WoMfBr4uR4HJIZJVrOlAIQ=s180-rw",
    version: "v8.7.30.1221",
    modVersion: "Premium Unlocked",
    releaseDate: "2023-07-15",
    rating: 4.8,
    category: "app",
    featured: true,
    description: "Spotify is a digital music service that gives you access to millions of songs.",
    modFeatures: [
      "Premium subscription unlocked",
      "No ads",
      "Audio unlimited skips",
      "Play any song",
      "Extreme audio unlocked",
      "Save offline & play offline"
    ],
    downloadLink: "https://www.mediafire.com/file/example/spotify_premium.apk"
  },
  {
    id: "2",
    name: "YouTube Premium",
    icon: "https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc=s180-rw",
    version: "v17.36.36",
    modVersion: "Premium Unlocked",
    releaseDate: "2023-07-10",
    rating: 4.7,
    category: "app",
    featured: true,
    description: "Get YouTube without the ads, with background play and offline downloads.",
    modFeatures: [
      "No ads",
      "Background play",
      "Picture-in-picture mode",
      "Offline downloads",
      "Enhanced video quality"
    ],
    downloadLink: "https://www.mediafire.com/file/example/youtube_premium.apk"
  },
  {
    id: "3",
    name: "Call of Duty Mobile",
    icon: "https://play-lh.googleusercontent.com/N8AYeHrsG6MfNxlis6vEDQBlIHN0_DJfHY8A-Uet2Kw8j1AkLRdRUvwP-npYJm-2zw=s180-rw",
    version: "v1.0.32",
    modVersion: "God Mode",
    releaseDate: "2023-07-05",
    rating: 4.9,
    category: "game",
    featured: true,
    description: "The definitive FPS experience on mobile with battle royale and multiplayer action.",
    modFeatures: [
      "God mode (unlimited health)",
      "Aimbot enabled",
      "No recoil",
      "Unlimited ammo",
      "Wall hack",
      "Anti-ban protection"
    ],
    downloadLink: "https://www.mediafire.com/file/example/cod_mobile_mod.apk"
  },
  {
    id: "4",
    name: "Netflix Premium",
    icon: "https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI=s180-rw",
    version: "v8.12.0",
    modVersion: "Premium Unlocked",
    releaseDate: "2023-06-28",
    rating: 4.5,
    category: "app",
    featured: false,
    description: "Watch movies and TV shows instantly on your Android device.",
    modFeatures: [
      "Premium subscription unlocked",
      "No ads",
      "All regions content accessible",
      "Full HD and 4K streaming",
      "Unlimited downloads"
    ],
    downloadLink: "https://www.mediafire.com/file/example/netflix_premium.apk"
  },
  {
    id: "5",
    name: "PUBG Mobile",
    icon: "https://play-lh.googleusercontent.com/JRd05pyBH41qjgsJuWduRJpDeZG0Hnb0yjf2nWqO7VaGKL10-G5UIygxED-WNOc3pg=s180-rw",
    version: "v2.5.0",
    modVersion: "Unlimited UC",
    releaseDate: "2023-06-20",
    rating: 4.6,
    category: "game",
    featured: false,
    description: "The original battle royale game on mobile with intense multiplayer gameplay.",
    modFeatures: [
      "Unlimited UC (in-game currency)",
      "All outfits unlocked",
      "No recoil",
      "High damage",
      "Speed hack",
      "Anti-ban protection"
    ],
    downloadLink: "https://www.mediafire.com/file/example/pubg_mobile_mod.apk"
  },
  {
    id: "6",
    name: "Disney+ Hotstar",
    icon: "https://play-lh.googleusercontent.com/MmLkAp-x9OvA46_NgaD7kzIJJ6jN_aQe2JPgx7LyrGxSCwJcy6KKj_H-eIOmGYmOQQ=w240-h480-rw",
    version: "v13.4.8",
    modVersion: "Premium Unlocked",
    releaseDate: "2023-06-15",
    rating: 4.4,
    category: "app",
    featured: true,
    description: "Stream live sports, TV shows & movies from India & beyond with Disney+ Hotstar.",
    modFeatures: [
      "Premium subscription unlocked",
      "No ads experience",
      "Full HD and 4K streaming",
      "Download content for offline viewing",
      "Live sports streaming without subscription",
      "Anti-ban protection"
    ],
    downloadLink: "https://www.mediafire.com/file/example/hotstar_premium.apk"
  },
  {
    id: "7",
    name: "FanCode",
    icon: "https://play-lh.googleusercontent.com/Z03nHT_nMuY-CE_q9veQyBZ5xO5sTw2Z0xhA2C7d85fbXzZxTvOPTiNKS2UY_uxiJYE=w240-h480-rw",
    version: "v5.32.0",
    modVersion: "Premium Unlocked",
    releaseDate: "2023-05-28",
    rating: 4.3,
    category: "app",
    featured: false,
    description: "Live sports streaming & official fan merchandise platform in India.",
    modFeatures: [
      "Premium subscription unlocked",
      "No ads",
      "Live sports without subscription",
      "Full HD & 4K streaming",
      "Access to premium content",
      "Anti-ban protection"
    ],
    downloadLink: "https://www.mediafire.com/file/example/fancode_premium.apk"
  },
  {
    id: "8",
    name: "TikTok Pro",
    icon: "https://play-lh.googleusercontent.com/BmUViDVOKNLEm72DQNUXOxGYiLwNVRhzQDmwpyZUjwv4Ua5tAfy5iJeA-PJ5S0Y_B1k=s180-rw",
    version: "v26.4.3",
    modVersion: "Premium Features",
    releaseDate: "2023-06-05",
    rating: 4.3,
    category: "app",
    featured: false,
    description: "A global video community powered by music and creativity.",
    modFeatures: [
      "No watermark on downloads",
      "No ads",
      "Region unlocked",
      "Download all videos",
      "Full HD video quality"
    ],
    downloadLink: "https://www.mediafire.com/file/example/tiktok_pro.apk"
  },
  {
    id: "9",
    name: "Instagram Pro",
    icon: "https://play-lh.googleusercontent.com/VRMWkE5p3CkWhJs6nv-9ZsLAs1QOg5ob1_3qg-rckwYW7yp1fMrYZqnEFpk0IoVP4LM=w240-h480-rw",
    version: "v245.0.0.18",
    modVersion: "Premium Features",
    releaseDate: "2023-08-15",
    rating: 4.6,
    category: "app",
    featured: true,
    description: "Instagram mod with premium features unlocked.",
    modFeatures: [
      "Download photos & videos",
      "No ads",
      "View stories anonymously",
      "Hide seen status",
      "Copy captions & comments"
    ],
    downloadLink: "https://www.mediafire.com/file/example/instagram_pro.apk"
  },
  {
    id: "10",
    name: "Minecraft PE",
    icon: "https://play-lh.googleusercontent.com/VSwHQjcAttxsLE47RuS4PqpC4LT7lCoSjE7Hx5AW_yCxtDvcnsHHvm5CTuL5BPN-uRTP=w240-h480-rw",
    version: "v1.20.0.1",
    modVersion: "Unlimited Resources",
    releaseDate: "2023-07-20",
    rating: 4.8,
    category: "game",
    featured: true,
    description: "Explore infinite worlds and build everything from simple homes to grand castles.",
    modFeatures: [
      "Unlimited resources",
      "God mode",
      "Unlocked premium skins",
      "All items unlocked",
      "No damage"
    ],
    downloadLink: "https://www.mediafire.com/file/example/minecraft_pe_mod.apk"
  },
  {
    id: "11",
    name: "JioTV Premium",
    icon: "https://play-lh.googleusercontent.com/Vtfu71tuGLvDtgwaM0H8iN6UpWe_vZ93nJoWbxnWmATCEjKKVLWVeW9tCxKzcpWH8fk=w240-h480-rw",
    version: "v6.0.9",
    modVersion: "Premium Unlocked",
    releaseDate: "2023-08-02",
    rating: 4.2,
    category: "app",
    featured: false,
    description: "Watch your favorite TV channels anytime, anywhere.",
    modFeatures: [
      "Premium account unlocked",
      "No subscription needed",
      "Ad-free experience",
      "High-quality streaming",
      "All channels unlocked"
    ],
    downloadLink: "https://www.mediafire.com/file/example/jiotv_premium.apk"
  },
  {
    id: "12",
    name: "WhatsApp Plus",
    icon: "https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN=w240-h480-rw",
    version: "v17.40",
    modVersion: "Extended Features",
    releaseDate: "2023-08-10",
    rating: 4.5,
    category: "app",
    featured: false,
    description: "An enhanced version of WhatsApp with extra features and customization options.",
    modFeatures: [
      "Hide online status",
      "Custom themes",
      "Extended file sharing limits",
      "Anti-ban protection",
      "Privacy features"
    ],
    downloadLink: "https://www.mediafire.com/file/example/whatsapp_plus.apk"
  }
];

// DOM Elements
const featuredCarousel = document.getElementById('featured-carousel');
const appGrid = document.getElementById('app-grid');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('close-sidebar');
const overlay = document.getElementById('overlay');
const modFeaturesModal = document.getElementById('mod-features-modal');
const closeModal = document.getElementById('close-modal');
const modalTitle = document.getElementById('modal-title');
const modalAppInfo = document.getElementById('modal-app-info');
const modFeaturesList = document.getElementById('mod-features-list');
const modalDownloadBtn = document.getElementById('modal-download-btn');
const shareButton = document.getElementById('share-button');
const prevButton = document.getElementById('carousel-prev');
const nextButton = document.getElementById('carousel-next');

// Global Variables
let currentCarouselIndex = 0;
let featuredApps = apps.filter(app => app.featured);
let filteredApps = [...apps];

// Initialize the App
function initApp() {
  renderFeaturedCarousel();
  renderAppGrid(filteredApps);
  setupEventListeners();
  enhanceSidebar();
}

// Render Featured Apps Carousel
function renderFeaturedCarousel() {
  featuredCarousel.innerHTML = '';
  
  featuredApps.forEach((app, index) => {
    const carouselItem = document.createElement('div');
    carouselItem.className = 'carousel-item';
    carouselItem.style.transform = index === 0 ? 'translateX(0)' : 'translateX(100%)';
    
    carouselItem.innerHTML = `
      <img src="${app.icon}" alt="${app.name}">
      <div class="carousel-content">
        <h3>${app.name}</h3>
        <p>${app.description}</p>
        <div>
          <span class="version">${app.modVersion}</span>
          <span class="rating">★ ${app.rating.toFixed(1)}</span>
        </div>
      </div>
    `;
    
    carouselItem.addEventListener('click', () => {
      openAppDetails(app);
    });
    
    featuredCarousel.appendChild(carouselItem);
  });
}

// Render App Grid
function renderAppGrid(apps) {
  appGrid.innerHTML = '';
  
  if (apps.length === 0) {
    appGrid.innerHTML = '<p class="no-results">No apps found. Try a different search.</p>';
    return;
  }
  
  apps.forEach(app => {
    const appCard = document.createElement('div');
    appCard.className = 'app-card';
    
    appCard.innerHTML = `
      <div class="app-image">
        <img src="${app.icon}" alt="${app.name}">
      </div>
      <div class="app-info">
        <h3>${app.name}</h3>
        <div>
          <span class="version">${app.modVersion}</span>
        </div>
        <div class="date">${app.releaseDate}</div>
        <div class="rating">★ ${app.rating.toFixed(1)}</div>
      </div>
      <div class="app-actions">
        <button class="view-features" data-id="${app.id}">Mod Features</button>
        <a href="download.html?id=${app.id}" class="download-link">Download</a>
      </div>
    `;
    
    appGrid.appendChild(appCard);
    
    // Add event listener to the "Mod Features" button
    appCard.querySelector('.view-features').addEventListener('click', (e) => {
      e.preventDefault();
      const appId = e.target.getAttribute('data-id');
      const selectedApp = apps.find(app => app.id === appId);
      if (selectedApp) {
        openAppDetails(selectedApp);
      }
    });
  });
}

// Open App Details Modal
function openAppDetails(app) {
  modalTitle.textContent = app.name;
  
  modalAppInfo.innerHTML = `
    <div class="flex items-center mb-3">
      <img src="${app.icon}" alt="${app.name}" class="w-16 h-16 rounded-lg mr-3">
      <div>
        <div class="version">${app.modVersion}</div>
        <div class="date">${app.releaseDate}</div>
        <div class="rating">★ ${app.rating.toFixed(1)}</div>
      </div>
    </div>
    <p>${app.description}</p>
  `;
  
  modFeaturesList.innerHTML = '';
  app.modFeatures.forEach(feature => {
    const li = document.createElement('li');
    li.textContent = feature;
    modFeaturesList.appendChild(li);
  });
  
  modalDownloadBtn.href = `download.html?id=${app.id}`;
  modFeaturesModal.classList.add('active');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close App Details Modal
function closeAppDetails() {
  modFeaturesModal.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// Filter Apps by Search Term
function filterApps(searchTerm) {
  if (!searchTerm) {
    filteredApps = [...apps];
  } else {
    const term = searchTerm.toLowerCase();
    filteredApps = apps.filter(app => 
      app.name.toLowerCase().includes(term) || 
      app.description.toLowerCase().includes(term) ||
      app.modVersion.toLowerCase().includes(term)
    );
  }
  renderAppGrid(filteredApps);
  
  // Add animation to show search is working
  appGrid.classList.add('search-animation');
  setTimeout(() => {
    appGrid.classList.remove('search-animation');
  }, 500);
}

// Carousel Navigation
function navigateCarousel(direction) {
  const items = featuredCarousel.querySelectorAll('.carousel-item');
  if (items.length <= 1) return;
  
  const newIndex = direction === 'next' 
    ? (currentCarouselIndex + 1) % items.length 
    : (currentCarouselIndex - 1 + items.length) % items.length;
    
  items[currentCarouselIndex].style.transform = direction === 'next' 
    ? 'translateX(-100%)' 
    : 'translateX(100%)';
    
  items[newIndex].style.transform = 'translateX(0)';
  currentCarouselIndex = newIndex;
}

// Enhance Sidebar with more options
function enhanceSidebar() {
  const sidebarMenu = document.querySelector('.sidebar-menu');
  if (sidebarMenu) {
    // Add more menu items
    const menuItems = [
      { name: 'Games', url: '#games' },
      { name: 'Applications', url: '#apps' },
      { name: 'Recently Updated', url: '#recent' },
      { name: 'Top Downloads', url: '#top' },
      { name: 'Premium Mods', url: '#premium' },
      { name: 'Unlocked Apps', url: '#unlocked' },
      { name: 'Request App', url: '#request' },
      { name: 'DMCA', url: '#dmca' },
      { name: 'About Us', url: '#about' },
      { name: 'Privacy Policy', url: '#privacy' }
    ];
    
    sidebarMenu.innerHTML = '';
    menuItems.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${item.url}">${item.name}</a>`;
      sidebarMenu.appendChild(li);
    });
    
    // Add a download counter section
    const sidebarContent = document.querySelector('.sidebar-content');
    if (sidebarContent) {
      const statsSection = document.createElement('div');
      statsSection.className = 'sidebar-section';
      statsSection.innerHTML = `
        <h3>Statistics</h3>
        <div class="stats">
          <div class="stat-item">
            <span class="stat-number">10,000+</span>
            <span class="stat-label">Total Downloads</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">500+</span>
            <span class="stat-label">Premium Apps</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">50+</span>
            <span class="stat-label">Daily Updates</span>
          </div>
        </div>
      `;
      
      const style = document.createElement('style');
      style.textContent = `
        .stats {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 10px;
        }
        .stat-item {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          padding: 10px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .stat-number {
          font-size: 1.2rem;
          font-weight: bold;
          color: var(--neon-green);
          display: block;
        }
        .stat-label {
          font-size: 0.8rem;
          opacity: 0.7;
        }
        
        .no-results {
          width: 100%;
          text-align: center;
          padding: 2rem;
          color: var(--text-secondary);
          font-size: 1.1rem;
        }
        
        .search-animation .app-card {
          animation: scale-pulse 0.5s ease-out;
        }
        
        @keyframes scale-pulse {
          0% { transform: scale(0.97); }
          50% { transform: scale(1.02); }
          100% { transform: scale(1); }
        }
      `;
      document.head.appendChild(style);
      
      sidebarContent.appendChild(statsSection);
    }
  }
}

// Setup Event Listeners
function setupEventListeners() {
  // Search functionality
  searchButton.addEventListener('click', () => {
    filterApps(searchInput.value);
  });
  
  searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      filterApps(searchInput.value);
    }
    
    // Real-time search after 300ms of typing
    if (searchInput.dataset.timer) {
      clearTimeout(Number(searchInput.dataset.timer));
    }
    
    searchInput.dataset.timer = setTimeout(() => {
      filterApps(searchInput.value);
    }, 300).toString();
  });
  
  // Sidebar toggle
  menuToggle.addEventListener('click', () => {
    sidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
  
  closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  });
  
  // Modal close
  closeModal.addEventListener('click', closeAppDetails);
  
  // Overlay click
  overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    modFeaturesModal.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  });
  
  // Share button
  shareButton.addEventListener('click', () => {
    if (navigator.share) {
      navigator.share({
        title: 'ZeroByte Mods',
        text: 'Check out these amazing Android mods and games!',
        url: window.location.href
      })
      .catch(error => console.log('Error sharing:', error));
    } else {
      alert('Web Share API not supported in your browser');
    }
  });
  
  // Carousel navigation
  prevButton.addEventListener('click', (e) => {
    e.stopPropagation();
    navigateCarousel('prev');
  });
  
  nextButton.addEventListener('click', (e) => {
    e.stopPropagation();
    navigateCarousel('next');
  });
  
  // Auto carousel rotation
  setInterval(() => navigateCarousel('next'), 5000);
  
  // Add category filter buttons
  const headerElement = document.querySelector('.header');
  if (headerElement) {
    const categoryFilter = document.createElement('div');
    categoryFilter.className = 'category-filter';
    categoryFilter.innerHTML = `
      <button class="filter-btn active" data-filter="all">All</button>
      <button class="filter-btn" data-filter="app">Apps</button>
      <button class="filter-btn" data-filter="game">Games</button>
    `;
    
    const style = document.createElement('style');
    style.textContent = `
      .category-filter {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin: 16px 0;
        padding: 0 16px;
      }
      .filter-btn {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        color: white;
        padding: 6px 12px;
        border-radius: 20px;
        cursor: pointer;
        transition: all 0.3s ease;
      }
      .filter-btn.active {
        background: var(--neon-green);
        color: black;
        font-weight: 500;
      }
      .filter-btn:hover:not(.acti
