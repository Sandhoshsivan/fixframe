# FixFrame

Marketing website for FixFrame — a visual production crew offering photography,
videography, and digital invitations.

## Stack

Static site — no build step, no framework.

| Layer | Technology |
| --- | --- |
| Markup | HTML5 |
| Styling | CSS3 (`css/`) |
| Behaviour | Vanilla JavaScript (`js/`) |
| CI | GitHub Actions (`.github/`) |

## Running locally

No dependencies to install. Open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Structure

```
index.html    single-page site
css/          stylesheets
js/           interaction and scroll behaviour
.github/      workflows
```
