export default function Home() {
    return (
        <main className="max-w-3xl mx-auto p-8 pt-16">
            <header className="mb-20">
                <h1 className="text-3xl font-semibold mb-4 text-zinc-100">
                    Meehir Prabhakar
                </h1>
                <p className="text-zinc-400 leading-relaxed max-w-xl">
                    Computer Vision & Software Engineer building edge AI, dual-model vision pipelines, and multi-channel SIEM frameworks.
                </p>
            </header>

            <section>
                <h2 className="text-xl font-medium mb-8 text-zinc-200">Selected Work</h2>

                <div className="flex flex-col gap-10">
                    <article>
                        <h3 className="font-medium text-zinc-100">Chakshu</h3>
                        <p className="text-sm text-zinc-400 mt-1 mb-3">AI-driven SIEM Framework</p>
                        <p className="text-sm text-zinc-500 leading-relaxed">
                            Log ingestion and multi-channel protocol threat correlation featuring custom synthetic host telemetry generation.
                        </p>
                    </article>

                    <article>
                        <h3 className="font-medium text-zinc-100">Sharvara</h3>
                        <p className="text-sm text-zinc-400 mt-1 mb-3">N-Channel Transformer Model</p>
                        <p className="text-sm text-zinc-500 leading-relaxed">
                            PyTorch-based architecture designed for classifying malicious network packets within the CTU-13 dataset.
                        </p>
                    </article>

                    <article>
                        <h3 className="font-medium text-zinc-100">MemoRe</h3>
                        <p className="text-sm text-zinc-400 mt-1 mb-3">Dual N-Back Engine</p>
                        <p className="text-sm text-zinc-500 leading-relaxed">
                            C++/Qt and QML implementation of the working memory game with dynamic UI components and CMake build configuration.
                        </p>
                    </article>

                    <article>
                        <h3 className="font-medium text-zinc-100">AR Accessibility Smart Glasses</h3>
                        <p className="text-sm text-zinc-400 mt-1 mb-3">Hardware Prototype</p>
                        <p className="text-sm text-zinc-500 leading-relaxed">
                            Wearable system featuring heads-up captioning, MEMS microphone arrays, and local edge AI processing.
                        </p>
                    </article>
                </div>
            </section>
        </main>
    );
}
