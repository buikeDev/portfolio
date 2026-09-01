# Portfolio Improvement TODO

This document tracks the work needed to make the portfolio more reliable, accessible, maintainable, and effective for potential employers and clients.

## Priority 0 — Functional fixes

- [x] Fix the contact form field configuration.
  - Give the name input `type="text"` and `name="name"`.
  - Keep the email input as `type="email"` and `name="email"`.
  - Add `required` and appropriate `autoComplete` attributes.
  - Verify Formspree receives name, email, and message as separate values.
  - File: `src/screens/FinalDesign/sections/ContactFormSection/ContactFormSection.tsx`

- [x] Make the technology marquee loop using its actual content width.
  - Measure one complete copy of the technology list with a ref.
  - Wrap the motion value at the measured boundary instead of using `window.innerWidth / 2`.
  - Confirm there is no visible jump at desktop, tablet, or mobile widths.
  - File: `src/screens/FinalDesign/sections/TechStack/TecheMarquee.tsx`

- [x] Stabilize marquee dragging and velocity.
  - Clamp drag-derived velocity to a safe range.
  - Prevent the marquee from reversing or stopping unintentionally.
  - Ease the marquee back to its normal speed after a drag.
  - Test repeated left and right drags.
  - File: `src/screens/FinalDesign/sections/TechStack/TecheMarquee.tsx`

- [x] Fix the mobile navigation panel position.
  - Center it with `left-1/2 -translate-x-1/2`, or use `left-[10%]` without translation.
  - Verify the panel remains fully visible on narrow screens.
  - File: `src/screens/FinalDesign/sections/Header/Index.tsx`

- [x] Fix the mobile Home navigation action.
  - Add `id="home"` to the hero section or scroll directly to the top of the page.
  - Ensure desktop and mobile Home links behave consistently.
  - Files: `src/screens/FinalDesign/sections/Header/Index.tsx`, `src/screens/FinalDesign/sections/HeroSection/HeroSection.tsx`

## Priority 1 — Accessibility and UX

- [x] Respect reduced-motion preferences.
  - Disable or simplify the typing animation, floating buttons, scroll transforms, and marquee when `prefers-reduced-motion` is enabled.
  - Ensure important content is immediately visible without animation.

- [x] Improve mobile-menu accessibility.
  - Add an accessible label to the open and close buttons.
  - Set `aria-expanded` and `aria-controls` on the menu trigger.
  - Close the menu when Escape is pressed.
  - Move focus into the menu when opened and restore it when closed.
  - Prevent background scrolling while the menu is open.
  - File: `src/screens/FinalDesign/sections/Header/Index.tsx`

- [x] Improve contact-form feedback.
  - Show submitting, success, and error states.
  - Disable the submit button while submitting.
  - Provide accessible validation messages.
  - Do not clear the form until submission succeeds.

- [ ] Audit image alternative text.
  - Use `alt=""` for decorative artwork.
  - Give informative project images meaningful descriptions.
  - Correct the truncated `"Contact illustratio"` text.

- [ ] Optimize image loading.
  - Add `loading="lazy"` and dimensions to below-the-fold images.
  - Keep only above-the-fold hero assets eager.
  - Convert large PNG/JPEG files to WebP or AVIF where practical.

- [x] Make project navigation clearer.
  - Replace “First Page” and “2nd Page” with meaningful labels such as “Featured,” “Web,” or “Mobile.”
  - Ensure tabs have visible keyboard focus styles.

## Priority 2 — Project content and presentation

- [x] Rewrite project descriptions for quick scanning.
  - Limit card copy to two or three concise sentences.
  - Lead with the problem and outcome, then mention the implementation.
  - Move detailed explanations to dedicated case-study pages if needed.

- [ ] Add evidence of project impact.
  - State personal responsibilities and team context.
  - Include measurable results where available: performance, users, conversion, load time, or delivery improvements.
  - Explain one significant technical decision or challenge for each featured project.

- [x] Correct visible spelling and naming errors.
  - “Typescricpt” → “TypeScript.”
  - “Dasboard” → “Dashboard.”
  - “TSettings Dashboard” → “Settings Dashboard.”
  - Standardize “Next.js,” “React Native,” and “Tailwind CSS.”

- [x] Review unavailable-code behavior.
  - Clearly label private/company-owned projects without presenting the Code action as a disabled-looking button.
  - Use concise, always-visible text or an accessible disclosure instead of hover-only information.

