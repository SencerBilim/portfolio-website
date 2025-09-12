export default function Terms() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <header className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Terms & Conditions — Wasteland Rush</h1>
          <a href="/" className="text-sky-300 underline hover:opacity-80">← Back</a>
        </header>

        <p className="text-sm text-slate-400 mb-6">
          <strong>Effective date:</strong> 12 Sep 2025<br />
          <strong>Contact:</strong> <a href="mailto:sencer.bilim@gmail.com" className="underline">sencer.bilim@gmail.com</a>
        </p>

        <div className="prose prose-invert">
          <h2>1) License</h2>
          <p>We grant you a personal, non-exclusive, non-transferable, revocable license to install and use the Game on a device you own or control for entertainment purposes only.</p>

          <h2>2) Virtual items & ads</h2>
          <ul>
            <li>Virtual items/currency have no real-world value, are non-refundable, and exist only within the Game.</li>
            <li>We may show banner, interstitial, and rewarded ads. Rewarded ads may unlock cosmetics or progress when fully viewed.</li>
          </ul>

          <h2>3) Prohibited conduct</h2>
          <ul>
            <li>No reverse engineering, cheating, exploiting bugs, or using unauthorized tools.</li>
            <li>No modifying, distributing, or creating derivative works of the Game.</li>
            <li>No interfering with servers, networks, or other players.</li>
            <li>Don’t use the Game where prohibited by law.</li>
          </ul>

          <h2>4) Ownership</h2>
          <p>All rights in the Game (code, art, audio, trademarks) belong to us or our licensors. No rights are transferred except the limited license above.</p>

          <h2>5) Updates & availability</h2>
          <p>We may update, change, suspend, or discontinue the Game (or any feature) at any time, with or without notice.</p>

          <h2>6) Disclaimers</h2>
          <p>THE GAME IS PROVIDED “AS IS” WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND MERCHANTABILITY. USE AT YOUR OWN RISK.</p>

          <h2>7) Limitation of liability</h2>
          <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE AND OUR LICENSORS SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF DATA OR PROFITS. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID (IF ANY) FOR THE GAME IN THE 12 MONTHS BEFORE THE CLAIM.</p>

          <h2>8) Termination</h2>
          <p>We may suspend/terminate access if you violate these Terms. You may stop using the Game by uninstalling it.</p>

          <h2>9) Governing law</h2>
          <p>These Terms are governed by the laws of Türkiye (İstanbul courts), subject to your mandatory consumer rights.</p>

          <h2>10) Privacy</h2>
          <p>Your use is also governed by our <a href="/privacy">Privacy Policy</a>.</p>

          <h2>11) Changes</h2>
          <p>We may update these Terms. Continued use after changes means you accept them.</p>
        </div>
      </div>
    </div>
  );
}
