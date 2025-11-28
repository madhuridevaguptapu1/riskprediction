import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BarChart2, Shield, Users, Activity, Layers, Database, Layout, Lock } from "lucide-react";

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
          Final Project Presentation
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
          <Button variant="outline" size="lg" className="rounded-full px-8 text-lg h-14 border-2 hover:bg-secondary/50" onClick={() => document.getElementById('problem').scrollIntoView({ behavior: 'smooth' })}>
            Explore Project <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="glass-panel rounded-2xl p-8 max-w-4xl mx-auto text-left">
          <h3 className="text-lg font-semibold mb-2 text-primary">Executive Summary</h3>
          <p className="text-muted-foreground">
            HSU faced a critical challenge: advisors were reacting too late to student struggles due to disconnected data. 
            Our solution integrates academic, financial, and engagement metrics into a unified risk scoring model. 
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
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2 text-destructive">•</span>
                  Lack of early detection mechanisms for at-risk students.
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-destructive">•</span>
                  Disconnected data silos (Academic, Financial, Engagement).
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-destructive">•</span>
                  Advisors forced into reactive rather than proactive roles.
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
                <div className="p-3 bg-secondary rounded-lg">
                  <div className="font-semibold">Advisors</div>
                  <div className="text-sm text-muted-foreground">Primary users needing actionable insights.</div>
                </div>
                <div className="p-3 bg-secondary rounded-lg">
                  <div className="font-semibold">Students</div>
                  <div className="text-sm text-muted-foreground">Beneficiaries of timely support.</div>
                </div>
                <div className="p-3 bg-secondary rounded-lg">
                  <div className="font-semibold">Success Office</div>
                  <div className="text-sm text-muted-foreground">Strategic oversight & resource allocation.</div>
                </div>
                <div className="p-3 bg-secondary rounded-lg">
                  <div className="font-semibold">Institutional Research</div>
                  <div className="text-sm text-muted-foreground">Data validation & model governance.</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-secondary/30 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Database className="mr-3 h-6 w-6 text-primary" />
            Research Insights
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-background p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold text-lg mb-2 text-primary">Data-Informed Advising</h4>
              <p className="text-muted-foreground">Shifting from intuition-based to evidence-based advising significantly improves retention outcomes.</p>
            </div>
            <div className="bg-background p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold text-lg mb-2 text-primary">Predictive Power</h4>
              <p className="text-muted-foreground">Combining attendance and financial data with GPA creates a 40% more accurate risk profile.</p>
            </div>
            <div className="bg-background p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold text-lg mb-2 text-primary">Ethical Modeling</h4>
              <p className="text-muted-foreground">Transparency in risk scoring is crucial to prevent bias and build trust with advisors.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SolutionSection = () => {
  return (
    <section id="solution" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading">Solution Architecture</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A scalable, explainable, and advisor-centric system design.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="hover-lift bg-gradient-to-br from-white to-indigo-50 dark:from-slate-800 dark:to-slate-900 border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary">Risk Scoring Model</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Converts complex multi-variate data into a single, interpretable risk level (Low, Medium, High) for instant triage.</p>
            </CardContent>
          </Card>
          <Card className="hover-lift bg-gradient-to-br from-white to-cyan-50 dark:from-slate-800 dark:to-slate-900 border-accent/20">
            <CardHeader>
              <CardTitle className="text-accent">Advisor Interface</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Clean, intuitive dashboard allowing advisors to view high-risk students with full context at a glance.</p>
            </CardContent>
          </Card>
          <Card className="hover-lift bg-gradient-to-br from-white to-purple-50 dark:from-slate-800 dark:to-slate-900 border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-purple-600">Filters & Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Dynamic analysis tools to filter by department, risk factors, and view historical trends.</p>
            </CardContent>
          </Card>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-border hidden md:block" />
          
          <div className="space-y-8 relative">
            {[
              { title: "Business Layer", desc: "Supports advisor workflows & decision making", icon: Users, color: "bg-blue-500" },
              { title: "Application Layer", desc: "Provides dashboard UI & student profiles", icon: Layout, color: "bg-green-500" },
              { title: "Data Layer", desc: "Integrates GPA, Attendance, Finance data", icon: Database, color: "bg-orange-500" },
              { title: "Technology Layer", desc: "Browser-based, lightweight client architecture", icon: Layers, color: "bg-slate-500" },
            ].map((layer, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8`}>
                <div className="flex-1 text-center md:text-right">
                  {index % 2 === 0 && (
                    <div className="md:pr-8">
                      <h3 className="text-xl font-bold">{layer.title}</h3>
                      <p className="text-muted-foreground">{layer.desc}</p>
                    </div>
                  )}
                </div>
                <div className={`w-12 h-12 rounded-full ${layer.color} text-white flex items-center justify-center z-10 shadow-lg shrink-0`}>
                  <layer.icon className="h-6 w-6" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  {index % 2 !== 0 && (
                    <div className="md:pl-8">
                      <h3 className="text-xl font-bold">{layer.title}</h3>
                      <p className="text-muted-foreground">{layer.desc}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading">Data & Dashboard</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore real-time department insights, student profiles, and trends.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-12">
          <div className="p-6 bg-secondary/30 rounded-xl text-center border border-border">
            <div className="text-3xl font-bold text-primary mb-1">2,200</div>
            <div className="text-sm text-muted-foreground">Student Records</div>
          </div>
          <div className="p-6 bg-secondary/30 rounded-xl text-center border border-border">
            <div className="text-3xl font-bold text-primary mb-1">8</div>
            <div className="text-sm text-muted-foreground">Semesters Data</div>
          </div>
          <div className="p-6 bg-secondary/30 rounded-xl text-center border border-border">
            <div className="text-3xl font-bold text-primary mb-1">10</div>
            <div className="text-sm text-muted-foreground">Departments</div>
          </div>
          <div className="p-6 bg-secondary/30 rounded-xl text-center border border-border">
            <div className="text-3xl font-bold text-primary mb-1">98%</div>
            <div className="text-sm text-muted-foreground">Accuracy Target</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-1 h-full">
            <CardHeader>
              <CardTitle>Key Insights</CardTitle>
              <CardDescription>Based on synthetic dataset analysis</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-destructive shrink-0" />
                <p className="text-sm text-muted-foreground"><span className="font-semibold text-foreground">Attendance &lt; 70%</span> is the single strongest predictor of high risk.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-orange-500 shrink-0" />
                <p className="text-sm text-muted-foreground"><span className="font-semibold text-foreground">Chemistry Dept</span> shows the lowest average GPA, requiring immediate support.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0" />
                <p className="text-sm text-muted-foreground"><span className="font-semibold text-foreground">Physics & Business</span> have the highest concentration of high-risk students.</p>
              </div>
              <div className="pt-4 border-t">
                <div className="flex justify-between text-sm mb-2">
                  <span>Avg GPA</span>
                  <span className="font-bold">2.75</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Avg Attendance</span>
                  <span className="font-bold">73%</span>
                </div>
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
            <h3 className="text-xl font-bold text-white mb-2">Student Risk Prediction Dashboard</h3>
            <p className="text-sm text-slate-400">Empowering student success through data.</p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">GitHub Repo</a>
            <a href="https://madhurinagadurga.github.io/student-retention/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Live Dashboard</a>
            <a href="mailto:contact@example.com" className="hover:text-white transition-colors">Contact Team</a>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-500">
          <p>Last Updated: October 2023 • Built with React & Tailwind CSS</p>
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
          <span>Risk<span className="text-primary">Dash</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Home', 'Problem', 'Solution', 'Dashboard', 'Ethics'].map((item) => (
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
      <SolutionSection />
      <DashboardSection />
      <EthicsSection />
      <Footer />
    </div>
  );
}
