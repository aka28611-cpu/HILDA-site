# Hilda Lingerie Store - Preview Run Doc

## Prerequisites
- Dependencies are already installed in node_modules/ (run `npm install` if missing)
- No `.env.local` needed for preview (Supabase keys are optional for static demo)

## How to reproduce artifacts
No build artifacts needed for dev mode. If doing a fresh checkout:
1. `npm install`
2. Copy `.env.local` from main checkout if available (optional — site runs without it)

## How to run the server
```bash
npx next dev -p 3002
```
- Port: 3002 (3000 was occupied)
- URL: http://localhost:3002
- Log: .freebuff/preview-2d8663ba-cbfe-4e88-82ed-f208bf28fa78.log
