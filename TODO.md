# HTML Grundlagen: Positionierung im DIV

## Agenda für den Schulungsblock (1-2 Stunden)

### 1. Einführung in die Positionierung

- **Grundlagen der Positionierung**: Überblick über verschiedene Layout-Techniken in HTML/CSS.
- **Warum Positionierung wichtig ist**: Bedeutung für die Benutzererfahrung und das Design.

### 2. Flexbox Layout

- **Grundlagen der Flexbox**: Was ist Flexbox und wann sollte man es verwenden?
- **Eigenschaften von Flexbox**:
  - **`justify-content`**: Anordnung von Elementen entlang der Hauptachse.
  - **`align-items`**: Ausrichtung von Elementen entlang der Kreuzachse.
  - **`flex-direction`**: Anordnung der Flex-Elemente in verschiedenen Richtungen.
  - **`flex-wrap`**: Steuerung des Umbruchs von Flex-Elementen.
- **Praktische Beispiele**: Erstellung von Layouts mit Flexbox.
- **Übungen**: Teilnehmer erstellen eigene Flexbox-Layouts.

### 3. Grid Layout

- **Grundlagen des Grid Layouts**: Was ist Grid Layout und wann sollte man es verwenden?
- **Eigenschaften von Grid Layout**:
  - **`grid-template-rows`**: Definition der Zeilenstruktur.
  - **`grid-template-columns`**: Definition der Spaltenstruktur.
  - **`grid-template-areas`**: Benennung und Anordnung von Bereichen im Grid.
- **Praktische Beispiele**: Erstellung von Layouts mit Grid.
- **Übungen**: Teilnehmer erstellen eigene Grid-Layouts.

### 4. Weitere Positionierungstechniken

- **Fixed Positioning**: Fixierung eines Elements an einer bestimmten Position im Browserfenster.
- **Absolute Positioning**: Positionierung eines Elements relativ zum nächsten positionierten Vorfahren.
- **Relative Positioning**: Verschiebung eines Elements relativ zu seiner normalen Position.

### 5. Arbeiten mit den Developer Tools

- **Einführung in DevTools**: Überblick über die wichtigsten Funktionen.
- **Inspektion von Elementen**: Wie man HTML- und CSS-Strukturen untersucht.
- **Änderungen in Echtzeit**: Anpassung von CSS-Eigenschaften direkt im Browser.
- **Layout-Debugging**: Verwendung von Tools zur Analyse und Korrektur von Layout-Problemen.

### 6. Praktische Übungen und Beispiele

- **Interaktives Arbeiten**: Teilnehmer experimentieren mit verschiedenen Layout-Techniken in Live-Projekten.
- **Gemeinsame Fehlerbehebung**: Analyse und Behebung häufiger Probleme.

### 7. Fragen und Diskussion

- **Offene Fragerunde**: Beantwortung von Fragen und Diskussion von Herausforderungen.
- **Weiterführende Ressourcen**: Empfehlungen für weiterführendes Lernen und nützliche Ressourcen.

### 8. Abschluss

- **Zus - **Zusammenfassung der Inhalte**: Wiederholung der wichtigsten Punkte.
- **Abschlussfeedback**: Kurzes Feedback der Teilnehmer zur Schulung.

## Detaillierte Inhalte

### Einführung in die Positionierung

- **Theorie**: Überblick über die verschiedenen Positionierungstechniken.
- **Beispiele**: Kleine Code-Snippets, die die Grundprinzipien verdeutlichen.

### Flexbox Layout

- **`justify-content`**:

  ```css
  .container {
      display: flex;
      justify-content: center; /* options: flex-start, flex-end, center, space-between, space-around, space-evenly */
  }
  ```

- **`align-items`**:

  ```css
  .container {
      display: flex;
      align-items: center; /* options: flex-start, flex-end, center, baseline, stretch */
  }
  ```

- **`flex-direction`**:

  ```css
  .container {
      display: flex;
      flex-direction: row; /* options: row, row-reverse, column, column-reverse */
  }
  ```

- **`flex-wrap`**:

  ```css
  .container {
      display: flex;
      flex-wrap: wrap; /* options: nowrap, wrap, wrap-reverse */
  }
  ```

