import Image from "next/image";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
                    <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-brand-navy/5 rounded-full blur-[120px]"></div>
                </div>
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-brand-orange uppercase tracking-wider mb-6">
                            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
                            Contact Us
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-brand-navy leading-[1.1] mb-6">
                            Let&apos;s start a conversation.
                        </h1>
                        <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                            Whether you&apos;re ready to start or just exploring options,
                            we&apos;re here to help.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-12 md:py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        {/* Contact Form */}
                        <div className="relative z-10 bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/20 shadow-2xl animate-fade-in-up delay-100">
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold text-brand-navy mb-2">
                                    Send us a message
                                </h2>
                                <p className="text-slate-600">
                                    We&apos;ll get back to you within 24 hours.
                                </p>
                            </div>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="name"
                                            className="text-sm font-medium text-slate-700"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full px-4 py-3 rounded-xl bg-white/50 border border-slate-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="email"
                                            className="text-sm font-medium text-slate-700"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full px-4 py-3 rounded-xl bg-white/50 border border-slate-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label
                                        htmlFor="subject"
                                        className="text-sm font-medium text-slate-700"
                                    >
                                        Subject
                                    </label>
                                    <select
                                        id="subject"
                                        className="w-full px-4 py-3 rounded-xl bg-white/50 border border-slate-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all text-slate-600"
                                    >
                                        <option value="">Select a topic...</option>
                                        <option value="study-abroad">
                                            Study Abroad Consulting
                                        </option>
                                        <option value="career">Career Coaching</option>
                                        <option value="startup">Startup Consulting</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label
                                        htmlFor="message"
                                        className="text-sm font-medium text-slate-700"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-xl bg-white/50 border border-slate-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all resize-none"
                                        placeholder="Tell us a bit about your goals..."
                                    ></textarea>
                                </div>
                                <button className="inline-flex items-center justify-center rounded-full font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-95 bg-brand-orange text-white hover:bg-orange-600 shadow-lg shadow-orange-500/20 px-8 py-4 text-lg w-full">
                                    Send
                                </button>
                            </form>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:sticky lg:top-32 animate-fade-in-up delay-200">
                            <div className="relative h-full min-h-[600px] w-full rounded-3xl overflow-hidden bg-slate-900">
                                <Image
                                    alt="Office Map"
                                    src="/Website images/Courtyard 1.JPG"
                                    fill
                                    className="object-cover opacity-50"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <div className="grid gap-4">
                                        <div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center gap-4 hover:bg-white/20 transition-colors">
                                            <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center text-white shrink-0">
                                                <svg
                                                    width="1.5em"
                                                    height="1.5em"
                                                    strokeWidth="1.5"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    color="currentColor"
                                                    className="w-5 h-5"
                                                >
                                                    <path
                                                        d="M20 10C20 14.4183 12 22 12 22C12 22 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z"
                                                        stroke="currentColor"
                                                    ></path>
                                                    <path
                                                        d="M12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10C11 10.5523 11.4477 11 12 11Z"
                                                        fill="currentColor"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                                                    Visit Us
                                                </div>
                                                <div className="text-white font-medium text-sm">
                                                    3rd Floor, Phoenix Tech Tower, Hitech City, Hyderabad
                                                    500081
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center gap-4 hover:bg-white/20 transition-colors">
                                            <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center text-white shrink-0">
                                                <svg
                                                    width="1.5em"
                                                    height="1.5em"
                                                    strokeWidth="1.5"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    color="currentColor"
                                                    className="w-5 h-5"
                                                >
                                                    <path
                                                        d="M7 9L12 12.5L17 9"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                    <path
                                                        d="M2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17Z"
                                                        stroke="currentColor"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                                                    Email Us
                                                </div>
                                                <div className="text-white font-medium text-sm">
                                                    hello@flygraduate.com
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center gap-4 hover:bg-white/20 transition-colors">
                                            <div className="w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center text-white shrink-0">
                                                <svg
                                                    width="1.5em"
                                                    height="1.5em"
                                                    strokeWidth="1.5"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    color="currentColor"
                                                    className="w-5 h-5"
                                                >
                                                    <path
                                                        d="M18.1182 14.702L14 15.5C11.2183 14.1038 9.5 12.5 8.5 10L9.26995 5.8699L7.81452 2L4.0636 2C2.93605 2 2.04814 2.93178 2.21654 4.04668C2.63695 6.83 3.87653 11.8765 7.5 15.5C11.3052 19.3052 16.7857 20.9564 19.802 21.6127C20.9668 21.8662 22 20.9575 22 19.7655L22 16.1812L18.1182 14.702Z"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                                                    Call Us
                                                </div>
                                                <div className="text-white font-medium text-sm">
                                                    +91 98765 43210
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center gap-4 hover:bg-white/20 transition-colors">
                                            <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center text-white shrink-0">
                                                <svg
                                                    width="1.5em"
                                                    height="1.5em"
                                                    strokeWidth="1.5"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    color="currentColor"
                                                    className="w-5 h-5"
                                                >
                                                    <path
                                                        d="M12 6L12 12L18 12"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                    <path
                                                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                                                    Opening Hours
                                                </div>
                                                <div className="text-white font-medium text-sm">
                                                    Mon - Fri: 10:00 AM - 7:00 PM IST
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
