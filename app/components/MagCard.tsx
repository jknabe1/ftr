import React from 'react'
import Image from "next/image";
import Link from "next/link";

const MagCard = () => {
  return (
    <div>

<section className="w-full py-12 border-b-4 border-black">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <Image
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden object-bottom sm:w-full lg:order-last lg:aspect-square"
              height="550"
              src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width="550"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Köp the real deal
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Vill du stötta oss på en helt ny nivå? Isåfall, klicka hem vår riktiga publikation. 
                  Här får du en inblick i vad som händer bakom scenerna i kulturvärlden.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 min-w-[200px]">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MagCard