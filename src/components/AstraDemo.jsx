import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, MessageSquare, Search, Plus, RefreshCw, ArrowDownRight, ArrowUpRight, Sparkles, Activity } from 'lucide-react';

const AstraDemo = () => {
    const [activeTab, setActiveTab] = useState('Accounts');

    // Phone container styling
    const phoneStyle = {
        width: '100%',
        maxWidth: '400px',
        height: '800px',
        backgroundColor: '#061023',
        borderRadius: '40px',
        border: '8px solid #1e293b',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255,255,255,0.1)',
        overflow: 'hidden',
        position: 'relative',
        margin: '0 auto',
        color: 'white',
        fontFamily: "'Inter', sans-serif"
    };

    return (
        <div style={phoneStyle} className="astra-phone-demo">
            {/* Top Bar Status */}
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 25px', fontSize: '14px', fontWeight: '500', opacity: 0.8 }}>
                <span>1:41</span>
                <div style={{ display: 'flex', gap: '5px' }}>
                    <span>5G</span>
                    <span style={{ color: '#2CD360' }}>79%</span>
                </div>
            </div>

            {/* Header */}
            <div style={{ padding: '0 25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                <div style={{ backgroundColor: '#13213a', padding: '10px', borderRadius: '50%' }}>
                    <Settings size={18} color="#4A9FFF" />
                </div>
                <h2 style={{ fontSize: '24px', fontWeight: '600', margin: 0, letterSpacing: '0.5px' }}>Astra</h2>
                <div style={{ backgroundColor: '#13213a', padding: '10px', borderRadius: '50%' }}>
                    <MessageSquare size={18} color="#4A9FFF" />
                </div>
            </div>

            {/* Tab Navigation */}
            <div style={{ 
                margin: '25px', 
                backgroundColor: '#111d33', 
                borderRadius: '30px', 
                display: 'flex', 
                padding: '4px',
                position: 'relative',
                overflowX: 'auto',
                scrollbarWidth: 'none'
            }}>
                {['Accounts', 'Transactions', 'Dashboard', 'Investments', 'Agents'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        style={{
                            flex: 1,
                            padding: '12px 16px',
                            borderRadius: '25px',
                            border: 'none',
                            backgroundColor: activeTab === tab ? '#4A9FFF' : 'transparent',
                            color: activeTab === tab ? '#ffffff' : '#788ba4',
                            fontWeight: '600',
                            fontSize: '13px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Main Content Area */}
            <div style={{ padding: '0 25px', height: 'calc(100% - 200px)', overflowY: 'auto', scrollbarWidth: 'none' }}>
                <AnimatePresence mode="wait">
                    {activeTab === 'Accounts' && <AccountsView key="accounts" />}
                    {activeTab === 'Transactions' && <TransactionsView key="transactions" />}
                    {activeTab === 'Dashboard' && <DashboardView key="dashboard" />}
                    {activeTab === 'Investments' && <InvestmentsView key="investments" />}
                    {activeTab === 'Agents' && <AgentsView key="agents" />}
                </AnimatePresence>
            </div>

            {/* Home Indicator */}
            <div style={{
                position: 'absolute',
                bottom: '10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '120px',
                height: '4px',
                backgroundColor: 'rgba(255,255,255,0.5)',
                borderRadius: '10px'
            }} />
        </div>
    );
};

// --- View Components ---

const AccountsView = () => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
        <div style={{ backgroundColor: '#0B1B33', borderRadius: '24px', padding: '25px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                    <h3 style={{ fontSize: '28px', fontWeight: '700', margin: '0 0 5px 0' }}>₹ 55,161.35</h3>
                    <p style={{ color: '#788ba4', fontSize: '13px', margin: 0 }}>in assets</p>
                </div>
                <div>
                    <h3 style={{ fontSize: '20px', fontWeight: '600', margin: '0 0 5px 0', opacity: 0.9 }}>₹ 0</h3>
                    <p style={{ color: '#788ba4', fontSize: '13px', margin: 0 }}>in debt</p>
                </div>
                <Settings size={18} color="#4A9FFF" style={{ opacity: 0.5 }} />
            </div>
            
            {/* Chart Graphic Mockup */}
            <div style={{ height: '120px', marginTop: '30px', position: 'relative' }}>
                <svg width="100%" height="100%" viewBox="0 0 300 100" preserveAspectRatio="none">
                    <path d="M0,30 Q100,30 150,50 T300,70" fill="none" stroke="#2CD360" strokeWidth="4" strokeLinecap="round" />
                    <circle cx="300" cy="70" r="6" fill="#2CD360" />
                    <line x1="300" y1="70" x2="300" y2="100" stroke="#2CD360" strokeWidth="2" opacity="0.3" strokeDasharray="4 4" />
                </svg>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#788ba4', fontSize: '12px', marginTop: '10px', fontWeight: '600' }}>
                <span>1W</span><span>1M</span>
                <span style={{ backgroundColor: '#13213a', padding: '4px 12px', borderRadius: '12px', color: 'white' }}>3M</span>
                <span>YTD</span><span>1Y</span>
            </div>
        </div>

        <div style={{ marginTop: '25px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <h4 style={{ fontSize: '15px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <span style={{ opacity: 0.5 }}>▲</span> Credit Cards <span style={{ color: '#788ba4', fontWeight: '400', marginLeft: '5px' }}>₹ 0.00</span>
                </h4>
                <span style={{ color: '#4A9FFF', fontSize: '14px', fontWeight: '500' }}>add &gt;</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ backgroundColor: '#6188B6', borderRadius: '20px', padding: '20px', height: '160px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <span style={{ fontWeight: '700', fontSize: '16px' }}>SBI</span>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div><span style={{ fontSize: '10px', opacity: 0.8 }}>BALANCE</span><br/>₹ 0.00</div>
                        <div><span style={{ fontSize: '10px', opacity: 0.8 }}>UTILIZED</span><br/>0.00%</div>
                    </div>
                </div>
                <div style={{ backgroundColor: '#D92D20', borderRadius: '20px', padding: '20px', height: '160px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <span style={{ fontWeight: '700', fontSize: '16px' }}>HDFC</span>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div><span style={{ fontSize: '10px', opacity: 0.8 }}>BALANCE</span><br/>₹ 0.00</div>
                        <div><span style={{ fontSize: '10px', opacity: 0.8 }}>UTILIZED</span><br/>0.00%</div>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
);

const TransactionsView = () => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
        <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ flex: 1, backgroundColor: '#0B1B33', borderRadius: '16px', padding: '12px 20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Search size={20} color="#788ba4" />
                <input type="text" placeholder="Search" style={{ background: 'transparent', border: 'none', color: 'white', outline: 'none', width: '100%', fontSize: '16px' }} readOnly/>
            </div>
            <div style={{ backgroundColor: '#0B1B33', borderRadius: '16px', padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Activity size={20} color="#788ba4" />
            </div>
        </div>

        <div style={{ border: '2px dashed #1e293b', borderRadius: '20px', padding: '20px', textAlign: 'center', marginTop: '20px', color: '#4A9FFF', fontWeight: '500', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <Plus size={18} /> Add new transaction
        </div>

        <div style={{ backgroundColor: '#0B1B33', borderRadius: '20px', padding: '16px', textAlign: 'center', marginTop: '15px', color: '#788ba4', fontWeight: '500', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <RefreshCw size={16} /> Start fresh from now
        </div>

        <div style={{ marginTop: '25px', backgroundColor: '#0B1B33', borderRadius: '24px', padding: '20px' }}>
            <h4 style={{ color: '#788ba4', margin: '0 0 15px 0', fontSize: '14px', fontWeight: '500' }}>Today</h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                    { name: 'Audible', cat: 'STREAMING', amt: '₹ 1,200' },
                    { name: 'hotstar', cat: 'STREAMING', amt: '₹ 799' },
                    { name: 'Netflix', cat: 'STREAMING', amt: '₹ 290' },
                ].map((t, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontWeight: '600', fontSize: '15px', width: '30%' }}>{t.name}</span>
                        <div style={{ backgroundColor: '#215c98', padding: '4px 12px', borderRadius: '12px', fontSize: '10px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '5px', letterSpacing: '0.5px' }}>
                            📺 {t.cat}
                        </div>
                        <span style={{ fontWeight: '600', fontSize: '15px' }}>{t.amt}</span>
                    </div>
                ))}
            </div>
        </div>
        
        <div style={{ marginTop: '15px', backgroundColor: '#0B1B33', borderRadius: '24px', padding: '20px' }}>
            <h4 style={{ color: '#788ba4', margin: '0 0 15px 0', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase' }}>Thu, April 16</h4>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: '600', fontSize: '15px', width: '30%' }}>Rent</span>
                <div style={{ backgroundColor: '#D92D20', padding: '4px 12px', borderRadius: '12px', fontSize: '10px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '5px', letterSpacing: '0.5px' }}>
                    🔑 RENT
                </div>
                <span style={{ fontWeight: '600', fontSize: '15px' }}>₹ 5,000</span>
            </div>
        </div>
    </motion.div>
);

const DashboardView = () => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
        <div style={{ backgroundColor: '#0B1B33', borderRadius: '24px', padding: '25px', textAlign: 'center', position: 'relative' }}>
            <h3 style={{ fontSize: '28px', fontWeight: '700', margin: '0 0 5px 0' }}>₹ 12,150 left</h3>
            <p style={{ color: '#788ba4', fontSize: '13px', margin: 0 }}>out of ₹ 17,150 budgeted</p>
            
            <div style={{ height: '140px', marginTop: '20px', position: 'relative' }}>
                <svg width="100%" height="100%" viewBox="0 0 300 120" preserveAspectRatio="none">
                    <path d="M0,80 L100,50 L180,70 L210,30 L250,30" fill="none" stroke="#2CD360" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M210,30 L220,10" fill="none" stroke="#F5A623" strokeWidth="4" strokeLinecap="round" />
                    <line x1="0" y1="100" x2="300" y2="40" stroke="#4A9FFF" strokeWidth="4" strokeDasharray="4 4" opacity="0.5" />
                    <circle cx="250" cy="30" r="8" fill="#2CD360" />
                </svg>
                <div style={{ position: 'absolute', right: '10px', top: '50px', backgroundColor: '#2CD360', color: 'black', padding: '4px 10px', borderRadius: '8px', fontSize: '12px', fontWeight: '700' }}>
                    ₹ 180 under
                </div>
            </div>
        </div>

        <div style={{ marginTop: '25px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <h4 style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#788ba4' }}>
                    To Review
                </h4>
                <span style={{ color: '#788ba4', fontSize: '12px', fontWeight: '500' }}>view all &gt;</span>
            </div>
            
            <div style={{ backgroundColor: '#0B1B33', borderRadius: '24px', padding: '20px' }}>
                <h5 style={{ textAlign: 'center', margin: '0 0 15px 0', color: '#788ba4', fontSize: '13px' }}>Yesterday</h5>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ backgroundColor: '#13213a', padding: '8px', borderRadius: '50%' }}><Activity size={14}/></div>
                        <span style={{ fontWeight: '600', fontSize: '14px' }}>Uber</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <div style={{ backgroundColor: '#5B21B6', padding: '4px 12px', borderRadius: '12px', fontSize: '11px', fontWeight: '600' }}>✈️ Travel</div>
                        <span style={{ fontWeight: '600', fontSize: '14px' }}>₹ 278</span>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ backgroundColor: '#13213a', padding: '8px', borderRadius: '50%' }}><Activity size={14}/></div>
                        <span style={{ fontWeight: '600', fontSize: '14px' }}>Taco Bell</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <div style={{ backgroundColor: '#2CD360', color: 'black', padding: '4px 12px', borderRadius: '12px', fontSize: '11px', fontWeight: '600' }}>🍴 Restaurant</div>
                        <span style={{ fontWeight: '600', fontSize: '14px' }}>₹ 194</span>
                    </div>
                </div>
                
                <div style={{ marginTop: '20px', textAlign: 'center', color: '#4A9FFF', fontWeight: '700', fontSize: '11px', letterSpacing: '1px' }}>
                    MARK AS REVIEWED
                </div>
            </div>
        </div>
    </motion.div>
);

const InvestmentsView = () => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
        <div style={{ backgroundColor: '#0B1B33', borderRadius: '24px', padding: '25px', textAlign: 'center', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '20px', left: '20px', color: '#2CD360', fontSize: '12px', fontWeight: '600' }}>5.96%</div>
            <div style={{ position: 'absolute', top: '20px', right: '20px', opacity: 0.5 }}><Settings size={18} /></div>
            
            <h3 style={{ fontSize: '32px', fontWeight: '700', margin: '15px 0 5px 0' }}>₹ 29,120</h3>
            <p style={{ color: '#788ba4', fontSize: '12px', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                live balance estimate <span style={{ opacity: 0.5 }}>?</span>
            </p>
            
            <div style={{ height: '100px', marginTop: '20px' }}>
                <svg width="100%" height="100%" viewBox="0 0 300 100" preserveAspectRatio="none">
                    <path d="M0,80 Q20,60 40,70 T80,40 T120,50 T160,30 T200,60 T240,40 T280,60" fill="none" stroke="#2CD360" strokeWidth="4" strokeLinecap="round" />
                    <circle cx="280" cy="60" r="7" fill="#2CD360" />
                </svg>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', color: '#788ba4', fontSize: '12px', marginTop: '10px', fontWeight: '600' }}>
                <span>1W</span><span>1M</span>
                <span style={{ backgroundColor: '#13213a', padding: '4px 12px', borderRadius: '12px', color: 'white' }}>3M</span>
                <span>YTD</span><span>1Y</span>
            </div>
        </div>

        <div style={{ marginTop: '25px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <h4 style={{ fontSize: '15px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <span style={{ opacity: 0.5 }}>▲</span> Your top movers today
                </h4>
                <span style={{ color: '#788ba4', fontSize: '12px', fontWeight: '500' }}>Last Price</span>
            </div>
            
            <div style={{ display: 'flex', gap: '15px' }}>
                <div style={{ flex: 1, backgroundColor: '#0B1B33', borderRadius: '20px', padding: '15px' }}>
                    <span style={{ fontWeight: '600', fontSize: '14px' }}>TCPL</span>
                    <div style={{ height: '50px', marginTop: '10px' }}>
                        <svg width="100%" height="100%" viewBox="0 0 100 50">
                            <path d="M0,10 L20,40 L40,30 L60,35 L100,30" fill="none" stroke="#D92D20" strokeWidth="3" />
                        </svg>
                    </div>
                    <div style={{ textAlign: 'center', color: '#D92D20', fontSize: '12px', fontWeight: '600', marginTop: '5px' }}>3.76%</div>
                </div>
                <div style={{ flex: 1, backgroundColor: '#0B1B33', borderRadius: '20px', padding: '15px' }}>
                    <span style={{ fontWeight: '600', fontSize: '14px' }}>Paytm</span>
                    <div style={{ height: '50px', marginTop: '10px' }}>
                        <svg width="100%" height="100%" viewBox="0 0 100 50">
                            <path d="M0,10 L30,40 L50,30 L70,35 L100,35" fill="none" stroke="#D92D20" strokeWidth="3" />
                        </svg>
                    </div>
                    <div style={{ textAlign: 'center', color: '#D92D20', fontSize: '12px', fontWeight: '600', marginTop: '5px' }}>2.25%</div>
                </div>
            </div>
        </div>
        
        <div style={{ marginTop: '25px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <h4 style={{ fontSize: '15px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <span style={{ opacity: 0.5 }}>▲</span> Accounts
                </h4>
                <span style={{ color: '#788ba4', fontSize: '12px', fontWeight: '500' }}>3M Return</span>
            </div>
            
            <div style={{ backgroundColor: '#0B1B33', borderRadius: '20px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: '600' }}>Zerodha</span>
                <div style={{ width: '80px', height: '30px' }}>
                     <svg width="100%" height="100%" viewBox="0 0 100 30">
                        <path d="M0,25 L20,20 L40,25 L60,10 L80,15 L100,5" fill="none" stroke="#2CD360" strokeWidth="2" />
                    </svg>
                </div>
                <span style={{ color: '#2CD360', fontWeight: '600', fontSize: '14px' }}>12.34%</span>
            </div>
        </div>
    </motion.div>
);

const AgentsView = () => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
        <div style={{ backgroundColor: '#0B1B33', borderRadius: '24px', padding: '25px', position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#788ba4', fontSize: '13px', fontWeight: '600' }}>
                    <Sparkles size={16} /> Agent OS
                </div>
                <RefreshCw size={16} color="#788ba4" />
            </div>
            
            <h3 style={{ fontSize: '24px', fontWeight: '700', margin: '0 0 10px 0' }}>Astra AI Agents</h3>
            <p style={{ color: '#788ba4', fontSize: '14px', margin: '0 0 20px 0', lineHeight: 1.5 }}>
                Live agents are monitoring spend, budget pressure, and pattern quality.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div style={{ backgroundColor: '#13213a', borderRadius: '16px', padding: '15px' }}>
                    <div style={{ color: '#788ba4', fontSize: '11px', marginBottom: '5px' }}>Net Flow</div>
                    <div style={{ fontSize: '18px', fontWeight: '700' }}>₹ -7,289</div>
                </div>
                <div style={{ backgroundColor: '#13213a', borderRadius: '16px', padding: '15px' }}>
                    <div style={{ color: '#788ba4', fontSize: '11px', marginBottom: '5px' }}>Outflow</div>
                    <div style={{ fontSize: '18px', fontWeight: '700' }}>₹ 7,289</div>
                </div>
                <div style={{ backgroundColor: '#13213a', borderRadius: '16px', padding: '15px' }}>
                    <div style={{ color: '#788ba4', fontSize: '11px', marginBottom: '5px' }}>Critical</div>
                    <div style={{ fontSize: '18px', fontWeight: '700' }}>1</div>
                </div>
                <div style={{ backgroundColor: '#13213a', borderRadius: '16px', padding: '15px' }}>
                    <div style={{ color: '#788ba4', fontSize: '11px', marginBottom: '5px' }}>Budget Risks</div>
                    <div style={{ fontSize: '18px', fontWeight: '700' }}>1</div>
                </div>
            </div>
        </div>
        
        <div style={{ marginTop: '20px', border: '1px solid #13213a', borderRadius: '24px', padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <h4 style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#788ba4', margin: 0 }}>Agent Training</h4>
                <div style={{ fontSize: '10px', color: '#4A9FFF', fontWeight: '600' }}>astra-local-intelligence-v1</div>
            </div>
            <p style={{ fontSize: '12px', color: '#788ba4', margin: '0 0 10px 0' }}>Prompt astra-prompt-v1 | 31 learned examples</p>
            <p style={{ fontSize: '12px', color: '#788ba4', margin: '0 0 15px 0' }}>Fine-tuned on 11 user corrections</p>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)', margin: 0, lineHeight: 1.5 }}>
                You are Astra Transaction Intelligence Agent. Goal: 1. Classify each money event into the best category. 2. Keep category assignment stable and expl...
            </p>
        </div>

        <div style={{ marginTop: '20px' }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <h4 style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#788ba4', margin: 0 }}>Agent Insights</h4>
                <span style={{ color: '#788ba4', fontSize: '12px' }}>2 active</span>
            </div>
            
            <div style={{ backgroundColor: '#0B1B33', borderRadius: '20px', padding: '20px', borderLeft: '4px solid #D92D20' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                    <div style={{ color: '#4A9FFF', fontSize: '12px', fontWeight: '600' }}>Budget Guard</div>
                    <div style={{ backgroundColor: 'rgba(217, 45, 32, 0.2)', color: '#D92D20', padding: '4px 10px', borderRadius: '10px', fontSize: '10px', border: '1px solid #D92D20' }}>Critical</div>
                </div>
                <h4 style={{ fontSize: '16px', fontWeight: '700', margin: '0 0 10px 0' }}>Streaming crossed budget limit</h4>
                <p style={{ fontSize: '12px', color: '#788ba4', margin: '0 0 5px 0' }}>₹ 2,289 spent of ₹ 200 assigned.</p>
                <p style={{ fontSize: '12px', color: '#788ba4', margin: '0 0 15px 0' }}>Streaming is over by ₹ 2,089. Rebalance or reduce this lane first.</p>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '12px', color: '#788ba4' }}>Confidence 95%</div>
                    <button style={{ backgroundColor: '#1E3A5F', color: '#4A9FFF', border: 'none', padding: '8px 16px', borderRadius: '20px', fontWeight: '600', fontSize: '12px' }}>Rebalance budget</button>
                </div>
            </div>
        </div>
    </motion.div>
);

export default AstraDemo;