- [ ] Verify every external project and social link.
  - Confirm links resolve to the intended page.
  - Remove tracking parameters when they are unnecessary.
  - Confirm private repositories do not expose misleading public URLs.

- [x] Improve the About section copy.
  - Remove repeated technology claims already covered by the tech stack.
  - Focus on specialization, experience, approach, and the value delivered to clients or teams.
  - Tighten grammar and capitalization.

## Priority 3 — Architecture and maintainability

- [x] Consolidate project data into one source of truth.
  - Move all project objects into a shared data module.
  - Add a category field and render categories by filtering the same dataset.
  - Replace `FirstCards` and `SecondCards` with a reusable `ProjectCard` and project grid.
  - Remove unused `href` and `previewClass` interface properties.

- [x] Use stable React keys.
  - Add IDs or slugs to projects and technologies.
  - Replace array-index keys in project cards, technology items, navigation items, and social links.

- [ ] Move static data outside components.
  - Extract technology, navigation, social-link, phrase, and form-field arrays when they do not depend on component state.
  - This avoids recreating them on every render and makes content easier to maintain.

- [ ] Standardize design tokens.
  - Replace repeated hard-coded colors with theme tokens.
  - Define Poppins, Oswald, and Sora in Tailwind or remove the corresponding font classes.
  - Establish consistent spacing, radius, typography, and surface styles.

- [ ] Remove framework artifacts and dead code.
  - Remove the unnecessary `"use client"` directive from the Vite header.
  - Remove commented-out code and unused imports, fields, dependencies, and configuration.
  - Audit `@studio-freight/lenis`, Radix packages, and duplicate icon libraries.

- [ ] Rename generic/generated project metadata.
  - Change the package name from `anima-project` to a portfolio-specific name.
  - Replace the generated-project description in `package.json`.
  - Review `README.md` so it describes setup, scripts, structure, and deployment.

- [x] Normalize component and filename naming.
  - Rename `TecheMarquee.tsx` to `TechMarquee.tsx`.
  - Rename `Header/Index.tsx` to `Header/index.tsx` or `Header/Header.tsx` consistently.
  - Use one convention for section exports and imports.

## Priority 4 — Performance, quality, and deployment

- [ ] Add code-quality scripts and configuration.
  - Add `typecheck`, `lint`, `format`, and `test` scripts.
  - Configure ESLint for React, hooks, TypeScript, and accessibility.
  - Configure Prettier and run it across the source tree.

- [ ] Add automated tests for critical interactions.
  - Contact-form field names and validation.
  - Header navigation and mobile-menu behavior.
  - Project tabs and links.
  - Marquee boundary and reduced-motion behavior.

- [ ] Audit production bundle size.
  - Check whether both Lucide and Font Awesome are necessary.
  - Confirm unused modules are removed from the bundle.
  - Lazy-load non-critical routes or large sections where beneficial.

- [ ] Add SEO and sharing metadata.
  - Use a descriptive page title and meta description.
  - Add canonical, Open Graph, and Twitter card metadata.
  - Add a favicon and social-sharing preview image.
  - Add appropriate structured data for a personal portfolio.

- [ ] Add error and fallback handling.
  - Add a not-found route.
  - Provide graceful fallbacks for missing images and failed form submission.
  - Verify direct navigation to `/hire-me` works in the deployed SPA.

- [ ] Run final browser and device checks.
  - Test current Chrome, Firefox, Safari, and Edge.
  - Test keyboard-only navigation and screen-reader landmarks.
  - Test common mobile widths and 200% browser zoom.
  - Run Lighthouse and address major accessibility, performance, SEO, and best-practice findings.

## Suggested implementation order

1. Fix the form, marquee, and mobile navigation defects.
2. Add reduced-motion handling and accessible mobile-menu behavior.
3. Consolidate project data and introduce a reusable project card.
4. Improve project copy, spelling, labels, and proof of impact.
5. Standardize tokens, filenames, metadata, and dependencies.
6. Add linting, tests, SEO metadata, and final browser audits.

## Definition of done

- The production build, type check, lint, and automated tests pass.
- The contact form submits the correct values and provides clear feedback.
- The marquee loops smoothly at every supported viewport size.
- All primary interactions work with keyboard and reduced-motion settings.
- Project content is concise, accurate, and supported by working links.
- Lighthouse reports no high-impact accessibility or best-practice failures.
