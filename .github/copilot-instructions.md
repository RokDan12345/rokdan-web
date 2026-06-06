# ROKDAN - AI Coding Agent Instructions

## Project Overview
**Tech stack**: React 18 + TypeScript + Vite 5, deployed to Vercel with serverless functions.
**Purpose**: Corporate website for ROKDAN (gestión de servicios y reformas) with contact form and email integration.
**UI library**: shadcn/ui (Radix UI primitives + Tailwind CSS) with custom color scheme.

## Architecture

### Frontend Structure
- **Single-page app** with minimal routing (`src/App.tsx` → `src/pages/Landing3.tsx`)
- **Component hierarchy**: Landing page → feature components (`ContactForm`, `ServicesCarousel`, `ContactBanner`, `ScrollToTopButton`)
- **UI components**: All in `src/components/ui/` from shadcn/ui - DO NOT modify these directly, regenerate with CLI if needed
- **Path aliases**: `@/` maps to `src/` (configured in `vite.config.ts` and `tsconfig.json`)

### Backend (Serverless)
- **Email API**: `api/send-email.js` is a Vercel serverless function (Node.js runtime)
- **Important**: This is NOT part of Vite build - it's deployed separately by Vercel
- **Runtime config**: Specified in `vercel.json` - uses `@vercel/node@5.0.0`

### Key Integration Points
1. **Contact form** (`ContactForm.tsx`) → POST to `/api/send-email` → Resend API → Email delivery
2. **reCAPTCHA v3**: Invisible verification on form submit, token validated server-side
3. **Service selection flow**: Clicking service cards in hero → scrolls to accordion section and auto-expands item

## Critical Developer Workflows

### Local Development
```bash
bun dev              # Start dev server on port 5173
bun build            # Production build
bun build:dev        # Development build (includes component tagger)
bun preview          # Preview production build locally
```

### Environment Variables
**Required for email functionality**:
- `RESEND_API_KEY` - Resend API key (in Vercel dashboard + local `.env.local`)
- `RECAPTCHA_SECRET_KEY` - Google reCAPTCHA v3 secret key (server-side validation)

**Frontend** (embed in build):
- reCAPTCHA site key is hardcoded in code, NOT from env vars (Vite limitation for public keys)

### Testing Email Flow Locally
1. Create `.env.local` with `RESEND_API_KEY` and `RECAPTCHA_SECRET_KEY`
2. Production sender is configured in `api/send-email.js`
3. For testing without custom domain, temporarily use `onboarding@resend.dev`
4. Recipients configured on line 50 in `api/send-email.js`

## Project-Specific Conventions

### Styling Patterns
- **Custom color scheme**: `landing3-*` colors defined in `tailwind.config.ts` (orange accent, blue dark, blue light)
- **Utility function**: Use `cn()` from `@/lib/utils` to merge Tailwind classes (handles conflicts via tailwind-merge)
- **Responsive**: Mobile-first approach, use `sm:` `md:` `lg:` breakpoints extensively

### Form Handling
- **Always use**: React Hook Form + Zod validation (see `ContactForm.tsx` pattern)
- **Schema-first**: Define Zod schema, infer TypeScript type with `z.infer<typeof schema>`
- **Error states**: Show field-level errors below inputs, form-level status with icons (Loader2, CheckCircle2, XCircle)

### Component Patterns
- **Feature components**: Export default (e.g., `export default ContactForm`)
- **UI components**: Named exports from shadcn/ui
- **Props**: Use TypeScript interfaces with optional `className` for style extension

### Asset Management
- **Images**: Store in `public/` - reference as `/logo-navbar.webp` (NOT `/public/...`)
- **Optimization**: Use WebP format, include `width`/`height` attributes, `loading="eager"` for above-fold images

## External Dependencies & Configuration

### Resend Email Service
- **Free tier**: 3,000 emails/month
- **Production sender**: Configured in `api/send-email.js` (domain setup pending)
- **Recipients**: `rokdan.servicios@gmail.com` (configured in `api/send-email.js`)
- **Important**: Resend can ONLY send from `@resend.dev` or verified custom domains - never from Gmail addresses

### reCAPTCHA v3 Integration
- **Invisible**: No user interaction required
- **Score threshold**: 0.5 (line 38 in `api/send-email.js`) - adjust if getting false positives
- **Implementation**: `useGoogleReCaptcha` hook → execute on submit → send token to backend
- **Setup docs**: See `RECAPTCHA_SETUP.md` for key generation

### Vercel Deployment
- **Auto-deploys**: On push to `main` branch
- **Functions**: Automatically detects `api/*.js` as serverless functions
- **Env vars**: Must be set in Vercel dashboard (Settings → Environment Variables)
- **Build command**: Uses `bun build` (specified in `package.json`)

## Common Tasks

### Adding a new shadcn/ui component
```bash
bunx shadcn@latest add <component-name>
```
This auto-installs to `src/components/ui/` with proper imports.

### Modifying the contact form email template
Edit the HTML string in `api/send-email.js` lines 54-238. Inline CSS required (email clients don't support external stylesheets).

### Changing services list
Update the `services` array in `Landing3.tsx` (line 10). This populates both hero cards and accordion sections.

### Debugging email send failures
Check:
1. Vercel function logs (Deployments → Functions → Logs)
2. reCAPTCHA score in logs (should be > 0.5)
3. Resend dashboard (https://resend.com/emails) for delivery status

## Important Files Reference
- `api/send-email.js` - Email sending logic, reCAPTCHA validation
- `src/pages/Landing3.tsx` - Main landing page (382 lines)
- `src/components/ContactForm.tsx` - Form with validation (189 lines)
- `tailwind.config.ts` - Custom theme colors and fonts
- `vercel.json` - Serverless function runtime configuration
- `README.md` - Project status, deployment checklist, TO-DO list
- `DNS_CONFIGURATION_GUIDE.md` - Resend domain verification steps
- `RECAPTCHA_SETUP.md` - Google reCAPTCHA setup walkthrough

## Production Status
- **Domain**: Not yet configured (pending purchase)
- **Email sending**: Configured with Resend (domain verification pending)
- **Sender**: Configured in `api/send-email.js`
- **Recipient**: `rokdan.servicios@gmail.com`
- **Region**: Resend hosted in Ireland (eu-west-1) - independent from Vercel region
- **Git Configuration**: Commits must be authored by `rokdan.web@gmail.com` for Vercel deployments
- **Repository**: `LucasSA97/tech-trio-pages`
