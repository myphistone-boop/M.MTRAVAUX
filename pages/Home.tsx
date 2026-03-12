
import React from 'react';
import { HeroBlueprint } from '../components/HeroBlueprint';
import { ServiceCard } from '../components/ServiceCard';
import { QuoteWizard } from '../components/QuoteWizard';
import { InteractiveAreaMap } from '../components/InteractiveAreaMap';
import { COMPANY_INFO } from '../types';
import { Icons } from '../components/Icons';
import { MobileHorizontalScroll } from '../components/MobileHorizontalScroll';
import { ExpandableText } from '../components/ExpandableText';

export const Home: React.FC = () => {
  const services = [
    {
      id: 'depannage',
      title: 'Dépannage Électrique',
      description: 'Panne de courant, court-circuit, disjoncteur qui saute. Intervention rapide et efficace.',
      icon: 'Wrench',
      features: ['Recherche de panne', 'Remise en service', 'Réparation immédiate'],
      link: '/interventions'
    },
    {
      id: 'installation',
      title: 'Installation Électrique',
      description: 'Pose de prises, interrupteurs, tableau électrique, éclairage intérieur et extérieur.',
      icon: 'Electric',
      features: ['Tableau électrique', 'Prises & Interrupteurs', 'Éclairage'],
      link: '/gros-oeuvre'
    },
    {
      id: 'renovation',
      title: 'Rénovation Électrique',
      description: 'Mise aux normes NFC 15-100, rénovation partielle ou totale de votre installation.',
      icon: 'Settings',
      features: ['Mise aux normes', 'Remplacement câblage', 'Diagnostic'],
      link: '/gros-oeuvre'
    },
    {
      id: 'domotique',
      title: 'Domotique & Sécurité',
      description: 'Installation de systèmes connectés, volets électriques, alarmes et vidéosurveillance.',
      icon: 'Shield',
      features: ['Volets électriques', 'Alarmes', 'Caméras'],
      link: '/gros-oeuvre'
    }
  ];

  return (
    <div className="bg-white dark:bg-neutral-950 transition-colors duration-300">
      <HeroBlueprint />

      {/* Services Section */}
      <section className="py-8 md:py-12 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-accent text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase mb-2 md:mb-4">Nos Expertises</h2>
          <h3 className="font-display font-bold text-2xl md:text-4xl text-primary dark:text-white mb-6 md:mb-10">
            Solutions Électricité & Dépannage
          </h3>

          <MobileHorizontalScroll className="lg:grid lg:grid-cols-4 lg:gap-8 lg:overflow-visible lg:pb-0">
            {services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </MobileHorizontalScroll>
        </div>
      </section>

      {/* About Section */}
      <section className="py-8 md:py-12 bg-white dark:bg-neutral-900 relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
             <div className="relative group order-first lg:order-none">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-neutral-800">
                  <img
                    src="https://storage.googleapis.com/novelec_assets/M%20MTRAVAUX/PLan%20elec.webp"
                    alt="Électricien professionnel"
                    className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6 md:p-8">
                     <div className="text-white">
                        <p className="font-display font-bold text-lg md:text-xl">{COMPANY_INFO.name}</p>
                        <p className="text-accent text-xs md:text-sm font-medium">Électricien Professionnel</p>
                     </div>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 bg-accent text-primary p-4 md:p-6 rounded-xl shadow-lg">
                  <p className="font-bold text-2xl md:text-3xl font-display flex items-center gap-1"><Icons.Star className="w-6 h-6 fill-primary" />{COMPANY_INFO.rating}</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider">{COMPANY_INFO.reviewCount} avis</p>
                </div>
             </div>

             <div className="order-last lg:order-none">
                <h2 className="font-display font-bold text-2xl md:text-4xl text-primary dark:text-white mb-4 md:mb-6 leading-tight">
                  L'expertise électrique <br/>
                  <span className="text-accent">au service de votre confort.</span>
                </h2>
                <ExpandableText
                  text={`${COMPANY_INFO.name} intervient pour tous vos besoins en électricité. Du dépannage d'urgence à la rénovation complète de votre installation électrique, nous garantissons un travail soigné, aux normes et durable.`}
                  className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-6"
                />
                <div className="grid grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-8">
                  <div className="flex items-start">
                    <Icons.Shield className="w-5 h-5 md:w-6 md:h-6 text-accent mr-2 md:mr-3 mt-1" />
                    <div>
                      <h4 className="font-bold text-primary dark:text-white text-sm md:text-base">Normes NFC 15-100</h4>
                      <p className="text-[10px] md:text-sm text-gray-500">Travaux conformes.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Icons.Check className="w-5 h-5 md:w-6 md:h-6 text-accent mr-2 md:mr-3 mt-1" />
                    <div>
                      <h4 className="font-bold text-primary dark:text-white text-sm md:text-base">Devis Gratuit</h4>
                      <p className="text-[10px] md:text-sm text-gray-500">Transparence totale.</p>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-8 md:py-12 bg-white dark:bg-neutral-900 transition-colors duration-300" id="devis">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <h2 className="font-display font-bold text-2xl md:text-4xl text-primary dark:text-white mb-4 md:mb-6 leading-tight">
                Besoin d'un électricien ? <br/>
                <span className="text-accent">Contactez-nous</span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 md:mb-8">
                Réponse rapide pour vos besoins urgents et devis sous 48h pour vos projets.
              </p>
              <div className="space-y-4 md:space-y-6 bg-neutral-50 dark:bg-neutral-800 p-6 md:p-8 rounded-2xl border dark:border-neutral-700">
                <a href={`tel:${COMPANY_INFO.phoneClean}`} className="flex items-center text-primary dark:text-white hover:text-accent transition-colors">
                    <Icons.Phone className="w-4 h-4 md:w-5 md:h-5 mr-3 md:mr-4 text-accent" />
                    <span className="font-bold text-lg md:text-xl">{COMPANY_INFO.phone}</span>
                </a>
                <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center text-primary dark:text-white hover:text-accent transition-colors">
                    <Icons.Mail className="w-4 h-4 md:w-5 md:h-5 mr-3 md:mr-4 text-accent" />
                    <span className="font-bold text-sm md:text-base break-all">{COMPANY_INFO.email}</span>
                </a>
              </div>
            </div>
            <QuoteWizard />
          </div>
        </div>
      </section>

      {/* Compact Map Section */}
      <section className="py-4 md:py-8 bg-neutral-50 dark:bg-neutral-950 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block mb-4">
             <h2 className="font-display font-bold text-lg md:text-xl text-primary dark:text-white flex items-center justify-center gap-2">
                <Icons.Location className="w-4 h-4 text-accent" />
                Zone d'Intervention
             </h2>
             <div className="w-12 h-1 bg-accent mx-auto mt-1 rounded-full"></div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl border border-gray-200 dark:border-neutral-800">
            <InteractiveAreaMap />
          </div>
          <p className="mt-4 text-[10px] md:text-xs text-gray-500 uppercase tracking-widest font-bold">Interventions : {COMPANY_INFO.zone}</p>
        </div>
      </section>
    </div>
  );
};
