import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../components/Icons';
import { QuoteWizard } from '../components/QuoteWizard';
import { MobileHorizontalScroll } from '../components/MobileHorizontalScroll';
import { COMPANY_INFO } from '../types';

export const Interventions: React.FC = () => {
  return (
    <div className="pt-20 bg-white dark:bg-neutral-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative min-h-[55vh] sm:h-[50vh] flex items-center bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img
            src="https://storage.googleapis.com/novelec_assets/M%20MTRAVAUX/Elec%20prise%20elec.webp"
            alt="Intervention électrique rapide"
            className="w-full h-full object-cover"
          />
           <div className="absolute inset-0 bg-neutral-900/60 sm:bg-neutral-900/50"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl text-white mb-4 sm:mb-6 leading-tight">
              Dépannage & <br/>
              <span className="text-accent">Interventions Électriques</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Panne de courant, court-circuit, disjoncteur qui saute.
              Une équipe réactive à votre service sur {COMPANY_INFO.zone}.
            </p>
             <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="inline-flex items-center px-7 py-3.5 sm:px-8 sm:py-4 bg-accent text-primary font-bold rounded-full hover:bg-white hover:text-primary transition-all shadow-xl text-sm sm:text-base"
              >
                <Icons.Phone className="mr-2 w-5 h-5" />
                Appeler le {COMPANY_INFO.phone}
              </a>
        </div>
      </section>

      {/* Services List */}
      <section className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl text-primary dark:text-white mb-4">Nos interventions courantes</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <MobileHorizontalScroll className="lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:pb-0">
            <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-700 hover:border-accent/50 dark:hover:border-accent/50 transition-colors h-full">
              <Icons.Electric className="w-10 h-10 text-accent mb-6" />
              <h3 className="font-bold text-xl text-primary dark:text-white mb-4">Panne de Courant</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Diagnostic et remise en service après coupure de courant. Identification du disjoncteur en cause et réparation du circuit défaillant.
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-700 hover:border-accent/50 dark:hover:border-accent/50 transition-colors h-full">
              <Icons.Wrench className="w-10 h-10 text-accent mb-6" />
              <h3 className="font-bold text-xl text-primary dark:text-white mb-4">Court-Circuit</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Recherche et réparation de courts-circuits sur câblage encastré ou apparent. Remplacement des éléments défectueux.
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-700 hover:border-accent/50 dark:hover:border-accent/50 transition-colors h-full">
              <Icons.Settings className="w-10 h-10 text-accent mb-6" />
              <h3 className="font-bold text-xl text-primary dark:text-white mb-4">Tableau Électrique</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Remplacement de disjoncteurs, différentiels défectueux. Remise en état et mise aux normes du tableau de distribution.
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-700 hover:border-accent/50 dark:hover:border-accent/50 transition-colors h-full">
              <Icons.Renovation className="w-10 h-10 text-accent mb-6" />
              <h3 className="font-bold text-xl text-primary dark:text-white mb-4">Prises & Interrupteurs</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Remplacement de prises défectueuses, interrupteurs cassés, prises qui chauffent. Ajout de nouveaux points électriques.
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-700 hover:border-accent/50 dark:hover:border-accent/50 transition-colors h-full">
              <Icons.Shield className="w-10 h-10 text-accent mb-6" />
              <h3 className="font-bold text-xl text-primary dark:text-white mb-4">Mise en Sécurité</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Installation de différentiels, mise à la terre, remplacement de câblage vétuste. Protection des personnes et des biens.
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-700 hover:border-accent/50 dark:hover:border-accent/50 transition-colors h-full">
              <Icons.Check className="w-10 h-10 text-accent mb-6" />
              <h3 className="font-bold text-xl text-primary dark:text-white mb-4">Éclairage</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Dépannage d'éclairage intérieur et extérieur. Remplacement de luminaires, spots encastrés, appliques murales.
              </p>
            </div>
          </MobileHorizontalScroll>
        </div>
      </section>

       {/* Urgency Banner */}
       <section className="py-10 md:py-12 bg-primary dark:bg-neutral-900 text-white transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl mb-6">Besoin d'une intervention rapide ?</h2>
          <p className="text-lg text-gray-200 mb-8">
            Ne restez pas dans le noir. Contactez-nous pour un dépannage électrique rapide et professionnel.
          </p>
          <a
            href={`tel:${COMPANY_INFO.phoneClean}`}
            className="inline-flex items-center px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-accent hover:text-white transition-all shadow-xl text-lg animate-pulse"
          >
            <Icons.Phone className="mr-3 w-6 h-6" />
            {COMPANY_INFO.phone}
          </a>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 md:py-16 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="font-display font-bold text-3xl text-primary dark:text-white">Demande d'intervention tout type</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Pour les travaux planifiés, interventions rapides ou devis, utilisez ce formulaire.</p>
            </div>
          <QuoteWizard />
        </div>
      </section>
    </div>
  );
};
