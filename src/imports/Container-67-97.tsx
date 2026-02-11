import svgPaths from "./svg-l6hfdvx93j";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#070707] text-[48px] text-center whitespace-nowrap">
        <p>
          <span className="leading-[48px]">{`Implant Design `}</span>
          <span className="leading-[48px] text-[#070707]">Highlights</span>
        </p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[20px] text-center whitespace-nowrap">
        <p className="leading-[28px]">Every detail engineered for optimal clinical outcomes.</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[768px] relative shrink-0 w-[768px]" data-name="Container">
      <Heading />
      <Container2 />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p5b81480} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p216d1100} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p16d243c0} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1de70ff0} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p9e82d00} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p17e30700} id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1169ca00} id="Vector_7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1d9c5d00} id="Vector_8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pdb85100} id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-gradient-to-r content-stretch flex from-[#dd005c] items-center justify-center relative rounded-[100px] shrink-0 size-[48px] to-[#0088b3]" data-name="Overlay">
      <Svg />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <div className="h-0 relative shrink-0 w-[362px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 362 1">
            <line id="Line 1" stroke="var(--stroke-0, #EBEBEB)" x2="362" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="font-['Montserrat:Medium',sans-serif] leading-[32px] min-w-full not-italic relative shrink-0 text-[#070707] text-[24px] w-[min-content] whitespace-pre-wrap">
        <p className="mb-0">Double-Threaded Tapered</p>
        <p>Body</p>
      </div>
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#454545] text-[14px] w-[min-content] whitespace-pre-wrap">Provides self-tapping capability and excellent primary stability in compromised bone conditions.</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]">
      <div aria-hidden="true" className="absolute border border-[#dd005c] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
        <Overlay />
        <Frame />
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p1e4c7e00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3c6311f0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3ac14500} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-gradient-to-r content-stretch flex from-[#dd005c] items-center justify-center relative rounded-[100px] shrink-0 size-[48px] to-[#0088b3]" data-name="Overlay">
      <Svg1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <div className="h-0 relative shrink-0 w-[362px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 362 1">
            <line id="Line 1" stroke="var(--stroke-0, #EBEBEB)" x2="362" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="font-['Montserrat:Medium',sans-serif] leading-[32px] min-w-full not-italic relative shrink-0 text-[#070707] text-[24px] w-[min-content] whitespace-pre-wrap">Optimal Thread Design</p>
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#454545] text-[14px] w-[min-content] whitespace-pre-wrap">Square-shaped threads with optimized pitch provide maximum bone-to-implant contact (BIC) and ensure long-term stability.</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[24px]">
      <div aria-hidden="true" className="absolute border border-[#dd005c] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
        <Overlay1 />
        <Frame2 />
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p2b642900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8.12 8.12L12 12" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M20 4.00012L8.12 15.8801" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p4141780} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M14.8 14.8L20 20" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Stethoscope() {
  return (
    <div className="bg-gradient-to-r content-stretch flex from-[#dd005c] items-center justify-center overflow-clip px-px py-[2px] relative rounded-[48px] shrink-0 size-[48px] to-[#0088b3]" data-name="Stethoscope">
      <Svg2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <div className="h-0 relative shrink-0 w-[362px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 362 1">
            <line id="Line 1" stroke="var(--stroke-0, #EBEBEB)" x2="362" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="font-['Montserrat:Medium',sans-serif] leading-[32px] min-w-full not-italic relative shrink-0 text-[#070707] text-[24px] w-[min-content] whitespace-pre-wrap">S.Long Cutting Flutes</p>
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#454545] text-[14px] w-[min-content] whitespace-pre-wrap">Allows self-tapping in dense bone, reduces heat generation during placement, and provides tactile feedback.</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[24px]">
      <div aria-hidden="true" className="absolute border border-[#dd005c] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
        <Stethoscope />
        <Frame3 />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame1 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame6 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame5 />
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative size-full" data-name="Container">
      <Container1 />
      <Frame4 />
    </div>
  );
}