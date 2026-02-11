export interface Product {
  id: string;
  name: string;
  description?: string;
  specs?: Record<string, string>;
  benefits?: string[];
  image?: string;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  products: Product[];
}

export interface SolutionType {
  id: string;
  name: string;
  description?: string;
  categories: Category[];
}

export const solutionsData: SolutionType[] = [
  {
    id: 'dental',
    name: 'Dental',
    description: 'Advanced dental solutions for modern clinics and laboratories.',
    categories: [
      {
        id: 'implants',
        name: 'Implants',
        description: 'Our implant solutions are designed to support predictable, long-term clinical success across a wide range of indications. Zircon provides bone-level implant systems engineered for stability, biological integration, and prosthetic flexibility—supporting both routine and complex implant cases.',
        products: [
          { 
            id: 'superline-11-bone-level', 
            name: 'Superline 11 (Bone Level)',
            description: 'A high-performance bone-level implant system designed for excellent primary stability and long-term biological integration. Supports predictable outcomes across a wide range of implant indications.'
          },
          { 
            id: 'superline-bone-level', 
            name: 'Superline (Bone Level)',
            description: 'A reliable bone-level implant system designed for excellent primary stability and long-term biological integration. Supports predictable outcomes across a wide range of implant indications.'
          },
          { 
            id: 'implantium-bone-level', 
            name: 'Implantium (Bone Level)',
            description: 'A clinically proven bone-level implant offering high stability and prosthetic flexibility. Engineered to support durable results in both simple and complex cases.'
          },
          { 
            id: 'nr-line-bone-level', 
            name: 'NR Line (Bone Level)',
            description: 'A reliable bone-level implant system optimised for controlled placement and consistent osseointegration. Designed to meet everyday clinical implant requirements.'
          },
          { 
            id: 'simpleline-2-tissue-level', 
            name: 'Simpleline 2 (Tissue Level)',
            description: 'A tissue-level implant that simplifies soft tissue management while maintaining strong functional and aesthetic outcomes. Ideal for efficient restorative workflows.'
          },
          { 
            id: 'slimline-one-body-implant', 
            name: 'Slimline (One Body Implant)',
            description: 'A one-piece implant solution designed for minimally invasive procedures. Supports streamlined treatment protocols with reduced surgical complexity.'
          },
          { 
            id: 'bright-bone-level', 
            name: 'Bright (Bone Level)',
            description: 'A bone-level implant system developed to enhance stability and precision in implant placement. Suitable for cases requiring controlled load distribution.'
          },
          { 
            id: 'bright-tissue-level', 
            name: 'Bright (Tissue Level)',
            description: 'A tissue-level implant designed to support healthy soft tissue response and simplified prosthetic handling. Balances surgical efficiency with long-term performance.'
          },
          { 
            id: 'dynamic-abutments', 
            name: 'Dynamic Abutments',
            description: 'Advanced abutment solutions that allow precise angulation correction and prosthetic adaptability. Designed to enhance restorative flexibility and aesthetic outcomes.'
          },
          { id: 'surgical-motor', name: 'Surgical Motor' },
          { id: 'sinus-kit', name: 'Sinus Kit' },
          { id: 'help-kit', name: 'Help Kit' },
          { id: 'osteotome-kit', name: 'Osteotome Kit' },
          { id: 'trephine-kit', name: 'Trephine Kit' },
          { id: 'surgical-kit', name: 'Surgical Kit' },
          { id: 'prosthetic-kit', name: 'Prosthetic Kit' },
          { id: 'ridge-spreader-kit', name: 'Ridge Spreader Kit' },
          { id: 'implant-guide-kit', name: 'Implant Guide Kit' },
          { id: 'planning-kit', name: 'Planning Kit' },
          { id: 'polymer-guide-kit', name: 'Polymer Guide Kit' },
          { id: 'gbr-kit', name: 'GBR Kit' },
          { id: 'drill-stopper-kit', name: 'Drill Stopper Kit' },
        ]
      },
      {
        id: 'dental-consumables',
        name: 'Dental Consumables',
        products: [
          { id: 'sutures', name: 'Sutures' },
          { id: 'impression-materials', name: 'Impression Materials' },
          { id: 'universal-etchant', name: 'Universal Etchant' },
          { id: 'resin-cement', name: 'Resin Cement' },
          { id: 'primer', name: 'Primer' },
          { id: 'high-low-flow', name: 'High/Low Flow' },
          { id: 'core', name: 'Core' },
          { id: 'bulk-flow', name: 'Bulk Flow' },
          { id: 'bond-universal', name: 'Bond Universal' },
          { id: 'gloves', name: 'Gloves' },
          { id: 'mask', name: 'Mask' },
          { id: 'sterilization-wipes', name: 'Sterilization Wipes' },
          { id: 'sterilization-spray', name: 'Sterilization Spray' },
          { id: 'sterilization-liquid', name: 'Sterilization Liquid' },
        ]
      },
      {
        id: 'regeneration',
        name: 'Regeneration',
        products: [
          { id: 'allograft', name: 'Allograft' },
          { id: 'xenograft', name: 'Xenograft' },
          { id: 'collagen-membrane', name: 'Collagen Membrane' },
          { id: 'syringe-bone', name: 'Syringe Bone' },
          { id: 'collagen-graft', name: 'Collagen Graft' },
          { id: 'bone-block', name: 'Bone Block' },
          { id: 'membrane-pins', name: 'Membrane Pins' },
          { id: 'membrane-screws', name: 'Membrane Screws' },
        ]
      },
      {
        id: 'endodontics',
        name: 'Endodontics',
        products: [
          { id: 'endo-files', name: 'Endo Files' },
          { id: 'mta-sealer', name: 'MTA Sealer' },
          { id: 'mta-capping', name: 'MTA Capping' },
          { id: 'endo-sealer', name: 'Endo Sealer' },
          { id: 'apex-locator', name: 'Apex Locator' },
        ]
      },
      {
        id: 'dental-equipment',
        name: 'Dental Equipment',
        products: [
          { id: 'dental-chairs', name: 'Dental Chairs' },
          { id: 'cbct', name: 'CBCT' },
          { id: 'x-ray', name: 'X-Ray' },
          { id: 'surgical-motor-equip', name: 'Surgical Motor' },
          { id: 'autoclave', name: 'Autoclave' },
          { id: 'cad-cam', name: 'CAD/CAM' },
          { id: 'cad-cam-chairside', name: 'CAD/CAM (Chairside)' },
          { id: 'mill-metal', name: 'Mill Metal' },
          { id: 'desk-scanner', name: 'Desk Scanner' },
          { id: 'iox', name: 'IOX' },
          { id: 'ez-check', name: 'EZ Check' },
          { id: '3d-printer-equip', name: '3D Printer' },
          { id: 'ict-injection', name: 'ICT Injection' },
          { id: 'curing-light', name: 'Curing Light' },
        ]
      },
      {
        id: 'digital',
        name: 'Digital',
        products: [
          { id: 'ios-scanner', name: 'IOS Scanner' },
          { id: 'guided-surgery-implant', name: 'Guided Surgery (Implant)' },
          { id: 'guided-surgery-prosthetics', name: 'Guided Surgery (Prosthetics)' },
          { id: 'guided-surgery-bone', name: 'Guided Surgery (Bone)' },
          { id: 'customized-implants', name: 'Customized Implants' },
          { id: 'customized-mesh-plates', name: 'Customized Mesh Plates' },
          { id: 'clear-aligners', name: 'Clear Aligners' },
          { id: 'guided-kits', name: 'Guided kits' },
          { id: 'smile-design', name: 'Smile Design' },
          { id: '3d-printer-digital', name: '3D Printer' },
        ]
      },
      {
        id: 'dental-lab',
        name: 'Dental Lab',
        products: [
          { id: 'zirconia-blocks', name: 'Zirconia Blocks' },
          { id: 'porcelain-powder', name: 'Porcelain Powder' },
          { id: 'stain-kit', name: 'Stain Kit' },
          { id: 'dipping-liquid', name: 'Dipping Liquid' },
          { id: 'coloring-liquid', name: 'Coloring Liquid' },
          { id: 'alginate', name: 'Alginate' },
          { id: 'modeling-wax', name: 'Modeling Wax' },
          { id: 'modeling-resin', name: 'Modeling Resin' },
          { id: 'acrylic-teeth', name: 'Acrylic Teeth' },
          { id: 'milling-burs', name: 'Milling Burs' },
          { id: 'lab-burs', name: 'Lab Burs' },
        ]
      },
      {
        id: 'mouth-care',
        name: 'Mouth Care',
        products: [
          { id: 'tooth-paste', name: 'Tooth Paste' },
          { id: 'tooth-brushes', name: 'Tooth Brushes' },
          { id: 'interdental-brushes', name: 'Interdental Brushes' },
          { id: 'dental-floss', name: 'Dental Floss' },
          { id: 'mouth-wash', name: 'Mouth Wash' },
          { id: 'chlorhexidine', name: 'Chlorhexidine' },
        ]
      },
    ]
  },
  {
    id: 'medical',
    name: 'Medical',
    description: 'High-quality medical supplies and equipment for healthcare providers.',
    categories: [
      {
        id: 'general-consumables',
        name: 'General Consumables',
        products: [
          { id: 'examination-gloves', name: 'Examination Gloves' },
          { id: 'surgical-gloves', name: 'Surgical Gloves' },
          { id: 'surgical-gowns', name: 'Surgical Gowns' },
          { id: 'isolation-gowns', name: 'Isolation Gowns' },
          { id: 'syringe', name: 'Syringe' },
          { id: 'diapers', name: 'Diapers' },
          { id: 'foley-catheters', name: 'Foley Catheters' },
          { id: 'bandage', name: 'Bandage' },
          { id: 'suction-catheters', name: 'Suction Catheters' },
        ]
      },
      {
        id: 'or-consumables',
        name: 'OR Consumables',
        products: [
          { id: 'kit-packs', name: 'Kit packs' },
          { id: 'drapes', name: 'Drapes' },
          { id: 'surgical-suction', name: 'Surgical Suction' },
          { id: 'sterile-resorbable-hemostat', name: 'Sterile resorbable Hemostat' },
        ]
      },
      {
        id: 'disinfectant',
        name: 'Disinfectant',
        products: [
          { id: 'whips', name: 'Whips' },
          { id: 'spray', name: 'Spray' },
          { id: 'liquid', name: 'Liquid' },
          { id: 'enzamatic-solution', name: 'Enzamatic solution' },
          { id: 'sanitizers', name: 'Sanitizers' },
          { id: 'antiseptic', name: 'Antiseptic' },
        ]
      },
      {
        id: 'homecare',
        name: 'Homecare',
        products: [
          { id: 'compression-therapy', name: 'Compression Therapy' },
          { id: 'intermetent-catheters', name: 'Intermetent Catheters' },
          { id: 'ostomy', name: 'Ostomy' },
          { id: 'anal-irrigation', name: 'Anal irrigation' },
        ]
      },
    ]
  }
];
