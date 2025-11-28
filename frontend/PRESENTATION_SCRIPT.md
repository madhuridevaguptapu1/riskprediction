# Nexus Strategies - Presentation Script
**Project:** Student Risk Prediction Dashboard
**Time:** 5 Minutes
**Speakers:** 5 (Speaker 1 - Speaker 5)

---

### 0:00 - 0:30 | Speaker 1: Introduction & The Problem
**Visual:** *Home Section & Problem Section*

"Good morning everyone, we are **Nexus Strategies**.

Higher education faces a silent crisis: data disconnection. At Horizon State University, advisors are often the last to know when a student is struggling because academic, financial, and attendance data live in silos.

Our solution is the **Student Risk Prediction Dashboard**—a unified, proactive system designed to identify at-risk students *before* they drop out.

We focused on three key stakeholders:
1.  **Advisors** who need actionable insights.
2.  **Students** who need timely support.
3.  **Administrators** who need to allocate resources effectively."

---

### 0:30 - 1:30 | Speaker 2: Research & Architecture
**Visual:** *Architecture Section*

"To solve this, we didn't just build a UI; we built a robust **Enterprise Architecture**.

Our system operates on four distinct layers:
1.  **Business Layer:** Aligns with HSU's weekly advising workflows.
2.  **Data Layer:** Ingests and normalizes data from disparate sources.
3.  **Application Layer:** Handles the risk scoring logic.
4.  **Technology Layer:** A lightweight, browser-based client for speed and accessibility.

We used a **denormalized data structure** containing 2,200 synthetic student records across 8 semesters. This design allows for instant, client-side filtering without complex server queries, ensuring advisors get answers in milliseconds, not minutes."

---

### 1:30 - 2:30 | Speaker 3: Data Analysis & Methodology
**Visual:** *Data Analysis Section*

"Our data methodology was rigorous. We generated our dataset based on benchmarks from the **Department of Education** and **NCES**.

Our analysis revealed three critical insights:
1.  **Attendance is King:** It is the single strongest predictor of risk, often signaling distress weeks before grades drop.
2.  **Financial Stress:** Unpaid fees are a major hidden driver of dropout rates.
3.  **The 'Chemistry' Problem:** Our data showed specific departments, like Chemistry, had lower average GPAs, highlighting areas for institutional support.

We combined these factors into a transparent **Risk Score** (0-100), ensuring that our model is explainable and fair."

---

### 2:30 - 4:30 | Speaker 4: Live Dashboard Demo
**Visual:** *Dashboard Section (Interactive)*

*(Speaker navigates the embedded dashboard)*

"Let's look at the live solution.

Here is the **Advisor Dashboard**. At a glance, you see the high-level health of the institution.
*   **Filter by Risk:** I can immediately filter for 'High Risk' students.
*   **Department View:** Let's drill down into the 'Physics' department.
*   **Student Profile:** Clicking on a student reveals their full story—GPA trends, attendance drops, and financial holds all in one view.

This tool transforms an advisor from a reactive firefighter into a proactive coach, giving them the specific context they need to intervene effectively."

---

### 4:30 - 5:00 | Speaker 5: Ethics, Impact & Conclusion
**Visual:** *Ethics Section*

"We built this system with **Ethics First**.
We avoided 'black-box' AI. Every risk score is traceable to specific data points, ensuring fairness and preventing bias.

**The Impact:**
*   **Faster Response:** Advisors save hours of data gathering.
*   **Better Outcomes:** Early intervention is proven to increase retention.

Nexus Strategies is proud to present a tool that doesn't just predict failure, but actively empowers success. Thank you."

---
**Q&A Preparation:**
*   *Q: How is data privacy handled?* A: We use synthetic data for development and role-based access control in production.
*   *Q: Can this scale?* A: Yes, the microservices architecture allows us to plug in new data sources easily.
