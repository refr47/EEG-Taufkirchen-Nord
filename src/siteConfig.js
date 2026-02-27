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
        display: "10,00",       // Preis ohne Steuer (Kleinunternehmer)
        bruttoDisplay: "14,13", // Endpreis inkl. reduzierter Netzkosten
        netto: 9.50,
        brutto: 0.1413          // Wert für Berechnungen
    },
    einspeisung: {
       netto: 9.00,
    },
    vergleich: {
        normalBrutto: 0.2580,
        ersparnisProzent: 45    // Berechneter Wert für die Anzeige
    }
};