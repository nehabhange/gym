import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Trainers', href: '#trainers' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 24)
        handleScroll()
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`fixed inset-x-0 top-9 z-50 transition-all duration-500 ${scrolled ? 'bg-[#020203]/95 backdrop-blur-xl border-b border-white/10 shadow-[0_30px_120px_-90px_rgba(0,0,0,0.8)]' : 'bg-transparent'
                }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                <a href="#hero" className="flex items-center gap-2">
                    <img src="/image.png" alt="Muscle Box" className="h-12 w-12 object-contain" />
                    {/* <span className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">ELEVATE</span> */}
                </a>
                <button
                    type="button"
                    onClick={() => setOpen((value) => !value)}
                    className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-white/80 transition hover:border-emerald-300/40 hover:text-emerald-200 md:hidden"
                    aria-label="Toggle navigation"
                >
                    <span className="text-lg font-black">{open ? '×' : '≡'}</span>
                </button>
                <nav className="hidden items-center gap-6 md:flex">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-sm uppercase tracking-[0.25em] text-white/70 transition hover:text-emerald-300"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
                <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.03 }}
                    className="hidden rounded-full border border-emerald-300/30 bg-emerald-400/10 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-200 transition hover:bg-emerald-300/15 md:inline-flex"
                >
                    Join Now
                </motion.a>
            </div>
            {open && (
                <div className="border-t border-white/10 bg-[#020203]/95 px-4 pb-6 pt-2 md:hidden">
                    <div className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="text-sm uppercase tracking-[0.25em] text-white/70 transition hover:text-emerald-300"
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setOpen(false)}
                            className="inline-flex w-full items-center justify-center rounded-full border border-emerald-300/30 bg-emerald-400/10 px-5 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-200 transition hover:bg-emerald-300/15"
                        >
                            Join Now
                        </a>
                    </div>
                </div>
            )}
        </header>
    )
}
