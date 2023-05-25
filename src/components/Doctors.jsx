import Image from 'next/image'
import Link from 'next/link'
import { BiNotepad } from 'react-icons/bi'
import { Container } from '@/components/Container'
const doctors = [
  {
    name: 'Huda Radwan',
    specialty: ['Anxiety disorders', 'Obsessive-compulsive disorder'],
    image: '/images/doctors/doctor1.JPG',
    experiences: ['Psychiatrist and psychotherapist'],
  },
  {
    name: 'Basma Mahmoud',
    specialty: ['Autism spectrum disorders', 'Mood disorders'],
    image: '/images/doctors/doctor2.JPG',
    experiences: [
      'psychologist',
      'Member of the Royal College of Psychiatrists',
      'A psychiatrist in the children unit',
    ],
  },
  {
    name: 'Hussein Hajj Ahmed',
    specialty: 'Specialized in depression, anxiety disorders.',
    image: '/images/doctors/doctor3.JPG',
  },
  {
    name: 'Marina Makar',
    specialty: 'Specialized in depression, phobias and social phobias.',
    image: '/images/doctors/doctor4.JPG',
  },
  {
    name: 'Ahmed Hashish',
    specialty:
      'Specialized in Separation Anxiety Disorder, General Anxiety, Social Phobia, Relationships.',
    image: '/images/doctors/doctor5.JPG',
  },
  {
    name: 'Zakaria Fakhoury',
    specialty: 'Specialized in anxiety disorders, addiction.',
    image: '/images/doctors/doctor6.JPG',
  },
]

export function Doctors() {
  return (
    <section className="bg-gray-50 py-12 sm:py-16" id="doctors">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Meet Our Doctors
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-500">
            Our experienced psychiatrists are ready to help you with your mental
            health needs.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg bg-white shadow"
            >
              <div className="px-4 py-5 sm:p-6">
                <div className="sm:flex sm:items-center sm:justify-between">
                  <div className="mb-4 sm:mb-0">
                    <div className="text-lg font-medium leading-6 text-gray-900">
                      {doctor.name}
                    </div>
                    <div className="mt-1 text-sm text-gray-500">
                      {doctor.specialty}
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                      <Image
                        className="rounded-full"
                        src={doctor.image}
                        alt=""
                        width={48}
                        height={48}
                        sizes="100vw"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
      <Link href="../DoctorsDetails" className="m-10 flex justify-center">
        <button class=" flex rounded bg-blue-500 py-2 px-4 text-3xl font-bold text-white hover:bg-blue-700">
          Book your appointment
          <BiNotepad className="m-auto ml-1 text-2xl" />
        </button>
      </Link>
    </section>
  )
}
