import Link from "next/link";

type SiteFooterProps = {
  page: "home" | "privacy";
};

export default function SiteFooter({ page }: SiteFooterProps) {
  return (
    <footer data-analytics-section="Footer">
      <p>
        © {new Date().getFullYear()} Jamin · Built with care, tested with
        intent.
      </p>
      <div className="footer-links">
        {page === "home" ? (
          <>
            <Link
              href="/privacy"
              data-analytics-click="Link"
              data-analytics-type="Navigation"
              data-analytics-name="Privacy"
              data-analytics-location="Footer"
              data-analytics-destination-type="Page"
              data-analytics-destination-name="Privacy"
            >
              Privacy
            </Link>
            <a
              href="#top"
              data-analytics-click="Link"
              data-analytics-type="Navigation"
              data-analytics-name="Back to Top"
              data-analytics-location="Footer"
              data-analytics-destination-type="Section"
              data-analytics-destination-name="Hero"
            >
              Back to top ↑
            </a>
          </>
        ) : (
          <Link
            href="/"
            data-analytics-click="Link"
            data-analytics-type="Navigation"
            data-analytics-name="Back to Portfolio"
            data-analytics-location="Footer"
            data-analytics-destination-type="Page"
            data-analytics-destination-name="Home"
          >
            ← Back to portfolio
          </Link>
        )}
      </div>
    </footer>
  );
}
