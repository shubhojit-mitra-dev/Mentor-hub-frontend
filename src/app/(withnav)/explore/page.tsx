import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";

const profiles = [
  {
    username: "Alex Benjamin",
    bio: "Seasoned entrepreneur dedicated to guiding startups towards success.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    socials: {
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    username: "Henna Christine",
    bio: "Passionate about fostering innovation and empowering aspiring entrepreneurs.",
    socials: {
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    username: "Sam Aldrin",
    bio: "Experienced mentor committed to nurturing the next generation of business leaders.",
    socials: {
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    username: "Aryan Lal",
    bio: "Strategist helping entrepreneurs turn ideas into thriving businesses.",
    socials: {
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    username: "Abdul Qadri",
    bio: "Championing diversity and inclusion in entrepreneurship while offering valuable guidance.",
    socials: {
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    username: "Ken Kripke",
    bio: "Driven mentor focused on unlocking the potential of emerging startups.",
    socials: {
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    username: "Amanda Laurence",
    bio: "Entrepreneurial expert with a track record of transforming visions into reality.",
    socials: {
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    username: "Arun Tiwari",
    bio: "Experienced advisor dedicated to helping entrepreneurs navigate challenges and seize opportunities.",
    socials: {
      twitter: "#",
      linkedin: "#",
    },
  },
];

export default function Component() {
  return (
    <MaxWidthWrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
        {profiles.map((profile) => (
          <div key={profile.username} className="flex flex-col gap-4">
            <div className="aspect-square overflow-hidden rounded-lg">
              <Image
                alt="Avatar"
                className="object-cover"
                height="400"
                src={profile.img || "/placeholder.avif"}
                width="400"
              />
            </div>
            <div className="flex flex-col gap-1">
              <Link href={`/explore/${profile.username}`}>
                <h2 className="text-2xl font-bold">{profile.username}</h2>
              </Link>
              <p className="text-base leading-5 text-gray-500">{profile.bio}</p>
            </div>
            <div className="flex gap-4">
              <Link
                className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors"
                href={profile.socials.twitter}
              >
                <TwitterIcon className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors"
                href={profile.socials.linkedin}
              >
                <LinkedinIcon className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
}

function LinkedinIcon(props: any) {
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

function TwitterIcon(props: any) {
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
