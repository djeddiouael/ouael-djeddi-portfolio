# CV PDFs

The **Smart CV Center** checks these files with a `HEAD` request before
downloading. Until they exist, visitors see a graceful "request by email"
fallback instead of a broken download.

Add the two PDFs here using exactly these filenames:

- `DJEDDI_Ouael_FullStack_CV.pdf`
- `DJEDDI_Ouael_AI_CV.pdf`

> The filenames must match `t.smartCV.profiles.*.filename` in
> `src/i18n/translations.ts`. If you rename the files, update both the English
> and French translation objects.

Recommended: export as PDF/A, keep each file under ~500 KB, and include your
email, GitHub, LinkedIn and portfolio URL in the header.
