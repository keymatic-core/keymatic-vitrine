---
trigger: always_on
---

# GEMINI.md - Antigravity Kit (Vitrine)

> This file defines how the AI behaves in this workspace.

---

## 🎨 CRITICAL: SUPERIOR DESIGN & FRONTEND ENGINEERING

This project is a high-performance web interface. You must strictly adhere to the highest standards of modern UX/UI and frontend performance.

**When working on UI/Frontend tasks, you MUST load and follow these skills:**
- `@[skills/frontend-design]`
- `@[skills/interface-design]`
- `@[skills/canvas-design]`
- `@[skills/nextjs-react-expert]` (if applicable)

### 1. The UX/UI Mandate
Before writing ANY frontend code, you must:
1. **Analyze UX impact:** How does this interaction feel? Is it intuitive?
2. **Apply Design Principles:** Use whitespace effectively, maintain visual hierarchy, and ensure accessible contrast ratios.
3. **Micro-interactions:** Implement subtle animations and loading states to make the interface feel "alive".
4. **Refuse Standard Templates:** Do not use generic, boring, or out-of-the-box template aesthetics unless explicitly requested. Design premium, custom-feeling interfaces.

### 2. The "Purple/Violet" Ban (if inherited from agent rules)
If the specialist agent dictates color bans or strict brand guidelines, you must parse and obey them religiously before proposing palettes.

---

## 🧠 CRITICAL: AGENT & SKILL PROTOCOL

> **MANDATORY:** You MUST read the appropriate agent file (`.agent/agents/*.md`) and its skills BEFORE performing any implementation.

### 1. Modular Skill Loading Protocol
Agent activated → Check frontmatter "skills:" → Read `SKILL.md` (INDEX) → Read specific sections.
- **Selective Reading:** DO NOT read ALL files in a skill folder first. Read `SKILL.md` first.
- **Rule Priority:** P0 (GEMINI.md) > P1 (Agent .md) > P2 (SKILL.md). All rules are binding.

---

## 🤖 INTELLIGENT AGENT ROUTING (AUTO-SELECTION)

**ALWAYS ACTIVE: Before responding to ANY request, automatically analyze and select the best agent(s).**

### Response Format (MANDATORY)
When auto-applying an agent, inform the user:
```markdown
🤖 **Applying knowledge of `@[agent-name]`...**

[Continue with specialized response]
```

### ⚠️ AGENT ROUTING CHECKLIST
Before ANY code or design work, ask yourself:
1. Did I identify the correct UI/Frontend agent?
2. Did I READ the agent's `.md` file?
3. Did I announce `🤖 Applying knowledge of @[agent]...`?
4. Did I load the required UX/UI skills?

---

## 🌐 TIER 0: UNIVERSAL RULES

### 🧹 Clean UI Code
**ALL code MUST follow `@[skills/clean-code]` rules.**
- **Code:** Concise, component-driven, direct, no over-engineering.
- **Styling:** Consistent use of design utility tokens (Tailwind or similar). No inline styles unless animating dynamics.
- **Performance:** Core Web Vitals are priority. No layout shifting (CLS), optimize images, leverage server components where possible.

### 🛑 Socratic Gate (UX Discovery)
**For complex UI requests, STOP and ASK first:**
- Who is the end-user?
- What is the primary action they need to take on this screen?
- Are there edge cases (loading, empty states, error states)?
- **Wait:** Do NOT invoke subagents or write code until the user clears the Gate.

---

## 📱 Project Type Routing

| Task Domain | Primary Agent | Key Skills to Load |
|---|---|---|
| **Web UI/UX (React/Next)** | `frontend-specialist` | `frontend-design`, `interface-design`, `nextjs-react-expert` |
| **Complex Canvas/WebGL** | `frontend-specialist` | `canvas-design`, `frontend-design` |
| **Mobile Web Views** | `mobile-developer` | `mobile-design`, `interface-design` |

> 🔴 **For ANY design work:** You must read the agent files to learn specific bans, aesthetic templates, and UX protocols.
