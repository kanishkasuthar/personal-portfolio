import "./Hero.css";

function Hero() {
  return (

    <section className="hero">

        <div className="hero-left">

            <p className="hello">
                Hello, I'm
            </p>

            <h1>
                Kanishka Suthar
            </h1>

            <h2>
               Aspiring Software Developer
            </h2>

            <p className="description">

                A motivated Information Science & Technology student with a passion
  for technology, innovation, and continuous learning. Dedicated to
  developing practical solutions, enhancing problem-solving abilities,
  and growing as a future software professional.
            </p>

            <div className="buttons">

                <a
                    href="/resume.pdf"
                    download
                    className="btn1"
                >
                    Download Resume
                </a>

                <a
                    href="#contact"
                    className="btn2"
                >
                    Contact Me
                </a>

            </div>

        </div>


        <div className="hero-right">

            <img
                src="/profile.jpg"
                alt="kanishka suthar"
            />

        </div>

    </section>

  );
}

export default Hero;