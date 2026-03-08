import React from 'react';
import { COMPANY_INFO } from '../types';
import { Icons } from '../components/Icons';
import { ExpandableText } from '../components/ExpandableText';

export const About: React.FC = () => {
  return (
    <div className="pt-20 bg-white dark:bg-neutral-950 transition-colors duration-300">
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display font-bold text-4xl md:text-5xl text-primary dark:text-white mb-6">
                À Propos de <br/>
                <span className="text-accent">{COMPANY_INFO.name}</span>
              </h1>
              <ExpandableText
                text={`Électricien professionnel passionné, ${COMPANY_INFO.name} met son savoir-faire au service des particuliers et professionnels. Installé dans la région de ${COMPANY_INFO.zone}, nous intervenons pour tous vos besoins en électricité, installation et mise aux normes.`}
                className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
              />
              <ExpandableText
                text="Notre philosophie : un travail de qualité, des tarifs transparents et une réactivité exemplaire. Que ce soit pour un dépannage ou un projet d'installation complète, nous vous accompagnons avec le même niveau d'exigence."
                className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-accent/10 p-3 rounded-lg mr-4">
                    <Icons.Shield className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary dark:text-white mb-1">Normes NFC 15-100</h3>
                    <p className="text-sm text-gray-500">Travaux conformes et certifiés.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-accent/10 p-3 rounded-lg mr-4">
                    <Icons.Check className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary dark:text-white mb-1">Devis Gratuit</h3>
                    <p className="text-sm text-gray-500">Estimation précise et sans surprise.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-accent/10 p-3 rounded-lg mr-4">
                    <Icons.Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary dark:text-white mb-1">Réactivité</h3>
                    <p className="text-sm text-gray-500">Intervention rapide en cas de panne.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-accent/10 p-3 rounded-lg mr-4">
                    <Icons.HardHat className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary dark:text-white mb-1">Expertise</h3>
                    <p className="text-sm text-gray-500">Électricien qualifié et expérimenté.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-neutral-800">
                <img
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80"
                  alt="Électricien au travail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-xl border border-gray-100 dark:border-neutral-700 max-w-xs hidden md:block">
                <p className="font-display font-bold text-xl text-primary dark:text-white mb-2">"La qualité est notre priorité."</p>
                <p className="text-sm text-gray-500">{COMPANY_INFO.name}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
