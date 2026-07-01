// ============================================================
// FILE DOMANDE
// REV. 4 — 30 giugno 2026
// Domande reali: Scuola Pol.G.A.I. Brescia, sicurezza sul lavoro
// Per modificare il quiz, modifica solo questo file.
// Ogni domanda ha: testo, tre opzioni (A B C) e l'indice
// della risposta corretta (0 = A, 1 = B, 2 = C).
// L'ordine delle domande e delle opzioni viene mischiato
// automaticamente per ogni studente, quindi qui l'ordine
// non ha importanza.
// ============================================================

const DOMANDE = [
  {
    id: "D1",
    testo: "Cosa s'intende per \"Datore di lavoro\" in materia prevenzionistica?",
    opzioni: ["Il principale soggetto, ma non l'unico, al quale la legge affida obblighi di natura protezionistica e cautelare", "Nelle Pubbliche Amministrazioni non esiste il datore di lavoro.", "Il soggetto individuato come tale dalle Organizzazioni Sindacali."],
    corretta: 0
  },
  {
    id: "D2",
    testo: "Il Datore di lavoro può delegare la valutazione dei rischi?",
    opzioni: ["No, è un obbligo non delegabile", "Solo ai lavoratori più esperti", "Sì, purché avvisi il medico competente"],
    corretta: 0
  },
  {
    id: "D3",
    testo: "Chi è il Responsabile del Servizio di Prevenzione e Protezione (RSPP)?",
    opzioni: ["Il più importante collaboratore e \"consulente\" nominato dal Datore di Lavoro.", "Il vero responsabile della sicurezza aziendale anche se non ha frequentato corsi di formazione altamente qualificanti", "Un consulente del Medico Competente (MC)"],
    corretta: 0
  },
  {
    id: "D4",
    testo: "Da chi è composto il Servizio di Prevenzione e Protezione (SPP) ?",
    opzioni: ["Dal Responsabile e da almeno un Addetto (ASPP).", "È un organo collegiale che supporta le decisioni del Datore di lavoro ed è composto dal RSPP e dal Medico Competente (MC).", "Dal Datore di Lavoro e da tutti i Rappresentanti delle Organizzazioni Sindacali presenti nella provincia"],
    corretta: 0
  },
  {
    id: "D5",
    testo: "I Lavoratori devono ricevere la formazione sulla sicurezza:",
    opzioni: ["All’inizio del rapporto di lavoro e in occasione di cambi mansione", "Solo se lavorano a contatto con sostanze pericolose", "Una volta ogni 10 anni"],
    corretta: 0
  },
  {
    id: "D6",
    testo: "I Lavoratori devono contribuire alla sicurezza aziendale:",
    opzioni: ["Collaborando attivamente e rispettando le disposizioni ricevute", "Solo in caso di emergenza", "Solo se espressamente incaricati"],
    corretta: 0
  },
  {
    id: "D7",
    testo: "Chi effettua la Sorveglianza Sanitaria?",
    opzioni: ["Il Medico Competente", "L'Organo di Vigilanza", "Il Servizio di Prevenzione e Protezione"],
    corretta: 0
  },
  {
    id: "D8",
    testo: "Il Preposto ha l’obbligo di:",
    opzioni: ["Controllare che i lavoratori rispettino le misure di sicurezza", "Occuparsi della sorveglianza sanitaria", "Redigere tutti gli anni la valutazione dei rischi"],
    corretta: 0
  },
  {
    id: "D9",
    testo: "Cosa significa D.P.I.?",
    opzioni: ["Dispositivi di protezione individuale", "Dispositivi di prevenzione individuale", "Dispositivi pericolosi inutilizzabili"],
    corretta: 0
  },
  {
    id: "D10",
    testo: "Se un Lavoratore non usa i DPI che gli sono stati forniti:",
    opzioni: ["Può essere sanzionato", "Deve firmare una liberatoria", "Non succede nulla"],
    corretta: 0
  },
  {
    id: "D11",
    testo: "Il Lavoratore deve sottoporsi ai controlli sanitari stabiliti dal Medico competente?",
    opzioni: ["Sì, il controllo sanitario rientra tra gli obblighi del Lavoratore", "No, il controllo sanitario è su base volontaria perché la privacy è un diritto Costituzionale", "Sì, ma solo nel caso di attività a rischio elevato e previo controllo Sindacale"],
    corretta: 0
  },
  {
    id: "D12",
    testo: "Per “salute” si intende:",
    opzioni: ["lo stato di completo benessere fisico, mentale e sociale, non consistente solo in un’assenza di malattia o d’infermità", "l’assenza totale di malattia", "l’assenza anche solo parziale di malattia"],
    corretta: 0
  },
  {
    id: "D13",
    testo: "Un Lavoratore ha il diritto di:",
    opzioni: ["Essere formato, informato e dotato dei DPI", "Scegliere il proprio RSPP", "Avere sempre la precedenza nelle decisioni aziendaliAvere sempre la precedenza nelle decisioni aziendali"],
    corretta: 0
  },
  {
    id: "D14",
    testo: "Qual è la definizione corretta di “pericolo”?",
    opzioni: ["“proprietà o qualità intrinseca di un determinato fattore avente il potenziale di causare danni”", "“rischio accettabile”", "“conseguenza di un danno”"],
    corretta: 0
  },
  {
    id: "D15",
    testo: "Quali sono gli obblighi che il Datore di Lavoro non può delegare?",
    opzioni: ["La valutazione di tutti i rischi, la redazione del DVR e la designazione del RSPP", "La nomina degli addetti al Servizio di Prevenzione e Protezione", "Non esistono, perché il Datore di Lavoro può delegare tutti i suoi obblighi al medico competente"],
    corretta: 0
  },
  {
    id: "D16",
    testo: "Qual è la differenza tra informazione, formazione e addestramento?",
    opzioni: ["L’informazione coinvolge l’area del “sapere”, la formazione l’area del “saper essere” e l’addestramento l’area del “saper fare”.", "Che la mancata informazione e formazione viene sanzionata penalmente, mentre il mancato addestramento solo amministrativamente", "Nessuna, sono sinonimi"],
    corretta: 0
  },
  {
    id: "D17",
    testo: "Pericolo e rischio sono sinonimi?",
    opzioni: ["No, il pericolo attiene alla sfera del “possibile”, mentre il rischio a quella del “probabile”", "Sì ma mentre il rischio, qualora si verificasse, produce un danno maggiore, il pericolo produce danni minori", "Si, esprimono lo stesso concetto"],
    corretta: 0
  },
  {
    id: "D18",
    testo: "Il Datore di Lavoro può delegare alcune funzioni e, quindi responsabilità, ad altri soggetti?",
    opzioni: ["Si, la possibilità di delega è espressamente prevista dal legislatore tranne che per la valutazione del rischio, la redazione del DVR e la nomina del RSPP", "Sì, la possibilità di delega è prevista dal legislatore ma il DL non può delegare ad altri la nomina del medico competente (MC).", "No, il DL non può demandare ad altri le proprie funzioni e responsabilità"],
    corretta: 0
  },
  {
    id: "D19",
    testo: "La Protezione è definita come:",
    opzioni: ["L’insieme dei dispositivi di protezione collettiva e individuale", "L’assicurazione contro gli infortuni", "La presenza della vigilanza"],
    corretta: 0
  },
  {
    id: "D20",
    testo: "Quale tra queste è una misura generale di tutela prevista dal D. Lgs. 81/08?",
    opzioni: ["L’addestramento", "L’aumento delle ore di lavoro", "La chiusura temporanea dei reparti"],
    corretta: 0
  },
  {
    id: "D21",
    testo: "Il Medico Competente è tenuto a visitare gli ambienti di lavoro?",
    opzioni: ["Sì, almeno una volta all’anno o più frequentemente in base alla valutazione dei rischi", "No, il Medico competente in Polizia non ha libero accesso a tutti gli ambienti di lavoro perché non è un “operativo”.", "No, il Medico competente si deve occupare solo della sorveglianza sanitaria."],
    corretta: 0
  },
  {
    id: "D22",
    testo: "Il RSPP è una figura obbligatoria che:",
    opzioni: ["Supporta il datore di lavoro nella gestione della sicurezza", "Effettua i controlli di qualità", "Rappresenta tutti i lavoratori"],
    corretta: 0
  },
  {
    id: "D23",
    testo: "Gli addetti alle emergenze sono designati per:",
    opzioni: ["Intervenire in caso di incendio, evacuazione e primo soccorso", "Redigere il DVR", "Sopperire al personale indisponibile"],
    corretta: 0
  },
  {
    id: "D24",
    testo: "I Lavoratori possono verificare le misure di sicurezza?",
    opzioni: ["Sì, attraverso il Rappresentante dei Lavoratori per la Sicurezza (RLS)", "Sì, consultando in qualsiasi momento il DVR", "No, devono solo attenersi a quanto disposto"],
    corretta: 0
  },
  {
    id: "D25",
    testo: "L’informazione ai Lavoratori",
    opzioni: ["È una misura generale di tutela il cui obbligo grava sul datore di lavoro e sul dirigente e viene effettuata dal servizio di prevenzione e protezione.", "È un obbligo il cui adempimento grava sul rappresentante dei lavoratori per la sicurezza (RLS) che poi riferisce al DL.", "Non è obbligatoria nelle Pubbliche Amministrazioni perché viene assorbita dall’aggiornamento professionale"],
    corretta: 0
  },
  {
    id: "D26",
    testo: "Il rischio di elettrocuzione o scossa o folgorazione:",
    opzioni: ["è la probabilità che il corpo umano sia attraversato da una corrente elettrica subendo danni alla salute fisiopatologici temporanei o permanenti, fino al decesso.", "è la potenziale possibilità che un individuo subisca danni alla salute a seguito dell’esposizione ad agenti biologici in grado di provocare infezioni, allergie o intossicazioni.", "entrambe le precedenti"],
    corretta: 0
  },
  {
    id: "D27",
    testo: "Il rischio biologico:",
    opzioni: ["è la probabilità che un individuo subisca danni alla salute a seguito dell’esposizione ad agenti biologici in grado di provocare infezioni, allergie o intossicazioni.", "è la potenziale possibilità che il corpo umano sia attraversato da una corrente elettrica subendo danni alla salute fisiopatologici temporanei o permanenti, fino alla morte.", "entrambe le precedenti."],
    corretta: 0
  },
  {
    id: "D28",
    testo: "I Lavoratori a cui vengono affidati compiti di emergenza possono rifiutare l’incarico (lotta antincendio – primo soccorso – evacuazione)?",
    opzioni: ["No, a meno che non vi sia un giustificato motivo", "Si, perché è un ordine illegittimo che travalica i compiti connessi al servizio.", "E’ prevista un'accettazione espressa e in forma scritta."],
    corretta: 0
  },
  {
    id: "D29",
    testo: "I lavoratori hanno l’obbligo di partecipare ai corsi di formazione sulla sicurezza?",
    opzioni: ["Sì", "No, non è un obbligo, ma la partecipazione è fortemente consigliata", "No, quest’obbligo è stato soppresso con il nuovo Accordo Stato-Regioni"],
    corretta: 0
  },
  {
    id: "D30",
    testo: "Le sanzioni per violazione delle norme di sicurezza possono essere:",
    opzioni: ["Amministrative, penali e disciplinari", "Simboliche e pecuniarie", "Solo simboliche"],
    corretta: 0
  },
];
