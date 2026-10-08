// ==========================================================================
// HIGH YA ! — Interactive 3D Cigarette Pack Engine (Three.js)
// Streetwear Avant-Garde 360° Product Viewer
// ==========================================================================

import * as THREE from 'three';

export interface ViewerTheme {
  id: string;
  name: string;
  packPrimaryColor: number;
  packSecondaryColor: number;
  packAccentColor: number;
  packRoughness: number;
  packMetalness: number;
  filterColor: number;
  filterRingColor: number;
  foilColor: number;
  ambientLightColor: number;
  glowColor: number;
}

export const VIEWER_THEMES: Record<string, ViewerTheme> = {
  bronze: {
    id: 'bronze',
    name: 'Sauvage Bronze',
    packPrimaryColor: 0x141210,     // Dark charcoal bronze
    packSecondaryColor: 0xa87932,   // Warm bronze framing
    packAccentColor: 0xd89f38,      // 3D HIGH YA ! Gold
    packRoughness: 0.35,
    packMetalness: 0.65,
    filterColor: 0xd89f38,          // Gold filter
    filterRingColor: 0xc0c0c0,      // Silver ring
    foilColor: 0xd89f38,            // Gold inner foil
    ambientLightColor: 0xffeedd,
    glowColor: 0xd89f38
  },
  cobalt: {
    id: 'cobalt',
    name: 'Cyber Cobalt',
    packPrimaryColor: 0x09111c,     // Deep midnight blue
    packSecondaryColor: 0x0e3b68,   // Cobalt framework
    packAccentColor: 0x00f0ff,      // Neon Cyan HIGH YA !
    packRoughness: 0.28,
    packMetalness: 0.75,
    filterColor: 0x0e3b68,          // Dark cobalt filter
    filterRingColor: 0x00f0ff,      // Cyan glow ring
    foilColor: 0xb0d8ff,            // Silver-blue foil
    ambientLightColor: 0xddeeff,
    glowColor: 0x00f0ff
  },
  emerald: {
    id: 'emerald',
    name: 'Hexa Emerald',
    packPrimaryColor: 0x08150d,     // Forest dark
    packSecondaryColor: 0x004d25,   // Hex Emerald frame
    packAccentColor: 0x00ff87,      // Acid Emerald HIGH YA !
    packRoughness: 0.32,
    packMetalness: 0.68,
    filterColor: 0x004d25,          // Emerald filter
    filterRingColor: 0xd89f38,      // Brass ring
    foilColor: 0x98d8aa,            // Greenish gold foil
    ambientLightColor: 0xddeedd,
    glowColor: 0x00ff87
  },
  onyx: {
    id: 'onyx',
    name: 'Obsidian Onyx VIP',
    packPrimaryColor: 0x050505,     // Ultra-deep matte onyx
    packSecondaryColor: 0x1e1e1e,   // Brushed black
    packAccentColor: 0xffd700,      // Polished 24K Gold
    packRoughness: 0.2,
    packMetalness: 0.85,
    filterColor: 0x141414,          // Onyx filter
    filterRingColor: 0xffd700,      // Pure gold ring
    foilColor: 0xffd700,            // 24K Gold foil
    ambientLightColor: 0xfff5cc,
    glowColor: 0xffd700
  }
};

export class PackViewer3D {
  private container: HTMLElement;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private animationFrameId: number | null = null;

  // 3D Objects
  private packRoot: THREE.Group;
  private lidPivot: THREE.Group;
  private cigarettesGroup: THREE.Group;
  private featuredCigarette: THREE.Group | null = null;
  private smokeParticles: THREE.Points | null = null;

  // Materials References for theme switching
  private materials = {
    packBody: new THREE.MeshStandardMaterial(),
    packFrame: new THREE.MeshStandardMaterial(),
    packLogo: new THREE.MeshStandardMaterial(),
    packFoil: new THREE.MeshStandardMaterial(),
    cigsPaper: new THREE.MeshStandardMaterial({ color: 0xf5f5f5, roughness: 0.8, metalness: 0.05 }),
    cigsFilter: new THREE.MeshStandardMaterial(),
    cigsRing: new THREE.MeshStandardMaterial(),
    cigsTobacco: new THREE.MeshStandardMaterial({ color: 0x3d2314, roughness: 0.9 })
  };

