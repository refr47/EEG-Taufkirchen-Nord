<template>
  <div class="min-h-screen bg-white pb-20">
     <h3 class="text-2xl md:text-3xl font-black text-slate-800 leading-tight border-l-8 border-eeg-green pl-6">
       Datenschutzerklärung
    </h3>
         <p class="mt-4 text-slate-500 font-medium italic">Stand: {{ pricing.organisation.datenschutzStand }} • {{ pricing.organisation.name }}</p>
   
    <div class="max-w-4xl mx-auto px-6">
      <nav class="mb-16 p-8 bg-slate-50 rounded-3xl border border-slate-200 shadow-sm">
        <h2 class="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Schnellzugriff</h2>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
          <li v-for="(item, index) in menuItems" :key="index">
            <a :href="'#' + item.id" class="text-sm text-slate-600 hover:text-eeg-green transition-colors flex items-center group">
              <span class="mr-3 text-[10px] font-black text-slate-300 group-hover:text-eeg-green">{{ (index + 1).toString().padStart(2, '0') }}</span>
              {{ item.title }}
            </a>
          </li>
        </ul>
      </nav>

      <div class="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-16">
        
        <section id="einleitung" class="scroll-mt-24">
          <p>
            Wir freuen uns über Ihren Besuch auf unserer Webseite. Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. Wir halten uns an die gesetzlichen Bestimmungen der EU-Datenschutz-Grundverordnung, des österreichischen Datenschutzgesetzes und der sonstigen anwendbaren Rechtsvorschriften zum Schutz, dem rechtmäßigen Umgang und zur Geheimhaltung von personenbezogenen Daten. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der geltenden gesetzlichen Bestimmungen.
          </p>
          <p>
            Diese Datenschutzerklärung bezieht sich auf alle von uns im Unternehmen verarbeiteten personenbezogenen Daten sowie auf alle Daten, die von uns beauftragte Firmen (Auftragsverarbeiter) verarbeiten. Personenbezogene Daten umfassen gemäß Art. 4 Nr. 1 DSGVO Informationen wie Name, E-Mail-Adresse oder die postalische Anschrift einer Person. Die Verarbeitung dieser Daten ermöglicht es uns, unsere Dienstleistungen und Produkte sowohl online als auch offline bereitzustellen und abzurechnen.
          </p>
          <div class="mt-6 bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <p class="font-bold mb-2">Der Geltungsbereich dieser Datenschutzerklärung umfasst:</p>
            <ul class="list-disc pl-5">
              <li>alle von uns betriebenen Onlineauftritte (Webseiten)</li>
              <li>die E-Mail-Kommunikation</li>
            </ul>
            <p class="mt-4 text-sm">
              Die Datenschutzerklärung gilt für alle Bereiche, in denen personenbezogene Daten innerhalb unseres Unternehmens über die genannten Kanäle systematisch verarbeitet werden. Sollten wir außerhalb dieser Kanäle mit Ihnen in Rechtsbeziehungen treten, werden wir Sie gegebenenfalls gesondert über die Datenverarbeitung informieren.
            </p>
          </div>
        </section>

        <section id="kontakt" class="scroll-mt-24">
          <h2 class="text-3xl font-black text-slate-900 mb-8 border-l-4 border-eeg-green pl-6">Name und Kontaktdaten der Verantwortlichen</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-white p-6 rounded-2xl border border-slate-200">
              <p class="text-xs uppercase font-black text-slate-400 mb-2">Verantwortlich</p>
              <p class="font-bold text-slate-900">{{ pricing.organisation.name  }}</p>
              <p>{{ pricing.organisation.adresse }}</p>
              <p>E-Mail: <a :href="`${pricing.organisation.email}`" class="text-eeg-green hover:underline font-bold">{{ pricing.organisation.email }}</a></p>
             
            </div>
            <div class="bg-slate-900 text-white p-6 rounded-2xl">
              <p class="text-xs uppercase font-black text-eeg-green mb-2 tracking-widest">Datenschutzbeauftragte</p>
              <p class="font-bold text-lg">Mag. DI Franz Reitinger</p>
              <p class="text-slate-300">E-Mail: <a :href="`mailto:${pricing.organisation.email}`" class="hover:text-white underline font-medium">{{ pricing.organisation.email }}</a></p>
             
            </div>
          </div>
        </section>

        <section id="zwecke" class="scroll-mt-24">
          <h2 class="text-3xl font-black text-slate-900 mb-6">Zwecke der Datenverarbeitung</h2>
          <p>Wir verarbeiten Ihre personenbezogenen Daten zu folgenden Zwecken:</p>
          <ul class="list-disc pl-5 space-y-2">
            <li>Zur Bereitstellung unserer Webseite und der Funktionen (z.B. Anmeldung)</li>
            <li>Zur Bearbeitung Ihrer Anfragen, die Sie  per E-Mail an uns richten</li>
            <li>Zur Abwicklung von Verträgen und der Erbringung unserer Dienstleistungen</li>
            <li>Zur Analyse der Nutzung unserer Webseite, um diese weiter zu verbessern</li>
          </ul>
        </section>

        <section id="rechtsgrundlage" class="scroll-mt-24">
          <h2 class="text-3xl font-black text-slate-900 mb-6">Rechtsgrundlage der Datenverarbeitung</h2>
          <div class="space-y-6">
            <div v-for="basis in rechtsgrundlagen" :key="basis.art" class="bg-slate-50 p-6 rounded-2xl border-l-4 border-slate-300">
              <strong class="text-slate-900 block mb-2">{{ basis.titel }} – {{ basis.art }}</strong>
              <p class="text-sm leading-relaxed">{{ basis.beschreibung }}</p>
            </div>
          </div>
        </section>

        <section id="speicherdauer" class="scroll-mt-24">
          <h2 class="text-3xl font-black text-slate-900 mb-6">Dauer der Speicherung</h2>
          <p>
            Wir speichern Ihre personenbezogenen Daten nur so lange, als dies technisch und organisatorisch zur Erreichung der dargelegten Zwecke sowie zur Erfüllung der uns treffenden gesetzlichen Verpflichtungen erforderlich ist. Bei der Festlegung der Zeiträume achten wir darauf, Ihre Rechte und Freiheiten nicht zu verletzen. Nach Wegfall des Verarbeitungszwecks oder Ablauf der gesetzlichen Aufbewahrungsfristen werden die Daten gelöscht.
          </p>
        </section>

        <section id="server" class="scroll-mt-24">
          <h2 class="text-3xl font-black text-slate-900 mb-6">Server Protokolle</h2>
          <p>
            Bei Ihrem Besuch auf unserer Webseite erheben und speichern wir Zugriffsdaten in Protokolldateien (sogenannten Logfiles bzw. Access-Logs), um die dauerhafte Funktionsfähigkeit und Erreichbarkeit der Webseite zu gewährleisten. Wir verarbeiten in diesem Zusammenhang folgende Daten:
          </p>
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm bg-slate-50 p-6 rounded-2xl italic">
            <li>• IP-Adresse des zugreifenden Computers</li>
            <li>• Datum und Uhrzeit des Zugriffs</li>
            <li>• Referrer-URL</li>
            <li>• Betriebssystem</li>
            <li>• Name des Internet-Service-Providers</li>
            <li>• Browser-Produkt und Version</li>
            <li>• Übertragene Datenmenge, Ladezeit</li>
          </ul>
          <p class="mt-4 text-sm">
            Diese Daten dienen ausschließlich der technischen Überwachung und werden nach **sechs Monaten** gelöscht.
          </p>
        </section>

        <section id="sicherheit" class="scroll-mt-24 bg-eeg-green/5 p-8 rounded-[2rem] border border-eeg-green/10">
          <h2 class="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Datensicherheit</h2>
          <p>
            Wir verwenden geeignete technische und organisatorische Maßnahmen, um Ihre personenbezogenen Daten vor unbefugtem Zugriff, Verlust oder Missbrauch zu schützen. Der Zugang zu unserer Webseite wird über **HTTPS** gesichert. Die Kommunikation zwischen Ihrem Endgerät und unseren Servern erfolgt verschlüsselt. Sie erkennen die aktive Verschlüsselung an dem kleinen Schlosssymbol in der Adresszeile Ihres Browsers. Weitere Maßnahmen sind beispielsweise Firewalls und regelmäßige Sicherheitsupdates.
          </p>
        </section>

        <section id="rechte" class="scroll-mt-24">
          <h2 class="text-3xl font-black text-slate-900 mb-6">Ihre Rechte</h2>
          <p class="mb-6">Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu.</p>
          <div class="space-y-4">
            <div v-for="recht in detaillierteRechte" :key="recht.titel" class="border border-slate-200 p-6 rounded-2xl hover:border-eeg-green transition-all">
              <h4 class="font-bold text-slate-900 mb-2">{{ recht.titel }} ({{ recht.art }})</h4>
              <p class="text-sm leading-relaxed text-slate-600">{{ recht.inhalt }}</p>
            </div>
          </div>
          <div class="mt-8 p-6 bg-red-50 rounded-2xl border border-red-100">
            <h4 class="font-bold text-red-900 mb-2">Beschwerderecht</h4>
            <p class="text-sm">
              Wenn Sie der Ansicht sind in einem dieser Rechte durch uns verletzt worden zu sein, haben Sie die Möglichkeit, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. 
              <strong>Österreichische Datenschutzbehörde</strong>, Barichgasse 40-42, 1030 Wien, Telefon: +43 1 52152-0, E-Mail: dsb@dsb.gv.at
            </p>
          </div>
        </section>

        <section id="cookies" class="scroll-mt-24">
          <h2 class="text-3xl font-black text-slate-900 mb-6">Cookies und Tracking-Technologien</h2>
          <p>Unsere Webseite verwendet Cookies. Mit Ihrer Einwilligung verwenden wir Analyse-Cookies über das Plugin „Real Cookie Banner“. Details finden Sie hier: <a href="https://devowl.io/de/rcb/datenverarbeitung/" target="_blank" class="text-eeg-green">devowl.io/de/rcb/datenverarbeitung/</a>.</p>
          <h3 class="text-xl font-bold mt-8 mb-4">Web-Analyse mit Matomo</h3>
          <p>Wir verwenden Matomo. Dieses Tool ist direkt auf **unserem Server** eingerichtet, es werden **keine Daten an Dritte** übertragen.</p>
        </section>

        <section id="schluss" class="scroll-mt-24 border-t border-slate-200 pt-12">
          <h3 class="font-bold mb-4">Änderungen der Datenschutzerklärung</h3>
          <p class="text-sm">Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an geänderte rechtliche Anforderungen anzupassen.</p>
          <p class="mt-8 text-eeg-green font-black">Stand: 12/2024</p>
        </section>

      </div>

      <div class="mt-20 pt-10 border-t border-slate-200 flex justify-between items-center">
        <router-link to="/" class="text-slate-900 font-black flex items-center hover:translate-x-[-4px] transition-transform">
          ← ZURÜCK
        </router-link>
        <span class="text-[10px] font-black uppercase tracking-widest text-slate-300 italic">Solidarische Energiegemeinschaften</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { pricing } from '@/siteConfig';
