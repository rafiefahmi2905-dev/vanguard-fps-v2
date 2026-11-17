// ============================================================================
// VANGUARD PROTOCOL // Tactical FPS - Core Interactive Script
// Mencakup 11 konsep dasar JavaScript yang terintegrasi dengan index.html
// ============================================================================

// 1. Intro, Where To, & Output
console.log("SYSTEM INIT: Vanguard Protocol Tactical Engine v4.0 berhasil dimuat.");

// 2. Syntax, Statements, & Comments
// Konfigurasi awal server dan status pertandingan
const SERVER_REGION = "ASIA-SOUTHEAST (JAKARTA)";
let isMatchmaking = false;

// 3. Variables: var vs let vs const & 11. Arrays & Objects
const tacticalOperators = [
    {
        id: "spectre",
        nama: "SPECTRE",
        role: "DUELIST // ENTRY",
        hp: 100,
        shield: 50,
        difficulty: "Medium",
        signatureSkill: "Flashbang Surge",
        desc: "Spesialis penyusupan cepat dengan granat kilat dan mobilitas tinggi untuk memecah pertahanan musuh."
    },
    {
        id: "valkyrie",
        nama: "VALKYRIE",
        role: "RECON // INTEL",
        hp: 100,
        shield: 50,
        difficulty: "Hard",
        signatureSkill: "Thermal Scan Drone",
        desc: "Menggunakan drone pemindai termal untuk melacak posisi lawan menembus dinding."
    },
    {
        id: "bastion",
        nama: "BASTION",
        role: "SENTINEL // DEFENSE",
        hp: 100,
        shield: 75,
        difficulty: "Easy",
        signatureSkill: "Aegis Energy Barricade",
        desc: "Mengunci area objektif dengan ranjau sensor dan barikade energi anti-peluru."
    }
];

// 4. Data Types & Type Conversion
let rawPlayerMMR = "1850";
let playerMMR = Number(rawPlayerMMR); // Konversi string ke number

// 7. Numbers & Math
// Menghitung ping simulasi acak antara 12ms hingga 48ms
function getSimulatedPing() {
    return Math.floor(Math.random() * (48 - 12 + 1)) + 12;
}

// 10. Functions & Scope & 6. Strings & Template Literals
function formatOperatorBriefing(operator) {
    let totalEffectiveHP = operator.hp + operator.shield; // 5. Operators (Aritmatika)
    return `[BRIEFING AGEN: ${operator.nama}]\n` +
           `Role: ${operator.role}\n` +
           `Signature Skill: ${operator.signatureSkill}\n` +
           `Total Effective HP: ${totalEffectiveHP} (HP: ${operator.hp} + Shield: ${operator.shield})\n` +
           `Tingkat Kesulitan: ${operator.difficulty}`;
}

// 8. Conditions (if/else, switch)
function evaluateMatchmakingStatus(mmr) {
    if (mmr >= 2000) {
        return "Tier: RADIANT VANGUARD";
    } else if (mmr >= 1500) {
        return "Tier: TACTICAL ELITE";
    } else {
        return "Tier: OPERATIVE RECRUIT";
    }
}

// Eksekusi saat seluruh elemen DOM HTML selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
    console.info(`Connected to ${SERVER_REGION} | Ping: ${getSimulatedPing()}ms | ${evaluateMatchmakingStatus(playerMMR)}`);

    // 9. Loops (for...of) untuk mendata semua agen di console
    console.log("--- DAFTAR OPERATOR AKTIF ---");
    for (const op of tacticalOperators) {
        console.log(`> ${op.nama} (${op.role})`);
    }

    // Interaksi Tombol Hero ("DEPLOY NOW" & "WATCH TRAILER") dan Navbar ("PLAY FREE")
    const allButtons = document.querySelectorAll("button, a[href='#play']");
    
    allButtons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const buttonText = btn.textContent.trim();

            // 8. Conditions (switch) berdasarkan teks tombol yang diklik
            switch (buttonText) {
                case "DEPLOY NOW":
                case "PLAY FREE":
                    e.preventDefault();
                    if (!isMatchmaking) {
                        isMatchmaking = true;
                        const ping = getSimulatedPing();
                        alert(`MENCARI PERTANDINGAN 5v5...\nServer: ${SERVER_REGION}\nPing: ${ping}ms\nStatus: ${evaluateMatchmakingStatus(playerMMR)}`);
                        btn.textContent = "SEARCHING MATCH...";
                        btn.classList.add("animate-pulse");
                        
                        // Simulasi batal/reset setelah 4 detik
                        setTimeout(() => {
                            isMatchmaking = false;
                            btn.textContent = buttonText;
                            btn.classList.remove("animate-pulse");
                        }, 4000);
                    }
                    break;

                case "WATCH TRAILER":
                    alert("SEASON 04 // BLACKOUT PROTOCOL\nMemutar cuplikan sinematik taktis Vanguard Protocol...");
                    break;
            }
        });
    });

    // Interaksi Kartu Agents (Spectre, Valkyrie, Bastion)
    const agentCards = document.querySelectorAll("#agents .grid > div");
    
    agentCards.forEach((card, index) => {
        // Tambahkan kursor pointer agar terlihat bisa diklik
        card.style.cursor = "pointer";
        
        card.addEventListener("click", () => {
            // 5. Operators (===) & Pencocokan data array
            const selectedAgent = tacticalOperators[index];
            if (selectedAgent !== undefined) {
                alert(formatOperatorBriefing(selectedAgent));
            }
        });
    });
});