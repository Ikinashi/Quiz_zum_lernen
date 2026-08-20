const questions = [
      {
        question: "Was ist das zentrale Ziel der Berufsausbildung?",
        answersNeeded: 1,
        options: [
          { text: "Der Erwerb der beruflichen Handlungsfähigkeit", correct: true },
          { text: "Das Bestehen der Abschlussprüfung", correct: false },
          { text: "Der Übergang von der Schule in die Arbeitswelt", correct: false }
        ]
      },
      {
        question: "Welche Aussagen in Bezug zur betrieblichen Ausbildung sind korrekt?",
        answersNeeded: 2,
        options: [
          { text: "Die Ausbildung erschwert die Personalplanung eines Betriebs.", correct: false },
          { text: "Durch das Zusammenwirken von Theorie und Praxis kann der Auszubildende gelerntes Wissen direkt praktisch vertiefen.", correct: true },
          { text: "Die betriebliche Ausbildung führt zu mehr sozialversicherungspflichtigen Beschäftigungsverhältnissen.", correct: true }
        ]
      },
      {
        question: "Welche Kennzahlen sind für die Ermittlung des quantitativen Personalbedarfs wichtig?",
        answersNeeded: 3,
        options: [
          { text: "Finanzielle Situation des Unternehmens", correct: true },
          { text: "Fluktuation", correct: true },
          { text: "Anzahl der Bewerber", correct: false },
          { text: "Altersstruktur des Unternehmens", correct: true },
          { text: "Mitarbeiter des Unternehmens", correct: false }
        ]
      },
      {
        question: "Warum wird ein Anforderungsprofil erstellt?",
        answersNeeded: 1,
        options: [
          { text: "Um schriftlich festzuhalten, welche Kompetenzen und Eigenschaften an das Berufsbild gestellt werden.", correct: true },
          { text: "Um Bewerbern eine Übersicht über das Berufsbild zu geben.", correct: false },
          { text: "Um Fachkräfte auf ihre Qualifikationen zu prüfen.", correct: false }
        ]
      },
      {
        question: "Was sind neue Qualifikationsbedarfe?",
        answersNeeded: 1,
        options: [
          { text: "Neue Qualifikationsbedarfe beziehen sich auf die Qualitäten, die ein Auszubildender heutzutage mitbringen muss.", correct: false },
          { text: "Neue Qualifikationsbedarfe beziehen sich auf Kompetenzen, die heutzutage gebraucht werden, um den Anforderungen der modernen Arbeitswelt gerecht zu werden.", correct: true }
        ]
      },
      {
        question: "Was besagt das Günstigkeitsprinzip?",
        answersNeeded: 1,
        options: [
          { text: "Für den Arbeitgeber wird die rechtlich günstigste Regelung angewandt.", correct: false },
          { text: "Für den Arbeitnehmer wird die rechtlich günstigste Regelung angewandt.", correct: true },
          { text: "Ein vereinbarter Tarifvertrag darf nicht schlechter sein als das Gesetz.", correct: false }
        ]
      },
      {
        question: "Welches Gesetz ist das wichtigste Gesetz in der Berufsausbildung?",
        answersNeeded: 1,
        options: [
          { text: "Betriebsverfassungsgesetz (BetrVG)", correct: false },
          { text: "Bürgerliches Gesetzbuch (BGB)", correct: false },
          { text: "Berufsbildungsgesetz (BBiG)", correct: true }
        ]
      },
      {
        question: "Welche besonderen Vorschriften gelten für Jugendliche unter 18 Jahren gemäß dem Jugendarbeitsschutzgesetz?",
        answersNeeded: 2,
        options: [
          { text: "Der jährliche Urlaubsanspruch liegt bei mindestens 35 Tagen.", correct: false },
          { text: "Die Arbeitszeit ist auf maximal 8 Stunden täglich und 40 Stunden pro Woche begrenzt.", correct: true },
          { text: "Das Ausbildungsgehalt ist um 10% höher.", correct: false },
          { text: "Bis auf wenige Ausnahmen ist eine Beschäftigung an Wochenenden und gesetzlichen Feiertagen verboten.", correct: true }
        ]
      },
      {
        question: "Was sind Grundsätze des Bildungssystems?",
        answersNeeded: 4,
        options: [
          { text: "Durchlässigkeit", correct: true },
          { text: "Chancengleichheit", correct: true },
          { text: "Freiheit", correct: false },
          { text: "Verständnis", correct: false },
          { text: "Berufliche Bildung", correct: true },
          { text: "Allgemeine Schulpflicht", correct: true }
        ]
      },
      {
        question: "Welche Aussage trifft auf den Lernort Berufsschule nicht hinzu?",
        answersNeeded: 1,
        options: [
          { text: "Die Schulbehörden sind zuständig für die Berufsschulen.", correct: false },
          { text: "Die inhaltlichen Grundlagen beruhen auf der Ausbildungsordnung.", correct: true },
          { text: "Bei den vermittelten Inhalten handelt es sich um betriebsunabhängige, theoretische Fertigkeiten und Kenntnisse sowie Allgemeinbildung.", correct: false }
        ]
      },
       {
        question: "Was ist das Ziel des dualen Studiums?",
        answersNeeded: 1,
        options: [
          { text: "Die Studierenden sollen viele praktische Erfahrungen sammeln.", correct: true },
          { text: "Die Studierenden sollen ein ordentliches Leben führen und neben dem Studieren das Arbeiten nicht vergessen.", correct: false }
        ]
      },
      {
        question: "In der beruflichen Ausbildung wird vom “Dualen System” gesprochen. Was ist damit gemeint?",
        answersNeeded: 1,
        options: [
          { text: "Der Ausbildungsvertrag wird von 2 Parteien (Auszubildende/r und Betrieb) unterschrieben.", correct: false },
          { text: "Die IHK führt 2 verschiedene Prüfungen, die praktische und die schriftliche Prüfung, durch.", correct: false },
          { text: "Die Berufsausbildung wird durch die Berufsschule und den Ausbildungsbetrieb durchgeführt.", correct: true },
          { text: "Die Zusammenarbeit von Betrieb und Industrie- und Handelskammer oder Handwerkskammer wird als \"Duales System\" bezeichnet.", correct: false }
        ]
      },
      {
        question: "Welche Angaben muss eine Ausbildungsordnung enthalten?",
        answersNeeded: 1,
        options: [
          { text: "Berufsbezeichnung, Ausbildungsdauer, inhaltlichen Mindestanforderungen der Ausbildung, Prüfungsanforderungen und Ausbildungsrahmenplan.", correct: true },
          { text: "Berufsbezeichnung, Ausbildungsdauer, Ausbildungsvergütung und inhaltliche Mindestanforderungen der Ausbildung.", correct: false },
          { text: "Ausbildungsdauer, Ausbildungsvergütung und Ausbildungsrahmenplan.", correct: false }
        ]
      },
      {
        question: "Welche Aussage ist falsch, wenn es um die Arten von Ausbildungsordnungen handelt?",
        answersNeeded: 1,
        options: [
          { text: "Monoberufe sind Berufe ohne Differenzierung nach Fachrichtungen.", correct: false },
          { text: "Bei Monoberufen und Monoberufen mit Fachrichtung erfolgt eine Zwischenprüfung nach dem ersten Ausbildungsjahr.", correct: false },
          { text: "Bei Monoberufen mit Fachrichtungen erfolgen zwei Jahre Grundbildung, im Anschluss ein weiteres Ausbildungsjahr, in dem die fachspezifischen Inhalte vermittelt und erlernt werden.", correct: true }
        ]
      },
      {
        question: "Was ist der Vorteil der Stufenausbildung?",
        answersNeeded: 1,
        options: [
          { text: "Die Ausbildung geht drei bis dreieinhalb Jahre.", correct: false },
          { text: "Die Ausbildungsvergütung ist höher.", correct: false },
          { text: "Durch den Erwerb von zwei Abschlüssen erhalten schwächerer Auszubildende bereits nach der ersten Stufe ein Abschlusszeugnis, falls sie die Ausbildung abbrechen möchten.", correct: true }
        ]
      },
      {
        question: "Was folgt bei Monoberufen mit Fachrichtung auf die Grundbildung?",
        answersNeeded: 1,
        options: [
          { text: "Fachbildung", correct: true },
          { text: "Allgemeine Fachbildung", correct: false }
        ]
      },
      {
        question: "Was sind Standardberufsbildpositionen?",
        answersNeeded: 1,
        options: [
          { text: "Maximale Anforderungen für das entsprechende Berufsbild", correct: false },
          { text: "Mindestanforderungen, die im Betrieb zu vermitteln sind", correct: true }
        ]
      },
      {
        question: "Was sind beispielhafte Themenbereiche für modernisierte Standardberufsbildpositionen?",
        answersNeeded: 2,
        options: [
          { text: "Umweltschutz und Nachhaltigkeit", correct: true },
          { text: "Digitale Arbeitswelt", correct: true },
          { text: "New Work", correct: false }
        ]
      },
      {
        question: "Wer ist an der Entstehung / Gestaltung der Berufsausbildung beteiligt?",
        answersNeeded: 4,
        options: [
          { text: "Ministerium für Bildung & Forschung", correct: true },
          { text: "Ministerium für Wirtschaft", correct: true },
          { text: "Wirtschafts- und Kultusministerien der Länder", correct: true },
          { text: "Rundfunkanstalten", correct: false },
          { text: "Die Betriebe", correct: false },
          { text: "Die IHKs oder HWKs", correct: true }
        ]
      },
      {
        question: "Welche Maßnahmen zählen zur Berufsvorbereitung?",
        answersNeeded: 3,
        options: [
          { text: "Praktika", correct: true },
          { text: "Austausch mit anderen Jugendlichen", correct: false },
          { text: "Maßnahmen der Agentur für Arbeit", correct: true },
          { text: "Gespräch mit einer Lehrkraft", correct: false },
          { text: "Einstiegsqualifizierung", correct: true }
        ]
      },
      {
        question: "Welche Vorteile bietet ein betriebliches Praktikum?",
        answersNeeded: 2,
        options: [
          { text: "Das betriebliche Praktikum wird immer vergütet.", correct: false },
          { text: "Es bietet die Chance, Informationen über einen Beruf zu erhalten", correct: true },
          { text: "Mit einem betrieblichen Praktikum hat man mehr Freizeit als in der Schule.", correct: false },
          { text: "Ein Praktikum trägt zur Verbesserung der Ausbildungsreife bei.", correct: true }
        ]
      },
      {
        question: "Wie lange geht in der Regel die Einstiegsqualifizierung?",
        answersNeeded: 1,
        options: [
          { text: "3 Monate", correct: false },
          { text: "6-12 Monate", correct: true },
          { text: "1,5 Jahre", correct: false }
        ]
      },
      {
        question: "Wer trägt die Verantwortung für die Ausbildung, wenn der Ausbildende einen Ausbilder beruft?",
        answersNeeded: 1,
        options: [
          { text: "Weiterhin der Ausbildende", correct: true },
          { text: "Der Ausbilder", correct: false },
          { text: "Ausbildender und Ausbilder tragen gemeinsam die Verantwortung.", correct: false }
        ]
      },
      {
        question: "Welchen Aufgaben geht der Ausbildungsbeauftragte nach?",
        answersNeeded: 3,
        options: [
          { text: "Einstellung von neuen Auszubildenden", correct: false },
          { text: "Ansprechpartner und Bezugsperson für den Auszubildenden im Fachbereich", correct: true },
          { text: "Leistungskontrolle und Beurteilungen", correct: true },
          { text: "Durchführung von Bewerbungsgesprächen", correct: false },
          { text: "Durchführung von Lehrgesprächen oder Unterweisungen", correct: true },
          { text: "Besprechung von Berufsschulergebnissen", correct: false }
        ]
      },
      {
        question: "Welche Rechte besitzt der Betriebsrat, wenn es um die Ausbildung geht?",
        answersNeeded: 2,
        options: [
          { text: "Der Betriebsrat besitzt Beteiligungs- und Mitspracherechte bei der Einstellung, Versetzung und Kündigung von Auszubildenden.", correct: true },
          { text: "Der Betriebsrat besitzt ein Mitbestimmungsrecht bei der Erstellung des Ausbildungsplans.", correct: false },
          { text: "Der Betriebsrat besitzt ein Mitbestimmungsrecht bei der Bestellung und Abberufung von Ausbildern.", correct: true }
        ]
      },





      // ab hier handlungsfeld 2 ----------------------------------------------------------------------------------------------------





      {
        question: "Was ist der Sinn und Zweck eines Ausbildungsplans?",
        answersNeeded: 1,
        options: [
          { text: "Der Ausbildungsplan wird vom Ausbilder erstellt, um einen Überblick über den Einsatz des Auszubildenden zu bekommen. Ziel ist es den Auszubildenden in jeder Abteilung einmal einzusetzen und dabei Urlaubsvertretungen zu berücksichtigen.", correct: false },
          { text: "Der Ausbildungsplan bildet die Grundlage für die für jeden Ausbildungsvertrag vorgeschriebene individuelle Gliederung der zu vermittelnden Fähigkeiten und Kenntnisse. Das Ziel des Ausbildungsplans ist die Planung eines pädagogisch sinnvollen sowie sachlich und zeitlich korrekten Ausbildungsverlaufs.", correct: true },
          { text: "Der Ausbildungsplan bildet die Grundlage der Ausbildung und beinhaltet alle vorgesehenen Abteilungen. Das Ziel des Ausbildungsplans ist es, dass sich sowohl der Ausbilder als auch Auszubildende daran orientieren können.", correct: false }
        ]
      },
      {
        question: "Was ist der Unterschied zwischen der Zeitrichtwert- und der Zeitrahmenmethode?",
        answersNeeded: 1,
        options: [
          { text: "Bei der Zeitrichtwertmethode werden die Ausbildungsinhalte zu Inhaltsabschnitten gebündelt, dazu wird dann ein zeitlicher Richtwert in Wochen, Tagen oder Stunden vorgegeben. Bei der Zeitrahmenmethode wird die sachliche und zeitliche Gliederung in getrennten Anlagen dargestellt.", correct: true },
          { text: "Es gibt keinen Unterschied. Es handelt sich lediglich um zwei verschiedene Ausdrucksweisen.", correct: false },
          { text: "Bei der Zeitrahmenmethode werden die Ausbildungsinhalte zu Inhaltsabschnitten gebündelt, dazu wird dann ein zeitlicher Richtwert in Wochen, Tagen oder Stunden vorgegeben. Bei der Zeitrichtwertmethode wird die sachliche und zeitliche Gliederung in getrennten Anlagen dargestellt.", correct: false }
        ]
      },
      {
        question: "Kodifizierte Zusatzqualifikationen sind…",
        answersNeeded: 1,
        options: [
           { text: "…branchenspezifisch oder betriebsintern.", correct: false },
           { text: "…fest in Ausbildungsordnungen verankert.", correct: true },
           { text: "…dazu da, um besondere Kompetenzen und Fähigkeiten zu erwerben.", correct: false },
           { text: "…individuell wählbare Ausbildungsinhalte", correct: false }
      ]
      },
      {
        question: "Anhand welcher Kriterien lässt sich ein guter Lernort überprüfen?",
        answersNeeded: 4,
        options: [
          { text: "Arbeitssicherheit", correct: true },
          { text: "Verpflegung", correct: false },
          { text: "Ausstattung Arbeitsmittel", correct: true },
          { text: "Lernmöglichkeiten", correct: true },
          { text: "Nahegelegene Sanitäranlagen und Pausenräume", correct: false },
          { text: "Arbeitsaufgaben", correct: true },
          { text: "Ausstattung der Räumlichkeiten", correct: false }
      ]
      },
      {
        question: "Welche Merkmale passen zu der \"Lerninsel\"?",
        answersNeeded: 2,
        options: [
          { text: "Der Auszubildende wird in den Arbeitsprozess mit einbezogen und arbeitet in seinem Tempo mit.", correct: true },
          { text: "Der Auszubildende teilt sich einen Arbeitsplatz mit einem Kollegen.", correct: false },
          { text: "Der Auszubildende arbeitet abgeschottet von den Kollegen für sich und versucht, selbständig zu arbeiten.", correct: false },
          { text: "Die Arbeit des Auszubildenden wird kontrolliert, bevor sie in den produktiven Prozess eingeführt wird.", correct: true }
        ]
      },
            {
        question: "Was sind u. a. Aufgaben der Jugend- und Auszubildendenvertretung (JAV)?",
        answersNeeded: 2,
        options: [
          { text: "Die JAV kontrolliert, ob die geltenden Arbeitsgesetze, Unfallverhütungsvorschriften, Betriebsvereinbarungen und Tarifverträge eingehalten werden.", correct: true },
          { text: "Die JAV betreut neue Auszubildende in den ersten Tagen der Ausbildung.", correct: false },
          { text: "Die JAV ist Ansprechpartner für die Arbeitnehmer und Auszubildenden des Betriebs zum Thema Berufsbildung.", correct: true },
          { text: "Die JAV kümmert sich um die Organisation von Ständen auf Ausbildungsmessen.", correct: false }
        ]
      },
      {
        question: "Was sind die Aufgaben des Gleichstellungsbeauftragten?",
        answersNeeded: 2,
        options: [
          { text: "Förderung und Gleichstellung von Frauen und Männern", correct: true },
          { text: "Setzen sich für höhere Gehälter für Frauen ein", correct: false },
          { text: "Setzen sich dafür ein, dass es keine Diskriminierung aufgrund des Geschlechts gibt", correct: true }
        ]
      },
      {
        question: "Warum ist die Schwerbehindertenvertretung wichtig?",
        answersNeeded: 2,
        options: [
          { text: "Sie vertritt die Interessen schwerbehinderter Menschen.", correct: true },
          { text: "Sie spielt eine wichtige Rolle bei der Umsetzung von Maßnahmen zur Verbesserung der Arbeitsbedingungen und -chancen für Menschen mit Behinderungen.", correct: true },
          { text: "Sie räumt behinderten Menschen mehr Rechte ein zum Ausgleich zu ihrer Behinderung.", correct: false }
        ]
      },
      {
        question: "Was versteht man unter dem Begriff \"Lernortkooperationen\"?",
        answersNeeded: 1,
        options: [
          { text: "Die Zusammenarbeit zwischen zwei verschiedenen ausbildenden Unternehmen", correct: false },
          { text: "Die Zusammenarbeit zwischen Ausbilder und Auszubildenden", correct: false },
          { text: "Die Zusammenarbeit zwischen den an der beruflichen Bildung beteiligten Lernorten und Institutionen", correct: true }
        ]
      },
      {
        question: "Wenn der Auszubildende sowohl in der Berufsschule also auch zeitgleich im Ausbildungsbetrieb die identischen Lerninhalte lernt, spricht man auch von…?",
        answersNeeded: 1,
        options: [
          { text: "Konsens", correct: false },
          { text: "Didaktischer Parallelität", correct: true },
          { text: "Konformität", correct: false }
        ]
      },
      {
        question: "Was sind typische Kooperationsmöglichkeiten zwischen Betrieb und Berufsschule?",
        answersNeeded: 3,
        options: [
          { text: "Gemeinsame Projekte", correct: true },
          { text: "Gemeinsame Ausflüge", correct: false },
          { text: "Gesprächs- und Arbeitskreise", correct: true },
          { text: "Praktika für Berufsschullehrer", correct: true }
        ]
      },
      {
        question: "Warum ist Ausbildungsmarketing notwendig? Es ist notwendig, weil…",
        answersNeeded: 2,
        options: [
          { text: "es immer schwerer wird, gute Bewerber für die Ausbildungsplätze zu finden", correct: true },
          { text: "sich immer mehr Schüler für eine Ausbildung entscheiden", correct: false },
          { text: "erfolgreiches Ausbildungsmarketing die Attraktivität des Ausbildungsbetriebes steigern kann.", correct: true }
        ]
      },
      {
        question: "Anhand welcher Auswahlkriterien kann u. a. bewertet werden, ob ein Bewerber dem Anforderungsprofil entspricht?",
        answersNeeded: 3,
        options: [
          { text: "Wohnort", correct: true },
          { text: "Aussehen", correct: false },
          { text: "Zertifikate", correct: true },
          { text: "Religiöse Ansichten", correct: false },
          { text: "Familienstand", correct: false },
          { text: "Führerschein", correct: true }
        ]
      },
      {
        question: "Was gilt nach dem Allgemeinen Gleichbehandlungsgesetz für die Ausschreibung einer innerbetrieblichen Ausbildungsstelle?",
        answersNeeded: 1,
        options: [
          { text: "Geschlechtsneutrale Bezeichnung des Ausbildungsberufes", correct: true },
          { text: "Ausdrückliche Bevorzugung eines bestimmten Geschlechtes je nach Ausbildungsberuf", correct: false }
        ]
      },
      {
        question: "Welcher Angaben bedarf es u.a. bei einer innerbetrieblichen Ausschreibung einer Ausbildungsstelle?",
        answersNeeded: 2,
        options: [
          { text: "Ausbildungsvergütung", correct: false },
          { text: "Ausbildungsbeginn", correct: true },
          { text: "Einsatz der Fachabteilungen", correct: false },
          { text: "Form der Bewerbung", correct: true },
          { text: "Berufsschule", correct: false }
        ]
      },
      {
        question: "Welche Aussage stimmt in Bezug auf die Bewerbungsunterlagen nicht?",
        answersNeeded: 2,
        options: [
          { text: "Grundsätzlich muss der Betrieb die Bewerbungsunterlagen an den Bewerber nicht zurückgeben, wenn er an der Bewerbung kein Interesse mehr hat.", correct: true },
          { text: "Der Betrieb muss die Bewerbungsunterlagen sorgfältig behandeln und sicher aufbewahren. Dies bedeutet unter anderem, dass der Bewerber ein Recht darauf hat, seine Bewerbungsunterlagen in einwandfreiem Zustand zurückzubekommen.", correct: false },
          { text: "Die Unterlagen müssen vertraulich behandelt werden. Sie dürfen weder beliebigen Mitarbeitern oder unternehmensfremden Personen gezeigt noch an andere Unternehmen weitergeleitet werden.", correct: false },
          { text: "Alle personenbezogenen Daten des Bewerbers werden so lange gespeichert bis der Bewerber auf eine Löschung besteht.", correct: true }
        ]
      },
      {
        question: "Was sind die Bestandteile einer vollständigen Bewerbung?",
        answersNeeded: 1,
        options: [
          { text: "Bewerbungsschreiben, Lebenslauf, Zeugnisse und eventuell zusätzlich geforderte Nachweise.", correct: true },
          { text: "Bewerbungsschreiben, Bewerbungsfoto, Lebenslauf, Zeugnisse und eventuell zusätzlich geforderte Nachweise.", correct: false },
          { text: "Bewerbungsschreiben, Motivationsschreiben, Lebenslauf, Zeugnisse und eventuell zusätzlich geforderte Nachweise.", correct: false }
        ]
      },
      {
        question: "Welche Merkmale treffen auf ein Assessment-Center zu?",
        answersNeeded: 3,
        options: [
          { text: "Es wird ein Abschlussgespräch mit Auswertung durchgeführt.", correct: true },
          { text: "Ein Assessment-Center ist ein beliebtes Auswahlverfahren, das von Unternehmen jeglicher Größe durchgeführt wird.", correct: false },
          { text: "Bei einem Assessment-Center wird ausschließlich die Intelligenz eines Bewerbers überprüft.", correct: false },
          { text: "Über die Aussagekraft von Assessment-Centern herrscht Uneinigkeit, da es sich für die Teilnehmer um eine Ausnahmesituation handelt.", correct: true },
          { text: "Ein Assessment-Center ist ein schnelles und günstiges Verfahren, um den oder die richtigen Bewerber für den Betrieb zu finden.", correct: false },
          { text: "Das Assessment-Center kann Hinweise zur Ausprägung von berufsrelevanten, fachübergreifenden Schlüsselqualifikationen der Bewerber geben.", correct: true }
        ]
      },
            {
        question: "Was ist bei der Vorbereitung auf ein Vorstellungsgespräch zu beachten?",
        answersNeeded: 2,
        options: [
          { text: "Bewerbungsunterlagen auf mögliche Fragen prüfen", correct: true },
          { text: "Gesprächsraum vorbereiten", correct: true },
          { text: "möglichst spontane Fragen stellen", correct: false },
          { text: "Zeit möglichst eingrenzen", correct: false }
        ]
      },
      {
        question: "Welche Fragen sind bei einem Bewerbungsgespräch generell unzulässig?",
        answersNeeded: 3,
        options: [
          { text: "Fragen zum Alter", correct: true },
          { text: "Fragen zu Zukunftsplänen", correct: false },
          { text: "Fragen zum Familienstand", correct: true },
          { text: "Fragen zu Interessen", correct: false },
          { text: "Fragen zur Freizeitgestaltung", correct: false },
          { text: "Fragen zur Tätigkeit des Partners", correct: true },
          { text: "Fragen zur Schulzeit", correct: false }
        ]
      },
      {
        question: "Welche der folgenden Aussagen ist eine korrekte Bestimmung für Auszubildende mit Behinderungen gemäß den gesetzlichen Regelungen?",
        answersNeeded: 1,
        options: [
          { text: "Auszubildende mit Behinderungen dürfen nur in spezialisierten beruflichen Rehabilitationseinrichtungen ausgebildet werden.", correct: false },
          { text: "Schwerbehinderte Auszubildende genießen während ihrer Ausbildung keinen besonderen Kündigungsschutz.", correct: false },
          { text: "Behinderte Auszubildende haben das Recht, zur Abschlussprüfung zugelassen zu werden, auch wenn sie bestimmte Zwischenprüfungen nicht erfüllen konnten.", correct: true }
        ]
      },
      {
        question: "Welche Hilfsmittel sind zugelassene Formen des Nachteilsausgleichs für behinderte Menschen?",
        answersNeeded: 3,
        options: [
          { text: "Lesehilfen und Sprachcomputer", correct: true },
          { text: "Zeitverlängerung", correct: true },
          { text: "Zusätzliche Erläuterung zu Prüfungsaufgaben", correct: true },
          { text: "Tipps & Lösungsvorschläge", correct: false }
        ]
      },
      {
        question: "Was ist Bestandteil eines Ausbildungsvertrags?",
        answersNeeded: 1,
        options: [
          { text: "Ausbildungsziel und -inhalt, Arbeitsbedingungen, Rechte und Pflichten sowie Prüfungsvoraussetzungen.", correct: false },
          { text: "Ausbildungsziel und -inhalt, Dauer der Ausbildung, Arbeitsbedingungen, Rechte und Pflichten sowie Ausbildungsvoraussetzungen.", correct: false },
          { text: "Ausbildungsziel und -inhalt, Dauer der Ausbildung, Arbeitsbedingungen sowie das Gehalt nach Ausbildungsende.", correct: false },
          { text: "Ausbildungsziel und -inhalt, Dauer der Ausbildung, Arbeitsbedingungen sowie Rechte und Pflichten.", correct: true }
        ]
      },
      {
        question: "Welche der genannten Aussagen sind keine Pflichten eines Ausbildenden?",
        answersNeeded: 2,
        options: [
          { text: "Der Ausbildende hat dem Auszubildenden eine angemessene monatliche Ausbildungsvergütung zu zahlen, die sich jährlich um mindestens 20 Prozent erhöht.", correct: true },
          { text: "Der Ausbildende hat dem Auszubildenden vor Beginn der Berufsausbildung die Ausbildungsordnung des jeweiligen Berufs auszuhändigen.", correct: false },
          { text: "Der Ausbildende hat dem Auszubildenden für die Prüfungen die notwendigen Unterlagen zur Anmeldung zur Verfügung zu stellen, damit dieser sich anmelden kann.", correct: true },
          { text: "Der Ausbildende hat dem Auszubildenden nach Abschluss der Berufsausbildung ein betriebliches Zeugnis auszustellen.", correct: false },
          { text: "Der Ausbildende hat die schriftlichen Ausbildungsnachweise (Berichtshefte) des Auszubildenden kontrollieren.", correct: false }
        ]
      },
      {
        question: "Welche der folgenden Aussagen ist eine Pflicht eines Auszubildenden?",
        answersNeeded: 1,
        options: [
          { text: "Auszubildende müssen an allen vorgeschriebenen Ausbildungsmaßnahmen teilnehmen und die Anweisungen des Ausbildenden befolgen.", correct: true },
          { text: "Auszubildende dürfen Betriebsgeheimnisse an Dritte weitergeben, wenn diese Informationen für ihre Ausbildung relevant sind.", correct: false },
          { text: "Auszubildende sind verpflichtet, außerhalb der Arbeitszeit zusätzliche, vom Ausbildenden angeordnete Schulungen zu besuchen.", correct: false },
          { text: "Auszubildende müssen keine schriftlichen Ausbildungsnachweise führen, solange sie regelmäßig am Unterricht teilnehmen.", correct: false }
        ]
      },
      {
        question: "Welche Themen müssen in einem Ausbildungsvertrag laut § 11 BBiG mindestens vorhanden sein?",
        answersNeeded: 3,
        options: [
          { text: "Arbeitszeit", correct: true },
          { text: "Beendigung des Ausbildungsverhältnisses", correct: true },
          { text: "Prämienhöhe", correct: false },
          { text: "Beginn der Ausbildung", correct: true },
          { text: "Krankheitstage", correct: false }
        ]
      },
      {
        question: "Wie lange darf die Probezeit in der Berufsausbildung dauern?",
        answersNeeded: 1,
        options: [
          { text: "Ein bis drei Monate", correct: false },
          { text: "Zwei Wochen bis vier Monate", correct: false },
          { text: "Ein bis vier Monate", correct: true }
        ]
      },
      {
        question: "Wie oft steigt die Vergütung für Auszubildende mindestens an?",
        answersNeeded: 1,
        options: [
          { text: "Jährlich", correct: true },
          { text: "halbjährlich", correct: false },
          { text: "monatlich", correct: false },
          { text: "alle zwei Jahre", correct: false }
        ]
      },
      {
        question: "Wie wird der Urlaubsanspruch für Auszubildende bestimmt?",
        answersNeeded: 1,
        options: [
          { text: "Jugendliche unter 16 Jahren erhalten unabhängig von den Vorschriften 20 Arbeitstage Urlaub pro Jahr.", correct: false },
          { text: "Für volljährige Auszubildende beträgt der Mindesturlaubsanspruch laut Bundesurlaubsgesetz 20 Arbeitstage bei einer 5-Tage-Woche.", correct: true },
          { text: "Auszubildende dürfen ihren Urlaub nur für die Zeit der Berufsschule, nicht aber für die betriebliche Arbeitszeit einsetzen.", correct: false },
          { text: "Auszubildende unter 18 Jahren haben Anspruch auf mindestens 20 Werktage Urlaub pro Jahr.", correct: false }
        ]
      },
      {
        question: "Das Berufsausbildungsverhältnis kann folgendermaßen beendet werden …",
        answersNeeded: 3,
        options: [
          { text: "nach Ablauf der Ausbildungszeit", correct: true },
          { text: "ohne Kündigung in der Probezeit", correct: false },
          { text: "durch Kündigung nach der Probezeit", correct: true },
          { text: "mit einem Aufhebungsvertrag", correct: true }
        ]
      },
      {
        question: "Welche der folgenden Aussagen zu den Bedingungen für Kündigungen und Abmahnungen von minderjährigen Auszubildenden sind korrekt?",
        answersNeeded: 2,
        options: [
          { text: "Einem minderjährigen Auszubildenden kann ohne Zustimmung seines gesetzlichen Vertreters gekündigt werden.", correct: false },
          { text: "Kündigungen und Abmahnungen an einen minderjährigen Auszubildenden müssen dessen gesetzlichem Vertreter zugestellt werden.", correct: true },
          { text: "Der Ausbildende ist nicht verpflichtet, sicherzustellen, dass Abmahnungen und Kündigungen den gesetzlichen Vertreter des minderjährigen Auszubildenden erreichen.", correct: false },
          { text: "Wenn ein minderjähriger Auszubildender selbst kündigen möchte, bedarf es der Zustimmung und Unterschrift seines gesetzlichen Vertreters.", correct: true }
        ]
      },
      {
        question: "Welche Personengruppen genießen einen Sonderkündigungsschutz?",
        answersNeeded: 4,
        options: [
          { text: "Schwangere", correct: true },
          { text: "Auszubildende unter 18 Jahren", correct: false },
          { text: "Schwerbehinderte", correct: true },
          { text: "Leitender Angestellter", correct: false },
          { text: "Betriebsräte und Mitglieder der Jugend- und Auszubildendenvertretung", correct: true },
          { text: "Wehrdienstpflichtige", correct: true }
        ]
      },
      {
        question: "Welche der folgenden Aussagen über die ärztliche Untersuchung von Minderjährigen ist korrekt?",
        answersNeeded: 2,
        options: [
          { text: "Die Bescheinigung über die ärztliche Untersuchung ist vom Auszubildenden aufzubewahren.", correct: false },
          { text: "Die Kosten für die ärztliche Untersuchung trägt das Land.", correct: true },
          { text: "Die Nachuntersuchung gilt für unter 18 jährige Auszubildende nach dem ersten Ausbildungsjahr.", correct: true },
          { text: "Die zuständigen Kammern schreiben die ärztliche Untersuchung vor.", correct: false }
        ]
      },
      {
        question: "Welche Pflichten entstehen nach dem Vertragsabschluss?",
        answersNeeded: 1,
        options: [
          { text: "Der Auszubildende muss bei der Berufsschule angemeldet werden.", correct: true },
          { text: "Der Auszubildende muss sich die Berufsschule aussuchen.", correct: false }
        ]
      },
      {
        question: "Welche Pflichten hat der Ausbildende nach Abschluss des Berufsausbildungsvertrags unverzüglich zu erledigen?",
        answersNeeded: 2,
        options: [
          { text: "Er muss den wesentlichen Inhalt des Vertrages niederlegen.", correct: true },
          { text: "Er muss dem Auszubildenden den verantwortlichen Ausbilder benennen.", correct: false },
          { text: "Er muss dem Auszubildenden oder deren gesetzlichen Vertreter eine Abschrift des Vertrages aushändigen.", correct: true },
          { text: "Er muss dem Auszubildenden unverzüglich die notwendigen Berichtshefte zuschicken.", correct: false }
        ]
      },
            {
        question: "Welche Aussage ist bezüglich der Ausbildungsphase im Ausland falsch?",
        answersNeeded: 1,
        options: [
          { text: "Da außerbetriebliche Maßnahmen im Ausbildungsvertrag vereinbart werden müssen, gilt das auch für eine Ausbildungsphase im Ausland.", correct: false },
          { text: "Manche Zusatzqualifikationen einer Ausbildung können einen Auslandsaufenthalt im Rahmen der Ausbildungsordnung vorsehen.", correct: false },
          { text: "Das Berufsbildungsgesetz regelt, dass Teile der Ausbildung auch im Ausland durchgeführt werden können. Die Dauer des Auslandsaufenthaltes darf die Hälfte der gesamten Ausbildungsdauer nicht überschreitet.", correct: true }
        ]
      },
      {
        question: "Was zählt zu den wichtigsten Vereinbarungen hinsichtlich der Ziele und Inhalte eines Auslandsaufenthaltes?",
        answersNeeded: 3,
        options: [
          { text: "Dauer der Maßnahme", correct: true },
          { text: "Übernahme der Kosten", correct: true },
          { text: "Höhe der Ausbildungsvergütung, während des Aufenthaltes", correct: false },
          { text: "Definition der zu vermittelnden Kenntnisse und Fertigkeiten", correct: true },
          { text: "Stellung der Unterkunft", correct: false },
          { text: "Kennenlernen des Auslandsunternehmens", correct: false }
        ]
      },
      {
        question: "Welche Vorbereitungen sollten vor einem Auslandsaufenthalt eines Auszubildenden vorgenommen werden?",
        answersNeeded: 3,
        options: [
          { text: "Klärung des Versicherungsschutzes des Auszubildenden", correct: true },
          { text: "Anmeldung der Berufsschule im Ausland", correct: false },
          { text: "Kenntnisse über die Kultur im jeweiligen Land", correct: true },
          { text: "Verlängerung der Ausbildungsdauer", correct: false },
          { text: "Beschaffung von Reisedokumenten wie gültigem Reisepass", correct: true }
        ]
      },
      {
        question: "Wer zahlt den Auszubildenden während der Auslandsaufenthaltes?",
        answersNeeded: 1,
        options: [
          { text: "Der Ausbildungsbetrieb in Deutschland", correct: true },
          { text: "Der Partnerbetrieb im Ausland", correct: false }
        ]
      },
      {
        question: "Der Auszubildende hat auch während der Zeit im Ausland Berufsschulpflicht.",
        answersNeeded: 1,
        options: [
          { text: "richtig", correct: false },
          { text: "falsch", correct: true }
        ]
      },









     // Ab hier Handlungsfeld 3  ----------------------------------------------------------------------------------------------------







      {
        question: "Was bedeutet Onboarding?",
        answersNeeded: 1,
        options: [
          { text: "interaktiver Prozess zwischen Betrieb & Auszubildenden", correct: true },
          { text: "steht für ein Auszubildendenwochenende, das den Teamgeist stärkt", correct: false }
        ]
      },
      {
        question: "Was sind die Vorteile der Probezeit?",
        answersNeeded: 2,
        options: [
          { text: "Ausbildender und Auszubildender haben eine unkomplizierte Möglichkeit, das Ausbildungsverhältnis ohne Angabe von Gründen zu beenden.", correct: true },
          { text: "Der Ausbildende kann den Auszubildenden in der Probezeit fristlos kündigen und risikiert nicht Zeit und Geld an einen Auszubildenden zu verlieren, der nicht seinen Erwartungen entspricht.", correct: false },
          { text: "Der Auszubildende kann für sich prüfen, ob seine Vorstellungen hinsichtlich Berufswahl und auch der Wahl des Ausbildungsbetriebs entsprechen.", correct: true }
        ]
      },
      {
        question: "Jeder Auszubildende bringt individuelle Voraussetzungen mit.",
        answersNeeded: 1,
        options: [
          { text: "Richtig", correct: true },
          { text: "falsch", correct: false }
        ]
      },
      {
        question: "Lernen ist ein Prozess, der vor allem in der Schule stattfindet.",
        answersNeeded: 1,
        options: [
          { text: "richtig", correct: false },
          { text: "falsch", correct: true }
        ]
      },
      {
        question: "Lebenslanges Lernen ist essenziell und unabdingbar, wenn man für den Arbeitsmarkt attraktiv bleiben möchte.",
        answersNeeded: 1,
        options: [
          { text: "Richtig", correct: true },
          { text: "falsch", correct: false }
        ]
      },
      {
        question: "Emotionale Voraussetzungen der Auszubildenden sollten für die Vorbereitung keine Rolle spielen.",
        answersNeeded: 1,
        options: [
          { text: "richtig", correct: false },
          { text: "falsch", correct: true }
        ]
      },
      {
        question: "Was versteht man unter dem Begriff \"Lernkultur\"?",
        answersNeeded: 1,
        options: [
          { text: "Die Gesamtheit aller Fähigkeiten, Kenntnisse und Eigenschaften einer Organisation und ihrer Mitglieder hinsichtlich der Förderung von Lernen im Unternehmen.", correct: false },
          { text: "Die Gesamtheit aller Qualifikationen, Zertifikate und Abschlüsse einer Organisation und ihrer Mitglieder hinsichtlich der Förderung und Pflege von Lernen im Unternehmen.", correct: false },
          { text: "Die Gesamtheit aller Wertvorstellungen, Denkmuster, Handlungsweisen und Rahmenbedingungen einer Organisation und ihrer Mitglieder hinsichtlich der Förderung und Pflege von Lernen im Unternehmen.", correct: true }
        ]
      },
      {
        question: "Wozu braucht es lernförderliche organisatorische Rahmenbedingungen?",
        answersNeeded: 2,
        options: [
          { text: "Sie gewährleisten, dass die Auszubildenden strenge Disziplinarmaßnahmen erfahren.", correct: false },
          { text: "Sie ermöglichen die Schaffung einer effektiven und motivierenden Lernumgebung.", correct: true },
          { text: "Sie stellen sicher, dass die Auszubildenden ausschließlich theoretisches Wissen vermittelt bekommen.", correct: false },
          { text: "Sie sorgen dafür, dass die Auszubildenden keinen Zugang zu praktischen Übungen haben.", correct: false },
          { text: "Sie stellen sicher, dass der Lernraum organisiert ist und alle benötigten Materialien und Werkzeuge leicht zugänglich sind.", correct: true }
        ]
      },
      {
        question: "Was sind keine Vorteile von virtuellen Lernumgebungen?",
        answersNeeded: 1,
        options: [
          { text: "Lernen unabhängig von Ort & Zeit möglich", correct: false },
          { text: "Besonders effektiv bei homogenen Zielgruppen", correct: true },
          { text: "Fördern individuelle Lernprozesse", correct: false }
        ]
      },
      {
        question: "Die Leistungsfähigkeit und Leistungsbereitschaft schwankt im Laufe des Tages. In welchem Zeitraum ist in der Regel die höchste Leistungsfähigkeit zu erwarten?",
        answersNeeded: 1,
        options: [
          { text: "Zwischen 6.30 Uhr und 9.30 Uhr", correct: false },
          { text: "Zwischen 14.00 Uhr und 17.00 Uhr", correct: false },
          { text: "Zwischen 8.00 Uhr und 11.00 Uhr", correct: true },
          { text: "Zwischen 12.00 Uhr und 15.00 Uhr", correct: false }
        ]
      },
      {
        question: "Welche Aussagen, bezogen auf den Umgang mit den Auszubildenden, sind richtig?",
        answersNeeded: 2,
        options: [
          { text: "Ein kooperativer Ausbilder richtet seine Lerninhalte nach den Interessen der Auszubildenden aus.", correct: false },
          { text: "Ein kooperativer Ausbilder gibt den Auszubildenden konstruktives Feedback.", correct: true },
          { text: "Der Laissez-faire Führungsstil ist zu bevorzugen, da er die Selbstständigkeit und Eigenverantwortung der Auszubildenden fördert.", correct: false },
          { text: "Ein autoritärer Führungsstil entlastet den Ausbilder und führt zu einer höheren Motivation der Auszubildenden.", correct: false },
          { text: "Der Führungsstil des Ausbilders hat keinen Einfluss auf die Leistungsmotivation der Auszubildenden.", correct: false },
          { text: "Der Verhalten des Ausbilders ist wichtig, weil er ein Vorbild ist.", correct: true }
        ]
      },
      {
        question: "Welche Beschreibung ist kein Merkmal eines kooperativen Führungsstils?",
        answersNeeded: 2,
        options: [
          { text: "Kritik wird sachlich geäußert.", correct: false },
          { text: "Ausbilder gibt präzise Anweisungen und Befehle.", correct: true },
          { text: "Auszubildender wird gelobt und ermutigt.", correct: false },
          { text: "Ausbilder bleibt ruhig und fair gegenüber dem Auszubildenden.", correct: false },
          { text: "Auszubildender erhält nur Grundinformationen.", correct: true }
        ]
      },
      {
        question: "Wie sollte Kritik an Auszubildenden erfolgen?",
        answersNeeded: 1,
        options: [
          { text: "Die Kritik sollte sofort und lautstark erfolgen.", correct: false },
          { text: "Es sollten auf alle Fälle die Eltern des Auszubildenden herangezogen werden.", correct: false },
          { text: "Die Leistung sollte mit der Leistung anderer Jugendlicher verglichen werden.", correct: false },
          { text: "Mangelnde Leistungen und Fehlverhalten soll thematisiert werden.", correct: true }
        ]
      },
      {
        question: "Was bedeutet selbstgesteuertes Lernen?",
        answersNeeded: 1,
        options: [
          { text: "Die Auszubildenden lernen selbstbestimmt und brauchen keine Hilfe vom Ausbilder.", correct: false },
          { text: "Beim selbstgesteuerten Lernen geht es darum zu entscheiden, welche Lernsituation stärker selbst- oder stärker fremdgesteuert zu bewerten ist.", correct: true },
          { text: "Durch selbstgesteuertes Lernen ergeben sich automatisch bessere Ergebnisse.", correct: false }
        ]
      },
      {
        question: "Als Ausbilder dürfen Sie sich als…..",
        answersNeeded: 2,
        options: [
          { text: "reinen Unterweiser verstehen.", correct: false },
          { text: "Lernberater und Coach verstehen.", correct: true },
          { text: "guten Freund betrachten.", correct: false },
          { text: "Lernprozessbegleiter verstehen.", correct: true }
        ]
      },
      {
        question: "Welcher Lernstil nach Kolb zeichnet sich durch Lernen durch aktives Experimentieren und konkrete Erfahrungen aus?",
        answersNeeded: 1,
        options: [
          { text: "Akkomodierer (Macher)", correct: true },
          { text: "Divergierer (Entdecker)", correct: false },
          { text: "Assimilierer (Denker)", correct: false },
          { text: "Konvergierer (Entscheider)", correct: false }
        ]
      },
      {
        question: "Sie denken darüber nach, wie Sie für Ihre Unterweisungen am Arbeitsplatz die Behaltensquote der Auszubildenden erhöhen können. Welche Maßnahmen sind erfolgsversprechend?",
        answersNeeded: 4,
        options: [
          { text: "Sie bereiten die Lerninhalte in Form einer Mind-Map als Handout auf.", correct: false },
          { text: "Sie lassen die Lerninhalte vom Auszubildenden als Mind-Map darstellen.", correct: true },
          { text: "Sie lassen die Lerninhalte sinnvoll wiederholen.", correct: true },
          { text: "Sie veranschaulichen die Lerninhalte anhand von Beispielen.", correct: true },
          { text: "Sie vermitteln die Lerninhalte nach den didaktischen Prinzipien.", correct: true },
          { text: "Sei vermitteln die Lerninhalte kurz und bündig in Vortragsform.", correct: false }
        ]
      },
      {
        question: "Was gehört zur didaktischen Analyse?",
        answersNeeded: 3,
        options: [
          { text: "Prüfen der Rahmenbedingungen", correct: true },
          { text: "Prüfen der Vorkenntnisse", correct: true },
          { text: "Didaktische Reduktion", correct: true },
          { text: "Bewerten der Lernerfolgskontrollen", correct: false }
        ]
      },
      {
        question: "Welche der Begriffe passen zur intrinsischen Motivation?",
        answersNeeded: 4,
        options: [
          { text: "Spaß", correct: true },
          { text: "Belohnung", correct: false },
          { text: "Lob", correct: false },
          { text: "Freude", correct: true },
          { text: "Vermeiden von Strafen", correct: false },
          { text: "Leidenschaft", correct: true },
          { text: "Ehrgeiz", correct: true }
        ]
      },
      {
        question: "Welche der beiden Aussagen ist richtig?",
        answersNeeded: 1,
        options: [
          { text: "Sie müssen das Gespräch mit Ihrem Auszubildenden suchen, um seine Lerntechniken zu beurteilen und ihm helfen zu können.", correct: true },
          { text: "Als Ausbilder sind Sie verantwortlich, dem Auszubildenden mitzuteilen, welche Lerntechnik er anwenden soll. Er selbst kann das nicht wissen.", correct: false }
        ]
      },
      {
        question: "Was ist Sinn und Zweck des Kompetenzrasters?",
        answersNeeded: 2,
        options: [
          { text: "Es hilft den Auszubildenden, ihre eigenen Fähigkeiten einzuschätzen.", correct: true },
          { text: "Es hilft dem Ausbilder, die Fähigkeiten des Auszubildenden zu bewerten.", correct: false },
          { text: "Es dient als Dialogstarter für Gespräche über die Lernentwicklung.", correct: true }
        ]
      },
      {
        question: "Wozu kann ein Lernmanagementsystem (LMS) genutzt werden?",
        answersNeeded: 2,
        options: [
          { text: "um Lerninhalte bereitzustellen", correct: true },
          { text: "um digitale Kommunikation zwischen den Lernenden zu ermöglichen", correct: true },
          { text: "es hilft dabei, alle betrieblichen Prozesse in die digitale Welt zu übertragen", correct: false }
        ]
      },
      {
        question: "Welche Aussage zu Reflexionsgesprächen und Beurteilungsgesprächen ist korrekt?",
        answersNeeded: 1,
        options: [
          { text: "Bei Reflexionsgesprächen ist der Ausbilder der Beurteiler.", correct: false },
          { text: "Bei Reflexionsgesprächen sind der Ausbilder und der Auszubildende auf der gleichen Ebene.", correct: true },
          { text: "Beurteilungsgespräche ermöglichen wertvolle Erkenntnisse.", correct: false },
          { text: "Beurteilungsgespräche stärken die Kompetenz des Hin- und Zuhörens.", correct: false }
        ]
      },
      {
        question: "Wie gestalten Sie Rückmeldungen?",
        answersNeeded: 2,
        options: [
          { text: "Sie überlegen sich im Vorhinein, wie Ihre Auszubildenden reagieren werden.", correct: true },
          { text: "Fordern Sie Änderung von Ihrem Auszubildenden.", correct: false },
          { text: "Beurteilen Sie die Persönlichkeit des Auszubildenden.", correct: false },
          { text: "Überlegen Sie sich ein konkretes Ziel, das Sie mit Ihrem Feedback verfolgen.", correct: true }
        ]
      },
      {
        question: "Wann sollten Lernerfolgskontrollen durchgeführt werden?",
        answersNeeded: 2,
        options: [
          { text: "am Ende eines Ausbildungsabschnitts", correct: true },
          { text: "maximal einmal pro Woche", correct: false },
          { text: "mindestens einmal im Jahr", correct: false },
          { text: "am Ende einer Unterweisung", correct: true }
        ]
      },
      {
        question: "Wann wird beurteilt?",
        answersNeeded: 2,
        options: [
          { text: "Nach dem Ergebnis der Zwischenprüfung", correct: true },
          { text: "Vor dem Ende der Probezeit", correct: true },
          { text: "Nach jeder Unterweisung", correct: false },
          { text: "Vor der Zulassung zur Abschlussprüfung", correct: false }
        ]
      },
      {
        question: "Welche drei Beurteilungsformen unterscheidet man?",
        answersNeeded: 1,
        options: [
          { text: "Offene Beurteilung, gebundene Beurteilung, gemischte Beurteilung", correct: false },
          { text: "Freie Beurteilung, geschlossene Beurteilung, gemischte Beurteilung", correct: false },
          { text: "Freie Beurteilung, gebundene Beurteilung, gemischte Beurteilung", correct: true },
          { text: "Offene Beurteilung, geschlossene Beurteilung, gemischte Beurteilung", correct: false }
        ]
      },
      {
        question: "Was versteht man unter dem Beurteilungsfehler Halo-Effekt?",
        answersNeeded: 1,
        options: [
          { text: "Der Beurteilende lässt sich von einer beeindruckenden Eigenschaften des zu Beurteilenden blenden.", correct: true },
          { text: "Der Beurteilende nimmt den zu Beurteilenden als fleißig wahr, wird er davon ausgehen, dass der zu Beurteilende diszipliniert ist.", correct: false },
          { text: "Der Beurteilende tendiert dazu, weder sehr gut noch sehr schlecht zu bewerten.", correct: false }
        ]
      },
      {
        question: "Was müssen Sie bei der Durchführung eines Beurteilungsgesprächs beachten?",
        answersNeeded: 2,
        options: [
          { text: "Planen Sie genügend Zeit ein.", correct: true },
          { text: "Beginnen Sie mit Kritik, so können Sie mit positiven Äußerungen das Gespräch abschließen.", correct: false },
          { text: "Zeigen Sie bei Misserfolgen mögliche Lösungswege auf.", correct: true }
        ]
      },
      {
        question: "Aus welchen 4 Kompetenzen setzt sich die berufliche Handlungskompetenz zusammen?",
        answersNeeded: 4,
        options: [
          { text: "Fachkompetenz", correct: true },
          { text: "Methodenkompetenz", correct: true },
          { text: "Teamkompetenz", correct: false },
          { text: "Persönlichkeitskompetenz", correct: true },
          { text: "Sozialkompetenz", correct: true },
          { text: "Kommunikationskompetenz", correct: false }
        ]
      },
      {
        question: "Als Ausbilder wollen Sie auch die sozialen Kompetenzen Ihrer Auszubildenden fördern. Was ist damit gemeint?",
        answersNeeded: 1,
        options: [
          { text: "Die Auszubildenden sollen lernen, dass man – z. B. bei der Urlaubsbesprechung – auch Kompromisse eingehen muss.", correct: true },
          { text: "Die Auszubildenden sollten ihre Ansicht auf jeden Fall durchsetzen.", correct: false },
          { text: "Die Auszubildenden müssen analytisch denken lernen.", correct: false },
          { text: "Die Belastbarkeit des Auszubildenden sollte im Rahmen der Ausbildung gesteigert werden.", correct: false }
        ]
      },
      {
        question: "Welche Lernarten gibt es nicht?",
        answersNeeded: 2,
        options: [
          { text: "Lernen durch Verstärkung", correct: false },
          { text: "Lernen durch Druck", correct: true },
          { text: "Lernen durch Einsicht", correct: false },
          { text: "Lernen durch Spaß", correct: true }
        ]
      },
      {
        question: "Welche Aussage ist im Bezug auf das Thema Lernziele falsch?",
        answersNeeded: 1,
        options: [
          { text: "Ein Richtlernziel ist spezifisch und gibt eine genaue Richtung vor.", correct: true },
          { text: "Groblernziele sollen als Fähigkeiten oder Fertigkeiten formuliert werden, über die der Lernende nach erfolgreichem Lernprozess verfügen soll.", correct: false },
          { text: "Sowohl Richtlernziele als auch Groblernziele ergeben sich aus dem Ausbildungsrahmenplan.", correct: false }
        ]
      },
      {
        question: "Bei welchen Begriffen handelt es sich um die Klassifizierung von Lernzielen nach Lernbereichen?",
        answersNeeded: 3,
        options: [
          { text: "Kognitiver Lernbereich", correct: true },
          { text: "Effektiver Lernbereich", correct: false },
          { text: "Affektiver Lernbereich", correct: true },
          { text: "Effizienter Lernbereich", correct: false },
          { text: "Psychomotorischer Lernbereich", correct: true },
          { text: "Audiovisueller Lernbereich", correct: false }
        ]
      },
      {
        question: "Für was stehen die Anfangsbuchstaben der SMART-Formel?",
        answersNeeded: 1,
        options: [
          { text: "S-Spezifisch, M-Messbar, A-Attraktiv, R-Realistisch, T-Terminierbar", correct: true },
          { text: "S-Spezifisch, M-Messbar, A-Abwechslungsreich R-Realistisch, T-Terminierbar", correct: false },
          { text: "S-Spezifisch, M-Messbar, A-Attraktiv, R-Rational, T-Terminierbar", correct: false }
        ]
      },
      {
        question: "Was ist das Ziel von nachhaltigem Handeln?",
        answersNeeded: 3,
        options: [
          { text: "Den Generationen nach uns ein möglichst intaktes ökologisches und soziales Gefüge zu hinterlassen.", correct: true },
          { text: "Die Auswirkungen meines Konsums zu kennen.", correct: true },
          { text: "Konsum weitestgehend zu unterbinden und mich möglichst nur zu Fuß fortzubewegen.", correct: false },
          { text: "Menschen dazu befähigen, verantwortungsvolle Entscheidungen treffen zu können.", correct: true }
        ]
      },
      {
        question: "Warum braucht es Veränderungsmanagement?",
        answersNeeded: 2,
        options: [
          { text: "Weil sich der demographische Wandel, Migration, Industrie 4.0 und Digitalisierung auch auf die berufliche Bildung auswirken.", correct: true },
          { text: "Weil sonst die Gefahr besteht, dass den Mitarbeitern langweilig wird.", correct: false },
          { text: "Es ist wichtig, dass sich Betriebe an neue Herausforderungen anpassen können.", correct: true },
          { text: "Weil sich junge Auszubildende sonst nicht angesprochen fühlen.", correct: false }
        ]
      },
      {
        question: "Was sind wesentliche Bestandteile eines Unterweisungskonzeptes?",
        answersNeeded: 2,
        options: [
          { text: "Formulierung der Lernziele", correct: true },
          { text: "Auswahl der Methode", correct: true },
          { text: "Lernstand des Auszubildenden", correct: false }
        ]
      },
      {
        question: "Was sollten Sie für eine erfolgreiche Planung einer Unterweisung beachten?",
        answersNeeded: 4,
        options: [
          { text: "Zeitraum", correct: true },
          { text: "Personenzahl", correct: true },
          { text: "Nähe zu sanitären Anlagen", correct: false },
          { text: "Unterweisungsmethode", correct: true },
          { text: "Erfolgskontrolle der Unterweisung", correct: true },
          { text: "Verpflegung für die Pausen", correct: false }
        ]
      },
      {
        question: "Auf was sollte der Ausbilder bei der Durchführung eines Lehrgespräches achten?",
        answersNeeded: 3,
        options: [
          { text: "Das Sprachniveau sollte den Auszubildenden angepasst werden.", correct: true },
          { text: "Der Ausbilder sollte den Auszubildenden nach seinem Eindruck der Arbeitsweise seiner Kollegen aus der Fachabteilung fragen.", correct: false },
          { text: "Der Ausbilder sollte einen selbstbewussten und mimiklosen Gesichtszug haben, um vom Auszubildenden ernstgenommen zu werden.", correct: false },
          { text: "Der Auszubildende sollte einen Redeanteil von ca. 70 % haben.", correct: true },
          { text: "Das Gespräch sollte bereits im Vorfeld gut strukturiert werden.", correct: true }
        ]
      },
      {
        question: "Was versteht man unter der modifizierten Vier-Stufen-Methode?",
        answersNeeded: 1,
        options: [
          { text: "Die modifizierte Vier-Stufen-Methode ist die „modernere“ Variante der Vier-Stufen-Methode. Der Unterschied zur klassischen Version liegt in der Kombination der Stufen 2 \"Vormachen und Erklären\" und Stufe 3 \"Nachmachen und Erklären\".", correct: true },
          { text: "Die modifizierte Vier-Stufen-Methode ist die „modernere“ Variante der Vier-Stufen-Methode. Der Unterschied zur klassischen Version liegt in der Kombination der Stufen 1 \"Vorbereitung\" und Stufe 2 \"Vormachen und Erklären\".", correct: false },
          { text: "Die modifizierte Vier-Stufen-Methode ist die Vorgängervariante der Vier-Stufen-Methode. Der Unterschied liegt in der Dauer der Ausführung der Methode.", correct: false }
        ]
      },
      {
        question: "Was ist das Ziel der Moderationsmethode?",
        answersNeeded: 1,
        options: [
          { text: "Die Auszubildenden sammeln in der Gruppe Ideen zu einem Thema oder Projekt und diese werden unter Moderation durch den Ausbilder miteinander diskutiert und bewertet.", correct: true },
          { text: "Die Auszubildenden sammeln getrennt voneinander Ideen zu einem Thema oder Projekt und diese werden unter Moderation durch den Ausbilder miteinander diskutiert und bewertet.", correct: false },
          { text: "Die Auszubildenden und der Ausbilder sammeln gemeinsam Ideen zu einem Thema oder Projekt, präsentieren dieses und erweitern hierdurch ihr Wissen.", correct: false }
        ]
      },
      {
        question: "Welche Aussage stimmt nicht in Bezug auf die Unterweisungsmethoden?",
        answersNeeded: 1,
        options: [
          { text: "Bei darbietenden Methoden spricht der Ausbilder (aktive Rolle) und der Auszubildende hört zu (passive Rolle).", correct: false },
          { text: "Grundsätzlich gilt, dass die Effektivität einer Unterweisung hinsichtlich des Lernerfolgs steigt, je aktiver der Auszubildende beteiligt ist.", correct: false },
          { text: "Der Lernerfolg einer Unterweisung wird nicht durch die Auswahl der richtigen Unterweisungsmethode beeinflusst.", correct: true }
        ]
      },
      {
        question: "Welche Aussagen zur Leittextmethode sind korrekt?",
        answersNeeded: 2,
        options: [
          { text: "Die Leittextmethode setzt das Modell der vollständigen Handlung in die Praxis um.", correct: true },
          { text: "Die Leittextmethode ist für komplexe Projekte sinnvoll.", correct: true },
          { text: "Der Ausbilder leitet den Auszubildenden bei der selbstständigen Erarbeitung von Lernzielen an.", correct: false },
          { text: "Die Leittextmethode ist für Auszubildende schon in den ersten Ausbildungswochen geeignet.", correct: false }
        ]
      },
      {
        question: "Welche Aussagen zum Lernen durch Lehren (Ldl) sind korrekt?",
        answersNeeded: 2,
        options: [
          { text: "Die Lernenden übernehmen hier die Rolle des Lehrenden.", correct: true },
          { text: "Kommunikative Fähigkeiten spielen eine untergeordnete Rolle.", correct: false },
          { text: "Es sind nur kurze Präsentationen durch Ldl möglich.", correct: false },
          { text: "Der Lehrende wird zum Moderator oder Coach.", correct: true }
        ]
      },
      {
        question: "Welche Aussage passt nicht zu einer informellen Gruppe?",
        answersNeeded: 2,
        options: [
          { text: "Die Struktur einer informellen Gruppe wird durch eine Organisation oder äußere Vorgaben bestimmt.", correct: true },
          { text: "In einer informellen Gruppe gibt es einen Gruppenführer, ein Querulant, einen Mitläufer und einen Außenseiter.", correct: false },
          { text: "Die Ziele einer informellen Gruppe sind betrieblich vorgegeben.", correct: true },
          { text: "Informelle Gruppen prägt ein starkes Zugehörigkeitsgefühl.", correct: false }
        ]
      },
      {
        question: "Wie lautet die Reihenfolge bei den vier Entwicklungsphasen eines Teams?",
        answersNeeded: 1,
        options: [
          { text: "Orientierungsphase, Konfliktphase, Normierungsphase und zum Schluss Durchführungsphase.", correct: true },
          { text: "Konfliktphase, Orientierungsphase, Normierungsphase und zum Schluss Durchführungsphase.", correct: false },
          { text: "Konfliktphase, Normierungsphase, Orientierungsphase und zum Schluss Durchführungsphase.", correct: false }
        ]
      },
      {
        question: "Welche Aussagen zur Gruppenarbeit sind richtig?",
        answersNeeded: 2,
        options: [
          { text: "Gruppenarbeit wirkt für die Beteiligten häufig demotivierend.", correct: false },
          { text: "Es werden soziale Verhaltensweisen gefördert.", correct: true },
          { text: "Während der Gruppenarbeit steht der Ausbilder als Berater zur Verfügung.", correct: true },
          { text: "Während der Gruppenarbeit sollte der Ausbilder möglichst häufig Korrekturen vornehmen, um das gewünschte Ergebnis schnell zu erreichen.", correct: false }
        ]
      },
      {
        question: "Was ist ein hybrider Lernraum?",
        answersNeeded: 1,
        options: [
          { text: "Die Lernumgebung, die wir aus unserer Schulzeit kennen: das Klassenzimmer.", correct: false },
          { text: "Ein hybrider Lernraum kann eine digitale Lernplattform sein.", correct: false },
          { text: "Ein hybrider Lernraum verknüpft analoge und virtuelle Lernumgebungen miteinander, um Kollaboration und Kooperation zu vereinfachen.", correct: true }
        ]
      },
      {
        question: "Welche Aussagen sind korrekt?",
        answersNeeded: 4,
        options: [
          { text: "Synchrones Lernen bedeutet, dass alle zur gleichen Zeit lernen.", correct: true },
          { text: "Synchrones Lernen findet beispielsweise beim klassischen Frontalunterricht in der Schule statt.", correct: true },
          { text: "Asynchrones Lernen bedeutet, dass alle zur gleichen Zeit lernen.", correct: false },
          { text: "Beim asynchronen Lernen lernen alle zu unterschiedlichen Zeiten.", correct: true },
          { text: "Asynchrone Lernformate spielen meist bei hybriden Lernumgebungen eine Rolle.", correct: true }
        ]
      },
      {
        question: "Woran können Sie die Lernschwierigkeit „fehlende Motivation“ erkennen?",
        answersNeeded: 2,
        options: [
          { text: "Auszubildender zeigt keine Eigeninitiative.", correct: true },
          { text: "Auszubildender macht wenig Fehler.", correct: false },
          { text: "Auszubildender hat hohe Fehlzeiten.", correct: true },
          { text: "Auszubildender erfüllt die gewünschte Arbeitsleistung.", correct: false }
        ]
      },
      {
        question: "Wie können Sie Motivation fördern?",
        answersNeeded: 3,
        options: [
          { text: "Sie übertragen dem Auszubildenden mehr Verantwortung.", correct: true },
          { text: "Sie sorgen dafür, dass sich Ihr Auszubildender anerkannt fühlt.", correct: true },
          { text: "Sie gestalten die Arbeitsinhalte so, dass Ihr Auszubildender leicht überfordert ist.", correct: false },
          { text: "Sie gestalten Arbeitsinhalte, die weder unter- noch überfordern.", correct: true }
        ]
      },
      {
        question: "Wo können Sie ausbildungsbegleitende Förderung erhalten?",
        answersNeeded: 3,
        options: [
          { text: "Agentur für Arbeit", correct: true },
          { text: "Berufsschulen", correct: false },
          { text: "Jugendberufsagenturen", correct: true },
          { text: "Zuständige Stellen", correct: true },
          { text: "Jugendämter", correct: false }
        ]
      },
      {
        question: "Wie können Sie leistungsstarke Auszubildende fördern?",
        answersNeeded: 3,
        options: [
          { text: "Verkürzung der Ausbildung", correct: true },
          { text: "Weiterbildungen anbieten", correct: true },
          { text: "Längere Arbeitszeiten anbieten", correct: false },
          { text: "Vorzeitige Zulassung zur Abschlussprüfung", correct: true },
          { text: "Auszubildende ausschließlich selbstverantwortlich arbeiten lassen", correct: false }
        ]
      },
      {
        question: "Was können Ursachen negativer Verhaltensweisen sein?",
        answersNeeded: 2,
        options: [
          { text: "Der Auszubildende sehnt sich nach Akzeptanz in seinem Freundeskreis und nimmt lieber eine schlechte Note hin, als als Streber bezeichnet zu werden.", correct: true },
          { text: "Der Auszubildende ist unzufrieden, weil er nur Routinearbeiten ausführen darf.", correct: true },
          { text: "Der Ausbilder schenkt dem Auszubildenden zu viel Zeit und Anerkennung.", correct: false },
          { text: "Der Ausbilder sucht häufig das Gespräch mit dem Auszubildenden.", correct: false }
        ]
      },
      {
        question: "Welche Aussagen sind im Bezug auf typische Verhaltensauffälligkeiten falsch?",
        answersNeeded: 2,
        options: [
          { text: "Ein übertriebenes Bedürfnis nach Anerkennung spiegelt sich in Albernheit wider.", correct: false },
          { text: "Wer nachlässig ist, hat vermutlich wenig Geborgenheit erfahren.", correct: true },
          { text: "Wer zu Lügen neigt, möchte Fehlleistungen und Defizite ausgleichen.", correct: true },
          { text: "Starke innere Spannungen, Unfähigkeit mit Frustration und Konflikten umzugehen äußern sich in Aggression wieder.", correct: false }
        ]
      },
      {
        question: "Es gibt meist nur einen Grund für Verhaltensauffälligkeiten.",
        answersNeeded: 1,
        options: [
          { text: "richtig", correct: false },
          { text: "falsch", correct: true }
        ]
      },
      {
        question: "Die Ursachen von Verhaltensauffälligkeiten lassen sich als Ausbilder oft nur schwer erkennen.",
        answersNeeded: 1,
        options: [
          { text: "Richtig", correct: true },
          { text: "falsch", correct: false }
        ]
      },
      {
        question: "Viele Ursachen von Verhaltensauffälligkeiten können vom Ausbilder nicht beseitigt werden.",
        answersNeeded: 1,
        options: [
          { text: "Richtig", correct: true },
          { text: "falsch", correct: false }
        ]
      },
      {
        question: "Der Auszubildende kennt oft selbst den Grund für sein Fehlverhalten.",
        answersNeeded: 1,
        options: [
          { text: "richtig", correct: false },
          { text: "falsch", correct: true }
        ]
      },
      {
        question: "Wie können Verhaltensauffälligkeiten entgegengewirkt werden?",
        answersNeeded: 1,
        options: [
          { text: "Innerhalb einer Gruppenarbeit wird der Auszubildende durch die anderen Gruppenmitglieder in Schranken gehalten und hat gleichzeitig die Möglichkeit, sich selbst zu kontrollieren und zu regulieren.", correct: true },
          { text: "Dem Auszubildenden wird keine Verantwortung übertragen, damit er erst einmal langsam an neue Aufgabengebiete herangeführt wird und dadurch Bestärkung erhält.", correct: false },
          { text: "Rollenspiele sollten vermieden werden, damit dem Auszubildenden sein Verhalten nicht vor Augen geführt wird.", correct: false }
        ]
      },
      {
        question: "Welche Regeln sollten bei Klärung von Konflikten eingehalten werden?",
        answersNeeded: 2,
        options: [
          { text: "Die Schuldfrage sollte nicht Mittelpunkt des Gesprächs sein.", correct: true },
          { text: "Jeder sollte seine Wahrnehmung zum Konflikt schildern und sofort auf die Äußerungen des anderen eingehen, auch wenn dieser noch nicht zu Ende gesprochen hat.", correct: false },
          { text: "Gemeinsam sollte erörtert werden, auf welchen Kompromiss sich geeinigt werden kann und was jeder zur Konfliktvermeidung beitragen möchte.", correct: true },
          { text: "Das Gespräch sollte möglichst sofort stattfinden, um erste Streitpunkte zu diskutieren.", correct: false }
        ]
      },
      {
        question: "Was bedeutet Diversität?",
        answersNeeded: 2,
        options: [
          { text: "Diversität bedeutet Vielfalt.", correct: true },
          { text: "Diversität bedeutet, zu verstehen, dass jeder Mensch einzigartig und wertvoll ist.", correct: true },
          { text: "Bei Diversität geht es hauptsächlich um den ethnischen Hintergrund.", correct: false },
          { text: "Bei Diversität ist das Thema Alter ausgeschlossen.", correct: false }
        ]
      },
      {
        question: "Welchen Stellenwert nimmt Interkulturalität in der Ausbildung ein?",
        answersNeeded: 1,
        options: [
          { text: "Die Integration von Auszubildenden mit ausländischen Wurzeln in der betrieblichen Ausbildung und dem deutschen Arbeitsmarkt.", correct: true },
          { text: "Die Gleichbehandlung der Auszubildenden.", correct: false },
          { text: "Das Einstellen von Auszubildenden ausländischer Herkunft.", correct: false }
        ]
      },
      {
        question: "Welche Eigenschaften zählen zur interkulturellen Kompetenz?",
        answersNeeded: 2,
        options: [
          { text: "Zurückhaltung gegenüber Unbekanntem", correct: false },
          { text: "Relativierung und kritische Überprüfung der eigenen Sichtweise", correct: true },
          { text: "Neugier und Interesse gegenüber fremden Kulturen.", correct: true },
          { text: "Distanz gegenüber Andersartigkeit.", correct: false }
        ]
      },
      {
        question: "Welche Chancen bietet die Integration ausländischer Auszubildender?",
        answersNeeded: 1,
        options: [
          { text: "Die Belegschaft wird etwas aufgemischt, was dem Team zugutekommt.", correct: false },
          { text: "Da eine bestimmte Quote an ausländischen Arbeitnehmern vorhanden sein muss, wird bereits bei der Einstellung von Auszubildenden eine Grundlage für die spätere Übernahme geschaffen.", correct: false },
          { text: "Ausländische Auszubildende bringen Fremdsprach- und Kulturkenntnisse mit, welche oft bei erfolgreichen Geschäftsbeziehungen entscheidend sind. Dies kann zur Aufrechterhaltung und den Ausbau von Geschäftsbeziehungen zu ausländischen Partnern genutzt werden.", correct: true }
        ]
      }, 
      



      // Hier noch 4 --------------------------------------------------------------------------------------------------------




      {
        question: "Welche Aussagen zur Abschlussprüfung sind korrekt?",
        answersNeeded: 2,
        options: [
          { text: "In der Abschlussprüfung wird überprüft, ob der Auszubildende die berufliche Handlungsfähigkeit für seinen Beruf erworben hat.", correct: true },
          { text: "Die Basis der Inhalte der Abschlussprüfung bildet der Ausbildungsrahmenplan. Ein Bestehen der Abschlussprüfung gilt als Nachweis, dass der Auszubildende die Ausbildung mit all ihren Anforderungen erfolgreich abgeschlossen hat.", correct: true },
          { text: "Die Abschlussprüfung wird anhand der Schulnoten 1 bis 6 bewertet.", correct: false },
          { text: "Die Prüfung gilt als bestanden, wenn mindestens 70% der Punkte erreicht wurden.", correct: false }
        ]
      },
      {
        question: "Welche Aussagen zur klassischen und gestreckten Abschlussprüfung sind korrekt?",
        answersNeeded: 2,
        options: [
          { text: "Die gestreckte Abschlussprüfung findet überwiegend bei kaufmännischen Berufen statt.", correct: false },
          { text: "Bei der gestreckten Abschlussprüfung gibt es keine Zwischenprüfung.", correct: true },
          { text: "Die klassische Abschlussprüfung findet gegen Ende der Ausbildungszeit statt und besteht aus einem schriftlichen und aus einem mündlichen Prüfungsteil.", correct: true },
          { text: "Die gestreckte Abschlussprüfung findet immer nach Ende des zweiten Ausbildungsjahres statt.", correct: false },
          { text: "Welche Prüfungsstruktur angewandt wird, legt die zuständige Kammer fest.", correct: false }
        ]
      },
      {
        question: "Wie kann eine erfolgreiche Prüfungsvorbereitung beispielsweise gefördert werden?",
        answersNeeded: 2,
        options: [
          { text: "Tests mit Arbeitsproben", correct: true },
          { text: "Erkundungsaufträge im Betrieb durchführen", correct: false },
          { text: "Reduzierung der Arbeitszeit im Betrieb", correct: true },
          { text: "Anwendung des Laissez-faire Führungsstils", correct: false }
        ]
      },
            {
        question: "Welche Aussage zur Verhinderung am Prüfungstag ist korrekt?",
        answersNeeded: 1,
        options: [
          { text: "Die zuständige Kammer muss über die Nichtteilnahme nicht informiert werden.", correct: false },
          { text: "Bei Verhinderung durch einen Unfall braucht es keinen Beweis.", correct: false },
          { text: "Auszubildender muss sich für die Wiederholungsprüfung selbst anmelden.", correct: false },
          { text: "Bei Krankheit muss ein ärztliches Attest vorgelegt werden.", correct: true }
        ]
      },
      {
        question: "Was ist keine Zulassungsvoraussetzung zur klassischen Abschlussprüfung?",
        answersNeeded: 1,
        options: [
          { text: "Teilnahme an der Zwischenprüfung", correct: false },
          { text: "Ausbildungsverhältnis wurde bei der zuständigen Stelle in das Verzeichnis der Berufsausbildungsverhältnisse eingetragen.", correct: false },
          { text: "Nachweis der praktischen Berufsausbildung in Form von schriftlichen Ausbildungsnachweisen gegenüber der zuständigen Stelle", correct: false },
          { text: "Ableistung der vorgeschriebenen Ausbildungszeit", correct: false },
          { text: "Erreichung von mindestens 60 Punkten in der Zwischenprüfung", correct: true }
        ]
      },
      {
        question: "Was passiert, wenn der Auszubildende durch entschuldigtes Verhalten nicht an Teil 1 der gestreckten Abschlussprüfung teilnehmen konnte?",
        answersNeeded: 1,
        options: [
          { text: "Beide Prüfungsteile müssen zusammen abgelegt werden.", correct: true },
          { text: "Der Auszubildende muss das letzte Ausbildungsjahr wiederholen.", correct: false },
          { text: "Der Berufsabschluss gilt als nicht erreicht.", correct: false },
          { text: "Der Auszubildende muss Teil 1 nicht ablegen.", correct: false }
        ]
      },
      {
        question: "Welche Aussagen zur Prüfungsanmeldung sind korrekt?",
        answersNeeded: 2,
        options: [
          { text: "Der Ausbildende ist dazu verpflichtet, den Auszubildenden rechtzeitig zur Abschlussprüfung anzumelden.", correct: true },
          { text: "Falls der Ausbildende seiner Anmeldungspflicht nicht nachkommt, wird der Auszubildende nicht zur Prüfung zugelassen.", correct: false },
          { text: "Die Prüfungstermine und Anmeldefristen sind der Ausbildungsordnung zu entnehmen.", correct: false },
          { text: "Bei der Prüfungsanmeldung soll der Ausbildungsbetrieb Angaben über den Verlauf der Ausbildung machen.", correct: true }
        ]
      },
            {
        question: "Welche Zeugnisse erhält der Auszubildende bei Ausbildungsende?",
        answersNeeded: 3,
        options: [
          { text: "das Prüfungszeugnis", correct: true },
          { text: "das Berufsschulzeugnis", correct: true },
          { text: "das betriebliche Ausbildungszeugnis", correct: true },
          { text: "das betriebliche Führungszeugnis", correct: false },
          { text: "den Ausbildungsnachweis", correct: false }
        ]
      },
      {
        question: "Welche Aussagen in Bezug zum Berufsschulabschluss sind korrekt?",
        answersNeeded: 2,
        options: [
          { text: "Ein Berufsschulabschluss ist Zulassungsvoraussetzung zur Abschlussprüfung.", correct: false },
          { text: "Bei einem nicht geschafften Schulabschluss bekommt der Auszubildende ein Abgangszeugnis.", correct: true },
          { text: "Ein Berufsabschluss vor der zuständigen Stelle kann ohne Berufsschulabschluss erworben werden.", correct: true },
          { text: "Ein nicht geschaffter Berufsschulabschluss führt für den Auszubildenden zu keinen Nachteilen.", correct: false }
        ]
      },
      {
        question: "Welche Grundsätze müssen beim Ausbildungszeugnis unter anderem beachtet werden?",
        answersNeeded: 4,
        options: [
          { text: "Es muss sauber, ordentlich, fehlerfrei und maschinell geschrieben sein.", correct: true },
          { text: "Die Erstellung muss so rechtzeitig erfolgen, dass es am Tag der Beendigung der Ausbildung ausgehändigt werden kann.", correct: true },
          { text: "Die Tätigkeiten, die der Auszubildende ausgeübt hat, müssen so beschrieben werden, dass sich der künftige Arbeitgeber ein klares Bild davon machen kann.", correct: true },
          { text: "Das Zeugnis soll von „verständigem Wohlwollen“ getragen sein.", correct: true },
          { text: "Das Zeugnis muss immer nur vom Ausbildenden unterschrieben werden.", correct: false },
          { text: "Falls der Auszubildende in Elternzeit war, muss dies im Zeugnis erwähnt werden.", correct: false }
        ]
      },
      {
        question: "Wobei handelt es sich um verbotene Bestandteile im Zeugnis?",
        answersNeeded: 3,
        options: [
          { text: "Angaben zur Kündigung", correct: true },
          { text: "Angaben zur Elternzeit", correct: true },
          { text: "Noten", correct: false },
          { text: "Private Details", correct: true }
        ]
      },
      {
        question: "Der Auszubildende ist nach seiner Ausbildung automatisch in einem unbefristeten Arbeitsverhältnis, wenn der Betrieb ihn weiter beschäftigt.",
        answersNeeded: 1,
        options: [
          { text: "Richtig", correct: true },
          { text: "falsch", correct: false }
        ]
      },
      {
        question: "Der Auszubildende darf nach bestandener Prüfung noch im Betrieb arbeiten, hieraus begründet sich kein unbefristeter Vertrag.",
        answersNeeded: 1,
        options: [
          { text: "richtig", correct: false },
          { text: "falsch", correct: true }
        ]
      },
      {
        question: "Auszubildende, die Mitglied der JAV sind, werden nicht übernommen.",
        answersNeeded: 1,
        options: [
          { text: "richtig", correct: false },
          { text: "falsch", correct: true }
        ]
      },
      {
        question: "Was ist eine Aufstiegsweiterbildung?",
        answersNeeded: 1,
        options: [
          { text: "Eine Aufstiegsweiterbildung führt zu einem Abschluss der Weiterbildungsebene wie beispielsweise Meister, Fachwirt oder Betriebswirt.", correct: true },
          { text: "Durch eine Aufstiegsweiterbildung können Kenntnisse über aktuelle Entwicklungen und Änderungen erlernt werden.", correct: false },
          { text: "Eine Aufstiegsweiterbildung ist eine betriebsinterne Schulung, die zu einer höheren Position führt.", correct: false }
        ]
      },
            {
        question: "Warum wurden die neuen Bezeichnungen Bachelor-Professional und Master-Professional eingeführt?",
        answersNeeded: 2,
        options: [
          { text: "Sie sollen die Gleichwertigkeit von beruflicher und akademischer Bildung zum Ausdruck bringen.", correct: true },
          { text: "Sie sollen Mobilität von Fachkräften unterstützen.", correct: true },
          { text: "Sie zeigen, dass sich frühere Fachwirt oder Betriebswirtabschlüsse nicht von einem akademischen Studium mit Bachelor-Abschluss unterscheiden.", correct: false }
        ]
      },
      {
        question: "Was ist der Zweck des Deutschen Qualifikationsrahmens (DQR)?",
        answersNeeded: 1,
        options: [
          { text: "Die Einstufung von Berufs-, Fortbildungs- und Hochschulabschlüssen in ein nationales Stufenmodell, das nur innerhalb Deutschlands Gültigkeit besitzt.", correct: false },
          { text: "Die Zuordnung von Berufs-, Fortbildungs- und Hochschulabschlüssen zu einem übersichtlichen, europaweit gültigen Stufenmodell, um Transparenz über Landesgrenzen hinweg zu schaffen und die Mobilität von Arbeitnehmerinnen und Arbeitnehmern in Europa zu fördern.", correct: true },
          { text: "Die Festlegung von Gehaltsstufen für Berufsabschlüsse in Deutschland. Die Bewertung und Anerkennung außereuropäischer Bildungsabschlüsse in Deutschland.", correct: false }
        ]
      },
      {
        question: "Welche der folgenden Gründe können eine Person zu einer Umschulung bewegen?",
        answersNeeded: 2,
        options: [
          { text: "Der Wunsch, in demselben Beruf ohne Veränderung weiterzuarbeiten. Arbeitsunzufriedenheit oder die Notwendigkeit einer beruflichen Neuorientierung aufgrund von Veränderungen im Berufsfeld.", correct: true },
          { text: "Die Hoffnung, weniger Verantwortung im neuen Beruf übernehmen zu müssen. Berufskrankheiten oder physische bzw. psychische Erkrankungen, die die Ausübung des bisherigen Berufs verhindern.", correct: true },
          { text: "Der Wunsch, die gleiche Tätigkeit in einem anderen Unternehmen ohne Veränderung der beruflichen Richtung fortzusetzen.", correct: false }
        ]
      },
      {
        question: "Welche Aussagen in Bezug auf die Weiterbildung sind korrekt?",
        answersNeeded: 2,
        options: [
          { text: "Eine berufliche Erstausbildung reicht für die lebenslange Erwerbstätigkeit aus.", correct: false },
          { text: "Die berufliche Fortbildung ist im Berufsbildungsgesetz verankert.", correct: true },
          { text: "Das lebenslange Lernen gewinnt eine immer höhere Bedeutung.", correct: true },
          { text: "Bei einem Meisterlehrgang handelt es sich nicht um eine Weiterbildung", correct: false }
        ]
      }
      
    ];

