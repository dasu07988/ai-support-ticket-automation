# AI Support Ticket Automation System

An AI-powered support ticket automation workflow built using Flowise, Google Gemini, and the Trello API.

The system automatically converts user support requests into Trello support tickets and instantly returns the live Trello card URL.

---

## 🚀 Features

- AI-powered ticket creation
- Real-time Trello API integration
- Flowise Tool Agent workflow
- Prompt-driven automation
- AI tool orchestration
- Automatic Trello URL generation
-  AI-driven tool calling


---

## 🛠 Tech Stack
- **Flowise**
- **Google Gemini 2.5 Flash Lite**
- **Trello API**
- **JavaScript**
- **Node.js**

---
---

## 🧠 Workflow Architecture

User Request
↓
Flowise Tool Agent
↓
Google Gemini 2.5 Flash Lite
↓
Custom JavaScript Tool
↓
Trello API
↓
Generated Trello Ticket URL


## ⚡ Challenges Faced

During development, several real-world engineering issues were encountered and solved:

- Gemini API quota/rate-limit errors (429)
- JSON parsing issues caused by markdown-formatted outputs
- Trello API authentication debugging
- Tool Agent schema mismatches
- Async JavaScript execution issues
- Board ID vs List ID confusion inside Trello APIs

---

## 📷 Screenshots

### Flowise Workflow


### Trello Ticket Creation


### Generated Trello Card


---

## 💡 Key Learning

This project taught me that AI systems often fail because of workflow architecture and integrations rather than the AI model itself.

---

## 🔮 Future Improvements

- Ticket priority classification
- Slack/Discord notifications
- Email integration
- AI ticket summarization
- Multi-board support

---

## 👩‍💻 Author

Dasuni Jayasundara
