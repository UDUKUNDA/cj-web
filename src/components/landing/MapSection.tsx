export function MapSection() {
  return (
    <section className="w-full flex justify-center py-12 px-4">
      <div 
        className="relative overflow-hidden border border-[#1D3D37]/30 shadow-md transition-all duration-300 w-full"
        style={{
          maxWidth: "1200px", 
          height: "695px",
          borderRadius: "40px",
        }}
      >
        {/* Google Maps Iframe */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.158325605333!2d29.6333!3d-1.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMzAnMDAuMCJTIDI5wrszOCcwMC4wIkU!5e0!3m2!1sen!2srw!4v1620000000000!5m2!1sen!2srw"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          className="grayscale-[15%] contrast-[1.1]"
        />
        
        {/* Map Pin Overlay */}
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 min-w-[300px] z-20">
            <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-[#1D3D37] text-lg">Credit Jambo</h3>
                <button className="text-gray-400 hover:text-gray-600 transition-colors">✕</button>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
                NM 233 St, Nyamagumba, Musanze, Rwanda
            </p>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              className="text-blue-600 text-xs font-bold underline hover:text-blue-800 transition-colors"
            >
                Directions
            </a>
            
            {/* Pointer Triangle */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-r border-b border-gray-100"></div>
        </div>
      </div>
    </section>
  );
}