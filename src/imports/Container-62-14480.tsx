import imgImage12 from "figma:asset/2e956ec405402943452bcba07860ec9ace663208.png";

export default function Container() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative size-full" data-name="Container">
      <div className="h-[399px] relative shrink-0 w-[500px]" data-name="image 12">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage12} />
      </div>
    </div>
  );
}