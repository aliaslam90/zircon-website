import imgImage12 from "figma:asset/164a1c337866b5ab0f36e75f9cb75d06351e34a6.png";

export default function Container() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative size-full" data-name="Container">
      <div className="h-[399px] relative shrink-0 w-[500px]" data-name="image 12">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage12} />
      </div>
    </div>
  );
}