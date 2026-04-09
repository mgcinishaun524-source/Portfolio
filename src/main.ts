import * as THREE from 'three';

// --- Data ---
const PROJECTS = [
  {
    id: 1,
    title: "AgriLink",
    github: "#",
    description: "A disruptive agricultural ecosystem connecting producers directly to consumers.",
    longDescription: "AgriLink is not just another marketplace — it’s a disruption.\n\nWe cut out the middlemen, slash unnecessary costs, and put power back where it belongs: in the hands of farmers and consumers. No inflated prices. No delays. No nonsense. Just direct access to fresh produce, straight from the source.\n\nFarmers earn more. Consumers pay less. Everyone wins.\n\nWith a fast, intuitive platform, AgriLink connects supply to demand instantly — turning local agriculture into a smart, efficient, and unstoppable ecosystem.\n\nThis is not the future of farming.\nThis is the new standard.",
    tech: ["React Native", "Firebase", "AgriTech"],
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Food App Design",
    github: "https://www.figma.com/design/HKmkYkYbaUjx9XLJpXloHF/Food-app-Design?node-id=0-1&t=aDMKgeSkswEyRxFd-1",
    description: "A mouth-watering UI/UX exploration for a modern culinary experience.",
    longDescription: "A comprehensive food delivery and discovery application design. This project focuses on high-fidelity visual storytelling, intuitive navigation, and a user-centric approach to the culinary digital space.",
    tech: ["Figma", "UI/UX", "Prototyping"],
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Brainwave SaaS",
    github: "https://www.figma.com/design/qFa5RBdlbDfcsNzyf0Tl8R/Brainwave.io---Landing-Page-UI-Kit---Saas-Landing-Page---Creative-App",
    description: "A creative SaaS landing page kit designed for high-conversion and sleek aesthetics.",
    longDescription: "A professional-grade UI kit for SaaS platforms. It features a community-focused landing page design that balances complex information architecture with clean, modern design principles.",
    tech: ["Figma", "SaaS Design", "Landing Page"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Market Place",
    github: "https://github.com/mgcinishaun524-source/Market_Place.git",
    description: "A robust digital marketplace architecture for seamless commerce.",
    longDescription: "A full-scale marketplace application designed to handle complex transactions and user interactions. This project integrates a sophisticated UI with a scalable backend structure.",
    tech: ["React", "Node.js", "Figma"],
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Market Place 2nd",
    github: "https://github.com/mgcinishaun524-source/Market_Place_2nd_Website.git",
    description: "An evolved iteration of the digital marketplace with enhanced features.",
    longDescription: "The second generation of the Market Place platform, featuring optimized performance, refined user flows, and a more aggressive visual identity.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Weather App",
    github: "https://github.com/mgcinishaun524-source/Weather-App.git",
    description: "A real-time weather dashboard with global atmospheric data.",
    longDescription: "A comprehensive weather monitoring application that provides up-to-date environmental information. Built with a focus on data visualization and real-time updates for a global audience.",
    tech: ["React", "OpenWeather API", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=800&auto=format&fit=crop"
  }
];

const SKILLS = [
  { name: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Three.js"] },
  { name: "Backend", items: ["Node.js", "Express", "Python", "PostgreSQL", "Firebase"] },
  { name: "Tools", items: ["Git", "Docker", "Vite", "Linux", "AWS"] }
];

const EXPERIENCE = [
  {
    role: "Software Engineering Fellow (Intensive Bootcamp)",
    company: "Uncommon.Org",
    period: "2024 - Present",
    desc: "Undergoing a rigorous 12-month immersion into full-stack architecture. I don't just write code; I build solutions. From the disruptive AgriLink ecosystem to high-performance SaaS platforms like Brainwave, I am mastering the art of engineering scalable, user-centric digital products. My focus is on absolute precision and aggressive innovation."
  },
  {
    role: "Future Software Engineering Scholar",
    company: "University Academic Track",
    period: "2025 - Future",
    desc: "Preparing to elevate my technical foundation through a formal Degree in Software Engineering. My goal is to bridge the gap between rapid bootcamp-style execution and deep academic theory, creating a hybrid engineering profile that is unstoppable in the global tech landscape."
  }
];

// --- Initialization ---

document.addEventListener('DOMContentLoaded', () => {
  initIntro();
  initTheme();
  initNavbar();
  initTerminal();
  renderProjects();
  renderSkills();
  renderExperience();
  initThreeBackground();
  
  // Initialize Lucide icons
  // @ts-ignore
  if (window.lucide) {
    // @ts-ignore
    window.lucide.createIcons();
  }
});

// --- Intro Logic ---

function initIntro() {
  const intro = document.getElementById('intro');
  const video = document.getElementById('intro-video') as HTMLVideoElement;
  const skipBtn = document.getElementById('skip-intro');
  const mainContent = document.getElementById('main-content');

  const completeIntro = () => {
    if (!intro || !mainContent) return;
    intro.style.opacity = '0';
    setTimeout(() => {
      intro.style.display = 'none';
      mainContent.classList.remove('opacity-0');
      mainContent.classList.add('opacity-100');
    }, 1000);
  };

  if (video) {
    // Multiple ways to detect video completion
    video.addEventListener('ended', completeIntro);
    video.addEventListener('error', completeIntro);
    video.onended = completeIntro;
    video.onerror = completeIntro;
    
    // Also check video time periodically as fallback
    const checkVideoProgress = () => {
      if (video.duration && video.currentTime >= video.duration - 0.5) {
        completeIntro();
      }
    };
    
    video.addEventListener('timeupdate', checkVideoProgress);
    
    // Debug: Log video events
    video.addEventListener('loadstart', () => console.log('Video loading started'));
    video.addEventListener('canplay', () => console.log('Video can play'));
    video.addEventListener('play', () => console.log('Video playing'));
    video.addEventListener('ended', () => console.log('Video ended'));
  }

  if (skipBtn) {
    skipBtn.onclick = completeIntro;
  }

  // Safety timeout
  setTimeout(completeIntro, 30000);
}

// --- Theme Logic ---

function initTheme() {
  let theme: 'dark' | 'light' | 'monokai' | 'space' = 'dark';
  let isAuto = true;
  const themes = ['dark', 'light', 'monokai', 'space'];
  
  const setTheme = (newTheme: any) => {
    theme = newTheme;
    document.documentElement.setAttribute('data-theme', theme);
    
    // Update button styles
    document.querySelectorAll('[data-theme-btn]').forEach(btn => {
      const btnTheme = btn.getAttribute('data-theme-btn');
      if (btnTheme === theme) {
        btn.classList.add('bg-accent', 'text-bg');
        btn.classList.remove('text-text/40');
      } else {
        btn.classList.remove('bg-accent', 'text-bg');
        btn.classList.add('text-text/40');
      }
    });
  };

  document.querySelectorAll('[data-theme-btn]').forEach(btn => {
    btn.addEventListener('click', () => {
      const newTheme = btn.getAttribute('data-theme-btn');
      setTheme(newTheme);
      isAuto = false;
      updateAutoBtn();
    });
  });

  const autoBtn = document.getElementById('auto-theme-btn');
  const updateAutoBtn = () => {
    if (!autoBtn) return;
    if (isAuto) {
      autoBtn.classList.add('bg-accent', 'text-bg');
      autoBtn.classList.remove('text-text/40');
      autoBtn.innerText = 'Auto';
    } else {
      autoBtn.classList.remove('bg-accent', 'text-bg');
      autoBtn.classList.add('text-text/40');
      autoBtn.innerText = 'Manual';
    }
  };

  if (autoBtn) {
    autoBtn.onclick = () => {
      isAuto = !isAuto;
      updateAutoBtn();
    };
  }

  // Auto cycle
  setInterval(() => {
    if (!isAuto) return;
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  }, 10000);

  setTheme('dark');
}

// --- Navbar Logic ---

function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (!navbar) return;
    if (window.scrollY > 50) {
      navbar.classList.add('bg-bg/90', 'backdrop-blur-md', 'border-b', 'border-border', 'py-3');
      navbar.classList.remove('bg-transparent', 'py-6');
    } else {
      navbar.classList.remove('bg-bg/90', 'backdrop-blur-md', 'border-b', 'border-border', 'py-3');
      navbar.classList.add('bg-transparent', 'py-6');
    }
  });
}

