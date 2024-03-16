import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (
    <MaxWidthWrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
        {Array.from({ length: 12 }).map((_, i) => (
            <div className="flex flex-col gap-4">
          <div className="aspect-square overflow-hidden rounded-lg">
            <Image
              alt="Avatar"
              className="object-cover"
              height="400"
              src="/placeholder.avif"
              style={{
                aspectRatio: "400/400",
                objectFit: "cover",
              }}
              width="400"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold">Username</h2>
            <p className="text-sm leading-none text-gray-500">
              Bio description goes here.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors"
              href="#"
            >
              <TwitterIcon className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors"
              href="#"
            >
              <LinkedinIcon className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors"
              href="#"
            >
              <GithubIcon className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
        ))}}
      </div>
    </MaxWidthWrapper>
  );
}

function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
