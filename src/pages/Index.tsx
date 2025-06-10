
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MessageSquare, BarChart3, Users, Shield, Zap, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { UserButton } from "@/components/UserButton";

const Index = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "User-Friendly Interface",
      description: "Intuitive forms that encourage participation and make feedback submission effortless."
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Comprehensive insights and visual analytics to track feedback trends and patterns."
    },
    {
      icon: Users,
      title: "Multi-Channel Access",
      description: "Collect feedback across multiple platforms and touchpoints seamlessly."
    },
    {
      icon: Shield,
      title: "Secure & Encrypted",
      description: "Enterprise-grade security with data encryption and regular security audits."
    },
    {
      icon: Zap,
      title: "Automated Notifications",
      description: "Stay updated with instant alerts and automated notification systems."
    },
    {
      icon: Globe,
      title: "Integration Ready",
      description: "Connect with external platforms and export data with flexible APIs."
    }
  ];

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MessageSquare className="h-8 w-8 text-primary transition-transform hover:scale-110" />
            <span className="text-2xl font-bold text-foreground">FeedbackPro</span>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link to="/feedback">
              <Button variant="ghost" className="transition-all duration-300 hover:scale-105">
                Submit Feedback
              </Button>
            </Link>
            <Link to="/admin">
              <Button className="transition-all duration-300 hover:scale-105">
                Admin Dashboard
              </Button>
            </Link>
            <UserButton />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl animate-fade-in">
          <Badge variant="secondary" className="mb-6 text-sm px-4 py-2 animate-scale-in">
            Trusted by 10,000+ Organizations
          </Badge>
          <h1 className="text-5xl font-bold text-foreground mb-6 leading-tight animate-fade-in [animation-delay:200ms]">
            Transform Your Feedback into
            <span className="text-primary block">Actionable Insights</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in [animation-delay:400ms]">
            Our comprehensive feedback collection system features customizable forms, 
            real-time analytics, and enterprise-grade security. Turn customer voices 
            into business growth with powerful tools designed for modern organizations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:600ms]">
            <Link to="/feedback">
              <Button size="lg" className="text-lg px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Start Collecting Feedback
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/admin">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                View Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Everything You Need for Effective Feedback Management
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive tools that scale with your organization
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mb-4 transition-transform hover:scale-110" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2 animate-fade-in [animation-delay:200ms]">
              <div className="text-4xl font-bold text-primary transition-all duration-300 hover:scale-110">10K+</div>
              <div className="text-muted-foreground">Organizations</div>
            </div>
            <div className="space-y-2 animate-fade-in [animation-delay:400ms]">
              <div className="text-4xl font-bold text-primary transition-all duration-300 hover:scale-110">2M+</div>
              <div className="text-muted-foreground">Feedback Collected</div>
            </div>
            <div className="space-y-2 animate-fade-in [animation-delay:600ms]">
              <div className="text-4xl font-bold text-primary transition-all duration-300 hover:scale-110">99.9%</div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
            <div className="space-y-2 animate-fade-in [animation-delay:800ms]">
              <div className="text-4xl font-bold text-primary transition-all duration-300 hover:scale-110">24/7</div>
              <div className="text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in">
            Ready to Start Collecting Better Feedback?
          </h2>
          <p className="text-lg mb-8 opacity-90 animate-fade-in [animation-delay:200ms]">
            Join thousands of organizations that trust our platform for their feedback management needs.
          </p>
          <Link to="/feedback">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in [animation-delay:400ms]">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <MessageSquare className="h-6 w-6 text-primary transition-transform hover:scale-110" />
            <span className="text-xl font-bold text-foreground">FeedbackPro</span>
          </div>
          <p className="text-muted-foreground">
            Enterprise feedback collection system with advanced analytics and security.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