// --- Terminal Logic ---

function initTerminal() {
  const terminalBody = document.getElementById('terminal-body');
  if (!terminalBody) return;

  const commands = [
    "> system.init()",
    "Initializing neural network...",
    "Loading kernel modules...",
    "Establishing secure handshake...",
    "Accessing encrypted repositories...",
    "> mgcini.skills.load()",
    "Frontend: React, TypeScript, Next.js",
    "Backend: Node.js, Python, PostgreSQL",
    "Design: UX/UI Researcher, Figma",
    "> mgcini.status",
    "Status: ACTIVE // SENIOR_ARCHITECT",
    "> _"
  ];

  let currentLine = 0;
  const interval = setInterval(() => {
    if (currentLine < commands.length) {
      const lineText = commands[currentLine];
      const lineDiv = document.createElement('div');
      lineDiv.className = 'mb-1 flex items-start gap-3';
      
      const indexSpan = document.createElement('span');
      indexSpan.className = 'text-text/20';
      indexSpan.innerText = `[${currentLine.toString().padStart(2, '0')}]`;
      
      const contentSpan = document.createElement('span');
      if (lineText.startsWith('>')) {
        contentSpan.className = 'text-accent font-bold';
      } else {
        contentSpan.className = 'text-text/60';
      }

      if (lineText === '> _') {
        contentSpan.innerHTML = '<span class="text-accent font-bold">&gt;</span><span class="terminal-cursor"></span>';
      } else {
        contentSpan.innerText = lineText;
      }

      lineDiv.appendChild(indexSpan);
      lineDiv.appendChild(contentSpan);
      terminalBody.appendChild(lineDiv);
      
      terminalBody.scrollTop = terminalBody.scrollHeight;
      currentLine++;
    } else {
      clearInterval(interval);
    }
  }, 800);
}

