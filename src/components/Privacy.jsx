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
          <strong>Contact:</strong> <a href="mailto:sencer.bilim@gmail.com" className="underline">sencer.bilim@gmail.com</a><br />
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
          <p>
            To show ads and keep the game running, the following may be processed automatically:
          </p>
          <ul>
            <li>Advertising identifiers (IDFA/AAID), IP address, coarse location (city/country), device & OS info, app version, language, time zone, network info, crash/diagnostic data.</li>
            <li>Ad interactions (views, clicks, whether a rewarded ad was completed).</li>
            <li>Local game data on your device (coins, high score, unlocked cars). This stays on your device unless the OS backs it up.</li>
          </ul>

          <h2>3) Advertising (AdMob)</h2>
          <p>
            We use Google Mobile Ads (AdMob) for banner, interstitial, and rewarded ads. Google and its partners may use cookies or similar identifiers to serve personalized/non-personalized ads and to measure performance.
          </p>
          <ul>
            <li>More info: <a href="https://policies.google.com/technologies/ads">policies.google.com/technologies/ads</a></li>
            <li>AdMob policy: <a href="https://support.google.com/admob/answer/6128543">support.google.com/admob/answer/6128543</a></li>
          </ul>

          <h3>Your choices</h3>
          <ul>
            <li><strong>Android:</strong> Settings → Google → Ads → Opt out of Ads Personalization</li>
            <li><strong>iOS:</strong> Settings → Privacy → Tracking (disable app tracking)</li>
            <li>You can also reset your advertising ID in device settings.</li>
          </ul>

          <h2>4) Legal bases (EEA/UK)</h2>
          <p>We rely on legitimate interests to operate the game and consent for personalized ads (via OS or the ad SDK’s consent form, where required).</p>

          <h2>5) Children’s privacy</h2>
          <p>Wasteland Rush is not directed to children under 13 (or the local age threshold). If you believe a child provided personal data, contact us and we will delete it.</p>

          <h2>6) Data retention</h2>
          <ul>
            <li>Ad data is retained by Google under its policies.</li>
            <li>Local gameplay data remains on your device until you clear app data or uninstall.</li>
          </ul>

          <h2>7) Data security & transfers</h2>
          <p>We use reputable third parties (Google). Data may be processed worldwide. We apply reasonable safeguards, but no method is 100% secure.</p>

          <h2>8) Your rights</h2>
          <p>
            Depending on where you live, you may have rights to access, delete, or object. Because we don’t have accounts, you may need to provide your advertising ID to identify your device. Contact:{" "}
            <a href="mailto:sencer.bilim@gmail.com">sencer.bilim@gmail.com</a>.
          </p>

          <h2>9) Third-party links</h2>
          <p>Ads may link outside the game. We are not responsible for external sites or practices.</p>

          <h2>10) Changes</h2>
          <p>We may update this policy. We’ll post changes here and update the effective date.</p>
        </div>
      </div>
    </div>
  );
}
