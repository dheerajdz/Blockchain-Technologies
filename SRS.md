# **Software Requirements Specification (SRS)**

## **Company Website Redesign Project**

---

# **1\. Introduction**

## **1.1 Purpose**

The purpose of this project is to design and develop a modern, responsive, scalable, and production-ready company website that showcases the organization's expertise.

The website will serve as the official digital presence of the company and provide information about services, projects, blogs, team members, and career opportunities.

---

## **1.2 Scope**

The website will:

* Represent the company professionally  
* Showcase services provided by the company  
* Display projects and achievements  
* Publish technical blogs and updates  
* Present company team members  
* Allow visitors to contact the company  
* Support future scalability and content management

---

## **1.3 Technology Stack**

### **Frontend**

* Next.js

### **Backend / Database**

* Firebase

---

# **2\. Product Overview**

The system will consist of a public-facing company website along with administrative capabilities for managing content in the future.

Primary users:

* Visitors  
* Potential Clients  
* Recruiters  
* Students  
* Company Administrators

---

# **3\. Website Sitemap**

Website

├── Home

├── About Us

├── Services

│ ├── Blockchain

│ ├── —--(more services)

│ └── —-(more services)

├── Projects

├── Team

├── Blog

├── Careers

└── Contact Us

---

# 

# 

# **4\. Functional Modules**

## **Module 1: Home Page**

### **Purpose**

Provide visitors with an overview of the company.

### **Components**

* Hero Section  
* Company Introduction  
* Services Overview  
* Featured Projects  
* Technology Stack  
* Team Preview  
* Latest Blogs  
* Contact CTA  
* Footer

### **Features**

* Responsive Design  
* Call-to-Action Buttons  
* Smooth Scrolling  
* Interactive UI

---

## **Module 2: About Us**

### **Components**

* Company Overview  
* Mission  
* Vision  
* Core Values  
* Company Journey

### **Features**

* Static Content Management  
* Responsive Layout

---

## **Module 3: Services**

### **Submodules**

#### **Blockchain Services**

* Smart Contracts  
* DApps  
* Web3 Solutions

And other services 

### **Features**

* Service Cards  
* Detailed Service Information

---

## **Module 4: Projects / Portfolio**

### **Components**

* Project Cards  
* Project Details  
* Technologies Used  
* Outcomes

### **Features**

* Dynamic Project Display  
* Firebase Data Integration

---

## **Module 5: Team**

### **Components**

* Leadership Team  
* Core Team  
* Interns

### **Features**

* Team Member Cards  
* Designation Display  
* Social Media Links(LinkedIn)

---

## **Module 6: Blog(Currently can add static blogs)**

### **Components**

* Blog Listing Page  
* Blog Details Page  
* Categories

### **Features**

* Dynamic Blog Fetching  
* Blog Search  
* Blog Categorization

### **Firebase Collections**

* Blogs

---

## **Module 7: Careers**

### **Components**

* Open Positions  
* Internship Opportunities

### **Features**

* Job Listings  
* Application Information

---

## **Module 8: Contact Us**

### **Components**

* Contact Form  
* Email Information  
* Social Links(X, LinkedIn)

### **Features**

* Form Validation  
* Firebase Data Storage  
* Success/Error Handling

---

# **5\. Admin Modules (Future Scope)**

## **Blog Management**

Admin should be able to:

* Create Blog  
* Update Blog  
* Delete Blog

---

## **Team Management**

Admin should be able to:

* Add Team Member  
* Edit Team Member  
* Remove Team Member

---

## **Project Management**

Admin should be able to:

* Add Projects  
* Edit Projects  
* Remove Projects

---

# **6\. Firebase Database Structure**

## **Collection: Blogs**

Fields:

* id  
* title  
* category  
* content  
* author  
* createdAt

---

## **Collection: Team**

Fields:

* id  
* name  
* role  
* image  
* linkedin

---

## **Collection: Projects**

Fields:

* id  
* title  
* description  
* technologies  
* image  
* github  
* demo

---

## **Collection: Contacts**

Fields:

* id  
* name  
* email  
* message  
* timestamp

---

# **7\. Non-Functional Requirements**

## **Performance**

* Page load time less than 3 seconds

## **Security**

* Input Validation  
* Firebase Security Rules

## **Scalability**

* Easy addition of services, blogs, projects, and team members

## **Responsiveness**

* Mobile  
* Tablet  
* Desktop

## **Usability**

* Modern and intuitive user experience

---

# **8\. Team Module Allocation Suggestion**

### **UI/UX Team**

* Wireframes  
* Figma  
* Design System

### **Frontend Team**

* Home  
* About  
* Services  
* Projects  
* Team  
* Blog  
* Careers  
* Contact

### **Firebase Team**

* Database Design  
* Collections  
* Data Integration

### **Documentation Team**

* SRS  
* README  
* Technical Documentation

### **QA Team**

* Testing  
* Bug Tracking

---

# **9\. Future Enhancements**

* Admin Dashboard  
* Newsletter Subscription  
* Search Functionality  
* Analytics Dashboard  
* AI Assistant Integration  
* Client Testimonials  
* Event Management

**Team:**  
**Design- Dhiraj, Harsh**  
**Frontend- Sejal, Om,Palak**  
**Backend-Rutuja,Abhay,Karan,Shalaka**  
**Testing-Ruchi,Nishtha,Siddhi,Madhavi**  
**Content Team- Yash,Purvaja**