# Test SILP CGIL Brescia — Istruzioni

## File presenti

- `index.html` : la pagina del quiz vera e propria
- `domande.js` : le domande del test (qui dentro le modifichi quando vuoi)
- `studenti.js` : l'elenco dei nomi degli studenti per l'autocompletamento
- `script_google_apps.gs` : codice da incollare nel foglio Google (vedi istruzioni dentro il file)

## Come pubblicare il sito su GitHub Pages

1. Vai sul tuo repository `testlavoratori` su GitHub.
2. Carica i file `index.html`, `domande.js`, `studenti.js` (NON il file `.gs`, quello va nel foglio Google).
3. Vai su Settings > Pages.
4. In "Source" seleziona il branch `main` e la cartella `/ (root)`.
5. Salva. Dopo un paio di minuti il sito sarà visibile su:
   `https://tuonomeutente.github.io/testlavoratori/`

## Cosa fare PRIMA di ogni somministrazione del test

1. Apri `index.html` e cambia il valore di `PIN_CORRETTO` con un nuovo PIN.
2. Aggiorna `domande.js` con le domande reali, dando a ognuna un id univoco (D1, D2, D3...).
3. Aggiorna `studenti.js` con l'elenco reale dei 250 nomi.
4. IMPORTANTE: apri lo script Google Apps collegato al foglio e aggiorna l'elenco `ID_DOMANDE` con gli stessi id usati in `domande.js`, nello stesso ordine. Se questo elenco non corrisponde, le colonne del foglio non saranno corrette.
5. Pubblica una nuova distribuzione dello script (Distribuisci > Gestisci distribuzioni > icona matita > Nuova versione > Distribuisci), così le modifiche allo script vengono applicate.
6. Carica le modifiche su GitHub (basta sostituire i file dal sito di GitHub, anche da telefono).
7. Genera il QR code che punta all'indirizzo del sito.
8. In aula, comunica il PIN solo a voce, immediatamente prima di far partire il test.

## Protezioni già attive

- Risposta obbligatoria per ogni domanda prima di poter proseguire.
- Un nominativo che ha già completato il test non può inviarlo una seconda volta (controllo lato Google, non aggirabile cambiando dispositivo).
- Le risposte nel foglio sono salvate in colonne fisse per domanda originale (Risposta D1, Risposta D2...), indipendentemente dall'ordine mischiato mostrato allo studente.

## Prossimi passi (da fare insieme)

- Creazione del foglio Google e collegamento dello script
- Generazione del QR code
- Caricamento elenco reale dei 250 studenti
- Caricamento delle 30 domande reali
- Discussione sicurezza: invii multipli, copia delle domande, condivisione del PIN
