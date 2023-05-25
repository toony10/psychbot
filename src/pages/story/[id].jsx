import { useRouter } from 'next/router'
import { stories } from './Stories'
import { Typography, Button } from '@material-tailwind/react'
import Image from 'next/image'
import { FaArrowLeft } from 'react-icons/fa'
import Link from 'next/link'

export default function Story({ story }) {
  const router = useRouter()
  console.log(story)
  return (
    <div>
      <head>
        <title> Story : {story.title}</title>
      </head>
      <Link
        href="/"
        className="group absolute z-10 flex w-full bg-[#b9b8b857] p-5"
      >
        <FaArrowLeft className="my-auto text-xl font-bold text-slate-900 duration-150 ease-in-out group-hover:text-2xl" />
        <span className="ml-2 text-xl font-bold text-slate-900">Back</span>
      </Link>
      <Image
        src={story.imgSrc}
        width={100}
        height={100}
        sizes="100vw"
        alt={story.title}
        className="h-52 w-full bg-gradient-to-t from-transparent to-black object-cover  md:h-[25rem]"
      />
      <h1 className="mt-5 mb-9 text-center text-4xl font-semibold text-slate-800 md:text-6xl">
        {story.title}
      </h1>
      <p className="px-5 text-center text-2xl font-light tracking-wider md:px-52">
        {story.content}
      </p>
      <a href="/">lol</a>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = stories.map((story) => ({
    params: { id: story.id.toString() },
  }))

  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const storyId = parseInt(params.id, 10)
  const story = stories.find((story) => story.id === storyId)

  return {
    props: {
      story,
    },
  }
}
