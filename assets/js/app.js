// Resolve theme colors once per theme change for canvas rendering.
const portfolioColors=new Map();
function portfolioPaint(token,alpha=1){const key=document.documentElement.dataset.theme+token;let rgb=portfolioColors.get(key);if(!rgb){const probe=document.createElement('span');probe.style.color='var('+token+')';document.documentElement.append(probe);rgb=getComputedStyle(probe).color;probe.remove();portfolioColors.set(key,rgb);}return alpha===1?rgb:'color-mix(in srgb,'+rgb+' '+Math.round(alpha*100)+'%,transparent)';}
/**
 * ==========================================================================
 * SHAM ANAND — MACHINE LEARNING & AI ENGINEER PORTFOLIO SCRIPT
 * High-Performance Cinematic Intro, Typography Warp/Melt & Interactive Physics
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasAnimations = false;
  const lenis = null;
  // 3. DESKTOP CUSTOM CURSOR
  // Fluid text cursor initializes below.

  // 4. NEURAL NETWORK CANVAS ANIMATION (HERO SECTION)
  initNeuralCanvas();

  function initNeuralCanvas() {
    const canvas = document.getElementById('hero-neural-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    let animationFrameId = null;
    let isCanvasVisible = true;

    const nodeCount = width > 768 ? 105 : 44;
    const connectionDistance = width > 768 ? 175 : 120;
    const nodes = [];
    let mouse = { x: -1000, y: -1000, radius: 140 };

    window.addEventListener('resize', () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    });

    window.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });

    class NeuralNode {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.65;
        this.vy = (Math.random() - 0.5) * 0.65;
        this.radius = Math.random() * 2.5 + 1.8;
        this.baseToken = Math.random() > 0.3 ? '--hero-particle' : '--accent';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const angle = Math.atan2(dy, dx);
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= Math.cos(angle) * force * 1.5;
          this.y -= Math.sin(angle) * force * 1.5;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = portfolioPaint(this.baseToken, .6);
        ctx.fill();
      }
    }

    for (let i = 0; i < nodeCount; i++) {
      nodes.push(new NeuralNode());
    }

    function animate() {
      if (!isCanvasVisible) return;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance) * 0.48;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = portfolioPaint('--hero-particle',opacity);
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      }

      nodes.forEach((node) => {
        node.update();
        node.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    const heroSection = document.getElementById('hero');
    if ('IntersectionObserver' in window && heroSection) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            isCanvasVisible = entry.isIntersecting;
            if (isCanvasVisible) {
              cancelAnimationFrame(animationFrameId);
              animate();
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(heroSection);
    }
  }

  document.getElementById('intro-screen')?.remove();
  document.getElementById('cream-reveal-curtain')?.remove();
  // 8. ACCORDION INTERACTION (Expertise Section)
  const accordionItems = document.querySelectorAll('.accordion-item');
  accordionItems.forEach((item) => {
    const header = item.querySelector('.accordion-header');
    if (!header) return;

    header.addEventListener('click', () => {
      const isAlreadyActive = item.classList.contains('is-active');

      accordionItems.forEach((el) => el.classList.remove('is-active'));

      if (!isAlreadyActive) {
        item.classList.add('is-active');
      }

      setTimeout(() => {
        // Native layout requires no animation-library refresh.
      }, 400);
    });
  });

  // 14. REAL-TIME CLOCK FOR PUDUCHERRY, INDIA (IST)
  function updateClock() {
    const timeElement = document.getElementById('local-time');
    if (!timeElement) return;

    try {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      };
      const formatter = new Intl.DateTimeFormat([], options);
      timeElement.textContent = `${formatter.format(new Date())} IST`;
    } catch (e) {
      timeElement.textContent = new Date().toLocaleTimeString();
    }
  }
  updateClock();
  setInterval(updateClock, 10000);


  // 16. 3D GLITCH ARC CAROUSEL FOR ACCORDION ITEM 01 (COMPUTER VISION)
  initCvGlitchCarousel();

  function initCvGlitchCarousel() {
    const wrapper = document.getElementById('cv-glitch-carousel');
    const sliceBox = document.getElementById('glitch-slice-box');
    const captionEl = document.getElementById('glitch-caption-text');
    if (!wrapper || !sliceBox || !captionEl) return;

    const cards = wrapper.querySelectorAll('.carousel-card');
    if (cards.length < 5) return;

    const captions = [
      'VEHICLE_DETECTION: 99.4%',
      'PEDESTRIAN_TRACKING: 98.1%',
      'TRAFFIC_SIGN_RECOG: 99.8%',
      'LANE_SEGMENTATION: 97.5%',
      'OBSTACLE_AVOIDANCE: 99.2%'
    ];

    let currentStep = 0;

    function triggerGlitchFlash(callback) {
      sliceBox.innerHTML = '';
      sliceBox.style.opacity = '1';

      const sliceCount = 6;
      for (let i = 0; i < sliceCount; i++) {
        const slice = document.createElement('div');
        slice.className = 'glitch-slice';
        slice.style.top = `${(i * 100) / sliceCount}%`;
        slice.style.height = `${100 / sliceCount}%`;

        const randomX = (Math.random() - 0.5) * 24;
        const randomHue = Math.floor(Math.random() * 360);
        slice.style.transform = `translateX(${randomX}px)`;
        slice.style.filter = `hue-rotate(${randomHue}deg) saturate(200%)`;

        sliceBox.appendChild(slice);
      }

      setTimeout(() => {
        if (callback) callback();
        sliceBox.style.transition = 'opacity 130ms ease-out';
        sliceBox.style.opacity = '0';
        setTimeout(() => {
          sliceBox.innerHTML = '';
          sliceBox.style.transition = 'none';
        }, 130);
      }, 90);
    }

    function advanceCarousel() {
      triggerGlitchFlash(() => {
        currentStep = (currentStep + 1) % 5;

        cards.forEach((card, i) => {
          const newPos = (i + (5 - currentStep)) % 5;
          card.className = `carousel-card card-pos-${newPos}`;
        });

        captionEl.style.opacity = '0';
        setTimeout(() => {
          captionEl.textContent = captions[currentStep];
          captionEl.style.opacity = '1';
        }, 120);
      });
    }

    setInterval(advanceCarousel, 2600);
  }


  // 16.1 LLM 3D GLITCH ARC CAROUSEL (ACCORDION CARD 02)
  initLlmGlitchCarousel();

  function initLlmGlitchCarousel() {
    const wrapper = document.getElementById('llm-arc-carousel');
    const sliceBox = document.getElementById('llm-slice-box');
    const captionEl = document.getElementById('llm-caption-text');
    if (!wrapper || !sliceBox || !captionEl) return;

    const cards = wrapper.querySelectorAll('.carousel-card');
    if (cards.length < 5) return;

    const captions = [
      'ATTN_WEIGHT: 0.984 [HEAD_08]',
      'KV_CACHE_HIT: 99.4% // FP16',
      'AUTOREGRESSIVE_GEN: 480 T/S',
      'CHAIN_OF_THOUGHT: ACTIVE',
      'SOFTMAX_TEMP: 0.7 • TOP_P: 0.95'
    ];

    let currentStep = 0;

    function triggerGlitchFlash(callback) {
      sliceBox.innerHTML = '';
      sliceBox.style.opacity = '1';
      const sliceCount = 6;
      for (let i = 0; i < sliceCount; i++) {
        const slice = document.createElement('div');
        slice.className = 'glitch-slice';
        slice.style.top = `${(i * 100) / sliceCount}%`;
        slice.style.height = `${100 / sliceCount}%`;
        const randomX = (Math.random() - 0.5) * 24;
        const randomHue = Math.floor(Math.random() * 360);
        slice.style.transform = `translateX(${randomX}px)`;
        slice.style.filter = `hue-rotate(${randomHue}deg) saturate(200%)`;
        sliceBox.appendChild(slice);
      }
      setTimeout(() => {
        if (callback) callback();
        sliceBox.style.transition = 'opacity 130ms ease-out';
        sliceBox.style.opacity = '0';
        setTimeout(() => {
          sliceBox.innerHTML = '';
          sliceBox.style.transition = 'none';
        }, 130);
      }, 90);
    }

    function advanceCarousel() {
      triggerGlitchFlash(() => {
        currentStep = (currentStep + 1) % 5;
        cards.forEach((card, i) => {
          const newPos = (i + (5 - currentStep)) % 5;
          card.className = `carousel-card card-pos-${newPos}`;
        });
        captionEl.style.opacity = '0';
        setTimeout(() => {
          captionEl.textContent = captions[currentStep];
          captionEl.style.opacity = '1';
        }, 120);
      });
    }

    setInterval(advanceCarousel, 2600);
  }

  // 16.2 NLP 3D GLITCH ARC CAROUSEL (ACCORDION CARD 03)
  initNlpGlitchCarousel();

  function initNlpGlitchCarousel() {
    const wrapper = document.getElementById('nlp-arc-carousel');
    const sliceBox = document.getElementById('nlp-slice-box');
    const captionEl = document.getElementById('nlp-caption-text');
    if (!wrapper || !sliceBox || !captionEl) return;

    const cards = wrapper.querySelectorAll('.carousel-card');
    if (cards.length < 5) return;

    const captions = [
      'BERT_EMBED: 768-D // LAYER_12',
      'NER_EXTRACTION: 99.1% // SPACY',
      'COSINE_SIM: 0.942 [SEMANTIC]',
      'SENTIMENT: +94.7% POSITIVE',
      'BPE_TOKENS: 32K VOCAB'
    ];

    let currentStep = 0;

    function triggerGlitchFlash(callback) {
      sliceBox.innerHTML = '';
      sliceBox.style.opacity = '1';
      const sliceCount = 6;
      for (let i = 0; i < sliceCount; i++) {
        const slice = document.createElement('div');
        slice.className = 'glitch-slice';
        slice.style.top = `${(i * 100) / sliceCount}%`;
        slice.style.height = `${100 / sliceCount}%`;
        const randomX = (Math.random() - 0.5) * 24;
        const randomHue = Math.floor(Math.random() * 360);
        slice.style.transform = `translateX(${randomX}px)`;
        slice.style.filter = `hue-rotate(${randomHue}deg) saturate(200%)`;
        sliceBox.appendChild(slice);
      }
      setTimeout(() => {
        if (callback) callback();
        sliceBox.style.transition = 'opacity 130ms ease-out';
        sliceBox.style.opacity = '0';
        setTimeout(() => {
          sliceBox.innerHTML = '';
          sliceBox.style.transition = 'none';
        }, 130);
      }, 90);
    }

    function advanceCarousel() {
      triggerGlitchFlash(() => {
        currentStep = (currentStep + 1) % 5;
        cards.forEach((card, i) => {
          const newPos = (i + (5 - currentStep)) % 5;
          card.className = `carousel-card card-pos-${newPos}`;
        });
        captionEl.style.opacity = '0';
        setTimeout(() => {
          captionEl.textContent = captions[currentStep];
          captionEl.style.opacity = '1';
        }, 120);
      });
    }

    setInterval(advanceCarousel, 2900);
  }

  // 16.3 ML 3D GLITCH ARC CAROUSEL (ACCORDION CARD 04)
  initMlGlitchCarousel();

  function initMlGlitchCarousel() {
    const wrapper = document.getElementById('ml-arc-carousel');
    const sliceBox = document.getElementById('ml-slice-box');
    const captionEl = document.getElementById('ml-caption-text');
    if (!wrapper || !sliceBox || !captionEl) return;

    const cards = wrapper.querySelectorAll('.carousel-card');
    if (cards.length < 5) return;

    const captions = [
      'PIPELINE_RATE: 2.8M ROWS/S',
      'FEAT_IMPORTANCE: 4.8M TENSORS',
      'LOSS: 0.0182 // ROC_AUC: 0.994',
      'XGBOOST_DEPTH: 8 // F1: 0.982',
      'DOCKER_RUNTIME: ACTIVE // GPU'
    ];

    let currentStep = 0;

    function triggerGlitchFlash(callback) {
      sliceBox.innerHTML = '';
      sliceBox.style.opacity = '1';
      const sliceCount = 6;
      for (let i = 0; i < sliceCount; i++) {
        const slice = document.createElement('div');
        slice.className = 'glitch-slice';
        slice.style.top = `${(i * 100) / sliceCount}%`;
        slice.style.height = `${100 / sliceCount}%`;
        const randomX = (Math.random() - 0.5) * 24;
        const randomHue = Math.floor(Math.random() * 360);
        slice.style.transform = `translateX(${randomX}px)`;
        slice.style.filter = `hue-rotate(${randomHue}deg) saturate(200%)`;
        sliceBox.appendChild(slice);
      }
      setTimeout(() => {
        if (callback) callback();
        sliceBox.style.transition = 'opacity 130ms ease-out';
        sliceBox.style.opacity = '0';
        setTimeout(() => {
          sliceBox.innerHTML = '';
          sliceBox.style.transition = 'none';
        }, 130);
      }, 90);
    }

    function advanceCarousel() {
      triggerGlitchFlash(() => {
        currentStep = (currentStep + 1) % 5;
        cards.forEach((card, i) => {
          const newPos = (i + (5 - currentStep)) % 5;
          card.className = `carousel-card card-pos-${newPos}`;
        });
        captionEl.style.opacity = '0';
        setTimeout(() => {
          captionEl.textContent = captions[currentStep];
          captionEl.style.opacity = '1';
        }, 120);
      });
    }

    setInterval(advanceCarousel, 3100);
  }


  // Project gallery and interactive demos are initialized in projects.js.

});

document.addEventListener('DOMContentLoaded', () => {
const projects = [{"id": "autopilot", "title": "Tesla Autopilot Object Detection System", "category": "COMPUTER VISION", "short": "Reading the road, one frame at a time.", "desc": "A Tesla-inspired computer vision concept for detecting vehicles and interpreting a road scene. Explore how a detection overlay can make moving objects easier to understand.", "steps": ["Read frames from a road-scene video.", "Detect vehicles and associate boxes across frames.", "Render object labels alongside lane guidance."], "stack": ["Python", "OpenCV", "Object detection"], "note": "Independent portfolio concept; not affiliated with Tesla. The demo animates a synthetic road scene, not a self-driving system."}, {"id": "translator", "title": "Microsoft Translator AI Chatbot", "category": "LANGUAGE AI", "short": "Ideas travel further without language barriers.", "desc": "A multilingual conversation interface concept that pairs a chat experience with a translation workflow. Try sample phrases and see the translated reply appear.", "steps": ["Capture a message and select the target language.", "Send text through a translation service in a connected implementation.", "Display the translated response in the conversation."], "stack": ["Python", "Translation API", "Chat interface"], "note": "This offline demo translates a small set of sample phrases using a lookup table. It is not connected to Microsoft Translator."}, {"id": "traffic", "title": "Smart AI Traffic Light & Vehicle Monitor", "category": "INTELLIGENT MOBILITY", "short": "Less waiting. More intelligent intersections.", "desc": "A traffic-management concept that uses vehicle counts to inform signal timing. Adjust the simulated demand and watch the intersection respond.", "steps": ["Count vehicles approaching the intersection.", "Compare demand between north\u2013south and east\u2013west lanes.", "Allocate a longer green phase to the busier direction."], "stack": ["YOLOv8", "ByteTrack", "Python"], "note": "Browser simulation of adaptive timing, not a live traffic feed or a deployed signal controller."}, {"id": "resume", "title": "AI Resume Analyzer & Job Matcher", "category": "APPLIED NLP", "short": "Turn experience into a clearer match.", "desc": "A r\u00e9sum\u00e9-to-role comparison concept that highlights aligned skills and gaps. Paste sample text to explore transparent keyword matching in your browser.", "steps": ["Extract relevant skills from r\u00e9sum\u00e9 and role text.", "Compare recognized skills shared between the documents.", "Show matched and missing keywords for review."], "stack": ["Python", "NLP", "Text similarity"], "note": "The demo performs local keyword matching, not an ATS score or a hiring recommendation. Your text stays in this page."}, {"id": "reviews", "title": "Airbnb Customer Review Summarizer", "category": "TEXT INTELLIGENCE", "short": "Many guest opinions. One useful overview.", "desc": "A review-analysis concept that condenses guest feedback into common themes and representative sentences, helping readers inspect what guests mention most.", "steps": ["Split review text into individual sentences.", "Group recurring terms into hospitality themes.", "Surface representative comments for quick inspection."], "stack": ["Python", "NLP", "Summarization"], "note": "Local, rule-based extractive demo; it does not call Airbnb or an LLM. Summaries can miss context."}];
const dialog = document.getElementById('project-dialog');
if (!dialog) return;
const demo = document.getElementById('project-demo');
let stopDemo = () => {}, opener = null, previousOverflow = '';
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const escapeHTML = str => String(str).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function setOutput(text) { const el = demo.querySelector('.demo-output'); el.textContent = text; el.classList.remove('demo-result-in'); void el.offsetWidth; el.classList.add('demo-result-in'); }
function resultBox() { return '<div class="demo-output" role="status" aria-live="polite">Choose your inputs and run the demo.</div>'; }
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const p = projects.find(p => p.id === button.dataset.project);
  if (!p) return;
  opener = document.activeElement instanceof HTMLElement && document.activeElement !== document.body ? document.activeElement : button; stopDemo();
  document.getElementById('project-category').textContent = p.category;
  document.getElementById('project-dialog-title').textContent = p.title;
  document.getElementById('project-description').textContent = p.desc;
  document.getElementById('project-note').textContent = p.note;
  document.getElementById('project-steps').innerHTML = p.steps.map(t => `<li>${escapeHTML(t)}</li>`).join('');
  document.getElementById('project-stack').innerHTML = p.stack.map(t => `<span>${escapeHTML(t)}</span>`).join('');
  demo.replaceChildren();
  previousOverflow = document.body.style.overflow; document.body.style.overflow = 'hidden';
  dialog.showModal(); dialog.scrollTop = 0;
  if (p.id === 'autopilot' || p.id === 'traffic') startScene(p.id);
  else if (p.id === 'translator') startTranslator();
  else if (p.id === 'resume') startResume();
  else startReviews();
}));
document.getElementById('project-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if (e.target === dialog) { const r = dialog.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close(); }});
dialog.addEventListener('close', () => { stopDemo(); stopDemo = () => {}; document.body.style.overflow = previousOverflow; opener?.focus(); });
function startScene(kind) {
 const road = kind === 'autopilot';
 demo.innerHTML = `<canvas width="600" height="390" aria-label="${road ? 'Animated simulated road with vehicle detection boxes' : 'Simulated intersection with adaptive traffic lights'}"></canvas><div class="demo-controls"><button type="button" id="scene-toggle">${reduced ? 'Play' : 'Pause'} simulation</button><button type="button" id="scene-reset">Reset</button></div><label class="demo-field">${road ? 'Traffic density' : 'North–south demand'}<input id="scene-demand" type="range" min="1" max="8" value="4"></label><p class="demo-caption" id="scene-status"></p>`;
 const canvas = demo.querySelector('canvas'), ctx = canvas.getContext('2d');
 if (!ctx) { demo.innerHTML = '<p class="demo-caption">Canvas is unavailable in this browser.</p>'; return; }
 let frame = 0, t = 0, last = 0, running = !reduced;
 const slider = demo.querySelector('#scene-demand'), toggle = demo.querySelector('#scene-toggle');
 const label = (txt,x,y,color=portfolioPaint('--accent',1)) => {ctx.fillStyle=color;ctx.font='12px monospace';ctx.fillText(txt,x,y);};
 function car(x,y,color=portfolioPaint('--text',1),horizontal=false) {ctx.fillStyle=color;ctx.fillRect(x,y,horizontal?30:20,horizontal?18:34);ctx.fillStyle=portfolioPaint('--success',1);ctx.fillRect(x+4,y+6,horizontal?10:12,horizontal?10:8);}
 function draw(){
  const n=Number(slider.value);ctx.clearRect(0,0,600,390);ctx.fillStyle=portfolioPaint('--success',1);ctx.fillRect(0,0,600,390);
  if(road){
   ctx.fillStyle=portfolioPaint('--surface',1);ctx.beginPath();ctx.moveTo(230,50);ctx.lineTo(370,50);ctx.lineTo(575,390);ctx.lineTo(25,390);ctx.fill();
   ctx.strokeStyle=portfolioPaint('--success',1);ctx.lineWidth=2;
   for(const [start,end] of [[255,195],[345,405]]){ctx.beginPath();ctx.moveTo(start,60);ctx.lineTo(end,390);ctx.stroke();}
   ctx.strokeStyle=portfolioPaint('--text',0.25098039215686274);ctx.setLineDash([18,24]);ctx.lineDashOffset=-t*65;ctx.beginPath();ctx.moveTo(300,50);ctx.lineTo(300,390);ctx.stroke();ctx.setLineDash([]);
   for(let i=0;i<n;i++){let depth=((t*.10+i/n)%1);let y=80+depth*290;let lane=(i%3)-1;let x=300+lane*(30+depth*105);let w=14+depth*32,h=w*1.55;ctx.fillStyle=[portfolioPaint('--accent',1),portfolioPaint('--accent',1),portfolioPaint('--accent',1)][i%3];ctx.fillRect(x-w/2,y,w,h);ctx.strokeStyle=portfolioPaint('--success',1);ctx.strokeRect(x-w/2-7,y-7,w+14,h+14);label('VEHICLE '+(i+1),x-w/2-7,y-14);}
   label('SYNTHETIC CAMERA / ROAD SCENE',20,28);demo.querySelector('#scene-status').textContent=`${n} simulated vehicles • Animated boxes illustrate detection overlays.`;
  }else{
   ctx.fillStyle=portfolioPaint('--success',1);ctx.fillRect(240,0,120,390);ctx.fillRect(0,140,600,110);ctx.strokeStyle=portfolioPaint('--text',0.396078431372549);ctx.setLineDash([12,12]);ctx.beginPath();ctx.moveTo(300,0);ctx.lineTo(300,140);ctx.moveTo(300,250);ctx.lineTo(300,390);ctx.moveTo(0,195);ctx.lineTo(240,195);ctx.moveTo(360,195);ctx.lineTo(600,195);ctx.stroke();ctx.setLineDash([]);
   const nsGreen=4+n, ewGreen=7, cycle=nsGreen+ewGreen+4, phase=t%cycle;
   const ns=phase<nsGreen, ew=phase>=nsGreen+2 && phase<nsGreen+2+ewGreen;
   for(let i=0;i<n;i++){let y=ns?((i*52+t*52)%450)-35:Math.max(-25,110-i*43);car(268,y,portfolioPaint('--accent',1));}
   for(let i=0;i<4;i++){let x=ew?((i*85+t*65)%660)-30:205-i*45;car(x,210,portfolioPaint('--accent',1),true);}
   for(const [x,y,green,amber] of [[220,110,ns,phase>=nsGreen&&phase<nsGreen+2],[372,262,ew,phase>=nsGreen+2+ewGreen]]){ctx.fillStyle=portfolioPaint('--success',1);ctx.fillRect(x-10,y-10,23,58);[portfolioPaint('--danger',1),portfolioPaint('--accent',1),portfolioPaint('--success',1)].forEach((color,j)=>{ctx.fillStyle=(j===2&&green)||(j===1&&amber)||(j===0&&!green&&!amber)?color:portfolioPaint('--surface',1);ctx.beginPath();ctx.arc(x+2,y+j*16,5,0,Math.PI*2);ctx.fill();});}
   label('ADAPTIVE INTERSECTION / SIMULATION',20,28);demo.querySelector('#scene-status').textContent=`North–south green: ${nsGreen}s · East–west green: ${ewGreen}s · 2s amber between phases.`;
  }
 }
 function tick(now){if(running&&!document.hidden)t+=Math.min((now-(last||now))/1000,.05);last=now;draw();if(running)frame=requestAnimationFrame(tick);}
 function schedule(){cancelAnimationFrame(frame);last=0;draw();if(running)frame=requestAnimationFrame(tick);}
 toggle.addEventListener('click',()=>{running=!running;toggle.textContent=running?'Pause simulation':'Play simulation';schedule();});
 demo.querySelector('#scene-reset').addEventListener('click',()=>{t=0;draw();});slider.addEventListener('input',draw);
 stopDemo=()=>{running=false;cancelAnimationFrame(frame);};schedule();
}
function startTranslator(){
 const phrases={'Hello! How are you?':{Tamil:'வணக்கம்! நீங்கள் எப்படி இருக்கிறீர்கள்?',Hindi:'नमस्ते! आप कैसे हैं?',French:'Bonjour ! Comment allez-vous ?'},'Thank you for your help.':{Tamil:'உங்கள் உதவிக்கு நன்றி.',Hindi:'आपकी मदद के लिए धन्यवाद।',French:'Merci pour votre aide.'},'Let us build something together.':{Tamil:'நாம் ஒன்றாக ஏதாவது உருவாக்குவோம்.',Hindi:'आइए मिलकर कुछ बनाएँ।',French:'Construisons quelque chose ensemble.'}};
 demo.innerHTML='<label class="demo-field">Sample message<select id="translation-phrase">'+Object.keys(phrases).map(t=>`<option>${escapeHTML(t)}</option>`).join('')+'</select></label><label class="demo-field">Translate to<select id="translation-language"><option>Tamil</option><option>Hindi</option><option>French</option></select></label><button type="button" class="demo-run">Translate message ↗</button>'+resultBox()+'<p class="demo-caption">Sample-phrase translation • Offline demonstration</p>';
 let timer;stopDemo=()=>clearInterval(timer);
 demo.querySelector('.demo-run').addEventListener('click',()=>{clearInterval(timer);const text=phrases[demo.querySelector('#translation-phrase').value][demo.querySelector('#translation-language').value];if(reduced){setOutput(text);return;} const chars=Array.from(text);let n=0;const output=demo.querySelector('.demo-output');output.setAttribute('aria-live','off');output.textContent='';timer=setInterval(()=>{n++;output.textContent=chars.slice(0,n).join('');if(n>=chars.length){clearInterval(timer);output.setAttribute('aria-live','polite');setOutput(text);}},35);});
}
function startResume(){
 demo.innerHTML='<label class="demo-field">Résumé skills<textarea id="resume-input">Python, SQL, machine learning, TensorFlow, OpenCV and Git. Built computer vision projects.</textarea></label><label class="demo-field">Role requirements<textarea id="role-input">Python, SQL, PyTorch, Docker, Git and computer vision.</textarea></label><button type="button" class="demo-run">Compare skills ↗</button>'+resultBox()+'<p class="demo-caption">Keyword coverage only • No upload • No hiring score</p>';
 const skills=['python','sql','pytorch','tensorflow','opencv','docker','git','aws','nlp','machine learning','computer vision','java','javascript','deep learning'];
 const contains=(text,skill)=>new RegExp('(^|[^a-z0-9])'+skill+'(?=$|[^a-z0-9])','i').test(text);
 demo.querySelector('.demo-run').addEventListener('click',()=>{const resume=demo.querySelector('#resume-input').value;const role=demo.querySelector('#role-input').value;const required=skills.filter(s=>contains(role,s));if(!required.length){setOutput('No recognized skills found. Try Python, SQL, PyTorch, Docker or computer vision.');return;}const matched=required.filter(s=>contains(resume,s)),missing=required.filter(s=>!contains(resume,s));setOutput(`${matched.length} of ${required.length} recognized role skills found\n\nMatched: ${matched.join(', ')||'None'}\nMissing: ${missing.join(', ')||'None'}`);});
}
function startReviews(){
 demo.innerHTML='<label class="demo-field">Guest reviews<textarea id="reviews-input" rows="6">The apartment was clean and comfortable. The location was close to the beach. Our host replied quickly and was very helpful. Street noise made sleeping difficult. Great location for exploring the city.</textarea></label><button type="button" class="demo-run">Summarize reviews ↗</button>'+resultBox()+'<p class="demo-caption">Extractive summary • Keyword-based themes • Runs locally</p>';
 const themes={Cleanliness:['clean','dirty','tidy'],Location:['location','beach','central','transport'],Host:['host','helpful','replied'],Comfort:['comfortable','bed','sleeping','noise'],Value:['value','price','expensive','affordable']};
 demo.querySelector('.demo-run').addEventListener('click',()=>{const text=demo.querySelector('#reviews-input').value.trim();const sentences=text.match(/[^.!?\n]+[.!?]?/g)?.map(s=>s.trim()).filter(Boolean)||[];if(!sentences.length){setOutput('Add some review text first.');return;}const ranked=Object.entries(themes).map(([name,keys])=>({name,count:sentences.filter(s=>keys.some(k=>new RegExp('\\b'+k+'\\b','i').test(s))).length,keys})).filter(t=>t.count).sort((a,b)=>b.count-a.count);const chosen=[];for(const theme of ranked){const sentence=sentences.find(s=>!chosen.includes(s)&&theme.keys.some(k=>new RegExp('\\b'+k+'\\b','i').test(s)));if(sentence)chosen.push(sentence);if(chosen.length===3)break;}if(!chosen.length)chosen.push(...sentences.slice(0,3));setOutput('Themes: '+(ranked.map(t=>`${t.name} (${t.count})`).join(' · ')||'No recognized themes')+'\n\n'+chosen.map(t=>'• '+t).join('\n'));});
}
});


document.addEventListener('DOMContentLoaded', () => {
  const stage=document.querySelector('.deck-stage');
  if(!stage)return;
  const cards=[...stage.querySelectorAll('.lab-card')], count=cards.length;
  const motion=matchMedia('(prefers-reduced-motion: reduce)'), narrow=matchMedia('(max-width:768px)');
  function tick(whoosh=false){window.portfolioAudio?.play(whoosh?'whoosh':'tick');}
  motion.addEventListener('change',render);
  let current=0,spread=narrow.matches,entered=motion.matches,step=232,frame=0,drag=null,bloomTimer=0,snapTimer=0;
  const wrap=n=>((n%count)+count)%count;
  const relative=i=>{let n=wrap(i-current);return n>count/2?n-count:n;};
  const dots=document.getElementById('deck-dots');
  cards.forEach((card,i)=>{const dot=document.createElement('button');dot.type='button';dot.setAttribute('aria-label','Show '+card.querySelector('h3').textContent);dot.addEventListener('click',()=>{spread=true;moveTo(i);});dots.append(dot);card.setAttribute('role','group');card.setAttribute('aria-roledescription','slide');card.setAttribute('aria-label',`${i+1} of ${count}`);});
  function measure(){step=Math.min(232,stage.clientWidth*.57);schedule();}
  function render(){frame=0;const active=wrap(Math.round(current));stage.classList.toggle('is-expanded',spread);cards.forEach((card,i)=>{const d=relative(i),a=Math.abs(d);card.style.zIndex=String(20-Math.round(a*5));card.style.opacity=!entered?'0':String(spread?Math.max(.25,1-a*.22):1-a*.09);card.style.transform=!entered?'scale(.25) rotate(0deg)':spread?`translate3d(${d*step}px,${a*28}px,0) scale(${1-Math.min(a,1.4)*.13})`:`rotate(${d*16}deg) scale(${1-a*.11})`;card.inert=i!==active;card.setAttribute('aria-hidden',String(i!==active));});[...dots.children].forEach((d,i)=>d.setAttribute('aria-current',String(i===active)));document.getElementById('deck-status').textContent=`${active+1} / ${count}`;}
  function schedule(){if(!frame)frame=requestAnimationFrame(render);}
  function moveTo(index){const old=wrap(Math.round(current));current=index;render();if(wrap(Math.round(current))!==old)tick();}
  function enter(){if(entered)return;entered=true;cards.forEach((c,i)=>{c.style.setProperty('--bloom-delay',(180+Math.abs(relative(i))*110)+'ms');c.classList.add('is-blooming');});schedule();bloomTimer=setTimeout(()=>cards.forEach(c=>c.classList.remove('is-blooming')),1750);}
  measure();render();
  if(!entered&&'IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){enter();observer.disconnect();}},{threshold:.25});observer.observe(stage);}else{enter();}
  function expand(){if(!entered)return;if(!spread){spread=true;cards.forEach(c=>c.classList.remove('is-blooming'));render();tick(true);}}
  stage.addEventListener('pointerenter',e=>{if(e.pointerType!=='touch')expand();});stage.addEventListener('focusin',expand);
  document.getElementById('deck-previous').addEventListener('click',()=>{expand();moveTo(Math.round(current)-1);});document.getElementById('deck-next').addEventListener('click',()=>{expand();moveTo(Math.round(current)+1);});
  stage.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();expand();moveTo(Math.round(current)+(e.key==='ArrowRight'?1:-1));}else if(e.key==='Home'||e.key==='End'){e.preventDefault();moveTo(e.key==='Home'?0:count-1);}});
  stage.addEventListener('pointerdown',e=>{if(e.target.closest('button,a')||e.button>0)return;expand();drag={id:e.pointerId,x:e.clientX,base:current,last:wrap(Math.round(current))};stage.setPointerCapture(e.pointerId);stage.classList.add('is-dragging');});
  stage.addEventListener('pointermove',e=>{if(!drag)return;current=drag.base-(e.clientX-drag.x)/210;const active=wrap(Math.round(current));if(active!==drag.last){tick();drag.last=active;}schedule();});
  function release(e){if(!drag)return;const id=drag.id;drag=null;stage.classList.remove('is-dragging');if(stage.hasPointerCapture(id))stage.releasePointerCapture(id);moveTo(Math.round(current));}
  stage.addEventListener('pointerup',release);stage.addEventListener('pointercancel',release);stage.addEventListener('lostpointercapture',release);
  stage.addEventListener('wheel',e=>{if(Math.abs(e.deltaX)<=Math.abs(e.deltaY)||!e.deltaX)return;e.preventDefault();expand();current+=e.deltaX/220;schedule();clearTimeout(snapTimer);snapTimer=setTimeout(()=>{moveTo(Math.round(current));tick();},130);},{passive:false});
  if('ResizeObserver'in window)new ResizeObserver(measure).observe(stage);else window.addEventListener('resize',measure,{passive:true});
  narrow.addEventListener('change',()=>{if(narrow.matches)spread=true;measure();});
});

/* Shared interaction layer. Section navigation, sound and theme each have one owner. */
document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  const root=document.documentElement, main=document.getElementById('main-content');
  const reduced=matchMedia('(prefers-reduced-motion: reduce)'), mobile=matchMedia('(max-width:767px)'), fine=matchMedia('(hover:hover) and (pointer:fine)');
  const $=(s,base=document)=>base.querySelector(s), $$=(s,base=document)=>[...base.querySelectorAll(s)];
  const clamp=(v,a=0,b=1)=>Math.min(b,Math.max(a,v));
  const delay=ms=>new Promise(r=>setTimeout(r,ms));
  const ease={expo:'cubic-bezier(.16,1,.3,1)',inout:'cubic-bezier(.65,0,.35,1)',out:'cubic-bezier(.22,1,.36,1)'};
  async function animate(el,frames,options={}){if(!el)return;const a=el.animate(frames,{duration:300,fill:'forwards',easing:ease.out,...options});try{await a.finished;}catch(_){}return a;}
  function transient(el,frames,options){if(reduced.matches)return Promise.resolve();return animate(el,frames,options).then(a=>a?.cancel());}
  let transitioning=false,current='hero',gesture=false;
  const storage={get(key,fallback){try{return localStorage.getItem(key)??fallback;}catch(_){return fallback;}},set(key,value){try{localStorage.setItem(key,value);}catch(_){}}};
  /* A single, low-gain synth shared by decks, navigation and scrolling. */
  const soundButton=$('#portfolio-sound');let enabled=storage.get('sham-sound','off')==='on',ctx,master,lastSound=-Infinity;
  const activeSources=new Set();
  function soundUI(){soundButton.setAttribute('aria-pressed',String(enabled));soundButton.setAttribute('aria-label',enabled?'Mute sound':'Enable sound');}
  function unlock(){gesture=true;if(!enabled||reduced.matches)return;try{const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;if(!ctx){ctx=new AC();master=ctx.createGain();master.gain.value=.15;master.connect(ctx.destination);}ctx.resume().catch(()=>{});}catch(_){}}
  function silence(){activeSources.forEach(source=>{try{source.stop();}catch(_){}});activeSources.clear();if(master&&ctx)master.gain.setValueAtTime(0,ctx.currentTime);}
  function synth(kind='tick',velocity=0,transitionSound=false){
    if(!enabled||!gesture||reduced.matches||document.hidden||!ctx||ctx.state!=='running'||(transitioning&&!transitionSound))return;
    const now=ctx.currentTime;if(now-lastSound<.12)return;lastSound=now;master.gain.setValueAtTime(.15,now);
    const intensity=.2+clamp(velocity/2.2)*.45;
    function envelope(source,duration,gainValue,when=0){const gain=ctx.createGain(),start=now+when;gain.gain.setValueAtTime(.0001,start);gain.gain.exponentialRampToValueAtTime(gainValue,start+.012);gain.gain.exponentialRampToValueAtTime(.0001,start+duration);source.connect(gain);gain.connect(master);activeSources.add(source);source.onended=()=>{activeSources.delete(source);source.disconnect();gain.disconnect();};source.start(start);source.stop(start+duration+.02);return gain;}
    function tone(from,to,duration=.13,amp=intensity,when=0){const osc=ctx.createOscillator();osc.type='sine';osc.frequency.setValueAtTime(from,now+when);osc.frequency.exponentialRampToValueAtTime(Math.max(20,to),now+when+duration);envelope(osc,duration,amp,when);}
    function noise(duration=.32,amp=.2){const count=Math.ceil(ctx.sampleRate*duration),buffer=ctx.createBuffer(1,count,ctx.sampleRate),data=buffer.getChannelData(0);for(let i=0;i<count;i++)data[i]=Math.random()*2-1;const src=ctx.createBufferSource(),filter=ctx.createBiquadFilter();src.buffer=buffer;filter.type='lowpass';filter.frequency.value=700+velocity*180;src.connect(filter);const gain=ctx.createGain();gain.gain.setValueAtTime(.0001,now);gain.gain.linearRampToValueAtTime(amp,now+duration*.35);gain.gain.exponentialRampToValueAtTime(.0001,now+duration);filter.connect(gain);gain.connect(master);activeSources.add(src);src.onended=()=>{activeSources.delete(src);src.disconnect();filter.disconnect();gain.disconnect();};src.start();src.stop(now+duration);}
    if(kind==='curtain'){noise(.5,.3);tone(72,38,.25,.35,.42);}
    else if(kind==='spiral')tone(200,800,.85,.22);
    else if(kind==='unwind')tone(800,200,.7,.2);
    else if(kind==='rise'){tone(800,400,.06,.2);tone(70,32,.35,.35,.2);}
    else if(kind==='card'){tone(520,450,.07,.22);tone(660,580,.07,.22,.55);}
    else if(kind==='ink'||kind==='whoosh')noise(kind==='ink'?.7:.2,.24);
    else if(kind==='chime'||kind==='ding'){tone(660,660,.3,.25);tone(990,990,.35,.18,.08);}
    else tone(420+clamp(velocity/3)*450,260,.11,intensity);
  }
  window.portfolioAudio={play:synth,get muted(){return !enabled;}};
  soundUI();soundButton.addEventListener('click',()=>{enabled=!enabled;storage.set('sham-sound',enabled?'on':'off');soundUI();if(enabled){unlock();synth('tick');}else silence();});
  document.addEventListener('pointerdown',unlock,{passive:true});document.addEventListener('keydown',unlock);
  reduced.addEventListener('change',()=>{if(reduced.matches)silence();});document.addEventListener('visibilitychange',()=>{if(document.hidden)silence();});
  /* Theme: update tokens inside the native circular view transition. */
  root.dataset.theme=storage.get('sham-theme','dark')==='light'?'light':'dark';delete root.dataset.studio;
  const themeButton=$('#portfolio-theme');
  function themeLabel(){themeButton.setAttribute('aria-label','Switch to '+(root.dataset.theme==='dark'?'light':'dark')+' theme');}themeLabel();
  themeButton.addEventListener('click',async()=>{if(transitioning||themeButton.disabled)return;themeButton.disabled=true;
    const rect=themeButton.getBoundingClientRect(),x=rect.left+rect.width/2,y=rect.top+rect.height/2,r=Math.hypot(Math.max(x,innerWidth-x),Math.max(y,innerHeight-y));
    const update=()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';storage.set('sham-theme',root.dataset.theme);themeLabel();};
    try{if(document.startViewTransition&&!reduced.matches){const transition=document.startViewTransition(update);await transition.ready;await root.animate({clipPath:[`circle(0px at ${x}px ${y}px)`,`circle(${r}px at ${x}px ${y}px)`]},{duration:600,easing:ease.expo,pseudoElement:'::view-transition-new(root)'}).finished;}else{update();root.classList.add('theme-fading');await delay(300);root.classList.remove('theme-fading');}}catch(_){themeLabel();}finally{themeButton.disabled=false;}
  });
  /* Right rail, mobile focus trap and history-aware navigation. */
  const rail=$('#rail-shell'),toggle=$('#rail-toggle'),menu=$('#right-menu'),links=$$('.rail-link');
  let menuOpen=false;
  function setMenu(open,restore=true){menuOpen=open;rail.classList.toggle('is-open',open);toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');menu.inert=false;if(open)links[0].focus();else if(restore)toggle.focus();}
  toggle.addEventListener('click',()=>{if(!transitioning)setMenu(!menuOpen);});mobile.addEventListener('change',()=>setMenu(false,false));setMenu(false,false);
  document.addEventListener('pointerdown',e=>{if(menuOpen&&!rail.contains(e.target))setMenu(false);});
  function focusTrap(event,container){const focusable=$$('a[href],button:not(:disabled),input,textarea,[tabindex="0"]',container).filter(el=>!el.hidden&&el.getAttribute('aria-disabled')!=='true');const first=focusable[0],last=focusable.at(-1);if(event.key==='Tab'&&first){if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}}}
  const TRANSITIONS=Object.freeze({hero:'CARD',about:'INK',work:'CURTAIN',credentials:'SPIRAL',contact:'RISE',expertise:'INK'});
  window.TRANSITIONS=TRANSITIONS;
  const overlay=$('#page-transition'),cover=$('.transition-cover'),spiral=$('.transition-spiral'),path=$('path',spiral),ink=$('.transition-ink');
  function active(id){current=id;links.forEach(a=>{if(a.hash==='#'+id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}
  function enter(section){const items=$$('.section-eyebrow,h1,h2,h3,.about-paragraphs,.stat-card,.connect-row,.connect-form,.lab-intro,.credential-filter,.credential-stats',section).filter(el=>!el.closest('[hidden]')).slice(0,16);if(reduced.matches)return;items.forEach((el,i)=>{el.getAnimations().forEach(a=>a.cancel());transient(el,[{opacity:0,transform:'translateY(22px)',clipPath:'inset(0 0 100% 0)'},{opacity:1,transform:'translateY(0)',clipPath:'inset(0)'}],{duration:600,delay:i*70});});}
  function instantTop(section){window.scrollTo({top:Math.max(0,window.scrollY+section.getBoundingClientRect().top),behavior:'instant'});}
  function drawSpiral(){const w=innerWidth,h=innerHeight,diagonal=Math.hypot(w,h),turns=4.5,radius=diagonal*.67,gap=radius/turns;spiral.setAttribute('viewBox',`0 0 ${w} ${h}`);let d='';for(let i=0;i<=720;i++){const t=i/720*turns*Math.PI*2,r=i/720*radius;d+=(i?'L':'M')+(w/2+Math.cos(t)*r).toFixed(2)+' '+(h/2+Math.sin(t)*r).toFixed(2)+' ';}path.setAttribute('d',d);const length=path.getTotalLength();path.style.strokeDasharray=String(length);path.style.strokeDashoffset=String(length);path.style.strokeWidth=String(gap*.55);return {length,gap};}
  async function inkReveal(swap){const w=ink.width=Math.min(innerWidth,1000),h=ink.height=Math.round(w*innerHeight/innerWidth),c=ink.getContext('2d'),color=getComputedStyle(root).getPropertyValue('--surface').trim();const dots=Array.from({length:16},(_,i)=>({x:(i%4+.5)/4*w,y:(Math.floor(i/4)+.5)/4*h,delay:(i*71%250)}));const sprite=document.createElement('canvas');sprite.width=sprite.height=256;const sc=sprite.getContext('2d'),g=sc.createRadialGradient(128,128,0,128,128,128);g.addColorStop(0,color);g.addColorStop(.65,color);g.addColorStop(1,'transparent');sc.fillStyle=g;sc.fillRect(0,0,256,256);ink.style.display='block';ink.style.opacity='1';let didSwap=false;await new Promise(resolve=>{const start=performance.now();function frame(now){const t=now-start;c.clearRect(0,0,w,h);c.globalAlpha=.85;for(const dot of dots){const p=clamp((t-dot.delay)/700),r=(1-(1-p)**2)*Math.hypot(w,h)*1.6;c.drawImage(sprite,dot.x-r,dot.y-r,r*2,r*2);}if(t>=570&&!didSwap){swap();didSwap=true;}if(t<950)requestAnimationFrame(frame);else resolve();}requestAnimationFrame(frame);});await animate(ink,[{opacity:1},{opacity:0}],{duration:250});}
  async function navigate(id,{historyMode='push'}={}){const section=document.getElementById(id);if(!section||!TRANSITIONS[id]||transitioning||id===current)return false;
    transitioning=true;root.classList.add('is-transitioning');main.inert=true;setMenu(false,false);overlay.classList.add('is-active');let swapped=false;
    const swap=()=>{if(swapped)return;swapped=true;instantTop(section);active(id);if(historyMode==='push')history.pushState({section:id},'','#'+id);};
    try{const kind=TRANSITIONS[id];synth(kind.toLowerCase(),0,true);
      if(reduced.matches){cover.style.opacity='0';await animate(cover,[{opacity:0},{opacity:1}],{duration:125,easing:'linear'});swap();await animate(cover,[{opacity:1},{opacity:0}],{duration:125,easing:'linear'});}
      else if(kind==='CURTAIN'){cover.style.opacity='1';await animate(cover,[{transform:'scaleY(.02)'},{transform:'scaleY(1)'}],{duration:500,easing:ease.expo});swap();await delay(200);await animate(cover,[{transform:'translateY(0)'},{transform:'translateY(-100%)'}],{duration:550,easing:ease.inout});}
      else if(kind==='SPIRAL'){spiral.style.display='block';const {length,gap}=drawSpiral();await animate(path,[{strokeDashoffset:String(length),strokeWidth:String(gap*.55)},{strokeDashoffset:'0',strokeWidth:String(gap*1.15)}],{duration:900,easing:'cubic-bezier(.55,.085,.68,.53)'});cover.style.opacity='1';swap();await delay(200);cover.style.opacity='0';synth('unwind',0,true);await animate(path,[{strokeDashoffset:'0'},{strokeDashoffset:String(-length)}],{duration:800,easing:'cubic-bezier(.25,.46,.45,.94)'});}
      else if(kind==='RISE'){cover.style.opacity='1';await animate(cover,[{clipPath:'inset(74% 10% 23% 14%)'},{clipPath:'inset(48% 6% 12% 9%)'}],{duration:250,easing:ease.expo});await animate(cover,[{clipPath:'inset(48% 6% 12% 9%)'},{clipPath:'inset(0)'}],{duration:250,easing:ease.expo});swap();transient(section,[{transform:'translateY(80px)'},{transform:'translateY(0)'}],{duration:550,easing:ease.inout});await animate(cover,[{transform:'translateY(0)'},{transform:'translateY(-100%)'}],{duration:550,easing:ease.inout});}
      else if(kind==='INK')await inkReveal(swap);
      else{const origin=window.scrollY+innerHeight/2;main.style.transformOrigin=`50% ${origin}px`;document.body.style.background='var(--ink)';await animate(main,[{transform:'scale(1)',borderRadius:'0px'},{transform:'scale(.65)',borderRadius:'6px'}],{duration:500,easing:ease.inout});main.style.opacity='.6';await delay(80);main.style.visibility='hidden';swap();main.style.transformOrigin=`50% ${window.scrollY+innerHeight/2}px`;main.style.opacity='1';main.style.visibility='';await animate(main,[{clipPath:`inset(${window.scrollY+innerHeight}px 0 0 0)`},{clipPath:'inset(0)'}],{duration:500,easing:ease.inout});await delay(300);await animate(main,[{transform:'scale(.65)'},{transform:'scale(1)'}],{duration:500,easing:ease.inout});}
    }catch(error){console.warn('Transition fallback:',error.message);swap();}
    finally{[main,cover,path,ink].forEach(el=>{el.getAnimations().forEach(a=>a.cancel());el.removeAttribute('style');});spiral.style.display='none';ink.style.display='none';overlay.classList.remove('is-active');root.classList.remove('is-transitioning');document.body.style.background='';main.inert=false;transitioning=false;section.tabIndex=-1;section.focus({preventScroll:true});enter(section);window.dispatchEvent(new Event('scroll'));}
    return true;
  }
  window.portfolioNavigate=navigate;
  document.addEventListener('click',e=>{const link=e.target.closest('a[href^="#"]');if(!link||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;const id=link.hash.slice(1);if(!TRANSITIONS[id])return;e.preventDefault();navigate(id);});
  history.scrollRestoration='manual';try{history.replaceState({section:location.hash.slice(1)||'hero'},'',location.href);}catch(_){}
  function historyNav(){const id=location.hash.slice(1)||'hero';if(transitioning)return;navigate(id,{historyMode:'none'});}window.addEventListener('popstate',historyNav);window.addEventListener('hashchange',historyNav);
  document.addEventListener('keydown',e=>{if(transitioning&&['Tab','ArrowDown','ArrowUp','PageDown','PageUp','Home','End',' '].includes(e.key)){e.preventDefault();return;}if(menuOpen){if(e.key==='Escape'){setMenu(false);return;}focusTrap(e,rail);}if(e.target.closest('input,textarea,select,dialog')||e.ctrlKey||e.metaKey||e.altKey)return;if((e.key==='ArrowDown'||e.key==='ArrowUp')&&e.target.closest('.right-menu')){e.preventDefault();const i=links.indexOf(document.activeElement),next=(i+(e.key==='ArrowDown'?1:-1)+links.length)%links.length;links[next].focus();}else if(e.key==='PageDown'||e.key==='PageUp'){e.preventDefault();const ids=links.map(a=>a.hash.slice(1)),i=ids.indexOf(current);navigate(ids[clamp(i+(e.key==='PageDown'?1:-1),0,ids.length-1)]);}});
  ['wheel','touchmove'].forEach(type=>document.addEventListener(type,e=>{if(transitioning)e.preventDefault();},{passive:false}));
  let velocity=0,lastY=window.scrollY,lastTime=performance.now(),scrollFrame=0;
  function scrollRender(){scrollFrame=0;const y=scrollY,now=performance.now();velocity=Math.abs(y-lastY)/Math.max(16,now-lastTime);lastY=y;lastTime=now;const p=clamp(y/Math.max(1,document.documentElement.scrollHeight-innerHeight));$('.reading-progress i').style.transform=`scaleX(${p})`;$('.top-progress').style.strokeDashoffset=String(131.95*(1-p));updateCredentialScroll();}
  window.addEventListener('scroll',()=>{if(!scrollFrame)scrollFrame=requestAnimationFrame(scrollRender);},{passive:true});
  const sections=$$('main>section[id]');const sectionObserver=new IntersectionObserver(entries=>{if(transitioning)return;for(const entry of entries){if(!entry.isIntersecting)continue;const id=entry.target.id;if(id!==current){active(id);synth(velocity>.8?'whoosh':'tick',velocity);}if(!entry.target.dataset.entered){entry.target.dataset.entered='true';enter(entry.target);}}},{rootMargin:'-20% 0px -55% 0px',threshold:0});sections.forEach(s=>sectionObserver.observe(s));
  /* Source of truth. Empty year / # URLs are intentionally not invented. */
  const credentials=[
    {type:'certificate',title:'Artificial Intelligence',issuer:'GUVI & HCL',year:'',description:'Exploring the foundations of AI and the process of turning data into useful intelligent systems.',skills:['Python','Machine learning','Artificial intelligence'],url:'#',accent:'khaki',monogram:'AI'},
    {type:'certificate',title:'Cloud Foundations',issuer:'AWS Academy',year:'',description:'Cloud computing fundamentals: compute, storage, networking and security. The supplied certificate records 20 course hours.',skills:['AWS','Cloud computing','Networking'],url:'#',accent:'khaki',monogram:'AWS',asset:'./assets/images/certificates/aws-cloud-foundations.jpg',preview:'./assets/images/certificates/aws-cloud-foundations.webp'},
    {type:'certificate',title:'Switching, Routing & Wireless',issuer:'Cisco Networking Academy',year:'',description:'VLANs, inter-VLAN routing, network redundancy, wireless networks and switch security through CCNA coursework.',skills:['Networking','Routing','Security'],url:'#',accent:'khaki',monogram:'CCNA',asset:'./assets/images/certificates/cisco-ccna.pdf',preview:'./assets/images/certificates/cisco-ccna.webp'},
    {type:'certificate',title:'Getting Started with AI',issuer:'IBM SkillsBuild',year:'',description:'Building an understanding of artificial intelligence, its applications and the role of learning systems.',skills:['Artificial intelligence','Python','Data'],url:'#',accent:'khaki',monogram:'IBM',asset:'./assets/images/certificates/ibm-artificial-intelligence.pdf',preview:'./assets/images/certificates/ibm-artificial-intelligence.webp'},
    {type:'award',title:'Cosmic Defcon · 3rd place',issuer:'NIT Puducherry',year:'',description:'Recognition in idea pitching and innovation. Communicating a clear problem, a considered approach and the value of an idea.',skills:['Ideation','Presentation','Problem solving'],url:'#',accent:'bronze',monogram:'03'},
    {type:'award',title:'Project Expo · 3rd prize',issuer:'Loyola College',year:'',description:'Recognition for an innovative AI project. Bringing a working concept into a presentation people can understand and engage with.',skills:['Prototyping','AI','Communication'],url:'#',accent:'bronze',monogram:'03'}
  ];
  window.portfolioCredentials=credentials;
  const deck=$('.certificate-deck'),shelf=$('.award-shelf'),viewport=$('.credential-viewport'),track=$('.credential-track'),credentialSection=$('#credentials');let topCard=0,drag=null,filter='all';
  const medal=`<svg class="award-medal" viewBox="0 0 84 110" aria-hidden="true"><path fill="currentColor" opacity=".55" d="M19 4h20l9 46-22 6zM45 4h20L57 56l-22-6z"/><circle cx="42" cy="67" r="32" fill="currentColor"/><circle cx="42" cy="67" r="26" fill="none" stroke="var(--ink)" opacity=".5"/><path d="M35 52h13l-8 12c18-3 18 20 1 20-5 0-10-2-12-5" fill="none" stroke="var(--ink)" stroke-width="4" stroke-linecap="round"/></svg>`;
  credentials.forEach((item,i)=>{const card=document.createElement('button');card.type='button';card.dataset.credential=String(i);card.dataset.cursor=item.type==='award'?'View':'Drag';card.setAttribute('aria-haspopup','dialog');card.setAttribute('aria-label',item.title+' — '+item.issuer);if(item.type==='certificate'){card.className='certificate-card';card.innerHTML=`<span class="certificate-face"><span class="credential-circuit" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><b>+</b></span><span class="certificate-topline"><span class="certificate-monogram">${item.monogram}</span><span class="certificate-record">LEARNING RECORD / 0${i+1}</span></span><span><h3>${item.title}</h3><p>${item.issuer}</p><span class="credential-topics">${item.skills.slice(0,2).map(skill=>`<span>${skill}</span>`).join('')}</span></span><span class="certificate-card-bottom"><span>EXPLORE CREDENTIAL</span><b aria-hidden="true">↗</b></span></span>`;deck.append(card);}else{card.className='award-card';card.dataset.cursor='View';card.innerHTML=medal+`<h3>${item.title}</h3><p>${item.issuer}</p><span class="podium">03</span>`;shelf.append(card);}card.addEventListener('pointerenter',()=>synth(item.type==='award'?'ding':'tick'));});
  const cards=$$('.certificate-card',deck);
  function deckLayout(fan=false){cards.forEach((card,i)=>{const offset=(i-topCard+cards.length)%cards.length;card.style.zIndex=String(cards.length-offset);card.style.transform=fan?`translate(${(offset-1.5)*65}px,${Math.abs(offset-1.5)*6}px) rotate(${(offset-1.5)*9}deg)`:`translate(${offset*9}px,${offset*5}px) rotate(${offset*3-3}deg)`;card.tabIndex=0;});$('.stack-count').textContent=`${topCard+1} / ${cards.length}`;}
  function cycle(direction){topCard=(topCard+direction+cards.length)%cards.length;if(mobile.matches){cards[topCard].scrollIntoView({behavior:reduced.matches?'instant':'smooth',block:'nearest',inline:'center'});}else deckLayout();synth('whoosh');}
  $('.credential-prev').addEventListener('click',()=>cycle(-1));$('.credential-next').addEventListener('click',()=>cycle(1));deckLayout();
  deck.addEventListener('pointerenter',()=>{if(!mobile.matches&&!reduced.matches)deckLayout(true);});deck.addEventListener('pointerleave',()=>deckLayout());
  deck.addEventListener('pointerdown',e=>{if(mobile.matches||e.button>0)return;drag={x:e.clientX,id:e.pointerId,moved:false};});
  deck.addEventListener('pointermove',e=>{if(!drag)return;if(Math.abs(e.clientX-drag.x)>12)drag.moved=true;});let suppressClick=false;
  function finishDrag(e){if(!drag)return;if(drag.moved){suppressClick=true;cycle(e.clientX>drag.x?-1:1);setTimeout(()=>suppressClick=false,120);}drag=null;}
  window.addEventListener('pointerup',finishDrag);window.addEventListener('pointercancel',()=>drag=null);
  deck.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();cycle(e.key==='ArrowRight'?1:-1);cards[topCard].focus();}});
  if(fine.matches)cards.forEach(card=>{const face=$('.certificate-face',card);card.addEventListener('pointermove',e=>{if(mobile.matches||reduced.matches||drag)return;const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;face.style.transform=`rotateX(${(y-.5)*-16}deg) rotateY(${(x-.5)*16}deg)`;face.style.setProperty('--glare-x',x*100+'%');face.style.setProperty('--glare-y',y*100+'%');});card.addEventListener('pointerleave',()=>face.style.transform='');});
  const filterButtons=$$('[data-filter]'),indicator=$('.filter-indicator');
  function movePill(button,pill,parent){const a=button.getBoundingClientRect(),b=parent.getBoundingClientRect();pill.style.width=a.width+'px';pill.style.height=a.height+'px';pill.style.transform=`translate(${a.left-b.left}px,${a.top-b.top}px)`;}
  function setFilter(value){if(filter===value)return;const panels=$$('[data-type]',track),before=new Map(panels.filter(p=>!p.hidden).map(p=>[p,p.getBoundingClientRect()]));filter=value;filterButtons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===value)));movePill($('[data-filter="'+value+'"]'),indicator,$('.credential-filter'));panels.forEach(p=>{const hide=value!=='all'&&p.dataset.type!==value;if(hide&&!p.hidden&&!reduced.matches)transient(p,[{opacity:1,transform:'scale(1)'},{opacity:0,transform:'scale(.94)'}],{duration:150}).then(()=>{if(filter!=='all'&&p.dataset.type!==filter)p.hidden=true;layoutFilter(before);});else p.hidden=hide;});layoutFilter(before);synth('tick');}
  function layoutFilter(before){credentialSection.classList.toggle('is-filtered',filter!=='all');track.style.transform='translateX(0)';viewport.scrollLeft=0;for(const panel of $$('[data-type]',track).filter(p=>!p.hidden)){const prev=before.get(panel),next=panel.getBoundingClientRect();transient(panel,[{transform:`translate(${prev?prev.left-next.left:0}px,${prev?prev.top-next.top:12}px) scale(${prev?prev.width/next.width:.96})`,opacity:prev?1:0},{transform:'none',opacity:1}],{duration:450,easing:ease.out});}}
  filterButtons.forEach(b=>b.addEventListener('click',()=>setFilter(b.dataset.filter)));
  function updateCredentialScroll(){if(mobile.matches||reduced.matches||filter!=='all')return;const r=credentialSection.getBoundingClientRect(),range=Math.max(1,credentialSection.offsetHeight-innerHeight),p=clamp(-r.top/range),distance=Math.max(0,track.scrollWidth-viewport.clientWidth);track.style.transform=`translateX(${-p*distance}px)`;$('.credential-progress i').style.transform=`scaleX(${p})`;}
  function credentialMeasure(){movePill($('[data-filter][aria-pressed=true]'),indicator,$('.credential-filter'));updateCredentialScroll();deckLayout();}
  window.addEventListener('resize',credentialMeasure,{passive:true});credentialMeasure();
  new IntersectionObserver((entries,observer)=>{if(!entries.some(e=>e.isIntersecting))return;$$('[data-count]').forEach(el=>{const n=el.dataset.count==='all'?credentials.length:credentials.filter(i=>i.type===el.dataset.count).length;if(reduced.matches){el.textContent=n;return;}const start=performance.now();function count(now){const p=clamp((now-start)/700);el.textContent=String(Math.round(p*n));if(p<1)requestAnimationFrame(count);}requestAnimationFrame(count);});$$('.podium').forEach((p,i)=>transient(p,[{transform:'scaleY(0)',transformOrigin:'bottom'},{transform:'scaleY(1)',transformOrigin:'bottom'}],{duration:600,delay:i*90}));observer.disconnect();},{threshold:.15}).observe(credentialSection);
  const detail=$('#credential-dialog');let detailTrigger=null;
  function burst(x,y){if(reduced.matches)return;for(let i=0;i<10;i++){const p=document.createElement('i');p.className='burst-particle';p.style.left=x+'px';p.style.top=y+'px';document.body.append(p);const angle=i*Math.PI/5;animate(p,[{opacity:1,transform:'translate(0,0) rotate(0)'},{opacity:0,transform:`translate(${Math.cos(angle)*70}px,${Math.sin(angle)*70+30}px) rotate(130deg)`}],{duration:650}).then(()=>p.remove());}}
  function openCredential(card){if(suppressClick||drag?.moved)return;const item=credentials[Number(card.dataset.credential)],from=card.getBoundingClientRect();detailTrigger=card;$('#credential-kind').textContent=item.type.toUpperCase();$('#credential-title').textContent=item.title;$('#credential-issuer').textContent=item.issuer;$('#credential-description').textContent=item.description;$('#credential-year').textContent=item.year||'Year — to be added';const skillIcons={Python:'python/python-original.svg',AWS:'amazonwebservices/amazonwebservices-original-wordmark.svg'};$('#credential-skills').replaceChildren(...item.skills.map(skill=>{const span=document.createElement('span');if(skillIcons[skill]){const img=document.createElement('img');img.alt='';img.src='https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/'+skillIcons[skill];span.append(img);}span.append(document.createTextNode(skill));return span;}));const link=$('#credential-view'),valid=item.url&&item.url!=='#';link.setAttribute('aria-disabled',String(!valid));link.removeAttribute('href');if(valid)link.href=item.url;link.tabIndex=valid?0:-1;$('#credential-placeholder').hidden=valid;const asset=$('#credential-asset'),preview=$('#credential-preview');asset.hidden=!item.asset;asset.removeAttribute('href');if(item.asset)asset.href=item.asset;preview.hidden=!item.preview;preview.removeAttribute('src');if(item.preview)preview.src=item.preview;detail.showModal();document.body.style.overflow='hidden';const to=detail.getBoundingClientRect();transient(detail,[{transform:`translate(${from.left+from.width/2-to.left-to.width/2}px,${from.top+from.height/2-to.top-to.height/2}px) scale(${Math.min(from.width/to.width,.9)})`,opacity:.5},{transform:'none',opacity:1}],{duration:450});$('.dialog-close',detail).focus();synth('chime');if(item.type==='award')burst(from.left+from.width/2,from.top+80);}
  $$('[data-credential]').forEach(card=>card.addEventListener('click',()=>openCredential(card)));
  $('.dialog-close',detail).addEventListener('click',()=>detail.close());detail.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();detail.close();}else focusTrap(e,detail);});detail.addEventListener('click',e=>{if(e.target!==detail)return;const r=detail.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)detail.close();});detail.addEventListener('close',()=>{document.body.style.overflow='';detailTrigger?.focus({preventScroll:true});});
  const peek=document.querySelector('.form-peek');new IntersectionObserver(entries=>{for(const entry of entries)peek.classList.toggle('is-visible',entry.isIntersecting);},{threshold:.2}).observe(document.querySelector('.connect-form-wrap'));document.querySelector('#connect-name').addEventListener('focus',()=>peek.classList.add('is-visible'));
  /* Connect: letters, live clock, clipboard, validated draft form. */
  const heading=$('.connect-title');heading.innerHTML=["Let's","Connect."].map(word=>'<span class="connect-word">'+[...word].map(c=>`<span class="letter${c==='.'?' title-dot':''}" aria-hidden="true">${c}</span>`).join('')+'</span>').join('<br>');
  const letters=$$('.letter',heading);new IntersectionObserver((entries,o)=>{if(entries.some(e=>e.isIntersecting)){letters.forEach((el,i)=>transient(el,[{transform:'translateY(50%)',opacity:0},{transform:'none',opacity:1}],{duration:600,delay:i*65}));o.disconnect();}},{threshold:.3}).observe(heading);
  if(fine.matches)heading.addEventListener('pointermove',e=>{if(reduced.matches||mobile.matches)return;letters.forEach(letter=>{const r=letter.getBoundingClientRect(),dx=r.left+r.width/2-e.clientX,dy=r.top+r.height/2-e.clientY,d=Math.hypot(dx,dy),k=clamp(1-d/110);letter.style.transform=`translate(${dx*.15*k}px,${dy*.15*k}px)`;});});heading.addEventListener('pointerleave',()=>letters.forEach(l=>l.style.transform=''));
  const clock=$('#ist-clock');function clockTick(){clock.textContent=new Intl.DateTimeFormat('en-IN',{timeZone:'Asia/Kolkata',hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}).format(new Date())+' IST';}clockTick();setInterval(()=>{if(!document.hidden)clockTick();},1000);
  const toast=$('.copy-toast');let toastTimer;function notifyCopy(text){toast.textContent=text;toast.classList.add('is-visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('is-visible'),2200);}
  $('.email-copy').addEventListener('click',async()=>{let copied=false;try{await navigator.clipboard.writeText('shamanand1358@gmail.com');copied=true;}catch(_){const t=document.createElement('textarea');t.value='shamanand1358@gmail.com';t.style.position='fixed';t.style.opacity='0';document.body.append(t);t.select();try{copied=document.execCommand('copy');}catch(_){}t.remove();}const icon=$('.email-copy i');if(copied){icon.textContent='✓';transient(icon,[{transform:'scale(.3)'},{transform:'scale(1)'}],{duration:300});synth('tick');setTimeout(()=>icon.textContent='↗',2000);}notifyCopy(copied?'Copied':'Email: shamanand1358@gmail.com');});
  const form=$('#craft-contact-form'),fields=$$('input,textarea',form),formWrap=$('.connect-form-wrap'),name=$('#connect-name');let intent='Portfolio enquiry',sending=false;
  const messages={name:'Please enter at least 2 characters.',email:'Please enter a valid email address.',message:'Please write at least 10 characters.'};
  function validate(field,show=true){const value=field.value.trim(),valid=field.name==='email'?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)&&field.validity.valid:value.length>=(field.name==='name'?2:10);if(show){field.setAttribute('aria-invalid',String(!valid));$('#'+field.name+'-error').textContent=valid?'':messages[field.name];$('.field-check',field.parentElement).textContent=valid?'✓':'';}return valid;}
  fields.forEach(field=>{field.addEventListener('blur',()=>validate(field));field.addEventListener('input',()=>{if(field.hasAttribute('aria-invalid'))validate(field);if(field.name==='message'){const n=field.value.length;$('#message-count').textContent=`${n} / 1000`;$('.count-progress').style.strokeDashoffset=String(81.68*(1-n/1000));}});});
  // Static project: no server route exists. Set data-endpoint only when a real /api/contact route is deployed.
  form.addEventListener('submit',async e=>{e.preventDefault();if(sending)return;const invalid=fields.filter(f=>!validate(f));if(invalid.length){invalid[0].focus();invalid.forEach(f=>transient(f,[{transform:'translateX(0)'},{transform:'translateX(-5px)'},{transform:'translateX(5px)'},{transform:'none'}],{duration:300}));return;}sending=true;const button=$('.craft-submit'),label=$('.submit-label'),icon=$('.submit-icon'),status=$('#connect-status'),fallback=$('#draft-fallback');button.disabled=true;button.classList.add('is-loading');label.textContent='Preparing…';status.textContent='';fallback.hidden=true;
    const values=Object.fromEntries(new FormData(form)),mailto='mailto:shamanand1358@gmail.com?subject='+encodeURIComponent(intent+' — '+values.name.trim())+'&body='+encodeURIComponent('Name: '+values.name.trim()+'\nEmail: '+values.email.trim()+'\n\n'+values.message.trim());
    let delivered=false;
    try{if(form.dataset.endpoint==='/api/contact'){const response=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...values,intent})});if(!response.ok)throw new Error('Unable to send. Please try again.');delivered=true;}else{fallback.href=mailto;fallback.hidden=false;window.location.href=mailto;}
      await delay(reduced.matches?0:450);button.classList.remove('is-loading');icon.textContent='✓';label.textContent=delivered?'Message sent':'Draft ready';status.textContent=delivered?'Thank you — your message has been sent.':'Your email app can send this draft. If it did not open, use the link below.';synth('chime');if(!reduced.matches){await delay(220);icon.textContent='➤';transient(icon,[{transform:'translate(0,0) rotate(-30deg)',opacity:1},{transform:'translate(100px,-100px) rotate(-30deg)',opacity:0}],{duration:650});const r=button.getBoundingClientRect();burst(r.right-24,r.top);}
      if(delivered){form.reset();fields.forEach(f=>{f.removeAttribute('aria-invalid');$('.field-check',f.parentElement).textContent='';});$('#message-count').textContent='0 / 1000';$('.count-progress').style.strokeDashoffset='81.68';}
      await delay(reduced.matches?500:2000);
    }catch(error){status.textContent=error.message+' You can also open an email draft.';fallback.href=mailto;fallback.hidden=false;}
    finally{button.classList.remove('is-loading');button.disabled=false;label.textContent="Let's talk";icon.textContent='↗';sending=false;}
  });
  /* Hover sound, magnetic controls and a dot + interpolated cursor ring. */
  document.addEventListener('pointerover',e=>{const target=e.target.closest('a,button');if(target&&!target.contains(e.relatedTarget))synth('tick');});
  if(fine.matches){$$('[data-magnetic]').forEach(el=>{el.addEventListener('pointermove',e=>{if(reduced.matches||mobile.matches)return;const r=el.getBoundingClientRect();el.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.04}px,${(e.clientY-r.top-r.height/2)*.1}px)`;});el.addEventListener('pointerleave',()=>el.style.transform='');});
    const contact=$('#contact');let meshFrame=0,mx=0,my=0;contact.addEventListener('pointermove',e=>{if(mobile.matches||reduced.matches)return;const r=contact.getBoundingClientRect();mx=(e.clientX-r.left)/r.width;my=(e.clientY-r.top)/r.height;if(!meshFrame)meshFrame=requestAnimationFrame(()=>{meshFrame=0;$('.connect-mesh').style.setProperty('--mesh-x',mx*100+'%');$('.connect-mesh').style.setProperty('--mesh-y',my*100+'%');$$('.connect-shapes i').forEach((el,i)=>el.style.transform=`translate(${(mx-.5)*(i+1)*12}px,${(my-.5)*(i+1)*12}px)`);});});
  }
  $$('img[loading=lazy]').forEach(img=>{if(img.complete)return;img.classList.add('lazy-pending');img.addEventListener('load',()=>img.classList.remove('lazy-pending'),{once:true});img.addEventListener('error',()=>img.classList.remove('lazy-pending'),{once:true});});
  const initial=location.hash.slice(1);if(TRANSITIONS[initial]){active(initial);requestAnimationFrame(()=>instantTop(document.getElementById(initial)));}else active('hero');scrollRender();
});

document.addEventListener('DOMContentLoaded',()=>{
 const hero=document.getElementById('hero'),titles=[...document.querySelectorAll('.warp-target')],fine=matchMedia('(hover:hover) and (pointer:fine)'),reduced=matchMedia('(prefers-reduced-motion:reduce)');let x=0,y=0,tx=0,ty=0,raf=0;
 function frame(){raf=0;x+=(tx-x)*.12;y+=(ty-y)*.12;titles.forEach((el,i)=>{const depth=i?-.7:1;el.style.transform='perspective(1100px) translate3d('+(x*14*depth)+'px,'+(y*8*depth)+'px,0) rotateY('+(x*3*depth)+'deg) rotateX('+(-y*2)+'deg)';});if(Math.abs(x-tx)+Math.abs(y-ty)>.002)raf=requestAnimationFrame(frame);else titles.forEach(el=>el.style.willChange='auto');}
 function move(e){if(!fine.matches||reduced.matches)return;const r=hero.getBoundingClientRect();tx=(e.clientX-r.left)/r.width-.5;ty=(e.clientY-r.top)/r.height-.5;titles.forEach(el=>el.style.willChange='transform');if(!raf)raf=requestAnimationFrame(frame);}
 hero.addEventListener('pointermove',move,{passive:true});hero.addEventListener('pointerleave',()=>{tx=ty=0;if(!raf&&!reduced.matches)raf=requestAnimationFrame(frame);});reduced.addEventListener('change',()=>{if(reduced.matches){cancelAnimationFrame(raf);raf=0;titles.forEach(el=>{el.style.transform='';el.style.willChange='auto';});}});
});

// Recorded reference: shrinking dot trail; an inverted oval over large text.
document.addEventListener('DOMContentLoaded',()=>{
 const host=document.getElementById('custom-cursor');if(!host)return;
 const fine=matchMedia('(hover:hover) and (pointer:fine)'),reduce=matchMedia('(prefers-reduced-motion:reduce)');
 host.replaceChildren();host.className='custom-cursor reference-cursor';
 const lens=document.createElement('span');lens.className='reference-lens';host.append(lens);
 const trail=Array.from({length:8},(_,i)=>{const el=document.createElement('i');el.className='reference-dot';host.append(el);return {el,x:0,y:0,size:Math.max(4,23-i*2.6)};});
 let x=0,y=0,visible=false,raf=0,lastMove=0,lx=0,ly=0;
 function hide(){visible=false;host.style.opacity='0';cancelAnimationFrame(raf);raf=0;}
 function frame(now){raf=0;if(!visible||!fine.matches||reduce.matches){hide();return;}
 lx+=(x-lx)*.25;ly+=(y-ly)*.25;lens.style.transform=`translate3d(${lx}px,${ly}px,0) translate(-50%,-50%)`;
 let px=x,py=y;trail.forEach((p,i)=>{p.x+=(px-p.x)*.34;p.y+=(py-p.y)*.34;p.el.style.transform=`translate3d(${p.x}px,${p.y}px,0) translate(-50%,-50%) scale(${p.size/24})`;p.el.style.opacity=String(Math.max(0,1-i*.1)*Math.max(0,1-(now-lastMove-80)/320));px=p.x;py=p.y;});
 if(now-lastMove<500||Math.abs(x-lx)+Math.abs(y-ly)>.1)raf=requestAnimationFrame(frame);
 }
 document.addEventListener('pointermove',e=>{if(!fine.matches||reduce.matches||e.pointerType==='touch'){hide();return;}x=e.clientX;y=e.clientY;if(!visible){lx=x;ly=y;trail.forEach(p=>{p.x=x;p.y=y;});}visible=true;lastMove=performance.now();host.style.opacity='1';host.classList.toggle('over-title',!!e.target.closest('h1,h2,h3,.warp-target'));host.classList.toggle('over-control',!!e.target.closest('a,button,[data-cursor]'));if(!raf)raf=requestAnimationFrame(frame);},{passive:true});
 document.documentElement.addEventListener('pointerleave',hide);window.addEventListener('blur',hide);reduce.addEventListener('change',hide);fine.addEventListener('change',hide);
});

// Low-density atom field: only visible sections animate, never intercepts input.
document.addEventListener('DOMContentLoaded',()=>{
 const reduced=matchMedia('(prefers-reduced-motion:reduce)'),mobile=matchMedia('(max-width:767px)');
 document.querySelectorAll('main>section').forEach((section,index)=>{
  section.classList.add('particle-section');const canvas=document.createElement('canvas');canvas.className='ambient-atoms';canvas.setAttribute('aria-hidden','true');section.prepend(canvas);const ctx=canvas.getContext('2d');if(!ctx)return;
  let w=1,h=1,visible=false,raf=0,mx=-1000,my=-1000,last=0,color='#c4bb99';const atoms=Array.from({length:index===0?12:7},()=>({x:Math.random(),y:Math.random(),r:12+Math.random()*15,phase:Math.random()*6.28}));
  function size(){w=section.clientWidth;h=section.clientHeight;const d=Math.min(devicePixelRatio,1.5);canvas.width=w*d;canvas.height=h*d;ctx.setTransform(d,0,0,d,0,0);color=index===0?'#514b3c':'#c4bb99';if(reduced.matches)draw(0);}
  function draw(t){ctx.clearRect(0,0,w,h);ctx.strokeStyle=color;ctx.fillStyle=color;atoms.forEach(a=>{let x=a.x*w,y=a.y*h;const dx=x-mx,dy=y-my,dist=Math.hypot(dx,dy);if(dist<140&&dist>0&&!mobile.matches&&!reduced.matches){x+=dx/dist*(140-dist)*.1;y+=dy/dist*(140-dist)*.1;}ctx.globalAlpha=index===0?.24:.16;for(let k=0;k<3;k++){ctx.beginPath();ctx.ellipse(x,y,a.r,a.r*.35,k*Math.PI/3,0,Math.PI*2);ctx.stroke();}ctx.globalAlpha=.5;ctx.beginPath();ctx.arc(x,y,2,0,Math.PI*2);ctx.fill();const angle=t*.00025+a.phase;ctx.beginPath();ctx.arc(x+Math.cos(angle)*a.r,y+Math.sin(angle)*a.r*.35,2,0,Math.PI*2);ctx.fill();});ctx.globalAlpha=1;}
  function tick(t){raf=0;if(!visible||document.hidden||reduced.matches)return;if(t-last>40){draw(t);last=t;}raf=requestAnimationFrame(tick);}
  function sync(){cancelAnimationFrame(raf);raf=0;if(reduced.matches)draw(0);else if(visible&&!document.hidden)raf=requestAnimationFrame(tick);}
  new ResizeObserver(size).observe(section);new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();}).observe(section);
  section.addEventListener('pointermove',e=>{if(mobile.matches||reduced.matches)return;const r=section.getBoundingClientRect();mx=e.clientX-r.left;my=e.clientY-r.top;},{passive:true});section.addEventListener('pointerleave',()=>{mx=my=-1000;});document.addEventListener('visibilitychange',sync);reduced.addEventListener('change',sync);size();
 });
});

document.addEventListener('DOMContentLoaded',()=>{
 const root=document.querySelector('.skills-ribbon');if(!root)return;
 const rows=[['Python','TensorFlow','PyTorch','Scikit-learn','OpenCV','SQL'],['NLP','Deep Learning','Computer Vision','Generative AI','AWS','Git','REST APIs']];
 const notes={'Deep Learning':'Deep Learning — learning useful patterns with neural networks.','Python':'Python — the foundation of my machine learning experiments.','TensorFlow':'TensorFlow — building and training neural networks.','PyTorch':'PyTorch — experimenting with deep learning models.','Scikit-learn':'Scikit-learn — practical modelling and evaluation.','OpenCV':'OpenCV — working with images and video.','SQL':'SQL — querying and organising structured data.','NLP':'NLP — extracting meaning from text.','Computer Vision':'Computer Vision — turning visual input into useful predictions.','Generative AI':'Generative AI — exploring language models and intelligent interfaces.','AWS':'AWS — cloud foundations and deployment concepts.','Git':'Git — tracking changes and improving projects.','REST APIs':'REST APIs — connecting models to applications.'};
 root.querySelectorAll('.skill-belt').forEach((belt,row)=>{for(let copy=0;copy<3;copy++){const group=document.createElement('div');group.className='skill-group';if(copy)group.setAttribute('aria-hidden','true');rows[row].forEach((skill,i)=>{const b=document.createElement('button');b.type='button';if(copy)b.tabIndex=-1;const mark=document.createElement('span');mark.className='skill-mark';mark.textContent=['{ }','◇','⌘','∿','◉','▤'][i%6];mark.setAttribute('aria-hidden','true');b.append(mark,document.createTextNode(skill));b.addEventListener('click',()=>{root.querySelector('.skill-insight').textContent=notes[skill];root.dispatchEvent(new CustomEvent('skillselect',{detail:skill}));});group.append(b);});belt.append(group);}});
});

const portfolioDigitModel={"weights":[[[0.0,0.0,-0.0,0.0,0.0,0.0,-0.0,-0.0,-0.0,-0.0,-0.0,0.0,0.0,-0.0,-0.0,-0.0,-0.0,-0.0,0.0,0.0,0.0,0.0,0.0,-0.0,-0.0,0.0,0.0,0.0,0.0,-0.0,-0.0,-0.0,-0.0,0.0,0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,0.0,0.0,-0.0,0.0,-0.0],[-0.322983,0.383076,0.247367,-0.161993,-0.214597,-0.005606,-0.647708,0.663993,0.327345,-0.579568,-0.226141,-0.318555,-0.455391,-0.82058,0.0,-0.112274,0.07541,-0.0,0.274032,-0.014901,0.284591,0.170141,-0.0,-0.874479,-0.448724,0.760038,0.588992,0.48589,0.821342,-0.042872,-0.03871,-0.736193,0.274384,-0.327084,0.822787,-0.732654,0.199544,-0.024089,0.187942,0.393493,0.042429,-0.015951,-0.48164,0.550459,0.045818,-0.364721,0.434129,0.280184],[0.155991,0.173222,-0.210507,-0.390394,-0.147061,0.108756,-0.04527,-0.057334,0.34463,-0.293142,-0.068821,0.076365,-0.352083,-0.425731,0.0,-0.726388,0.258876,-0.0,0.295097,0.490122,0.481361,-0.191644,0.0,-0.122807,0.163501,0.236076,0.224492,0.116825,0.074487,-0.00901,0.6213,-0.036707,-0.116888,-0.115146,0.37306,-0.623799,-0.221251,-0.186808,0.275917,0.060292,-0.239194,0.078322,-0.414619,0.412135,0.331907,-0.115858,-0.319616,0.033196],[-0.19251,-0.187947,0.051753,-0.000419,-0.211601,-0.026078,0.28705,-0.034688,-0.048601,0.152829,0.193095,-0.042822,0.29844,0.423595,0.0,-0.559488,0.173791,0.0,0.238727,0.225357,-0.197654,0.11095,0.0,0.154825,-0.089899,-0.066599,0.403227,-0.317598,-0.250437,-0.322372,0.142109,-0.207515,-0.030188,-0.118157,0.352569,-0.348621,0.26361,0.120448,0.092009,0.140696,-0.240242,0.057995,0.156179,0.293328,0.201023,-0.279336,0.154434,0.494637],[0.33428,0.089181,-0.513816,-0.014484,0.422933,0.328787,0.134451,-0.087098,0.47623,-0.076857,-0.183825,0.152056,0.387952,-0.457204,-0.0,0.32576,0.21904,0.0,0.278356,0.119392,0.143127,-0.172567,-0.0,-0.000274,0.076345,0.365151,0.441761,-0.288592,0.149109,-0.080526,-0.348694,-0.373178,-0.038118,-0.437276,0.905114,-0.358159,0.362743,0.176494,-0.093414,0.314427,-0.043427,-0.011916,-0.086002,0.543188,0.104231,-0.134942,0.263729,0.287857],[0.099585,0.648612,0.715442,-0.363852,-0.252642,0.161631,-0.111959,0.265815,0.497326,0.432457,-0.114422,0.211784,0.10747,-0.517941,-0.0,-0.255392,0.308614,0.0,0.538967,0.249147,-0.002255,0.174871,0.0,-0.273186,-0.320856,0.470878,0.372004,-0.121348,-0.088683,-0.359469,0.147249,0.563937,-0.279964,-0.007529,0.483256,-0.110294,0.283246,-0.31534,-0.063612,0.390897,-0.150573,-0.061552,-0.027301,-0.019258,0.394525,-0.13281,0.093064,0.178006],[-0.324099,0.243473,0.150202,-0.569593,-0.38534,-0.227745,-0.173388,0.503906,0.49681,-0.43458,0.066224,-0.001303,-0.57971,-0.404403,-0.0,0.48834,-0.133285,0.0,0.12278,0.136938,0.729997,-0.126464,-0.0,-0.963987,-0.757587,0.678811,0.544884,0.478298,0.09505,-0.105007,0.178117,-0.438548,-0.565359,-0.207317,0.43265,-0.343253,0.126849,-0.127367,-0.015689,0.472902,-0.155102,-0.0,-0.256282,0.489107,0.230792,-0.919748,-0.274788,-0.036432],[-5e-05,-0.10394,-0.947928,-0.313517,-0.126319,0.153634,0.325213,0.075317,-0.184135,0.111045,0.046423,-0.018794,0.486473,0.107474,0.0,0.551881,0.367392,0.0,-0.91427,-0.055681,-0.124409,0.027721,0.0,0.022493,-0.264839,-0.296896,0.211108,-0.035772,0.111605,-0.11154,-0.486106,0.265963,-0.098052,0.181075,-0.105041,-0.445398,-0.166792,0.410941,-0.287846,-0.567498,0.340047,-0.0,0.664816,-0.054636,0.232664,0.011478,0.189591,0.569817],[0.390957,0.367005,0.310748,0.258114,0.555453,0.644963,0.560757,-0.166826,-0.234301,0.22802,-0.015639,0.538499,0.306409,-0.019395,0.0,0.079807,-0.141032,0.0,-0.288181,0.490654,-0.385085,0.121715,-0.0,-0.286836,0.058557,-0.611511,-0.24262,0.002541,0.616291,0.240387,0.339962,0.316929,0.273969,0.25491,0.122009,-0.150197,-0.351229,-0.080508,0.142749,-0.184082,0.077103,0.0,-0.278596,-0.203212,-8.5e-05,0.218669,-0.677797,-0.296405],[-0.053762,-0.346124,-1.086056,0.170314,0.035326,-0.067197,0.114447,-0.056356,-0.41396,-0.002706,-0.079525,-0.268676,0.469863,-0.051473,0.0,-0.190733,0.312857,-0.0,0.357765,0.213047,0.637753,0.1405,-0.0,0.719168,-0.288895,-0.184161,-0.005319,0.085488,0.217028,-0.154673,0.374058,-0.221525,-0.14424,-0.123423,0.630743,-0.42904,0.108363,0.423033,-0.325874,0.413956,-0.513809,0.126949,-0.110149,0.569391,-0.354,0.141147,0.053032,0.262134],[0.366932,0.115936,-0.281649,0.213594,0.325189,0.246589,-0.14947,-0.344118,0.452878,0.10622,-0.050474,-0.142515,-0.048477,-0.116991,0.0,-0.417722,0.237667,-0.0,0.428091,0.45553,0.386595,-0.025848,-0.0,0.339088,0.047609,-0.119524,0.501852,-0.082752,0.404692,-0.02843,0.304758,-0.361647,0.162079,-0.044904,0.23417,-0.578374,0.001049,0.047877,0.163698,0.005703,-0.031394,-0.063695,-0.094123,0.42461,0.291049,-0.202108,-0.248242,0.091627],[-0.081034,0.283555,0.257649,0.263029,0.17976,0.13534,0.112259,0.177848,0.498046,-0.238373,-0.055726,-0.072187,-0.059262,0.196392,0.0,0.213645,0.085975,0.0,0.073582,0.290862,0.187508,0.08443,-0.0,-0.030677,0.182644,0.22863,0.584586,-0.018729,-0.158291,-0.100523,0.341219,-0.142871,0.083942,-0.30079,-0.00496,-0.164212,0.000624,0.022734,-0.191761,0.172431,0.227199,-0.076408,-0.078301,0.457304,0.144652,-0.193118,0.277768,0.573334],[-0.587705,0.503408,-0.110355,-0.292988,-0.113395,0.216457,-0.177419,0.390766,0.073898,-0.078752,-0.222012,0.08085,0.00496,-0.442203,0.0,0.035545,0.283405,-0.0,0.554466,0.077606,-0.0717,-0.193017,0.0,-0.186746,-0.051361,-0.150744,0.117842,0.101186,-0.347575,-0.016936,-0.053185,0.070252,-0.245302,0.040585,0.431516,-0.117377,0.302371,0.041395,-0.154241,0.477273,-0.143666,-0.094198,0.406555,0.558599,-0.100503,-0.166744,0.360567,0.409936],[0.010667,0.164145,-0.084495,0.007011,0.062814,0.217618,0.232382,0.169619,0.066751,0.269642,-0.204781,0.273195,0.404495,-0.296482,0.0,-0.583463,0.047744,-0.0,-0.276789,0.081201,-0.496981,0.131921,0.0,0.100412,-0.166033,-0.318947,-0.101941,-0.160061,-0.160431,0.069874,-0.086913,0.17264,-0.276139,0.045351,0.440989,-0.26533,0.046267,0.020841,-0.125524,-0.348452,-0.166562,-0.01994,0.318507,0.033591,0.047015,0.370949,0.036508,0.430695],[0.00352,-0.057171,-0.163327,0.212802,0.243558,0.366302,0.329183,-0.059998,0.621552,0.129223,-0.163116,0.10609,0.422179,-0.248505,-0.0,0.170177,0.396333,-0.0,0.070619,0.046735,0.12757,-0.163339,-0.0,-0.123318,-0.619476,0.061877,0.178539,-0.435644,0.10256,-0.427352,-0.458376,-0.218138,-0.346944,-0.167334,0.487233,-0.27914,-0.094567,-0.108029,-0.028169,0.123741,0.324855,0.0,-0.488105,0.448159,0.474097,0.264464,-0.27453,0.368428],[0.106347,-0.316296,-0.603733,-0.052306,-0.202197,0.258223,0.302995,0.281558,-0.158917,-0.254522,-0.032039,0.371059,0.106903,-0.014166,0.0,0.558418,0.082903,0.0,-0.714048,-0.157777,0.450828,-0.050798,0.0,-0.214845,-0.23603,-0.083566,0.221256,0.23993,0.270596,0.159287,-0.222492,0.119441,0.283266,0.240834,-0.087157,0.183656,-0.090527,0.18076,0.205447,-0.079911,0.02803,0.0,0.273891,-0.02142,0.156097,-0.085253,-0.083676,0.340879],[-0.165297,0.184863,-0.147284,0.11544,-0.034165,-0.030669,0.003516,-0.050075,-0.161345,0.036075,0.0,-0.028417,0.085089,0.009849,-0.0,-0.000151,-0.03375,0.0,0.107626,-0.031968,0.026848,0.144901,0.0,0.126599,-0.021436,0.020907,-0.282947,0.257172,0.076084,-0.032861,0.09035,0.134348,0.049064,-0.092642,0.136118,-0.001534,0.00512,0.135584,0.206523,0.261411,-0.03746,-0.0,0.080558,0.221299,-0.248539,0.123897,0.185802,-0.026755],[0.315314,0.14013,-0.152792,-0.040879,0.335496,-0.405367,-0.050293,-0.102418,-0.202054,0.220726,-0.092089,-0.116184,0.049405,-0.070991,-0.0,-0.623874,-0.261855,-0.0,0.402355,0.249511,0.435484,-0.1,0.0,0.065693,-0.523885,-0.093874,-0.162954,0.111114,-0.140449,-0.102179,0.204984,0.592478,-0.31317,0.082259,-0.132667,0.10011,-0.060458,-0.086619,-0.310886,-0.040467,-0.159003,-0.01917,0.023203,-0.115026,-0.038314,0.430737,-0.171195,0.046123],[0.3862,0.005474,0.136691,0.119783,0.476964,0.366565,0.224435,-0.462467,-0.075391,-0.085312,-0.256173,-0.165109,-0.180419,0.473506,-0.0,-0.218698,-0.530127,0.0,-0.140779,0.173503,0.271321,-0.179073,0.0,-0.028929,-0.113679,-0.283611,0.160431,0.057069,0.2875,0.065618,0.573367,0.04939,-0.109554,0.251943,-0.687384,0.018138,-0.512824,-0.516582,0.009379,-0.157846,0.085016,0.160059,0.083679,-0.181707,-0.02669,0.044083,-0.298799,-0.117144],[0.246983,0.116889,0.564688,-0.172033,-0.348235,0.205744,0.435295,-0.061795,-0.122927,0.288733,0.150578,0.646113,-0.390801,0.277298,0.0,0.32799,-0.380031,-0.0,-0.015037,0.54365,-0.200624,-0.036897,-0.0,-0.460314,0.058212,0.331438,-0.254179,0.532862,-0.474309,0.295545,0.567349,0.550168,0.01566,0.246474,-0.883949,0.620637,0.138972,-0.072277,0.130772,-0.288625,-0.191939,0.162179,0.313512,-0.490587,0.290821,0.047699,-0.072713,-0.159102],[-0.630664,0.017182,0.084259,-0.357523,-0.432087,-0.327893,0.188984,0.393121,-0.36411,0.311105,0.047531,0.591852,0.648673,-0.130841,-0.0,-0.366211,0.407922,-0.0,0.302774,-0.177321,-0.444781,0.080378,-0.0,0.343388,-0.217598,-0.192193,-0.256827,0.358488,-0.491575,-0.041289,-0.247555,0.512406,-0.272816,0.566953,-0.176348,0.143744,0.606506,0.415644,0.058425,-0.319816,-0.466311,0.007134,0.64498,-0.047385,0.296128,0.665074,0.53603,0.035272],[0.139187,-0.445932,-0.766903,0.134896,0.244875,0.110142,0.667592,0.23802,-0.339822,0.259568,0.160519,0.166253,0.500299,0.366986,0.0,-0.152013,0.481697,0.0,-0.541884,0.396546,0.063615,0.106986,-0.0,0.207349,-0.105108,-0.725228,0.03901,-0.067349,-0.349371,0.111845,0.009628,0.092127,-0.28854,0.682021,-0.172174,-0.42536,0.342337,0.006481,-0.402851,-0.660432,0.02557,-0.068827,0.94144,0.232599,0.574825,0.598445,0.093248,0.302338],[-0.157291,-0.063745,-0.434192,0.199698,0.337278,0.517751,0.319336,-0.062314,-0.508897,0.19555,-0.140554,0.094294,0.508752,0.231976,0.0,-0.207235,0.367727,-0.0,-0.181056,0.022426,-0.448175,0.052191,-0.0,0.554372,0.280156,-0.75275,-0.427194,0.151654,-0.122804,0.127827,0.222284,0.252239,-0.032859,0.165878,0.666316,-0.125604,-0.002666,0.157352,-0.334387,-0.45996,0.06337,-0.003699,0.564422,0.241292,-0.420371,0.504413,0.329264,0.455817],[0.17597,-0.281969,-0.449934,-0.047359,-0.197313,-0.217585,0.294016,0.039902,-0.453035,-0.289868,0.016582,0.273506,-0.074841,0.119265,0.0,0.233572,0.411332,0.0,-0.165593,-0.284145,0.420493,0.001175,-0.0,-0.159534,0.12376,-0.397366,-0.080314,0.441094,0.09949,0.138454,0.175611,-0.467512,0.450462,0.238466,0.332448,0.238818,0.004614,0.159769,0.17467,0.212188,-0.138135,0.0,0.403443,-0.039912,-0.022375,0.33643,0.039906,0.131111],[0.359765,-0.208336,-0.351462,0.070642,-0.119161,-0.048683,0.324052,-0.390136,-0.109265,-0.417612,0.0,0.063752,0.127185,0.348993,0.0,-0.0,-0.0,0.0,-0.310602,-0.121337,0.444094,0.0,0.0,0.150526,0.188974,-0.128175,-0.139375,0.267618,0.564467,0.180748,0.106675,-0.24161,0.120681,0.40075,-0.011041,0.005255,-0.334157,0.049305,-0.246617,0.203275,-0.071144,-0.0,0.012826,-0.032589,-0.050853,0.430701,-0.435315,-0.171154],[0.6738,-0.280556,-0.108054,0.255158,0.173623,0.149778,0.004375,-0.312477,0.304594,0.080218,-0.081868,-0.345006,-0.428846,0.43856,0.0,-0.50141,-0.538974,-0.0,0.077314,0.126679,0.667475,-0.171609,0.0,-0.043333,0.06963,0.289924,0.121561,-0.456454,0.307564,0.217657,0.433202,-0.391988,-0.106632,-0.262685,-0.444012,0.319044,0.119221,-0.238466,-0.199707,-0.046286,0.068563,0.101328,0.313082,0.260086,0.017761,0.183094,-0.383818,-0.027707],[0.60683,-0.135955,0.425137,0.020419,-0.342528,-0.140196,0.529723,-0.029351,0.1424,-0.198137,-0.241255,0.486549,-0.55645,0.490298,0.0,0.07378,-0.630209,-0.0,-0.588241,0.290872,0.580896,-0.118658,0.0,-0.268485,0.145851,-0.078968,0.312026,-0.115603,0.031946,0.69327,0.33306,-0.138252,0.149702,0.443968,-0.653154,0.095936,-0.393427,-0.308937,-0.268169,-0.276094,-0.372935,-0.196422,0.428691,-0.421051,0.318811,0.104827,-0.175737,-0.020337],[0.317153,-0.506716,0.500784,0.103297,0.007465,0.412406,0.318814,-0.283537,0.34179,0.573103,0.071382,0.491418,0.195931,0.529755,-0.0,0.275858,-0.326508,0.0,-0.094046,0.448668,-0.172622,0.053192,-0.0,-0.33844,-0.502766,-0.057476,0.474504,-0.542438,0.007251,-0.276355,-0.386792,0.504344,0.324603,0.393371,-0.629662,0.332125,-0.053807,0.215103,0.335738,-0.469734,0.016476,0.068663,-0.113123,-0.791502,0.321386,0.421421,-0.151455,-0.085508],[0.333305,-0.309797,0.25714,-0.262347,-0.086465,-0.458583,0.32158,0.379969,0.329261,0.27436,-0.035405,0.232364,0.301324,-0.230259,-0.0,0.055675,0.320188,-0.0,0.359741,-0.092136,0.601175,-0.213822,0.0,0.174972,-0.568115,0.482006,0.784391,0.016748,0.361181,-0.207221,-0.490888,0.183523,-0.033092,0.049479,-0.055494,0.280196,0.249594,0.278283,0.31498,0.029248,0.013817,-0.085548,0.06294,-0.20706,0.679547,0.097099,-0.001794,-0.360435],[-0.076502,-0.15554,-0.152249,0.123508,-0.175811,0.185453,0.454177,0.268088,-0.299919,-0.168284,-0.242413,0.410862,-0.055083,0.379927,-0.0,-0.000394,-0.10184,0.0,-0.573394,0.216176,0.418639,-0.239141,0.0,0.260023,-0.111544,-0.561565,0.399818,0.383488,0.039465,0.151726,0.339292,-0.044272,-0.018397,0.513126,-0.391595,-0.003369,0.019353,0.210022,-0.184813,-0.176093,0.022022,0.061937,0.191199,-0.1054,0.171636,-0.122698,-0.492601,0.278153],[0.044756,-0.368764,-0.431207,-0.154272,-0.095868,0.006974,0.501249,0.277877,-0.644576,-0.203671,-0.025084,0.423999,-0.144918,0.496065,-0.0,0.288241,0.089346,0.0,-0.75453,-0.011766,0.262515,0.057044,-0.0,0.27409,0.513165,-0.891759,0.003352,0.467518,0.110454,0.477308,0.595934,0.094739,0.251683,0.412641,-0.193531,-0.08366,-0.179763,0.168795,-0.0739,-0.103786,-0.042746,-0.114602,0.622816,-0.005748,-0.425811,0.164978,-0.314028,0.331929],[0.091429,-0.08364,-0.144425,-0.176717,-0.23494,-0.296485,-0.015293,0.053196,-0.138388,-0.209308,-0.010814,0.165698,-0.048383,0.009761,-0.0,0.125382,-0.159659,0.0,0.0,-0.197225,0.202105,-0.0,0.0,0.020766,0.315722,-0.025907,-0.312874,0.099386,0.30143,0.340847,0.086171,0.066702,0.02473,0.311663,-0.040206,0.068572,-0.081517,-0.25365,0.037994,0.076607,-0.007043,-0.0,0.060688,-0.151443,-0.151639,0.092662,-0.147689,-0.385175],[-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,0.0,-0.0,-0.0,0.0,-0.0,0.0,0.0,-0.0,0.0,0.0,0.0,-0.0,0.0,0.0,-0.0,0.0,0.0,0.0,0.0,-0.0,0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,0.0,0.0,0.0,0.0,-0.0],[0.210767,0.438903,0.433354,0.254272,0.045651,0.479163,-0.250454,0.145999,0.032622,-0.461747,0.05361,0.435834,-0.51962,0.091988,-0.0,0.089565,-0.426841,-0.0,-0.697014,-0.420793,-0.212291,0.029682,-0.0,-0.025332,0.046712,0.11665,-0.171719,0.167278,0.243875,0.262885,0.15715,-0.189404,0.67634,0.198778,0.000494,0.534436,-0.742242,-0.226783,0.27167,0.301354,-0.139551,0.062034,0.107721,0.080829,-0.697178,0.007247,0.405401,0.009044],[0.372988,0.305768,0.543405,-0.104575,-0.034486,0.065072,0.275585,0.266306,0.468467,0.02988,-0.027609,0.308512,-0.52246,0.31719,-0.0,0.290473,-0.158847,-0.0,-0.426126,-0.175839,0.281257,-0.107207,-0.0,-0.201366,0.154897,0.323662,0.248751,-0.136861,0.170405,0.276665,0.248304,-0.284712,0.497325,0.210686,-0.461602,0.39855,-0.344421,0.064998,0.10256,0.15806,0.064782,0.113762,0.384348,-0.158216,0.039882,-0.193656,-0.159694,0.253056],[0.238293,0.070503,0.102943,0.256254,0.058478,0.32406,0.533777,-0.110098,0.257412,0.372007,-0.179213,0.124881,0.444186,-0.043728,-0.0,-0.008529,0.133233,0.0,0.378031,-0.037965,0.467774,-0.083885,0.0,0.139702,-0.323531,-0.12672,0.234006,-0.168676,0.169376,-0.023407,-0.602257,-0.156714,0.342752,0.117458,0.115665,0.253002,-0.311345,0.451258,0.436555,-0.31946,0.084054,-0.150381,-0.281001,-0.373433,0.52626,0.156733,-0.106004,0.118099],[0.258603,0.148127,0.044876,-0.06567,-0.101803,-0.176907,-0.156765,0.319872,0.083635,-0.045905,-0.090992,0.211535,0.563508,-0.197937,-0.0,-0.273055,0.288816,-0.0,0.032318,-0.538817,0.312265,-0.209495,0.0,-0.06504,-0.650605,0.066158,0.002357,0.592566,0.574574,0.226162,-0.57474,0.252641,0.236467,0.48528,0.252017,0.2951,-0.065441,0.184413,0.271983,0.145844,0.231327,-0.049737,0.111334,-0.118762,0.339775,0.712417,0.30519,-0.39973],[0.108282,-0.111178,0.070631,-0.077482,-0.624347,0.049493,0.068145,0.338998,0.284507,0.032575,0.030052,0.444047,-0.417411,0.166803,0.0,0.297137,-0.108156,-0.0,-0.499001,-0.402221,0.290028,-0.232236,-0.0,-0.44332,0.421553,0.344902,0.219068,0.261225,0.088003,0.425704,0.049392,-0.257711,-0.123419,0.154592,-0.101893,0.501653,0.193358,-0.062971,-0.417592,0.414265,-0.099199,0.106158,0.606179,0.053153,0.057893,-0.193383,0.332862,0.318431],[0.073485,-0.182817,-0.465235,-0.102805,-0.46171,-0.382687,0.150735,0.481729,0.469601,-0.329565,0.108441,0.278479,-0.761132,0.268637,0.0,0.29953,-0.458955,0.0,-0.606359,-0.466394,0.703355,-0.148431,-0.0,-0.53894,0.533738,0.381349,0.230116,0.498407,0.53598,0.582935,0.482969,-0.713623,0.402216,0.18014,-0.40198,0.312415,0.37504,0.206554,-0.453202,0.356188,0.084561,0.165776,0.298032,0.144754,-0.249654,-0.333226,0.573993,0.102624],[-0.0,-0.0,-0.0,-0.0,-0.0,-0.0,0.0,0.0,-0.0,0.0,0.0,-0.0,0.0,0.0,-0.0,-0.0,0.0,0.0,-0.0,-0.0,-0.0,0.0,-0.0,-0.0,0.0,0.0,0.0,0.0,-0.0,-0.0,-0.0,-0.0,0.0,0.0,0.0,-0.0,-0.0,0.0,-0.0,0.0,0.0,-0.0,0.0,0.0,0.0,0.0,0.0,0.0],[0.215126,-0.346593,-0.157077,-0.257563,-0.036152,-0.272127,0.184215,-0.081492,-0.122754,-0.24084,0.001562,0.195433,0.08309,-0.043639,0.0,0.267081,-0.074643,0.0,-0.030471,-0.293997,0.014634,0.0,0.0,0.05168,0.234327,0.054273,-0.139016,0.023431,0.057982,0.088778,0.016535,0.044353,0.148095,0.244907,-0.038005,0.305299,0.12404,-0.141713,0.117751,0.250181,-0.341782,0.0,0.314879,-0.179343,-0.018559,0.211579,-0.259393,-0.09682],[0.208395,-0.492147,-0.742522,0.146324,-0.061601,-0.120055,-0.02347,-0.134932,-0.591063,-0.280074,0.125237,0.468591,0.238919,0.524775,0.0,0.911991,0.20388,-0.0,-0.365169,-0.426459,-0.098918,0.078347,-0.0,0.217089,0.366048,-0.413768,-0.275837,0.398502,0.420206,0.090751,-0.173634,-0.000641,0.242035,0.261576,0.128911,0.2354,-0.486215,0.154526,0.360984,0.323754,-0.524909,-0.013498,0.249183,-0.373034,-0.356621,0.364835,-0.268151,0.017844],[-0.150947,0.691325,0.415796,0.355617,0.52065,0.559249,0.02872,-0.270953,-0.250471,-0.388787,0.068932,0.574162,-0.203602,0.384429,0.0,0.276619,-0.037108,0.0,-0.202481,0.102916,-0.920162,-0.198902,-0.0,-0.141643,0.48872,-0.079488,-0.278467,-0.070068,0.044536,0.544567,0.112863,0.204712,0.420725,-0.026965,0.11233,0.347319,-0.684249,0.200731,0.609241,-0.05785,0.321892,-0.046879,0.165102,-0.20179,-0.686302,-0.187247,-0.013187,-0.289495],[-0.388877,0.679913,0.183573,0.150513,-0.131794,-0.087665,-0.141681,0.392317,-0.73362,-0.260502,0.140293,0.534962,-0.086538,0.141553,0.0,0.574083,-0.06503,-0.0,-0.021263,0.071005,-0.209909,-0.04805,-0.0,0.395188,-0.041833,-0.52795,-0.5069,0.939097,0.376308,0.615323,0.721394,0.597341,0.628891,0.501875,0.629942,0.277865,-0.481515,0.068459,0.324453,0.088616,0.613717,-0.084784,0.365349,-0.224446,-0.803744,0.706251,-0.484584,-0.717442],[0.312299,0.256464,0.296385,-0.397755,-0.191704,0.071261,-0.104067,0.209495,0.409703,-0.009961,0.181875,0.253354,0.371384,-0.227922,0.0,0.015041,0.233659,0.0,-0.134362,-0.771925,0.082021,-0.037939,0.0,-0.246383,-0.295522,0.459198,-0.374022,0.346654,0.454111,0.49038,-0.285673,0.048316,0.477102,0.455015,-0.016749,0.353944,-0.0293,-0.104589,-0.075512,0.095365,0.153738,0.118181,0.011181,-0.479207,0.05239,0.47255,0.091956,-0.150423],[0.421504,0.128244,0.104629,0.292805,0.290974,0.397669,-0.028009,-0.41548,0.504933,0.078492,0.052512,-0.217586,-0.042248,0.04273,0.0,0.137791,-0.029173,-0.0,0.017286,-0.184158,-0.239148,-0.171592,-0.0,-0.452625,0.232522,0.497743,0.308814,-0.218734,0.383804,0.475893,-0.410736,-0.035026,0.467506,-0.201692,0.210726,0.096381,0.04677,0.004723,-0.203412,0.196254,0.432928,-0.169376,-0.060305,-0.017462,0.296821,0.473481,-0.137998,0.419474],[0.165654,0.16046,0.081151,0.41516,0.26736,0.540644,-0.049867,-0.410958,0.407267,-0.042004,0.141692,-0.385646,0.382062,0.201212,-0.0,0.40638,-0.044721,-0.0,-0.487996,-0.347906,0.051208,-0.127412,0.0,-0.270021,0.461354,0.442375,0.146281,-0.25011,0.680306,-0.023879,-0.527091,-0.359214,0.471266,-0.346258,0.214662,0.395016,0.282866,0.335807,-0.408783,0.079003,0.453141,-0.170606,-0.325454,0.402421,0.023734,0.076973,0.343604,0.220936],[-0.277832,0.166669,0.091489,0.153213,0.378387,0.093872,-0.061716,0.212536,-0.00866,-0.180195,0.018047,-0.131627,-0.346366,0.219413,-0.0,0.117986,-0.098363,0.0,0.147469,0.096458,0.243483,-0.004286,0.0,0.521983,0.076695,0.022711,-0.308682,0.395171,0.009327,-0.277416,0.298046,-0.221747,0.085108,-0.339972,0.203026,0.049982,-0.401786,0.204602,-0.058105,-0.309289,0.079759,-0.0,-0.392052,-0.07333,-0.311926,-0.262733,0.079795,-0.279913],[0.122599,-0.099153,-0.365701,0.038325,-0.146422,-0.156353,-0.083466,0.219171,-0.162081,-0.065458,0.172683,-0.311108,0.028489,0.036117,-0.0,0.157444,0.339365,-0.0,0.199544,-0.086408,0.299542,0.0,0.0,0.034776,0.171805,-0.190847,-0.219367,-0.021943,0.169157,0.066475,-0.003018,-0.003047,-0.022421,-0.027483,0.063521,-0.021478,0.187181,-0.017026,-0.084699,0.086148,0.094448,0.0,0.061255,0.028316,-0.176337,-0.132133,-0.017215,0.028781],[0.605938,-0.448802,-0.645619,-0.311861,0.372636,-0.443711,0.513976,-0.68856,-0.538706,0.23662,-0.123619,-0.072194,0.479506,-0.027064,-0.0,0.885806,0.24585,-0.0,0.30234,0.296411,0.351257,-0.07126,0.0,0.510584,0.225807,-0.063322,-0.205362,0.342052,0.109255,0.022644,0.407768,0.31796,-0.168943,0.575823,-0.034934,-0.174954,0.281924,0.022613,0.063822,0.037285,-0.605053,-0.083164,0.496453,-0.139435,-0.19543,0.469301,-0.469798,0.145877],[-0.032006,0.037798,0.294738,0.208216,0.467662,0.373687,-0.125613,-0.538992,0.16755,-0.062902,0.055487,-0.285188,-0.002556,0.058001,-0.0,0.105996,0.047456,-0.0,-0.06133,0.191109,-0.476964,-0.258334,0.0,0.367348,0.18531,0.165214,-0.298953,0.065983,-0.202092,0.119929,0.302331,0.101662,0.211613,-0.302743,0.418661,-0.065905,-0.202571,0.019591,0.411629,-0.262644,0.2145,0.007317,-0.098334,0.308637,-0.249418,-0.336068,-0.267952,-0.063567],[-0.571823,0.154908,0.085104,0.306692,-0.190009,-0.405076,-0.233807,0.243364,-0.351651,-0.298849,-0.039185,0.000627,-0.141786,0.56945,-0.0,-0.147173,0.099113,0.0,0.231719,-0.04478,0.134693,-0.022216,0.0,0.632704,0.350295,0.122135,-0.189468,0.816597,-0.119709,0.313474,0.407148,0.13146,-0.178243,0.178842,0.275024,0.105848,0.039256,0.418693,0.307459,0.26102,0.174275,-0.064499,-0.083044,0.184648,-0.320133,-0.466718,0.466563,-0.099336],[0.039782,0.382372,0.339482,-0.3055,0.072181,-0.15637,-0.361966,0.283,-0.202521,-0.127326,0.131653,-0.330877,-0.023065,0.252265,-0.0,0.330212,-0.074246,-0.0,0.572535,0.399474,-0.423698,-0.05283,-0.0,0.205802,0.578723,0.280051,-0.267596,0.300585,-0.182976,-0.027215,0.107182,0.450868,-0.357877,0.0704,0.071905,0.476512,0.40757,-0.432631,0.052809,0.558767,-0.25619,-0.154565,0.11653,0.469613,-0.315918,0.348302,0.681343,0.303131],[-0.093143,0.396974,0.293332,0.342342,0.592023,-0.145107,-0.426942,-0.513524,0.081658,0.454493,-0.224878,-0.171224,0.251951,0.125319,-0.0,-0.183347,0.295277,-0.0,0.479162,0.188654,-0.59216,-0.134227,0.0,0.465715,0.505858,0.386434,-0.360888,-0.032647,-0.111151,-0.31686,-0.059082,0.350445,0.200098,-0.341746,0.386703,0.118936,-0.044792,0.135655,0.029932,0.14161,0.322865,0.045335,-0.651518,0.289525,-0.428542,-0.016489,0.283599,0.185483],[-0.044289,0.076123,0.00405,0.435922,0.462207,0.322925,-0.210331,-0.418586,0.023343,0.212592,0.086665,-0.34812,0.355841,0.196973,-0.0,0.049571,0.508685,-0.0,0.540434,-0.127676,-0.219366,0.073017,0.0,0.337909,-0.1902,0.036565,-0.035744,-0.461177,0.314718,-0.12636,-0.41187,0.179954,-0.190847,-0.027302,0.285262,0.191968,0.257117,0.339446,-0.186236,-0.124843,0.174247,-0.144228,-0.367775,0.250699,0.165422,0.080761,0.484397,0.008366],[-0.351158,-0.128566,0.455273,-0.337471,-0.890096,-0.452282,0.591366,0.395779,-0.438924,0.350724,-0.152781,0.435907,-0.320403,-0.049671,-0.0,-0.662651,-0.167406,-0.0,0.16338,0.622613,0.141132,0.153577,-0.0,0.002,-0.079911,-0.574508,-0.270246,0.575877,-0.378221,-0.209232,0.658301,0.485713,-0.292705,0.609298,-0.502961,0.13565,0.317285,-0.289103,-0.0712,-0.32798,-0.763156,0.0,-0.56653,-0.380823,0.15236,0.117705,0.04166,-0.157101],[-0.153242,0.029688,-0.216587,0.178982,0.046228,-0.13303,-0.008379,0.080468,-0.056528,-0.227417,0.0,-0.089543,0.079083,0.169278,-0.0,0.047838,0.265139,-0.0,0.042864,0.042125,0.006668,0.0,-0.0,0.225693,0.121372,-0.16453,-0.289477,0.084057,0.094604,0.026168,0.236018,-0.120185,-0.054692,-0.081059,0.28572,-0.212368,-0.007753,0.058502,-0.073054,0.053823,-0.137696,-0.0,-0.095424,0.18323,-0.320392,-0.040088,0.093735,0.025825],[-0.050838,0.707115,0.371495,-0.267088,-0.018615,-0.204901,-0.823002,0.032564,0.339487,-0.149987,0.010063,-0.401163,-0.002574,-0.646377,-0.0,0.034386,0.116469,-0.0,0.72367,-0.117533,0.188161,0.129688,-0.0,-0.587307,-0.321697,0.18608,0.25322,0.210025,0.44188,0.246265,0.085248,-0.421731,0.28107,-0.249161,0.707618,-0.664919,0.30613,-0.103029,0.353091,0.242282,-0.435229,-0.102258,-0.352901,0.207724,-0.499852,0.296569,0.40629,0.205686],[0.238891,-0.15378,-0.209053,-0.467372,0.181604,0.059783,-0.055129,0.196199,0.354127,-0.318856,-0.055788,-0.256456,-0.339857,-0.174667,0.0,-0.700915,0.304184,0.0,0.520566,0.30388,0.520536,0.171509,-0.0,-0.076219,0.133331,0.414095,0.24285,0.288543,0.286766,-0.283587,0.24356,-0.344626,-0.027476,-0.471003,0.209143,-0.67336,0.468187,0.023233,-0.032912,0.09177,-0.46356,0.142407,-0.279738,0.139171,0.054997,-0.361354,0.016224,0.333111],[0.15983,-0.025538,0.136136,0.255131,0.487634,-0.2002,0.110461,-0.283902,0.191534,0.327763,0.161919,-0.038078,0.079267,0.094044,0.0,-0.696427,0.112395,0.0,0.563858,0.276139,-0.131535,0.148616,-0.0,0.12544,0.016202,-0.015978,0.087519,-0.368619,0.059537,-0.359066,0.422426,0.050937,0.002039,-0.194926,0.158959,-0.048594,0.122391,-0.159644,0.188228,0.334479,0.03053,-0.047273,-0.202826,0.215906,0.18494,-0.179667,0.098893,0.066557],[0.248023,0.321592,0.192914,0.10734,0.214635,0.300761,-0.00874,-0.433365,0.113025,0.438603,-0.107136,-0.08805,0.357218,0.268728,0.0,0.476152,0.083224,-0.0,0.433767,0.16754,-0.647682,0.081253,-0.0,0.121521,0.317357,0.034729,0.110831,-0.412417,-0.092405,-0.303717,0.015754,0.102632,0.140495,0.111807,-0.047361,0.21447,0.195376,-0.001977,0.097651,0.034058,-0.007756,0.082925,-0.111319,-0.111581,-0.020255,0.460965,0.059022,0.285482],[-0.02112,0.236268,0.548536,0.367259,0.223106,-0.024508,-0.118959,-0.220196,-0.071836,0.283,0.182122,-0.465613,0.020524,0.332196,0.0,0.077734,0.095136,-0.0,0.484304,0.3982,-0.508321,0.160931,0.0,0.413206,0.225406,0.253288,-0.050191,0.08642,-0.051705,-0.061452,-0.027199,0.536447,-0.360933,-0.226853,-0.126495,0.581874,0.410635,0.25658,0.10194,-0.063285,0.394587,-0.010964,-0.358422,-0.144001,-0.036262,-0.019616,0.237642,-0.510911],[-0.18492,-0.041827,0.387888,0.265653,-0.272074,-0.423588,-0.167145,0.381694,-0.193868,0.414498,-0.23056,-0.178171,0.413983,0.402332,-0.0,0.536874,0.213139,0.0,0.253201,0.38564,-0.34131,-0.120285,0.0,0.630737,0.183242,0.198558,-0.343281,0.417501,-0.389955,-0.088469,0.437331,0.14488,-0.401655,-0.084901,0.092964,0.22247,0.444774,0.255818,0.038143,0.070381,-0.082119,-0.031711,-0.750981,0.288263,-0.272829,-0.054135,0.607032,-0.298074],[-0.557327,0.196985,0.557886,-0.360692,-0.461792,-0.445889,-0.145128,0.29129,-0.260791,-0.087691,-0.117871,0.293684,-0.380334,0.251959,-0.0,-0.231538,-0.274778,0.0,0.177301,0.333122,-0.330585,0.074272,-0.0,0.069013,-0.054454,-0.621682,-0.519824,0.589304,-0.725496,-0.216562,0.679625,0.66978,-0.120123,0.363348,-0.321961,0.571302,0.24137,-0.238055,0.32659,0.034702,-0.571296,0.0,-0.571861,0.071614,-0.244692,0.470106,0.426121,-0.273062]],[[0.139072,-0.587328,-0.957013,-0.101986,0.504004,0.476464,0.029347,-0.727303,0.344469,0.313982],[0.425759,0.423741,0.407787,0.072824,-0.47733,0.186714,0.237545,0.188988,0.243367,-0.840756],[-0.465974,0.875761,-0.508232,-0.292538,-0.645199,0.292881,0.654519,-0.640113,0.106409,-0.485081],[0.363843,-0.581477,0.136495,-0.101625,-0.32255,-0.16514,0.559569,-0.684296,0.40091,0.022962],[0.37667,-1.122391,0.215784,-0.008298,-0.743996,-0.059391,0.251258,-0.939071,0.460413,-0.176495],[0.674364,-0.567749,-0.67212,-0.254886,-0.779496,-0.20127,0.265386,0.243753,0.688458,-0.04702],[-0.114881,-0.095622,-0.63533,-0.634946,0.143207,-0.215863,-0.277773,0.157955,0.23913,0.707485],[-0.438339,0.668096,0.290981,0.1376,0.016786,-0.032227,0.132477,0.56421,-1.025263,-0.394623],[0.11248,-0.288172,-0.772735,0.572285,-0.228775,0.656647,0.224682,0.097306,-0.021619,0.149199],[-0.498195,0.236152,-0.229798,0.281259,-0.461701,-0.299728,-0.422724,-0.83827,0.4058,0.502423],[-0.035906,-0.191512,-0.282452,-0.333032,-0.18453,0.220268,-0.126829,-0.121301,-0.281203,-0.207536],[-0.209119,0.408411,-0.593902,-0.709218,0.185468,-0.479261,-0.366186,0.608444,0.213881,-0.084847],[-0.593227,-0.138274,0.332167,0.517874,-0.040544,-0.836064,-0.228357,-0.037925,0.542781,0.348992],[0.41665,-0.085069,-0.165013,-0.850856,0.129587,-0.542788,0.438396,-0.633174,-0.329023,0.333656],[-0.0,-0.0,-0.0,-0.0,0.0,-0.0,0.0,-0.0,0.0,-0.0],[-0.009152,-1.532642,0.404313,-0.320624,1.205592,-0.051525,0.276023,-0.253202,-0.745741,0.630296],[-0.523622,-0.439013,0.590406,0.603065,-0.337353,-0.649,-0.41833,0.51868,0.187586,0.031467],[-0.0,0.0,-0.0,-0.0,0.0,-0.0,-0.0,-0.0,-0.0,0.0],[-0.707453,0.03836,0.513472,0.322867,-0.755591,0.245289,-0.518607,-0.920752,-0.169358,-0.170926],[0.429474,0.035921,0.391594,-0.638919,-0.632276,0.465099,-0.317334,-0.519958,0.177626,0.465025],[-0.443474,-1.129252,-0.332864,-0.414847,0.75879,0.602525,-0.182742,0.451494,-0.868164,0.3577],[0.03968,0.135379,-0.185455,-0.158471,0.223182,0.176621,0.23749,0.131423,0.033534,0.089256],[0.0,-0.0,-0.0,-0.0,0.0,-0.0,-0.0,-0.0,0.0,0.0],[-0.492056,-0.494956,1.178675,-0.088781,0.011901,-0.992242,-0.000571,-0.438852,-0.072573,0.283867],[0.540828,-0.400024,0.082413,-0.343703,0.560103,-0.228586,0.120062,-0.54645,-0.983079,0.130425],[-0.694147,0.008067,-0.809641,0.661076,0.042688,0.7553,0.528069,-0.734765,-0.776153,-0.457918],[-0.413128,-0.442017,-0.848883,-0.008007,-0.669666,0.7349,-0.23974,0.25509,-0.378681,0.529392],[-0.432863,0.654023,0.86388,-0.908422,0.93679,0.250357,0.037637,0.635736,-0.610759,-0.80985],[-0.785092,-1.002804,-0.075182,0.134497,0.697556,0.674831,0.550269,0.395996,0.155425,-0.992318],[0.317504,0.020639,-0.757134,-0.600643,0.676687,-0.277496,0.069844,0.453525,-0.210951,-0.873158],[0.65441,0.290026,0.4957,-1.249824,0.274232,0.469209,-0.239589,0.065607,-0.260872,-0.218784],[-0.31024,0.771413,0.471389,-0.253542,0.006954,-0.4176,-0.29615,-0.489936,0.475346,0.012045],[0.088194,-0.127038,-0.631211,0.031294,0.61076,-0.002761,0.541345,0.353474,0.482607,-1.141224],[-0.182243,0.440248,-0.164568,-0.587739,0.733894,-0.587948,-0.214088,0.312553,0.262367,0.164018],[-0.136184,-1.02978,0.79938,0.547521,-1.007654,-0.177681,-0.524602,0.635909,0.108096,-0.870184],[-0.488699,0.678711,-0.36696,-0.157713,0.531108,-0.33928,0.726884,-0.425521,-0.18103,-0.45085],[-0.830896,0.351109,0.110438,0.726817,-0.537454,-0.286979,-0.404462,-0.3035,-0.85965,0.327099],[-0.451082,-0.064457,0.342104,0.275536,-0.161424,-0.805802,0.419062,0.675768,-0.014456,0.278008],[-0.489067,0.570207,0.515328,-0.315878,0.089285,0.102704,0.407491,-0.020352,0.368394,-0.745704],[0.065958,-0.242236,0.501072,0.597437,0.369888,0.686463,-0.30755,0.300679,-0.778632,-0.745982],[0.046683,-0.631183,-0.173239,-0.145198,-0.487883,-0.605946,0.742436,0.260826,0.713568,-0.781334],[-0.031049,0.087221,-0.073313,-0.041226,-0.148017,-0.208417,-0.112846,-0.053998,0.063892,-0.159543],[0.167179,0.693927,-0.565888,-0.790113,0.655784,-0.863986,-0.755139,0.436243,-0.239032,0.23087],[0.561709,-0.689107,0.396716,0.362448,-0.639616,0.15376,-0.590627,0.348696,-0.772366,-0.147367],[-0.757853,0.066321,-0.877642,0.208239,-0.071901,0.498717,-0.482279,0.172006,0.189066,0.764176],[-0.510534,0.291665,-0.069351,0.268709,0.838661,-0.813525,-0.701449,-0.498844,0.693063,-0.109644],[0.089857,0.573326,0.252242,0.72571,-0.454286,-0.679784,-0.015457,0.037949,-0.844497,-0.121086],[0.670731,-0.339093,-0.265884,0.293142,-0.463994,-0.019397,-0.587742,0.271018,-0.208909,0.417593]]],"biases":[[0.182337,0.026695,0.04012,0.230556,0.360255,-0.084307,-0.164307,0.100436,0.318322,0.07611,-0.169389,0.165439,0.144897,0.200911,-0.042518,-0.118445,0.215175,-0.114292,0.037096,0.222006,0.285257,0.112919,-0.144178,0.078279,0.291892,-0.054614,-0.094559,0.077741,0.136752,0.411593,0.333822,-0.103036,0.207811,0.039311,0.44551,-0.146794,0.087865,0.058747,-0.012457,0.04738,0.143665,-0.201297,-0.146796,0.361798,0.122554,0.02239,-0.117059,0.0329],[-0.094208,-0.109421,-0.26077,-0.093543,-0.178285,-0.139566,0.137287,-0.050332,0.253547,0.256327]],"accuracy":0.98,"samples":450,"examples":[[0.0,0.0,0.3125,0.8125,0.5625,0.0625,0.0,0.0,0.0,0.0,0.8125,0.9375,0.625,0.9375,0.3125,0.0,0.0,0.1875,0.9375,0.125,0.0,0.6875,0.5,0.0,0.0,0.25,0.75,0.0,0.0,0.5,0.5,0.0,0.0,0.3125,0.5,0.0,0.0,0.5625,0.5,0.0,0.0,0.25,0.6875,0.0,0.0625,0.75,0.4375,0.0,0.0,0.125,0.875,0.3125,0.625,0.75,0.0,0.0,0.0,0.0,0.375,0.8125,0.625,0.0,0.0,0.0],[0.0,0.0,0.0,0.75,0.8125,0.3125,0.0,0.0,0.0,0.0,0.0,0.6875,1.0,0.5625,0.0,0.0,0.0,0.0,0.1875,0.9375,1.0,0.375,0.0,0.0,0.0,0.4375,0.9375,1.0,1.0,0.125,0.0,0.0,0.0,0.0,0.0625,1.0,1.0,0.1875,0.0,0.0,0.0,0.0,0.0625,1.0,1.0,0.375,0.0,0.0,0.0,0.0,0.0625,1.0,1.0,0.375,0.0,0.0,0.0,0.0,0.0,0.6875,1.0,0.625,0.0,0.0],[0.0,0.0,0.0,0.25,0.9375,0.75,0.0,0.0,0.0,0.0,0.1875,1.0,0.9375,0.875,0.0,0.0,0.0,0.0,0.5,0.8125,0.5,1.0,0.0,0.0,0.0,0.0,0.0625,0.375,0.9375,0.6875,0.0,0.0,0.0,0.0625,0.5,0.8125,0.9375,0.0625,0.0,0.0,0.0,0.5625,1.0,1.0,0.3125,0.0,0.0,0.0,0.0,0.1875,0.8125,1.0,1.0,0.6875,0.3125,0.0,0.0,0.0,0.0,0.1875,0.6875,1.0,0.5625,0.0],[0.0,0.0,0.4375,0.9375,0.8125,0.0625,0.0,0.0,0.0,0.5,0.8125,0.375,0.9375,0.25,0.0,0.0,0.0,0.125,0.0625,0.8125,0.8125,0.0,0.0,0.0,0.0,0.0,0.125,0.9375,0.6875,0.0625,0.0,0.0,0.0,0.0,0.0,0.0625,0.75,0.75,0.0625,0.0,0.0,0.0,0.0,0.0,0.0625,0.625,0.5,0.0,0.0,0.0,0.5,0.25,0.3125,0.875,0.5625,0.0,0.0,0.0,0.4375,0.8125,0.8125,0.5625,0.0,0.0],[0.0,0.0,0.0,0.0625,0.6875,0.0,0.0,0.0,0.0,0.0,0.0,0.4375,0.5,0.0,0.0,0.0,0.0,0.0,0.0625,0.8125,0.375,0.125,0.125,0.0,0.0,0.0,0.4375,0.9375,0.0,0.5625,0.5,0.0,0.0,0.3125,1.0,0.625,0.0,1.0,0.375,0.0,0.0,0.25,0.9375,1.0,0.8125,1.0,0.0625,0.0,0.0,0.0,0.0,0.1875,0.9375,0.625,0.0,0.0,0.0,0.0,0.0,0.125,1.0,0.25,0.0,0.0],[0.0,0.0,0.75,0.625,0.0,0.0,0.0,0.0,0.0,0.0,0.875,1.0,1.0,0.875,0.0,0.0,0.0,0.0,0.8125,1.0,0.9375,0.625,0.0625,0.0,0.0,0.0,0.6875,1.0,1.0,0.4375,0.0,0.0,0.0,0.0,0.0,0.25,0.4375,1.0,0.4375,0.0,0.0,0.0,0.0,0.0,0.25,1.0,0.5625,0.0,0.0,0.0,0.3125,0.25,0.75,1.0,0.25,0.0,0.0,0.0,0.5625,1.0,1.0,0.625,0.0,0.0],[0.0,0.0,0.0,0.75,0.8125,0.0,0.0,0.0,0.0,0.0,0.3125,1.0,0.5,0.0,0.0,0.0,0.0,0.0,0.8125,1.0,0.1875,0.0,0.0,0.0,0.0,0.0,0.875,0.8125,0.0,0.0,0.0,0.0,0.0,0.0,0.9375,0.75,0.4375,0.125,0.0,0.0,0.0,0.0,0.8125,1.0,0.8125,1.0,0.1875,0.0,0.0,0.0,0.4375,1.0,0.6875,0.9375,0.5,0.0,0.0,0.0,0.0625,0.5625,0.9375,0.6875,0.1875,0.0],[0.0,0.0,0.4375,0.5,0.8125,1.0,0.9375,0.0625,0.0,0.0,0.4375,0.4375,0.25,0.6875,0.75,0.0,0.0,0.0,0.0,0.0,0.5,0.8125,0.0625,0.0,0.0,0.25,0.5,0.5,0.9375,0.9375,0.375,0.0,0.0,0.125,0.6875,0.9375,0.9375,0.25,0.0,0.0,0.0,0.0,0.0,1.0,0.3125,0.0,0.0,0.0,0.0,0.0,0.5625,0.9375,0.0625,0.0,0.0,0.0,0.0,0.0,0.8125,0.3125,0.0,0.0,0.0,0.0],[0.0,0.0,0.5625,0.875,0.5,0.0625,0.0,0.0,0.0,0.0,0.75,0.875,0.875,0.75,0.0,0.0,0.0,0.0,0.5625,0.625,0.0,0.9375,0.25,0.0,0.0,0.0,0.1875,1.0,0.75,0.875,0.125,0.0,0.0,0.0,0.25,1.0,1.0,0.125,0.0,0.0,0.0,0.1875,1.0,0.5,0.625,0.8125,0.125,0.0,0.0,0.0625,0.9375,0.0625,0.1875,1.0,0.5,0.0,0.0,0.0,0.6875,1.0,0.9375,0.6875,0.0625,0.0],[0.0,0.0,0.6875,0.75,0.0,0.0,0.0,0.0,0.0,0.125,1.0,1.0,1.0,0.8125,0.0,0.0,0.0,0.1875,1.0,0.75,0.625,0.875,0.0,0.0,0.0,0.0625,1.0,0.0625,0.75,0.9375,0.0,0.0,0.0,0.0,0.8125,1.0,0.5625,0.9375,0.125,0.0,0.0,0.0,0.0,0.1875,0.0,0.5625,0.6875,0.0,0.0,0.0,0.0,0.0,0.5625,0.9375,0.25,0.0,0.0,0.0,0.5625,0.75,0.8125,0.1875,0.0,0.0]]};
function portfolioDigitPredict(input){const m=portfolioDigitModel;let a=input;for(let layer=0;layer<m.weights.length;layer++){const w=m.weights[layer],b=m.biases[layer];a=b.map((bias,j)=>{let sum=bias;for(let i=0;i<w.length;i++)sum+=a[i]*w[i][j];return layer===0?Math.max(0,sum):sum;});}const max=Math.max(...a),exp=a.map(v=>Math.exp(v-max)),sum=exp.reduce((x,y)=>x+y,0);return exp.map(v=>v/sum);}
document.addEventListener('DOMContentLoaded',()=>{
 const reduced=matchMedia('(prefers-reduced-motion:reduce)'),fine=matchMedia('(hover:hover) and (pointer:fine)');
 const explorer=document.querySelector('.network-explorer'),wires=explorer.querySelector('.network-wires'),nodes=explorer.querySelector('.network-nodes'),points=[];let mode='Python',pulseTimer;
 [3,4,3].forEach((count,col)=>{for(let row=0;row<count;row++){const x=45+col*135,y=25+row*(140/(count-1));points.push({x,y,col});}});
 points.forEach((p,i)=>{points.filter(q=>q.col===p.col+1).forEach(q=>{const line=document.createElementNS('http://www.w3.org/2000/svg','line');for(const [key,val] of Object.entries({x1:p.x,y1:p.y,x2:q.x,y2:q.y}))line.setAttribute(key,val);line.dataset.layer=p.col;wires.append(line);});const button=document.createElement('button');button.type='button';button.className='network-node';button.style.left=p.x/360*100+'%';button.style.top=p.y/190*100+'%';button.style.setProperty('--layer',p.col);button.setAttribute('aria-label',`Activate ${['input','hidden','output'][p.col]} node ${i+1}`);function pulse(){clearTimeout(pulseTimer);explorer.classList.remove('is-signalling');requestAnimationFrame(()=>explorer.classList.add('is-signalling'));explorer.querySelector('.network-status').textContent=mode+' signal: input → learned features → output.';pulseTimer=setTimeout(()=>explorer.classList.remove('is-signalling'),1100);}button.addEventListener('click',pulse);button.addEventListener('pointerenter',()=>{if(fine.matches&&!reduced.matches)pulse();});nodes.append(button);});
 explorer.querySelectorAll('[data-network]').forEach(b=>b.addEventListener('click',()=>{mode=b.dataset.network;explorer.querySelectorAll('[data-network]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));document.querySelectorAll('.tech-pill').forEach(p=>p.classList.toggle('network-related',mode==='Python'?/Python|TensorFlow|PyTorch/.test(p.textContent):mode==='NLP'?/NLP|BERT|spaCy|GPT|Prompt/.test(p.textContent):/Vision|OpenCV|Deep Learning/.test(p.textContent)));nodes.querySelector('button').click();}));
 const divider=document.querySelector('.elastic-divider'),path=divider.querySelector('path');let bend=35,target=35,anchor=500,raf=0;function settle(){raf=0;bend+=(target-bend)*.16;path.setAttribute('d',`M0 35 Q${anchor} ${bend} 1000 35`);if(Math.abs(target-bend)>.1)raf=requestAnimationFrame(settle);}divider.addEventListener('pointermove',e=>{if(reduced.matches||!fine.matches)return;const r=divider.getBoundingClientRect();anchor=(e.clientX-r.left)/r.width*1000;target=Math.max(-15,Math.min(85,(e.clientY-r.top)/r.height*70*2-35));if(!raf)raf=requestAnimationFrame(settle);});divider.addEventListener('pointerleave',()=>{target=35;if(!raf)raf=requestAnimationFrame(settle);});
 const matches={Python:['autopilot','translator','traffic','resume','reviews'],OpenCV:['autopilot','traffic'],'Computer Vision':['autopilot','traffic'],NLP:['translator','resume','reviews'],'Generative AI':['translator','reviews'],'Deep Learning':['autopilot','translator'],TensorFlow:['autopilot'],PyTorch:['autopilot'],'Scikit-learn':['resume'],SQL:['resume'],AWS:[],Git:[], 'REST APIs':['translator','resume']};
 const ribbon=document.querySelector('.skills-ribbon'),links=ribbon.querySelector('.skill-project-links');ribbon.addEventListener('skillselect',e=>{const ids=matches[e.detail]||[];links.replaceChildren();document.querySelectorAll('.lab-card').forEach(card=>card.classList.toggle('skill-match',ids.includes(card.querySelector('[data-project]').dataset.project)));ids.forEach(id=>{const source=document.querySelector(`[data-project="${id}"]`),b=document.createElement('button');b.type='button';b.textContent=source.closest('.lab-card').querySelector('h3').textContent+' ↗';b.addEventListener('click',()=>source.click());links.append(b);});if(!ids.length)ribbon.querySelector('.skill-insight').textContent+=' A supporting skill across my workflow.';});
 // Light follows pointer on cards; existing click and keyboard detail controls remain.
 document.querySelectorAll('.certificate-card').forEach(card=>{card.addEventListener('pointermove',e=>{if(!fine.matches||reduced.matches)return;const r=card.getBoundingClientRect();card.style.setProperty('--inspection-x',(e.clientX-r.left)/r.width*100+'%');card.style.setProperty('--inspection-y',(e.clientY-r.top)/r.height*100+'%');});});
 const film=document.querySelector('.contact-title-film'),img=film.querySelector('img[data-animation]');let started=false,rippleTimer;new IntersectionObserver(entries=>{if(!entries[0].isIntersecting||started||reduced.matches)return;started=true;const begin=()=>{rippleTimer=setTimeout(()=>{if(!reduced.matches)film.classList.add('title-settled');},4400);};img.addEventListener('load',begin,{once:true});img.src=img.dataset.animation;},{threshold:.25}).observe(film);reduced.addEventListener('change',()=>{if(reduced.matches){clearTimeout(rippleTimer);film.classList.remove('title-settled');}});
 document.querySelectorAll('.connect-row').forEach(row=>{const icon=row.querySelector('.contact-social-icon');if(!icon)return;row.addEventListener('pointermove',e=>{if(!fine.matches||reduced.matches)return;const r=icon.getBoundingClientRect();icon.style.transform=`translate(${Math.max(-6,Math.min(6,(e.clientX-r.left-r.width/2)*.06))}px,${Math.max(-5,Math.min(5,(e.clientY-r.top-r.height/2)*.08))}px) rotate(-5deg)`;});row.addEventListener('pointerleave',()=>icon.style.transform='');row.addEventListener('pointerdown',()=>{if(!reduced.matches)icon.animate([{transform:'scale(1)'},{transform:'scale(.9)'},{transform:'scale(1)'}],{duration:200});});});
 const pad=document.getElementById('digit-pad'),ctx=pad.getContext('2d',{willReadFrequently:true}),result=document.getElementById('digit-result'),sample=document.getElementById('digit-sample');let drawing=false,ink=false,vector=null;
 function clear(){ctx.clearRect(0,0,192,192);ink=false;vector=null;sample.value='';result.textContent='Draw one large digit from 0–9.';}
 function position(e){const r=pad.getBoundingClientRect();return [(e.clientX-r.left)*192/r.width,(e.clientY-r.top)*192/r.height];}
 pad.addEventListener('pointerdown',e=>{e.preventDefault();drawing=true;vector=null;sample.value='';pad.setPointerCapture(e.pointerId);const [x,y]=position(e);ctx.strokeStyle='#fff';ctx.fillStyle='#fff';ctx.lineWidth=15;ctx.lineCap='round';ctx.lineJoin='round';ctx.beginPath();ctx.arc(x,y,7.5,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.moveTo(x,y);ink=true;});pad.addEventListener('pointermove',e=>{if(!drawing)return;const [x,y]=position(e);ctx.lineTo(x,y);ctx.stroke();});function end(){drawing=false;}pad.addEventListener('pointerup',end);pad.addEventListener('pointercancel',end);
 sample.addEventListener('change',()=>{if(sample.value==='')return;ctx.clearRect(0,0,192,192);vector=portfolioDigitModel.examples[Number(sample.value)].slice();vector.forEach((v,i)=>{ctx.fillStyle=`rgba(255,255,255,${v})`;ctx.fillRect(i%8*24,Math.floor(i/8)*24,24,24);});ink=true;result.textContent='Dataset sample loaded. Press Recognise.';});
 document.getElementById('digit-clear').addEventListener('click',clear);document.getElementById('digit-predict').addEventListener('click',()=>{if(!ink){result.textContent='Draw a digit or choose a sample first.';return;}let input=vector;if(!input){const pixels=ctx.getImageData(0,0,192,192).data;let l=192,t=192,r=0,b=0;for(let y=0;y<192;y++)for(let x=0;x<192;x++)if(pixels[(y*192+x)*4+3]>30){l=Math.min(l,x);r=Math.max(r,x);t=Math.min(t,y);b=Math.max(b,y);}const small=document.createElement('canvas');small.width=small.height=8;const c=small.getContext('2d',{willReadFrequently:true}),width=r-l+1,height=b-t+1,dw=Math.max(2,Math.min(6,8*width/height));c.drawImage(pad,l,t,width,height,(8-dw)/2,0,dw,8);const values=c.getImageData(0,0,8,8).data;input=Array.from({length:64},(_,i)=>values[i*4+3]/255);}const probs=portfolioDigitPredict(input),sorted=probs.map((p,i)=>({p,i})).sort((a,b)=>b.p-a.p),best=sorted[0];result.textContent=(best.p<.7?'Uncertain — best guess: ':'Prediction: ')+best.i+' · model score '+Math.round(best.p*100)+'%. Alternative: '+sorted[1].i+'.';});
});
