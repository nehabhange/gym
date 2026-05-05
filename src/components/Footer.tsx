import { FiFacebook, FiInstagram, FiMail, FiTwitter } from 'react-icons/fi'

export default function Footer() {
    return (
        <footer className="bg-[#030303] py-16 text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                    <div>
                        <p className="text-sm uppercase tracking-[0.35em] text-emerald-300">ELEVATE</p>
                        <p className="mt-6 max-w-xl text-sm leading-7 text-white/70">
                            A premium fitness brand built for high-performance training, clean design, and crisp member experiences.
                        </p>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2">
                        <div>
                            <h3 className="text-sm uppercase tracking-[0.35em] text-white/60">Explore</h3>
                            <ul className="mt-6 space-y-4 text-sm text-white/70">
                                <li>About</li>
                                <li>Programs</li>
                                <li>Pricing</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm uppercase tracking-[0.35em] text-white/60">Connect</h3>
                            <div className="mt-6 flex items-center gap-4 text-white/70">
                                <FiInstagram className="h-5 w-5" />
                                <FiTwitter className="h-5 w-5" />
                                <FiFacebook className="h-5 w-5" />
                                <FiMail className="h-5 w-5" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/50">
                    © 2026 ELEVATE. Crafted for premium fitness experiences.
                </div>
            </div>
        </footer>
    )
}
