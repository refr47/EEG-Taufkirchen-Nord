export const pricing = {
    energie: {
        arbeitspreis: 11.0,   
        oemagpreis: 8.16, 
        netzgebuehren: 8.23,
        netzentgelt: 0.57, // reduktion per gesetzt
        abgabenSteuern: 1.8, // 20% auf netzgebühren
        aufgabenSteuernEEG:0.0,
    
      },  // Preis pro kWh inkl. MwSt
    bezug: {
        netto: 9.50,
        brutto: 0.1413          // Wert für Berechnungen
    },
    einspeisung: {
       netto: 9.00,
    },
    vergleich: {
        normalBrutto: 0.2580,
        ersparnisProzent: 45    // Berechneter Wert für die Anzeige
    },
    tarife: {
        gueltigAb: '01.01.2026',

    },
    organisation: {
        name: 'EEG Taufkirchen/Nord',
        website: 'https://www.eeg-taufkirchen-nord.at/',
        email: 'office@eeg-taufkirchen-nord.at',
        adresse: 'Flieherstrasse 13, 4775 Taufkirchen/Prame',
        anzahlMitglieder: 2,
        anzahlEinspeiser: 5,
        anzahlVerbraucher: 20,
        gesamtEinspeisung: 50000, // kWh pro Jahr
        gesamtBezug: 100000, // kWh pro Jahr
        zvr: 1093713468,
        lastUpdate: '2026-03',
        author: 'Franz Reitinger',
        datenschutzStand: '03/2026',
       // kWh pro Jahr 
    },
    background: {

        saturation: 0,   // 0 bis 2 (0 = S/W)ts
        brightness: 1.05,  // 0.5 bis 1.5
        scale: 0.1,
        overlayOpacity: 'bg-white/40' // Tailwind Klasse für den Schleier
    }
};