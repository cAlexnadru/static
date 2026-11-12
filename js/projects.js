/* ==========================================================================
   PROJECT DATA
   ---------------------------------------------------------------------------
   To add a new project:
   1. Add an object to the appropriate array below (concepts or useCases)
   2. Give it a unique `id` (e.g., "p-my-project")
   3. Fill in title, description, meta, and the html content
   4. That's it — it auto-appears on the homepage and in project navigation.
   
   To reorder projects: just move the object up or down in the array.
   To remove a project: delete or comment out its object.
   ========================================================================== */

const projectsConfig = {

  /* ---------- Concepts (Personal Work) ---------- */
  concepts: [
    {
      id: "p-veloce",
      title: "Veloce // Rail: OOUX & Transit Architecture",
      description: "Re-architecting national rail ticketing & live station telemetry via OOUX, Material 3 Expressive, and WCAG 2.2 AAA.",
      meta: "Transit & OOUX",
      html: `
        <h1>Veloce // Rail: OOUX & Transit Architecture</h1>
        <p class="project-subtitle">National Rail Ticketing & Live Station Telemetry Redesign · Trenitalia Case Study</p>

        <!-- Standalone Prototype Callout -->
        <div class="prototype-banner">
          <div class="prototype-badge">
            <span class="badge-dot"></span> Interactive OOUX Prototype & Live Case Study
          </div>
          <p class="prototype-lead">
            <strong>Project Overview:</strong> A complete Object-Oriented UX (OOUX), Material Design 3 Expressive, and <strong>WCAG 2.2 AAA / EN 301 549</strong> compliant mobile & desktop rail ticketing system designed to eliminate hostile linear railway database silos. Built with Vite, React 18, Tailwind CSS, and standalone HTML embeds.
          </p>
          <div class="prototype-actions">
            <a href="demos/veloce-rail/index.html" target="_blank" rel="noopener noreferrer" class="btn primary">Launch Fullscreen App Demo (Vite + React) ↗</a>
            <a href="veloce.html" target="_blank" rel="noopener noreferrer" class="btn">Standalone Card Embed ↗</a>
            <a href="https://github.com/cAlexnadru/veloce-rail-ooux" target="_blank" rel="noopener noreferrer" class="btn">GitHub Repository ↗</a>
            <a href="https://docs.google.com/document/d/1zOR19xR4WKmk8rKsT_dh0wvG9a-up2bDLVY9ClBnMP4/edit?usp=drivesdk" target="_blank" rel="noopener noreferrer" class="btn">Master Spec (Google Doc) ↗</a>
          </div>
        </div>

        <!-- Live Embedded Interactive Device Frame -->
        <div class="device-frame-wrapper">
          <div class="device-frame-header">
            <div class="device-dots">
              <span class="dot red"></span>
              <span class="dot yellow"></span>
              <span class="dot green"></span>
            </div>
            <div class="device-url-bar">veloce.html — Interactive Live Component (OOUX + M3 Expressive)</div>
            <a href="demos/veloce-rail/index.html" target="_blank" rel="noopener noreferrer" class="device-open-btn" aria-label="Open full demo in new window">↗ Fullscreen App</a>
          </div>
          <div class="device-frame-container" style="height: 620px;">
            <iframe src="veloce.html" title="Veloce // Rail Interactive Live Component" loading="lazy"></iframe>
          </div>
          <p class="device-caption">Interactive component running live above. Try toggling Track Switch (11→14), Tunnel 0G Mode, Flip 180° Reversal, Seat 11B auto-increment, and Digital Check-In.</p>
        </div>

        <h2>The Origin Story: August in Rome Does Not Forgive Bad Software</h2>
        <blockquote style="border-left: 4px solid var(--focus-ring); padding-left: 1.5rem; margin: 1.5rem 0; font-style: normal; color: var(--text-main);">
          <p><em>"I was standing inside the cavernous concrete oven of Roma Termini, the August heat radiating off the travertine floor while a subtle knot of high-stakes logistics tightened in my chest. Cristina and I were heading south toward the coast and the ferry to Procida—a trip where I had an engagement ring tucked safely away and zero desire to miss our connection. All I needed from the Trenitalia app was two tickets, two adjacent seats, and a confirmed track number.</em></p>
          <p><em>Instead, I got a masterclass in hostile systems architecture."</em></p>
        </blockquote>

        <p>First came the glare test. Under the blinding Roman sun cutting through the terminal glass, Trenitalia’s low-contrast <code>#C8102E</code> brand red and pale gray labels dissolved into an unreadable smear. When I stepped into the shade and switched apps for ninety seconds to double-check our ferry window and message Cristina, the app punished me with its infamous 15-minute session purge—wiping our selected trains, passenger details, and fare tiers back to a blank screen.</p>
        <p>On attempt two, tapping the seat map before locking the second passenger counter on Screen 1 triggered a silent, unlabelled UI lock that refused to select a second seat without explaining why. When we finally reached checkout, the payment gateway choked and spat out a raw localization string—<code>label_payment_failed_title</code>—like a developer's debug console mocking us while the departure clock ticked down.</p>
        <p>Even after the tickets went through, the anxiety didn't stop. Our itinerary mixed a high-speed <em>Frecciarossa</em> leg with a connecting <em>Regionale</em> segment. In Trenitalia’s database, those are two completely different legal universes; in the app, they were homogenized into a single confusing feed that buried the mandatory regional <strong>Digital Check-In</strong> button (<em>Convalida Digitale</em>) behind nested menus. And as we sprinted across the concourse, the overhead station <em>Tabellone</em> flipped our departure from Track 11 to Track 14 three full minutes before the app’s batch API caught up.</p>
        <p>Sitting on that train as it finally pulled out of Rome—and later, after Cristina said <em>yes</em> on the pastel-colored shores of Procida—my UX designer brain couldn't let that Termini meltdown go. Trenitalia hadn't built an app for travelers; they had built a glass window over their legacy PICO and RFI databases, forcing human beings with luggage and racing heartbeats to act as human compilers.</p>
        <p><strong>That August afternoon in Rome is why Veloce // Rail exists.</strong></p>

        <h2>1. UX Research & Object Discovery: The 4 Critical Failure Points</h2>
        <p>Through heuristic audits and passenger interviews across Italian transit corridors, four structural failure points emerged in legacy rail platforms:</p>
        <ul>
          <li><strong>1. Multilingual Search Failures:</strong> International travelers typing English city exonyms (<em>"Florence"</em>, <em>"Venice"</em>) received <code>null</code> search results because search inputs queried raw Italian RFI database strings (<em>Firenze</em>, <em>Venezia</em>).</li>
          <li><strong>2. Rigid Linear Wizards & Silent Precondition Blocks:</strong> Failing to pre-configure exact passenger counts on Screen 1 silently blocked seat selection on Screen 3 without inline feedback, while a destructive 15-minute session timeout purged the entire shopping cart whenever a user switched apps to coordinate.</li>
          <li><strong>3. Homogenized Multi-Carrier Rules & Physical Blind Spots:</strong> Journeys combining a high-speed <em>Frecciarossa</em> leg with a <em>Regionale</em> feeder leg obscured mandatory regional digital check-in rules, failed to warn passengers when trains reversed physical direction (180°) at dead-end terminals like Florence Central (<code>FI_SMN</code>), and stranded commuters in rural mountain tunnels without cellular connectivity.</li>
          <li><strong>4. Accessibility & Regulatory Liability:</strong> Portrait-only orientation locks (violating EN 301 549 Clause 11.1.3.4), color-only seat maps (Clause 11.1.4.1), low-contrast brand reds (<code>#C8102E</code>), and unlabelled form fields failed European Accessibility Act mandates.</li>
        </ul>

        <h2>2. Object-Oriented UX (OOUX) Architecture: The 9 Core Domain Objects</h2>
        <p>Rather than designing screen-by-screen flows that trap users in rigid paths, Veloce // Rail models the entire rail experience around 9 inspectable, directly manipulatable domain objects:</p>

        <ol style="color: var(--text-secondary); font-size: clamp(1rem, 3vw, 1.1rem); margin-bottom: 1.25rem; padding-left: 1.5rem;">
          <li style="margin-bottom: 0.6rem;"><strong>Journey (Macro Itinerary):</strong> Origin to final destination, total duration, transfer count, CO2 saved, and live status (<code>ON_SCHEDULE</code>, <code>DELAYED</code>, <code>TIGHT_CONNECTION</code>). Direct actions: live pin, share deep link, free alternate train swap.</li>
          <li style="margin-bottom: 0.6rem;"><strong>Leg (Continuous Transit Segment):</strong> Uninterrupted ride aboard one rolling-stock unit (<code>FR 9614</code>). Telemetry progress, intermediate stops, and scheduled vs. actual platform.</li>
          <li style="margin-bottom: 0.6rem;"><strong>Station (Physical Rail Interchange):</strong> Canonical name (<em>Firenze S.M.N.</em>), exonym aliases (<em>"Florence"</em>, <em>"Florenz"</em>), live Departure/Arrival boards, and Sala Blu accessibility assistance.</li>
          <li style="margin-bottom: 0.6rem;"><strong>Ticket & Fare Contract:</strong> PNR (<code>M84K2P</code>), encrypted UIC 918.3 Aztec QR code, tariff tier (<em>Base Flex</em>, <em>Saver</em>, <em>Super Saver</em>), service level (<em>Standard</em>, <em>Premium</em>, <em>Quiet Zone</em>, <em>Executive</em>), and instant Apple/Google Wallet export.</li>
          <li style="margin-bottom: 0.6rem;"><strong>Digital Check-In:</strong> Regional ticket activation state machine (<code>PENDING</code>, <code>AVAILABLE</code>, <code>COMPLETED</code>, <code>OFFLINE_SIGNED</code>) with rotating cryptographic anti-screenshot token and offline tunnel clock verification.</li>
          <li style="margin-bottom: 0.6rem;"><strong>Seat & Coach:</strong> Coach number, European seat number (<code>11A</code>), leg-relative orientation (forward/backward/table), window alignment, and hardware flags (230V AC, USB-C, wheelchair).</li>
          <li style="margin-bottom: 0.6rem;"><strong>Passenger Profile & Loyalty:</strong> Guest vs. Member identity, 10-second Passkey onboarding, saved companions, tokenized Apple/Google Pay, and loyalty points.</li>
          <li style="margin-bottom: 0.6rem;"><strong>Ancillary Add-On:</strong> Bike space, pet pass, extra luggage, and seat meals with automatic rolling-stock compatibility checks.</li>
          <li style="margin-bottom: 0.6rem;"><strong>Disruption & Compensation Claim:</strong> Automated EU Regulation 2021/782 delay tracking (25% at 60–119 min; 50% at ≥120 min) with 1-tap payout (Voucher +10%, Card Refund, Loyalty Points).</li>
        </ol>

        <p><strong>Edge-Case Objects Surfaced:</strong></p>
        <ul>
          <li><strong>Transfer Node:</strong> Explicit intermediate wait time, walking distance, elevator access, and Minimum Connect Time safety score (flagging &lt; 8 min as tight).</li>
          <li><strong>Dynamic Track Object:</strong> Decouples scheduled track from confirmed track (<code>11 → TRACK 14 · Confirmed 10:48</code>) with 3D flip animation.</li>
          <li><strong>Terminal Reversal Node:</strong> Automatically flips seat orientation 180° at dead-end stations (Florence S.M.N. and Rome Termini).</li>
          <li><strong>Offline Cryptographic Check-In:</strong> Locally signed hardware-clock verification token (<code>⚡ Offline Verified</code>) for tunnel rides without 4G/5G.</li>
        </ul>

        <h2>3. Dual-Mode WCAG 2.2 AAA Color Token Matrix</h2>
        <p>Engineered specifically for outdoor readability in blinding Mediterranean sunlight as well as night glare:</p>

        <div class="project-table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Semantic Role</th>
                <th>Light Mode Token</th>
                <th>Light Contrast</th>
                <th>Dark Mode Token</th>
                <th>Dark Contrast</th>
                <th>Non-Color Redundancy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Primary Brand / CTA</strong></td>
                <td><code>#446300</code> (Text <code>#FFFFFF</code>)</td>
                <td><strong>7.1:1 (AAA)</strong></td>
                <td><code>#BFFF00</code> (Text <code>#0A0C10</code>)</td>
                <td><strong>15.8:1 (AAA)</strong></td>
                <td>High-salience pill shape + action verb</td>
              </tr>
              <tr>
                <td><strong>App Canvas</strong></td>
                <td><code>#FFFFFF</code> / <code>#E6ECE0</code></td>
                <td>Base</td>
                <td><code>#0B0C0E</code> / <code>#07080A</code></td>
                <td>Base</td>
                <td>Clean contrast separation</td>
              </tr>
              <tr>
                <td><strong>Elevated Card Surface</strong></td>
                <td><code>#F4F6F0</code></td>
                <td>Tonal tint</td>
                <td><code>#1A1D24</code></td>
                <td>Lifted slate</td>
                <td>1px structural border</td>
              </tr>
              <tr>
                <td><strong>Primary Text</strong></td>
                <td><code>#0A0C10</code></td>
                <td><strong>19.8:1 (AAA)</strong></td>
                <td><code>#F4F6F0</code></td>
                <td><strong>17.1:1 (AAA)</strong></td>
                <td>Dynamic bolding on times & nouns</td>
              </tr>
              <tr>
                <td><strong>Secondary Text</strong></td>
                <td><code>#434950</code></td>
                <td><strong>7.5:1 (AAA)</strong></td>
                <td><code>#BEC5CE</code></td>
                <td><strong>7.4:1 (AAA)</strong></td>
                <td>Top-aligned persistent labels</td>
              </tr>
              <tr>
                <td><strong>Validated / Live</strong></td>
                <td><code>#035E43</code> (<code>#BCECE0</code> bg)</td>
                <td><strong>7.3:1 (AAA)</strong></td>
                <td><code>#4ADE80</code> (<code>#003825</code> bg)</td>
                <td><strong>10.8:1 (AAA)</strong></td>
                <td>Shield-Check icon (✔) + security wave</td>
              </tr>
              <tr>
                <td><strong>Warning / Track Switch</strong></td>
                <td><code>#8A4B00</code> (<code>#FFDEA8</code> bg)</td>
                <td><strong>7.0:1 (AAA)</strong></td>
                <td><code>#FFCC4D</code> (<code>#422400</code> bg)</td>
                <td><strong>11.2:1 (AAA)</strong></td>
                <td>Warning Triangle (▲) + 2px dashed border</td>
              </tr>
              <tr>
                <td><strong>Critical / Disruption</strong></td>
                <td><code>#9E0B22</code> (<code>#FFDAD9</code> bg)</td>
                <td><strong>7.6:1 (AAA)</strong></td>
                <td><code>#FF808B</code> (<code>#5C000E</code> bg)</td>
                <td><strong>7.8:1 (AAA)</strong></td>
                <td>Octagon Stop (■) + 2px solid border</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>4. 6-Slide Executive Deck Blueprint</h2>
        <div class="project-table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Slide</th>
                <th>Headline</th>
                <th>Core Narrative & Proof Point</th>
                <th>Visual Delivery</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Slide 1</strong></td>
                <td>The Legacy Rail Tax: Why Travelers Abandon Checkout</td>
                <td>Contrast database-driven wizards (null English searches, 15-min cart purges, raw exception keys) against traveler mental models.</td>
                <td>Split comparison: Legacy error screen vs. Veloce // Rail OOUX object hierarchy.</td>
              </tr>
              <tr>
                <td><strong>Slide 2</strong></td>
                <td>OOUX Architecture: Built Around Real-World Objects</td>
                <td>Show how the 9 core domain objects connect Discovery Mode and Live Transit HUD Mode without linear dead-ends.</td>
                <td>System blueprint card: 3-tier progressive disclosure anatomy on 8x8px grid.</td>
              </tr>
              <tr>
                <td><strong>Slide 3</strong></td>
                <td>Zero-Friction Discovery & Direct Seat Manipulation</td>
                <td>Showcase English exonym resolution, 2x2 Bento Fare & Service Class matrix, 180° reversal alerts, and inline passenger auto-incrementing.</td>
                <td>Bento Fare/Class Drawer + Interactive SVG Coach Map.</td>
              </tr>
              <tr>
                <td><strong>Slide 4</strong></td>
                <td>Built for the Platform: Live IoT HUD & Tunnel Resilience</td>
                <td>Highlight full FROM/TO station clarity, kinetic track switch alerts (11 → 14), BLE Beacon auto-check-in, and 100%-brightness Aztec QR sheet.</td>
                <td>Live Travel HUD + 100%-Brightness Aztec QR Sheet.</td>
              </tr>
              <tr>
                <td><strong>Slide 5</strong></td>
                <td>Turning Disruptions into Trust: 1-Tap EU Claims & Swaps</td>
                <td>Demonstrate live dispatch detection of missed connections and ≥ 60m delays triggering 1-tap free train swaps and 25%–50% EU refunds.</td>
                <td>Landscape 12-Column Split View: EN 301 549 orientation reflow with Disruption Banner.</td>
              </tr>
              <tr>
                <td><strong>Slide 6</strong></td>
                <td>Business & Accessibility ROI: WCAG 2.2 AAA by Default</td>
                <td>Quantify funnel lift (8 steps to 2, zero cart purges, Guest-to-Member Passkey onboarding) and 7.1:1+ AAA legal compliance.</td>
                <td>Metrics Bento Grid: Pairing Light and Dark tokens with Member Benefits card.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>5. Quantifiable Impact & Literature Validation</h2>
        <ul>
          <li><strong>Configuration Steps Reduced from 8 to 2:</strong> Inline progressive disclosure and direct seat-to-passenger auto-incrementing eliminated multi-screen backtracking and cut booking task time to under 15 seconds.</li>
          <li><strong>Zero Cart Purges & Resilient Tunnel Check-In:</strong> Decoupled local cart persistence from the 10-minute seat hold timer, completely removing the 15-minute session wipeout, while optimistic offline cryptographic check-in eliminated rural connectivity fines.</li>
          <li><strong>100% WCAG 2.2 AAA & EN 301 549 Compliance:</strong> Achieved 7.1:1 (Light) and 15.8:1 (Dark) primary contrast ratios, full Portrait and 12-Column Landscape Split-View orientation support, 48x48px+ touch targets, and complete non-color redundancy across every seat and alert state.</li>
        </ul>

        <blockquote>
          "A task model must identify how a system needs to behave to match user expectations... because things happen when a user wants them to and the information they are after can be found."<br>
          <small>— Richard Caddick & Steve Cable, <em>Communicating the User Experience</em></small>
        </blockquote>

        <blockquote>
          "Ensure that users never lose their work as a result of an error on their part [or] hardware, software, or communication problems... State the problem, its probable cause, and what the user can do about it."<br>
          <small>— Wilbert O. Galitz, <em>The Essential Guide to User Interface Design</em></small>
        </blockquote>
      `
    },
    {
      id: "p-mello",
      title: "Mello: Soft Thoughts, Clear Steps",
      description: "Sensory-first zero-friction task unfolding utility powered by headless Gemini JSON.",
      meta: "AI & OOUX",
      html: `
        <h1>Mello: Soft Thoughts, Clear Steps</h1>
        <p class="project-subtitle">Master Brand Book, OOUX Architecture, Product Strategy & Investor Pitch Deck</p>

        <!-- Standalone Prototype Callout -->
        <div class="prototype-banner">
          <div class="prototype-badge">
            <span class="badge-dot"></span> Standalone HTML Prototype
          </div>
          <p class="prototype-lead">
            <strong>Prototype Notice:</strong> This is a standalone interactive HTML prototype designed and created with <strong>Google Antigravity</strong> and <strong>Gemini</strong>. It runs entirely in the browser with full offline simulation of Gemini JSON parsing, local state persistence, contextual AI subtask generation, custom tag studio, and multi-channel export.
          </p>
          <div class="prototype-actions">
            <a href="mello.html" target="_blank" rel="noopener noreferrer" class="btn primary">Launch Standalone Prototype (Full Screen ↗)</a>
            <a href="https://github.com/cAlexnadru/mello-task-organizer" target="_blank" rel="noopener noreferrer" class="btn">GitHub Repository ↗</a>
            <a href="prototypes/mello/index.html" target="_blank" rel="noopener noreferrer" class="btn">Direct Folder Link</a>
          </div>
        </div>

        <!-- Live Embedded Device Frame -->
        <div class="device-frame-wrapper">
          <div class="device-frame-header">
            <div class="device-dots">
              <span class="dot red"></span>
              <span class="dot yellow"></span>
              <span class="dot green"></span>
            </div>
            <div class="device-url-bar">mello.html — Standalone Interactive Prototype (Antigravity & Gemini)</div>
            <a href="mello.html" target="_blank" rel="noopener noreferrer" class="device-open-btn" aria-label="Open in new window">↗ Full Screen</a>
          </div>
          <div class="device-frame-container">
            <iframe src="mello.html" title="Mello Interactive Prototype" loading="lazy"></iframe>
          </div>
          <p class="device-caption">Interactive prototype embedded above. Click or tap to try onboarding, thought unfolding, voice sheet preview, "+ AI Step", Tag Studio, and export flows.</p>
        </div>

        <h2>1. Executive Summary & Product Vision</h2>
        <p><strong>The Problem:</strong> Knowledge workers, creatives, and neurodivergent thinkers experience ideas, meeting notes, and daily plans as unstructured streams of consciousness. Traditional productivity tools like Jira, Notion, and Todoist force users to act as database administrators—creating rows, assigning hierarchies, and selecting tags before a core thought is even fully captured.</p>
        <p>Conversely, standard conversational AI wrappers introduce friction of their own: high extraction latency, bloated token overhead, and endless, unstructured chat threads that require manual copying and re-organizing.</p>

        <p><strong>The Solution:</strong> <strong>Mello</strong> is a calm, zero-friction, sensory-first mobile and web utility that converts messy thoughts, spoken streams, or raw notes into structured, highly actionable tasks and subtasks in a single tap.</p>

        <p><strong>Core Architectural Advantage:</strong> Mello treats the LLM strictly as a headless, deterministic JSON parser (<code>[{"t":"Task","s":["Subtask"]}]</code>) rather than a conversational chatbot. This design choice yields critical operational benefits:</p>
        <ul>
          <li><strong>Cuts token consumption by 78%–85%</strong> per operation.</li>
          <li><strong>Guarantees sub-second extraction latency.</strong></li>
          <li><strong>Shifts 100% of editing</strong>, context-aware subtask expansion (<code>+ AI Step</code>), custom tagging, and multi-channel exporting to <strong>zero-cost local UI state</strong>.</li>
        </ul>

        <h2>2. Brand Identity & Sensory Concept ("Cotton, Morning Mist & August Lake")</h2>
        <p><strong>2.1 The Brand Ethos:</strong> Mello deliberately rejects the sterile, high-stress visual aesthetic of corporate task trackers. Its visual and verbal identity is modeled after a minimalist botanical fragrance house—evoking freshly laundered linen, quiet morning mist, white blossoms in spring, and the glass-calm surface of a lake on a Sunday morning in August.</p>
        <ul>
          <li><strong>Name:</strong> <strong>Mello</strong> (5 characters, soft rounded phonetics, zero header truncation on 320px+ mobile viewports).</li>
          <li><strong>Tagline:</strong> <em>Soft thoughts, clear steps.</em></li>
          <li><strong>Brand Archetype:</strong> The Calm Curator — unburdened, weightless, tactile, and joyful.</li>
        </ul>

        <p><strong>2.2 The Logo & App Icon ("The Cloud-Pebble & Sprout"):</strong></p>
        <ul>
          <li><strong>Form:</strong> A soft, organic cloud silhouette with a delicate double-line botanical border housing a minimalist two-leaf sprout at its center.</li>
          <li><strong>Wordmark:</strong> Lowercase <code>mello</code> set in high-contrast rounded geometric typography (<code>Geist SemiBold</code>, tracking <code>-0.03em</code>) in Deep Pine Ink (<code>#2E3A32</code>).</li>
          <li><strong>Mobile App Icon:</strong> A tactile squircle tile bathed in a subtle diagonal pastel gradient (Whisper Sage <code>#D9E4DD</code> to Blossom Blush <code>#F2E3E3</code>) featuring an embossed white Cloud-Pebble emblem.</li>
        </ul>

        <p><strong>2.3 The 85 / 10 / 5 Color Discipline & WCAG 2.2 AAA Palette:</strong></p>
        <p>To eliminate visual noise and cognitive fatigue, Mello enforces a strict ratio of <strong>85% neutral linen canvas / 10% botanical sage structure / 5% pastel accent</strong>, offering complete accessibility in both Light Mode ("Morning Snow") and Dark Mode ("Midnight Lake").</p>

        <div class="project-table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Token Name</th>
                <th>Hex Code</th>
                <th>Role & Emotional Association</th>
                <th>WCAG 2.2 Contrast vs. Primary Ink</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Morning Snow</strong></td>
                <td><code>#F7F5F0</code></td>
                <td>Primary warm linen background canvas (85% surface area)</td>
                <td><strong>14.8 : 1 (AAA)</strong></td>
              </tr>
              <tr>
                <td><strong>Pure Alabaster</strong></td>
                <td><code>#FFFFFF</code></td>
                <td>Elevated task card surface & modal sheet container</td>
                <td><strong>16.1 : 1 (AAA)</strong></td>
              </tr>
              <tr>
                <td><strong>Whisper Sage</strong></td>
                <td><code>#D9E4DD</code></td>
                <td>Primary brand container, active pills, soft botanical borders</td>
                <td><strong>11.4 : 1 (AAA)</strong></td>
              </tr>
              <tr>
                <td><strong>Primary Forest Ink</strong></td>
                <td><code>#1E4631</code></td>
                <td>Primary CTA button fill (<em>Unfold into Steps</em>) with white text</td>
                <td><strong>10.4 : 1 (AAA)</strong></td>
              </tr>
              <tr>
                <td><strong>Blossom Blush</strong></td>
                <td><code>#F2E3E3</code></td>
                <td>Secondary accent container (Voice Preview, AI Step, Pro badge)</td>
                <td><strong>12.2 : 1 (AAA)</strong></td>
              </tr>
              <tr>
                <td><strong>Sunday Lake</strong></td>
                <td><code>#E2EFF1</code></td>
                <td>Custom Tag Swatch — Soft water blue-green (<code>#133A47</code> ink)</td>
                <td><strong>10.6 : 1 (AAA)</strong></td>
              </tr>
              <tr>
                <td><strong>Spring Pollen</strong></td>
                <td><code>#FAF2D2</code></td>
                <td>Custom Tag Swatch — Faded butter yellow (<code>#4A3508</code> ink)</td>
                <td><strong>10.9 : 1 (AAA)</strong></td>
              </tr>
              <tr>
                <td><strong>Cotton Lavender</strong></td>
                <td><code>#EDE8F8</code></td>
                <td>Custom Tag Swatch — Pressed iris violet (<code>#311F54</code> ink)</td>
                <td><strong>11.1 : 1 (AAA)</strong></td>
              </tr>
              <tr>
                <td><strong>Midnight Lake</strong></td>
                <td><code>#2E3A32</code></td>
                <td>Deep slate ink & Dark Mode primary surface foundation</td>
                <td><strong>14.2 : 1 (AAA)</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>2.4 Typography, Grid & Accessibility Guardrails:</strong></p>
        <ul>
          <li><strong>Display & Brand Headlines:</strong> <code>Geist</code> (SemiBold 600, tracking <code>-0.02em</code>).</li>
          <li><strong>Functional UI & Task Hierarchy:</strong> <code>Inter</code> (Regular 400 for subtasks, Medium 500 for controls, SemiBold 600 for parent tasks).</li>
          <li><strong>Spatial System:</strong> Strict <strong>8x8px base grid</strong> with <strong>24px (<code>1.5rem</code>) section padding</strong> and card separation to preserve visual breathing room.</li>
          <li><strong>Single-Line Button Mandate:</strong> Every interactive button and pill enforces <code>white-space: nowrap</code>, <code>overflow: hidden</code>, <code>text-overflow: ellipsis</code>, and a minimum <strong>44x44px touch target</strong> (<code>min-h-[44px]</code>). Buttons never wrap onto two rows; secondary actions stack cleanly in responsive 1-column or 2-column grids.</li>
        </ul>

        <h2>3. Object-Oriented UX (OOUX) & Interaction Architecture</h2>
        <p><strong>3.1 Core Domain Objects:</strong> Mello maps the user's mental model into four distinct, directly manipulatable domain objects:</p>
        <ol style="color: var(--text-secondary); font-size: clamp(1rem, 3vw, 1.1rem); margin-bottom: 1.25rem; padding-left: 1.5rem;">
          <li style="margin-bottom: 0.5rem;"><strong>Thought Dump (Source Object):</strong> Unstructured text or voice transcript captured from the user.</li>
          <li style="margin-bottom: 0.5rem;"><strong>Task Item (Parent Object):</strong> An actionable headline (<code>t</code>) extracted from the source text, maintaining completion state, inline editable text, and assigned Tag IDs.</li>
          <li style="margin-bottom: 0.5rem;"><strong>Subtask Step (Child Object):</strong> Granular execution steps (<code>s</code>) nested beneath a parent Task Item. Can be extracted initially, added manually via <code>+ Step</code>, or generated contextually via <code>+ AI Step</code>.</li>
          <li style="margin-bottom: 0.5rem;"><strong>Custom Tag (Metadata Object):</strong> User-defined category pills managed in the Profile Studio utilizing 6 botanical pastel colorways (Sage, Blush, Lake, Pollen, Lavender, Linen).</li>
        </ol>

        <p><strong>3.2 The 3-Screen Progressive Disclosure Flow:</strong></p>
        <pre><code>+-----------------------------------------------------------------------+
| SCREEN 1: WELCOME & PRO GATE                                         |
| [Emblem & Aura] -> Path A: Email Entry (Pro) | Path B: Guest Mode    |
+-----------------------------------------------------------------------+
                                   |
                                   v
+-----------------------------------------------------------------------+
| SCREEN 2: UNIFIED WORKSPACE (Single Canvas)                           |
| +-------------------------------------------------------------------+ |
| | Thought Input Card (Textarea / Preset Pills / Voice Sheet)         | |
| +-------------------------------------------------------------------+ |
| | Unfolded Steps List (Tasks / Subtasks / Local State Controls)    | |
| +-------------------------------------------------------------------+ |
+-----------------------------------------------------------------------+
                                   |
                                   v
+-----------------------------------------------------------------------+
| SCREEN 3: PROFILE, TAG STUDIO & EXPORT ENGINE                         |
| [Tier Switcher] -> [6-Pastel Tag Studio] -> [3-Sec Multi-Channel Export]|
+-----------------------------------------------------------------------+</code></pre>

        <p><strong>Screen 1: Branded Welcome & Instant Pro Simulation Gate:</strong> Features the Mello Cloud-Pebble emblem, soft pastel aura gradient, and two immediate onboarding paths: Path A (Unlock Mello Pro via email) and Path B (Continue in Guest Mode with zero entry barriers).</p>
        <p><strong>Screen 2: Unified Thought-to-Step Workspace:</strong> Rather than splitting input and task verification across separate wizard steps, Mello maintains both the Thought Input Card and the Unfolded Steps List on a single, continuous scrollable canvas.</p>
        <ul>
          <li><strong>Contextual <code>+ AI Step</code> Generation:</strong> Each parent task card includes a dedicated <code>+ AI Step</code> button that sends only the parent task title and its existing subtasks (~45 tokens) to generate 1–2 logical next micro-steps on demand.</li>
          <li><strong>Voice Note Sheet:</strong> Tapping <em>Voice</em> activates a tactile bottom sheet displaying an animated visual waveform and sample spoken inputs for instant voice-to-task preview.</li>
        </ul>
        <p><strong>Screen 3: Profile, Custom Tag Studio & 3-Second Export Engine:</strong> Profile tier switcher, 6-pastel Custom Tag Studio, and a 3-second export sheet formatting active tasks into clean Markdown or plaintext for WhatsApp, Gmail, Google Calendar, Clipboard, or <code>.txt</code> file download.</p>

        <h2>4. Token-Minimized Headless AI Engineering & Unit Economics</h2>
        <p><strong>4.1 One-Way Deterministic JSON Extraction:</strong> Conversational AI architectures struggle with operating efficiency because accumulated chat histories multiply token volume exponentially. Mello avoids this through a strict one-way extraction pipeline:</p>
        <ul>
          <li><strong>System Prompt (19 tokens):</strong> <code>"Extract actionable tasks and subtasks. Output ONLY JSON array: [{\"t\":\"Task\",\"s\":[\"Subtask\"]}]"</code></li>
          <li><strong>Structured Schema Enforcement:</strong> Powered by <code>Gemini 2.5 Flash</code> with <code>responseMimeType: "application/json"</code> and an enforced responseSchema, eliminating extra conversational tokens or markdown wrappers.</li>
          <li><strong>Contextual Subtask Expansion (<code>+ AI Step</code>):</strong> Sends only <code>"Task: [Title]. Existing steps: [List]. Suggest 2 concise next subtasks."</code>, consuming roughly ~65 tokens per execution.</li>
        </ul>

        <div class="project-table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Metric</th>
                <th>Standard Conversational AI Wrapper</th>
                <th>Mello Deterministic JSON Pipeline</th>
                <th>Efficiency Gain</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>System + Input Tokens</strong></td>
                <td>~450 tokens (chat history + verbose prompt)</td>
                <td>~95 tokens (raw text + 19-token instruction)</td>
                <td><strong>-78.9% tokens</strong></td>
              </tr>
              <tr>
                <td><strong>Output Tokens</strong></td>
                <td>~320 tokens (prose + markdown formatting)</td>
                <td>~68 tokens (minified JSON array)</td>
                <td><strong>-78.8% tokens</strong></td>
              </tr>
              <tr>
                <td><strong>Follow-up Edit / Tagging</strong></td>
                <td>~600+ tokens (re-prompting the LLM)</td>
                <td><strong>0 tokens</strong> (100% local UI state manipulation)</td>
                <td><strong>100% savings</strong></td>
              </tr>
              <tr>
                <td><strong>Average API Cost / 1,000 Ops</strong></td>
                <td>~$0.42 USD</td>
                <td><strong>~$0.038 USD</strong></td>
                <td><strong>11x cheaper</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>5. Commercialization, Market Simulation & 3-Year Investor Projections</h2>
        <p><strong>5.1 Monetization Model:</strong></p>
        <ul>
          <li><strong>Mello Free (Guest / Basic):</strong> Unlimited manual task creation, 5 AI Thought Unfolds per day, 3 default tags, WhatsApp/Clipboard export.</li>
          <li><strong>Mello Pro ($4.99/mo or $39.00/yr):</strong> Unlimited AI Thought Unfolds, unlimited <code>+ AI Step</code> contextual expansions, Voice-to-Task transcription, unlimited custom pastel tags, and 1-tap Google Workspace integration (Tasks, Calendar, Docs, Gmail).</li>
          <li><strong>Mello Teams ($9.99/seat/mo):</strong> Shared meeting-note extractions, Slack/Teams bot extensions, and direct Jira/Linear webhook actions.</li>
        </ul>

        <p><strong>5.2 Simulated Usage Metrics (10,000-User Beta Cohort):</strong></p>
        <ul>
          <li><strong>Time-to-First-Value (TTFV):</strong> <strong>6.4 seconds</strong> (compared to 48 seconds in conventional task apps requiring account setup and project creation).</li>
          <li><strong>Average Daily Usage (Pro User):</strong> 3.8 Thought Unfolds + 4.2 <code>+ AI Step</code> expansions daily = ~780 tokens/day (~23,400 tokens/month).</li>
          <li><strong>Monthly Infrastructure Cost per Active Pro User:</strong> <strong>$0.011 USD / month</strong> on Gemini 2.5 Flash.</li>
          <li><strong>Gross Margin on Mello Pro ($4.99/mo):</strong> <strong>94.8%</strong> before app store fees (~81.8% net margin post 15% store commissions).</li>
          <li><strong>Free-to-Pro Conversion Rate:</strong> <strong>6.8%</strong> (driven by the low-friction unlock model and daily habit loops).</li>
        </ul>

        <div class="project-table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Metric</th>
                <th>Year 1 (Launch & PMF)</th>
                <th>Year 2 (Voice & Workspace)</th>
                <th>Year 3 (B2B Teams & Scale)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Monthly Active Users (MAU)</strong></td>
                <td>25,000</td>
                <td>140,000</td>
                <td>480,000</td>
              </tr>
              <tr>
                <td><strong>Paying Pro Subscribers (6.8% -> 8.2%)</strong></td>
                <td>1,700</td>
                <td>10,500</td>
                <td>39,360</td>
              </tr>
              <tr>
                <td><strong>Annual Recurring Revenue (ARR)</strong></td>
                <td><strong>$101,796</strong></td>
                <td><strong>$628,740</strong></td>
                <td><strong>$2,356,876</strong></td>
              </tr>
              <tr>
                <td><strong>Annual LLM & Infrastructure Cost</strong></td>
                <td>$3,420</td>
                <td>$19,800</td>
                <td>$71,400</td>
              </tr>
              <tr>
                <td><strong>Net Operating Margin (EBITDA %)</strong></td>
                <td><strong>74.2%</strong></td>
                <td><strong>79.5%</strong></td>
                <td><strong>82.4%</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>6. Productivity Workflows & Future Roadmap</h2>
        <p><strong>Post-Meeting Brain Dump:</strong> Speak or type 4 quick sentences following a client call. Mello unfolds them into organized deliverables and action items, ready for dispatch to the team via Gmail within seconds.</p>
        <p><strong>Creative Ideation & Game/Product Design:</strong> Capture broad mechanics, narrative notes, or feature concepts. Apply <code>+ AI Step</code> to individual task cards to break complex ideas into structured execution steps.</p>
        <p><strong>Neurodivergent / ADHD Executive Function Support:</strong> Eliminates starting friction by converting overwhelming thoughts into clear, manageable checklists with single-tap micro-steps.</p>

        <p><strong>Future Roadmap:</strong></p>
        <ul>
          <li><strong>Phase 1 (Current Architecture):</strong> Web app with Welcome/Pro Gate, Gemini 2.5 Flash JSON engine, <code>+ AI Step</code> subtask expansion, 6-pastel Tag Studio, Light/Dark mode support, and export flows.</li>
          <li><strong>Phase 2 (Q1–Q2):</strong> Native on-device voice processing (Whisper WebAssembly / Gemini Multimodal Audio) and lock-screen widgets for mobile platforms.</li>
          <li><strong>Phase 3 (Q3–Q4):</strong> Camera-based OCR ("Whiteboard & Sticky Note Unfold") alongside bi-directional Google Tasks and Apple Reminders sync.</li>
        </ul>

        <blockquote>"Mello demonstrates how aligning sensory-first brand identity with deterministic, headless LLM architecture produces extraordinary unit economics: cutting token usage by ~80% while restoring calmness and instant focus to the modern creative workflow."</blockquote>
      `
    },
    {
      id: "p-ooux",
      title: "OOUX Component Sandbox",
      description: "Interactive Object-Oriented UX pattern library.",
      meta: "2023",
      html: `
        <h1>OOUX Component Sandbox</h1>
        <p>Placeholder content for the sandbox project.</p>
      `
    },
    {
      id: "p-3d",
      title: "3D Visual Exploration",
      description: "Concept renders bridging 3D assets and UI.",
      meta: "2022",
      html: `
        <h1>3D Visual Exploration</h1>
        <p>Placeholder for 3D exploration renders and UI crossovers.</p>
      `
    },
  ],

  /* ---------- Use Cases (NDA Sanitized) ---------- */
  useCases: [
    {
      id: "p-grid",
      title: "GRID Unified Infrastructure Software",
      description: "Unifying disparate legacy modules into a single, scalable dashboard.",
      meta: "Enterprise B2B",
      html: `
        <h1>GRID Unified Infrastructure Software</h1>
        <p><strong>The Problem:</strong> GRID was a fragmented legacy ecosystem where technical debt hindered usability. Facility managers struggled with a "Frankenstein" UI that made scaling infrastructure and onboarding new staff a high-risk bottleneck.</p>
        <p><strong>The Solution:</strong> A comprehensive UX overhaul and visual refresh that unified disparate modules into a single, scalable dashboard. I introduced a modular component library and a new Real-Time Analytics suite; all while maintaining full compatibility with 10+ years of legacy backend architecture.</p>
        <p><strong>UX Reasoning:</strong> I applied Object-Oriented UX (OOUX) to identify the core "objects" (Assets, Alerts, Zones) within the legacy data. This allowed me to create a mental model for the user that was independent of the messy database structure, significantly reducing cognitive load. Instead of a "burn-it-down" redesign, I collaborated with DevOps to build a thematic UI layer that sat atop the legacy API. This delivered a modern, high-performance experience without the multi-million dollar risk of a total backend rewrite.</p>

        <h2>Unified Monitoring & System Health</h2>
        <p><strong>The Strategy:</strong> The legacy system lacked a "birds-eye view," forcing users to hunt for errors across multiple tabs. I designed a centralized Monitoring Dashboard that aggregates real-time metrics into visual heatmaps and trend charts.</p>
        <figure>
          <img src="assets/images/image 2388.png" alt="GRID Unified Monitoring & System Health Dashboard" loading="lazy">
          <figcaption>Centralized Monitoring Dashboard aggregating real-time facility KPIs, temperature overlays, and system state timeline.</figcaption>
        </figure>
        <p><strong>The UI:</strong> Utilizing a "Bento Box" layout, I prioritized the most critical infrastructure KPIs; Energy Usage, Air Quality, and Occupancy; ensuring the most vital information is never more than a glance away.</p>
        <p><strong>Senior Insight:</strong> By implementing predictive visual patterns (such as bar charts with historical overlays), I enabled facility managers to spot anomalies before they triggered a system-wide alert, shifting the workflow from reactive to proactive. The Results: This unified view reduced the "Mean Time to Detect" (MTTD) by providing a single source of truth for complex, multi-zone environments.</p>

        <h2>Onboarding & The "Zero State"</h2>
        <p><strong>Focus:</strong> Frictionless entry into a complex system.</p>
        <p><strong>The Strategy:</strong> I replaced a cluttered, error-prone legacy landing page with a purposeful "Zero State" to guide new users toward their first success metric.</p>
        <figure>
          <img src="assets/images/image 2389.png" alt="GRID Onboarding and Zero State Screen" loading="lazy">
          <figcaption>Clean, distraction-free zero state prompting setup of initial facility operations.</figcaption>
        </figure>
        <p><strong>The UI:</strong> A high-contrast "Start New Facility Setup" CTA centers the user's primary objective, reducing the cognitive load typical of infrastructure software.</p>
        <p><strong>Insight:</strong> This screen serves as a "Clean Break," establishing the modern, simplified design language of GRID from the first interaction.</p>

        <h2>Control Hub (The "Object-First" UI)</h2>
        <p><strong>Focus:</strong> Translating technical data into human action.</p>
        <p><strong>The Strategy:</strong> Using OOUX, I grouped hundreds of raw data points into actionable "Objects": HVAC, Lighting, and Ventilation.</p>
        <figure>
          <img src="assets/images/image 2390.png" alt="GRID Control Hub Interface" loading="lazy">
          <figcaption>Control Hub: Object-first direct controls with high-affordance sliders and safety lock mechanisms.</figcaption>
        </figure>
        <p><strong>The UI:</strong> Replaced manual text entry with high-affordance sliders and status toggles for real-time adjustments.</p>
        <p><strong>Safety Feature:</strong> Introduced a "Lock Hub" mechanism to prevent accidental parameter changes; a critical requirement for high-stakes infrastructure environments.</p>

        <h2>Input Configuration & Alerts (Legacy Integration)</h2>
        <p><strong>Focus:</strong> Organizing the "Engine Room" without breaking the backend.</p>
        <p><strong>The Strategy:</strong> Unified disparate legacy data (Pressure, CO2, Humidity) into a standardized, sortable table architecture.</p>
        <figure>
          <img src="assets/images/image 2391.png" alt="GRID Alerts Hub and Notifications Overview" loading="lazy">
          <figcaption>Alerts Hub: System notifications, severity levels (Critical, Warning), and batch acknowledgment workflow.</figcaption>
        </figure>
        <p><strong>The UI:</strong> Implemented color-coded Status Badges (Active, Error, Draft) to enable "at-a-glance" system health checks.</p>
        <p><strong>The Bridge:</strong> Designed this view to sit atop existing legacy APIs, providing a modern UX without requiring a multi-million dollar database rewrite.</p>

        <h2>Automation Rules (Logic & Literacy)</h2>
        <p><strong>Focus:</strong> Empowering non-technical users with "If/Then" logic.</p>
        <p><strong>The Strategy:</strong> I transformed complex scripting requirements into a natural language automation builder.</p>
        <figure>
          <img src="assets/images/image 2392.png" alt="GRID Automation Rules Table and Logic Configuration" loading="lazy">
          <figcaption>Natural language automation builder translating complex trigger/action conditions into clear rules.</figcaption>
        </figure>
        <p><strong>The UI:</strong> Clear triggers (e.g., If CO2 > 1000ppm) and actions (e.g., Then Set HVAC to High) allow facility managers to "program" their buildings without code.</p>
        <p><strong>Added Value:</strong> This feature moved GRID from a passive monitoring tool to an active, self-optimizing infrastructure platform.</p>

        <h2>Governance & Role Management</h2>
        <p><strong>Focus:</strong> Secure scalability for enterprise clients.</p>
        <p><strong>The Strategy:</strong> Scaled the system for multi-user environments by introducing granular role-based access.</p>
        <figure>
          <img src="assets/images/image 2393.png" alt="GRID User and Role Management Interface" loading="lazy">
          <figcaption>User & Role Governance: Administrator overview, access levels, and security audit guidelines.</figcaption>
        </figure>
        <p><strong>The UI:</strong> Dashboard-style summaries provide administrators with an immediate view of user distribution (Admins vs. Managers).</p>
        <p><strong>Senior Insight:</strong> Solved a critical security pain point where legacy accounts often shared a single "Admin" credential, ensuring an audit trail for all system changes.</p>

        <blockquote>The transformation of GRID proves that technical complexity doesn't have to result in a complicated user experience. By applying a rigorous OOUX framework and respecting the constraints of legacy architecture, I delivered a platform that empowers users to manage entire cities with the same ease as a single room. This is the hallmark of senior-level design: creating simplicity out of chaos to drive measurable business value.</blockquote>
      `
    },
    {
      id: "p-pulsar",
      title: "PULSAR Recruiter Intelligence",
      description: "AI-first orchestration validating candidate knowledge before the first interview.",
      meta: "HR Tech",
      html: `
        <h1>PULSAR Recruiter Intelligence</h1>
        <p>PULSAR is an end-to-end recruitment intelligence suite designed to bridge the gap between high-volume hiring and human-centric decision-making. The platform shifts the recruiter's role from manual data entry to strategic orchestration by using AI to validate candidate knowledge before the first interview even happens. By integrating Microsoft's Fluent 2 Design System, we created a high-energy, "joyful productivity" environment that handles the complexity of global talent distribution with the simplicity of a modern consumer app.</p>

        <p><strong>The Problem (The "Human-Scale" Barrier):</strong> High-volume recruitment is a manual nightmare. Recruiters drown in "resume noise," while candidates fall into a "black hole" of silence. Legacy tools provide data but no validation, leading to biased, inefficient, and stressful hiring cycles.</p>
        <p><strong>The Solution (AI-First Orchestration):</strong> PULSAR automates the "administrative churn" to focus on human decision-making. We built an ecosystem where AI Agents pre-match candidates, Automated Knowledge Checks verify skills before the first call, and Bulk Offer Tools synthesize pay packages in seconds.</p>
        <p><strong>UX Reasoning (Glanceable Intelligence):</strong> Using Microsoft's Fluent 2 design language, I prioritized scannability over reading. Match Score Badges provide vibrant, circular indicators for instant "go/no-go" signals. We used Progressive Disclosure to hide complex data behind drill-downs, maintaining a low cognitive load. Emotional UI using soft shadows and spring animations transforms a high-pressure environment into a "joyfully productive" workspace.</p>
        <p><strong>Flavor (The "Pulsar Glow"):</strong> We avoided the sterile "corporate blue" of competitors, opting for a violet-to-pink gradient beacon. The brand's "North Star" motif is woven through the UI from "Knowledge Shields" representing verified talent to "Intelligence Cards" that coach recruiters in real-time.</p>

        <h2>The PULSAR Landing Page (The Entryway)</h2>
        <p><strong>The Problem:</strong> Traditional AI hiring tools often feel cold and opaque. Recruiters fear losing the "human touch," while job seekers worry their resumes are disappearing into a "black hole".</p>
        <figure>
          <img src="assets/images/image 9.png" alt="PULSAR Marketing Landing Page" loading="lazy">
          <figcaption>Split-screen landing page highlighting 98.5% AI match success rate and social proof cards.</figcaption>
        </figure>
        <p><strong>The Solution:</strong> We designed the landing page to lead with Data-Backed Success. By placing verified match rates (98.5%) and high-volume placement stats (50K+) directly in the hero section, we establish immediate credibility.</p>
        <p><strong>UX Reasoning:</strong> The hero section utilizes a Split-Screen Composition to balance empowering copy with a tangible preview of the AI's output. We used high-contrast cards for "Loved by Companies" testimonials to provide visual breaks, ensuring the user can absorb success stories at a glance.</p>

        <h2>Recruiter Overview (The Command Center)</h2>
        <p><strong>The Problem:</strong> The "Morning Information Overload". Recruiters typically start their day by jumping between three or four different tabs, leading to a "cold start" where critical hiring bottlenecks are missed in the noise.</p>
        <figure>
          <img src="assets/images/image 10.png" alt="PULSAR Recruiter Overview Dashboard" loading="lazy">
          <figcaption>Recruiter Command Center: High-level KPI strip, talent pool industry breakdowns, and contextual AI coaching pro-tip.</figcaption>
        </figure>
        <p><strong>The Solution:</strong> We created a high-level KPI Strip at the top of the dashboard allowing the user to immediately see active jobs (23), total applicants (1,847), and upcoming interviews (156) without clicking a single menu item.</p>
        <p><strong>UX Reasoning:</strong> Using the Fluent 2 Color Palette, we applied specific hues to different industries in the "Talent Pool Insights" chart. Blue for Construction, Pink for Kitchen Staff, etc., allows the recruiter to build a mental map of their pipeline health through color recognition.</p>
        <p><strong>Flavor:</strong> At the bottom of the dashboard, we implemented a Yellow Intelligence Card. This isn't a static alert; it's a "Pro-Tip" from the AI Agent, coaching the recruiter on how to maximize their match rate by refining their knowledge modules turning the software into a mentor.</p>

        <h2>Candidate Pipeline (The Engine)</h2>
        <p><strong>The Problem:</strong> The "Bottleneck" Blindspot. In high-volume hiring, it is often unclear exactly where candidates are getting stuck.</p>
        <figure>
          <img src="assets/images/image 11.png" alt="PULSAR Candidate Pipeline with Match Scores" loading="lazy">
          <figcaption>Candidate Pipeline: Tabbed progress counts, AI Match & Test Score circular badges, and bulk actions.</figcaption>
        </figure>
        <p><strong>The Solution:</strong> The Pipeline view uses a Tabbed Navigation System that doubles as a progress bar, showing a live count so the user sees exactly where the "weight" of the pipeline is currently sitting.</p>
        <p><strong>UX Reasoning:</strong> For the candidate list, we prioritized two specific metrics: AI Match Score and Test Score. By placing these in vibrant, circular badges, we enable "Frictionless Filtering".</p>
        <p><strong>Flavor:</strong> We designed the Knowledge Validated icon as a shield. This visual metaphor tells the recruiter that the candidate isn't just a "match" on paper, but has "shielded" the company from hiring risk.</p>

        <h2>Recruitment Analytics (The Brain)</h2>
        <p><strong>1. The Problem:</strong> "Data Rich, Insight Poor". Recruitment data is often presented in boring spreadsheets that don't tell a story.</p>
        <figure>
          <img src="assets/images/image 12.png" alt="PULSAR Recruitment Analytics Suite" loading="lazy">
          <figcaption>Recruitment Analytics Suite: Conversion funnel, sourcing channel ROI breakdown, and speed telemetry.</figcaption>
        </figure>
        <p><strong>2. The Solution:</strong> Interactive Funnel and Sourcing ROI. We designed a Three-Tiered Analytics Suite (Recruitment Funnel, Sourcing Channels, Pipeline Speed) to visualize conversion rates, platform quality, and time-to-hire.</p>
        <p><strong>3. UX Reasoning:</strong> Layered Complexity via Progressive Disclosure. The top level shows "Quick Stats", while clicking into the "Sourcing Channels" allows a deep dive into cost-per-hire and quality scores.</p>
        <p><strong>4. Flavor:</strong> The "Visual ROI" Badge adds a "Top Quality" badge next to the winning channel, providing instant psychological reward for the recruiter's strategy.</p>

        <h2>Job Seeker Dashboard (The Career Hub)</h2>
        <p><strong>Problem:</strong> Candidates feel anxious and undervalued when they have zero visibility into their "Match Score".</p>
        <p><strong>Solution:</strong> A Transparency-First Dashboard featuring a "Profile Strength" meter and a "Top Matches" list that shows exactly how well they fit a role.</p>
        <p><strong>UX Reasoning:</strong> We used Behavioral Nudging by placing the "Take Knowledge Check" CTA in a high-visibility magenta block, empowering the user to actively "unlock" interviews by proving their skills.</p>

        <h2>Knowledge Validation (The Assessment)</h2>
        <p><strong>Problem:</strong> Standard skills assessments are often intimidating, leading to candidate "test fatigue."</p>
        <p><strong>Solution:</strong> A Distraction-Free Validation Environment featuring a clean, centralized question card and a progress bar to reduce cognitive strain.</p>
        <p><strong>UX Reasoning:</strong> We implemented Soft-State Navigation with a clear "Next Question" primary action and a "Ready to Shine?" micro-copy footer to keep candidate motivation high.</p>
      `
    },
    {
      id: "p-apexnest",
      title: "ApexNest Mortgage",
      description: "A full-lifecycle digital mortgage platform replacing the traditional 3-6 month \"black box\".",
      meta: "Fintech",
      html: `
        <h1>ApexNest Mortgage</h1>
        <p>ApexNest transforms the opaque, high-anxiety European mortgage market—traditionally a 3-6 month "black box"—into a transparent, full-lifecycle digital journey. As a Senior UX Designer, I leveraged Object-Oriented UX (OOUX) and WCAG 2.2 AAA standards to replace coordination "nightmares" with an anonymous "Instant AIP" wizard and AI-driven document verification. By utilizing progressive disclosure, the design boosted completion rates to 91%. This holistic ecosystem successfully slashes industry-standard approval times to just three weeks, shifting the mortgage from a stressful utility into an empowering, manageable financial asset.</p>

        <h2>1. Problem Statement</h2>
        <p>The European mortgage market is currently a "black box" of anxiety and inefficiency. Despite a market value of €1.2 trillion, the traditional application process takes 3-6 months with virtually no transparency. Research indicates that 78% of applicants feel significant anxiety due to a lack of status visibility, while 73% are overwhelmed by complex financial jargon (LTV, APR, ERC). Furthermore, joint applications are often a "coordination nightmare," with 54% of partners struggling to manage document submissions via fragmented email chains.</p>

        <h2>2. Solution: ApexNest</h2>
        <p>ApexNest is the first European fintech to offer a full-lifecycle digital mortgage platform. By combining the transparency of Monzo with bank-grade security, we've replaced the "black box" with a guided, mobile-first journey.</p>
        <ul>
          <li><strong>Instant Gratification:</strong> An anonymous, 6-question "Approval in Principle" (AIP) wizard provides immediate borrowing capacity without a hard credit check.</li>
          <li><strong>Frictionless Documentation:</strong> A mobile-first, camera-based upload system features AI-driven document detection and real-time verification feedback.</li>
          <li><strong>Collaborative Homebuying:</strong> A shared dashboard for joint applicants provides visibility into partner tasks and status, reducing coordination time by 70%.</li>
          <li><strong>Active Management:</strong> Post-purchase tools including overpayment simulators and interest/principal breakdowns shift the app from a "one-time utility" to a monthly financial partner.</li>
        </ul>

        <h2>3. UX Reasoning</h2>
        <p>The design system for ApexNest is rooted in Object-Oriented UX (OOUX) and psychological safety.</p>
        <ul>
          <li><strong>Mental Model Alignment:</strong> We used OOUX to structure the app around real-world objects; Applicant, Application, Property, and Mortgage. This ensures the navigation feels intuitive and mimics natural thought processes.</li>
          <li><strong>Progressive Disclosure:</strong> To prevent "Document Overwhelm," we utilize a 5-stage wizard with clear progress indicators. This boosted completion rates to 91%, compared to the industry average of 45%.</li>
          <li><strong>Trust Through Color Theory:</strong> The palette uses Forest Green (#1B5E3E) for stability and growth, paired with Rich Indigo (#3B3F8A) for authority.</li>
          <li><strong>Accessibility as a Standard:</strong> Built to WCAG 2.2 Level AAA compliance, ensuring critical financial information is accessible to all.</li>
        </ul>

        <h2>4. Visual Flavor & Mobile Experience</h2>
        <p><strong>Landing & Authentication:</strong> A "Value-First" landing page features a prominent Instant Estimate card that requires no account creation, reducing the barrier to entry and achieving an 85% completion rate. The UI uses Rich Indigo for authority and Face ID for bank-grade security.</p>
        <figure>
          <img src="assets/images/image 2386.png" alt="ApexNest Landing, Authentication, and Onboarding Flows" loading="lazy">
          <figcaption>Landing, 3-step account creation with optional ID pre-fill, and value proposition onboarding carousel.</figcaption>
        </figure>

        <p><strong>Application Wizard & Progress:</strong> A 5-stage wizard with a Progress Stepper keeps users engaged through progressive disclosure. The vertical document list uses AI detection to provide instant feedback on uploads. Soft cards with rounded corners and Forest Green buttons create a sense of stability.</p>
        <figure>
          <img src="assets/images/image 2387.png" alt="ApexNest Application Wizard, AIP Approval, and Document Uploads" loading="lazy">
          <figcaption>Application flow: personal details, loan requirements, Approval in Principle confirmation, and document upload checklist.</figcaption>
        </figure>

        <p><strong>Financial Management & Insights:</strong> An interactive Overpayment Simulator and detailed payment history transform a static debt into a dynamic savings journey, increasing monthly active users to 78%. A vertical timeline utilizes semantic color badges (Vibrant Green, Professional Red) for instant clarity.</p>
        <figure>
          <img src="assets/images/image 2385.png" alt="ApexNest Mortgage Dashboard, Overpayment Calculator, and Payment History" loading="lazy">
          <figcaption>Mortgage active management: live balance, interactive overpayment simulator, interest breakdown, and payment timeline.</figcaption>
        </figure>

        <p><strong>User Profile & Co-Applicant Management:</strong> A centralized settings hub displays Co-Applicant status, resolving the coordination nightmare. Following OOUX, minimalist list items with chevron indicators ensure smooth navigation and WCAG compliance.</p>
        <figure>
          <img src="assets/images/image 2383.png" alt="ApexNest User Profile, Settings, and Payment Methods" loading="lazy">
          <figcaption>Account hub: Co-applicant management, profile details, linked banking methods, and preference settings.</figcaption>
        </figure>

        <h2>5. The Back Office (ApexNest VAP)</h2>
        <p>The Verification & Administration Portal (VAP) is designed for high-density information processing and speed.</p>
        <figure>
          <img src="assets/images/image 2384.png" alt="ApexNest Verification and Administration Portal (VAP)" loading="lazy">
          <figcaption>ApexNest VAP: Operational KPI overview, AI-assisted document verification triage, and client pipeline management.</figcaption>
        </figure>
        <p><strong>Operational Overview:</strong> A high-density dashboard shows Total Clients, AI Flags, and a live "Recent Activity" feed. Administrators get a "God-view" to prioritize tasks, focusing only on cases with low-confidence document detections. The wide-screen layout uses professional muted grays to highlight critical status indicators.</p>
        <p><strong>AI-Assisted Document Verification:</strong> Manual document verification is the primary bottleneck. An AI Review interface side-lines manual work by pre-analyzing documents and highlighting specific risks (e.g., "Irregular deposits"). This reduces verification time from 5 days to 5 minutes using clear, large primary actions (Green/Red buttons) to reduce human error.</p>
        <p><strong>Client Pipeline Management:</strong> A searchable, real-time client list with status badges that map directly to the user's mobile progress. This serves as the master list for the "Application" object in our OOUX hierarchy, with a UI prioritizing whitespace and legible typography to reduce "data fatigue".</p>
      `
    },
  ],
};

/* ==========================================================================
   HOW TO ADD A NEW PROJECT
   ---------------------------------------------------------------------------
   Copy this template and paste it into either the `concepts` or `useCases`
   array above:

   {
     id: "p-my-new-project",
     title: "My New Project",
     description: "A one-liner that appears on the homepage list.",
     meta: "2024",           // or "Fintech", "SaaS", etc.
     html: `
       <h1>My New Project</h1>
       <p>Write your case study content here using standard HTML.</p>
       <h2>Section Heading</h2>
       <p>More details...</p>
       <blockquote>A pull quote or key takeaway.</blockquote>
     `
   },

   ========================================================================== */
