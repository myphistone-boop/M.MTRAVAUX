import React, { useState } from 'react';
import { Icons } from './Icons';
import { ProjectType, QuoteFormData, COMPANY_INFO } from '../types';

export const QuoteWizard: React.FC = () => {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState<'urgent' | 'gros_oeuvre' | null>(null);
  const [subType, setSubType] = useState<string | null>(null);
  const [formData, setFormData] = useState<QuoteFormData>({
    projectType: null,
    location: '',
    surface: '',
    budget: '',
    name: '',
    phone: '',
    email: '',
    details: ''
  });

  const handleNext = () => setStep(step + 1);
  const handleBack = () => {
    if (step === 1) return;
    setStep(step - 1);
  };

  const updateField = (field: keyof QuoteFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const categories = [
    { id: 'urgent', title: 'Intervention Rapide', icon: Icons.Electric, desc: "Dépannage électrique urgent (panne, court-circuit...)" },
    { id: 'gros_oeuvre', title: 'Projet Gros Œuvre', icon: Icons.Hammer, desc: "Rénovation, installation neuve, mise aux normes" },
  ];

  const majorTypes = [
    { type: "Rénovation électrique complète", icon: Icons.Renovation },
    { type: "Installation neuve", icon: Icons.Blueprint },
    { type: "Mise aux normes NFC 15-100", icon: Icons.Shield },
    { type: "Domotique & Volets électriques", icon: Icons.Settings },
    { type: "VMC & Ventilation", icon: Icons.HVAC },
    { type: "Vidéosurveillance & Alarmes", icon: Icons.Shield },
    { type: "Autre projet", icon: Icons.Plus },
  ];

  const urgentTypes = [
    { type: "Panne de courant", icon: Icons.Electric },
    { type: "Court-circuit", icon: Icons.Wrench },
    { type: "Disjoncteur qui saute", icon: Icons.Settings },
    { type: "Prise / interrupteur défectueux", icon: Icons.Renovation },
    { type: "Autre intervention rapide", icon: Icons.Plus },
  ];

  const urgentSpecs: Record<string, { label: string, options: { id: string, label: string, price: string, delay: string }[] }> = {
    "Panne de courant": {
      label: "Quel type de panne ?",
      options: [
        { id: 'partielle', label: "Panne partielle (une pièce / un circuit)", price: "80€ - 130€", delay: "Moins de 2h" },
        { id: 'totale', label: "Panne totale (plus de courant)", price: "100€ - 180€", delay: "Moins de 2h" },
      ]
    },
    "Court-circuit": {
      label: "Où se situe le problème ?",
      options: [
        { id: 'apparent', label: "Prise / interrupteur qui a grillé", price: "90€ - 140€", delay: "Moins de 2h" },
        { id: 'encastre', label: "Câblage encastré / odeur de brûlé", price: "120€ - 200€", delay: "Moins de 3h" },
      ]
    },
    "Disjoncteur qui saute": {
      label: "À quelle fréquence ?",
      options: [
        { id: 'ponctuel', label: "Ponctuel (un appareil en cause)", price: "80€ - 120€", delay: "Moins de 2h" },
        { id: 'frequent', label: "Fréquent (problème d'installation)", price: "120€ - 200€", delay: "Moins de 3h" },
      ]
    },
    "Prise / interrupteur défectueux": {
      label: "Quel est le problème ?",
      options: [
        { id: 'remplacement', label: "Remplacement simple", price: "60€ - 100€", delay: "Moins de 2h" },
        { id: 'chauffe', label: "Prise qui chauffe / étincelles", price: "100€ - 160€", delay: "Moins de 1h" },
      ]
    },
    "Autre intervention rapide": {
      label: "Précisez votre besoin",
      options: [
        { id: 'standard', label: "Intervention standard", price: "80€ - 150€", delay: "Moins de 3h" },
      ]
    }
  };

  const currentSpec = formData.projectType ? urgentSpecs[formData.projectType as string] : null;
  const selectedSpecOption = currentSpec?.options.find(o => o.id === subType);

  const generateMessage = () => {
    return `Bonjour ${COMPANY_INFO.name}, je souhaite un devis pour :
- Catégorie: ${category === 'urgent' ? 'URGENCE' : 'PROJET'}
- Type: ${formData.projectType} ${subType ? `(${selectedSpecOption?.label})` : ''}
- Lieu: ${formData.location}
- Surface: ${formData.surface}
- Budget: ${formData.budget}
- Nom: ${formData.name}
- Détails: ${formData.details}`;
  };

  const mailtoLink = `mailto:${COMPANY_INFO.email}?subject=Demande de devis - ${formData.name}&body=${encodeURIComponent(generateMessage())}`;
  const smsLink = `sms:${COMPANY_INFO.phoneClean}?body=${encodeURIComponent(generateMessage())}`;

  return (
    <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-gray-100 dark:border-neutral-800 overflow-hidden max-w-4xl mx-auto transition-colors duration-300">
      {/* Progress Bar */}
      <div className="bg-gray-50 dark:bg-neutral-950 px-8 py-4 border-b border-gray-100 dark:border-neutral-800 flex justify-between items-center">
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className={`h-2 w-10 rounded-full transition-all ${step >= i ? 'bg-accent' : 'bg-gray-200 dark:bg-gray-700'}`} />
          ))}
        </div>
        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Étape {step} / 5</span>
      </div>

      <div className="p-8 md:p-12 min-h-[400px] flex flex-col">
        {step === 1 && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-display font-bold text-primary dark:text-white mb-2">Quel est votre besoin ?</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8">Sélectionnez le type d'intervention.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => { setCategory(cat.id as any); handleNext(); }}
                  className={`p-6 rounded-xl border-2 text-left transition-all hover:shadow-lg flex items-start ${
                    category === cat.id
                      ? 'border-accent bg-accent/5 dark:bg-accent/10'
                      : 'border-gray-100 dark:border-neutral-800 hover:border-accent/50 dark:hover:border-accent/50'
                  }`}
                >
                  <div className={`p-3 rounded-full mr-4 ${category === cat.id ? 'bg-accent text-white' : 'bg-gray-100 dark:bg-neutral-800 text-gray-500 dark:text-gray-400'}`}>
                    <cat.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary dark:text-white">{cat.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{cat.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && category === 'gros_oeuvre' && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-display font-bold text-primary dark:text-white mb-2">Quel type de projet ?</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8">Sélectionnez la catégorie de travaux.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {majorTypes.map((mt) => (
                <button
                  key={mt.type}
                  onClick={() => { updateField('projectType', mt.type); handleNext(); }}
                  className={`p-4 rounded-xl border-2 text-left transition-all hover:shadow-md flex items-center ${
                    formData.projectType === mt.type
                      ? 'border-accent bg-accent/5 dark:bg-accent/10'
                      : 'border-gray-100 dark:border-neutral-800 hover:border-accent/50 dark:hover:border-accent/50'
                  }`}
                >
                  <div className={`p-2 rounded-lg mr-3 ${formData.projectType === mt.type ? 'bg-accent text-white' : 'bg-gray-100 dark:bg-neutral-800 text-gray-500 dark:text-gray-400'}`}>
                    <mt.icon size={20} />
                  </div>
                  <span className="font-bold text-primary dark:text-white text-sm">{mt.type}</span>
                </button>
              ))}
            </div>
            <div className="mt-8 flex justify-start">
              <button onClick={handleBack} className="px-6 py-3 text-gray-500 dark:text-gray-400 font-medium hover:text-primary dark:hover:text-white">Retour</button>
            </div>
          </div>
        )}

        {step === 3 && category === 'gros_oeuvre' && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-display font-bold text-primary dark:text-white mb-6">Détails du projet</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Ville / Code Postal</label>
                <input
                  type="text"
                  className="w-full p-4 border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-primary dark:text-white rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-colors"
                  placeholder="ex: Saint-Étienne-Vallée-Française, 48330"
                  value={formData.location}
                  onChange={(e) => updateField('location', e.target.value)}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Surface estimée (m²)</label>
                  <input
                    type="text"
                    className="w-full p-4 border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-primary dark:text-white rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-colors"
                    placeholder="ex: 80"
                    value={formData.surface}
                    onChange={(e) => updateField('surface', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Budget envisagé</label>
                  <select
                    className="w-full p-4 border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-primary dark:text-white rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-colors"
                    value={formData.budget}
                    onChange={(e) => updateField('budget', e.target.value)}
                  >
                    <option value="">Sélectionner une fourchette</option>
                    <option value="< 1k">Moins de 1 000€</option>
                    <option value="1k-3k">1 000€ - 3 000€</option>
                    <option value="3k-7k">3 000€ - 7 000€</option>
                    <option value="> 7k">Plus de 7 000€</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end space-x-4">
              <button onClick={handleBack} className="px-6 py-3 text-gray-500 dark:text-gray-400 font-medium hover:text-primary dark:hover:text-white">Retour</button>
              <button
                onClick={handleNext}
                disabled={!formData.location}
                className="px-8 py-3 bg-primary dark:bg-accent text-white dark:text-primary rounded-full font-bold hover:bg-secondary dark:hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Suivant
              </button>
            </div>
          </div>
        )}

        {step === 2 && category === 'urgent' && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-display font-bold text-primary dark:text-white mb-2">Quel est votre besoin ?</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8">Sélectionnez le type de problème.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {urgentTypes.map((ut) => (
                <button
                  key={ut.type}
                  onClick={() => { updateField('projectType', ut.type); handleNext(); }}
                  className={`p-4 rounded-xl border-2 text-left transition-all hover:shadow-md flex items-center ${
                    formData.projectType === ut.type
                      ? 'border-accent bg-accent/5 dark:bg-accent/10'
                      : 'border-gray-100 dark:border-neutral-800 hover:border-accent/50 dark:hover:border-accent/50'
                  }`}
                >
                  <div className={`p-2 rounded-lg mr-3 ${formData.projectType === ut.type ? 'bg-accent text-white' : 'bg-gray-100 dark:bg-neutral-800 text-gray-500 dark:text-gray-400'}`}>
                    <ut.icon size={20} />
                  </div>
                  <span className="font-bold text-primary dark:text-white text-sm">{ut.type}</span>
                </button>
              ))}
            </div>
            <div className="mt-8 flex justify-start">
              <button onClick={handleBack} className="px-6 py-3 text-gray-500 dark:text-gray-400 font-medium hover:text-primary dark:hover:text-white">Retour</button>
            </div>
          </div>
        )}

        {step === 3 && category === 'urgent' && currentSpec && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-display font-bold text-primary dark:text-white mb-2">{currentSpec.label}</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8">Précisez pour obtenir une estimation plus juste.</p>
            <div className="grid grid-cols-1 gap-4">
              {currentSpec.options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => { setSubType(opt.id); handleNext(); }}
                  className={`p-6 rounded-xl border-2 text-left transition-all hover:shadow-md flex items-center justify-between ${
                    subType === opt.id
                      ? 'border-accent bg-accent/5 dark:bg-accent/10'
                      : 'border-gray-100 dark:border-neutral-800 hover:border-accent/50 dark:hover:border-accent/50'
                  }`}
                >
                  <span className="font-bold text-primary dark:text-white">{opt.label}</span>
                  <Icons.ChevronRight className="text-accent" />
                </button>
              ))}
            </div>
            <div className="mt-8 flex justify-start">
              <button onClick={handleBack} className="px-6 py-3 text-gray-500 dark:text-gray-400 font-medium hover:text-primary dark:hover:text-white">Retour</button>
            </div>
          </div>
        )}

        {step === 4 && category === 'urgent' && (
          <div className="animate-fade-in text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icons.Phone className="w-8 h-8 text-accent animate-pulse" />
            </div>
            <h2 className="text-2xl font-display font-bold text-primary dark:text-white mb-4">Intervention Prioritaire</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-lg mx-auto">
              <div className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-xl border border-gray-100 dark:border-neutral-700">
                <p className="text-xs text-gray-500 uppercase font-bold mb-1">Tarif estimé</p>
                <p className="text-xl font-bold text-primary dark:text-white">{selectedSpecOption?.price || "80€ - 150€"}</p>
                <p className="text-[10px] text-gray-400 mt-1">Hors pièces de rechange</p>
              </div>
              <div className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-xl border border-gray-100 dark:border-neutral-700">
                <p className="text-xs text-gray-500 uppercase font-bold mb-1">Délai moyen</p>
                <p className="text-xl font-bold text-primary dark:text-white">{selectedSpecOption?.delay || "Moins de 2h"}</p>
                <p className="text-[10px] text-gray-400 mt-1">Selon disponibilité</p>
              </div>
            </div>

            <div className="bg-accent/5 dark:bg-accent/10 p-6 rounded-2xl border border-accent/20 mb-8 max-w-lg mx-auto">
              <p className="text-primary dark:text-white font-medium mb-4">
                Veuillez nous appeler directement et expliquer votre problème. Nous vous rappellerons dans les meilleurs délais.
              </p>
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="inline-flex items-center justify-center w-full px-8 py-4 bg-accent text-primary rounded-xl font-bold hover:bg-white transition-all shadow-lg hover:shadow-xl text-lg"
              >
                <Icons.Phone className="mr-3 w-6 h-6" />
                Appeler le {COMPANY_INFO.phone}
              </a>
            </div>

            <button onClick={handleBack} className="text-sm text-gray-500 hover:text-primary">Modifier ma demande</button>
          </div>
        )}

        {step === 4 && category === 'gros_oeuvre' && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-display font-bold text-primary dark:text-white mb-6">Vos coordonnées</h2>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nom complet</label>
                <input
                  type="text"
                  className="w-full p-4 border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-primary dark:text-white rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-colors"
                  value={formData.name}
                  onChange={(e) => updateField('name', e.target.value)}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Téléphone</label>
                  <input
                    type="tel"
                    className="w-full p-4 border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-primary dark:text-white rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-colors"
                    value={formData.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-4 border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-primary dark:text-white rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-colors"
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message (facultatif)</label>
                <textarea
                  className="w-full p-4 border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-primary dark:text-white rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none h-32 resize-none transition-colors"
                  placeholder="Précisions supplémentaires..."
                  value={formData.details}
                  onChange={(e) => updateField('details', e.target.value)}
                />
              </div>
            </div>
            <div className="mt-8 flex justify-end space-x-4">
              <button onClick={handleBack} className="px-6 py-3 text-gray-500 dark:text-gray-400 font-medium hover:text-primary dark:hover:text-white">Retour</button>
              <button
                onClick={handleNext}
                disabled={!formData.name || !formData.phone}
                className="px-8 py-3 bg-primary dark:bg-accent text-white dark:text-primary rounded-full font-bold hover:bg-secondary dark:hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Voir le résumé
              </button>
            </div>
          </div>
        )}

        {step === 5 && category === 'gros_oeuvre' && (
          <div className="animate-fade-in text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icons.Check className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-2xl font-display font-bold text-primary dark:text-white mb-2">Tout est prêt !</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md mx-auto">
              Choisissez votre méthode préférée pour nous envoyer votre demande. Nous vous répondrons sous 24h ouvrées.
            </p>

            <div className="bg-gray-50 dark:bg-neutral-950 p-6 rounded-xl text-left mb-8 border border-gray-100 dark:border-neutral-800 max-w-lg mx-auto">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Résumé :</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li><span className="font-medium">Type:</span> {formData.projectType}</li>
                <li><span className="font-medium">Lieu:</span> {formData.location}</li>
                <li><span className="font-medium">Client:</span> {formData.name}</li>
              </ul>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href={mailtoLink}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary dark:bg-neutral-800 text-white dark:text-white rounded-xl font-bold hover:bg-secondary dark:hover:bg-neutral-700 transition-all shadow-lg hover:shadow-xl"
              >
                <Icons.Mail className="mr-2 w-5 h-5" />
                Envoyer par Email
              </a>
              <a
                href={smsLink}
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-primary rounded-xl font-bold hover:bg-white transition-all shadow-lg hover:shadow-xl"
              >
                <Icons.Mobile className="mr-2 w-5 h-5" />
                Envoyer par Téléphone
              </a>
            </div>
            <p className="mt-6 text-xs text-gray-400">
              En cliquant, vous ouvrez votre application de messagerie avec le résumé pré-rempli.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
