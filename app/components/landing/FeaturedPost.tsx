import { Badge } from "@/app/components/ui/badge"
import { Button } from "@/app/components/ui/button"
import Image from "next/image"

export function FeaturedPost() {
  return (
    <div className="relative bg-[#bd1e59] h-[500px]">
      <Image
        alt="Romy Lee"
        className="object-cover w-full h-full"
        height="500"
        src=""
        style={{
          aspectRatio: "4/3",
          objectFit: "cover",
        }}
        width="1522"
      />
      <div className="absolute inset-0 flex flex-col justify-between p-8">
        <Badge className="self-start bg-white text-black border border-black" variant="secondary">
          Style
        </Badge>
        <div className="bg-white border-4 border-black">
          <h1 className="text-6xl font-bold text-black p-4">ROMY LEE: YOUR INNER HEDONIST</h1>
          <Button className="mt-4 border-x-4 border-black">
            Read Story
          </Button>
        </div>
      </div>
    </div>
  )
}
