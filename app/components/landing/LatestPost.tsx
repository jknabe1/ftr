import Link from "next/link";
import { Post } from "../../lib/interface";
import { client } from "../../lib/sanity";
import Image from "next/image";

async function getData() {
  const query = `*[_type == "post"]`;

  const data = await client.fetch(query);

  return data;
}

export default async function LatestPost2() {
  const data = (await getData()) as Post[];

  return (
    <div>
    <div className="border-black border-b-4">    
    <div className="divide-y divide-gray-200 dark:divide-gray-700 pt-16">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-black sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Det senaste
        </h1>
      </div>
        {data.map((post) => ( 
    <section key={post._id} className="w-full">
      <main className="container mx-auto px-4 md:px-6 py-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Top Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Image
                alt={post.title}
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src={post.image}
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                {post.overview}
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" href={`/post/${post.slug.current}`}
                prefetch>
                Läs mer
              </Link>
            </div>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Culture</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <Image
                alt={post.title}
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src={post.image}
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">{post.title}</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                {post.overview}
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" href={`/post/${post.slug.current}`}
                prefetch>
                Läs mer
              </Link>
            </div>
          </div>
        </section>
      </main>
    </section>
        ))}
    </div>
    </div>
    </div>
  );
}