  // State
  private isOpen: boolean = false;
  private isCigaretteExtracted: boolean = false;
  private isAutoRotating: boolean = true;
  private currentThemeId: string = 'bronze';

  // Animation values
  private currentLidAngle: number = 0;
  private targetLidAngle: number = 0;
  private cigExtractionProgress: number = 0;
  private targetCigExtraction: number = 0;

  // Orbit / Interaction Controls State
  private isDragging: boolean = false;
  private previousMousePosition = { x: 0, y: 0 };
  private targetRotation = { x: 0.15, y: -0.35 };
  private currentRotation = { x: 0.15, y: -0.35 };
  private targetZoom: number = 10;
  private currentZoom: number = 10;

  constructor(container: HTMLElement) {
    this.container = container;
    this.scene = new THREE.Scene();

    // Camera setup
    const aspect = container.clientWidth / container.clientHeight;
    this.camera = new THREE.PerspectiveCamera(40, aspect, 0.1, 100);
    this.camera.position.set(0, 1.2, this.currentZoom);

    // Renderer setup
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;
    container.appendChild(this.renderer.domElement);

    // Scene Groups
    this.packRoot = new THREE.Group();
    this.lidPivot = new THREE.Group();
    this.cigarettesGroup = new THREE.Group();

    this.initLights();
    this.buildProceduralPack();
    this.buildCigarettes();
    this.buildSmokeEffect();
    this.applyTheme('bronze');

    this.setupEvents();
    this.animate();
  }

  private initLights(): void {
    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    this.scene.add(ambientLight);

    // Studio Key Light
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(5, 8, 6);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.bias = -0.0005;
    this.scene.add(keyLight);

    // Studio Fill Light
    const fillLight = new THREE.DirectionalLight(0xaaccff, 1.2);
    fillLight.position.set(-6, 3, -3);
    this.scene.add(fillLight);

    // Rim / Backlight for metallic contours
    const rimLight = new THREE.DirectionalLight(0xffd700, 1.8);
    rimLight.position.set(0, -4, -6);
    this.scene.add(rimLight);

    // Soft Shadow Floor Disc
    const floorGeo = new THREE.PlaneGeometry(16, 16);
    const floorMat = new THREE.ShadowMaterial({ opacity: 0.35 });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -2.3;
    floor.receiveShadow = true;
    this.scene.add(floor);
  }

  private createTextureCanvas(text: string, sub: string, bgColor: string, fgColor: string): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;

