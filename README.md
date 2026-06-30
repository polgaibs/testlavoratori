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
2. Aggiorna `domande.js` con le domande reali (se non già fatto).
3. Aggiorna `studenti.js` con l'elenco reale dei 250 nomi (se non già fatto).
4. Carica le modifiche su GitHub (basta sostituire i file dal sito di GitHub, anche da telefono).
5. Genera il QR code che punta all'indirizzo del sito (te lo preparo io quando vuoi).
6. In aula, comunica il PIN solo a voce, immediatamente prima di far partire il test.

## Prossimi passi (da fare insieme)

- Creazione del foglio Google e collegamento dello script
- Generazione del QR code
- Caricamento elenco reale dei 250 studenti
- Caricamento delle 30 domande reali
- Discussione sicurezza: invii multipli, copia delle domande, condivisione del PIN