### Grid Layout

- **`grid-template-rows`**:

  ```css
  .container {
      display: grid;
      grid-template-rows: 100px 200px; /* Define rows with specific heights */
  }
  ```

- **`grid-template-columns`**:

  ```css
  .container {
      display: grid;
      grid-template-columns: 1fr 2fr; /* Define columns with fractional units */
  }
  ```

- **`grid-template-areas`**:

  ```css
  .container {
      display: grid;
      grid-template-areas: 
          "header header"
          "sidebar main"
          "footer footer";
  }

  .header {
      grid-area: header;
  }
  .sidebar {
      grid-area: sidebar;
  }
  .main {
      grid-area: main;
  }
  .footer {
      grid-area: footer;
  }
  ```

### Weitere Positionierungstechniken

- **Fixed Positioning**:

  ```css
  .fixed-element {
      position: fixed;
      top: 0;
      right: 0;
  }
  ```

- **Absolute Positioning**:

  ```css
  .relative-parent {
      position: relative;
  }
  .absolute-element {
      position: absolute;
      top: 10px;
      left: 20px;
  }
  ```

- **Relative Positioning**:

  ```css
  .relative-element {
      position: relative;
      top: 10px;
      left: 20px;
  }

#### Arbeiten mit den Developer Tools

- **Einführung in DevTools**:
  - **Öffnen der Developer Tools**: Rechtsklick auf die Seite und "Untersuchen" auswählen oder mit der Taste F12.
  - **Übersicht über die verschiedenen Panels**: Elemente, Konsole, Quellen, Netzwerk, etc.
- **Inspektion von Elementen**:
  - **Elemente-Panel**: HTML-Struktur und CSS-Regeln eines Elements anzeigen.
  - **Auswahl eines Elements**: Mit dem Auswahlwerkzeug ein Element auf der Seite markieren und dessen Details anzeigen.
- **Änderungen in Echtzeit**:
  - **CSS-Eigenschaften bearbeiten**: Direkt im Elemente-Panel die CSS-Eigenschaften anpassen und die Änderungen sofort auf der Seite sehen.
  - **Hinzufügen und Entfernen von Klassen**: Klassennamen hinzufügen oder entfernen, um zu sehen, wie sich das Layout ändert.
- **Layout-Debugging**:
  - **Flexbox- und Grid-Overlay**: Visualisierung der Flexbox- und Grid-Struktur durch Aktivieren der Overlays.
  - **Analyse von Layout-Problemen**: Identifizierung und Behebung von Layout-Problemen wie Überlauf und falsche Ausrichtung.

#### Praktische Übungen und Beispiele

- **Erstellen eines Flexbox-Layouts**:
  - Teilnehmer erstellen ein einfaches Layout mit Flexbox, das eine Kopfzeile, einen Hauptinhalt und eine Fußzeile enthält.
  - Anpassung der Flexbox-Eigenschaften (`justify-content`, `align-items`, `flex-direction`, `flex-wrap`).
- **Erstellen eines Grid-Layouts**:
  - Teilnehmer erstellen ein komplexeres Layout mit Grid, das eine Kopfzeile, eine Seitennavigation, einen Hauptinhalt und eine Fußzeile enthält.
  - Definition der Grid-Struktur mit `grid-template-rows`, `grid-template-columns` und `grid-template-areas`.

#### Fragen und Diskussion

- **Offene Fragerunde**:
  - Möglichkeit für Teilnehmer, Fragen zu stellen und spezifische Probleme zu diskutieren.
- **Weiterführende Ressourcen**:
  - Empfehlungen für Bücher, Online-Kurse und Tutorials zur Vertiefung der Kenntnisse in HTML und CSS.

#### Abschluss

- **Zusammenfassung der Inhalte**:
  - Wiederholung der wichtigsten Konzepte und Techniken, die in der Schulung behandelt wurden.
- **Abschlussfeedback**:
  - Kurzes Feedback der Teilnehmer zur Schulung und Vorschläge für zukünftige Schulungsthemen.

### Beispielcode

#### Flexbox-Beispiel

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .container {
      display:
