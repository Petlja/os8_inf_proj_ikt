$.i18n().load({
    "sr-Latn": {
        "msg_activecode_error_title": "Greška",
        "msg_activecode_description_title": "Opis",
        "msg_activecode_to_fix_title": "Da ispravite",
        "msg_activecode_load_history": "Učitaj istoriju",
        "msg_activecode_audio_tour": "Audio tura",
        "msg_activecode_loaded_code": "Vaš izvorni kod je učitan.",
        "msg_activecode_no_saved_code": "Ne postoji sačuvan kod.",
        "msg_activecode_run_code": "Pokreni program",
        "msg_activecode_show_feedback": "Prikaži rezultat",
        "msg_activecode_show_code": "Prikaži kod",
        "msg_activecode_hide_code": "Zatvori kod",
        "msg_activecode_show_codelens": "Korak po korak",
        "msg_activecode_show_in_codelens": "Korak po korak",
        "msg_activecode_hide_codelens": "Zatvori režim korak po korak",
        "msg_activecode_play_task": "Prikaži primer",
        "msg_activecode_help": "Prikaži pomoć",
        "msg_activecode_copy": "Iskopiraj",

        "msg_activecode_parse_error": "Sintaksna greška (greška u parsiranju) znači da Pajton ne razume sintaksu u liniji na koju poruka o grešci ukazuje. Tipični primeri ovakve greške su zaboravljena dvotačka kod 'if' ili 'for' naredbe ili zaboravljena zapeta između argumenata kod poziva funkcije",
        "msg_activecode_parse_error_fix": "Da biste ispravili sintaksnu grešku treba pažljivo da pogledate liniju vašeg programa na koju ukazuje poruka o grešci i možda prethodnu lininu vašeg programa. Proverite da li su poštovana sva pravila sintakse Pajtona.",
        "msg_activecode_type_error": "Greška u tipu najčešće nastaje kada se u izrazu pokuša kombinovanje dva objekta čiji tipovi se ne mogu kombinovati. Na primer stepenovanje stringa",
        "msg_activecode_type_error_fix": "Da biste ispravili grešku u tipu najverovatnije treba da prođete kroz svoj program i uverite se da promenljive imaju tipove koje očekujete od njih. Može biti korisno da odštampate svaku promenljivu tako da budete sigurni da su njihove vrednosti onakve kakve mislite da jesu.",
        "msg_activecode_name_error": "Greška u imenu skoro uvek znači da ste koristili promenljivu pre nego što je ona dobila vrednost. Često je to jednostavna slovna greška, pa pažljivo proverite da li ste tačno napisali ime.",
        "msg_activecode_name_error_fix": "Proverite desne strane naredbi dodele vrednosti i pozive vaših funkcija, ovo je najverovatnije mesto za pronalaženje grešaka u imenu.",
        "msg_activecode_value_error": "Greška u vrednosti se najčešće javlja kada prosledite parametar funkciji a funkcija na tom mestu očekuje drugi tip vrednosti.",
        "msg_activecode_value_error_fix": "Poruka o grešci vam daje prilično dobar savet o imenu funkcije kao i vrednosti koja nije odgovarajuća. Pažljivo pogledajte poruku o grešci i vratite se na promenljivu koja sadrži problematičnu vrednost.",
        "msg_activecode_attribute_error": "Ova poruka o grešci vam govori da objekat sa leve strane tačke nema atribut ili metod sa desne strane.",
        "msg_activecode_attribute_error_fix": "Najčešća varijanta ove poruke je da objekat 'undefined' nema atribut 'X'. To vam govori da objekat sa leve strane tačke nije ono što mislite. Pratite vrednosti promenljive unazad i odštampajte ih na različitim mestima dok ne otkrijete gde postaje 'undefined'. Takođe proverite da je tačno napisan naziv atributa sa desne strane tačke.",
        "msg_activecode_token_error": "Ova greška najčešće ukazuje na to da ste zaboravili desnu zagradu ili ste zaboravili da zatvorite navodnike.",
        "msg_activecode_token_error_fix": "Proverite svaku liniju svog programa i uverite se da su vaše zagrade i navodnici upareni.",
        "msg_activecode_time_limit_error": "Vaš program radi predugo. Programi se obično izvrše za manje od 10 sekundi. Ovo ukazuje da je vaš program možda u beskonačnoj petlji. ",
        "msg_activecode_time_limit_error_fix": "Dodajte neke naredbe za štampanje da biste utvrdili da li je vaš program u beskonačnoj petlji. Ako nije, možete povećati vreme izvršavanja sa sys.setExecutionLimit(msecs)",
        "msg_activecode_general_error": "Vaš program radi predugo. Programi se obično izvrše za manje od 30 sekundi. To ukazuje da je vaš program verovatno u beskonačnoj petlji.",
        "msg_activecode_general_error_fix": "Dodajte neke naredbe za štampanje da biste utvrdili da li je vaš program u beskonačnoj petlji. Ako nije, možete povećati vreme izvršavanja sa sys.setExecutionLimit(msecs)",
        "msg_activecode_syntax_error": "Ova poruka ukazuje da Pajton ne može da shvati sintaksu određene naredbe. Neki primeri su dodela vrednosti konstanti (literalu) ili pozivu funkcije",
        "msg_activecode_syntax_error_fix": "Proverite vaše naredbe dodele vrednosti i uverite se da je leva strana dodele promenljiva, a ne funkcija ili konstanta (literal).",
        "msg_activecode_index_error": "Ova poruka znači da pokušavate da pristupite elementu van granica liste ili niske (stringa). Na primer, ako vaša lista sadrži 3 elementa i pokušate da pristupite elementu na poziciji 3 ili većoj.",
        "msg_activecode_index_error_fix": "Ova poruka se ponekad pojavljuje zato što ste promašili za jedan. Zapamtite da je prvi element u listi ili nisci (stringu) na poziciji 0. U listi dužine 3 poslednji ispravan indeks je 2",
        "msg_activecode_uri_error": "",
        "msg_activecode_uri_error_fix": "",
        "msg_activecode_import_error": "Ova poruka o grešci ukazuje da pokušavate da uvezete modul koji ne postoji (naredba import)",
        "msg_activecode_import_error_fix": "Problem može biti u tome da ste pogrešno napisali naziv modula. Može se desiti i da pokušavate da uvezete modul koji postoji u 'pravom' Pajtonu, ali ne postoji ovde. Ako je to slučaj, pošaljite zahtev za dodavanje modula.",
        "msg_activecode_reference_error": "Ovo je najverovatnije interna greška, posebno ako poruka pominje konzolu.",
        "msg_activecode_reference_error_fix": "Pokušajte da osvežite veb stranicu i ako greška i dalje postoji, pošaljite izveštaj o grešci zajedno sa svojim programom",
        "msg_activecode_zero_division_error": "Ovo vam govori da pokušavate da delite nulom. Verovatno vrednost promenljive u imeniocu izraza deljenja ima vrednost 0",
        "msg_activecode_zero_division_error_fix": "Možda je potrebno da pre deljenja dodate u program proveru pomoću if naredbe da imenilac nije 0, ili treba da preispitate svoje pretpostavke o dozvoljenim vrednostima promenljivih, možda je neka prethodna naredba neočekivano dodelila vrednost nula dotičnoj promenljivoj.",
        "msg_activecode_range_error": "Prekoračena je najveća dozvoljena veličina steka poziva (call stack).",
        "msg_activecode_range_error_fix": "Veoma je verovatno da niste nameravali da zauzmete toliki prostor na steku poziva. Prekoračenje steka se obično dešava kada funkcija nekontrolisano poziva samu sebe. Ako ste u poglavlju o rekurziji, proverite da li ste dobro identifikovali osnovni slučaj.",
        "msg_activecode_internal_error": "Interna greška može značiti da ste našli bag u našem Pajtonu",
        "msg_activecode_internal_error_fix": "Prijavite ovu grešku zajedno sa svojim programom kao bag.",
        "msg_activecode_indentation_error": "Ova greška nastaje kada niste ispravno uvukli naredbe (loša indentacija). Ovo se najčešće dešava kao deo if, for, while ili def naredbe.",
        "msg_activecode_indentation_error_fix": "Proverite vaše if, for, while i def naredbe da biste bili sigurni da su linije ispod njih ispravno uvučene. Drugi način da dobijete ovu poruku je ako pri kopiranju i lepljenju koda slučajno ostavite neke delove koda tamo gde više ne pripadaju.",
        "msg_activecode_not_implemented_error": "Ova greška nastaje kada pokušate da koristite ugrađenu funkciju Pajtona koja nije implementirana u ovoj verziji Pajtona u pregledaču.",
        "msg_activecode_not_implemented_error_fix": "Za sada je jedini način da se ovo popravi da ne koristite funkciju. Možda postoje zaobilaznice. Ako vam je zaista potrebna ova ugrađena funkcija, onda prijavite grešku i recite nam kako pokušavate da koristite funkciju.",

        "msg_activecode_file_not_found": "Fajl nije pronađen: '$1'",
        "msg_activecode_no_file_or_dir": "[Errno 2] Nema takvog fajla ili direktorijuma: '$1'",
        "msg_activecode_starting": "Kliknite dugme 'pokreni' da započnete $1",
        "msg_activecode_playing": "Pokrećem $1",
        "msg_activecode_loading_audio": "Učitavam audio. Molim sačekajte. Ako tura ne počne uskoro kliknite na 'Zaustavi turu' i pokušajte ponovo.",
        "msg_activecode_pause_current_audio": "Pauzirajte tekući audio",
        "msg_activecode_pause_audio": "Pauzirajte audio",
        "msg_activecode_play_paused_audio": "Pokrenite pauzirani audio",
        "msg_activecode_audio_paused": "$1 je pauziran. Kliknite na dugme 'pokreni' da nastavite turu.",
        "msg_activecode_input_prg": "Ulaz za program",
        "msg_activecode_were_compiling_err": "Došlo je do grešaka pri kompajliranju vašeg koda. Pogledajte niže",
        "msg_activecode_time_limit_exc": "Prekoračeno je vreme za vaš program",
        "msg_activecode_server_err": "Došlo je do greške na serveru: $1 $2",
        "msg_activecode_compiling_running": "Kompajliram i pokrećem vaš kod...",
        "msg_activecode_server_comm_err": "Greška u komunikaciji sa serverom.",
        "msg_activecode_save_run": "Pokreni program", //"Sačuvaj i pokreni program"
        "msg_activecode_reset": "Vrati na početak"
    }
});
