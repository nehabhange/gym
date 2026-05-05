import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

const testimonials = [
    {
        name: 'Jordan M.',
        role: 'Pro Athlete',
        quote: 'The coaching here is sharp, strategic, and the environment pushes me to my best every session.',
    },
    {
        name: 'Nina R.',
        role: 'Fitness Enthusiast',
        quote: 'Luxury energy meets real results — I feel stronger, faster, and more confident than ever.',
    },
    {
        name: 'Kai P.',
        role: 'Recovery Member',
        quote: 'The training flow and recovery support are elite. This is gym culture at its finest.',
    },
]

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0)

    const handlePrevious = () => setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    const handleNext = () => setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))

    return (
        <section id="testimonials" className="bg-[#080808] py-24 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="gsap-fade-up mb-12 max-w-2xl text-center">
                    <p className="text-sm uppercase tracking-[0.35em] text-emerald-300">Testimonials</p>
                    <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
                        Real members. Real momentum.
                    </h2>
                </div>
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_50px_160px_-120px_rgba(0,0,0,0.8)] sm:p-12">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={testimonials[activeIndex].name}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                            className="space-y-8"
                        >
                            <p className="text-xl leading-9 text-white/80 sm:text-2xl">
                                “{testimonials[activeIndex].quote}”
                            </p>
                            <div className="flex flex-col gap-1 text-sm text-emerald-300 sm:flex-row sm:items-center sm:justify-between">
                                <span className="font-semibold text-white">{testimonials[activeIndex].name}</span>
                                <span>{testimonials[activeIndex].role}</span>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                    <div className="mt-8 flex items-center justify-center gap-4">
                        <button
                            type="button"
                            onClick={handlePrevious}
                            className="rounded-full border border-white/10 bg-black/60 px-4 py-3 text-white/80 transition hover:border-emerald-300/40 hover:text-emerald-200"
                        >
                            Prev
                        </button>
                        <button
                            type="button"
                            onClick={handleNext}
                            className="rounded-full border border-white/10 bg-black/60 px-4 py-3 text-white/80 transition hover:border-emerald-300/40 hover:text-emerald-200"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
