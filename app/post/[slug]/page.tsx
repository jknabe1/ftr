import { Post } from "@/app/lib/interface";
import { client } from "@/app/lib/sanity";
import { urlFor } from "@/app/lib/sanityImageUrl";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

async function getData(slug: string) {
  const query = `*[_type == "post" && slug.current == "${slug}"][0]`;

  const data = await client.fetch(query);

  return data;
}

export default async function SlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = (await getData(params.slug)) as Post;

  const PortableTextComponent = {
    types: {
      image: ({ value }: { value: any }) => (
        <Image
          src={urlFor(value).url()}
          alt={data.title}
          className="rounded-lg"
          width={800}
          height={800}
        />
      ),
    },
  };

  return (
    <div className="flex">
<aside className="w-1/5 p-8 bg-gray-200 flex flex-col items-center">
  <div className="sticky top-0 text-center">
    <h2 className="text-lg font-bold mb-4">FREAK MAG</h2>
    <hr className="border-t border-gray-400 my-6 w-full" />
    <p className="text-xs mb-8">Editorial department</p>
    <hr className="border-t border-gray-400 my-6 w-full" />
    <p className="text-xs font-bold mb-2"> 
    {new Date(data._createdAt).toISOString().split("T")[0]}
    </p>
    <hr className="border-t border-gray-400 my-6 w-full" />
    <h3 className="text-md mb-4">Articles</h3>
  </div>
</aside>
<main className="w-4/5 relative">
  <article>
    <Image
      alt="Article Image"
      className="w-full h-auto"
      height="768"
      src="/placeholder.svg"
      style={{
        aspectRatio: "1602/768",
        objectFit: "cover",
      }}
      width="1602"
    />
    <div
      className="absolute bottom-0 left-0 p-8 bg-white bg-opacity-60"
      style={{
        width: "50%",
      }}
    >
      <span className="text-2xs uppercase tracking-widest text-gray-500">#LIFE STYLE</span>
      <h1 className="text-3xl font-bold my-4">
        {data.title}
      </h1>
      <div className="text-xs text-gray-600">
        <p>Photo/Text: Takao_okb</p>
        <p>Edit: FREAK MAG.</p>
      </div>
    </div>
    <div className="divide-y divide-gray-200 pb-7 dark:divide-gray-700 xl:divide-y-0">
        <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
          <div className="prose max-w-none pb-8 pt-10 dark:prose-invert prose-lg">
            <PortableText
              value={data.content}
              components={PortableTextComponent}
            />
          </div>
        </div>
      </div>
  </article>
</main>
</div>

  );
}