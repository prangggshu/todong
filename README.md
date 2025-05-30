
# todong - Your Simple Todo Manager 📝

A minimalist and responsive Todo application built with **React**. Easily manage your daily tasks with a clean interface and useful features like editing, completion toggles, and local storage persistence.

## 🚀 Features

### ✅ Task Management
- **Add Todo**  
  Type a task and click the save icon to add it to your list.

- **Edit Todo**  
  Update any task using the edit icon, which pre-fills the input with the selected todo.

- **Delete Todo**  
  Remove any task from the list permanently with the delete icon.

### 📌 Task Completion
- **Checkbox Toggle**  
  Mark tasks as completed using checkboxes.

- **Line-Through Styling**  
  Completed tasks are visually distinguished with a line-through.

### 👀 Show/Hide Finished
- Toggle the **"Show Finished"** checkbox to filter the completed tasks from the list.

### 💾 Local Storage Persistence
- All tasks are saved to the browser’s **LocalStorage** and persist across page reloads or sessions.

### 🎨 Clean UI with Tailwind CSS
- Responsive design using **Tailwind CSS**
- Hover effects for better user interaction
- Styled buttons and task containers with transitions

### 🔧 Icons Support
- Intuitive UI using **react-icons**:
  - ✏️ `MdModeEditOutline` – Edit tasks
  - 🗑️ `MdDelete` – Delete tasks
  - 💾 `MdSaveAlt` – Save tasks

---

## 🛠️ Tech Stack

- **React**
- **Tailwind CSS**
- **LocalStorage API**
- **UUID** (for unique task IDs)
- **React Icons**

---

## 📦 Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/todong.git
   cd todong
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open in browser:  
   Visit [http://localhost:5173](http://localhost:5173)

---

## 📁 File Structure (Simplified)

```
todong/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
└── README.md
```

---

## 📌 Todo for Future

- Add due dates or priority levels
- Drag-and-drop sorting
- Dark mode support
- Backend sync (Firebase or local server)

---

## 🧑‍💻 Author

Built with ❤️ by The Misfit

---


