# Private Members Repository Template

Create a **private** GitHub repository for storing member data and admin skills.

## Repository Structure

```
claude-community-helsinki-members/   (PRIVATE)
├── .claude/
│   └── skills/
│       ├── process-members.md    # Skill to process join requests
│       └── notify-event.md       # Skill to send event notifications
├── members.json                  # Member list
├── processed-issues.json         # Track processed issues
├── email-log.json                # Email sending history
└── README.md                     # Setup instructions
```

## members.json

```json
{
  "version": "1.0",
  "lastUpdated": "2024-12-28T12:00:00Z",
  "members": [
    {
      "id": "m_001",
      "name": "Maria Virtanen",
      "email": "maria@example.com",
      "github": "mariav",
      "role": "Software Developer",
      "interests": "AI development, prompt engineering",
      "newsletter": true,
      "joinedAt": "2024-12-28",
      "source": {
        "type": "github-issue",
        "repo": "claude-community-helsinki/claude-community-helsinki-website",
        "issueNumber": 1
      },
      "status": "active"
    }
  ]
}
```

## processed-issues.json

Track which issues have been processed to avoid duplicates:

```json
{
  "processedIssues": [
    {
      "issueNumber": 1,
      "processedAt": "2024-12-28T12:00:00Z",
      "memberId": "m_001",
      "welcomeEmailSent": true
    }
  ]
}
```

## email-log.json

Track sent emails for debugging and compliance:

```json
{
  "emails": [
    {
      "id": "email_001",
      "type": "welcome",
      "to": "maria@example.com",
      "subject": "Welcome to Claude Code Community Helsinki!",
      "sentAt": "2024-12-28T12:00:00Z",
      "resendId": "abc123",
      "status": "delivered"
    },
    {
      "id": "email_002",
      "type": "event-notification",
      "to": "maria@example.com",
      "subject": "[Event] Claude Code Workshop - Jan 15",
      "sentAt": "2024-12-28T12:00:00Z",
      "resendId": "def456",
      "status": "delivered"
    }
  ]
}
```

## README.md for Private Repo

```markdown
# Claude Code Community Helsinki - Members

Private repository for community member data.

## Security

- This repo is PRIVATE - never make it public
- Contains personal data (emails) - handle with care
- Only community organizers should have access

## Structure

- `members.json` - All community members
- `processed-issues.json` - Processed join requests
- `email-log.json` - Email sending history

## Usage

This repo contains Claude Code skills for member management.
Run skills from within this repo:

```bash
cd claude-community-helsinki-members
claude "/process-members"    # Process pending join requests
claude "/notify-event"       # Send event notifications
```

## Environment Setup

Required environment variables (in `~/.claude/.env`):

\`\`\`
GITHUB_TOKEN=ghp_xxxxx
RESEND_API_KEY=re_xxxxx
MEMBERS_REPO=claude-community-helsinki/claude-community-helsinki-members
\`\`\`

## GDPR Notes

- Members can request data deletion via email
- Remove member from members.json and add to email-log.json with "unsubscribed" status
- Keep email log for 30 days for debugging, then purge
```

## Setup Steps

1. Create private repo: `claude-community-helsinki-members`
2. Initialize with the files above (empty arrays for data files)
3. Add the `.claude/skills/` folder with skills below
4. Add your GitHub account as the only collaborator
5. Set up environment variables locally
6. Test with a sample join request

---

## Skill: process-members.md

Create `.claude/skills/process-members.md`:

```markdown
# Process Members Skill

Process approved join requests from GitHub Issues, add members to this repo, and send welcome emails.

## Prerequisites

Environment variables (in `~/.claude/.env`):
- `GITHUB_TOKEN` - Personal access token with repo access
- `RESEND_API_KEY` - Resend API key for sending emails
- `WEBSITE_REPO` - Public website repo (e.g., hectortosa/claude-community-helsinki-website)

## Usage

Run this skill to process pending join requests:

\`\`\`
claude "/process-members"
\`\`\`

## What This Skill Does

1. Fetches open issues with label `join-request` from the website repo
2. Parses member data from the issue body (name, email, role, interests)
3. Adds member to `members.json` in this repo
4. Sends welcome email via Resend
5. Closes the issue and adds `processed` label

## Steps

### Step 1: Fetch pending join requests

\`\`\`bash
gh issue list --repo $WEBSITE_REPO --label "join-request" --state open --json number,title,body,createdAt,author
\`\`\`

### Step 2: Parse each issue

Extract from issue body:
- **Name**: From "### Name" section
- **Email**: From "### Email" section
- **Role**: From "### What best describes you?" section
- **Interests**: From "### What are you interested in?" section
- **Newsletter**: Check if newsletter checkbox is checked
- **GitHub username**: From issue author

### Step 3: Add to members.json

Add new member entry with unique ID, timestamp, and source reference.

### Step 4: Send welcome email

Use Resend API:

\`\`\`bash
curl -X POST 'https://api.resend.com/emails' \
  -H "Authorization: Bearer $RESEND_API_KEY" \
  -H 'Content-Type: application/json' \
  -d '{
    "from": "Claude Code Helsinki <community@your-domain.com>",
    "to": ["member@example.com"],
    "subject": "Welcome to Claude Code Community Helsinki!",
    "html": "<h1>Welcome!</h1><p>...</p>"
  }'
\`\`\`

### Step 5: Close the issue

\`\`\`bash
gh issue close NUMBER --repo $WEBSITE_REPO --comment "Welcome! 🎉 You've been added to the community."
gh issue edit NUMBER --repo $WEBSITE_REPO --add-label "processed"
\`\`\`

## Welcome Email Template

Subject: **Welcome to Claude Code Community Helsinki!**

Include:
- Personal greeting with their name
- Links to upcoming events (Luma calendar)
- Link to community guidelines
- What to expect next
```

---

## Skill: notify-event.md

Create `.claude/skills/notify-event.md`:

```markdown
# Notify Event Skill

Send event notification emails to all community members who opted in to newsletters.

## Prerequisites

Same environment variables as process-members skill.

## Usage

\`\`\`
claude "/notify-event [Event Name] on [Date] at [Time], [Location]. Register: [Luma URL]"
\`\`\`

Example:
\`\`\`
claude "/notify-event Claude Code Workshop on Jan 15 at 18:00, Maria 01. Register: https://lu.ma/xxx"
\`\`\`

## What This Skill Does

1. Reads members.json from this repo
2. Filters members who have newsletter=true
3. Composes personalized email with event details
4. Sends via Resend to all subscribed members
5. Logs results to email-log.json

## Steps

### Step 1: Get subscribed members

Read members.json and filter for `newsletter: true` and `status: "active"`.

### Step 2: Compose event email

Subject: **[Event] {{Event Name}} - {{Date}}**

Include:
- Event details (date, time, location)
- Brief description
- Register button linking to Luma
- Unsubscribe info

### Step 3: Send emails

Loop through members and send via Resend API.

### Step 4: Log results

Update email-log.json with sent emails and any failures.

Report summary:
- ✓ X emails sent successfully
- ✗ Y failed (list reasons)

## Tips

- Test with your own email first
- Resend free tier: 100 emails/day
- Send 5-7 days before event, reminder 1 day before
```
