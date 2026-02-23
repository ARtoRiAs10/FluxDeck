# 🗂️ FluxDeck — Project Management Tool

A **Jira-inspired** full-stack project management application built with **Next.js** and **TypeScript**. FluxDeck empowers teams to manage workspaces, track tasks on visual Kanban boards, collaborate with members, and monitor progress through analytics — all in a sleek, modern interface.

---

## ✨ Features

- 🏢 **Workspaces** — Create and manage multiple isolated workspaces for different organizations or teams
- 📁 **Projects** — Organize work into projects within each workspace, with custom icons and settings
- 📋 **Kanban Board** — Drag-and-drop task management across Todo, In Progress, In Review, and Done columns
- 📅 **Table & Calendar Views** — Switch between list, table, and calendar perspectives for your tasks
- 👥 **Member Management** — Invite members to workspaces, assign roles (Admin / Member), and manage permissions
- 🏷️ **Task Management** — Create rich tasks with assignees, due dates, priorities, and status tracking
- 📊 **Analytics Dashboard** — Visual insights into project velocity, task completion rates, and team activity
- 🔐 **Authentication** — Secure sign-in/sign-up with session management
- 📎 **Invite Links** — Generate shareable invite links for easy workspace onboarding

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + shadcn/ui |
| State Management | TanStack Query (React Query) |
| Drag & Drop | @hello-pangea/dnd |
| Authentication | Hono + Appwrite / Clerk |
| Deployment | Vercel |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/ARtoRiAs10/FluxDeck.git
cd FluxDeck/FluxDeck

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
```

### Environment Variables

```env
# App
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_key
CLERK_SECRET_KEY=sk_test_your_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Database / Appwrite (if used)
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=your_project_id
APPWRITE_DATABASE_ID=your_database_id
APPWRITE_API_KEY=your_api_key
```

### Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 📁 Project Structure

```
FluxDeck/
└── FluxDeck/
    ├── src/
    │   ├── app/                    # Next.js App Router
    │   │   ├── (auth)/             # Auth pages (sign-in, sign-up)
    │   │   ├── (dashboard)/        # Protected dashboard layout
    │   │   │   ├── workspaces/     # Workspace management
    │   │   │   └── projects/       # Project & task views
    │   │   └── api/                # API routes (Hono RPC)
    │   ├── components/             # Shared UI components
    │   │   ├── kanban/             # Kanban board & cards
    │   │   ├── data-table/         # Table view
    │   │   └── ui/                 # shadcn/ui base components
    │   ├── features/               # Feature-based modules
    │   │   ├── auth/               # Auth hooks & server actions
    │   │   ├── workspaces/         # Workspace CRUD & invite logic
    │   │   ├── projects/           # Project management
    │   │   ├── tasks/              # Task creation, editing, filtering
    │   │   └── members/            # Member roles & management
    │   ├── lib/                    # Utils, query client, RPC client
    │   └── hooks/                  # Global custom hooks
    └── public/                     # Static assets
```

---

## 🎯 Core Workflows

### Creating a Workspace
1. Sign in and navigate to the home dashboard
2. Click **Create Workspace** and give it a name and icon
3. Invite team members via a generated invite link

### Managing Tasks
1. Open a project inside your workspace
2. Switch between **Board**, **Table**, or **Calendar** view
3. Create tasks with title, assignee, due date, status, and priority
4. Drag and drop cards across columns on the Kanban board

### Monitoring Progress
1. Navigate to the **Analytics** tab on any project
2. View completed vs. incomplete tasks, overdue items, and assigned task counts

---

## 🗺️ Roadmap

- [ ] Real-time collaboration with WebSockets
- [ ] File attachments on tasks
- [ ] Sprint planning & backlog view
- [ ] Time tracking per task
- [ ] Mobile app (React Native)

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'feat: add your feature'`
4. Push: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [Apache-2.0 License](./LICENSE).
