# Website Build Prompt: Jayesh Learning Centre

Paste everything below into your website-builder AI (or hand to a developer) as one brief. A reference HTML draft already exists for this business; use it for real business facts and as the visual starting point, then expand it into the fuller site described here.

---

## PROMPT

Build a website for **Jayesh Learning Centre**, a one-to-one and small-batch tutoring centre in Mulund West, Mumbai, coaching grades 6 to 12 across IB MYP, IB Diploma, Cambridge IGCSE, A Level / AS Level, and ICSE. The audience is parents evaluating a tutor for their child, so the site needs to read as credible and academically serious first, memorable second. Do not make this look like a generic AI-generated coaching-centre template with a purple gradient and stock photos of smiling students. Commit to the aesthetic direction below and execute it with real precision.

Contact is entirely WhatsApp-first. Every enquiry point on the site, whether it's the main "Book a demo" button or a single subject card, should open WhatsApp with a message pre-filled for that specific context (which programme, which grade) so parents don't have to type it out and the centre knows exactly what was asked before they even reply.

### 1. Brand & Business Details (real, drawn from the client's own draft site plus public listings)

- **Name:** Jayesh Learning Centre (legally Jayesh Learning Centre LLP).
- **What it does:** one-to-one and small-batch tutoring for IB MYP (grades 6 to 10), IB Diploma Programme (grades 11 to 12), Cambridge IGCSE (grades 9 to 10), A Level / AS Level (grades 11 to 12), and ICSE (grades 6 to 10), plus a diagnostic and planning session before any student is booked into a plan.
- **Address (from the client's own site):** Avior Corporate Park, A-132, near Salpa Devi Mandir, P&T Staff Colony, Mulund West, Mumbai 400080.
- **Note:** the LLP's registered address on public company records is listed slightly differently (UG 50, Avior Corporate Park, LBS Marg, Mulund West). Confirm the exact unit number with the client before publishing, since this may just be a different office within the same building.
- **Phone and WhatsApp:** 08591 877127 (same number for both, already in use as the primary contact channel).
- **Hours:** Monday to Saturday, opens 11:30 AM (closing time not published, keep the existing "call ahead to confirm class timings" note).
- **Rating:** 5.0 on Google, matching a "Jayesh Learning Centre LLP" listing on Justdial (small review count, so don't overstate it, "5.0 rating" is honest, "hundreds of 5-star reviews" is not).
- **Founders (public LLP filing, confirm with the client before using publicly):** Jayesh Mulraj Shethia and Reena Kalpesh Shethia. If the client is comfortable naming them, a short "who teaches here" or founders' note adds real credibility that a faceless coaching site lacks.
- **Heads-up from research:** there are several unrelated businesses called "Jayesh Learning Centre" in Mumbai and one in Kolkata with a completely different founding story (a 2012 launch by four educators). That story belongs to the Kolkata business, not this one. Do not reuse it here.
- **Not yet available, treat as placeholders:** a dedicated Instagram handle (none found publicly for this specific centre, `[JLC_INSTAGRAM_HANDLE]`), published fee structure, and photos of the actual centre and tutors.

### 2. Design Direction: build on the existing aesthetic, do not flatten it into a template

The client's draft already has a real point of view worth keeping and pushing further rather than replacing: an academic, editorial, exam-paper feel. Ink navy and warm paper cream instead of typical ed-tech blue-on-white, a serif display face (Fraunces or similar) paired with a monospace label face (IBM Plex Mono or similar) for that report-card, exam-stationery texture, a red pen accent color used the way a teacher's red pen is used: for correction marks, grade changes, key numbers. Keep this direction and refine it rather than swapping in a generic SaaS look.

- **Typography:** keep the serif-plus-mono pairing. Headlines set in the serif at a large size with tight tracking, small mono labels in uppercase for eyebrows, tags, and metadata, exactly like a real academic transcript or exam paper.
- **Color and theme:** ink navy, paper cream, and the red accent, used sparingly and meaningfully (marked corrections, grade changes, the primary CTA), not as decoration.
- **Signature motif:** the "grade slip" card in the hero (a mock report card showing a grade moving from a lower mark to a higher one) is a strong, specific idea, keep it and consider extending the same visual language elsewhere: a "before and after" motif on programme pages, a stamped "Reviewed" or "Confirmed" mark on the enquiry confirmation state, ruled-paper or exam-margin lines as subtle background texture on section breaks.
- **Spatial composition:** the existing layout already breaks from a centered template (the rotated grade slip, the ruled-paper hero background, the hairline grid on the programmes section). Keep pushing texture and small asymmetries like this rather than defaulting to centered cards with drop shadows.
- **Copy tone:** direct, specific, a little exacting, matching a tutor who is precise about grades. Avoid ed-tech marketing language like "unlock your potential" or "empowering learners for tomorrow." Say what the client's draft already says well: "we close the gap between the grade and the target grade."

### 3. Animation & motion (refined, not loud)

This audience is parents making a serious decision about their child's grades, so motion should read as polished and considered, not flashy or gimmick-heavy. Favor a small number of well-executed moments over a pile of effects:

- **Grade slip animation:** on load, animate the "was" grade striking through and the "now" grade stamping in, like a mark being corrected in red pen, rather than showing the finished state immediately.
- **Scroll reveals:** sections and programme cards fade and lift into place as they enter the viewport (the draft site already has the scaffolding for this with its `.reveal` class, extend it to every section rather than a handful).
- **Ink-stamp confirmation:** when someone submits the enquiry form or taps a WhatsApp CTA, show a quick stamped "Confirmed" or "Sent" mark animation before the WhatsApp handoff, echoing the grade-slip stamp motif.
- **Underline draw-on:** links and key phrases get an underline that draws in on hover, like it's being marked with a ruler and pen, instead of a plain color change.
- **Rubric section:** animate the four-point "how we mark our own work" rubric items in with a slight stagger and a number that ticks in, reinforcing the exam-marking theme already present in the copy.
- **Subtle paper texture parallax:** the ruled-paper hero background can drift slightly slower than the foreground content on scroll, adding depth without being distracting.
- **Restraint rule:** no bouncing icons, no confetti, no neon glows. If an animation wouldn't look right on an exam paper or a school report card, it doesn't belong on this site.

### 4. Pages & Sections

**A. Homepage**
- Hero: the existing "we close the gap between the grade and the target grade" headline, the grade-slip visual, dual CTA ("Book a free demo class" via WhatsApp, "Call" via tel: link).
- Trust strip: 5.0 Google rating, programme badges (IB MYP, IB Diploma, Cambridge IGCSE, A Level / AS Level, ICSE).
- Programmes preview grid (six cards, as in the draft), each linking to more detail on the Programmes page.
- Approach / rubric preview (the four-point "how we mark our own work" section).
- Find-us strip: address, hours, directions link.
- Footer with links to Programmes, Approach, Enquire, FAQs, Terms & Conditions, phone, WhatsApp, address.

**B. Programmes Page**
- Full detail on each programme (IB MYP, IB Diploma, Cambridge IGCSE, A Level / AS Level, ICSE, and the Diagnostic & Planning session), expanding on what's already in the draft's cards.
- Each programme card ends in its own "Enquire about this programme" WhatsApp button, pre-filled with that programme's name (for example: "Hi, I'm interested in IB Diploma Programme coaching for my child."), so a parent reading about IGCSE doesn't have to fill a generic form to ask about IGCSE specifically.

**C. Approach Page**
- Expand the four-point rubric (diagnose before teaching, specialists not generalists, practice under real conditions, direct parent reporting) into a full page with more detail on how a typical term runs: diagnostic session, individual study plan, regular assessments, mock exams under real conditions, parent reporting after every assessment.

**D. Enquire Page** (new, the main conversion point)
- A short general enquiry form (parent or student name, phone, grade or year, curriculum, subjects or notes), matching the fields already in the draft's form, submitting via a pre-filled WhatsApp message exactly as the current script does.
- Above or beside the form, a row of one-tap WhatsApp buttons per programme (same pre-filled-by-programme pattern as the Programmes page), for parents who already know what they want and don't want to fill a form at all.
- Directly below the form, two clear links to **FAQs** and **Terms & Conditions**, so common questions about fees, trial classes, and cancellation are answered before someone messages, rather than after.
- A short note on what happens next: "We'll confirm a free diagnostic session within the same day," matching the existing promise on the draft site.

**E. FAQs Page**
Cover questions like:
- How does the free demo or diagnostic class work, and is it really free.
- Is coaching one-to-one, small batch, or both, and how are batches sized.
- How is a tutor matched to a student's board and subject.
- What do fees look like, and how are they paid (monthly, per term, per package).
- What is the policy if a class needs to be rescheduled or missed.
- How often do parents get progress updates.
- Do you teach online, in person, or both.
- What is the cancellation or refund policy if a family stops mid-package.

**F. Terms & Conditions Page**
Cover, in plain terms appropriate for a tutoring business:
- Fees and payment: how fees are structured and when they're due, accepted payment modes.
- Cancellation, rescheduling, and refund policy for a term or package once started.
- Attendance: what happens if a student misses a scheduled class, make-up class policy.
- Study materials: materials provided are for that student's personal use only, not to be shared or resold.
- Conduct: expectations for punctuality and respectful behavior from both student and tutor.
- Liability: the centre's responsibility is limited to the coaching provided, it does not guarantee specific board results.
- Data and privacy: how student and parent contact details and progress records are stored and used, and that they won't be shared with third parties beyond what's needed to run the centre.
- Photography or testimonial use: consent needed before using a student's name, photo, or grade result in marketing.
- The centre's right to update these terms and to decline or discontinue coaching a particular student.

**G. Contact / Visit Page**
- Address, embedded map, directions link (reuse the existing Google Maps search link), hours, phone, WhatsApp, matching the draft's "Find Us" strip and contact section.

**H. Back Office (internal, password-protected, lighter than a booking system)**
Unlike a slot-based business, this is mostly about managing leads and ongoing students rather than time slots, so keep this simple:
- An enquiry inbox: every WhatsApp/form enquiry logged with parent name, phone, grade, curriculum, and status (new, contacted, trial booked, enrolled, not interested).
- A simple student and batch list: which students are enrolled in which programme, with their tutor and schedule.
- A basic fee tracker: what's been paid, what's due, per student.
- A place to update the Programmes, FAQs, and Terms & Conditions text without touching code, since this will change term to term.

### 5. Tech Notes
- Mobile-first, since most parents will land here from a WhatsApp forward or a Google search on their phone.
- Keep the existing WhatsApp deep-link pattern (`wa.me/918591877127?text=...`) for every CTA, extended to be programme-specific where relevant.
- No online payment gateway needed for the core enquiry flow, fees are agreed and collected directly once a family enrolls.
- SEO targets: "IB tutor Mulund," "IGCSE tuition Mulund West," "A Level coaching Mumbai," "ICSE tuition Mulund West."

---

*Research basis: the client's existing draft HTML for verified business copy, contact details, and current design direction; Justdial listings to confirm the specific "Jayesh Learning Centre LLP" entity (5.0 rating, P&T Colony address) among several unrelated businesses of the same name; public LLP registration records for the founders' names and registered address, flagged for the client to confirm before publishing.*
