const MultiSiteAutomation = require('./multi_site_automation');

// Configurações de teste
const username = 'Luisa_sfd10';
const password = 'LUANLEVY17';
const targetUsername = 'comedor_di_primas';
const followerCount = 50; // Quantidade menor para teste

async function testSingleSite() {
    console.log("=== TESTE DE SITE INDIVIDUAL ===");
    console.log("Testando apenas o primeiro site (instamoda) para validação...");
    
    const automation = new MultiSiteAutomation(username, password);
    
    try {
        await automation.initBrowser();
        
        // Testar apenas o primeiro site da configuração
        const siteConfig = {
            name: "instamoda",
            baseUrl: "https://instamoda.org",
            loginUrl: "https://instamoda.org/login",
            sendFollowerUrl: "https://instamoda.org/tools/send-follower",
            selectors: {
                username: "input[placeholder=\"Kullanıcı adı\"]",
                password: "input[placeholder=\"Şifre\"]",
                loginButton: "button",
                targetUsername: "input[placeholder=\"fatihh\"]",
                findUserButton: "button",
                followerCount: "input[placeholder=\"50\"]",
                startButton: "button"
            },
            loginButtonText: "Giriş yap",
            findUserButtonText: "Kullanıcıyı Bul",
            startButtonText: ["Start", "Başla"]
        };
        
        const result = await automation.processSite(siteConfig, targetUsername, followerCount);
        
        if (result) {
            console.log("✅ TESTE PASSOU: Site processado com sucesso!");
        } else {
            console.log("❌ TESTE FALHOU: Erro no processamento do site");
        }
        
    } catch (error) {
        console.error("❌ ERRO NO TESTE:", error.message);
    } finally {
        await automation.closeBrowser();
        console.log("🔚 Teste finalizado");
    }
}

// Executar teste
testSingleSite().catch(error => {
    console.error("Erro fatal no teste:", error);
    process.exit(1);
});

