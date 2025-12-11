export default function Landing() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 overflow-hidden">
      {/* Animated liquid grid background */}
      <div className="absolute inset-0 liquid-grid opacity-30"></div>
      
      <div className="text-center relative z-10">
        <h1 className="text-7xl font-bold text-white mb-4 animate-float animate-color-shift drop-shadow-2xl">
          Hello World
        </h1>
        <p className="text-xl text-white/80 tracking-wide">
          Welcome to your landing page
        </p>
      </div>
    </div>
  );
}






