import svgPaths from "./svg-whi5wiz1cm";
import imgImage13 from "figma:asset/b6e38249502522d7aac2bb634bd51bfcaa37dd22.png";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#070707] text-[48px] whitespace-nowrap">
        <p>
          <span className="leading-[48px]">{`Clinically Proven `}</span>
          <span className="leading-[48px] text-[#070707]">Surface Technology</span>
        </p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black w-full">
        <p className="leading-[32.5px] whitespace-pre-wrap">S.L.A surface treatment provides excellent biocompatibility and allows for faster osseointegration and long-term stability.</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Container2 />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p1d59db00} id="Vector" stroke="var(--stroke-0, #0542BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(5,66,189,0.1)] content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <Svg />
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0542bd] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">S.L.A SURFACE TREATMENT</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323231] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">Enhanced Osseointegration</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black w-full">
        <p className="leading-[26px] whitespace-pre-wrap">The micro-rough surface created by sandblasting and acid etching promotes rapid bone cell attachment and growth, ensuring a strong biological bond.</p>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-[13px] py-[5px] relative rounded-[9999px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(5,66,189,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0542bd] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Faster Healing</p>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-[13px] py-[5px] relative rounded-[9999px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(5,66,189,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0542bd] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Higher Success Rate</p>
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-[13px] py-[5px] relative rounded-[9999px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(5,66,189,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0542bd] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Proven Results</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-wrap gap-[0px_12px] items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder1 />
      <BackgroundBorder2 />
      <BackgroundBorder3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="Container">
      <Overlay />
      <Heading1 />
      <Container6 />
      <Container7 />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <Container5 />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="flex-[1_0_0] h-[286px] min-h-px min-w-px relative rounded-[24px]" data-name="Background+Border" style={{ backgroundImage: "linear-gradient(161.606deg, rgb(227, 240, 250) 0%, rgb(255, 255, 255) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[25px] relative size-full">
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="content-stretch flex h-[236px] items-center justify-center relative rounded-[10.667px] shrink-0" data-name="Background" style={{ backgroundImage: "linear-gradient(144.095deg, rgba(5, 66, 189, 0.2) 0%, rgba(0, 255, 255, 0.2) 100%)" }}>
      <div className="aspect-[500/362] h-full relative shrink-0" data-name="image 13">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage13} />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <Background />
      </div>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="content-stretch flex flex-col items-start p-[25px] relative rounded-[24px] shrink-0" data-name="Background+Border" style={{ backgroundImage: "linear-gradient(142.74deg, rgb(227, 240, 250) 0%, rgb(255, 255, 255) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container8 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full">
      <BackgroundBorder />
      <BackgroundBorder4 />
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.pdb17300} id="Vector" stroke="var(--stroke-0, #A4D037)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2f6e8c0} id="Vector_2" stroke="var(--stroke-0, #A4D037)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p32c0b4c0} id="Vector_3" stroke="var(--stroke-0, #A4D037)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(164,208,55,0.2)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Overlay">
      <Svg1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] justify-center relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <p className="leading-[28px]">Micro-Structure</p>
      </div>
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] justify-center min-w-full relative shrink-0 text-[#d3d3d3] text-[14px] w-[min-content]">
        <p className="leading-[20px] whitespace-pre-wrap">Optimized surface roughness for maximum bone contact area.</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="Background" style={{ backgroundImage: "linear-gradient(164.792deg, rgb(5, 66, 189) 0%, rgb(2, 26, 76) 100%)" }}>
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
        <Overlay1 />
        <Frame />
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p3f3d8e00} id="Vector" stroke="var(--stroke-0, #00FFFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Overlay">
      <Svg2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] justify-center relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <p className="leading-[28px]">Biocompatibility</p>
      </div>
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] justify-center min-w-full relative shrink-0 text-[#bfdbfe] text-[14px] w-[min-content]">
        <p className="leading-[20px] whitespace-pre-wrap">Excellent tissue response with minimal inflammation.</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="Background" style={{ backgroundImage: "linear-gradient(164.792deg, rgb(5, 66, 189) 0%, rgb(2, 26, 76) 100%)" }}>
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
        <Overlay2 />
        <Frame1 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Background1 />
      <Background2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Frame2 />
      <Container9 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative size-full" data-name="Container">
      <Container1 />
      <Container3 />
    </div>
  );
}