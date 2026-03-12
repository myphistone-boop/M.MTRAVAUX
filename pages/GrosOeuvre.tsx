import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../components/Icons';
import { QuoteWizard } from '../components/QuoteWizard';
import { MobileHorizontalScroll } from '../components/MobileHorizontalScroll';

export const GrosOeuvre: React.FC = () => {
  return (
    <div className="pt-20 bg-white dark:bg-neutral-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:h-[60vh] flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 sm:opacity-40">
           <img
            src="https://storage.googleapis.com/novelec_assets/M%20MTRAVAUX/Gros%20oeuvre.webp"
            alt="Installation électrique gros oeuvre"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent sm:via-primary/60 z-10"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-float" style={{ animationDuration: '10s' }}>
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-accent/20 border border-accent/30 text-accent-light text-[10px] sm:text-sm font-bold uppercase tracking-wider mb-4 sm:mb-6 backdrop-blur-sm">
              <Icons.HardHat className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2" />
              Rénovation & Installation
            </div>
            <h1 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl text-white mb-4 sm:mb-6 leading-tight">
              Installation Électrique <br/>
              <span className="text-accent">& Gros Œuvre</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed max-w-2xl">
              De la conception à la réalisation. Rénovation complète, installation neuve, mise aux normes et domotique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/devis"
                className="px-6 py-3.5 sm:px-8 sm:py-4 bg-accent text-primary font-bold rounded-full hover:bg-white transition-all shadow-xl text-center text-sm sm:text-base"
              >
                Demander un devis gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="py-12 md:py-16 bg-white dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary dark:text-white font-display font-bold text-3xl md:text-4xl mb-6">Nos prestations gros œuvre</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Pour vos projets de construction ou de rénovation électrique, nous assurons la création et la modification de toute votre installation.
            </p>
          </div>

          <MobileHorizontalScroll className="lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:pb-0">
            {[
              {
                icon: Icons.Electric,
                title: "Rénovation Électrique Complète",
                desc: "Mise aux normes NFC 15-100, remplacement du tableau, recâblage complet de l'habitation."
              },
              {
                icon: Icons.Blueprint,
                title: "Installation Neuve",
                desc: "Création complète de l'installation électrique pour construction neuve. Raccordement au réseau Enedis."
              },
              {
                icon: Icons.Shield,
                title: "Mise aux Normes",
                desc: "Diagnostic de conformité, mise à la terre, installation de différentiels et disjoncteurs aux normes actuelles."
              },
              {
                icon: Icons.Settings,
                title: "Domotique",
                desc: "Installation de volets électriques, éclairage intelligent, chauffage connecté et systèmes de gestion centralisée."
              },
              {
                icon: Icons.HVAC,
                title: "VMC & Ventilation",
                desc: "Installation de VMC simple ou double flux. Renouvellement de l'air et amélioration de la qualité de vie."
              },
              {
                icon: Icons.Check,
                title: "Vidéosurveillance & Alarmes",
                desc: "Installation de caméras de surveillance, systèmes d'alarme, détecteurs de fumée et contrôle d'accès."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 hover:border-accent/30 dark:hover:border-accent/30 hover:shadow-lg transition-all group h-full">
                <div className="w-12 h-12 bg-white dark:bg-neutral-700 rounded-xl flex items-center justify-center text-primary dark:text-accent mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                  <item.icon size={24} />
                </div>
                <h3 className="font-display font-bold text-xl text-primary dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </MobileHorizontalScroll>
        </div>
      </section>

      {/* Processus */}
      <section className="py-12 md:py-16 bg-primary dark:bg-neutral-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0,0 L100,100 M20,0 L100,80 M40,0 L100,60" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
                Votre projet, étape par étape.
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Nous vous accompagnons dans la réalisation de vos travaux électriques d'envergure avec rigueur et professionnalisme.
              </p>

              <div className="space-y-8">
                {[
                  { step: "01", title: "Diagnostic & Devis", text: "Visite technique, étude de l'installation existante et devis détaillé gratuit." },
                  { step: "02", title: "Planification", text: "Choix des matériaux et équipements, fixation d'une date d'intervention." },
                  { step: "03", title: "Réalisation", text: "Travaux effectués dans les règles de l'art, conformes à la norme NFC 15-100." },
                  { step: "04", title: "Réception & Contrôle", text: "Vérification du bon fonctionnement, tests de sécurité et remise du Consuel si nécessaire." }
                ].map((s, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="font-display font-bold text-3xl text-accent/50">{s.step}</div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">{s.title}</h4>
                      <p className="text-gray-400 text-sm">{s.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/2">
               <div className="grid grid-cols-1 gap-6">
                 <div className="relative rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
                   <img
                     src="https://storage.googleapis.com/novelec_assets/M%20MTRAVAUX/Groeuvre%202.webp"
                     alt="Installation tableau électrique"
                     className="w-full h-64 object-cover"
                   />
                 </div>
                 <div className="relative rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
                   <img
                     src="https://storage.googleapis.com/novelec_assets/M%20MTRAVAUX/expertise.webp"
                     alt="Câblage électrique professionnel"
                     className="w-full h-64 object-cover"
                   />
                   <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <div className="flex items-center text-white">
                        <Icons.Shield className="w-5 h-5 text-accent mr-2" />
                        <span className="font-bold">Conforme NFC 15-100</span>
                      </div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 text-center mb-12">
          <h2 className="font-display font-bold text-3xl text-primary dark:text-white mb-6">Un projet électrique ?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Confiez vos travaux d'électricité à un professionnel qualifié pour un résultat conforme, sûr et durable.
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-4">
          <QuoteWizard />
        </div>
      </section>
    </div>
  );
};
