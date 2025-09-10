import Head from "next/head";


export default function NexusPage() {
    return (
        <>
            <Head>
                <title>Nexus</title>
                <meta name="description" content="Nexus is an alternative to webtop" />
                <link rel="icon" href="icon.png" />
            </Head>

            <div className="bg-white min-h-screen text-gray-900 flex flex-col">

                {/* Navbar */}
                <div className="navbar bg-yellow-500 shadow-sm fixed w-full z-50">
                    <div className="flex-none">
                        <button className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-5 w-5 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1">
                        <a className="btn btn-ghost normal-case text-xl">Nexus</a>
                    </div>
                </div>

                {/* Spacer to prevent navbar overlap */}
                <div className="h-20"></div>

                {/* Main content */}
                <main className="flex-1 flex flex-col items-center">
                    {/* About Section */}
                    <section id="about" className="flex flex-col items-center gap-2 pt-16">
                        <h1 className="text-5xl font-bold">Welcome to Nexus</h1>
                        <p className="text-lg max-w-2xl text-center">
                            Nexus is a schedule app!
                        </p>
                        <p className="text-lg max-w-2xl text-center">Made to be a faster alternative to Webtop!</p>
                        <p className="text-lg max-w-2xl text-center">Feature List & Installation guide coming
                            eventually!</p>
                    </section>

                    {/* Download Section */}
                    <section id="download" className="flex flex-col items-center gap-8 pt-16">
                        <h2 className="text-3xl font-bold">Download Nexus!</h2>

                        <a
                            href="https://github.com/OmriBerger/Nexus/releases/latest/download/nexus.apk"
                            className="group relative inline-block focus:ring-3 focus:outline-none"
                        >
                            <span
                                className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-500 transition-transform group-hover:translate-x-0 group-hover:translate-y-0 rounded"></span>

                            <span
                                className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold tracking-widest bg-yellow-200 uppercase rounded text-black">
              Download
            </span>
                        </a>
                    </section>
                </main>

                {/* Footer Section */}
                <footer className="footer bg-neutral text-neutral-content p-10 flex flex-col items-center gap-2">
                    <p className="text-center w-full">
                        Made to not be a suspicious looking download page by Omri Berger
                    </p>
                    <p className="text-center w-full">
                        &copy; {new Date().getFullYear()} - All rights reserved
                    </p>
                </footer>

            </div>
        </>
    );
}
