import { motion } from 'framer-motion'
import { FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi'

const trainers = [
    {
        name: 'Maya Solis',
        role: 'Strength Coach',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    },
    {
        name: 'Axel Rivera',
        role: 'Performance Coach',
        image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80',
    },
    {
        name: 'Aria Chen',
        role: 'Recovery Specialist',
        image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
    },

]

export default function Trainers() {
    return (
        <section id="trainers" className="bg-[#080808] py-24 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="gsap-fade-up mb-12 max-w-2xl text-center">
                    <p className="text-sm uppercase tracking-[0.35em] text-emerald-300">Trainers</p>
                    <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
                        Coaches who train with strategy and intensity.
                    </h2>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                    {trainers.map((trainer) => (
                        <motion.div
                            key={trainer.name}
                            whileHover={{ y: -6 }}
                            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_48px_180px_-120px_rgba(0,0,0,0.85)]"
                        >
                            <div className="relative h-96 bg-slate-900">
                                <img
                                    src={trainer.image}
                                    alt={trainer.name}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                <div className="absolute inset-x-0 bottom-0 p-6">
                                    <p className="text-sm uppercase tracking-[0.35em] text-emerald-300">{trainer.role}</p>
                                    <h3 className="mt-3 text-2xl font-black text-white">{trainer.name}</h3>
                                </div>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition duration-500 group-hover:bg-black/70 group-hover:opacity-100">
                                <div className="flex gap-4 rounded-full bg-white/10 p-4 backdrop-blur-xl">
                                    <FiInstagram className="h-6 w-6 text-white transition hover:text-emerald-300" />
                                    <FiTwitter className="h-6 w-6 text-white transition hover:text-emerald-300" />
                                    <FiLinkedin className="h-6 w-6 text-white transition hover:text-emerald-300" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