    // Background
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, 512, 512);

    // Diagonal decorative cyber lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
    ctx.lineWidth = 4;
    for (let i = -512; i < 1024; i += 32) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i + 512, 512);
      ctx.stroke();
    }

    // Stylized botanical leaf silhouette watermark
    ctx.save();
    ctx.translate(256, 170);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.beginPath();
    ctx.ellipse(0, 0, 80, 130, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Bold Streetwear Logo
    ctx.fillStyle = fgColor;
    ctx.font = '900 82px "Cabinet Grotesk", "Impact", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = 'rgba(0,0,0,0.8)';
    ctx.shadowBlur = 15;
    ctx.shadowOffsetX = 4;
    ctx.shadowOffsetY = 6;
    ctx.fillText('HIGH', 256, 270);
    ctx.fillText('YA !', 256, 360);

    // Subtitle Slogan
    ctx.font = '800 24px sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.letterSpacing = '6px';
    ctx.fillText(sub, 256, 440);

    const texture = new THREE.CanvasTexture(canvas);
    texture.anisotropy = 8;
    return texture;
  }

  private buildProceduralPack(): void {
    // Proportions realistic flip-top box: Width: 2.8, Height: 4.4, Depth: 1.3
    const width = 2.8;
    const baseHeight = 3.1;
    const lidHeight = 1.3;
    const depth = 1.3;

    // --- PACK LOWER BASE ---
    const baseGeo = new THREE.BoxGeometry(width, baseHeight, depth);
    const baseMesh = new THREE.Mesh(baseGeo, this.materials.packBody);
    baseMesh.position.y = -0.65;
    baseMesh.castShadow = true;
    baseMesh.receiveShadow = true;
    this.packRoot.add(baseMesh);

    // Front Emblem Plate
    const plateGeo = new THREE.BoxGeometry(width * 0.88, baseHeight * 0.78, 0.08);
    const plateTexture = this.createTextureCanvas('HIGH YA !', 'ÉNERGIE SAUVAGE', '#121212', '#d89f38');
    const plateMat = new THREE.MeshStandardMaterial({
      map: plateTexture,
      roughness: 0.3,
      metalness: 0.6
    });
    const plateMesh = new THREE.Mesh(plateGeo, plateMat);
    plateMesh.position.set(0, -0.65, depth / 2 + 0.04);
    plateMesh.castShadow = true;
    this.packRoot.add(plateMesh);

    // Side Cyber/Ribbed trims
    const trimGeo = new THREE.BoxGeometry(0.12, baseHeight + 0.1, depth + 0.06);
    const trimLeft = new THREE.Mesh(trimGeo, this.materials.packFrame);
    trimLeft.position.set(-width / 2 + 0.04, -0.65, 0);
    trimLeft.castShadow = true;
    this.packRoot.add(trimLeft);

    const trimRight = new THREE.Mesh(trimGeo, this.materials.packFrame);
    trimRight.position.set(width / 2 - 0.04, -0.65, 0);
    trimRight.castShadow = true;
    this.packRoot.add(trimRight);

    // Internal Foil Lining (Visible through pack opening)
    const foilGeo = new THREE.BoxGeometry(width * 0.94, 1.2, depth * 0.92);
    const foilMesh = new THREE.Mesh(foilGeo, this.materials.packFoil);
    foilMesh.position.set(0, 0.9, 0);
    this.packRoot.add(foilMesh);

    // --- HINGED FLIP-TOP LID ---
    // Pivot positioned at top back edge
    this.lidPivot.position.set(0, 0.9, -depth / 2);

    const lidGeo = new THREE.BoxGeometry(width + 0.02, lidHeight, depth + 0.02);
    const lidMesh = new THREE.Mesh(lidGeo, this.materials.packBody);
    // Offset lid center relative to pivot
    lidMesh.position.set(0, lidHeight / 2, depth / 2);
    lidMesh.castShadow = true;
    this.lidPivot.add(lidMesh);

    // Lid Top Bevel Ridge
    const ridgeGeo = new THREE.BoxGeometry(width * 0.9, 0.15, depth * 0.85);
    const ridgeMesh = new THREE.Mesh(ridgeGeo, this.materials.packFrame);
    ridgeMesh.position.set(0, lidHeight + 0.05, depth / 2);
    this.lidPivot.add(ridgeMesh);

    this.packRoot.add(this.lidPivot);
    this.packRoot.add(this.cigarettesGroup);
    this.scene.add(this.packRoot);
  }

  private buildCigarettes(): void {
    const cigRadius = 0.155;
    const cigHeight = 3.6;
    const filterHeight = 1.1;
    const ringHeight = 0.08;
    const bodyHeight = cigHeight - filterHeight;

    const rows = 3;
    const cols = 7;
    const spacingX = 0.36;
    const spacingZ = 0.34;
    const startX = -((cols - 1) * spacingX) / 2;
    const startZ = -((rows - 1) * spacingZ) / 2;

    let cigIndex = 0;

    for (let r = 0; r < rows; r++) {
      const rowCols = r === 1 ? cols - 1 : cols;
      const rowOffset = r === 1 ? spacingX / 2 : 0;

      for (let c = 0; c < rowCols; c++) {
        const cig = new THREE.Group();

        // White paper shaft
        const bodyGeo = new THREE.CylinderGeometry(cigRadius, cigRadius, bodyHeight, 16);
        const bodyMesh = new THREE.Mesh(bodyGeo, this.materials.cigsPaper);
        bodyMesh.position.y = bodyHeight / 2 - 1.2;
        bodyMesh.castShadow = true;
        cig.add(bodyMesh);

        // Gold/Metallic separator ring
        const ringGeo = new THREE.CylinderGeometry(cigRadius + 0.003, cigRadius + 0.003, ringHeight, 16);
        const ringMesh = new THREE.Mesh(ringGeo, this.materials.cigsRing);
        ringMesh.position.y = bodyHeight - 1.2 + ringHeight / 2;
        cig.add(ringMesh);

        // Luxury Filter Tip
        const filterGeo = new THREE.CylinderGeometry(cigRadius + 0.002, cigRadius + 0.002, filterHeight, 16);
        const filterMesh = new THREE.Mesh(filterGeo, this.materials.cigsFilter);
        filterMesh.position.y = bodyHeight - 1.2 + ringHeight + filterHeight / 2;
        filterMesh.castShadow = true;
        cig.add(filterMesh);

        // Position inside pack
        const xPos = startX + c * spacingX + rowOffset;
        const zPos = startZ + r * spacingZ;
        cig.position.set(xPos, 0.4, zPos);

        // Pick one front-center cigarette to be the interactive "featured" cigarette
        if (r === 2 && c === 3) {
          this.featuredCigarette = cig;
        }

        this.cigarettesGroup.add(cig);
        cigIndex++;
      }
    }
  }

  private buildSmokeEffect(): void {
    const particleCount = 45;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const opacities = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 0.3;
      positions[i * 3 + 1] = Math.random() * 2.5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 0.3;
      opacities[i] = Math.random();
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.18,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending
    });

    this.smokeParticles = new THREE.Points(geometry, material);
    this.smokeParticles.visible = false;
    this.scene.add(this.smokeParticles);
  }

  public applyTheme(themeId: string): void {
    const theme = VIEWER_THEMES[themeId] || VIEWER_THEMES.bronze;
    this.currentThemeId = themeId;

    this.materials.packBody.color.setHex(theme.packPrimaryColor);
    this.materials.packBody.roughness = theme.packRoughness;
    this.materials.packBody.metalness = theme.packMetalness;

    this.materials.packFrame.color.setHex(theme.packSecondaryColor);
    this.materials.packFrame.roughness = 0.25;
    this.materials.packFrame.metalness = 0.85;

    this.materials.packFoil.color.setHex(theme.foilColor);
    this.materials.packFoil.roughness = 0.3;
    this.materials.packFoil.metalness = 0.9;

    this.materials.cigsFilter.color.setHex(theme.filterColor);
    this.materials.cigsFilter.roughness = 0.35;
    this.materials.cigsFilter.metalness = 0.65;

    this.materials.cigsRing.color.setHex(theme.filterRingColor);
    this.materials.cigsRing.roughness = 0.2;
    this.materials.cigsRing.metalness = 0.9;
  }

  public toggleOpen(): boolean {
    this.isOpen = !this.isOpen;
    this.targetLidAngle = this.isOpen ? -Math.PI * 0.68 : 0;
    
    // If closing, retract any extracted cigarette
    if (!this.isOpen && this.isCigaretteExtracted) {
      this.toggleExtractCigarette();
    }
    return this.isOpen;
  }

  public toggleExtractCigarette(): boolean {
    if (!this.isOpen) {
      this.toggleOpen();
    }
    this.isCigaretteExtracted = !this.isCigaretteExtracted;
    this.targetCigExtraction = this.isCigaretteExtracted ? 1 : 0;
    
    if (this.smokeParticles) {
      this.smokeParticles.visible = this.isCigaretteExtracted;
    }
    return this.isCigaretteExtracted;
  }

  public toggleAutoRotate(): boolean {
    this.isAutoRotating = !this.isAutoRotating;
    return this.isAutoRotating;
  }

  public resetCamera(): void {
    this.targetRotation.x = 0.15;
    this.targetRotation.y = -0.35;
    this.targetZoom = 10;
  }

  private setupEvents(): void {
    const el = this.renderer.domElement;

    // Mouse Controls
    el.addEventListener('mousedown', (e) => {
      this.isDragging = true;
      this.previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mousemove', (e) => {
      if (!this.isDragging) return;
      const deltaX = e.clientX - this.previousMousePosition.x;
      const deltaY = e.clientY - this.previousMousePosition.y;

      this.targetRotation.y += deltaX * 0.008;
      this.targetRotation.x += deltaY * 0.008;
      // Clamp vertical tilt
      this.targetRotation.x = Math.max(-0.6, Math.min(0.8, this.targetRotation.x));

      this.previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mouseup', () => {
      this.isDragging = false;
    });

    // Touch Controls
    let touchStartDist = 0;
    el.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        this.isDragging = true;
        this.previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      } else if (e.touches.length === 2) {
        touchStartDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
      }
    }, { passive: true });

    el.addEventListener('touchmove', (e) => {
      if (this.isDragging && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - this.previousMousePosition.x;
        const deltaY = e.touches[0].clientY - this.previousMousePosition.y;

        this.targetRotation.y += deltaX * 0.01;
        this.targetRotation.x += deltaY * 0.01;
        this.targetRotation.x = Math.max(-0.6, Math.min(0.8, this.targetRotation.x));

        this.previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      } else if (e.touches.length === 2) {
        const dist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        const factor = (touchStartDist - dist) * 0.02;
        this.targetZoom = Math.max(6, Math.min(14, this.targetZoom + factor));
        touchStartDist = dist;
      }
    }, { passive: true });

    el.addEventListener('touchend', () => {
      this.isDragging = false;
    });

    // Zoom via Wheel
    el.addEventListener('wheel', (e) => {
      e.preventDefault();
      this.targetZoom = Math.max(6, Math.min(14, this.targetZoom + e.deltaY * 0.006));
    }, { passive: false });

    // Click on canvas to toggle pack or pull cigarette
    el.addEventListener('click', (e) => {
      // If was dragging significantly, ignore click
      const rect = el.getBoundingClientRect();
      const mouse = new THREE.Vector2(
        ((e.clientX - rect.left) / el.clientWidth) * 2 - 1,
        -((e.clientY - rect.top) / el.clientHeight) * 2 + 1
      );
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, this.camera);
      const intersects = raycaster.intersectObjects([this.packRoot], true);

      if (intersects.length > 0) {
        if (!this.isOpen) {
          this.toggleOpen();
        } else {
          this.toggleExtractCigarette();
        }
      }
    });

    // Window Resize Handler
    window.addEventListener('resize', () => {
      if (!this.container) return;
      const width = this.container.clientWidth;
      const height = this.container.clientHeight;
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
    });
  }

  private animate = (): void => {
    this.animationFrameId = requestAnimationFrame(this.animate);

    // Auto-rotation when not interacting
    if (this.isAutoRotating && !this.isDragging) {
      this.targetRotation.y += 0.004;
    }

    // Smooth rotation interpolation
    this.currentRotation.x = THREE.MathUtils.lerp(this.currentRotation.x, this.targetRotation.x, 0.08);
    this.currentRotation.y = THREE.MathUtils.lerp(this.currentRotation.y, this.targetRotation.y, 0.08);
    this.packRoot.rotation.x = this.currentRotation.x;
    this.packRoot.rotation.y = this.currentRotation.y;

    // Smooth zoom interpolation
    this.currentZoom = THREE.MathUtils.lerp(this.currentZoom, this.targetZoom, 0.08);
    this.camera.position.z = this.currentZoom;

    // Smooth Lid opening interpolation
    this.currentLidAngle = THREE.MathUtils.lerp(this.currentLidAngle, this.targetLidAngle, 0.1);
    this.lidPivot.rotation.x = this.currentLidAngle;

    // Smooth Featured Cigarette Extraction
    this.cigExtractionProgress = THREE.MathUtils.lerp(this.cigExtractionProgress, this.targetCigExtraction, 0.08);
    if (this.featuredCigarette) {
      // Rise up by 1.4 units and tilt forward slightly
      this.featuredCigarette.position.y = 0.4 + this.cigExtractionProgress * 1.5;
      this.featuredCigarette.position.z = 0.34 + this.cigExtractionProgress * 0.4;
      this.featuredCigarette.rotation.x = this.cigExtractionProgress * 0.2;

      // Animate smoke particles near the cigarette tip
      if (this.smokeParticles && this.isCigaretteExtracted) {
        const positions = this.smokeParticles.geometry.attributes.position.array as Float32Array;
        const count = positions.length / 3;
        for (let i = 0; i < count; i++) {
          positions[i * 3 + 1] += 0.02; // rise up
          if (positions[i * 3 + 1] > 3.0) {
            positions[i * 3 + 1] = 1.8;
            positions[i * 3] = (Math.random() - 0.5) * 0.2;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 0.2;
          }
        }
        this.smokeParticles.geometry.attributes.position.needsUpdate = true;
        this.smokeParticles.position.copy(this.packRoot.position);
        this.smokeParticles.position.y += 0.6;
      }
    }

    this.renderer.render(this.scene, this.camera);
  };

  public destroy(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
    this.renderer.dispose();
  }
}
