import { motion } from 'framer-motion'

export default function Contact() {
    return (
        <section id="contact" className="bg-[#050505] py-24 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="gsap-fade-up mb-12 max-w-2xl text-center">
                    <p className="text-sm uppercase tracking-[0.35em] text-emerald-300">Contact</p>
                    <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
                        Start your premium training journey.
                    </h2>
                </div>
                <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
                    <motion.form
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="space-y-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_-100px_rgba(0,0,0,0.8)]"
                    >
                        <div className="relative">
                            <input
                                id="name"
                                type="text"
                                required
                                placeholder=" "
                                className="peer h-14 w-full rounded-3xl border border-white/10 bg-transparent px-5 text-sm text-white outline-none transition focus:border-emerald-300/60"
                            />
                            <label htmlFor="name" className="pointer-events-none absolute left-5 top-4 text-sm text-white/60 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:text-xs peer-focus:text-emerald-300">
                                Name
                            </label>
                        </div>
                        <div className="relative">
                            <input
                                id="email"
                                type="email"
                                required
                                placeholder=" "
                                className="peer h-14 w-full rounded-3xl border border-white/10 bg-transparent px-5 text-sm text-white outline-none transition focus:border-emerald-300/60"
                            />
                            <label htmlFor="email" className="pointer-events-none absolute left-5 top-4 text-sm text-white/60 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:text-xs peer-focus:text-emerald-300">
                                Email
                            </label>
                        </div>
                        <div className="relative">
                            <textarea
                                id="message"
                                rows={5}
                                required
                                placeholder=" "
                                className="peer w-full rounded-3xl border border-white/10 bg-transparent px-5 py-5 text-sm text-white outline-none transition focus:border-emerald-300/60"
                            />
                            <label htmlFor="message" className="pointer-events-none absolute left-5 top-5 text-sm text-white/60 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:text-xs peer-focus:text-emerald-300">
                                Message
                            </label>
                        </div>
                        <button className="w-full rounded-full bg-emerald-300 px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-slate-950 transition hover:bg-emerald-200">
                            Send Message
                        </button>
                    </motion.form>
                    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_-100px_rgba(0,0,0,0.8)]">
                        <div className="mb-8 rounded-[1.75rem] border border-white/10 bg-[#0b0b0b]/90 p-8 text-white/70">
                            <p className="text-sm uppercase tracking-[0.35em] text-emerald-300">Visit us</p>
                            <h3 className="mt-3 text-2xl font-black text-white">Premium studio placeholder</h3>
                            <p className="mt-4 text-sm leading-7 text-white/70">
                                This map placeholder represents where your luxury training studio would appear. Swap it with a real embed when you launch.
                            </p>
                        </div>
                        <div className="aspect-[4/3] rounded-3xl border border-white/10 bg-white/5 p-8 text-center text-white/50 shadow-inner shadow-black/40">
                            <p className="mt-6 text-sm uppercase tracking-[0.35em] text-white/40">Map placeholder</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
