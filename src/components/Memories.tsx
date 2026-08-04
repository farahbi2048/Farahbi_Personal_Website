import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Camera, ChevronLeft, ChevronRight, X } from 'lucide-react';

interface MemoriesProps {
  darkMode: boolean;
}

interface Memory {
  id: number;
  alt: string;
  caption?: string;
}

const descriptions = [
  'At DataEngBytes Melbourne with the Databricks team',
  'Visiting the Databricks booth at DataEngBytes Melbourne',
  'Group selfie at the Snowflake stand during DataEngBytes',
  'Speaking at a City of Hobart citizenship ceremony',
  'International Student Ambassador group photograph',
  'Formal portrait at Hobart Town Hall',
  'Collaborating during a robotics workshop',
  'Speaking on stage at a school event',
  'Holding the Bangladesh flag during a community event',
  'Taking part in the 2024 student movement in Bangladesh',
  'A collection of awards, medals and certificates',
  'Receiving recognition at Global Day 2021',
  'Painting a commemorative wall mural',
  'Volunteering in a community clean-up activity',
  'Group photograph at an auditorium event',
  'Serving as an Influx Digital MUN Campus Ambassador',
  'Participating in a Model United Nations programme',
  'Inter-Cadet College Robotics Workshop 2022',
  'Inter-house basketball victory scoreboard',
  'Receiving a basketball competition award',
  'Taking part in a cadet ceremonial parade',
  'Competing in an inter-house volleyball match',
  'Celebrating an inter-house athletics championship',
  'Holding the overall champion trophy',
  'Winning the Global Day Essay Competition 2021',
  'Attending an ACS professional event',
  'International Student Ambassador team photograph',
  'Speaking at a City of Hobart citizenship ceremony',
  'Delivering a school-stage presentation',
  'Taking part in a cadet training excursion',
  'International competition team with a trophy',
  'Participating in an international leadership programme on education',
  'Formal cadet portrait',
  'Recognition from the International Astronomical Search Collaboration',
  'Portrait at DataEngBytes Melbourne 2026',
  'Portrait at a University of Tasmania professional showcase',
  'At an ACS and University of Tasmania event',
];

const selectedCaptions: Record<number, string> = {
  1: 'DataEngBytes Melbourne 2026',
  4: 'Speaking at the City of Hobart',
  9: 'Community, identity and belonging',
  12: 'Global Day 2021 recognition',
  18: 'Inter-Cadet College Robotics Workshop',
  23: 'Inter-house athletics champion',
  25: 'Global Day Essay Competition winner',
  34: 'International Astronomical Search Collaboration',
};

const memories: Memory[] = descriptions.map((alt, index) => {
  const id = index + 1;
  return { id, alt, caption: selectedCaptions[id] };
});

const imagePath = (id: number) => `/memories/${String(id).padStart(2, '0')}.webp`;

export default function Memories({ darkMode }: MemoriesProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + memories.length) % memories.length,
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % memories.length,
    );
  };

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveIndex(null);
      if (event.key === 'ArrowLeft') showPrevious();
      if (event.key === 'ArrowRight') showNext();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex]);

  const activeMemory = activeIndex === null ? null : memories[activeIndex];

  return (
    <section
      id="memories"
      className={`scroll-mt-24 py-20 sm:py-24 ${darkMode ? 'bg-[#0b0d11]' : 'bg-slate-950'}`}
    >
      <div className="mx-auto max-w-[1500px] px-3 sm:px-5 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-amber-400">
            <Camera size={15} aria-hidden="true" />
            Gallery
          </div>
          <h2 className="mb-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Making Memories
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            People, places, milestones and the moments that have shaped my journey.
          </p>
        </div>

        <div className="columns-1 gap-2.5 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5">
          {memories.map((photo, index) => (
            <motion.button
              type="button"
              key={photo.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.025, 0.2) }}
              viewport={{ once: true, margin: '-40px' }}
              onClick={() => setActiveIndex(index)}
              aria-label={`Open image ${photo.id}: ${photo.alt}`}
              className="group relative mb-2.5 block w-full break-inside-avoid overflow-hidden bg-slate-900 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              <img
                src={imagePath(photo.id)}
                alt={photo.alt}
                loading={photo.id <= 5 ? 'eager' : 'lazy'}
                decoding="async"
                className="h-auto w-full transition duration-500 ease-out group-hover:scale-[1.025] group-hover:brightness-90"
              />
              {photo.caption && (
                <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black/90 via-black/45 to-transparent px-4 pb-3 pt-12 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                  <p className="text-sm font-semibold leading-snug text-white">{photo.caption}</p>
                </div>
              )}
            </motion.button>
          ))}
        </div>

        <p className="mt-12 text-center text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">
          Past activities &amp; global engagements
        </p>
      </div>

      <AnimatePresence>
        {activeMemory && activeIndex !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Gallery image ${activeMemory.id} of ${memories.length}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/95 p-3 backdrop-blur-sm sm:p-8"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setActiveIndex(null);
            }}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label="Close gallery"
              className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2.5 text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <X size={23} />
            </button>

            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous image"
              className="absolute left-3 z-10 rounded-full bg-black/45 p-2 text-white transition hover:bg-black/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 sm:left-6 sm:p-3"
            >
              <ChevronLeft size={28} />
            </button>

            <motion.figure
              key={activeMemory.id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="flex max-h-full max-w-6xl flex-col items-center"
            >
              <img
                src={imagePath(activeMemory.id)}
                alt={activeMemory.alt}
                className="max-h-[82vh] max-w-full object-contain shadow-2xl"
              />
              <figcaption className="mt-3 max-w-2xl px-12 text-center text-sm text-slate-300">
                {activeMemory.caption ?? activeMemory.alt}
                <span className="ml-2 text-slate-600">
                  {activeMemory.id}/{memories.length}
                </span>
              </figcaption>
            </motion.figure>

            <button
              type="button"
              onClick={showNext}
              aria-label="Next image"
              className="absolute right-3 z-10 rounded-full bg-black/45 p-2 text-white transition hover:bg-black/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 sm:right-6 sm:p-3"
            >
              <ChevronRight size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
