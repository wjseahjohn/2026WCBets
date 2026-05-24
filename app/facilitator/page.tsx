'use client';
import { useState, useEffect } from 'react';
import type { Match } from '@/lib/matches';

interface AppData {
  matches: Match[];
  results: Record<string, string>;
}

const BET_TYPES_SGPOOLS = [
  { value: '1x2', label: '1X2 (Win/Draw/Win)' },
  { value: 'asian_handicap', label: 'Asian Handicap' },
  { value: 'over_under', label: 'Over/Under Goals' },
  { value: 'btts', label: 'Both Teams To Score' },
  { value: 'correct_score', label: 'Correct Score' },
  { value: 'first_goal', label: 'First Goal Scorer' },
  { value: 'tournament_winner', label: 'Tournament Winner' },
  { value: 'top_scorer', label: 'Top Scorer (Golden Boot)' },
];

interface FacilitatorBet {
  id: string;
  playerName: string;
  matchId: string;
  matchLabel: string;
  betType: string;
  selection: string;
  odds: number;
  stake: number;
  potentialWin: number;
  placedOnSGPools: boolean;
  createdAt: string;
}

export default function FacilitatorPage() {
  const [adminKey, setAdminKey] = useState('');
  const [authed, setAuthed] = useState(false);
  const [data, setData] = useState<AppData | null>(null);
  const [bets, setBets] = useState<FacilitatorBet[]>([]);
  const [view, setView] = useState<'add' | 'list' | 'summary'>('list');
  const [activeGroup, setActiveGroup] = useState('A');
  const [form, setForm] = useState({ playerName: '', matchId: '', betType: '1x2', selection: '', odds: '', stake: '' });
  const [msg, setMsg] = useState('');

  const GROUPS = ['A','B','C','D','E','F','G','H','I','J','K','L'];

  useEffect(() => {
    if (authed) {
      fetch('/api/matches').then(r => r.json()).then(setData);
      const stored = localStorage.getItem('facilitator_bets');
      if (stored) setBets(JSON.parse(stored));
    }
  }, [authed]);

  function saveBets(updated: FacilitatorBet[]) {
    localStorage.setItem('facilitator_bets', JSON.stringify(updated));
    setBets(updated);
  }

  function addBet() {
    if (!form.playerName || !form.selection || !form.odds || !form.stake) { setMsg('❌ Fill all fields'); return; }
    const match = data?.matches.find(m => m.id === form.matchId);
    const odds = parseFloat(form.odds);
    const stake = parseFloat(form.stake);
    const newBet: FacilitatorBet = {
      id: `fb_${Date.now()}`,
      playerName: form.playerName.trim(),
      matchId: form.matchId,
      matchLabel: match ? `${match.homeTeam} vs ${match.awayTeam}` : (form.betType === 'tournament_winner' ? 'Tournament Winner' : form.betType === 'top_scorer' ? 'Top Scorer' : 'TBC'),
      betType: form.betType,
      selection: form.selection,
      odds,
      stake,
      potentialWin: Math.round(stake * odds * 100) / 100,
      placedOnSGPools: false,
      createdAt: new Date().toISOString(),
    };
    saveBets([...bets, newBet]);
    setForm(f => ({ ...f, selection: '', odds: '', stake: '' }));
    setMsg(`✅ Added: ${newBet.playerName} — ${newBet.selection}`);
    setTimeout(() => setMsg(''), 3000);
  }

  function togglePlaced(id: string) { saveBets(bets.map(b => b.id === id ? { ...b, placedOnSGPools: !b.placedOnSGPools } : b)); }
  function deleteBet(id: string) { if (confirm('Delete?')) saveBets(bets.filter(b => b.id !== id)); }

  function exportCSV() {
    const rows = [['Player','Match','Bet Type','Selection','Odds','Stake SGD','Potential Win','Placed'],...bets.map(b=>[b.playerName,b.matchLabel,b.betType,b.selection,b.odds,b.stake,b.potentialWin.toFixed(2),b.placedOnSGPools?'Yes':'No'])];
    const blob = new Blob([rows.map(r=>r.join(',')).join('\n')], {type:'text/csv'});
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'wc2026_bets.csv'; a.click();
  }

  const groupMatches = (g: string) => data?.matches.filter(m => m.group === g) || [];
  const unplaced = bets.filter(b => !b.placedOnSGPools);
  const placed = bets.filter(b => b.placedOnSGPools);
  const players = [...new Set(bets.map(b => b.playerName))];
  const totalStaked = placed.reduce((s,b) => s+b.stake, 0);
  const totalPotential = placed.reduce((s,b) => s+b.potentialWin, 0);
  const selectedMatch = data?.matches.find(m => m.id === form.matchId);

  if (!authed) return (
    <div className="min-h-screen pitch-bg flex items-center justify-center p-4">
      <div className="card p-8 max-w-sm w-full text-center" style={{ border: '1px solid rgba(245,200,66,0.3)' }}>
        <div className="text-5xl mb-4">📋</div>
        <h1 className="font-display text-3xl text-gold mb-2 tracking-wider">FACILITATOR</h1>
        <p className="text-chalk-dim text-sm mb-6">For the person placing bets on SGPools</p>
        <input type="password" placeholder="Admin key..." value={adminKey}
          onChange={e => setAdminKey(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter' && adminKey) setAuthed(true); }}
          className="w-full px-4 py-3 rounded-lg text-pitch mb-4 text-center" style={{ background: 'var(--chalk)' }} autoFocus />
        <button onClick={() => { if (adminKey) setAuthed(true); }}
          className="w-full py-3 rounded-lg font-display text-xl tracking-wider" style={{ background: 'var(--gold)', color: 'var(--pitch)' }}>
          ENTER
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pitch-bg pb-16">
      <header className="sticky top-0 z-40" style={{ background: 'rgba(7,31,16,0.95)', borderBottom: '1px solid rgba(245,200,66,0.2)', backdropFilter: 'blur(12px)' }}>
        <div className="max-w-3xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h1 className="font-display text-xl text-gold tracking-wider">📋 FACILITATOR PANEL</h1>
              <p className="text-xs text-chalk-dim">Track bets → place on SGPools</p>
            </div>
            <div className="flex gap-2">
              <button onClick={exportCSV} className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-white/20 text-chalk-dim hover:text-chalk">📥 CSV</button>
              <a href="/" className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-white/20 text-chalk-dim hover:text-chalk">← App</a>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2 mb-2">
            {[
              { label: 'To Place', val: unplaced.length, color: 'var(--amber)' },
              { label: 'Placed', val: placed.length, color: '#4ade80' },
              { label: 'Staked $', val: `$${totalStaked.toFixed(0)}`, color: '#4ade80' },
              { label: 'Potential $', val: `$${totalPotential.toFixed(0)}`, color: 'var(--gold)' },
            ].map(s => (
              <div key={s.label} className="card p-2 text-center">
                <div className="font-display text-lg" style={{ color: s.color }}>{s.val}</div>
                <div className="text-xs text-chalk-dim">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            {[{id:'add',label:'➕ Add'},{id:'list',label:`📋 Bets (${bets.length})`},{id:'summary',label:'👥 Players'}].map(t => (
              <button key={t.id} onClick={() => setView(t.id as 'add'|'list'|'summary')}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${view === t.id ? 'bg-gold text-pitch' : 'text-chalk-dim hover:text-chalk'}`}>
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 pt-6">
        {msg && <div className="mb-4 p-3 rounded-xl text-sm font-semibold" style={{ background: msg.startsWith('✅') ? 'rgba(74,222,128,0.15)' : 'rgba(248,113,113,0.15)', color: msg.startsWith('✅') ? '#4ade80' : '#f87171', border: `1px solid ${msg.startsWith('✅') ? 'rgba(74,222,128,0.3)' : 'rgba(248,113,113,0.3)'}` }}>{msg}</div>}

        {view === 'add' && (
          <div className="space-y-4 animate-fade-in">
            <h2 className="font-display text-2xl text-gold tracking-wider">RECORD A BET</h2>
            <div>
              <label className="text-xs text-chalk-dim mb-1 block uppercase tracking-wider">Family Member</label>
              <input value={form.playerName} onChange={e => setForm(f=>({...f,playerName:e.target.value}))} placeholder="e.g. Dad, Mum, John..." className="w-full px-4 py-3 rounded-lg text-pitch font-semibold" style={{background:'var(--chalk)'}} />
            </div>
            <div>
              <label className="text-xs text-chalk-dim mb-1 block uppercase tracking-wider">SGPools Bet Type</label>
              <select value={form.betType} onChange={e => setForm(f=>({...f,betType:e.target.value,matchId:''}))} className="w-full px-4 py-3 rounded-lg text-pitch font-semibold" style={{background:'var(--chalk)'}}>
                {BET_TYPES_SGPOOLS.map(bt => <option key={bt.value} value={bt.value}>{bt.label}</option>)}
              </select>
            </div>
            {!['tournament_winner','top_scorer'].includes(form.betType) && (
              <div>
                <label className="text-xs text-chalk-dim mb-1 block uppercase tracking-wider">Match</label>
                <div className="flex gap-1.5 mb-2 overflow-x-auto pb-1" style={{scrollbarWidth:'none'}}>
                  {GROUPS.map(g => <button key={g} onClick={() => setActiveGroup(g)} className={`px-3 py-1 rounded-lg font-display text-sm flex-shrink-0 ${activeGroup===g?'bg-gold text-pitch':'card text-chalk-dim'}`}>{g}</button>)}
                </div>
                <select value={form.matchId} onChange={e => setForm(f=>({...f,matchId:e.target.value}))} className="w-full px-4 py-3 rounded-lg text-pitch" style={{background:'var(--chalk)'}}>
                  <option value="">Select match...</option>
                  {groupMatches(activeGroup).map(m => <option key={m.id} value={m.id}>{m.homeFlag} {m.homeTeam} vs {m.awayFlag} {m.awayTeam} · {m.date}</option>)}
                </select>
                {selectedMatch && (
                  <div className="mt-2 card p-3">
                    <p className="text-xs text-chalk-dim mb-2 font-semibold">SGPools Odds Reference:</p>
                    <div className="grid grid-cols-3 gap-2 text-center text-sm">
                      <div><div className="text-chalk-dim text-xs">{selectedMatch.homeTeam}</div><div className="font-display text-gold text-lg">{selectedMatch.odds.home}</div></div>
                      <div><div className="text-chalk-dim text-xs">Draw</div><div className="font-display text-gold text-lg">{selectedMatch.odds.draw}</div></div>
                      <div><div className="text-chalk-dim text-xs">{selectedMatch.awayTeam}</div><div className="font-display text-gold text-lg">{selectedMatch.odds.away}</div></div>
                      <div><div className="text-chalk-dim text-xs">Over 2.5</div><div className="font-display text-chalk text-base">{selectedMatch.odds.over25}</div></div>
                      <div><div className="text-chalk-dim text-xs">Under 2.5</div><div className="font-display text-chalk text-base">{selectedMatch.odds.under25}</div></div>
                      <div><div className="text-chalk-dim text-xs">BTTS Yes</div><div className="font-display text-chalk text-base">{selectedMatch.odds.bttsYes}</div></div>
                    </div>
                    {selectedMatch.odds.handicap && <div className="mt-2 text-center text-xs text-chalk-dim">Handicap {selectedMatch.odds.handicap.line}: {selectedMatch.homeTeam} {selectedMatch.odds.handicap.home} / {selectedMatch.awayTeam} {selectedMatch.odds.handicap.away}</div>}
                  </div>
                )}
              </div>
            )}
            <div>
              <label className="text-xs text-chalk-dim mb-1 block uppercase tracking-wider">Selection / Pick</label>
              <input value={form.selection} onChange={e => setForm(f=>({...f,selection:e.target.value}))}
                placeholder={form.betType==='1x2'?'e.g. Brazil Win / Draw / Morocco Win':form.betType==='asian_handicap'?'e.g. Brazil -1':form.betType==='over_under'?'e.g. Over 2.5':form.betType==='btts'?'Yes or No':form.betType==='correct_score'?'e.g. 2-1':form.betType==='first_goal'?'e.g. Mbappé (France)':form.betType==='tournament_winner'?'e.g. Brazil':'e.g. Mbappé'}
                className="w-full px-4 py-3 rounded-lg text-pitch font-semibold" style={{background:'var(--chalk)'}} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-chalk-dim mb-1 block uppercase tracking-wider">Odds (from SGPools)</label>
                <input type="number" step="0.01" value={form.odds} onChange={e => setForm(f=>({...f,odds:e.target.value}))} placeholder="e.g. 1.85" className="w-full px-4 py-3 rounded-lg text-pitch font-semibold" style={{background:'var(--chalk)'}} />
              </div>
              <div>
                <label className="text-xs text-chalk-dim mb-1 block uppercase tracking-wider">Stake (SGD $)</label>
                <input type="number" step="1" value={form.stake} onChange={e => setForm(f=>({...f,stake:e.target.value}))} placeholder="e.g. 10" className="w-full px-4 py-3 rounded-lg text-pitch font-semibold" style={{background:'var(--chalk)'}} />
              </div>
            </div>
            {form.odds && form.stake && (
              <div className="card p-3 text-center" style={{border:'1px solid rgba(245,200,66,0.3)'}}>
                <span className="text-chalk-dim">Potential payout: </span>
                <span className="font-display text-2xl text-gold">${(parseFloat(form.stake)*parseFloat(form.odds)).toFixed(2)}</span>
              </div>
            )}
            <button onClick={addBet} className="w-full py-4 rounded-xl font-display text-xl tracking-wider" style={{background:'var(--gold)',color:'var(--pitch)'}}>
              ➕ ADD BET
            </button>
          </div>
        )}

        {view === 'list' && (
          <div className="animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display text-2xl text-gold tracking-wider">ALL BETS</h2>
              {unplaced.length > 0 && <span className="text-xs px-2 py-1 rounded-full font-semibold" style={{background:'rgba(232,144,26,0.2)',color:'var(--amber)'}}>{unplaced.length} to place on SGPools</span>}
            </div>
            {bets.length === 0 ? (
              <div className="card p-8 text-center"><p className="text-chalk-dim">No bets recorded yet. Go to Add Bet!</p></div>
            ) : (
              <div className="space-y-3">
                {unplaced.length > 0 && <p className="text-xs text-amber font-semibold tracking-widest">⚠ NOT YET PLACED ON SGPOOLS</p>}
                {unplaced.map(bet => <BetCard key={bet.id} bet={bet} onToggle={togglePlaced} onDelete={deleteBet} />)}
                {placed.length > 0 && <p className="text-xs text-green-400 font-semibold tracking-widest mt-4">✓ PLACED ON SGPOOLS</p>}
                {placed.map(bet => <BetCard key={bet.id} bet={bet} onToggle={togglePlaced} onDelete={deleteBet} />)}
              </div>
            )}
          </div>
        )}

        {view === 'summary' && (
          <div className="animate-fade-in">
            <h2 className="font-display text-2xl text-gold tracking-wider mb-4">BY PLAYER</h2>
            {players.length === 0 ? <div className="card p-8 text-center"><p className="text-chalk-dim">No bets yet.</p></div> : (
              <div className="space-y-4">
                {players.map(player => {
                  const pb = bets.filter(b => b.playerName === player);
                  return (
                    <div key={player} className="card p-4" style={{border:'1px solid rgba(245,200,66,0.15)'}}>
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-display text-xl text-gold">{player}</h3>
                        <div className="text-right">
                          <div className="font-display text-lg text-green-400">${pb.reduce((s,b)=>s+b.stake,0).toFixed(2)}</div>
                          <div className="text-xs text-chalk-dim">total staked</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {pb.map(bet => (
                          <div key={bet.id} className="flex justify-between items-center text-sm p-2 rounded-lg" style={{background:'rgba(255,255,255,0.04)'}}>
                            <div>
                              <span className="text-chalk font-semibold">{bet.selection}</span>
                              <span className="text-chalk-dim text-xs ml-2">{bet.matchLabel}</span>
                            </div>
                            <div className="text-right flex-shrink-0 ml-2">
                              <div className="text-gold font-semibold text-xs">${bet.stake} @ {bet.odds}</div>
                              <div className="text-chalk-dim text-xs">→ ${bet.potentialWin.toFixed(2)}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

function BetCard({ bet, onToggle, onDelete }: { bet: FacilitatorBet; onToggle: (id:string)=>void; onDelete: (id:string)=>void }) {
  return (
    <div className={`card p-4 border ${bet.placedOnSGPools ? 'border-green-500/20' : 'border-amber/30'}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className="font-display text-base text-gold">{bet.playerName}</span>
            <span className="text-xs px-2 py-0.5 rounded-full" style={{background:'rgba(59,130,246,0.2)',color:'#60a5fa'}}>
              {BET_TYPES_SGPOOLS.find(b=>b.value===bet.betType)?.label||bet.betType}
            </span>
          </div>
          <div className="text-sm text-chalk font-semibold">{bet.selection}</div>
          <div className="text-xs text-chalk-dim">{bet.matchLabel}</div>
          <div className="flex gap-3 mt-1.5 text-xs">
            <span className="text-chalk-dim">Odds: <span className="text-gold font-semibold">{bet.odds}</span></span>
            <span className="text-chalk-dim">Stake: <span className="text-green-400 font-semibold">${bet.stake}</span></span>
            <span className="text-chalk-dim">Win: <span className="text-gold font-semibold">${bet.potentialWin.toFixed(2)}</span></span>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <button onClick={() => onDelete(bet.id)} className="text-xs text-chalk-dim hover:text-red-400">✕</button>
          <button onClick={() => onToggle(bet.id)}
            className={`px-2 py-1 rounded-lg text-xs font-semibold transition-all ${bet.placedOnSGPools ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'border border-amber/40 text-amber hover:bg-amber/10'}`}>
            {bet.placedOnSGPools ? '✓ Placed' : 'Mark Placed'}
          </button>
        </div>
      </div>
    </div>
  );
}
