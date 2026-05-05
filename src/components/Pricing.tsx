import { motion } from 'framer-motion'

const plans = [
    {
        name: 'Basic',
        price: '$49',
        description: 'Perfect for focused sessions and foundational gains.',
        features: ['Access to gym floor', 'Weekly class pass', 'Standard support'],
        featured: false,
    },
    {
        name: 'Pro',
        price: '$89',
        description: 'Best for athletes who want premium coaching and flexibility.',
        features: ['Unlimited training', 'Personalized plan', 'Priority support'],
        featured: true,
    },
    {
        name: 'Elite',
        price: '$129',
        description: 'For the full high-performance experience and elite recovery.',
        features: ['All benefits included', 'Recovery lounge access', 'VIP workshops'],
        featured: false,
    },
]

export default function Pricing() {
    return (
        <section id="pricing" className="bg-[#050505] py-24 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="gsap-fade-up mb-12 max-w-2xl text-center">
                    <p className="text-sm uppercase tracking-[0.35em] text-emerald-300">Pricing</p>
                    <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
                        Choose the plan that matches your ambition.
                    </h2>
                </div>
                <div className="grid gap-6 xl:grid-cols-3">
                    {plans.map((plan) => (
                        <motion.div
                            key={plan.name}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className={`rounded-[2rem] border p-8 shadow-[0_40px_120px_-90px_rgba(0,0,0,0.8)] transition ${plan.featured
                                    ? 'border-emerald-300/30 bg-gradient-to-br from-[#08110d] via-[#07120d] to-[#050505]'
                                    : 'border-white/10 bg-white/5'
                                }`}
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm uppercase tracking-[0.35em] text-emerald-300">{plan.name}</p>
                                    <p className="mt-3 text-5xl font-black tracking-[-0.05em] text-white">{plan.price}</p>
                                </div>
                                {plan.featured && <span className="rounded-full bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300">Popular</span>}
                            </div>
                            <p className="mt-6 text-sm leading-7 text-white/70">{plan.description}</p>
                            <ul className="mt-8 space-y-4 text-sm text-white/75">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3">
                                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-300" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="mt-10 w-full rounded-full bg-emerald-300 px-6 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-slate-950 transition hover:bg-emerald-200">
                                Start {plan.name}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
