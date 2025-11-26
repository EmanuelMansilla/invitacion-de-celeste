import Countdown from "@/components/Countdown";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import backgroundSparkles from "@/assets/background-sparkles.jpg";
import { Calendar, Clock, MessageCircle, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, hsl(38 40% 90%), hsl(40 50% 96%))`,
      }}
    >
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${backgroundSparkles})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Decorative sparkles */}
      <div className="absolute top-6 left-4 md:top-10 md:left-10 text-accent animate-sparkle">
        <Sparkles size={20} className="md:w-6 md:h-6" />
      </div>
      <div className="absolute top-16 right-8 md:top-20 md:right-20 text-accent animate-sparkle" style={{ animationDelay: '0.5s' }}>
        <Sparkles size={16} className="md:w-5 md:h-5" />
      </div>
      <div className="absolute bottom-20 left-4 md:left-20 text-accent animate-sparkle" style={{ animationDelay: '1s' }}>
        <Sparkles size={22} className="md:w-7 md:h-7" />
      </div>
      <div className="absolute bottom-32 right-6 md:right-16 text-accent animate-sparkle" style={{ animationDelay: '1.5s' }}>
        <Sparkles size={18} className="md:w-[22px] md:h-[22px]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 container max-w-4xl mx-auto px-4 py-8 md:py-12 lg:py-20">
        {/* Header */}
        <header className="text-center mb-8 md:mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-cursive text-primary mb-3 md:mb-4 animate-float" style={{
            textShadow: '0 2px 20px hsl(35 45% 55% / 0.3)'
          }}>
            Mis XV años
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-foreground/80 max-w-2xl mx-auto px-4">
            Estás invitad@ a celebrar conmigo esta noche tan especial.
          </p>
        </header>

        {/* Event details card */}
        <Card className="bg-card/80 backdrop-blur-md p-6 md:p-8 lg:p-12 mb-6 md:mb-8 shadow-soft border-secondary/30 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="bg-secondary/50 p-3 md:p-4 rounded-full flex-shrink-0">
                <Calendar className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div>
                <p className="text-xs md:text-sm text-muted-foreground">Fecha</p>
                <p className="text-xl md:text-2xl font-semibold text-primary">24 de enero</p>
              </div>
            </div>
            <div className="flex items-center gap-3 md:gap-4">
              <div className="bg-secondary/50 p-3 md:p-4 rounded-full flex-shrink-0">
                <Clock className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div>
                <p className="text-xs md:text-sm text-muted-foreground">Hora</p>
                <p className="text-xl md:text-2xl font-semibold text-primary">9:00 p.m.</p>
              </div>
            </div>
          </div>
          
          <p className="text-center text-base md:text-lg text-foreground/80 italic px-2">
            Acompáñame a celebrar un nuevo capítulo de mi vida.
          </p>
        </Card>

        {/* Quote */}
        <blockquote className="text-center mb-8 md:mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground italic font-cursive px-4">
            "Los momentos más lindos se comparten con las personas más especiales."
          </p>
        </blockquote>

        {/* Dresscode section */}
        <Card className="bg-card/80 backdrop-blur-md p-6 md:p-8 mb-4 md:mb-6 shadow-soft border-secondary/30 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-cursive text-primary text-center mb-3 md:mb-4">
            Dresscode
          </h2>
          <p className="text-center text-base md:text-lg text-foreground/80">
            Elegante sport
          </p>
        </Card>

        {/* Forbidden colors */}
        <Card className="bg-muted/50 backdrop-blur-md p-5 md:p-6 mb-8 md:mb-12 border-2 border-primary/20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-lg md:text-xl font-semibold text-primary text-center mb-2">
            Colores prohibidos
          </h3>
          <p className="text-center text-sm md:text-base text-foreground/80 px-2">
            Por favor, evitar usar: <span className="font-semibold">dorado, marrón y violeta</span>.
          </p>
        </Card>

        {/* Confirmation button */}
        <div className="text-center mb-8 md:mb-12 animate-fade-in" style={{ animationDelay: '1s' }}>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-8 py-5 md:py-6 text-base md:text-lg rounded-full shadow-glow transition-all hover:scale-105 w-full sm:w-auto"
            asChild
          >
            <a href="https://wa.me/5491131646093?text=Hola!%20Confirmo%20mi%20asistencia" target="_blank" class="btn">
             Confirmar asistencia
          </a>
          </Button>
        </div>

        {/* Countdown */}
        <div className="mb-8 md:mb-12 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <Countdown />
        </div>
      </div>
    </div>
  );
};

export default Index;
