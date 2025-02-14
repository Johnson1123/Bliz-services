"use client";
import Herosection from "@/components/large/Herosection";
import Conatainer from "@/components/layout/Conatainer";

export default function Page() {
  return (
    <div className="h-auto">
      <Herosection />
      <Conatainer>
        <p className="bg-red-500">Hello</p>
      </Conatainer>
    </div>
  );
}
