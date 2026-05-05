import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <>
            <div className="fixed inset-x-0 top-0 z-[60] bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 py-2 text-center text-sm font-semibold tracking-widest text-white shadow-[0_2px_20px_rgba(234,88,12,0.4)]">
                🚩 जय श्री राम 🚩
            </div>
            <section id="hero" className="hero-section relative min-h-screen overflow-hidden">
                <div className="hero-bg absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-80 grayscale brightness-90"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
                <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 py-28 sm:px-6 lg:px-8">
                    <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-300/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-emerald-200/90 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.8)] sm:text-sm">
                        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-glow" />
                        Premium training. Anytime.
                    </div>

                    <div className="max-w-3xl space-y-8 text-white">
                        <h1 className="gsap-fade-up text-4xl font-black leading-tight tracking-[-0.04em] sm:text-6xl">
                            Build strength, shape performance, and own every rep.
                        </h1>
                        <p className="gsap-fade-up max-w-xl text-lg text-white/75 sm:text-xl">
                            A premium fitness experience designed for athletes who want focused momentum, luxury energy, and results that feel elite.
                        </p>
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center pt-6">
                            <motion.a
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-slate-950 shadow-[0_24px_80px_-45px_rgba(16,185,129,0.9)] transition duration-300 hover:bg-emerald-300"
                            >
                                Join Now
                            </motion.a>
                            <a href="#programs" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-white/90 transition hover:border-emerald-300/40 hover:text-emerald-300">
                                Explore Programs
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
