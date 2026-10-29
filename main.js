import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';

// Initialize Vercel Web Analytics
inject();

// Initialize Vercel Speed Insights
injectSpeedInsights();

// --- Mapjop AdMob Configuration ---
// App ID: ca-app-pub-3757361719169619~6191316822
// Rewarded Ad Unit ID: ca-app-pub-3757361719169619/1001076037

document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculate-btn'); 
    
    if (calculateBtn) {
        calculateBtn.addEventListener('click', function(e) {
            
            // ১. চেক করা হচ্ছে ইন্টারনেটের সাথে কানেকশন আছে কি না
            if (navigator.onLine) {
                console.log("ইন্টারনেট কানেকশন আছে, অ্যাড দেখানো হচ্ছে...");
                
                // ২. অনলাইন থাকলে অ্যাড দেখিয়ে তারপর হিসাব দেখাবে
                showAdAndCalculate(() => {
                    executeActualCalculation();
                });
                
            } else {
                // ৩. অফলাইন থাকলে কোনো অ্যাড দেখাবে না, সরাসরি হিসাব করে ফলাফল দেবে
                console.log("অফলাইন মোড: সরাসরি হিসাব করা হচ্ছে।");
                executeActualCalculation();
            }
        });
    }
});

// অ্যাড প্রদর্শনের ফাংশন
function showAdAndCalculate(onAdComplete) {
    const REWARDED_AD_ID = "ca-app-pub-3757361719169619/1001076037";
    
    let adWatched = confirm("বিজ্ঞাপন চলছে... (বিজ্ঞাপনটি সম্পূর্ণ দেখলে হিসাব দেখতে পাবেন)। Ad ID: " + REWARDED_AD_ID);
    
    if (adWatched) {
        onAdComplete(); 
    } else {
        alert("বিজ্ঞাপন দেখা বাতিল করা হয়েছে, তাই হিসাব দেখানো যাচ্ছে না।");
    }
}

// আপনার মূল হিসাবের ফাংশন
function executeActualCalculation() {
    console.log("হিসাবের ফলাফল দেখানো হচ্ছে...");
}
