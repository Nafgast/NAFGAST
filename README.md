# NAFGAST

NAFGAST is the website for NAFGAST Secondary School. The site provides information about admissions, results checking, the student portal, news, events, and contact details.

## Project structure

- `frame.html` — Main site HTML frame
- `style.css` — Global site styles
- `logo.jpg`, `crest.png` — Brand assets
- `admin/` — Admin login and dashboard (`login.php`, `dashboard.php`, `logout.php`)
- `forms/` — Admission form and related PHP (`admission.php`, `admission-form.pdf`)
- `portal student/` — Student portal pages (`login.php`, `dashboard.php`, `logout.php`)
- `results/` — Result checker (`checker.php`)

## Getting started

This is primarily a static site with a few PHP pages for forms and simple server-side functionality. To preview locally:

1. If you have PHP installed, you can run a local server from the project folder:

   php -S localhost:8000 -t .

   Then open http://localhost:8000/frame.html in your browser.

2. Alternatively, open `frame.html` directly in a browser for a static preview (some PHP features will not work).

## Notes

- Update links and contact details as needed (email and phone are placeholders in the footer).
- Ensure any PHP pages are hosted on a server with PHP enabled for full functionality.

## Author

NAFGAST Secondary School — site maintained by Precious Adekunle

## License

Distributed under no specific license. Add a LICENSE file if you want to specify one.
