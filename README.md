# ResumeCraft

ResumeCraft is a full-stack web application that allows users to create, customize, and export professional resumes using pre-designed templates. It features user authentication, a dashboard for managing resumes, and seamless PDF export functionality.

## Features

- **User Authentication**: Secure login and signup with JWT-based authentication.
- **Resume Builder**: Intuitive interface to create resumes with multiple sections (personal info, experience, education, skills, etc.).
- **Templates**: Choose from professionally designed templates (TemplateOne, TemplateTwo, TemplateThree).
- **Dashboard**: Manage multiple resumes, edit existing ones, and track progress.
- **PDF Export**: Generate high-quality PDF resumes using html2pdf.js.
- **Image Upload**: Upload profile pictures and other images with Multer middleware.
- **Responsive Design**: Mobile-friendly UI built with TailwindCSS.
- **Real-time Preview**: See changes instantly while editing resumes.

## Tech Stack

### Backend
- **Node.js** with **Express.js** for server-side logic.
- **MongoDB** with **Mongoose** for data storage.
- **JWT** for authentication.
- **Multer** for file uploads.
- **bcryptjs** for password hashing.
- **CORS** for cross-origin requests.

### Frontend
- **React** with **Vite** for fast development and building.
- **TailwindCSS** for styling.
- **React Router** for navigation.
- **Axios** for API calls.
- **html2pdf.js** and **jsPDF** for PDF generation.
- **React Hot Toast** for notifications.
- **Lucide React** and **React Icons** for icons.

