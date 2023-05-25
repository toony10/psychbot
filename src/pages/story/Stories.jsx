import Link from "next/link";
import Image from 'next/image';
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Typography, Button } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
export const stories = [
  {
    id:1,
    title: "From the Depths of Addiction: A Journey to Recovery and Hope",
    summary: "Michael had it all, but something was missing. He turned to drugs, which quickly became an addiction, and his life fell apart. He found hope in a rehabilitation center, where he fought to overcome his addiction and started a new life. This is a story of struggle, recovery, and the power of hope.",
    imgSrc: '/images/stories/5.jpg',
    content : "Michael had everything he needed in life. He had a good job, a loving family, and a beautiful home. However, he felt that something was missing. He started experimenting with drugs, thinking that it would make him feel better. But the drugs quickly became a habit, and before he knew it, he was addicted. Michael/'s life quickly spiraled out of control. He lost his job, his home, and his family. He was living on the streets, relying on drugs to get through each day. He knew he needed help, but he didn't know where to turn, One day, Michael decided he had enough. He stumbled into a rehabilitation center, desperate for help. The staff at the center welcomed him with open arms, and he began his journey to recovery, It wasn't easy for Michael during his treatment, but Dr. Yasmin was always there for him, supporting him and encouraging him to keep going. In addition, Michael had a great support system from his family and friends, who talked to him every day and urged him to stay on track, Over time, Michael began to feel better. He regained his confidence and his desire to live. He felt like he could accomplish anything, but more importantly, he began to think positively about his future, After a period of treatment, Michael left the rehabilitation center and started a new life. He quit heroin and cocaine for good and started living a healthy, positive life. He got a job again and was able to pay off his debts. He started training at the gym and returning to a normal life, One day, Michael decided to visit Dr. Yasmin, who had helped him overcome his addiction. He wanted to thank her in person, but when he arrived at the center, he found that Dr. Yasmin had moved to another location, However, as he approached the entrance, he saw a group of people looking at him and clapping. Among them was Dr. Yasmin, who had tears of joy in her eyes. And from that day on, Michael knew he wasn't alone, and that the world around him was full of people who loved him",
  },
  {
    id: 2,
    title: "Conquering Anxiety: Overcoming Fear and Finding Happiness.",
    summary: 'In "Conquering Anxiety: Overcoming Fear and Finding Happiness," follow Samantha journey as she faces her anxiety head-on and learns to control it. Through her experiences, she finds a way to overcome her fears and empower herself, inspiring others to do the same.',
    imgSrc: '/images/stories/story2.png',
    content: "Samantha had been struggling with anxiety for as long as she could remember. It affected every aspect of her life, making it difficult for her to enjoy even the simplest things. She had tried everything to alleviate her symptoms, from medication to therapy, but nothing seemed to work,One day, Samantha decided that enough was enough. She didn't want to spend the rest of her life feeling anxious and miserable, so she decided to face her fears head-on. She started by slowly exposing herself to the things that made her anxious, and while it was difficult at first, she soon began to notice a difference in how she felt,Samantha was proud of the progress she had made in her mental health. She realized that she was capable of overcoming her fears and controlling her anxiety. She decided to share her experience with others to help those who were going through the same thing,In the days that followed, Samantha started talking to her friends and family about the tools she used to cope with anxiety and how fear can be a driving force for personal growth. She felt a sense of responsibility towards those who were struggling with anxiety and wanted to help them,By confronting her fears and talking about them openly, Samantha was able to overcome the negative feelings that surrounded her. She felt empowered and confident in herself. She began working towards things she had always wanted to achieve and found joy and happiness in things she never thought possible,In the end, Samantha learned that fear and anxiety aren't necessarily bad things. She was able to overcome them and learn how to deal with them positively. As a result, she was able to live a fulfilling life, challenging fear and anxiety at every step of the way.",
  },
  {
    id: 3,
    title: "From Darkness to Light: Ali's Journey of Overcoming Depression",
    summary: "Ali, a once happy-go-lucky guy, finds himself struggling with depression and losing interest in the things he loves. With the help of his sister and a therapist, Ali learns to manage his depression and finds his way back to a happy and fulfilling life.'From Darkness to Light: Ali's Journey of Overcoming Depression' tells the story of Ali's journey of overcoming depression and the importance of seeking help when you need it",
    imgSrc: '/images/stories/story3.jpg',
    content: "Ali had always been a happy-go-lucky kind of guy. He loved cracking jokes and making people laugh. But lately, he had been feeling down. He didn't know what was wrong with him, but he just didn't feel like himself, Ali tried to ignore his feelings at first, thinking they would go away. But they didn't. He found himself sleeping more than usual, not wanting to get out of bed, and feeling tired all the time. He didn't want to hang out with his friends anymore, and even the thought of doing things he loved, like playing soccer, didn't interest him, One day, Ali's sister noticed that something was wrong and asked him about it. Ali didn't want to burden his sister with his problems, but he found himself opening up to her. His sister encouraged him to talk to someone who could help him, like a therapist or counselor, After some hesitation, Ali decided to give it a try. He went to a therapist who diagnosed him with depression. At first, Ali felt even worse. He thought there was something wrong with him, and he didn't want anyone to know about it,But the therapist explained to Ali that depression is a common mental health condition, and it's nothing to be ashamed of. She also gave him tools to help him manage his depression, like meditation and exercise, and encouraged him to talk to his family and friends about it,Slowly but surely, Ali began to feel better. He started to take care of himself, eating healthy foods and exercising regularly. He also started to talk to his family and friends more about how he was feeling,Ali learned that it's okay to not be okay sometimes. He also learned that asking for help is a sign of strength, not weakness. By seeking help and taking care of himself, Ali was able to overcome his depression and live a happy and fulfilling life.",
  },
  {
    id: 4,
    title: "Riding the Waves: Sarah's Journey of Triumph over Bipolar Disorder",
    summary: "Follow Sarah's inspiring journey as she faces the challenges of living with bipolar disorder. Despite losing control of her life, she refuses to give up and seeks help. With perseverance, she learns how to manage her condition and regain control of her life, inspiring others with her story of triumph over adversity.",
    imgSrc: '/images/stories/story4.png',
    content: "Sarah had always been an energetic and bubbly person, but things started to change when she was diagnosed with bipolar disorder. She found herself experiencing extreme mood swings, going from feeling on top of the world one moment to feeling hopeless and empty the next. It was a rollercoaster of emotions that left her feeling exhausted and alone, Sarah struggled to find the right medication and therapy to manage her condition. She lost friends and her job because of her behavior during manic episodes. It felt like she was losing control of her life, and she didn't know how to get it back,But Sarah was determined to get better. She found a support group and started seeing a new therapist who specialized in treating bipolar disorder. She also found a medication that worked for her and learned how to manage her symptoms through self-care techniques like exercise and meditation,It wasn't an easy journey, but with the right help and support, Sarah slowly started to regain control of her life. She even started a blog about her experiences with bipolar disorder, hoping to raise awareness and help others going through the same thing,Years later, Sarah looked back on her journey with gratitude. She had come a long way since her diagnosis, and although she knew she would always have to manage her bipolar disorder, she felt confident and in control. Sarah's story is a testament to the power of perseverance and the importance of seeking help when you need it.",
  },
  
  // Add more stories here
];



