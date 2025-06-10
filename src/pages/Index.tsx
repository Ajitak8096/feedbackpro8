
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MessageSquare, BarChart3, Users, Shield, Zap, Globe, Star, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { UserButton } from "@/components/UserButton";

const Index = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "User-Friendly Interface",
      description: "Intuitive forms that encourage participation and make feedback submission effortless.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Comprehensive insights and visual analytics to track feedback trends and patterns.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
    },
    {
      icon: Users,
      title: "Multi-Channel Access",
      description: "Collect feedback across multiple platforms and touchpoints seamlessly.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop"
    },
    {
      icon: Shield,
      title: "Secure & Encrypted",
      description: "Enterprise-grade security with data encryption and regular security audits.",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop"
    },
    {
      icon: Zap,
      title: "Automated Notifications",
      description: "Stay updated with instant alerts and automated notification systems.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      icon: Globe,
      title: "Integration Ready",
      description: "Connect with external platforms and export data with flexible APIs.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      content: "FeedbackPro transformed how we collect and analyze user feedback. The insights are invaluable!",
      avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=60&h=60&fit=crop&crop=faces"
    },
    {
      name: "Mike Chen",
      role: "CEO",
      company: "StartupXYZ",
      content: "The real-time analytics helped us make data-driven decisions that boosted our user satisfaction by 40%.",
      avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=60&h=60&fit=crop&crop=faces"
    }
  ];

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <MessageSquare className="h-8 w-8 text-primary transition-transform hover:scale-110" />
            </div>
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
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse [animation-delay:2s]"></div>
        </div>
        
        <div className="container mx-auto text-center max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge variant="secondary" className="mb-6 text-sm px-4 py-2 animate-scale-in bg-primary/10 text-primary border-primary/20">
                <Star className="h-3 w-3 mr-1" />
                Trusted by 10,000+ Organizations
              </Badge>
              <h1 className="text-5xl font-bold text-foreground mb-6 leading-tight animate-fade-in [animation-delay:200ms]">
                Transform Your Feedback into
                <span className="text-primary block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Actionable Insights
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in [animation-delay:400ms]">
                Our comprehensive feedback collection system features customizable forms, 
                real-time analytics, and enterprise-grade security. Turn customer voices 
                into business growth with powerful tools designed for modern organizations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:600ms]">
                <Link to="/feedback">
                  <Button size="lg" className="text-lg px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg group">
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
            
            <div className="animate-fade-in [animation-delay:800ms]">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl blur-xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
                  alt="Professional workspace with laptop and feedback dashboard"
                  className="relative rounded-3xl shadow-2xl w-full h-auto transition-transform hover:scale-105 duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Everything You Need for Effective Feedback Management
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools that scale with your organization and deliver real results
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-border hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-fade-in group overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="p-3 bg-primary/10 backdrop-blur-sm rounded-lg border border-primary/20">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
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

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Loved by Teams Worldwide
            </h2>
            <p className="text-lg text-muted-foreground">
              See what our customers have to say about their experience
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">{`"${testimonial.content}"`}</p>
                  <div className="flex items-center space-x-3">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role} at {testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/5 to-primary/10">
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
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='white' stroke-width='0.5' opacity='0.1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")`
          }}></div>
        </div>
        <div className="container mx-auto text-center max-w-3xl relative z-10">
          <Heart className="h-16 w-16 mx-auto mb-6 animate-pulse" />
          <h2 className="text-4xl font-bold mb-4 animate-fade-in">
            Ready to Start Collecting Better Feedback?
          </h2>
          <p className="text-lg mb-8 opacity-90 animate-fade-in [animation-delay:200ms]">
            Join thousands of organizations that trust our platform for their feedback management needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:400ms]">
            <Link to="/signup">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/feedback">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300 hover:scale-105">
                Try Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border bg-muted/30">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <MessageSquare className="h-6 w-6 text-primary transition-transform hover:scale-110" />
              </div>
              <span className="text-xl font-bold text-foreground">FeedbackPro</span>
            </div>
            <p className="text-muted-foreground text-center">
              Enterprise feedback collection system with advanced analytics and security.
            </p>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                Made with ❤️
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
