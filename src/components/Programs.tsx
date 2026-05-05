import { motion } from 'framer-motion'
import { FiActivity, FiHeart, FiMap, FiUserCheck } from 'react-icons/fi'

const programList = [
    {
        title: 'Strength',
        description: 'Power-driven training designed to build muscle and functional resilience.',
        icon: FiActivity,
    },
    {
        title: 'Cardio',
        description: 'High-energy sessions to improve endurance and athletic performance.',
        icon: FiHeart,
    },
    {
        title: 'Yoga',
        description: 'Mobility and recovery routines to balance strength and flexibility.',
        icon: FiMap,
    },
    {
        title: 'Personal Training',
        description: 'One-on-one coaching tailored to your goals and technique.',
        icon: FiUserCheck,
    },
]

export default function Programs() {
    return (
        <section id="programs" className="relative z-10 border-t border-white/10 bg-[#1a2332] py-28 sm:py-32">
            {/* <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.2),transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.15),transparent_20%)] opacity-80" /> */}
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="gsap-fade-up mb-14 max-w-2xl text-center">
                    <p className="text-sm uppercase tracking-[0.35em] text-emerald-300">Programs</p>
                    <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
                        Training designed for elite performance.
                    </h2>
                </div>
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {programList.map((program) => {
                        const Icon = program.icon
                        return (
                            <motion.article
                                key={program.title}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group rounded-[2rem] border border-emerald-300/30 bg-slate-700/90 p-8 shadow-[0_50px_130px_-100px_rgba(0,0,0,0.85)] transition duration-300 hover:border-emerald-300/50 hover:bg-slate-600/90"
                            >
                                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-300/20 text-emerald-300 shadow-[0_24px_80px_-50px_rgba(16,185,129,0.9)]">
                                    <Icon className="h-7 w-7" />
                                </div>
                                <h3 className="text-2xl font-bold tracking-[-0.03em] text-white">{program.title}</h3>
                                <p className="mt-4 text-sm leading-7 text-white">{program.description}</p>
                                {/* <div className="mt-8 text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300 transition group-hover:text-emerald-200">
                                    Discover
                                </div> */}
                            </motion.article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
