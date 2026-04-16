# Design System Specification: Clinical Precision & Editorial Calm

## 1. Overview & Creative North Star: "The Clinical Sanctuary"

This design system moves beyond the cold, utilitarian aesthetic of legacy medical software to create **The Clinical Sanctuary**. In a high-stakes environment like 'VoiceRx', the UI must act as a calming agent, reducing cognitive load through "Soft Structuralism." 

We break the "template" look by rejecting the rigid 1px border grid. Instead, we use **Tonal Architecture**—defining space through subtle shifts in background values and intentional asymmetry. The goal is an editorial experience that feels as authoritative as a medical journal but as fluid as a modern high-end application. We prioritize "breathing room" (generous whitespace) to ensure that in moments of triage, the most critical data points are the only things competing for the clinician's eye.

---

## 2. Color Theory & Surface Logic

Our palette is rooted in `primary` (#00478d), a deep, trustworthy blue. However, the secret to the system's premium feel lies in the neutrals and the "No-Line" execution.

### The "No-Line" Rule
Traditional borders create visual "noise" that exhausts the eye. **Explicitly prohibit 1px solid borders for sectioning.** Boundaries must be defined through background color shifts. 
*   **Example:** A `surface-container-low` (#f2f4f6) sidebar sitting against a `background` (#f7f9fb) main content area.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers, like stacked sheets of fine, heavy-weight paper.
*   **Base Layer:** `surface` (#f7f9fb)
*   **Secondary Sections:** `surface-container` (#eceef0)
*   **Interactive Cards:** `surface-container-lowest` (#ffffff) to provide a "pop" of clean white against the slightly greyed base.

### Signature Textures & Glassmorphism
To avoid a "flat" or "cheap" appearance, use the following:
*   **The CTA Glow:** For primary buttons, use a subtle linear gradient from `primary` (#00478d) to `primary_container` (#005eb8) at a 135-degree angle. This adds "soul" and depth.
*   **Floating Navigation:** Use `surface_container_lowest` with an 80% opacity and a `20px` backdrop-blur for top navigation bars. This allows patient data to softly bleed through as the user scrolls, maintaining a sense of place.

---

## 3. Typography: The Editorial Scale

We utilize two typefaces to balance clinical authority with modern legibility: **Manrope** (Display/Headlines) and **Inter** (Body/Labels).

*   **Display & Headline (Manrope):** Large, bold, and authoritative. Use `display-md` (2.75rem) for dashboard greetings or critical patient names. The wider stance of Manrope suggests stability.
*   **Body & Title (Inter):** Highly legible and neutral. Inter is used for all medical data and transcriptions. 
*   **Intentional Contrast:** Pair a `headline-sm` title with a `label-md` uppercase subtitle in `on_surface_variant` (#424752) with `0.05em` letter spacing to create a high-end, "tabbed" editorial look.

---

## 4. Elevation & Depth: Tonal Layering

We eschew traditional drop shadows in favor of **Ambient Light**.

*   **The Layering Principle:** Depth is achieved by "stacking." A `surface-container-lowest` card placed on a `surface-container-low` section creates a soft, natural lift.
*   **Ambient Shadows:** If a card must "float" (e.g., a modal or a high-priority triage alert), use a shadow with a 40px blur and only 4% opacity, using the `on_surface` color as the shadow base. It should feel like a whisper, not a smudge.
*   **The "Ghost Border" Fallback:** In high-density data tables where separation is mandatory, use a "Ghost Border": the `outline_variant` (#c2c6d4) at 15% opacity. If the clinician can clearly see the line from two feet away, it is too dark.

---

## 5. Component Guidelines

### Buttons (The Interaction Points)
*   **Primary:** Gradient fill (`primary` to `primary_container`), `on_primary` text, `md` (0.375rem) corner radius.
*   **Secondary:** No background. Use a `Ghost Border` and `primary` text.
*   **Triage Variant:** For urgent actions, use `error` (#ba1a1a) but only in small, purposeful hits.

### Modern Cards & Lists
*   **Rule:** Forbid divider lines. 
*   **Execution:** Separate patient list items using 12px of vertical whitespace and a hover state that shifts the background to `surface_container_high` (#e6e8ea). 
*   **Asymmetry:** Align patient vitals to the right, while keeping the name and transcript preview to the left, creating a clear "Editorial" gutter in the center of the card.

### Triage Badges (High-Contrast Utility)
*   **Urgent:** `error_container` (#ffdad6) background with `on_error_container` (#93000a) text. 
*   **Stable:** `tertiary_container` (#006d4a) background with `on_tertiary_fixed` (#002113) text.
*   **Styling:** Pills must be `full` roundedness and use `label-sm` bold typography.

### Input Fields (Voice & Text)
*   **The "Active" State:** Instead of a thick border, an active input should glow with a subtle `primary` outer-glow (4px spread, 10% opacity) and the background should shift to `surface_container_lowest`.

---

## 6. Do’s and Don’ts

### Do:
*   **Use Asymmetric Layouts:** Allow the "Voice" transcription area to take up 65% of the screen, with a 35% "Clinical Vitals" sidebar. This 60/40 split feels more intentional than a 50/50 grid.
*   **Embrace "Empty" Space:** If a patient record is short, do not stretch components to fill the screen. Let the `background` breathe.
*   **Color for Triage Only:** Use `error` (Red), `Yellow`, and `Green` strictly for medical status. Never use these for decorative UI elements.

### Don’t:
*   **Don’t use 100% Black:** Never use `#000000`. Use `on_surface` (#191c1e) for all "black" text to maintain the soft, clinical feel.
*   **Don’t use Sharp Corners:** Avoid `none` or `sm` roundedness for large containers. Use `lg` (0.5rem) for cards to make the application feel approachable and "human-centric."
*   **Don’t Over-stack:** Never go more than three "layers" deep (Background > Container > Card). Any more creates visual clutter and confuses the hierarchy.