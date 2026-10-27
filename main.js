import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';

// Initialize Vercel Web Analytics
inject();

// Initialize Vercel Speed Insights
injectSpeedInsights();

// --- Mapjop AdMob Configuration ---
// App ID: ca-app-pub-3737361719169619~8191310822[span_1](start_span)[span_1](end_span)
// Rewarded Ad Unit ID: ca-app-pub-3737361719169619/1001070037[span_2](start_span)[span_2](end_span)

// --- Mapjop offline na online ad logic ---
document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculate-btn'); 
    
    if (calculateBtn) {
        calculateBtn.addEventListener('click', function(e) {
            
            // 1. Reba niba hari interineti
            if (navigator.onLine) {
                console.log("Interineti irahari, rekame irerekana...");
                
                // 2. Niba ihari, erekanira rekame mbere yo kubara
                showAdAndCalculate(() => {
                    executeActualCalculation();
                });
                
            } else {
                // 3. Niba nta interineti ihari (offline), kora ibarura ako kanya
                console.log("Offline mode: Kubara bikozwe ako kanya.");
                executeActualCalculation();
            }
        });
    }
});

// Aho rekame yerekanyirizwa
function showAdAndCalculate(onAdComplete) {
    // Gukoresha Rewarded Ad Unit ID yawe: ca-app-pub-3737361719169619/1001070037[span_3](start_span)[span_3](end_span)
    const REWARDED_AD_ID = "ca-app-pub-3737361719169619/1001070037";
    
    let adWatched = confirm("Rekame irimo gukinishwa... (Nyuma yo kuyireba urabona ibisubizo by'ibarura). ID: " + REWARDED_AD_ID);
    
    if (adWatched) {
        onAdComplete(); // Iyo urebye rekame, ibarura rirakomeza
    } else {
        alert("Wanze kureba rekame, bityo ibarura ntiriri bushyirwe ahagaragara.");
    }
}

// Imikorere y'ibarura nyirizina
function executeActualCalculation() {
    console.log("Ibisubizo by'ibarura birimo kugaragara...");
}
