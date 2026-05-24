// lib/matches.ts — Real 2026 FIFA World Cup fixtures

export interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeFlag: string;
  awayFlag: string;
  group: string;
  date: string;
  venue: string;
  odds: {
    home: number;
    draw: number;
    away: number;
    over25: number;
    under25: number;
    bttsYes: number;
    bttsNo: number;
    handicap?: { line: string; home: number; away: number };
  };
  result?: string;
}

export const GROUP_STAGE_MATCHES: Match[] = [
  // GROUP A: Mexico, South Africa, South Korea, Czechia
  { id: 'A1', homeTeam: 'Mexico', awayTeam: 'South Africa', homeFlag: '🇲🇽', awayFlag: '🇿🇦', group: 'A', date: '2026-06-11', venue: 'Estadio Azteca, Mexico City', odds: { home: 1.55, draw: 3.80, away: 6.50, over25: 2.00, under25: 1.80, bttsYes: 2.10, bttsNo: 1.70, handicap: { line: '-1', home: 2.80, away: 1.45 } } },
  { id: 'A2', homeTeam: 'South Korea', awayTeam: 'Czechia', homeFlag: '🇰🇷', awayFlag: '🇨🇿', group: 'A', date: '2026-06-11', venue: 'Estadio Akron, Guadalajara', odds: { home: 2.40, draw: 3.20, away: 3.00, over25: 1.90, under25: 1.90, bttsYes: 2.00, bttsNo: 1.80 } },
  { id: 'A3', homeTeam: 'Mexico', awayTeam: 'South Korea', homeFlag: '🇲🇽', awayFlag: '🇰🇷', group: 'A', date: '2026-06-15', venue: 'SoFi Stadium, Los Angeles', odds: { home: 2.10, draw: 3.20, away: 3.60, over25: 1.85, under25: 1.95, bttsYes: 2.00, bttsNo: 1.80 } },
  { id: 'A4', homeTeam: 'South Africa', awayTeam: 'Czechia', homeFlag: '🇿🇦', awayFlag: '🇨🇿', group: 'A', date: '2026-06-15', venue: 'Estadio BBVA, Monterrey', odds: { home: 3.20, draw: 3.10, away: 2.30, over25: 1.90, under25: 1.90, bttsYes: 2.10, bttsNo: 1.70 } },
  { id: 'A5', homeTeam: 'Mexico', awayTeam: 'Czechia', homeFlag: '🇲🇽', awayFlag: '🇨🇿', group: 'A', date: '2026-06-19', venue: 'Estadio Azteca, Mexico City', odds: { home: 1.75, draw: 3.60, away: 5.00, over25: 1.90, under25: 1.90, bttsYes: 2.05, bttsNo: 1.75 } },
  { id: 'A6', homeTeam: 'South Africa', awayTeam: 'South Korea', homeFlag: '🇿🇦', awayFlag: '🇰🇷', group: 'A', date: '2026-06-19', venue: 'Estadio Akron, Guadalajara', odds: { home: 3.80, draw: 3.20, away: 2.00, over25: 1.90, under25: 1.90, bttsYes: 2.05, bttsNo: 1.75 } },

  // GROUP B: Canada, Bosnia & Herzegovina, Qatar, Switzerland
  { id: 'B1', homeTeam: 'Canada', awayTeam: 'Bosnia & Herz.', homeFlag: '🇨🇦', awayFlag: '🇧🇦', group: 'B', date: '2026-06-12', venue: 'BMO Field, Toronto', odds: { home: 2.00, draw: 3.30, away: 3.80, over25: 1.90, under25: 1.90, bttsYes: 2.00, bttsNo: 1.80 } },
  { id: 'B2', homeTeam: 'Qatar', awayTeam: 'Switzerland', homeFlag: '🇶🇦', awayFlag: '🇨🇭', group: 'B', date: '2026-06-13', venue: "Levi's Stadium, San Jose", odds: { home: 4.50, draw: 3.50, away: 1.80, over25: 1.90, under25: 1.90, bttsYes: 2.05, bttsNo: 1.75 } },
  { id: 'B3', homeTeam: 'Canada', awayTeam: 'Qatar', homeFlag: '🇨🇦', awayFlag: '🇶🇦', group: 'B', date: '2026-06-17', venue: 'BC Place, Vancouver', odds: { home: 1.60, draw: 3.80, away: 6.00, over25: 1.90, under25: 1.90, bttsYes: 2.00, bttsNo: 1.80 } },
  { id: 'B4', homeTeam: 'Bosnia & Herz.', awayTeam: 'Switzerland', homeFlag: '🇧🇦', awayFlag: '🇨🇭', group: 'B', date: '2026-06-17', venue: 'Arrowhead Stadium, Kansas City', odds: { home: 3.20, draw: 3.20, away: 2.30, over25: 1.95, under25: 1.85, bttsYes: 2.10, bttsNo: 1.70 } },
  { id: 'B5', homeTeam: 'Canada', awayTeam: 'Switzerland', homeFlag: '🇨🇦', awayFlag: '🇨🇭', group: 'B', date: '2026-06-21', venue: 'Gillette Stadium, Boston', odds: { home: 2.70, draw: 3.20, away: 2.60, over25: 1.90, under25: 1.90, bttsYes: 2.05, bttsNo: 1.75 } },
  { id: 'B6', homeTeam: 'Bosnia & Herz.', awayTeam: 'Qatar', homeFlag: '🇧🇦', awayFlag: '🇶🇦', group: 'B', date: '2026-06-21', venue: 'Lincoln Financial Field, Philadelphia', odds: { home: 2.00, draw: 3.20, away: 3.80, over25: 1.90, under25: 1.90, bttsYes: 2.00, bttsNo: 1.80 } },

  // GROUP C: Brazil, Morocco, Haiti, Scotland
  { id: 'C1', homeTeam: 'Brazil', awayTeam: 'Morocco', homeFlag: '🇧🇷', awayFlag: '🇲🇦', group: 'C', date: '2026-06-13', venue: 'MetLife Stadium, New York', odds: { home: 1.70, draw: 3.80, away: 5.50, over25: 1.90, under25: 1.90, bttsYes: 2.05, bttsNo: 1.75, handicap: { line: '-1', home: 3.20, away: 1.38 } } },
  { id: 'C2', homeTeam: 'Haiti', awayTeam: 'Scotland', homeFlag: '🇭🇹', awayFlag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', group: 'C', date: '2026-06-13', venue: 'Gillette Stadium, Boston', odds: { home: 4.50, draw: 3.50, away: 1.80, over25: 1.90, under25: 1.90, bttsYes: 2.00, bttsNo: 1.80 } },
  { id: 'C3', homeTeam: 'Brazil', awayTeam: 'Haiti', homeFlag: '🇧🇷', awayFlag: '🇭🇹', group: 'C', date: '2026-06-17', venue: 'NRG Stadium, Houston', odds: { home: 1.15, draw: 7.00, away: 18.00, over25: 1.55, under25: 2.40, bttsYes: 2.80, bttsNo: 1.45, handicap: { line: '-3', home: 2.10, away: 1.70 } } },
  { id: 'C4', homeTeam: 'Morocco', awayTeam: 'Scotland', homeFlag: '🇲🇦', awayFlag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', group: 'C', date: '2026-06-17', venue: 'MetLife Stadium, New York', odds: { home: 2.00, draw: 3.20, away: 3.80, over25: 1.85, under25: 1.95, bttsYes: 2.00, bttsNo: 1.80 } },
  { id: 'C5', homeTeam: 'Brazil', awayTeam: 'Scotland', homeFlag: '🇧🇷', awayFlag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', group: 'C', date: '2026-06-21', venue: 'SoFi Stadium, Los Angeles', odds: { home: 1.30, draw: 5.50, away: 10.00, over25: 1.70, under25: 2.10, bttsYes: 2.30, bttsNo: 1.60 } },
  { id: 'C6', homeTeam: 'Morocco', awayTeam: 'Haiti', homeFlag: '🇲🇦', awayFlag: '🇭🇹', group: 'C', date: '2026-06-21', venue: 'Hard Rock Stadium, Miami', odds: { home: 1.45, draw: 4.00, away: 8.00, over25: 1.80, under25: 2.00, bttsYes: 2.20, bttsNo: 1.65 } },

  // GROUP D: USA, Paraguay, Australia, Türkiye
  { id: 'D1', homeTeam: 'USA', awayTeam: 'Paraguay', homeFlag: '🇺🇸', awayFlag: '🇵🇾', group: 'D', date: '2026-06-12', venue: 'SoFi Stadium, Los Angeles', odds: { home: 1.65, draw: 3.80, away: 5.50, over25: 1.90, under25: 1.90, bttsYes: 2.05, bttsNo: 1.75 } },
  { id: 'D2', homeTeam: 'Australia', awayTeam: 'Türkiye', homeFlag: '🇦🇺', awayFlag: '🇹🇷', group: 'D', date: '2026-06-13', venue: 'BC Place, Vancouver', odds: { home: 2.60, draw: 3.20, away: 2.80, over25: 1.90, under25: 1.90, bttsYes: 2.05, bttsNo: 1.75 } },
  { id: 'D3', homeTeam: 'USA', awayTeam: 'Australia', homeFlag: '🇺🇸', awayFlag: '🇦🇺', group: 'D', date: '2026-06-19', venue: 'Lumen Field, Seattle', odds: { home: 1.80, draw: 3.60, away: 4.80, over25: 1.90, under25: 1.90, bttsYes: 2.05, bttsNo: 1.75 } },
  { id: 'D4', homeTeam: 'Paraguay', awayTeam: 'Türkiye', homeFlag: '🇵🇾', awayFlag: '🇹🇷', group: 'D', date: '2026-06-19', venue: 'AT&T Stadium, Dallas', odds: { home: 2.80, draw: 3.10, away: 2.60, over25: 1.90, under25: 1.90, bttsYes: 2.10, bttsNo: 1.70 } },
  { id: 'D5', homeTeam: 'USA', awayTeam: 'Türkiye', homeFlag: '🇺🇸', awayFlag: '🇹🇷', group: 'D', date: '2026-06-23', venue: 'Mercedes-Benz Stadium, Atlanta', odds: { home: 1.90, draw: 3.50, away: 4.20, over25: 1.90, under25: 1.90, bttsYes: 2.05, bttsNo: 1.75 } },
  { id: 'D6', homeTeam: 'Paraguay', awayTeam: 'Australia', homeFlag: '🇵🇾', awayFlag: '🇦🇺', group: 'D', date: '2026-06-23', venue: 'Arrowhead Stadium, Kansas City', odds: { home: 2.50, draw: 3.20, away: 2.90, over25: 1.90, under25: 1.90, bttsYes: 2.05, bttsNo: 1.75 } },

  // GROUP E: Germany, Curaçao, Ivory Coast, Ecuador
  { id: 'E1', homeTeam: 'Germany', awayTeam: 'Curaçao', homeFlag: '🇩🇪', awayFlag: '🇨🇼', group: 'E', date: '2026-06-14', venue: 'NRG Stadium, Houston', odds: { home: 1.10, draw: 9.00, away: 25.00, over25: 1.45, under25: 2.70, bttsYes: 3.00, bttsNo: 1.40, handicap: { line: '-4', home: 2.00, away: 1.80 } } },
  { id: 'E2', homeTeam: 'Ivory Coast', awayTeam: 'Ecuador', homeFlag: '🇨🇮', awayFlag: '🇪🇨', group: 'E', date: '2026-06-14', venue: 'Lincoln Financial Field, Philadelphia', odds: { home: 2.30, draw: 3.20, away: 3.10, over25: 1.90, under25: 1.90, bttsYes: 2.05, bttsNo: 1.75 } },
  { id: 'E3', homeTeam: 'Germany', awayTeam: 'Ivory Coast', homeFlag: '🇩🇪', awayFlag: '🇨🇮', group: 'E', date: '2026-06-18', venue: 'SoFi Stadium, Los Angeles', odds: { home: 1.55, draw: 4.00, away: 6.50, over25: 1.80, under25: 2.00, bttsYes: 2.10, bttsNo: 1.70, handicap: { line: '-1', home: 2.60, away: 1.50 } } },
  { id: 'E4', homeTeam: 'Curaçao', awayTeam: 'Ecuador', homeFlag: '🇨🇼', awayFlag: '🇪🇨', group: 'E', date: '2026-06-18', venue: 'Lumen Field, Seattle', odds: { home: 6.00, draw: 4.20, away: 1.55, over25: 1.90, under25: 1.90, bttsYes: 2.00, bttsNo: 1.80 } },
  { id: 'E5', homeTeam: 'Germany', awayTeam: 'Ecuador', homeFlag: '🇩🇪', awayFlag: '🇪🇨', group: 'E', date: '2026-06-22', venue: 'MetLife Stadium, New York', odds: { home: 1.55, draw: 4.00, away: 6.50, over25: 1.80, under25: 2.00, bttsYes: 2.10, bttsNo: 1.70 } },
  { id: 'E6', homeTeam: 'Curaçao', awayTeam: 'Ivory Coast', homeFlag: '🇨🇼', awayFlag: '🇨🇮', group: 'E', date: '2026-06-22', venue: 'Hard Rock Stadium, Miami', odds: { home: 7.00, draw: 4.50, away: 1.45, over25: 1.90, under25: 1.90, bttsYes: 2.00, bttsNo: 1.80 } },

  // GROUP F: Netherlands, Japan, Sweden (UEFA PO B), Tunisia
  { id: 'F1', homeTeam: 'Netherlands', awayTeam: 'Japan', homeFlag: '🇳🇱', awayFlag: '🇯🇵', group: 'F', date: '2026-06-14', venue: 'AT&T Stadium, Dallas', odds: { home: 1.80, draw: 3.60, away: 4.80, over25: 1.90, under25: 1.90, bttsYes: 2.05, bttsNo: 1.75, handicap: { line: '-1', home: 3.20, away: 1.38 } } },
  { id: 'F2', homeTeam: 'Sweden', awayTeam: 'Tunisia', homeFlag: '🇸🇪', awayFlag: '🇹🇳', group: 'F', date: '2026-06-14', venue: 'Estadio BBVA, Monterrey', odds: { home: 1.80, draw: 3.50, away: 5.00, over25: 1.85, under25: 1.95, bttsYes: 2.00, bttsNo: 1.80 } },
  { id: 'F3', homeTeam: 'Netherlands', awayTeam: 'Sweden', homeFlag: '🇳🇱', awayFlag: '🇸🇪', group: 'F', date: '2026-06-18', venue: 'Gillette Stadium, Boston', odds: { home: 1.90, draw: 3.50, away: 4.20, over25: 1.90, under25: 1.90, bttsYes: 2.05, bttsNo: 1.75 } },
  { id: 'F4', homeTeam: 'Japan', awayTeam: 'Tunisia', homeFlag: '🇯🇵', awayFlag: '🇹🇳', group: 'F', date: '2026-06-18', venue: 'NRG Stadium, Houston', odds: { home: 1.75, draw: 3.60, away: 5.00, over25: 1.85, under25: 1.95, bttsYes: 2.00, bttsNo: 1.80 } },
  { id: 'F5', homeTeam: 'Netherlands', awayTeam: 'Tunisia', homeFlag: '🇳🇱', awayFlag: '🇹🇳', group: 'F', date: '2026-06-22', venue: 'BC Place, Vancouver', odds: { home: 1.45, draw: 4.20, away: 8.00, over25: 1.80, under25: 2.00, bttsYes: 2.20, bttsNo: 1.65 } },
  { id: 'F6', homeTeam: 'Japan', awayTeam: 'Sweden', homeFlag: '🇯🇵', awayFlag: '🇸🇪', group: 'F', date: '2026-06-22', venue: 'Lumen Field, Seattle', odds: { home: 2.60, draw: 3.20, away: 2.80, over25: 1.90, under25: 1.90, bttsYes: 2.05, bttsNo: 1.75 } },

  // GROUP G: Belgium, Egypt, Iran, New Zealand
  { id: 'G1', homeTeam: 'Belgium', awayTeam: 'Egypt', homeFlag: '🇧🇪', awayFlag: '🇪🇬', group: 'G', date: '2026-06-15', venue: 'Lumen Field, Seattle', odds: { home: 1.60, draw: 3.80, away: 6.00, over25: 1.85, under25: 1.95, bttsYes: 2.05, bttsNo: 1.75 } },
  { id: 'G2', homeTeam: 'Iran', awayTeam: 'New Zealand', homeFlag: '🇮🇷', awayFlag: '🇳🇿', group: 'G', date: '2026-06-15', venue: 'SoFi Stadium, Los Angeles', odds: { home: 1.80, draw: 3.50, away: 5.00, over25: 1.90, under25: 1.90, bttsYes: 2.00, bttsNo: 1.80 } },
  { id: 'G3', homeTeam: 'Belgium', awayTeam: 'Iran', homeFlag: '🇧🇪', awayFlag: '🇮🇷', group: 'G', date: '2026-06-19', venue: 'Estadio Azteca, Mexico City', odds: { home: 1.55, draw: 4.00, away: 6.50, over25: 1.85, under25: 1.95, bttsYes: 2.05, bttsNo: 1.75 } },
  { id: 'G4', homeTeam: 'Egypt', awayTeam: 'New Zealand', homeFlag: '🇪🇬', awayFlag: '🇳🇿', group: 'G', date: '2026-06-19', venue: 'Mercedes-Benz Stadium, Atlanta', odds: { home: 1.80, draw: 3.50, away: 5.00, over25: 1.90, under25: 1.90, bttsYes: 2.00, bttsNo: 1.80 } },
  { id: 'G5', homeTeam: 'Belgium', awayTeam: 'New Zealand', homeFlag: '🇧🇪', awayFlag: '🇳🇿', group: 'G', date: '2026-06-23', venue: 'Hard Rock Stadium, Miami', odds: { home: 1.30, draw: 5.50, away: 10.00, over25: 1.70, under25: 2.10, bttsYes: 2.30, bttsNo: 1.60 } },
  { id: 'G6', homeTeam: 'Egypt', awayTeam: 'Iran', homeFlag: '🇪🇬', awayFlag: '🇮🇷', group: 'G', date: '2026-06-23', venue: 'Arrowhead Stadium, Kansas City', odds: { home: 2.20, draw: 3.20, away: 3.30, over25: 1.90, under25: 1.90, bttsYes: 2.05, bttsNo: 1.75 } },

  // GROUP H: Spain, Cape Verde, Saudi Arabia, Uruguay
  { id: 'H1', homeTeam: 'Spain', awayTeam: 'Cape Verde', homeFlag: '🇪🇸', awayFlag: '🇨🇻', group: 'H', date: '2026-06-15', venue: 'Mercedes-Benz Stadium, Atlanta', odds: { home: 1.15, draw: 8.00, away: 20.00, over25: 1.55, under25: 2.40, bttsYes: 2.80, bttsNo: 1.45, handicap: { line: '-3', home: 1.90, away: 1.90 } } },
  { id: 'H2', homeTeam: 'Saudi Arabia', awayTeam: 'Uruguay', homeFlag: '🇸🇦', awayFlag: '🇺🇾', group: 'H', date: '2026-06-15', venue: 'Hard Rock Stadium, Miami', odds: { home: 3.60, draw: 3.20, away: 2.10, over25: 1.90, under25: 1.90, bttsYes: 2.05, bttsNo: 1.75 } },
  { id: 'H3', homeTeam: 'Spain', awayTeam: 'Saudi Arabia', homeFlag: '🇪🇸', awayFlag: '🇸🇦', group: 'H', date: '2026-06-19', venue: 'Estadio Akron, Guadalajara', odds: { home: 1.25, draw: 6.00, away: 14.00, over25: 1.65, under25: 2.20, bttsYes: 2.50, bttsNo: 1.55 } },
  { id: 'H4', homeTeam: 'Cape Verde', awayTeam: 'Uruguay', homeFlag: '🇨🇻', awayFlag: '🇺🇾', group: 'H', date: '2026-06-19', venue: 'Lumen Field, Seattle', odds: { home: 4.50, draw: 3.50, away: 1.80, over25: 1.85, under25: 1.95, bttsYes: 2.00, bttsNo: 1.80 } },
  { id: 'H5', homeTeam: 'Spain', awayTeam: 'Uruguay', homeFlag: '🇪🇸', awayFlag: '🇺🇾', group: 'H', date: '2026-06-23', venue: 'NRG Stadium, Houston', odds: { home: 1.80, draw: 3.60, away: 4.80, over25: 1.90, under25: 1.90, bttsYes: 2.05, bttsNo: 1.75 } },
  { id: 'H6', homeTeam: 'Cape Verde', awayTeam: 'Saudi Arabia', homeFlag: '🇨🇻', awayFlag: '🇸🇦', group: 'H', date: '2026-06-23', venue: 'AT&T Stadium, Dallas', odds: { home: 2.80, draw: 3.10, away: 2.60, over25: 1.90, under25: 1.90, bttsYes: 2.05, bttsNo: 1.75 } },

  // GROUP I: France, Senegal, Playoff 2, Norway
  { id: 'I1', homeTeam: 'France', awayTeam: 'Senegal', homeFlag: '🇫🇷', awayFlag: '🇸🇳', group: 'I', date: '2026-06-16', venue: 'MetLife Stadium, New York', odds: { home: 1.60, draw: 3.90, away: 6.00, over25: 1.85, under25: 1.95, bttsYes: 2.05, bttsNo: 1.75, handicap: { line: '-1', home: 2.80, away: 1.45 } } },
  { id: 'I2', homeTeam: 'FIFA PO 2', awayTeam: 'Norway', homeFlag: '🌐', awayFlag: '🇳🇴', group: 'I', date: '2026-06-16', venue: 'Gillette Stadium, Boston', odds: { home: 3.50, draw: 3.20, away: 2.10, over25: 1.90, under25: 1.90, bttsYes: 2.05, bttsNo: 1.75 } },
  { id: 'I3', homeTeam: 'France', awayTeam: 'FIFA PO 2', homeFlag: '🇫🇷', awayFlag: '🌐', group: 'I', date: '2026-06-20', venue: 'NRG Stadium, Houston', odds: { home: 1.25, draw: 6.00, away: 12.00, over25: 1.65, under25: 2.20, bttsYes: 2.40, bttsNo: 1.58 } },
  { id: 'I4', homeTeam: 'Senegal', awayTeam: 'Norway', homeFlag: '🇸🇳', awayFlag: '🇳🇴', group: 'I', date: '2026-06-20', venue: 'SoFi Stadium, Los Angeles', odds: { home: 2.60, draw: 3.20, away: 2.80, over25: 1.90, under25: 1.90, bttsYes: 2.05, bttsNo: 1.75 } },
  { id: 'I5', homeTeam: 'France', awayTeam: 'Norway', homeFlag: '🇫🇷', awayFlag: '🇳🇴', group: 'I', date: '2026-06-24', venue: 'Mercedes-Benz Stadium, Atlanta', odds: { home: 1.65, draw: 3.80, away: 5.50, over25: 1.90, under25: 1.90, bttsYes: 2.10, bttsNo: 1.70 } },
  { id: 'I6', homeTeam: 'Senegal', awayTeam: 'FIFA PO 2', homeFlag: '🇸🇳', awayFlag: '🌐', group: 'I', date: '2026-06-24', venue: 'BC Place, Vancouver', odds: { home: 1.80, draw: 3.50, away: 4.80, over25: 1.90, under25: 1.90, bttsYes: 2.00, bttsNo: 1.80 } },

  // GROUP J: Argentina, Algeria, Austria, Jordan
  { id: 'J1', homeTeam: 'Argentina', awayTeam: 'Algeria', homeFlag: '🇦🇷', awayFlag: '🇩🇿', group: 'J', date: '2026-06-16', venue: 'Arrowhead Stadium, Kansas City', odds: { home: 1.30, draw: 5.50, away: 10.00, over25: 1.70, under25: 2.10, bttsYes: 2.30, bttsNo: 1.60, handicap: { line: '-2', home: 2.20, away: 1.65 } } },
  { id: 'J2', homeTeam: 'Austria', awayTeam: 'Jordan', homeFlag: '🇦🇹', awayFlag: '🇯🇴', group: 'J', date: '2026-06-16', venue: "Levi's Stadium, San Jose", odds: { home: 1.60, draw: 3.80, away: 6.00, over25: 1.85, under25: 1.95, bttsYes: 2.00, bttsNo: 1.80 } },
  { id: 'J3', homeTeam: 'Argentina', awayTeam: 'Austria', homeFlag: '🇦🇷', awayFlag: '🇦🇹', group: 'J', date: '2026-06-20', venue: 'AT&T Stadium, Dallas', odds: { home: 1.50, draw: 4.20, away: 7.00, over25: 1.85, under25: 1.95, bttsYes: 2.10, bttsNo: 1.70 } },
  { id: 'J4', homeTeam: 'Algeria', awayTeam: 'Jordan', homeFlag: '🇩🇿', awayFlag: '🇯🇴', group: 'J', date: '2026-06-20', venue: 'Estadio Azteca, Mexico City', odds: { home: 2.10, draw: 3.20, away: 3.60, over25: 1.90, under25: 1.90, bttsYes: 2.05, bttsNo: 1.75 } },
  { id: 'J5', homeTeam: 'Argentina', awayTeam: 'Jordan', homeFlag: '🇦🇷', awayFlag: '🇯🇴', group: 'J', date: '2026-06-24', venue: 'Hard Rock Stadium, Miami', odds: { home: 1.15, draw: 8.00, away: 20.00, over25: 1.55, under25: 2.40, bttsYes: 2.80, bttsNo: 1.45 } },
  { id: 'J6', homeTeam: 'Algeria', awayTeam: 'Austria', homeFlag: '🇩🇿', awayFlag: '🇦🇹', group: 'J', date: '2026-06-24', venue: 'MetLife Stadium, New York', odds: { home: 3.20, draw: 3.20, away: 2.30, over25: 1.90, under25: 1.90, bttsYes: 2.05, bttsNo: 1.75 } },

  // GROUP K: Portugal, FIFA PO 1, Uzbekistan, Colombia
  { id: 'K1', homeTeam: 'Portugal', awayTeam: 'FIFA PO 1', homeFlag: '🇵🇹', awayFlag: '🌐', group: 'K', date: '2026-06-17', venue: 'NRG Stadium, Houston', odds: { home: 1.30, draw: 5.50, away: 10.00, over25: 1.70, under25: 2.10, bttsYes: 2.30, bttsNo: 1.60 } },
  { id: 'K2', homeTeam: 'Uzbekistan', awayTeam: 'Colombia', homeFlag: '🇺🇿', awayFlag: '🇨🇴', group: 'K', date: '2026-06-17', venue: 'Mercedes-Benz Stadium, Atlanta', odds: { home: 4.00, draw: 3.30, away: 2.00, over25: 1.90, under25: 1.90, bttsYes: 2.05, bttsNo: 1.75 } },
  { id: 'K3', homeTeam: 'Portugal', awayTeam: 'Uzbekistan', homeFlag: '🇵🇹', awayFlag: '🇺🇿', group: 'K', date: '2026-06-21', venue: 'Estadio Akron, Guadalajara', odds: { home: 1.20, draw: 7.00, away: 16.00, over25: 1.60, under25: 2.30, bttsYes: 2.60, bttsNo: 1.50 } },
  { id: 'K4', homeTeam: 'FIFA PO 1', awayTeam: 'Colombia', homeFlag: '🌐', awayFlag: '🇨🇴', group: 'K', date: '2026-06-21', venue: 'SoFi Stadium, Los Angeles', odds: { home: 3.80, draw: 3.20, away: 2.00, over25: 1.90, under25: 1.90, bttsYes: 2.00, bttsNo: 1.80 } },
  { id: 'K5', homeTeam: 'Portugal', awayTeam: 'Colombia', homeFlag: '🇵🇹', awayFlag: '🇨🇴', group: 'K', date: '2026-06-25', venue: 'Gillette Stadium, Boston', odds: { home: 1.80, draw: 3.60, away: 4.80, over25: 1.90, under25: 1.90, bttsYes: 2.10, bttsNo: 1.70 } },
  { id: 'K6', homeTeam: 'Uzbekistan', awayTeam: 'FIFA PO 1', homeFlag: '🇺🇿', awayFlag: '🌐', group: 'K', date: '2026-06-25', venue: 'Lincoln Financial Field, Philadelphia', odds: { home: 2.60, draw: 3.20, away: 2.80, over25: 1.90, under25: 1.90, bttsYes: 2.05, bttsNo: 1.75 } },

  // GROUP L: England, Croatia, Ghana, Panama
  { id: 'L1', homeTeam: 'England', awayTeam: 'Croatia', homeFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', awayFlag: '🇭🇷', group: 'L', date: '2026-06-17', venue: 'AT&T Stadium, Dallas', odds: { home: 1.80, draw: 3.60, away: 4.80, over25: 1.90, under25: 1.90, bttsYes: 2.05, bttsNo: 1.75, handicap: { line: '-1', home: 3.20, away: 1.38 } } },
  { id: 'L2', homeTeam: 'Ghana', awayTeam: 'Panama', homeFlag: '🇬🇭', awayFlag: '🇵🇦', group: 'L', date: '2026-06-17', venue: 'Estadio BBVA, Monterrey', odds: { home: 2.20, draw: 3.20, away: 3.30, over25: 1.90, under25: 1.90, bttsYes: 2.05, bttsNo: 1.75 } },
  { id: 'L3', homeTeam: 'England', awayTeam: 'Ghana', homeFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', awayFlag: '🇬🇭', group: 'L', date: '2026-06-21', venue: 'Arrowhead Stadium, Kansas City', odds: { home: 1.50, draw: 4.20, away: 7.00, over25: 1.85, under25: 1.95, bttsYes: 2.10, bttsNo: 1.70 } },
  { id: 'L4', homeTeam: 'Croatia', awayTeam: 'Panama', homeFlag: '🇭🇷', awayFlag: '🇵🇦', group: 'L', date: '2026-06-21', venue: 'BC Place, Vancouver', odds: { home: 1.65, draw: 3.80, away: 5.50, over25: 1.90, under25: 1.90, bttsYes: 2.05, bttsNo: 1.75 } },
  { id: 'L5', homeTeam: 'England', awayTeam: 'Panama', homeFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', awayFlag: '🇵🇦', group: 'L', date: '2026-06-25', venue: "Levi's Stadium, San Jose", odds: { home: 1.25, draw: 6.00, away: 14.00, over25: 1.65, under25: 2.20, bttsYes: 2.50, bttsNo: 1.55 } },
  { id: 'L6', homeTeam: 'Croatia', awayTeam: 'Ghana', homeFlag: '🇭🇷', awayFlag: '🇬🇭', group: 'L', date: '2026-06-25', venue: 'Estadio Azteca, Mexico City', odds: { home: 2.00, draw: 3.30, away: 3.80, over25: 1.90, under25: 1.90, bttsYes: 2.05, bttsNo: 1.75 } },
];

export const TOURNAMENT_WINNER_BETS = [
  { id: 'tw1', team: 'Brazil', flag: '🇧🇷', odds: 5.50 },
  { id: 'tw2', team: 'France', flag: '🇫🇷', odds: 6.00 },
  { id: 'tw3', team: 'Argentina', flag: '🇦🇷', odds: 6.50 },
  { id: 'tw4', team: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', odds: 7.00 },
  { id: 'tw5', team: 'Spain', flag: '🇪🇸', odds: 7.50 },
  { id: 'tw6', team: 'Germany', flag: '🇩🇪', odds: 8.00 },
  { id: 'tw7', team: 'Portugal', flag: '🇵🇹', odds: 10.00 },
  { id: 'tw8', team: 'Netherlands', flag: '🇳🇱', odds: 12.00 },
  { id: 'tw9', team: 'Belgium', flag: '🇧🇪', odds: 14.00 },
  { id: 'tw10', team: 'USA', flag: '🇺🇸', odds: 20.00 },
  { id: 'tw11', team: 'Morocco', flag: '🇲🇦', odds: 25.00 },
  { id: 'tw12', team: 'Colombia', flag: '🇨🇴', odds: 30.00 },
  { id: 'tw13', team: 'Japan', flag: '🇯🇵', odds: 35.00 },
  { id: 'tw14', team: 'Uruguay', flag: '🇺🇾', odds: 40.00 },
];

export const TOP_SCORER_BETS = [
  { id: 'ts1', player: 'Kylian Mbappé', team: 'France', flag: '🇫🇷', odds: 6.50 },
  { id: 'ts2', player: 'Erling Haaland', team: 'Norway', flag: '🇳🇴', odds: 8.00 },
  { id: 'ts3', player: 'Vinicius Jr', team: 'Brazil', flag: '🇧🇷', odds: 9.00 },
  { id: 'ts4', player: 'Harry Kane', team: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', odds: 10.00 },
  { id: 'ts5', player: 'Lamine Yamal', team: 'Spain', flag: '🇪🇸', odds: 12.00 },
  { id: 'ts6', player: 'Florian Wirtz', team: 'Germany', flag: '🇩🇪', odds: 13.00 },
  { id: 'ts7', player: 'Jude Bellingham', team: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', odds: 14.00 },
  { id: 'ts8', player: 'Julián Álvarez', team: 'Argentina', flag: '🇦🇷', odds: 15.00 },
  { id: 'ts9', player: 'Rafael Leão', team: 'Portugal', flag: '🇵🇹', odds: 16.00 },
  { id: 'ts10', player: 'Son Heung-min', team: 'South Korea', flag: '🇰🇷', odds: 20.00 },
  { id: 'ts11', player: 'Bukayo Saka', team: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', odds: 22.00 },
  { id: 'ts12', player: 'Achraf Hakimi', team: 'Morocco', flag: '🇲🇦', odds: 30.00 },
];
