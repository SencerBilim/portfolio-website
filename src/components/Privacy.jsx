export default function Privacy() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <header className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Privacy Policy — Wasteland Rush</h1>
          <a href="/" className="text-sky-300 underline hover:opacity-80">← Back</a>
        </header>

        <p className="text-sm text-slate-400 mb-6">
          <strong>Effective date:</strong> 12 Sep 2025<br />
          <strong>Contact:</strong>{" "}
          <a href="mailto:sencer.bilim@gmail.com" className="underline">sencer.bilim@gmail.com</a><br />
          <strong>Publisher:</strong> Sencer Bilim
        </p>

        <div className="prose prose-invert">
          <h2>1) What we do not collect</h2>
          <ul>
            <li>No player accounts.</li>
            <li>No name, email, phone, or precise location.</li>
            <li>No third-party analytics SDKs (no Firebase/Unity Analytics, etc.).</li>
          </ul>

          <h2>2) Information that is processed</h2>
          <p>To show ads and keep the Game running, the following may be processed automatically:</p>
          <ul>
            <li>Advertising identifiers (IDFA/AAID), IP address, coarse location (city/country), device &amp; OS info, app version, language, time zone, network info, crash/diagnostic data.</li>
            <li>Ad interactions (views, clicks, whether a rewarded ad was completed).</li>
            <li>Local game data on your device (coins, high score, unlocked cars). This stays on your device unless the OS backs it up.</li>
          </ul>

          <h2>3) Advertising (AdMob)</h2>
          <p>
            We use Google Mobile Ads (AdMob) for banner, interstitial, and rewarded ads. Google and its partners may use
            cookies or similar identifiers to serve personalized/non-personalized ads and to measure performance.
          </p>
          <ul>
            <li>More info: <a href="https://policies.google.com/technologies/ads">policies.google.com/technologies/ads</a></li>
            <li>AdMob policy: <a href="https://support.google.com/admob/answer/6128543">support.google.com/admob/answer/6128543</a></li>
          </ul>

          <h3>Consent &amp; choices (EEA/UK &amp; California)</h3>
          <p>
            Where required, we use Google’s UMP consent dialog for personalized ads. You can change your choice at any time
            from device settings or an in-game setting (if available).
          </p>
          <ul>
            <li><strong>Android:</strong> Settings → Google → Ads → Opt out of Ads Personalization</li>
            <li><strong>iOS:</strong> Settings → Privacy → Tracking (disable app tracking)</li>
            <li>You can also reset your advertising ID in device settings.</li>
          </ul>
          <p className="text-slate-300">
            California (CPRA): we do <strong>not “sell” or “share” personal information</strong> for our own purposes. Ads are
            provided by Google; you can limit ad personalization in device settings.
          </p>

          <h2>4) Legal bases (EEA/UK)</h2>
          <p>
            We rely on legitimate interests to operate the Game and on consent for personalized ads (via the OS or the ad
            SDK’s consent form, where required).
          </p>

          <h2>5) Children’s privacy</h2>
          <p>
            Wasteland Rush is not directed to children under 13 (or the local age threshold). If you believe a child
            provided personal data, contact us and we will delete it.
          </p>

          <h2>6) Data retention</h2>
          <ul>
            <li>Ad data is retained by Google under its policies.</li>
            <li>Local gameplay data remains on your device until you clear app data or uninstall.</li>
          </ul>

          <h2>7) Data security &amp; international transfers</h2>
          <p>
            We use reputable third parties (Google). Data may be processed worldwide. Google relies on safeguards such as
            Standard Contractual Clauses for international transfers. We apply reasonable security measures, but no method
            is 100% secure.
          </p>
          <p>
            How Google uses data from apps/sites:{" "}
            <a href="https://policies.google.com/technologies/partner-sites">
              policies.google.com/technologies/partner-sites
            </a>
          </p>

          <h2>8) Your rights</h2>
          <p>Depending on where you live (e.g., EEA/UK), you may have rights to:</p>
          <ul>
            <li>access or obtain a copy of your data,</li>
            <li>request deletion or correction,</li>
            <li>object to/limit certain processing,</li>
            <li>withdraw consent (where processing is based on consent).</li>
          </ul>
          <p>
            Because we don’t have accounts, we may ask for your advertising ID to identify your device. Contact:
            {" "}<a href="mailto:sencer.bilim@gmail.com">sencer.bilim@gmail.com</a>. We will respond within the time required by law.
          </p>

          <h2>9) Third-party links</h2>
          <p>Ads may link outside the Game. We are not responsible for external sites or their practices.</p>

          <h2>10) Changes</h2>
          <p>We may update this Policy. We will post changes here and update the effective date.</p>

          <p className="mt-8 text-sm">
            Also see our <a href="/terms" className="underline">Terms &amp; Conditions</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
