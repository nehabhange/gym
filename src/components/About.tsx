export default function About() {
    return (
        <section id="about" className="relative overflow-hidden border-t border-white/10 bg-[#1a2332] py-28 sm:py-32">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.2),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.18),transparent_25%)]" />
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                    <div className="space-y-8">
                        <div className="gsap-fade-up max-w-xl rounded-3xl border border-emerald-300/30 bg-slate-700/90 p-8 shadow-[0_40px_120px_-80px_rgba(0,0,0,0.85)] sm:p-10">
                            <p className="text-sm uppercase tracking-[0.35em] text-emerald-300">About ELEVATE</p>
                            <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl">
                                Precision coaching for every level.
                            </h2>
                            <p className="mt-6 text-base leading-8 text-white sm:text-lg">
                                We combine thoughtful programs, elite coaches, and clean, high-energy spaces to keep every training session premium and purposeful.
                            </p>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="gsap-fade-up rounded-3xl border border-emerald-300/30 bg-slate-700/90 p-6 text-white shadow-[0_30px_90px_-70px_rgba(0,0,0,0.8)]">
                                <p className="text-3xl font-bold text-white">24/7</p>
                                <p className="mt-3 text-sm uppercase tracking-[0.35em] text-emerald-300">Access</p>
                            </div>
                            <div className="gsap-fade-up rounded-3xl border border-emerald-300/30 bg-slate-700/90 p-6 text-white shadow-[0_30px_90px_-70px_rgba(0,0,0,0.8)]">
                                <p className="text-3xl font-bold text-white">Personalized</p>
                                <p className="mt-3 text-sm uppercase tracking-[0.35em] text-emerald-300">Programs</p>
                            </div>
                        </div>
                    </div>
                    <div className="gsap-fade-right relative overflow-hidden rounded-[2rem] border border-emerald-300/30 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 p-1 shadow-[0_40px_160px_-120px_rgba(0,0,0,0.9)]">
                        <div className="h-full rounded-[1.75rem] bg-slate-800/90 p-10">
                            <div className="flex h-full items-end justify-between rounded-[1.5rem] bg-slate-700/80 p-8">
                                <div>
                                    <p className="text-sm uppercase tracking-[0.35em] text-emerald-300">Who we are</p>
                                    <h3 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl">Elite strength, modern recovery.</h3>
                                </div>
                                <div className="rounded-3xl border border-emerald-300/30 bg-slate-700/90 p-5 text-right text-white">
                                    <p className="text-5xl font-black text-white">95%</p>
                                    <p className="mt-2 text-sm uppercase tracking-[0.35em] text-emerald-300">Retention</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
