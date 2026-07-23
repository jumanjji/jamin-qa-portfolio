const githubUrl = "https://github.com/jumanjji";
const linkedInUrl = "https://www.linkedin.com/in/jamin-chaput/";
const assetBasePath = process.env.PAGES_BASE_PATH ?? "";

const ArrowIcon = () => (
  <svg
    aria-hidden="true"
    className="arrow-icon"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path d="M4 10h11M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const ExternalIcon = () => (
  <svg
    aria-hidden="true"
    className="external-icon"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path d="M6 3h7v7M13 3 5 11" stroke="currentColor" strokeWidth="1.5" />
    <path d="M11 9v4H3V5h4" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Jamin, home">
          <span className="wordmark-mark" aria-hidden="true">
            J
          </span>
          <span>
            Jamin
            <small>Quality Engineer</small>
          </span>
        </a>

        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#philosophy">Philosophy</a>
          <a href="#about">Who am I?</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="header-cta" href="#contact">
          Let&apos;s talk <ArrowIcon />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" />
            Quality Engineering Analyst · Toronto
          </p>
          <h1>
            I find the gaps between <em>expected</em> and actual.
          </h1>
          <p className="hero-intro">
            I test complex digital products across mobile, web, and APIs, then
            build the automation and feedback loops that help teams ship with
            confidence.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore my work <ArrowIcon />
            </a>
            <a className="text-link" href="#about">
              Meet the person behind the test plan
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <figure className="portrait-frame">
            <img
              src={`${assetBasePath}/jamin-portrait.webp`}
              alt="Portrait of Jamin"
            />
            <figcaption>
              <span>Jamin</span>
              <span>QA · Toronto</span>
            </figcaption>
          </figure>

          <div className="signal-card" aria-label="Quality signal summary">
            <div className="signal-card-top">
              <span>RELEASE_SIGNAL</span>
              <span className="live-label">
                <span className="status-dot" /> LIVE
              </span>
            </div>
            <div className="signal-score">
              <span className="signal-number">96</span>
              <span className="signal-unit">%</span>
              <p>Confidence, made visible.</p>
            </div>
            <div className="signal-grid">
              <div>
                <span>Surfaces</span>
                <strong>iOS · Android · Web</strong>
              </div>
              <div>
                <span>Automation</span>
                <strong>Appium · Playwright</strong>
              </div>
              <div>
                <span>Approach</span>
                <strong>Explore · Verify · Improve</strong>
              </div>
            </div>
            <div className="scan-line" aria-hidden="true" />
          </div>
        </div>

        <a className="scroll-cue" href="#work" aria-label="Scroll to work">
          <span>SCROLL TO PROOF</span>
          <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section className="section work-section" id="work">
        <div className="section-heading">
          <p className="section-number">01 / Selected work</p>
          <h2>Useful confidence, not just more test cases.</h2>
          <div className="work-heading-copy">
            <p>
              Native mobile apps are my specialty: understanding how iOS and
              Android should feel, not only whether they technically work. I
              also bring deep familiarity with product analytics, from
              structuring clear event schemas to validating the signals teams
              use to understand real user behaviour.
            </p>
            <span className="placeholder-link" role="link" aria-disabled="true">
              Download résumé <span>Coming soon</span>
            </span>
          </div>
        </div>

        <article className="experience-card">
          <div className="experience-meta">
            <span className="experience-year">Current</span>
            <p>CBC / Radio-Canada</p>
            <p>Quality Engineering Analyst</p>
          </div>
          <div className="experience-main">
            <p className="card-label">Product quality at national scale</p>
            <h3>Testing the paths people rely on when the story matters.</h3>
            <p>
              Supporting quality across iOS and Android news experiences,
              internal analytics products, and collaborating in multiplatform
              readiness for large events like the 2026 Winter Olympics and
              election cycles. My work combines exploratory testing, release
              validation, automation with Appium and Playwright, and API-level
              investigation.
            </p>
            <ul className="skill-list" aria-label="Core skills">
              <li>Mobile QA</li>
              <li>Exploratory testing</li>
              <li>Appium · Java</li>
              <li>Playwright · TypeScript</li>
              <li>GraphQL &amp; API testing</li>
            </ul>
          </div>
        </article>

        <section className="previous-work" aria-labelledby="previous-work-title">
          <div className="previous-heading">
            <span className="experience-year">Previous experience</span>
            <h3 id="previous-work-title">
              Product-minded QA across fintech and community platforms.
            </h3>
          </div>

          <div className="previous-grid">
            <article className="previous-card previous-card-dark">
              <div className="previous-card-top">
                <span>KOHO Financial</span>
                <span>2019 — 2020</span>
              </div>
              <div>
                <p className="repo-kicker">QA Lead · Toronto</p>
                <h4>Quality across a fast-moving fintech product.</h4>
                <p>
                  Led testing for KOHO&apos;s cross-platform Ionic applications
                  on iOS and Android. I investigated backend behaviour and
                  tested APIs across sandbox and production environments, while
                  helping shape features that improved customer satisfaction,
                  product functionality, and company cost efficiency.
                </p>
              </div>
              <ul className="previous-tags" aria-label="KOHO experience">
                <li>iOS + Android</li>
                <li>Ionic</li>
                <li>API testing</li>
                <li>Fintech</li>
              </ul>
            </article>

            <article className="previous-card">
              <div className="previous-card-top">
                <span>Bunz</span>
                <span>2017 — 2019</span>
              </div>
              <div>
                <p className="repo-kicker">QA Analyst / Lead · Toronto</p>
                <h4>Owning quality from the roadmap to release.</h4>
                <p>
                  Oversaw software updates across iOS, Android, and web;
                  contributed to roadmap strategy, sprint planning; and
                  wrote feature and technical specifications. I tested front-end
                  and back-end code while guiding the strategy for
                  mobile test automation. Also did basic blockchain transaction 
                  testing with ERC-20 tokens and smart contracts.
                </p>
              </div>
              <ul className="previous-tags" aria-label="Bunz experience">
                <li>Release ownership</li>
                <li>Mobile + web</li>
                <li>Sprint planning</li>
                <li>Test strategy</li>
                <li>Marketplace</li>
                <li>Cryptocurrency</li>
              </ul>
            </article>
          </div>

          <aside className="personal-projects">
            <span className="personal-projects-index">SIDE_QUESTS</span>
            <div>
              <h4>Personal projects &amp; product collaboration</h4>
              <p>
                Outside formal roles, I take on contract QA work for websites
                and mobile applications, keep expanding my coding skills in
                JavaScript and Elixir, and collaborate with friends on product
                ideas, from early feature shaping through testing and launch
                readiness.
              </p>
            </div>
          </aside>
        </section>

        <div className="subsection-heading">
          <p className="card-label">Reusable foundations</p>
          <h3>Clone the setup. Add the product.</h3>
        </div>

        <div className="repo-grid">
          <article className="repo-card repo-card-blue">
            <div className="repo-topline">
              <span>01</span>
              <span>Mobile automation</span>
            </div>
            <div>
              <p className="repo-kicker">Appium · Java</p>
              <h3>Appium Starter</h3>
              <p>
                A project-neutral foundation for native mobile automation:
                driver setup, reusable utilities, platform separation, and
                clear seams for your app-specific code.
              </p>
            </div>
            <div className="repo-footer">
              <ul>
                <li>iOS + Android</li>
                <li>CI-ready structure</li>
                <li>Project-neutral</li>
              </ul>
              <a href={githubUrl} target="_blank" rel="noreferrer">
                Add repository URL <ExternalIcon />
              </a>
            </div>
          </article>

          <article className="repo-card repo-card-dark">
            <div className="repo-topline">
              <span>02</span>
              <span>Web + API automation</span>
            </div>
            <div>
              <p className="repo-kicker">Playwright · TypeScript</p>
              <h3>Playwright Starter</h3>
              <p>
                A clean starting point for browser and API testing with
                reusable fixtures, sensible configuration, and patterns that
                can grow with a real product.
              </p>
            </div>
            <div className="repo-footer">
              <ul>
                <li>Cross-browser</li>
                <li>Web + API</li>
                <li>Scalable patterns</li>
              </ul>
              <a href={githubUrl} target="_blank" rel="noreferrer">
                Add repository URL <ExternalIcon />
              </a>
            </div>
          </article>
        </div>

        {/* <div className="future-grid" aria-label="Future project placeholders">
          <article className="future-card">
            <span className="future-index">03</span>
            <div>
              <p className="card-label">Next case study</p>
              <h3>Your next deep dive belongs here.</h3>
              <p>
                Add a concise problem, your testing strategy, and the release
                outcome.
              </p>
            </div>
            <span className="placeholder-pill">Future project</span>
          </article>
          <article className="future-card">
            <span className="future-index">04</span>
            <div>
              <p className="card-label">Next tool</p>
              <h3>Show how you improve the system.</h3>
              <p>
                Reserve this space for a QA utility, experiment, or open-source
                contribution.
              </p>
            </div>
            <span className="placeholder-pill">Future project</span>
          </article>
        </div> */}

        <aside className="writing-callout">
          <div>
            <p className="card-label">Occasional notes</p>
            <h3>Thoughts from outside the test plan.</h3>
          </div>
          <div>
            <p>
              Occasionally I jot down my thoughts on Medium about testing,
              automation practices, and other subjects.
            </p>
            <span
              className="placeholder-link placeholder-link-dark"
              role="link"
              aria-disabled="true"
            >
              Visit my Medium <span>Link coming soon</span>
            </span>
          </div>
        </aside>
      </section>

      <section className="section philosophy-section" id="philosophy">
        <div className="section-heading philosophy-heading">
          <p className="section-number">02 / My QA philosophy</p>
          <h2>Quality starts with people.</h2>
          <p>
            The best QA engineers do more than find defects. They connect
            disciplines, represent the user, and help teams see the product as
            one coherent system. Building relationships with the developers,
            product owners, designers, and others I work with is something I
            value as much as my technical skills. I want to be someone people
            want to work with.
          </p>
        </div>

        <div className="philosophy-intro">
          <p className="philosophy-lead">
            People skills are the most important skill in quality assurance.
          </p>
          <div className="philosophy-copy">
            <p>
              QA is deeply collaborative. We work every day with developers,
              product managers, designers, analysts, and operations teams. We
              write technical specifications, organize analytics requirements,
              and build broad operational knowledge across systems. The job is
              not standing at the end of a process with a red pen; it is helping
              the whole team make better decisions throughout it.
            </p>
            <p>
              To me, being QA means being the user, with enough empathy,
              curiosity, and platform knowledge to notice when an experience
              does not feel right, even if it technically “works.”
            </p>
          </div>
        </div>

        <div className="principle-grid">
          <article className="principle-card principle-card-blue">
            <span className="principle-index">A</span>
            <p className="card-label">Collaborate first</p>
            <h3>Quality is a team sport.</h3>
            <p>
              Clear communication and strong relationships turn QA from a
              release gate into a source of shared product understanding.
            </p>
          </article>
          <article className="principle-card principle-card-light">
            <span className="principle-index">B</span>
            <p className="card-label">Native means native</p>
            <h3>A gesture can be a requirement.</h3>
            <p>
              Apple&apos;s Human Interface Guidelines and Google&apos;s
              Material Design guidance are my practical bibles. A missing
              gesture or an icon that is hard to tap is as much a bug as a
              crash or a page that won&apos;t load because the API returned a
              JSON object instead of a JSON array. Pop quiz: is the standard
              iOS overflow icon three vertical dots or three horizontal dots?
              (•••) Quality also means knowing when an Android user won&apos;t
              recognize an iOS icon right away.
            </p>
          </article>
          <article className="principle-card principle-card-acid">
            <span className="principle-index">C</span>
            <p className="card-label">Automation + judgment</p>
            <h3>Expected paths are only the start.</h3>
            <p>
              Reality check: not everything can be automated, and not
              everything that can should be automated. It may seem like manual
              testing is yesterday&apos;s game, but it isn&apos;t. Exploratory
              manual testing is the foundation of what makes a QA a QA. Test
              scripts don&apos;t think like users. Every tool has its place,
              and all types of testing are important.
            </p>
          </article>
        </div>

        {/* <blockquote className="philosophy-quote">
          <span aria-hidden="true">“</span>
          <p>
            Anyone can test one expected happy path. A QA has to imagine ten
            unhappy paths around it.
          </p>
        </blockquote> */}

        <article className="bar-story">
          <div className="bar-visual">
            <img
              src={`${assetBasePath}/qa-bar-illustration.webp`}
              alt="Editorial illustration of a tester at a bar surrounded by increasingly absurd edge cases"
            />
            <span className="bar-caption">A short story about edge cases</span>
          </div>
          <div className="bar-script">
            <p className="card-label">The classic QA joke</p>
            <h3>A QA walks into a bar.</h3>
            <p className="bar-actions">
              Crawls into a bar. Dances into a bar. Flies into a bar.
            </p>
            <ol className="test-sequence">
              <li>
                <span>INPUT_01</span>
                Orders one beer.
              </li>
              <li>
                <span>INPUT_02</span>
                Orders zero beers.
              </li>
              <li>
                <span>INPUT_03</span>
                Orders 99,999,999,999 beers.
              </li>
              <li>
                <span>INPUT_04</span>
                Orders a lizard.
              </li>
              <li>
                <span>INPUT_05</span>
                Orders minus one beers.
              </li>
              <li>
                <span>INPUT_06</span>
                Orders “ueicbksjdhd.”
              </li>
            </ol>
            <p className="bar-punchline">
              The first real customer walks in and asks where the bathroom is.
              The bar bursts into flames.
            </p>
            <p className="bar-meaning">
              The joke lands because it is true: testing the inputs you expect
              is not the same as understanding how a real person will use the
              product.
            </p>
          </div>
        </article>
      </section>

      <section className="section about-section" id="about">
        <div className="section-heading about-heading">
          <p className="section-number">03 / Who am I?</p>
          <h2>More than a set of skills.</h2>
        </div>

        <div className="whoami-intro">
          <p className="about-lead">
            I like working for people who are looking for a person, not just a
            set of skills.
          </p>
          <div className="about-copy">
            <p>
              Curiosity shapes how I test, but it also shapes the rest of my
              life. I am always learning a language, carrying a camera, reading
              one more chapter, or finding a reason to get beneath the surface.
              Those interests are not separate from how I work, they are where
              my attention to detail, empathy, and sense of exploration come
              from.
            </p>
          </div>
        </div>

        <div className="identity-grid">
          <article className="identity-card culture-card">
            <div className="identity-card-top">
              <span>01</span>
              <span>Culture &amp; community</span>
            </div>
            <div className="culture-content">
              <p className="identity-kicker">Where I come from</p>
              <h3>Culture is something you participate in.</h3>
              <p>
                As an Indigenous person, I value opportunities to attend
                cultural events, powwows, language camps, and community
                gatherings. They keep me connected, learning, and grounded in
                something larger than work.
              </p>
            </div>
            <figure className="culture-photo">
              <img
                src={`${assetBasePath}/culture-camp.webp`}
                alt="A lodge among trees at an Indigenous cultural camp"
              />
              <figcaption>Language camp · Northern Ontario</figcaption>
            </figure>
          </article>

          <article className="identity-card image-card reading-card">
            <div className="identity-card-top">
              <span>02</span>
              <span>Reading</span>
            </div>
            <img
              src={`${assetBasePath}/whoami-reading.webp`}
              alt="Abstract illustration of an open book transforming into three orbiting celestial bodies"
            />
            <div className="identity-card-body">
              <p className="identity-kicker">Reading</p>
              <h3>One more chapter.</h3>
              <p>
                I am currently on book three of the <em>Three-Body Problem</em>
                {" "}series. Haruki Murakami is my favourite author, and I will
                happily disappear into fantasy, science fiction, adventure, or
                a good vintage Archie comic.
              </p>
            </div>
          </article>

          <article className="identity-card image-card">
            <div className="identity-card-top">
              <span>03</span>
              <span>Photography</span>
            </div>
            <img
              src={`${assetBasePath}/whoami-camera.webp`}
              alt="Abstract illustration of a compact film camera and curling strip of 35mm film"
            />
            <div className="identity-card-body">
              <p className="identity-kicker">Photography</p>
              <h3>Rarely without a camera.</h3>
              <p>
                Waiting for my film to get developed reminds me that not
                everything has to be instant. Film is my regular dose of
                nostalgia. Besides, who actually looks at all the photos on
                their phone&apos;s camera roll?
              </p>
            </div>
          </article>

          <article className="identity-card image-card">
            <div className="identity-card-top">
              <span>04</span>
              <span>Scuba diving</span>
            </div>
            <img
              src={`${assetBasePath}/whoami-scuba.webp`}
              alt="Abstract illustration of a scuba diver exploring calm blue water"
            />
            <div className="identity-card-body">
              <p className="identity-kicker">Scuba diving</p>
              <h3>Get beneath the surface.</h3>
              <p>
                I could wax lyrical about the ocean or about the transferable
                skills from diving to my professional life. But the truth is,
                every time I go down, it&apos;s terrifying but worth it. I
                probably read <em>20,000 Leagues Under the Sea</em> too much as
                a kid.
              </p>
            </div>
          </article>

          <article className="identity-card image-card languages-card">
            <div className="identity-card-top">
              <span>05</span>
              <span>Languages</span>
            </div>
            <img
              src={`${assetBasePath}/whoami-languages.webp`}
              alt="Four abstract speech forms orbiting a globe"
            />
            <div className="identity-card-body">
              <p className="identity-kicker">Languages</p>
              <h3>I love languages.</h3>

              <div className="language-list" aria-label="Languages spoken">
                <span>English</span>
                <strong>Fluent</strong>
                <span>Spanish</span>
                <strong>Fluent</strong>
                <span>French</span>
                <strong>Conversational</strong>
                <span>Italian</span>
                <strong>Learning</strong>
                <span>Cree</span>
                <strong>Improving</strong>
              </div>
            </div>
          </article>

          <article className="identity-card film-card">
            <div className="identity-card-top">
              <span>06</span>
              <span>Film</span>
            </div>
            <div className="film-card-content">
              <div>
                <p className="identity-kicker">Film</p>
                <h3>
                  Directors, scores, and the beautiful absence of a cut.
                </h3>
              </div>
              <div className="film-card-side">
                <figure className="film-card-visual">
                  <img
                    src={`${assetBasePath}/whoami-film.webp`}
                    alt="A film projector casting light through a sequence of cinematic frames"
                  />
                </figure>
                <div className="film-card-copy">
                  <p>
                    I love movies. If you let me talk about framing, directors,
                    scores, or how Tarkovsky filmed that one 15-minute scene
                    with no cuts, we will be here all day.
                  </p>
                  <a
                    href="https://letterboxd.com/jumanjji/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Check out my Letterboxd <ExternalIcon />
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="section-number" style={{ alignSelf: "start" }}>
          04 / Connect
        </p>
        <div className="contact-main">
          <h2>Let&apos;s make quality a feature.</h2>
          <p>
            Want to talk mobile testing, automation strategy, or a role where
            product thinking and quality engineering meet? Or would you like
            a similar portfolio for your own work? I&apos;d love to hear from you.
          </p>
        </div>
        <div className="contact-links">
          <a href={linkedInUrl} target="_blank" rel="noreferrer">
            LinkedIn <ExternalIcon />
          </a>
          <a href={githubUrl} target="_blank" rel="noreferrer">
            GitHub <ExternalIcon />
          </a>
          <a href="mailto:hello@jamin.qa">
            Add email <ArrowIcon />
          </a>
        </div>
      </section>

      <footer>
        <p>
          © {new Date().getFullYear()} Jamin · Built with care, tested with
          intent.
        </p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
