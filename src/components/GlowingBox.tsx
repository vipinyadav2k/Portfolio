export default function GlassBox({ children }: { children: React.ReactNode }) {
    return (
      <div className="relative rounded-[24px] p-[7px] bg-white/5">
        {/* Meteor shine on top border */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-60 blur-sm animate-pulse z-20" />
  
        {/* Frosted glass content area */}
        <div className="relative rounded-[20px] p-6 border-[7px] border-white/15 bg-white/10 backdrop-blur-md shadow-lg z-10">
          {children}
        </div>
      </div>
    );
  }
  