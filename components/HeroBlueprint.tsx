import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from './Icons';
import { COMPANY_INFO } from '../types';

export const HeroBlueprint: React.FC = () => {
  return (
    <section className="relative min-h-[60vh] md:min-h-[75vh] flex items-center overflow-hidden bg-white dark:bg-neutral-950 pt-24 md:pt-16 pb-6 md:pb-0 transition-colors duration-300">

      {/* Background Technical Grid (Blueprint effect) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.1]"
           style={{
             backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
             backgroundSize: '40px 40px',
             color: '#0B2A5B'
           }}>
      </div>

      {/* Animated SVG Lines */}
      <svg className="absolute top-0 right-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          d="M0,0 L100,0 L100,100"
          fill="none"
          stroke="#C9A227"
          strokeWidth="0.1"
          className="animate-draw opacity-30"
        />
        <circle cx="80" cy="30" r="15" fill="none" stroke="#0B2A5B" strokeWidth="0.1" className="opacity-10 dark:opacity-30 dark:stroke-white" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">

        {/* Text Content */}
        <div className="space-y-6 md:space-y-8 animate-float" style={{ animationDuration: '8s' }}>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent-dark dark:text-accent text-[10px] md:text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-accent mr-2 animate-pulse"></span>
            Électricien Professionnel
          </div>

          <h1 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl leading-[1.15] md:leading-[1.1] text-primary dark:text-white">
            Électricité Générale & <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-600 relative inline-block">
              Dépannage Expert
              <svg className="absolute w-full h-2 -bottom-1 left-0 text-accent/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q50,10 100,5" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </span>
          </h1>

          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
            Votre électricien de proximité. Installation, rénovation, mise aux normes et dépannage électrique de qualité.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2">
            <Link
              to="/devis"
              className="inline-flex items-center justify-center px-6 py-3.5 md:px-8 md:py-4 bg-primary dark:bg-accent text-white dark:text-primary rounded-full font-bold text-sm md:text-base hover:bg-secondary dark:hover:bg-white transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 group"
            >
              Demander un devis
              <Icons.ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="inline-flex items-center justify-center px-6 py-3.5 md:px-8 md:py-4 bg-white dark:bg-transparent text-primary dark:text-white border border-gray-200 dark:border-gray-700 rounded-full font-bold text-sm md:text-base hover:bg-gray-50 dark:hover:bg-white/5 transition-all"
            >
              <Icons.Phone className="mr-2 w-4 h-4 md:w-5 md:h-5 text-accent" />
              {COMPANY_INFO.phone}
            </a>
          </div>

          <div className="flex items-center gap-4 md:gap-6 pt-4 text-[11px] md:text-sm text-gray-500 dark:text-gray-400 font-medium">
            <div className="flex items-center">
              <Icons.Star className="w-3.5 h-3.5 md:w-4 md:h-4 text-yellow-500 fill-yellow-500 mr-1" />
              <span>{COMPANY_INFO.rating} ({COMPANY_INFO.reviewCount} avis)</span>
            </div>
            <div className="flex items-center">
              <Icons.Location className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent mr-2" />
              {COMPANY_INFO.zone}
            </div>
          </div>
        </div>

        {/* Visual Content (Composition) */}
        <div className="relative hidden lg:block h-[600px]">
          <div className="absolute top-0 right-0 w-5/6 h-5/6 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 z-10 transform translate-x-4">
            <img
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80"
              alt="Électricien professionnel au travail"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-multiply"></div>
          </div>

          <div className="absolute bottom-12 left-0 w-64 glass-panel p-6 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-20 animate-float" style={{ animationDelay: '1s' }}>
            <div className="flex items-center mb-3">
              <div className="p-2 bg-accent/10 rounded-lg mr-3">
                <Icons.Electric className="w-5 h-5 text-accent" />
              </div>
              <span className="font-bold text-primary dark:text-white">Intervention Rapide</span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-300">
              Dépannage efficace et respect des normes pour tous vos travaux électriques.
            </p>
          </div>

          <div className="absolute -bottom-4 -right-4 w-40 h-40 border-r border-b border-accent/30 rounded-br-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};