const menuItems = [
  { id: 'einleitung', title: 'Einleitung & Geltungsbereich' },
  { id: 'kontakt', title: 'Verantwortliche & Kontakt' },
  { id: 'zwecke', title: 'Zwecke der Verarbeitung' },
  { id: 'rechtsgrundlage', title: 'Rechtsgrundlagen (DSGVO)' },
  { id: 'speicherdauer', title: 'Dauer der Speicherung' },
  { id: 'server', title: 'Server Protokolle & Logs' },
  { id: 'sicherheit', title: 'Datensicherheit' },
  { id: 'rechte', title: 'Ihre Rechte & Beschwerde' },
  { id: 'cookies', title: 'Cookies & Web-Analyse' },
  { id: 'schluss', title: 'Änderungsvorbehalt' }
];

const rechtsgrundlagen = [
  { titel: 'Einwilligung', art: 'Art. 6 Abs. 1 lit. a DSGVO', beschreibung: 'Wenn Sie uns Ihre Zustimmung zur Verarbeitung für einen klar definierten Zweck erteilen – etwa via Kontaktformular.' },
  { titel: 'Vertragserfüllung', art: 'Art. 6 Abs. 1 lit. b DSGVO', beschreibung: 'Ihre Daten werden verarbeitet, sofern dies zur Erfüllung eines Vertrags oder zur Durchführung vorvertraglicher Schritte notwendig ist.' },
  { titel: 'Gesetzliche Verpflichtung', art: 'Art. 6 Abs. 1 lit. c DSGVO', beschreibung: 'Sobald wir gesetzlich dazu verpflichtet sind, bestimmte Daten zu verarbeiten – etwa zur Aufbewahrungspflicht von Rechnungen.' },
  { titel: 'Berechtigte Interessen', art: 'Art. 6 Abs. 1 lit. f DSGVO', beschreibung: 'Sofern unsere legitimen Interessen nicht durch Ihre Grundrechte überwiegt werden (z.B. Gewährleistung der Sicherheit der Website).' }
];

