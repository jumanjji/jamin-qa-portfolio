import type { Metadata } from "next";
import Link from "next/link";
import PrivacyToggle from "../PrivacyToggle";
import SiteFooter from "../SiteFooter";

export const metadata: Metadata = {
  title: "Privacy | Jamin",
  description:
    "How Jamin uses privacy-conscious portfolio analytics and how visitors can control tracking.",
  alternates: {
    canonical: "/privacy/",
  },
};

export default function PrivacyPage() {
  return (
    <main className="privacy-page">
      <header className="site-header privacy-header" data-analytics-section="Header">
        <Link
          className="wordmark"
          href="/"
          aria-label="Jamin, return to portfolio"
          data-analytics-click="Link"
          data-analytics-type="Navigation"
          data-analytics-name="Home"
          data-analytics-text="Jamin"
          data-analytics-location="Header"
          data-analytics-destination-type="Page"
          data-analytics-destination-name="Home"
        >
          <span className="wordmark-mark" aria-hidden="true">
            J
          </span>
          <span className="wordmark-copy">
            <span className="wordmark-name">
              Jamin
              <span
                className="wordmark-pronunciation"
                aria-label="Pronounced Jay min"
              >
                JAY-min · /ˈdʒeɪ.mɪn/
              </span>
            </span>
            <small>Quality Engineer</small>
          </span>
        </Link>

        <nav aria-label="Privacy page navigation">
          <Link
            href="/"
            data-analytics-click="Link"
            data-analytics-type="Navigation"
            data-analytics-name="Portfolio"
            data-analytics-location="Header"
            data-analytics-destination-type="Page"
            data-analytics-destination-name="Home"
          >
            Portfolio
          </Link>
          <a
            href="#analytics-preferences"
            data-analytics-click="Link"
            data-analytics-type="Navigation"
            data-analytics-name="Analytics Choice"
            data-analytics-location="Header"
            data-analytics-destination-type="Section"
            data-analytics-destination-name="Analytics Preferences"
          >
            Analytics choice
          </a>
        </nav>

        <a
          className="header-cta"
          href="mailto:hello@jamin.qa?subject=Privacy%20question"
          data-analytics-click="Link"
          data-analytics-type="Contact"
          data-analytics-name="Privacy Question"
          data-analytics-location="Header"
          data-analytics-destination-type="Contact"
          data-analytics-destination-name="Email"
          data-analytics-contact-method="Email"
        >
          Privacy question
        </a>
      </header>

      <article>
        <section
          className="privacy-hero"
          data-analytics-section="Privacy Summary"
          data-analytics-section-position="1"
        >
          <div data-analytics-view-marker>
            <p className="eyebrow">
              <span className="status-dot" />
              Clear by design
            </p>
            <h1>
              Privacy, without the <em>fine-print fog.</em>
            </h1>
            <p className="privacy-intro">
              This portfolio uses limited analytics to understand what visitors
              find useful. It does not collect IP addresses for analytics, use
              advertising trackers, or sell visitor information.
            </p>
          </div>

          <aside className="privacy-summary" aria-label="Privacy summary">
            <p className="privacy-summary-label">At a glance</p>
            <ul>
              <li>
                <span>01</span>
                Interaction and device context only
              </li>
              <li>
                <span>02</span>
                No analytics IP or derived location
              </li>
              <li>
                <span>03</span>
                No advertising or data sale
              </li>
              <li>
                <span>04</span>
                Tracking can be disabled below
              </li>
            </ul>
          </aside>
        </section>

        <div className="privacy-body">
          <PrivacyToggle />

          <div
            className="privacy-policy"
            data-analytics-section="Privacy Policy"
            data-analytics-section-position="2"
          >
            <div className="privacy-policy-heading" data-analytics-view-marker>
              <p className="section-number">Policy / 01</p>
              <div>
                <h2>Privacy policy</h2>
                <p>Last updated: July 26, 2026</p>
              </div>
            </div>

            <div className="privacy-policy-grid">
              <section>
                <h3>The short version</h3>
                <p>
                  Jamin uses Amplitude to understand how people use this
                  portfolio. The information is used to improve the site and
                  demonstrate responsible analytics implementation. It is not
                  used for advertising, sold, or shared with advertisers.
                </p>
              </section>

              <section>
                <h3>Information collected</h3>
                <p>Portfolio analytics may include:</p>
                <ul>
                  <li>pages and portfolio sections viewed;</li>
                  <li>links, buttons, and downloads selected;</li>
                  <li>scroll depth, visit duration, and engagement milestones;</li>
                  <li>
                    browser, operating system, device type, platform, and
                    language;
                  </li>
                  <li>
                    browser time zone, such as America/Toronto or
                    Europe/London;
                  </li>
                  <li>
                    the referring website’s hostname, such as github.com,
                    without its path or query details; and
                  </li>
                  <li>randomly generated device, session, and page-view identifiers.</li>
                </ul>
                <p>
                  Time zone and language can suggest broad context, but they do
                  not reliably identify a visitor’s physical location.
                </p>
              </section>

              <section>
                <h3>Information not collected through analytics</h3>
                <p>
                  Amplitude is configured not to receive your IP address.
                  Because of that, analytics location fields such as city,
                  region, and country remain empty. Analytics do not collect
                  your name, email address, message contents, precise
                  geolocation, or information typed into forms. Session replay
                  and automatic interaction capture are disabled.
                </p>
              </section>

              <section>
                <h3>Why it is collected</h3>
                <p>This information helps Jamin:</p>
                <ul>
                  <li>understand how visitors navigate the portfolio;</li>
                  <li>see which sections, links, and buttons are useful;</li>
                  <li>improve the site’s content, design, and usability; and</li>
                  <li>
                    demonstrate how analytics can be thoughtfully structured
                    and instrumented in a software portfolio.
                  </li>
                </ul>
                <p>
                  Analytics source code and event structure may be public on
                  GitHub. Visitor-level analytics data is not published there.
                </p>
              </section>

              <section>
                <h3>No advertising or sale</h3>
                <p>
                  Analytics are not used to show targeted advertising or
                  create advertising profiles. Jamin does not sell or rent
                  visitor information and does not disclose it to advertisers
                  or data brokers.
                </p>
              </section>

              <section>
                <h3>Amplitude and service providers</h3>
                <p>
                  <a
                    href="https://amplitude.com/"
                    target="_blank"
                    rel="noreferrer"
                    data-analytics-click="Link"
                    data-analytics-type="External"
                    data-analytics-name="Amplitude"
                    data-analytics-location="Privacy Policy"
                    data-analytics-destination-type="Website"
                    data-analytics-destination-name="Amplitude"
                    data-analytics-domain="amplitude.com"
                  >
                    Amplitude
                  </a>{" "}
                  processes portfolio analytics on Jamin’s behalf and may use
                  subprocessors to provide and secure its service. Read{" "}
                  <a
                    href="https://amplitude.com/privacy"
                    target="_blank"
                    rel="noreferrer"
                    data-analytics-click="Link"
                    data-analytics-type="External"
                    data-analytics-name="Amplitude Privacy Notice"
                    data-analytics-location="Privacy Policy"
                    data-analytics-destination-type="Website"
                    data-analytics-destination-name="Amplitude Privacy Notice"
                    data-analytics-domain="amplitude.com"
                  >
                    Amplitude’s privacy notice
                  </a>{" "}
                  for more information.
                </p>
                <p>
                  Hosting and infrastructure providers may separately process
                  basic request information, including IP addresses and server
                  logs, when necessary to deliver and secure the site. Service
                  providers may process information outside Canada, including
                  in the United States, where it may be subject to local laws.
                </p>
              </section>

              <section>
                <h3>Cookies and browser storage</h3>
                <p>
                  Amplitude uses a first-party analytics cookie to maintain a
                  random device identifier and session information. The cookie
                  may remain for up to 12 months. It is used for portfolio
                  analytics, not advertising.
                </p>
                <p>
                  The analytics choice above is stored separately in your
                  browser. If you disable analytics, the site checks that
                  preference before tracking starts on later visits. Clearing
                  browser storage may reset both analytics identifiers and your
                  saved preference.
                </p>
              </section>

              <section>
                <h3>Retention and safeguards</h3>
                <p>
                  Analytics information is retained while it remains reasonably
                  useful for the purposes described here. Jamin reviews the
                  information periodically and deletes or aggregates data that
                  is no longer needed.
                </p>
                <p>
                  Reasonable safeguards include limiting the data collected,
                  restricting access to the analytics account, using reputable
                  providers, and avoiding names, email addresses, IP addresses,
                  and sensitive information in analytics.
                </p>
              </section>

              <section>
                <h3>Your choices and deletion requests</h3>
                <p>
                  Disabling analytics stops future collection in that browser.
                  It does not automatically delete information already received.
                  You may request access, correction, or deletion by contacting
                  Jamin.
                </p>
                <p>
                  Because the analytics layer does not collect names or email
                  addresses, it may not always be possible to connect an
                  analytics record to you. A temporary analytics identifier may
                  be needed to locate information associated with a current
                  visit.
                </p>
              </section>

              <section>
                <h3>Privacy questions</h3>
                <p>
                  Jamin is responsible for privacy questions relating to this
                  site. Email{" "}
                  <a
                    href="mailto:hello@jamin.qa?subject=Privacy%20request"
                    data-analytics-click="Link"
                    data-analytics-type="Contact"
                    data-analytics-name="Privacy Request"
                    data-analytics-location="Privacy Policy"
                    data-analytics-destination-type="Contact"
                    data-analytics-destination-name="Email"
                    data-analytics-contact-method="Email"
                  >
                    hello@jamin.qa
                  </a>{" "}
                  with the subject “Privacy Request” and describe your question
                  or request.
                </p>
                <p>
                  If a concern cannot be resolved directly, you may contact the{" "}
                  <a
                    href="https://www.priv.gc.ca/"
                    target="_blank"
                    rel="noreferrer"
                    data-analytics-click="Link"
                    data-analytics-type="External"
                    data-analytics-name="Office of the Privacy Commissioner of Canada"
                    data-analytics-location="Privacy Policy"
                    data-analytics-destination-type="Website"
                    data-analytics-destination-name="Office of the Privacy Commissioner of Canada"
                    data-analytics-domain="priv.gc.ca"
                  >
                    Office of the Privacy Commissioner of Canada
                  </a>{" "}
                  or the privacy regulator in your province or territory.
                </p>
              </section>

              <section>
                <h3>Changes to this policy</h3>
                <p>
                  This policy may be updated if the site, its analytics
                  practices, or applicable requirements change. The date above
                  will show when it was last revised. Notice and consent will be
                  provided where a material change requires them.
                </p>
              </section>
            </div>
          </div>
        </div>
      </article>

      <SiteFooter page="privacy" />
    </main>
  );
}