export function Stories()
{
 const zoomInProperties = {
		scale: 1,
		duration: 2000,
		transitionDuration: 500,
		infinite: true,
		prevArrow: (
			<div className="ml-10 hover:ml-7 duration-300 ease-in-out top-40 md:top-72">
				<ArrowLeftIcon className="h-8 w-8 text-white cursor-pointer" />
			</div>
		),
		nextArrow: (
			<div className="mr-10 hover:mr-7 duration-300 ease-in-out top-40 md:top-72">
				<ArrowRightIcon className="h-8 w-8 text-white cursor-pointer" />
			</div>
		),
	};
  return (
      <div id="stories" className="h-1/4 w-full m-auto max-w-2xl lg:max-w-7xl lg:px-8 flex flex-col justify-center">
              <div className="m-auto text-center h-1/4">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Heroes
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
          Every broken story has a triumphal ending
        </p>
        </div>
    
  	<div className="w-full h-[20rem] md:h-[37rem] overflow-hidden mt-10 rounded-lg">
			<Zoom { ...zoomInProperties } >
				{ stories.map((each, index) => (
					<div key={ index } className="flex justify-center relative" >
            <Image
              width={100}
              height={100}
              sizes="100vw"
							className="w-screen"
							src={ each.imgSrc }
            />
           <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-1 md:mb-4 text-sm md:text-4xl "
            >
              {each.title}
            </Typography>
            <Typography
              color="white"
              className="mb-2 md:mb-12 opacity-40 text-[.7rem] md:text-[1.1rem]"
            >
             {each.summary}
            </Typography>
            <Link href={'/story/'+each.id} className="flex justify-center">
                  <Button className="p-2 bg-blue-500
              hover:bg-blue-600 duration-300 text-white ">
                Read More
              </Button>
            </Link>
          </div>
        </div>
					</div>
				)) }
			</Zoom>
		</div>
        
      </div>
  );
}
