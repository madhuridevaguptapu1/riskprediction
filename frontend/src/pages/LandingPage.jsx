import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BarChart2, Shield, Users, Activity, Layers, Database, Layout, Lock, Server, FileText, GitBranch, AlertTriangle, Clock, FileWarning } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHw0fHxkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwwfHx8fDE3NjQzMzI3NDV8MA&ixlib=rb-4.1.0&q=85" 
          alt="Data Analytics Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/90 dark:bg-slate-950/90 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/80 via-white/50 to-cyan-50/80 dark:from-slate-900/90 dark:via-slate-900/80 dark:to-slate-800/90" />
      </div>

      {/* Animated Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="container px-4 md:px-6 text-center z-10">
        <Badge variant="outline" className="mb-6 px-4 py-1 text-sm border-primary/20 text-primary bg-primary/5 backdrop-blur-sm">
          Nexus Strategies • Final Project Presentation
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 font-heading">
          Student Risk <span className="text-gradient">Prediction Dashboard</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
          Empowering advisors with data-driven insights to identify at-risk students early and improve retention rates through proactive intervention.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="rounded-full px-8 text-lg h-14 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all" onClick={() => document.getElementById('dashboard').scrollIntoView({ behavior: 'smooth' })}>
            View Dashboard <BarChart2 className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-8 text-lg h-14 border-2 hover:bg-secondary/50" onClick={() => document.getElementById('architecture').scrollIntoView({ behavior: 'smooth' })}>
            View Architecture <Layers className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="glass-panel rounded-2xl p-8 max-w-4xl mx-auto text-left">
          <h3 className="text-lg font-semibold mb-2 text-primary">Executive Summary</h3>
          <p className="text-muted-foreground">
            HSU faced a critical challenge: advisors were reacting too late to student struggles due to disconnected data. 
            Nexus Strategies developed a unified risk scoring model integrating academic, financial, and engagement metrics. 
            This dashboard enables early detection, transparent decision-making, and targeted support, ultimately aiming to boost student retention and success.
          </p>
        </div>
      </div>
    </section>
  );
};

const ProblemSection = () => {
  return (
    <section id="problem" className="py-24 bg-white dark:bg-slate-950">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading">The Problem & Research</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Why traditional advising methods were falling short and what our research revealed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="hover-lift border-l-4 border-l-destructive shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Activity className="mr-3 h-6 w-6 text-destructive" />
                The Challenge
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-lg text-muted-foreground">
                <li className="flex items-start">
                  <Clock className="mr-3 h-5 w-5 text-destructive shrink-0 mt-1" />
                  <span>
                    <strong>Late Detection:</strong> Advisors often identify at-risk students 3-4 weeks after critical incidents, making intervention less effective.
                  </span>
                </li>
                <li className="flex items-start">
                  <Database className="mr-3 h-5 w-5 text-destructive shrink-0 mt-1" />
                  <span>
                    <strong>Data Silos:</strong> Critical data is fragmented across Blackboard (LMS), Banner (SIS), and Bursar systems, requiring manual compilation.
                  </span>
                </li>
                <li className="flex items-start">
                  <FileWarning className="mr-3 h-5 w-5 text-destructive shrink-0 mt-1" />
                  <span>
                    <strong>Reactive Workflow:</strong> With a 1:300+ advisor-to-student ratio, advisors are forced into a reactive "firefighting" mode rather than proactive coaching.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover-lift border-l-4 border-l-accent shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Users className="mr-3 h-6 w-6 text-accent" />
                Key Stakeholders
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-secondary rounded-lg">
                  <div className="font-semibold text-primary mb-1">Advisors</div>
                  <div className="text-sm text-muted-foreground">Need actionable, real-time insights to prioritize their caseloads effectively.</div>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <div className="font-semibold text-primary mb-1">Students</div>
                  <div className="text-sm text-muted-foreground">Beneficiaries of timely support who need transparent feedback on their standing.</div>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <div className="font-semibold text-primary mb-1">Success Office</div>
                  <div className="text-sm text-muted-foreground">Requires aggregate data for strategic resource allocation and policy making.</div>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <div className="font-semibold text-primary mb-1">Institutional Research</div>
                  <div className="text-sm text-muted-foreground">Ensures data validity, model governance, and ethical compliance.</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

const ArchitectureSection = () => {
  return (
    <section id="architecture" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading">Enterprise Architecture</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A scalable, microservices-inspired architecture designed for performance and privacy.
          </p>
        </div>

        {/* Architecture Layers */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border-l-4 border-blue-500 hover:shadow-md transition-all">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">1. Business Layer</h3>
              </div>
              <p className="text-muted-foreground pl-14">
                Supports HSU's advising workflow, enabling weekly data refreshes, continuous risk assessment, and intervention planning.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border-l-4 border-green-500 hover:shadow-md transition-all">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600">
                  <Layout className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">2. Application Layer</h3>
              </div>
              <p className="text-muted-foreground pl-14">
                Delivers the interactive dashboard, risk scoring logic, dynamic filtering, and student profile visualization.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border-l-4 border-orange-500 hover:shadow-md transition-all">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg text-orange-600">
                  <Database className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">3. Data Layer</h3>
              </div>
              <p className="text-muted-foreground pl-14">
                Collates Academic, Attendance, and Financial data. Handles normalization, validation, and composite risk score calculation.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border-l-4 border-slate-500 hover:shadow-md transition-all">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-600">
                  <Server className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">4. Technology Layer</h3>
              </div>
              <p className="text-muted-foreground pl-14">
                Lightweight, browser-based client architecture ensuring fast performance, minimal maintenance, and high accessibility.
              </p>
            </div>
          </div>

          {/* Enterprise Architecture Diagram Image */}
          <div className="relative w-full h-full min-h-[400px] bg-white dark:bg-slate-800 rounded-2xl border border-border overflow-hidden shadow-xl flex items-center justify-center p-4">
             <img 
                src="https://customer-assets.emergentagent.com/job_student-success-11/artifacts/7btic0vl_image.png" 
                alt="Nexus Strategies Enterprise Architecture Diagram" 
                className="w-full h-auto object-contain max-h-[600px] rounded-lg"
             />
          </div>
        </div>

        {/* ERD & Data Schema Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Data Schema & ERD</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A denormalized, performance-optimized data structure designed for client-side analytics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
             <Card className="bg-slate-900 text-slate-50 border-slate-800 h-full">
                <CardHeader>
                   <CardTitle className="flex items-center gap-2">
                      <GitBranch className="h-5 w-5 text-blue-400"/>
                      Data Structure Strategy
                   </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                   <p className="text-slate-300">
                      The system utilizes a <strong>denormalized design</strong>, consolidating all variables into a single optimized table structure. This eliminates complex server-side joins and enables instant filtering and risk calculation in the browser.
                   </p>
                   <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="p-3 bg-slate-800 rounded border border-slate-700">
                         <div className="text-2xl font-bold text-blue-400">2,200</div>
                         <div className="text-xs text-slate-400">Synthetic Records</div>
                      </div>
                      <div className="p-3 bg-slate-800 rounded border border-slate-700">
                         <div className="text-2xl font-bold text-blue-400">8</div>
                         <div className="text-xs text-slate-400">Semesters Tracked</div>
                      </div>
                   </div>
                   <div className="mt-6 pt-6 border-t border-slate-800">
                      <h4 className="font-semibold text-blue-400 mb-2">Schema Highlights</h4>
                      <ul className="space-y-3 text-sm text-slate-400">
                        <li className="flex justify-between items-center p-2 bg-slate-800/50 rounded">
                            <span>Student_ID</span> 
                            <Badge variant="outline" className="text-xs border-blue-500 text-blue-400">Integer (Unique Identifier)</Badge>
                        </li>
                        <li className="flex justify-between items-center p-2 bg-slate-800/50 rounded">
                            <span>GPA_Cumulative</span> 
                            <Badge variant="secondary" className="text-xs">Float (0.0 - 4.0)</Badge>
                        </li>
                        <li className="flex justify-between items-center p-2 bg-slate-800/50 rounded">
                            <span>Attendance_Rate</span> 
                            <Badge variant="secondary" className="text-xs">Percentage (0-100)</Badge>
                        </li>
                        <li className="flex justify-between items-center p-2 bg-slate-800/50 rounded">
                            <span>Risk_Score</span> 
                            <Badge className="text-xs bg-blue-600 hover:bg-blue-700">Integer (0-100 Computed)</Badge>
                        </li>
                      </ul>
                   </div>
                </CardContent>
             </Card>

             {/* ERD Diagram Image */}
             <div className="relative w-full bg-white dark:bg-slate-800 rounded-2xl border border-border overflow-hidden shadow-xl p-2">
                <img 
                  src="https://customer-assets.emergentagent.com/job_student-success-11/artifacts/to1wzo03_image.png" 
                  alt="Nexus Strategies Entity Relationship Diagram" 
                  className="w-full h-auto object-contain rounded-lg"
                />
                <div className="p-2 text-center text-xs text-muted-foreground bg-secondary/50 mt-2 rounded">
                  Figure 2: Entity Relationship Diagram (ERD)
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const DashboardSection = () => {
  return (
    <section id="dashboard" className="py-24 bg-white dark:bg-slate-950">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-accent text-accent-foreground hover:bg-accent/80">Live Demo</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading">Data Analysis & Dashboard</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore real-time department insights, student profiles, and trends.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-1 h-full">
            <CardHeader>
              <CardTitle>Analysis Methodology</CardTitle>
              <CardDescription>Synthetic Data & Benchmarks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                 <h4 className="font-semibold text-sm mb-2 text-primary">Data Sources</h4>
                 <p className="text-sm text-muted-foreground">
                    Generated using benchmarks from <strong>NCES, DOE, and NACUBO</strong> to simulate realistic academic patterns (GPA 2.7-3.2 avg) and financial pressures.
                 </p>
              </div>
              
              <div>
                 <h4 className="font-semibold text-sm mb-2 text-primary">Key Findings</h4>
                 <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                       <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-destructive shrink-0" />
                       <span><strong>Early Warning:</strong> Systems like this improve retention when paired with targeted advising (Purdue/Georgia State).</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                       <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-orange-500 shrink-0" />
                       <span><strong>Attendance:</strong> The strongest predictor of risk, correlated highly with course failure.</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                       <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-blue-500 shrink-0" />
                       <span><strong>Ethics:</strong> Transparent, explainable models are critical to prevent bias and build trust.</span>
                    </li>
                 </ul>
              </div>
            </CardContent>
          </Card>

          <div className="lg:col-span-2">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-border bg-white h-[600px] relative group">
              <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-400 z-0">
                Loading Dashboard...
              </div>
              <iframe 
                src="https://madhurinagadurga.github.io/student-retention/" 
                title="Student Risk Dashboard"
                className="w-full h-full border-0 relative z-10"
                loading="lazy"
              />
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Interact with the dashboard above to filter by department and risk level.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const EthicsSection = () => {
  return (
    <section id="ethics" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading">Ethics, Lessons & Impact</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building responsibly with a focus on fairness and privacy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white dark:bg-slate-950">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Shield className="mr-2 h-5 w-5 text-primary" />
                Ethics & Fairness
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-muted-foreground">
              <p>• <strong>Transparent Scoring:</strong> No black-box models; every risk score is explainable.</p>
              <p>• <strong>Privacy First:</strong> Synthetic data ensures FERPA compliance during development.</p>
              <p>• <strong>Human Oversight:</strong> AI assists advisors, it does not replace human judgment.</p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-slate-950">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Layout className="mr-2 h-5 w-5 text-accent" />
                Lessons Learned
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-muted-foreground">
              <p>• <strong>Design Consistency:</strong> Collaboration improved the UI/UX significantly.</p>
              <p>• <strong>Data Quality:</strong> Synthetic data creation required deep research into real patterns.</p>
              <p>• <strong>Balance:</strong> Learned to balance ethical design with analytical rigor.</p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-slate-950">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Activity className="mr-2 h-5 w-5 text-green-500" />
                Impact & Future
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-muted-foreground">
              <p>• <strong>Faster Response:</strong> Advisors can identify issues weeks earlier.</p>
              <p>• <strong>Proactive Support:</strong> Shift from "waiting for failure" to "preventing it".</p>
              <p>• <strong>Next Steps:</strong> Add engagement metrics and automated email alerts.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2">Nexus Strategies</h3>
            <p className="text-sm text-slate-400">Empowering student success through data.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container px-4 md:px-6 flex items-center justify-between">
        <div className="font-heading font-bold text-xl tracking-tight flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('home')}>
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
            <BarChart2 className="h-5 w-5" />
          </div>
          <span>Nexus<span className="text-primary">Strategies</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Home', 'Problem', 'Architecture', 'Dashboard', 'Ethics'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </button>
          ))}
        </div>

        <Button size="sm" className="rounded-full" onClick={() => scrollTo('dashboard')}>
          View Demo
        </Button>
      </div>
    </nav>
  );
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <ArchitectureSection />
      <DashboardSection />
      <EthicsSection />
      <Footer />
    </div>
  );
}