const detaillierteRechte = [
  { titel: 'Auskunftsrecht', art: 'Art. 15 DSGVO', inhalt: 'Sie haben das Recht, eine Bestätigung darüber zu erhalten, ob wir personenbezogene Daten über Sie verarbeiten, und Zugang zu diesen Daten zu verlangen.' },
  { titel: 'Recht auf Berichtigung', art: 'Art. 16 DSGVO', inhalt: 'Sie können die Berichtigung unrichtiger oder die Vervollständigung unvollständiger Daten verlangen.' },
  { titel: 'Recht auf Löschung', art: 'Art. 17 DSGVO', inhalt: 'Sie können unter bestimmten Umständen die Löschung Ihrer Daten verlangen („Recht auf Vergessenwerden“).' },
  { titel: 'Einschränkung der Verarbeitung', art: 'Art. 18 DSGVO', inhalt: 'Sie haben das Recht, die Einschränkung der Verarbeitung zu verlangen, wenn die Löschung nicht möglich oder nicht gewünscht ist.' },
  { titel: 'Datenübertragbarkeit', art: 'Art. 20 DSGVO', inhalt: 'Sie können verlangen, dass wir Ihre Daten in einem maschinenlesbaren Format bereitstellen oder an einen Dritten übertragen.' }
];
</script>

<style>
html { scroll-behavior: smooth; }
.text-eeg-green { color: #16a34a; }
.border-eeg-green { border-color: #16a34a; }
</style>