// --- Projects Logic ---

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  PROJECTS.forEach(project => {
    const card = document.createElement('div');
    card.className = 'group relative bg-bg p-12 flex flex-col h-full border border-transparent transition-all duration-500 hover:bg-secondary hover:border-accent hover:-translate-y-2 hover:scale-[1.02]';
    
    card.innerHTML = `
      <div class="mb-12 relative overflow-hidden aspect-video border border-border">
        <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" referrerPolicy="no-referrer" />
      </div>
      <h3 class="text-2xl font-black uppercase tracking-tighter mb-6 text-text group-hover:text-text/60 transition-colors">${project.title}</h3>
      <p class="text-text/50 text-xs mb-12 flex-grow leading-relaxed">${project.description}</p>
      <div class="flex items-center justify-between mt-auto pt-8 border-t border-border">
        <button class="details-btn flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-text hover:text-accent transition-colors group/btn">
          Details <i data-lucide="chevron-right" class="w-3 h-3 transition-transform group-hover/btn:translate-x-1"></i>
        </button>
        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="text-text/30 hover:text-text transition-colors">
          <i data-lucide="github" class="w-5 h-5"></i>
        </a>
      </div>
    `;

    card.querySelector('.details-btn')?.addEventListener('click', () => openModal(project));
    grid.appendChild(card);
  });
}

