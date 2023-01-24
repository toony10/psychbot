import Image from 'next/image'

import member1 from '@/images/team/member1.jpg'
import member2 from '@/images/team/member2.jpg'
import member3 from '@/images/team/member3.jpg'
import member4 from '@/images/team/member4.jpg'
import member5 from '@/images/team/member5.jpg'
import member6 from '@/images/team/member6.jpg'
import member7 from '@/images/team/member7.jpg'
const members = [
  {
    id: 1,
    name: 'Ahmed Tawfiq',
    href: '#',
    description: 'Information Systems Officer (Team Leader)',
    image: member1,
    imageAlt: 'A7a.',
  },
  {
    id: 2,
    name: 'Moaz Bahnas',
    href: '#',
    description: 'Front end Wed Developer',
    image: member2,

    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Ahmed Salah',
    href: '#',
    description: 'System Administrator Spcialis',
    image: member3,

    imageAlt:
      'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Diaa Eid',
    href: '#',
    description: 'Technical Support',
    image: member4,

    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: 'Anton Amir',
    href: '#',
    description: 'Front end Wed Developer',
    image: member5,

    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 6,
    name: 'Karen Kamal',
    href: '#',
    description: 'Graphic Designer',
    image: member6,

    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 7,
    name: 'Mahmoud Abdelfttah',
    href: '#',
    description: 'Digital creator Head',
    image: member7,

    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
]

export function Team() {
  return (
    <div className="bg-white" id="team">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mb-10 max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
            Our Team
          </h2>
          <p className="text-100 text-dr opacity-3 mt-6 tracking-tight">
            The achievements of an organization are the results of the combined
            effort of each individual.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {members.map((member) => (
            <a key={member.id} href={member.href} className="group">
              <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200">
                <Image
                  src={member.image}
                  alt={member.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-1 text-lg font-medium text-gray-900">
                {member.name}
              </h3>
              <p className="mt-4 text-sm text-gray-700">{member.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
