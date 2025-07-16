import './App.css'

function Projects(){
    return (
        <>
            <div className="projects-section">
                <h2>Projects</h2>
                <div className="projects-grid">

                    <div className="card">
                        <div className="card-img-placeholder">
                            <img src="cs140e-rust-ferris-crochet-downey-1.jpg" alt="os icon"/>
                        </div>
                        <div className="card-content">
                            <h3 className="card-title">Div-OS</h3>
                            <time className="card-date">2025</time>
                            <p className="card-description">
                                A modular operating system kernel built in Rust with VGA text rendering, interrupt
                                handling, and memory management.
                            </p>
                            <div className="tech-tags">
                                <span className="tag">Rust</span>
                                <span className="tag">OSDev</span>
                                <span className="tag">QEMU</span>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-img-placeholder">
                            <img src="Order_book_depth_chart.gif" alt="obe"/>
                        </div>
                        <div className="card-content">
                            <h3 className="card-title">OrderBook Engine</h3>
                            <time className="card-date">2025</time>
                            <p className="card-description">
                                A real-time trading engine in C++ using lock-free queues and multithreading.
                                Stress-tested for consistent performance under load.
                            </p>
                            <div className="tech-tags">
                                <span className="tag">C++</span>
                                <span className="tag">Concurrency</span>
                                <span className="tag">Low-Latency</span>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-img-placeholder">
                            <img src="neural_networks-002.png" alt="neural"/>
                        </div>
                        <div className="card-content">
                            <h3 className="card-title">Neural Network Library</h3>
                            <time className="card-date">2025</time>
                            <p className="card-description">
                                Built a custom neural net framework in C++ with SIMD optimizations, achieving a 3.2×
                                speedup on the MNIST dataset.
                            </p>
                            <div className="tech-tags">
                                <span className="tag">C++</span>
                                <span className="tag">ML</span>
                                <span className="tag">SIMD</span>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-img-placeholder">
                            <img src="07b40433dff5a3293648b99010ced0d4cacd7e3a-vitesse-frappe.jpg" alt="tpg"/>
                        </div>
                        <div className="card-content">
                            <h3 className="card-title">Typing Speed Game</h3>
                            <time className="card-date">2025</time>
                            <p className="card-description">
                                A full-stack web app built in React with live typing analytics, real-time feedback, and
                                a global leaderboard.
                            </p>
                            <div className="tech-tags">
                                <span className="tag">React</span>
                                <span className="tag">JavaScript</span>
                                <span className="tag">Full-Stack</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;