function openModal(project: any) {
  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-content');
  const modalBody = document.getElementById('modal-body');
  
  if (!modal || !modalBody || !modalContent) return;

  modalBody.innerHTML = `
    <div class="relative h-64 md:h-auto overflow-hidden border-r border-border">
      <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover" referrerPolicy="no-referrer" />
    </div>
    <div class="p-8 md:p-12">
      <div class="flex items-center gap-2 mb-6">
        <span class="text-[10px] font-black uppercase tracking-[0.3em] text-text/40">Project Details</span>
      </div>
      <h2 class="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 text-text">${project.title}</h2>
      <p class="text-text/70 leading-relaxed mb-8 text-sm border-l-2 border-border pl-6">${project.longDescription}</p>
      
      <div class="mb-8">
        <h4 class="text-[10px] font-black uppercase tracking-[0.3em] text-text/40 mb-4">Technologies</h4>
        <div class="flex flex-wrap gap-2">
          ${project.tech.map((t: string) => `<span class="px-3 py-1 bg-secondary border border-border text-[10px] font-bold uppercase tracking-widest text-text/60">${t}</span>`).join('')}
        </div>
      </div>

      <div class="flex flex-col sm:flex-row gap-4">
        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-3 px-8 py-4 bg-accent text-bg text-xs font-black uppercase tracking-widest hover:opacity-80 transition-all">
          View Source <i data-lucide="github" class="w-4 h-4"></i>
        </a>
        <button class="flex items-center justify-center gap-3 px-8 py-4 border border-border text-text text-xs font-black uppercase tracking-widest hover:bg-secondary transition-all">
          Live Demo <i data-lucide="external-link" class="w-4 h-4"></i>
        </button>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  setTimeout(() => {
    modal.classList.remove('opacity-0');
    modalContent.classList.remove('scale-95');
  }, 10);
  
  // Re-init icons in modal
  // @ts-ignore
  if (window.lucide) window.lucide.createIcons();
}

document.getElementById('close-modal')?.addEventListener('click', () => {
  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-content');
  if (!modal || !modalContent) return;
  
  modal.classList.add('opacity-0');
  modalContent.classList.add('scale-95');
  setTimeout(() => {
    modal.classList.add('hidden');
  }, 300);
});

// --- Skills & Experience Logic ---

function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;

  SKILLS.forEach((group, idx) => {
    const div = document.createElement('div');
    div.className = 'p-10 border border-border bg-bg/40 hover:border-text/30 transition-all duration-500 relative group overflow-hidden';
    div.innerHTML = `
      <h3 class="text-lg font-black uppercase tracking-[0.2em] mb-10 text-text flex items-center gap-3">
        <span class="text-text/20">[${idx + 1}]</span> ${group.name}
      </h3>
      <div class="flex flex-wrap gap-3">
        ${group.items.map(item => `
          <span class="px-4 py-2 bg-secondary text-[10px] font-bold text-text/60 border border-border hover:border-text/40 hover:text-text transition-all">
            ${item}
          </span>
        `).join('')}
      </div>
    `;
    container.appendChild(div);
  });
}

function renderExperience() {
  const container = document.getElementById('experience-container');
  if (!container) return;

  EXPERIENCE.forEach((exp, idx) => {
    const div = document.createElement('div');
    div.className = 'group grid md:grid-cols-[1.5fr_3fr_1fr] items-center p-10 md:p-16 bg-bg hover:bg-secondary transition-all duration-500';
    div.innerHTML = `
      <div>
        <span class="text-[10px] font-bold text-text/30 uppercase tracking-[0.2em] mb-2 block">${exp.period}</span>
        <h3 class="text-xl font-black uppercase tracking-tighter text-text">${exp.company}</h3>
      </div>
      <div class="py-6 md:py-0 md:px-16 border-l border-text/5">
        <h4 class="text-sm font-bold text-text/60 mb-3 uppercase tracking-widest">${exp.role}</h4>
        <p class="text-text/40 text-[11px] leading-relaxed">${exp.desc}</p>
      </div>
      <div class="flex justify-end opacity-20 group-hover:opacity-60 transition-opacity">
        <i data-lucide="briefcase" class="w-8 h-8 text-text"></i>
      </div>
    `;
    container.appendChild(div);
  });
}

// --- Three.js Background ---

function initThreeBackground() {
  const container = document.getElementById('three-canvas-container');
  if (!container) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  // Create a grid of points
  const geometry = new THREE.BufferGeometry();
  const count = 3000;
  const positions = new Float32Array(count * 3);
  
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10;
  }
  
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  
  const material = new THREE.PointsMaterial({
    size: 0.015,
    color: 0xffffff,
    transparent: true,
    opacity: 0.5,
    sizeAttenuation: true
  });
  
  const points = new THREE.Points(geometry, material);
  scene.add(points);

  camera.position.z = 3;

  // Animation
  const animate = () => {
    requestAnimationFrame(animate);
    
    points.rotation.y += 0.001;
    points.rotation.x += 0.0005;
    
    // Pulse opacity based on theme
    const theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'monokai') {
      material.color.setHex(0xa6e22e);
    } else if (theme === 'space') {
      material.color.setHex(0x7aa2f7);
    } else {
      material.color.setHex(0xffffff);
    }

    renderer.render(scene, camera);
  };

  animate();

  // Resize handling
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}
