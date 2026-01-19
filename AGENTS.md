# Agent Development Guidelines

This document provides coding agents with essential information for working in this repository.

## Project Overview

**Tech Stack**: React 18 + TypeScript + Vite 5, deployed to Vercel with serverless functions  
**Purpose**: Corporate website with contact form and email integration  
**UI Library**: shadcn/ui (Radix UI primitives + Tailwind CSS)  
**Node Version**: 22.x

## Build, Lint & Test Commands

### Development
```bash
npm run dev          # Start dev server on port 5173
npm run build        # Production build
npm run build:dev    # Development build (includes component tagger)
npm run lint         # Run ESLint on all files
npm run preview      # Preview production build locally
```

### Testing
**Note**: This project currently has no test suite configured. If adding tests, consider:
- Vitest for unit/integration tests
- React Testing Library for component tests
- Playwright or Cypress for E2E tests

## Architecture

### Frontend Structure
- **Single-page app**: `src/App.tsx` → `src/pages/Landing3.tsx`
- **Components**: Feature components in `src/components/`, UI components in `src/components/ui/`
- **Path aliases**: `@/` maps to `src/` (configured in `vite.config.ts` and `tsconfig.json`)
- **Routing**: React Router v6 (minimal - all routes point to Landing3)

### Backend (Serverless)
- **Email API**: `api/send-email.js` - Vercel serverless function (Node.js runtime)
- **Important**: NOT part of Vite build - deployed separately by Vercel
- **Runtime**: Specified in `vercel.json` - uses `@vercel/node@5.0.0`

## Code Style Guidelines

### Import Organization
```typescript
// 1. External libraries
import { useState } from "react";
import { useForm } from "react-hook-form";

// 2. UI components (shadcn/ui)
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// 3. Custom components
import ContactForm from "@/components/ContactForm";

// 4. Utilities and types
import { cn } from "@/lib/utils";
import * as z from "zod";

// 5. Icons (lucide-react)
import { Loader2, CheckCircle2, XCircle } from "lucide-react";
```

### TypeScript Guidelines
- **Type inference**: Use `z.infer<typeof schema>` for Zod schemas
- **Interface over type**: Use `interface` for component props
- **Relaxed strictness**: `noImplicitAny: false`, `strictNullChecks: false` (as per tsconfig.json)
- **Unused variables**: Allowed (ESLint configured with `@typescript-eslint/no-unused-vars: off`)
- **Optional props**: Always include `className?: string` for style extensibility

### Component Patterns
```typescript
// Feature components - default export
interface ComponentProps {
  className?: string;
  // other props
}

const ComponentName = ({ className = "" }: ComponentProps) => {
  return <div className={cn("base-styles", className)}>...</div>;
};

export default ComponentName;
```

### Form Handling
- **Always use**: React Hook Form + Zod validation
- **Schema-first approach**: Define Zod schema, then infer TypeScript types
- **Error states**: Field-level errors below inputs, form-level status with icons
```typescript
const schema = z.object({
  field: z.string().min(2, "Error message"),
});

type FormData = z.infer<typeof schema>;

const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
  resolver: zodResolver(schema),
});
```

### Styling Conventions
- **Tailwind utility-first**: Use Tailwind classes exclusively
- **Class merging**: Use `cn()` from `@/lib/utils` to merge/override classes
- **Custom colors**: Use `landing3-*` color scheme (orange, blue-light, blue-dark, cream)
- **Responsive**: Mobile-first with `sm:`, `md:`, `lg:` breakpoints
- **Component extension**: Always accept `className` prop for style overrides

### Naming Conventions
- **Components**: PascalCase (e.g., `ContactForm`, `ServicesCarousel`)
- **Files**: Match component name (e.g., `ContactForm.tsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `useMobile`)
- **Constants**: UPPER_SNAKE_CASE for true constants, camelCase for config objects
- **Functions**: camelCase (e.g., `handleSubmit`, `onSubmit`)

### Error Handling
- **Try-catch**: Wrap async operations, especially API calls
- **User feedback**: Show visual status (loading, success, error) with icons
- **Logging**: Use `console.error()` for errors, `console.log()` for debugging
- **Error messages**: User-friendly Spanish messages for frontend, English for logs
```typescript
try {
  await apiCall();
  setStatus("success");
} catch (error) {
  console.error('Error:', error);
  setStatus("error");
  setErrorMessage("Usuario: mensaje amigable");
}
```

### Asset Management
- **Images**: Store in `public/`, reference as `/image.webp` (NOT `/public/...`)
- **Format**: Prefer WebP for images
- **Optimization**: Include `width`, `height`, `loading` attributes
- **Above-fold**: Use `loading="eager"` for critical images

## shadcn/ui Components

### DO NOT Edit UI Components Directly
- All components in `src/components/ui/` are auto-generated
- To modify: regenerate with shadcn CLI or edit component config

### Adding New Components
```bash
npx shadcn@latest add <component-name>
```

### Customization
- Extend via Tailwind config (`tailwind.config.ts`)
- Override styles using `className` prop + `cn()` utility

## Environment Variables

### Required for Production
- `RESEND_API_KEY` - Resend email service API key
- `RECAPTCHA_SECRET_KEY` - Google reCAPTCHA v3 secret (server-side)

### Frontend (Build-time)
- reCAPTCHA site key is hardcoded in code (not from env vars)

### Local Development
1. Create `.env.local` (see `.env.example`)
2. Add both keys above for full email functionality

## Git Workflow

### Commits
- **Author**: Must use `satfuncionalmallorca.web@gmail.com` for Vercel deployments
- **Messages**: Clear, concise, in English
- **Format**: Conventional commits preferred (e.g., `feat:`, `fix:`, `docs:`)

### Branches
- **Main**: Auto-deploys to production on Vercel
- **Dual repos**: Code syncs to personal and business repositories

## Common Tasks

### Modifying Services List
Update `services` array in `src/pages/Landing3.tsx` (populates hero cards and accordion)

### Changing Email Template
Edit HTML string in `api/send-email.js` lines 54-238 (inline CSS required for email clients)

### Adjusting reCAPTCHA Threshold
Modify score threshold in `api/send-email.js:37` (default: 0.5)

### Debugging Email Issues
1. Check Vercel function logs (Deployments → Functions → Logs)
2. Verify reCAPTCHA score in logs (should be > 0.5)
3. Check Resend dashboard: https://resend.com/emails

## Important Files Reference

- `api/send-email.js` - Email sending logic, reCAPTCHA validation
- `src/pages/Landing3.tsx` - Main landing page
- `src/components/ContactForm.tsx` - Form with validation
- `tailwind.config.ts` - Custom theme colors and fonts
- `vercel.json` - Serverless function runtime configuration
- `.github/copilot-instructions.md` - Detailed project documentation

## Production Notes

- **Domain**: satfuncionalmallorca.com (DNS verified)
- **Email sender**: `contacto@satfuncionalmallorca.com`
- **Email recipient**: `satfuncionalmallorca@gmail.com`
- **Resend limitation**: Can ONLY send from verified domains or `@resend.dev`
- **Auto-deploy**: Push to `main` triggers Vercel deployment
